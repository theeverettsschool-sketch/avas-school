/* v11 Make-up day planner + weekly parent summary. No DOM (unit-tested in Node).
   Make-up days live in settings.makeup (as before). Every add/remove is also written to state.makeupLog[date]
   = {date, on, _u}, which Store.merge unions per date (newest wins), so two devices never drop each other's days. */
(function (root) {
  'use strict';
  var isNode = typeof require !== 'undefined' && typeof module !== 'undefined';
  var Cal = isNode ? require('./calendar.js') : root.Cal;
  function St() { return root.Store || (isNode ? require('./store.js') : null); }
  var SKIP = { 'Holiday': 1, 'MLK Jr. Holiday': 1, 'Memorial Day': 1 }; // real holidays: never suggested
  var SKIP_MD = ['11-26', '11-27', '12-24', '12-25', '12-31', '01-01', '07-04', '07-05', '09-06']; // Thanksgiving, Christmas, New Year, July 4th, Labor Day
  var SUMMER_END = '2027-08-31';

  function opts() { return St().state.settings; }
  function inList(L, d) { return (L || []).indexOf(d) >= 0; }
  // days that count toward 180 if everything planned gets done
  function status(today, o) {
    o = o || opts(); var S = St(), prior = +o.priorDays || 0, start = Cal.startOf(o);
    var inYear = Cal.schoolDays(Object.assign({}, o, { through: Cal.LAST_DAY })).length;
    var summer = (o.makeup || []).filter(function (d) { return d > Cal.LAST_DAY && d >= start; }).length;
    var planned = prior + inYear + summer, need = Cal.REQUIRED_DAYS, short = Math.max(0, need - planned);
    var counted = S.daysCounted(), added = (o.makeup || []).filter(function (d) { return d >= start; }).length;
    return { need: need, prior: prior, inYear: inYear, summer: summer, planned: planned, short: short, counted: counted, makeupAdded: added, pctCounted: Math.min(100, Math.round(100 * counted / need)), pctPlanned: Math.min(100, Math.round(100 * planned / need)), today: today };
  }
  // specific dates to suggest: Saturdays and Fulton break days after today through May 27, then summer weekdays.
  // Ranked so family holidays come last: ordinary Saturdays and short breaks first, then summer, then Thanksgiving and
  // December break days. The picked days are shown in date order.
  var HOLIDAY_WEEKS = { 'Thanksgiving Break': 1, 'December Break / New Year': 1 };
  function rankOf(d, why) {
    if (why === 'Saturday') { var fri = Cal.offReason(Cal.addDays(d, -1), []), mon = Cal.offReason(Cal.addDays(d, 2), []); return (HOLIDAY_WEEKS[fri] || HOLIDAY_WEEKS[mon]) ? 4 : 2; }
    if (why === 'Summer') return 3; if (HOLIDAY_WEEKS[why]) return 5; return 1;
  }
  function candidates(today, o) {
    var out = [], d = Cal.addDays(today, 1), start = Cal.startOf(o); if (d < start) d = start;
    for (var i = 0; i < 400 && d <= SUMMER_END; i++, d = Cal.addDays(d, 1)) {
      if (inList(o.makeup, d) || inList(o.extraOff, d)) continue;
      if (SKIP_MD.indexOf(d.slice(5)) >= 0) continue;
      var dow = Cal.parse(d).getDay(), r = Cal.offReason(d, []);
      if (d <= Cal.LAST_DAY) {
        if (dow === 0) continue;
        if (dow === 6) { out.push({ date: d, why: 'Saturday' }); continue; }
        if (r && !SKIP[r] && r !== 'Weekend') out.push({ date: d, why: r });
      } else if (dow >= 1 && dow <= 5 && d > '2027-05-31') out.push({ date: d, why: 'Summer' });
    }
    out.forEach(function (x, i) { x.rank = rankOf(x.date, x.why); x.i = i; });
    return out;
  }
  function suggestions(today, o, max) {
    o = o || opts(); var st = status(today, o), n = max || st.short; if (!n) return [];
    var c = candidates(today, o); c.sort(function (a, b) { return a.rank - b.rank || a.i - b.i; });
    return c.slice(0, n).sort(function (a, b) { return a.date < b.date ? -1 : 1; }).map(function (x) { return { date: x.date, why: x.why }; });
  }
  // make-up days that only count if added: after May 27 the calendar treats weekdays as school days on its own (summer
  // weekdays are not in Fulton's off list), so an added summer day must be in settings.makeup to be counted by status().
  function setMakeup(date, on) {
    var S = St(), st = S.state, s = st.settings, L = (s.makeup || []).slice(), i = L.indexOf(date);
    if (on && i < 0) L.push(date); if (!on && i >= 0) L.splice(i, 1);
    s.makeup = L.sort(); s._u = S.now();
    var M = st.makeupLog || (st.makeupLog = {}), prev = M[date]; M[date] = { date: date, on: !!on, _u: Math.max(S.now(), ((prev && prev._u) || 0) + 1), dev: st.device }; // always newer than the last change, even in the same millisecond
  }
  function addAll(list) { list.forEach(function (x) { setMakeup(x.date || x, true); }); }

  // ---------- weekly parent summary ----------
  function fmt(m) { m = Math.round(m); return m >= 60 ? Math.floor(m / 60) + ' h ' + (m % 60) + ' min' : m + ' min'; }
  function weekSummary(today) {
    var S = St(), st = S.state, o = st.settings, mon = S.mondayOf(today), sun = Cal.addDays(mon, 6), days = [], counted = 0, total = 0;
    for (var i = 0; i < 7; i++) { var d = Cal.addDays(mon, i), mins = S.dayMinutes(d), school = Cal.isSchoolDay(d, o); if (!school && !mins) continue; var c = S.dayCounts(d); if (c) counted++; total += mins; days.push({ date: d, label: Cal.pretty(d), mins: mins, counts: c, school: school, future: d > today }); }
    var scores = root.Assess ? root.Assess.results(st, mon, sun) : [];
    var flags = []; Object.keys(st.reviews || {}).forEach(function (d) { if (d < mon || d > sun) return; var rev = st.reviews[d]; Object.keys(rev.items || {}).forEach(function (k) { var it = rev.items[k]; if (!it.flag) return; var res = it.cleared ? 'cleared by you' : it.redo && it.redo.passed ? 'fixed' : 'still to fix'; flags.push({ date: d, title: it.title + (it.what ? ' (' + it.what + ')' : ''), kind: it.kind === 'auto' ? 'Redo' : 'Try again', state: res }); }); });
    var money = S.weekMoney(mon), paid = st.payouts[mon] && st.payouts[mon].paidAt;
    var lessons = 0; Object.keys(st.progress).forEach(function (k) { var p = st.progress[k]; if (p.done && p.date >= mon && p.date <= sun && !/^x-/.test(k)) lessons++; });
    var r = { week: mon, through: sun, days: days, counted: counted, totalMins: total, scores: scores, flags: flags, stars: money.stars, usd: money.usd, capped: money.capped, paid: !!paid, lessons: lessons, daysCounted: S.daysCounted() };
    r.text = summaryText(r, st); return r;
  }
  function summaryText(r, st) {
    var name = (st.profile && st.profile.name) || 'Ava', L = [];
    L.push(name + "'s School: week of " + Cal.pretty(r.week).replace(/^\w+, /, '') + ' to ' + Cal.pretty(r.through).replace(/^\w+, /, ''));
    L.push(''); L.push('Hours by day:');
    r.days.forEach(function (d) { L.push('  ' + d.label + ': ' + fmt(d.mins) + (d.counts ? ' (counts toward 180)' : d.future ? ' (coming up)' : '')); });
    L.push('Total this week: ' + fmt(r.totalMins) + '. Days counted this week: ' + r.counted + '. School year so far: ' + r.daysCounted + ' of 180 days.');
    L.push('Lessons finished: ' + r.lessons + '.');
    L.push(''); L.push('Quizzes and tests:'); if (!r.scores.length) L.push('  None finished this week.'); r.scores.forEach(function (s) { L.push('  ' + s.kind + ' ' + s.date + ': ' + s.right + '/' + s.total + ' (' + s.pct + '%) first try' + (s.missed ? ', ' + s.missed + ' to practice' : '')); });
    L.push(''); L.push('Flagged or redo items:'); if (!r.flags.length) L.push('  None.'); r.flags.forEach(function (f) { L.push('  ' + f.date + ' ' + f.kind + ': ' + f.title + ' (' + f.state + ')'); });
    L.push(''); L.push('Stars: ' + r.stars + ' = $' + r.usd.toFixed(2) + (r.capped ? ' (weekly max)' : '') + (r.paid ? ', paid' : ', not paid yet') + '.');
    return L.join('\n');
  }

  var Planner = { status: status, suggestions: suggestions, setMakeup: setMakeup, addAll: addAll, weekSummary: weekSummary, summaryText: summaryText, fmt: fmt };
  if (isNode) module.exports = Planner; else root.Planner = Planner;
})(typeof window !== 'undefined' ? window : globalThis);
