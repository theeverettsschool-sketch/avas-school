/* v11 Weekly quiz (curriculum Friday) + monthly test (last school day of each month).
   No DOM (unit-tested in Node). Ids are additive and never reuse a lesson id:
     quiz-YYYY-MM-DD  (about 12-14 questions, ~20 min) and test-YYYY-MM (about 30 questions, ~45 min).
   They are normal auto-graded 'lesson' items, so scores land in progress[id], missed items feed the
   Finish-my-day redo, and Assess.missedFor() feeds them into the practice rounds (same day and next school day).
   When the monthly test falls on a quiz Friday, the test takes the quiz's place (it already covers that week). */
(function (root) {
  'use strict';
  var isNode = typeof require !== 'undefined' && typeof module !== 'undefined';
  var C = isNode ? require('./content/core.js') : root.Content;
  var Cal = isNode ? require('./calendar.js') : root.Cal;
  var Plan = isNode ? require('./content/plan.js') : root.Plan;
  var Gen = isNode ? require('./gen.js') : root.Gen;
  var Schedule = isNode ? require('./schedule.js') : root.Schedule;
  var ROLES = ['mon', 'tue', 'wed', 'thu', 'fri'];
  if (C.SUBJECTS && !C.SUBJECTS.quiz) C.SUBJECTS.quiz = { name: 'Quiz and test', color: '#7a4fd0', icon: '📝' };

  function hash(s) { var x = 5381; for (var i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) >>> 0; return x; }
  function rng(id) { return Gen.mk(hash(id) % 1000003 + 1); }
  function take(arr, n, S) { return S.shuffle(arr.slice()).slice(0, Math.min(n, arr.length)); }
  function noPassage(q) { return q && q.kind !== 'open' && !/\b(passage|story|article|poem|play|text|paragraph|author|narrator|reading)\b/i.test(q.q || ''); }
  function copy(x) { return JSON.parse(JSON.stringify(x)); }
  function tag(q, blk, src) { q = copy(q); q.blk = blk; q.from = src; return q; }

  // ---------- which days ----------
  function settingsOf(opts) { return opts || (root.Store && root.Store.state && root.Store.state.settings) || {}; }
  function slotFor(date, opts) { var n = Schedule.dayNum(date, opts); return n ? Schedule.slotOf(n) : null; }
  function isMonthEnd(date, opts) {
    if (!Schedule.dayNum(date, opts)) return false;
    var nx = Cal.nextSchoolDay(Cal.addDays(date, 1), opts); return !nx || nx.slice(0, 7) !== date.slice(0, 7);
  }
  function monday(date) { var d = Cal.parse(date), dow = (d.getDay() + 6) % 7; return Cal.addDays(date, -dow); }
  // the last school day of each calendar week (usually Friday; a holiday Friday moves it to Thursday, a Saturday make-up day moves it to Saturday)
  function isQuizDay(date, opts) { if (!Schedule.dayNum(date, opts)) return false; var nx = Cal.nextSchoolDay(Cal.addDays(date, 1), opts); return !nx || monday(nx) !== monday(date); }
  // curriculum weeks taught in the calendar week of this date
  function weeksOfCalWeek(date, opts) { var m = monday(date), seen = {}, out = []; for (var i = 0; i < 7; i++) { var d = Cal.addDays(m, i), n = d <= date ? Schedule.dayNum(d, opts) : 0; if (n) { var w = Schedule.slotOf(n).week; if (!seen[w]) { seen[w] = 1; out.push(w); } } } return out; }
  // last school day of a month (YYYY-MM), or null
  function monthEnd(ym, opts) {
    var d = Cal.addDays(ym + '-01', 40).slice(0, 7) + '-01', last = null; d = Cal.addDays(d, -1); // last calendar day
    var L = Schedule.dateOfDay(1, opts); if (!L) return null;
    for (var i = 0; i < 31 && d.slice(0, 7) === ym; i++) { if (Schedule.dayNum(d, opts)) { last = d; break; } d = Cal.addDays(d, -1); }
    return last;
  }
  // the assessment lesson id for a date, or null
  function idFor(date, opts) { opts = settingsOf(opts); if (isMonthEnd(date, opts)) return 'test-' + date.slice(0, 7); if (isQuizDay(date, opts)) return 'quiz-' + date; return null; }
  function dateFor(id, opts) {
    opts = settingsOf(opts); var m = /^quiz-(\d{4}-\d\d-\d\d)$/.exec(id); if (m) return m[1];
    m = /^test-(\d{4}-\d\d)$/.exec(id); return m ? monthEnd(m[1], opts) : null;
  }

  // ---------- question pools for one curriculum week ----------
  function mathTopics(W) {
    var m = Plan.MATH && Plan.MATH[W], out = []; if (!m) { var x = Plan.MATH && Plan.MATH[27 + (W - 27) % 10]; m = W > 37 ? x : null; } if (!m) return out;
    ROLES.forEach(function (r) { var s = m[r]; if (!s) return; var ts = typeof s === 'string' ? [s] : Array.isArray(s) ? s : (s.review || s.test || []); ts.forEach(function (t) { if (out.indexOf(t) < 0 && String(t).indexOf('fluency') !== 0 && Gen.TOPICS.indexOf(t) >= 0) out.push(t); }); });
    return out;
  }
  function written(W, subject) { var out = [], wk = C.weeks && C.weeks[W]; if (!wk) return out; ROLES.forEach(function (r) { (wk[r] || []).forEach(function (id) { var l = C.lessons[id]; if (l && l.subject === subject && l.items) out = out.concat(l.items); }); }); return out; }
  function bankItems(subject, W) { var u = Schedule.bank(subject, W); var a = (u && u.items) ? u.items : []; return a.concat(written(W, subject)).filter(noPassage); }
  function spellWords(W) { if (C.spelling && C.spelling[W]) return C.spelling[W].words || []; var u = Schedule.bank('spelling', W); return (u && u.words) || []; }
  function spellQs(W, n, S, src) {
    var out = []; take(spellWords(W), n * 2, S).forEach(function (w) {
      if (Array.isArray(w)) w = w[0]; w = String(w || '');
      if (out.length >= n) return; var bad = Schedule.misspell(w, S); if (bad.length < 2) return;
      var q = C.Q('Which word is spelled correctly?', [w].concat(bad.slice(0, 3)), 0, '“' + w + '” is the right spelling. Say it slowly and picture each letter.', 'Look closely at the middle and the ending of each word.');
      q.skill = 'spelling'; out.push(tag(q, 'grammar', src));
    });
    return out;
  }
  function mathQs(W, n, S, seed, src) {
    var ts = mathTopics(W), out = []; if (!ts.length) return out; ts = S.shuffle(ts);
    for (var i = 0; out.length < n && i < n * 3; i++) { try { var p = Gen.make(ts[i % ts.length], 1, seed + i * 41)[0]; if (p) out.push(tag(p, 'math', src)); } catch (e) { } }
    return out;
  }
  // mix for one week. counts: {math, grammar, spell, science, social}
  function weekMix(W, k, S, seed, src) {
    var out = [];
    out = out.concat(mathQs(W, k.math, S, seed, src));
    out = out.concat(take(bankItems('grammar', W), k.grammar, S).map(function (q) { return tag(q, 'grammar', src); }));
    out = out.concat(spellQs(W, k.spell, S, src));
    out = out.concat(take(bankItems('science', W), k.science, S).map(function (q) { return tag(q, 'science', src); }));
    out = out.concat(take(bankItems('social', W), k.social, S).map(function (q) { return tag(q, 'social', src); }));
    return out;
  }
  function weeksInMonth(ym, opts) {
    var L = Cal.schoolDays(Object.assign({}, opts, { through: Cal.addDays(ym + '-01', 31) })), seen = {}, out = [];
    L.forEach(function (d) { if (d.slice(0, 7) !== ym) return; var s = Schedule.slotOf(Schedule.dayNum(d, opts)); if (s && !seen[s.week]) { seen[s.week] = 1; out.push(s.week); } });
    return out;
  }

  // ---------- build ----------
  var cache = {};
  function build(id, opts) {
    opts = settingsOf(opts); var key = id + '|' + JSON.stringify([opts.startDate || '', opts.extraOff || [], opts.makeup || []]); if (cache[key]) return copy(cache[key]);
    var date = dateFor(id, opts); if (!date) return null; var s = slotFor(date, opts);
    // a saved quiz whose day stopped being a school day (calendar changed later) still opens, using the school day before it
    if (!s) { var back = date; for (var b = 0; b < 14 && !s; b++) { back = Cal.addDays(back, -1); s = slotFor(back, opts); } if (!s) return null; }
    var S = rng(id), seed = hash(id) % 90000 + 11, L;
    if (/^quiz-/.test(id)) {
      var wks = weeksOfCalWeek(date, opts); if (!wks.length) wks = [s.week];
      var k1 = wks.length > 1 ? { math: 2, grammar: 2, spell: 2, science: 1, social: 1 } : { math: 4, grammar: 3, spell: 3, science: 2, social: 2 }, items = [];
      wks.slice(-2).forEach(function (W, i) { items = items.concat(weekMix(W, k1, S, seed + i * 53, 'week ' + W)); });
      if (items.length < 10 && s.week > 1) items = items.concat(weekMix(s.week - 1, { math: 2, grammar: 1, spell: 1, science: 1, social: 1 }, S, seed + 7, 'week ' + (s.week - 1)));
      L = { id: id, quiz: true, assess: 'quiz', subject: 'quiz', type: 'lesson', block: 'assess', core: false, mins: 20, icon: '📝', title: 'Weekly quiz: week ' + s.week,
        learn: [{ h: 'Quiz time! 📝', p: 'This short quiz mixes math, grammar, spelling, and science or history from this week. Take your time, read each question carefully, and do your best. Any you miss come back later for practice, so missing one is how you learn.' }],
        items: S.shuffle(items).slice(0, 15) };
    } else {
      var ym = id.slice(5), weeks = weeksInMonth(ym, opts), all = [], per = Math.max(1, weeks.length);
      var each = { math: Math.ceil(8 / per), grammar: Math.ceil(6 / per), spell: Math.ceil(5 / per), science: Math.ceil(4 / per), social: Math.ceil(4 / per) };
      weeks.forEach(function (W, i) { all = all.concat(weekMix(W, each, S, seed + i * 101, 'week ' + W)); });
      var earlier = []; for (var w = 1; w < (weeks[0] || 1); w++) earlier.push(w);
      var old = []; take(earlier, 5, S).forEach(function (W, i) { old = old.concat(weekMix(W, { math: 1, grammar: 1, spell: 0, science: 1, social: 0 }, S, seed + 900 + i * 13, 'earlier: week ' + W)); });
      var mon = (Cal.pretty(date).split(', ')[1] || '').split(' ')[0] || ym;
      L = { id: id, test: true, assess: 'test', subject: 'quiz', type: 'lesson', block: 'assess', core: false, mins: 45, icon: '🏆', title: 'Monthly test: ' + mon,
        learn: [{ h: 'Monthly test 🏆', p: 'This test shows how much you have learned in ' + mon + '. It mixes math, grammar, spelling, science, and history, plus a few questions from earlier months. It takes about 45 minutes. Take a stretch break halfway if you need one. You have got this!' }],
        items: S.shuffle(all).slice(0, 30).concat(take(old, 5, S)) };
    }
    if (!L.items.length) return null;
    cache[key] = L; return copy(L);
  }
  var lastOpts = {}; // id -> settings the day plan last used for it, so find(id) returns exactly what the day showed
  function find(id) { return /^(quiz-\d{4}-\d\d-\d\d|test-\d{4}-\d\d)$/.test(id) ? build(id, lastOpts[id]) : null; }
  function forDay(date, opts) { var id = idFor(date, opts); if (id && opts) lastOpts[id] = opts; return id ? build(id, opts) : null; }

  // missed questions from quizzes/tests on this date and the previous school day, for one practice block
  function missedFor(date, block, st) {
    st = st || (root.Store && root.Store.state); if (!st) return []; var opts = st.settings, out = [], dates = [date];
    var n = Schedule.dayNum(date, opts); if (n > 1) dates.push(Schedule.dateOfDay(n - 1, opts));
    dates.forEach(function (d) { var id = d && idFor(d, opts), p = id && st.progress[id]; if (!p) return; (p.missed || (p.hold && p.hold.missed) || []).forEach(function (q) { if (q && q.kind !== 'open' && (!block || q.blk === block)) out.push(q); }); });
    return out;
  }
  // every finished quiz/test, newest first (for Parent → Progress, reports, exports)
  function results(st, fromIso, toIso) {
    st = st || (root.Store && root.Store.state); var P = (st && st.progress) || {}, out = [];
    Object.keys(P).forEach(function (id) { if (!/^(quiz|test)-/.test(id)) return; var p = P[id]; if (!p || !p.done) return; if (fromIso && p.date < fromIso) return; if (toIso && p.date > toIso) return;
      var right = Math.min(p.total || 0, (p.right || 0) + (p.r2 || 0)); out.push({ id: id, kind: /^quiz/.test(id) ? 'Quiz' : 'Test', date: p.date, right: p.right || 0, firstTry: p.right || 0, total: p.total || 0, pct: p.total ? Math.round(100 * (p.right || 0) / p.total) : 0, mins: Math.round((p.secs || 0) / 60), missed: (p.missed || []).length }); });
    return out.sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); });
  }

  // ---------- hook into the day plan ----------
  function wrapDay(day, date, opts) {
    if (!day || !day.n || !day.blocks) return day; var L = forDay(date, opts); if (!L) return day;
    if (day.blocks.some(function (b) { return b.key === 'assess'; })) return day;
    var last = day.blocks[day.blocks.length - 1], t = Schedule.timeToMin((function () { var m = String(last.end || '').match(/^(\d+):(\d\d) (AM|PM)$/); if (!m) return '15:00'; var hh = (+m[1] % 12) + (m[3] === 'PM' ? 12 : 0); return (hh < 10 ? '0' : '') + hh + ':' + m[2]; })());
    var b = { key: 'assess', name: L.quiz ? 'Friday quiz' : 'Monthly test', icon: L.icon, mins: L.mins, subject: 'quiz', start: Schedule.minToTime(t), end: Schedule.minToTime(t + L.mins), items: [L], _date: date, assess: true };
    day.blocks = day.blocks.concat([b]); day.lessons = day.lessons.concat([L]); return day;
  }
  if (!Plan._v11wrapped) {
    var baseForDate = Plan.forDate, baseFind = Plan.find, baseDate = Schedule.dateForLesson;
    Plan.forDate = Schedule.forDate = function (date, opts) { return wrapDay(baseForDate(date, opts), date, opts || settingsOf()); };
    Plan.find = Schedule.find = function (id) { return find(id) || baseFind(id); };
    Schedule.dateForLesson = function (id, opts) { return /^(quiz|test)-/.test(id) ? dateFor(id, opts) : baseDate(id, opts); };
    Plan._v11wrapped = true;
  }

  var Assess = { idFor: idFor, dateFor: dateFor, build: build, find: find, forDay: forDay, isQuizDay: isQuizDay, isMonthEnd: isMonthEnd, monthEnd: monthEnd, missedFor: missedFor, results: results, mathTopics: mathTopics, weeksInMonth: weeksInMonth };
  if (isNode) module.exports = Assess; else root.Assess = Assess;
})(typeof window !== 'undefined' ? window : globalThis);
