/* Local-first state: progress, star ledger, payouts, attendance, writing, exports, and
   a conflict-safe merge so the iPad and the MacBook never overwrite each other's work. */
(function (root) {
  'use strict';
  var Cal = (typeof require !== 'undefined' && typeof module !== 'undefined') ? require('./calendar.js') : root.Cal;

  var KEY = 'avaSchool.state.v1';
  var DEFAULT_RATE = 65, DEFAULT_CAP = 15; // see Parent → Stars & pay for how these were chosen

  function blank() {
    return {
      v: 1,
      device: 'dev-' + Math.random().toString(36).slice(2, 8),
      profile: { name: '', grade: 4 },
      settings: { starsPerDollar: DEFAULT_RATE, weeklyCapUSD: DEFAULT_CAP, moneyV: 2, pinHash: '', startDate: Cal.START, extraOff: [], makeup: [], priorDays: 0, sound: true, readAloud: true,
        dayMinutes: 270,   // minutes that make a day count toward Georgia's 180 (4.5 hours; lunch and breaks not counted)
        dayStart: '08:30', // clock time the daily schedule starts
        reqMins: {},       // v4: parent's required minutes per block key (missing = the block's schedule minutes)
        reqLesson: {},
        reqOn: false,        // v5: 'Per-assignment timers' on/off. Default OFF: she moves on when done and real tracked time is logged
        practiceStars: 1,    // v5: stars per correct Bonus practice item (max 10 per block a day; weekly cap still applies)
        reviewPct: 80,       // v5: Finish-my-day review: below this % an auto-graded assignment is flagged Redo
        redoBonus: true,     // v5: small bonus stars for fixing mistakes in a redo
        redoBonusStars: 1,   // v5: stars per fixed item (max 5 per redo)
        aiUrl: '',           // v5: optional AI writing-grading proxy URL (blank = off; the key lives only in the proxy)     // v4: parent's per-lesson override, lessonId -> minutes
        _u: 0 },
      progress: {},   // lessonId -> {done, date, score, right, total, secs, tries, _u}
      skills: {},     // skill -> {right, wrong, _u}
      ledger: {},     // id -> {id, ts, date, week, stars, why, lesson}
      payouts: {},    // weekMonday -> {week, usd, stars, paidAt, _u}
      attendance: {}, // date -> {mins, lessons, _u}   (legacy summary, still written so older app versions keep working)
      time: {},       // id -> {id, date, secs, subject, block, lesson, src, ts, _u}  (v3: every stretch of learning time; merged by id)
      writing: {},    // lessonId -> {text, ts, status:'draft'|'submitted'|'reviewed', feedback, _u}
      spelling: {},   // weekId -> {tests:[{ts, score, total, missed:[...]}], _u}
      bible: {},      // lessonId -> {reflection, ts, _u}
      memory: {},     // verseId -> {box, due, _u}  (Leitner spaced repetition)
      parentVerses: {}, // verseId -> NIV text pasted by parent
      badges: {},     // id -> {ts}
      readlog: {},    // lessonId -> {date, book, pages, summary, mins, ts, _u}  (v3 novel reading log)
      reqt: {},
      practice: {},   // v5: date -> block -> {right, total, _u}  Bonus practice results
      makeupLog: {},  // v11: date -> {date, on, _u}  every make-up day add/remove, merged per date so two devices keep both
      payday: {},     // v12: payoutId -> {id, date, ts, amount, weeks:{weekMonday: usd}, toSave, by, dev, void, _u}  (union by id across devices)
      behavior: {},   // v13: entryId -> {id, date, score 1-10, reasons:[Listening|Respect|Responsibility], note, by, dev, ts, removed, _u}
      moneyAdj: {},   // v13: id -> {id, date, ts, usd, stars, reason, kind:'deduct', by, dev, void, _u}  behavior deductions (union by id)
      reviews: {},    // v5: date -> Finish-my-day review {date, ts, items:{key:{...}}, done, celebrated, _u}       // v4: 'lessonId|date' -> {secs, _u}  seconds counted toward an assignment's required time
      streak: { last: '', n: 0, best: 0, _u: 0 },
      log: []         // small event log (last 200)
    };
  }

  var S = { state: blank(), listeners: [] };

  function now() { return Date.now(); }
  function mondayOf(dateIso) {
    var d = Cal.parse(dateIso), dow = (d.getDay() + 6) % 7; // Mon=0
    d.setDate(d.getDate() - dow); return Cal.iso(d);
  }

  // ---------- persistence ----------
  function load(storage) {
    try { var raw = (storage || S.storage || root.localStorage).getItem(KEY); if (raw) S.state = migrate(JSON.parse(raw)); } catch (e) { /* keep blank */ }
    return S.state;
  }
  // Only ADDS missing fields. Never removes or renames anything (unknown keys from newer versions are kept as-is).
  function migrate(st) {
    var b = blank(); st = st || {};
    for (var k in b) if (st[k] === undefined) st[k] = b[k];
    if (!st.settings || typeof st.settings !== 'object') st.settings = b.settings;
    var oldMoney = st.settings.moneyV === undefined;
    for (var s in b.settings) if (st.settings[s] === undefined) st.settings[s] = b.settings[s];
    // v3 money defaults: move untouched old defaults (50 stars/$, $10 cap) to the new ones. Custom values stay.
    if (oldMoney) { if (+st.settings.starsPerDollar === 50 && +st.settings.weeklyCapUSD === 10) { st.settings.starsPerDollar = DEFAULT_RATE; st.settings.weeklyCapUSD = DEFAULT_CAP; } st.settings.moneyV = 2; }
    return st;
  }
  var saveTimer = null;
  function save(storage) {
    S.state._saved = now();
    try { (storage || S.storage || root.localStorage).setItem(KEY, JSON.stringify(S.state)); } catch (e) { S.saveError = e; }
    S.listeners.forEach(function (f) { try { f(S.state); } catch (e) { } });
  }
  function onChange(f) { S.listeners.push(f); }

  // ---------- stars ----------
  // Stars for work done on a past school day go to THAT day's week, unless that week was already marked paid:
  // then they go to the current week (todayIso) so she is never left unpaid for them. origWeek records where it came from.
  function addStars(stars, why, lesson, dateIso, todayIso) {
    if (!stars) return null;
    var date = dateIso || Cal.iso(new Date()), id = now() + '-' + Math.random().toString(36).slice(2, 6), week = mondayOf(date), e;
    e = S.state.ledger[id] = { id: id, ts: now(), date: date, week: week, stars: stars, why: why, lesson: lesson || '' };
    var p = S.state.payouts[week]; if (todayIso && todayIso > date && p && p.paidAt) { e.week = mondayOf(todayIso); e.origWeek = week; }
    return e;
  }
  function weekStars(weekMonday) {
    var t = 0, L = S.state.ledger; for (var k in L) if (L[k].week === weekMonday) t += L[k].stars; return t;
  }
  // Money for a week: stars / starsPerDollar, rounded down to cents, capped.
  function weekMoney(weekMonday) {
    var st = S.state.settings, raw = weekStars(weekMonday) / st.starsPerDollar;
    var usd = Math.min(st.weeklyCapUSD, Math.floor(raw * 100) / 100);
    return { stars: weekStars(weekMonday), raw: Math.floor(raw * 100) / 100, usd: usd, capped: raw > st.weeklyCapUSD };
  }
  function totalOwed() { return unpaid(); }
  function totalOwedV11() {
    var owed = 0, st = S.state;
    var weeks = {}; for (var k in st.ledger) weeks[st.ledger[k].week] = 1;
    Object.keys(weeks).forEach(function (w) { var paid = st.payouts[w] && st.payouts[w].paidAt; if (!paid) owed += weekMoney(w).usd; });
    return Math.round(owed * 100) / 100;
  }
  // ---------- v12 payday: one payout covers every week with money still unpaid ----------
  // Each week's money is capped at the weekly max. Unpaid for a week = capped money - what payouts already paid for it,
  // so stars earned later in an already-paid week (or on another device during a payout) are never lost or paid twice.
  var PAY_FROM = '2026-10-12'; // Monday of the week Ava started (Oct 13 2026); earlier ledger rows were setup/testing
  function r2(n) { return Math.round(n * 100) / 100; }
  function payFrom() { return S.state.settings.payFrom || PAY_FROM; }
  function paidByWeek() {
    var o = {}, P = S.state.payday || {}, L = S.state.payouts || {}, w;
    for (var id in P) { var p = P[id]; if (!p || p.void) continue; for (w in (p.weeks || {})) o[w] = r2((o[w] || 0) + (+p.weeks[w] || 0)); }
    for (w in L) if (L[w] && L[w].paidAt && !L[w].payId) o[w] = r2((o[w] || 0) + (+L[w].usd || 0)); // paid with the v11 per-week button
    return o;
  }
  function unpaidWeeks() {
    var weeks = {}, from = payFrom(), pb = paidByWeek(), L = S.state.ledger; for (var k in L) if (L[k].week >= from) weeks[L[k].week] = 1;
    return Object.keys(weeks).sort().map(function (w) { var m = weekMoney(w), paid = pb[w] || 0; return { week: w, stars: m.stars, earned: m.usd, capped: m.capped, paid: paid, due: Math.max(0, r2(m.usd - paid)) }; });
  }
  function weeksDue() { var t = 0; unpaidWeeks().forEach(function (x) { t += x.due; }); return r2(t); }
  // ---------- v13 behavior ----------
  var REASONS = ['Listening', 'Respect', 'Responsibility'];
  function behDefault() { var d = +S.state.settings.behaviorDefault; return d >= 1 && d <= 10 ? Math.round(d) : 8; }
  function behEntries(dateIso) { var B = S.state.behavior || {}, out = []; for (var k in B) { var e = B[k]; if (e && !e.removed && (!dateIso || e.date === dateIso)) out.push(e); } return out.sort(function (a, b) { return (a.ts || 0) - (b.ts || 0) || (a.id < b.id ? -1 : 1); }); }
  function behLatest(dateIso) { var L = behEntries(dateIso); return L.length ? L[L.length - 1] : null; }
  function behScore(dateIso) { var e = behLatest(dateIso); return e ? e.score : behDefault(); }
  function addBehavior(dateIso, score, reasons, note, by) {
    var t = now(), id = newId('b'), B = S.state.behavior || (S.state.behavior = {});
    var e = B[id] = { id: id, date: dateIso, score: Math.max(1, Math.min(10, Math.round(+score) || behDefault())), reasons: (reasons || []).filter(function (r) { return REASONS.indexOf(r) >= 0; }), note: String(note || '').slice(0, 500), by: by || 'parent', dev: S.state.device, ts: t, _u: t };
    return e;
  }
  function removeBehavior(id) { var e = (S.state.behavior || {})[id]; if (!e) return; e.removed = true; e._u = Math.max(now(), (e._u || 0) + 1); }
  // average over the school days of a week (Mon-Fri on the calendar, up to `through`), missing days count as the default
  function behWeekAvg(weekMonday, throughIso) {
    var n = 0, t = 0; for (var i = 0; i < 7; i++) { var d = Cal.addDays(weekMonday, i); if (throughIso && d > throughIso) break; var has = !!behLatest(d); if (!has && !(Cal.isSchoolDay && Cal.isSchoolDay(d, S.state.settings))) continue; n++; t += behScore(d); }
    return n ? Math.round(10 * t / n) / 10 : null;
  }
  // ---------- v13 deductions and weekly behavior bonus ----------
  function deductions() { var A = S.state.moneyAdj || {}, out = []; for (var k in A) if (A[k] && !A[k].void && A[k].kind === 'deduct') out.push(A[k]); return out.sort(function (a, b) { return (a.ts || 0) - (b.ts || 0); }); }
  function adjApplied() { var o = {}; payList().forEach(function (p) { for (var k in (p.adj || {})) o[k] = r2((o[k] || 0) + (+p.adj[k] || 0)); }); return o; }
  function deductLeft(d, ap) { return Math.max(0, r2((+d.usd || 0) - ((ap || adjApplied())[d.id] || 0))); }
  function addDeduction(usd, stars, reason, dateIso, by) {
    var rate = +S.state.settings.starsPerDollar || DEFAULT_RATE, amt = stars ? r2(Math.abs(+stars) / rate) : r2(Math.abs(+usd || 0)); if (!amt || !String(reason || '').trim()) return null;
    var t = now(), id = newId('d'), A = S.state.moneyAdj || (S.state.moneyAdj = {});
    return (A[id] = { id: id, kind: 'deduct', date: dateIso || Cal.iso(new Date()), ts: t, usd: amt, stars: stars ? Math.abs(Math.round(+stars)) : 0, reason: String(reason).trim().slice(0, 200), by: by || 'parent', dev: S.state.device, _u: t });
  }
  // undo works until a payout has used the deduction (after that the money already changed hands)
  function undoDeduction(id) { var d = (S.state.moneyAdj || {})[id]; if (!d || d.void || adjApplied()[id]) return false; d.void = true; d._u = Math.max(now(), (d._u || 0) + 1); return true; }
  function bonusCfg() { var b = S.state.settings.behBonus || {}; return { on: !!b.on && +b.usd > 0, usd: r2(+b.usd || 0), min: +b.min || 9 }; }
  // a week qualifies once its Friday has come (today >= Friday) and its school-day average reaches the setting
  function bonusWeeks(todayIso) {
    var c = bonusCfg(), out = []; if (!c.on) return out; todayIso = todayIso || Cal.iso(new Date());
    var paid = {}; payList().forEach(function (p) { for (var w in (p.bonus || {})) paid[w] = r2((paid[w] || 0) + (+p.bonus[w] || 0)); });
    for (var w = mondayOf(payFrom() < '2000' ? todayIso : payFrom()); Cal.addDays(w, 4) <= todayIso; w = Cal.addDays(w, 7)) {
      var avg = behWeekAvg(w, Cal.addDays(w, 6) < todayIso ? null : todayIso); if (avg !== null && avg >= c.min) out.push({ week: w, avg: avg, usd: c.usd, paid: paid[w] || 0, due: Math.max(0, r2(c.usd - (paid[w] || 0))) });
    }
    return out;
  }
  function payBreakdown(todayIso) {
    var due = weeksDue(), bon = 0, bw = bonusWeeks(todayIso), ap = adjApplied(), ded = 0, ds = deductions();
    bw.forEach(function (x) { bon += x.due; }); ds.forEach(function (d) { ded += deductLeft(d, ap); });
    bon = r2(bon); ded = r2(ded); var gross = r2(due + bon), apply = Math.min(ded, gross);
    return { weeks: due, bonus: bon, bonusWeeks: bw, deductions: ded, deductList: ds, applied: r2(apply), carry: r2(ded - apply), net: Math.max(0, r2(gross - apply)) };
  }
  function unpaid(todayIso) { return payBreakdown(todayIso).net; }
  function payList() { var P = S.state.payday || {}; return Object.keys(P).map(function (k) { return P[k]; }).filter(function (p) { return p && !p.void; }).sort(function (a, b) { return (b.ts || 0) - (a.ts || 0); }); }
  function savedTotal() { var t = 0; payList().forEach(function (p) { t += +p.toSave || 0; }); return r2(t); }
  // The id is the next number in the payout chain (pay-1, pay-2, ...). Two devices that both press "Mark paid" from the
  // same starting point make the SAME id, so after a sync there is one payout, never two.
  function nextPayId() { var n = 0, P = S.state.payday || {}; for (var k in P) { var m = /^pay-(\d+)$/.exec(k); if (m && +m[1] > n) n = +m[1]; } return 'pay-' + (n + 1); }
  function payNow(by, toSave, todayIso) {
    var rows = unpaidWeeks().filter(function (x) { return x.due > 0; }), B = payBreakdown(todayIso), bw = B.bonusWeeks.filter(function (x) { return x.due > 0; });
    if (!rows.length && !bw.length) return null;
    var P = S.state.payday || (S.state.payday = {}), id = nextPayId(), t = now(), weeks = {}, bonus = {}, adj = {}, gross = 0;
    rows.forEach(function (x) { weeks[x.week] = x.due; gross += x.due; }); bw.forEach(function (x) { bonus[x.week] = x.due; gross += x.due; }); gross = r2(gross);
    var left = Math.min(B.deductions, gross), ap = adjApplied(); B.deductList.forEach(function (d) { var k = Math.min(left, deductLeft(d, ap)); if (k > 0) { adj[d.id] = r2(k); left = r2(left - k); } });
    var ded = 0; for (var k in adj) ded += adj[k]; ded = r2(ded); var amt = Math.max(0, r2(gross - ded));
    var rec = P[id] = { id: id, date: todayIso || Cal.iso(new Date()), ts: t, amount: amt, gross: gross, weeks: weeks, bonus: bonus, adj: adj, deducted: ded, toSave: Math.max(0, Math.min(amt, r2(+toSave || 0))), by: by || 'parent', dev: S.state.device, _u: t };
    // also mark the weeks paid in the v11 per-week map, so a not-yet-updated device shows them as paid too
    rows.forEach(function (x) { S.state.payouts[x.week] = { week: x.week, usd: r2(x.paid + x.due), stars: x.stars, paidAt: t, payId: id, _u: t }; });
    return rec;
  }
  function undoPay(id) {
    var p = (S.state.payday || {})[id]; if (!p || p.void) return false; var t = now(); p.void = true; p._u = Math.max(t, (p._u || 0) + 1);
    for (var w in S.state.payouts) { var x = S.state.payouts[w]; if (x && x.payId === id) { x.paidAt = 0; x._u = Math.max(t, (x._u || 0) + 1); } }
    return true;
  }
  function markPaid(weekMonday) {
    var m = weekMoney(weekMonday);
    S.state.payouts[weekMonday] = { week: weekMonday, usd: m.usd, stars: m.stars, paidAt: now(), _u: now() };
  }

  // Star values (kept in one place so the parent page can explain them honestly)
  var RULES = { firstTry: 2, secondTry: 1, afterSolution: 0, lessonComplete: 5, speedBonus: 10, perfectLesson: 5, fridayTestPerWord: 2, bibleReflection: 3, writingSubmitted: 8, writingReviewed: 12 };

  // ---------- skills / weak spots ----------
  function recordSkill(skill, correct) {
    var s = S.state.skills[skill] || (S.state.skills[skill] = { right: 0, wrong: 0, _u: 0 });
    if (correct) s.right++; else s.wrong++; s._u = now();
  }
  function weakSkills(minTries) {
    minTries = minTries || 4; var out = [];
    for (var k in S.state.skills) { var s = S.state.skills[k], t = s.right + s.wrong; if (t >= minTries && s.right / t < 0.7) out.push({ skill: k, pct: Math.round(100 * s.right / t), tries: t }); }
    return out.sort(function (a, b) { return a.pct - b.pct; });
  }

  // ---------- time + attendance / 180-day tracking ----------
  // Learning time is stored as separate entries with unique ids (S.state.time). Two devices never overwrite each other:
  // the merge keeps every id, and for the same id (one session that kept growing) keeps the larger value.
  function newId(prefix) { return (prefix || 't') + '-' + now().toString(36) + '-' + Math.random().toString(36).slice(2, 7); }
  // Create or grow one time entry. fields: {date, secs, subject, block, lesson, src}
  function logTime(id, fields) {
    var T = S.state.time || (S.state.time = {}), e = T[id];
    if (!e) e = T[id] = { id: id, date: fields.date, secs: 0, subject: fields.subject || '', block: fields.block || '', lesson: fields.lesson || '', src: fields.src || 'app', ts: now(), dev: S.state.device };
    if (fields.secs !== undefined) e.secs = Math.max(0, Math.round(fields.secs));
    if (fields.note) e.note = fields.note;
    e._u = now(); syncLegacy(e.date); return e;
  }
  function addTime(fields) { return logTime(newId(fields.src === 'parent' ? 'p' : 't'), fields); }
  function removeTime(id) { var e = S.state.time[id]; if (!e) return; if (e.secs > 0) e.prevSecs = e.secs; e.secs = 0; e.removed = true; e._u = Math.max(now(), (e._u || 0) + 1); syncLegacy(e.date); }
  // v14 undo a removal (same id, newer _u, so the merge keeps the restored copy on every device)
  function restoreTime(id) { var e = S.state.time[id]; if (!e || !e.removed || !e.prevSecs) return false; e.secs = e.prevSecs; delete e.removed; e._u = Math.max(now(), (e._u || 0) + 1); syncLegacy(e.date); return true; }
  // v14 offline minutes (field trips, read-alouds, sports...). Same records the kid app's Parent -> Overview has always
  // written: time entries with src 'parent' and a unique id, merged by id across devices. Both apps use these helpers.
  var OFFLINE = [['math', 'Math', 'math'], ['grammar', 'Grammar', 'grammar'], ['spelling', 'Spelling', 'spelling'], ['reading', 'Reading', 'novel'], ['science', 'Science', 'science'], ['social', 'History', 'social'], ['bible', 'Bible', 'bible'], ['music', 'Music', 'rotation'], ['pe', 'PE', 'pe'], ['fieldtrip', 'Field trip', 'fieldtrip'], ['writing', 'Writing', 'writing'], ['arts', 'Art', 'rotation']];
  function fillMins(dateIso) { return Math.max(0, threshold() - dayMinutes(dateIso)); }
  function addOffline(f) {
    var mins = Math.max(0, Math.min(720, Math.round(+f.mins || 0))); if (!mins || !/^\d{4}-\d\d-\d\d$/.test(f.date || '')) return null;
    var o = OFFLINE.filter(function (x) { return x[0] === f.subject; })[0] || OFFLINE[9];
    return addTime({ date: f.date, secs: mins * 60, subject: o[0], block: o[2], src: 'parent', note: String(f.note || '').trim().slice(0, 200), by: f.by });
  }
  function offlineEntries(dateIso, incRemoved) { var out = [], T = S.state.time || {}; for (var k in T) { var e = T[k]; if (e && e.src === 'parent' && (!dateIso || e.date === dateIso) && (incRemoved ? (e.secs > 0 || e.prevSecs) : (!e.removed && e.secs > 0))) out.push(e); } return out.sort(function (a, b) { return (a.ts || 0) - (b.ts || 0); }); }
  function offlineMins(dateIso) { var t = 0; offlineEntries(dateIso).forEach(function (e) { t += e.secs; }); return Math.floor(t / 60); }
  // v4: when an assignment was credited (src 'credit', id cr-<date>-<lesson>), that credit REPLACES the tap/timer time
  // logged for the same lesson on the same date, so nothing is counted twice (also across devices after a sync).
  function creditId(dateIso, lessonId) { return 'cr-' + dateIso + '-' + lessonId; }
  function shadowed(e, T) { return e.src !== 'credit' && e.src !== 'parent' && e.lesson && e.date && !!(T[creditId(e.date, e.lesson)] && !T[creditId(e.date, e.lesson)].removed && T[creditId(e.date, e.lesson)].secs > 0); }
  function live(e, T) { return e && !e.removed && e.secs > 0 && !shadowed(e, T); }
  function timeEntries(filter) { var out = [], T = S.state.time || {}; for (var k in T) { var e = T[k]; if (live(e, T) && (!filter || filter(e))) out.push(e); } return out; }
  function creditLesson(lessonId, dateIso, mins, fields) {
    fields = fields || {}; var id = creditId(dateIso, lessonId), e = S.state.time && S.state.time[id];
    if (e && !e.removed && e.secs > 0) return e; // already credited (maybe on the other device): never twice
    if (e && e.removed) { delete e.removed; }
    return logTime(id, { date: dateIso, secs: Math.max(0, Math.round(mins * 60)), subject: fields.subject, block: fields.block, lesson: lessonId, src: 'credit', note: fields.by === 'parent' ? 'parent override' : '' });
  }
  function credited(lessonId, dateIso) { var e = (S.state.time || {})[creditId(dateIso, lessonId)]; return !!(e && !e.removed && e.secs > 0); }
  function timeSecs(dateIso, filter) { var t = 0; timeEntries(function (e) { return e.date === dateIso && (!filter || filter(e)); }).forEach(function (e) { t += e.secs; }); return t; }
  // Legacy attendance[date].mins is still written for older app versions. It holds (minutes from time entries) + (minutes
  // only an older version logged). attendance[date].tmins remembers the time-entry part, so the old-version part is
  // mins - tmins. A day's minutes = time entries + old-version part: removing an entry really lowers the total, and
  // minutes logged by an un-updated device on the same day are added instead of hidden by a max().
  function legacyExtra(a) { return a ? Math.max(0, (+a.mins || 0) - (+a.tmins || 0)) : 0; }
  function dayMinutes(dateIso) { return Math.floor(timeSecs(dateIso) / 60) + legacyExtra(S.state.attendance[dateIso]); }
  function syncLegacy(dateIso) {
    if (!dateIso) return; var a = S.state.attendance[dateIso] || (S.state.attendance[dateIso] = { mins: 0, lessons: 0, _u: 0 });
    var t = Math.floor(timeSecs(dateIso) / 60), x = legacyExtra(a);
    if (a.tmins !== t || a.mins !== x + t) { a.mins = x + t; a.tmins = t; a._u = now(); }
  }
  // one pass over all time entries: date -> minutes (used by the yearly totals so they stay fast as entries pile up)
  function allDayMinutes() {
    var secs = {}, out = {}, T = S.state.time || {}, A = S.state.attendance || {}, d;
    for (var k in T) { var e = T[k]; if (live(e, T) && e.date) secs[e.date] = (secs[e.date] || 0) + e.secs; }
    for (d in A) out[d] = legacyExtra(A[d]);
    for (d in secs) out[d] = (out[d] || 0) + Math.floor(secs[d] / 60);
    return out;
  }
  function markAttendance(dateIso, minutes) {
    var a = S.state.attendance[dateIso] || (S.state.attendance[dateIso] = { mins: 0, lessons: 0, _u: 0 });
    if (minutes) addTime({ date: dateIso, secs: minutes * 60, src: 'app' });
    a.lessons++; a._u = now(); syncLegacy(dateIso);
  }
  function threshold() { var t = +S.state.settings.dayMinutes; return t > 0 ? t : 270; }
  // A day counts toward Georgia's 180 when its minutes reach the parent's threshold (default 270 = 4.5 hours).
  function dayCounts(dateIso) { return dayMinutes(dateIso) >= threshold(); }
  function datesWithTime() { return Object.keys(allDayMinutes()).sort(); }
  function daysCounted() {
    var n = +S.state.settings.priorDays || 0, M = allDayMinutes(), thr = threshold(); for (var d in M) if (M[d] >= thr) n++;
    return n;
  }
  function totalMinutes(fromIso, toIso) { var m = 0, M = allDayMinutes(); for (var d in M) if ((!fromIso || d >= fromIso) && (!toIso || d <= toIso)) m += M[d]; return m; }
  function totalHours(fromIso, toIso) { return Math.round(totalMinutes(fromIso, toIso) / 6) / 10; }
  function minutesBySubject(fromIso, toIso) { var o = {}; timeEntries(function (e) { return (!fromIso || e.date >= fromIso) && (!toIso || e.date <= toIso); }).forEach(function (e) { var k = e.subject || 'other'; o[k] = (o[k] || 0) + e.secs / 60; }); for (var k in o) o[k] = Math.round(o[k]); return o; }
  function blockSecs(dateIso, block) { return timeSecs(dateIso, function (e) { return e.block === block; }); }

  // ---------- streak ----------
  function touchStreak(dateIso) {
    var s = S.state.streak; if (s.last === dateIso) return s;
    var prev = Cal.nextSchoolDay(Cal.addDays(s.last || dateIso, 1), S.state.settings);
    s.n = (s.last && prev === dateIso) ? s.n + 1 : 1; s.last = dateIso; if (s.n > s.best) s.best = s.n; s._u = now(); return s;
  }

  // ---------- merge (for cloud sync and for importing a backup) ----------
  // Rule: records carry _u (updated-at). Newest wins per key. Ledger/ attendance minutes are union/max'd so nothing is lost.
  function mergeMap(a, b) {
    var out = {}, k; a = a || {}; b = b || {};
    for (k in a) out[k] = a[k];
    for (k in b) { if (!out[k] || ((b[k]._u || b[k].ts || 0) > (out[k]._u || out[k].ts || 0))) out[k] = b[k]; }
    return out;
  }
  function merge(local, remote) {
    if (!remote) return local;
    var m = migrate(JSON.parse(JSON.stringify(local))), r = migrate(JSON.parse(JSON.stringify(remote)));
    m.profile = (r.profile && r.profile.name && !m.profile.name) ? r.profile : m.profile;
    m.settings = (r.settings._u || 0) > (m.settings._u || 0) ? r.settings : m.settings;
    var KNOWN = ['v', 'device', 'profile', 'settings', 'progress', 'skills', 'ledger', 'payouts', 'attendance', 'time', 'writing', 'spelling', 'bible', 'memory', 'parentVerses', 'badges', 'readlog', 'reqt', 'reviews', 'streak', 'log', '_saved', 'makeupLog', 'practice', 'payday', 'behavior', 'moneyAdj'];
    // v5 reviews: per date and per item, newest wins; a passed redo or parent clear is never lost
    m.reviews = root.Review && root.Review.merge ? root.Review.merge(local.reviews || {}, remote.reviews || {}) : mergeMap(local.reviews, remote.reviews);
    // v4 required-time counters: per assignment keep the larger count (time only grows), never lose one
    m.reqt = {}; [m.reqt, local.reqt || {}, remote.reqt || {}].forEach(function (x) { for (var q in x) { var c = m.reqt[q], e = x[q]; if (e && (!c || (+e.secs || 0) > (+c.secs || 0))) m.reqt[q] = e; } });
    ['progress', 'skills', 'payouts', 'writing', 'spelling', 'bible', 'memory', 'parentVerses', 'badges', 'readlog'].forEach(function (k) { m[k] = mergeMap(m[k], r[k]); });
    // v11 make-up days: union per date, newest add/remove wins; days in either device's list survive unless removed later
    m.makeupLog = mergeMap(m.makeupLog, r.makeupLog);
    // v12 payday: union by payout id; the same id (both devices paid from the same point) keeps the newest copy
    m.payday = mergeMap(local.payday, remote.payday);
    // v13 behavior log + money deductions: union by entry id (two devices' entries are both kept), newest edit per id wins
    m.behavior = mergeMap(local.behavior, remote.behavior);
    m.moneyAdj = mergeMap(local.moneyAdj, remote.moneyAdj);
    (function () {
      var set = {}, ML = m.makeupLog || {}; [(local.settings || {}).makeup, (remote.settings || {}).makeup, m.settings.makeup].forEach(function (L) { (L || []).forEach(function (d) { set[d] = 1; }); });
      for (var d in ML) { if (ML[d] && ML[d].on) set[d] = 1; else if (ML[d] && ML[d].on === false) delete set[d]; }
      var L2 = Object.keys(set).sort(); if (JSON.stringify(L2) !== JSON.stringify((m.settings.makeup || []).slice().sort())) { m.settings = Object.assign({}, m.settings, { makeup: L2 }); }
    })();
    // v5 bonus practice: date -> block -> {right,total,_u}; newest per block wins (was handled as an unknown key before)
    m.practice = {}; [local.practice || {}, remote.practice || {}].forEach(function (x) { for (var d in x) { var c = m.practice[d] || (m.practice[d] = {}); for (var b in x[d]) { var e = x[d][b]; if (!c[b] || ((e && e._u) || 0) > ((c[b] && c[b]._u) || 0)) c[b] = e; } } });
    // keys this version does not know (added by a newer version): keep them, never drop them
    Object.keys(r).forEach(function (k) {
      if (KNOWN.indexOf(k) >= 0) return;
      if (m[k] === undefined) m[k] = r[k];
      else if (m[k] && r[k] && typeof m[k] === 'object' && typeof r[k] === 'object' && !Array.isArray(m[k]) && !Array.isArray(r[k])) m[k] = mergeMap(m[k], r[k]);
    });
    // time entries: union by id; the same id is one growing session, so keep the larger amount
    m.time = {}; [local.time || {}, remote.time || {}].forEach(function (x) { for (var id in x) { var c = m.time[id], e = x[id]; if (!c) m.time[id] = e; else { var keep = (e.removed || c.removed) ? (((e._u || 0) > (c._u || 0) || ((e._u || 0) === (c._u || 0) && e.removed)) ? e : c) : (e.secs > c.secs ? e : c); m.time[id] = keep; } } });
    // progress: never let a merge un-complete a lesson, keep best score
    for (var id in m.progress) { var lp = local.progress && local.progress[id], rp = remote.progress && remote.progress[id]; if ((lp && lp.done) || (rp && rp.done)) { if (!m.progress[id].done) m.progress[id] = (lp && lp.done) ? lp : rp; m.progress[id].done = true; } }
    // skills: counts only grow; take max of each side (same events seen on both devices) – safe & conservative
    for (var sk in m.skills) { var a = local.skills && local.skills[sk], b = remote.skills && remote.skills[sk]; if (a && b) { m.skills[sk] = { right: Math.max(a.right, b.right), wrong: Math.max(a.wrong, b.wrong), _u: Math.max(a._u || 0, b._u || 0) }; } }
    // ledger: union by unique id (stars are never lost or double-counted)
    m.ledger = {}; var L = [local.ledger || {}, remote.ledger || {}]; L.forEach(function (x) { for (var k in x) m.ledger[k] = x[k]; });
    // attendance: per day take the larger minutes
    m.attendance = {}; [local.attendance || {}, remote.attendance || {}].forEach(function (x) { for (var d in x) { var c = m.attendance[d]; if (!c || x[d].mins > c.mins) m.attendance[d] = Object.assign({}, x[d]); if (x[d].counted) m.attendance[d].counted = true; } });
    m.streak = (r.streak.best > m.streak.best || r.streak.last > m.streak.last) ? r.streak : m.streak;
    var seen = {}; m.log = (m.log || []).concat(r.log || []).filter(function (x) { var k = JSON.stringify(x); if (seen[k]) return false; seen[k] = 1; return true; }).sort(function (a, b) { return a.ts - b.ts; }).slice(-200);
    return m;
  }
  // After a sync, reuse this device's own objects wherever the merged copy has the same content. Open screens hold
  // references (a journal being typed, the settings object); without this a background sync would detach them and
  // the next keystrokes or "Turn it in" would be written to an orphaned copy and lost.
  function adopt(next, prev) {
    if (!next || !prev) return next;
    Object.keys(next).forEach(function (k) {
      var a = next[k], b = prev[k];
      if (!a || !b || typeof a !== 'object' || typeof b !== 'object' || Array.isArray(a) || Array.isArray(b)) return;
      if (JSON.stringify(a) === JSON.stringify(b)) { next[k] = b; return; }
      for (var id in a) { if (b[id] && typeof a[id] === 'object' && JSON.stringify(a[id]) === JSON.stringify(b[id])) a[id] = b[id]; }
    });
    return next;
  }

  // ---------- exports ----------
  function exportAll() {
    return JSON.stringify({ app: 'Ava School', exportedAt: new Date().toISOString(), kind: 'full-backup', state: S.state }, null, 1);
  }
  function importAll(text) {
    var obj = JSON.parse(text); if (!obj || !obj.state || obj.app !== 'Ava School') throw new Error('This file is not an Ava School backup.');
    S.state = merge(S.state, migrate(obj.state)); return S.state;
  }
  function progressRows(filterFn) {
    var rows = [], P = S.state.progress;
    Object.keys(P).sort().forEach(function (id) { var p = P[id]; if (filterFn && !filterFn(id, p)) return; rows.push([p.date || '', id, p.done ? 'done' : 'started', p.right + '/' + p.total, p.secs || 0, p.tries || 1]); });
    return rows;
  }
  function toCSV(rows, header) { var esc = function (v) { v = String(v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }; return [header].concat(rows).map(function (r) { return r.map(esc).join(','); }).join('\n'); }
  function exportCSV(filterFn) { return toCSV(progressRows(filterFn), ['date', 'lesson', 'status', 'score', 'seconds', 'tries']); }
  function exportRange(fromIso, toIso) {
    return JSON.stringify({ app: 'Ava School', kind: 'range-report', from: fromIso, to: toIso, exportedAt: new Date().toISOString(),
      progress: Object.keys(S.state.progress).filter(function (k) { var d = S.state.progress[k].date; return d >= fromIso && d <= toIso; }).map(function (k) { return Object.assign({ id: k }, S.state.progress[k]); }),
      attendance: datesWithTime().filter(function (d) { return d >= fromIso && d <= toIso; }).map(function (d) { return { date: d, minutes: dayMinutes(d), counts: dayCounts(d), lessons: (S.state.attendance[d] || {}).lessons || 0 }; }),
      time: timeEntries(function (e) { return e.date >= fromIso && e.date <= toIso; }),
      assessments: (root.Assess ? root.Assess.results(S.state, fromIso, toIso) : []),
      writing: S.state.writing, skills: S.state.skills }, null, 1);
  }

  async function hashPin(pin) {
    var data = new TextEncoder().encode('ava-school:' + pin), buf = await crypto.subtle.digest('SHA-256', data);
    return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
  }

  var api = {
    S: S, blank: blank, load: load, save: save, onChange: onChange, now: now, mondayOf: mondayOf,
    addStars: addStars, weekStars: weekStars, weekMoney: weekMoney, totalOwed: totalOwed, markPaid: markPaid, RULES: RULES, unpaid: unpaid, weeksDue: weeksDue, payBreakdown: payBreakdown, bonusWeeks: bonusWeeks, bonusCfg: bonusCfg, addDeduction: addDeduction, undoDeduction: undoDeduction, deductions: deductions, adjApplied: adjApplied, deductLeft: deductLeft, REASONS: REASONS, behDefault: behDefault, behEntries: behEntries, behLatest: behLatest, behScore: behScore, addBehavior: addBehavior, removeBehavior: removeBehavior, behWeekAvg: behWeekAvg, unpaidWeeks: unpaidWeeks, paidByWeek: paidByWeek, payNow: payNow, undoPay: undoPay, payList: payList, savedTotal: savedTotal, nextPayId: nextPayId, payFrom: payFrom, PAY_FROM: PAY_FROM,
    recordSkill: recordSkill, weakSkills: weakSkills, markAttendance: markAttendance, daysCounted: daysCounted, totalHours: totalHours,
    newId: newId, logTime: logTime, addTime: addTime, removeTime: removeTime, restoreTime: restoreTime, OFFLINE: OFFLINE, fillMins: fillMins, addOffline: addOffline, offlineEntries: offlineEntries, offlineMins: offlineMins, timeEntries: timeEntries, timeSecs: timeSecs, dayMinutes: dayMinutes, dayCounts: dayCounts, threshold: threshold,
    datesWithTime: datesWithTime, totalMinutes: totalMinutes, minutesBySubject: minutesBySubject, blockSecs: blockSecs, DEFAULT_RATE: DEFAULT_RATE, DEFAULT_CAP: DEFAULT_CAP,
    creditLesson: creditLesson, credited: credited, creditId: creditId,
    touchStreak: touchStreak, merge: merge, adopt: adopt, allDayMinutes: allDayMinutes, exportAll: exportAll, importAll: importAll, exportCSV: exportCSV, exportRange: exportRange, hashPin: hashPin,
    get state() { return S.state; }, set state(v) { S.state = v; }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Store = api;
})(typeof window !== 'undefined' ? window : globalThis);
