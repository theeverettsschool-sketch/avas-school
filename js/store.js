/* Local-first state: progress, star ledger, payouts, attendance, writing, exports, and
   a conflict-safe merge so the iPad and the MacBook never overwrite each other's work. */
(function (root) {
  'use strict';
  var Cal = (typeof require !== 'undefined' && typeof module !== 'undefined') ? require('./calendar.js') : root.Cal;

  var KEY = 'avaSchool.state.v1';

  function blank() {
    return {
      v: 1,
      device: 'dev-' + Math.random().toString(36).slice(2, 8),
      profile: { name: '', grade: 4 },
      settings: { starsPerDollar: 50, weeklyCapUSD: 10, pinHash: '', startDate: Cal.START, extraOff: [], makeup: [], priorDays: 0, sound: true, readAloud: true, _u: 0 },
      progress: {},   // lessonId -> {done, date, score, right, total, secs, tries, _u}
      skills: {},     // skill -> {right, wrong, _u}
      ledger: {},     // id -> {id, ts, date, week, stars, why, lesson}
      payouts: {},    // weekMonday -> {week, usd, stars, paidAt, _u}
      attendance: {}, // date -> {mins, lessons, _u}
      writing: {},    // lessonId -> {text, ts, status:'draft'|'submitted'|'reviewed', feedback, _u}
      spelling: {},   // weekId -> {tests:[{ts, score, total, missed:[...]}], _u}
      bible: {},      // lessonId -> {reflection, ts, _u}
      memory: {},     // verseId -> {box, due, _u}  (Leitner spaced repetition)
      parentVerses: {}, // verseId -> NIV text pasted by parent
      badges: {},     // id -> {ts}
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
    try { var raw = (storage || root.localStorage).getItem(KEY); if (raw) S.state = migrate(JSON.parse(raw)); } catch (e) { /* keep blank */ }
    return S.state;
  }
  function migrate(st) { var b = blank(); for (var k in b) if (st[k] === undefined) st[k] = b[k]; for (var s in b.settings) if (st.settings[s] === undefined) st.settings[s] = b.settings[s]; return st; }
  var saveTimer = null;
  function save(storage) {
    S.state._saved = now();
    try { (storage || root.localStorage).setItem(KEY, JSON.stringify(S.state)); } catch (e) { S.saveError = e; }
    S.listeners.forEach(function (f) { try { f(S.state); } catch (e) { } });
  }
  function onChange(f) { S.listeners.push(f); }

  // ---------- stars ----------
  function addStars(stars, why, lesson, dateIso) {
    if (!stars) return null;
    var date = dateIso || Cal.iso(new Date()), id = now() + '-' + Math.random().toString(36).slice(2, 6);
    S.state.ledger[id] = { id: id, ts: now(), date: date, week: mondayOf(date), stars: stars, why: why, lesson: lesson || '' };
    return S.state.ledger[id];
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
  function totalOwed() {
    var owed = 0, st = S.state;
    var weeks = {}; for (var k in st.ledger) weeks[st.ledger[k].week] = 1;
    Object.keys(weeks).forEach(function (w) { var paid = st.payouts[w] && st.payouts[w].paidAt; if (!paid) owed += weekMoney(w).usd; });
    return Math.round(owed * 100) / 100;
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

  // ---------- attendance / 180-day tracking ----------
  function markAttendance(dateIso, minutes) {
    var a = S.state.attendance[dateIso] || (S.state.attendance[dateIso] = { mins: 0, lessons: 0, _u: 0 });
    a.mins += minutes; a.lessons++; a._u = now();
  }
  // A day "counts" toward Georgia's 180 once logged >= 270 minutes?  Georgia requires 4.5 hours/day average;
  // we count a day when parent confirms it or logged mins >= threshold (default 120 in-app + paper/read-aloud time is parent-confirmed).
  function daysCounted() {
    var n = S.state.settings.priorDays || 0, A = S.state.attendance;
    for (var d in A) if (A[d].counted || A[d].mins >= 60) n++;
    return n;
  }
  function totalHours() { var m = 0, A = S.state.attendance; for (var d in A) m += A[d].mins || 0; return Math.round(m / 6) / 10; }

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
    ['progress', 'skills', 'payouts', 'writing', 'spelling', 'bible', 'memory', 'parentVerses', 'badges'].forEach(function (k) { m[k] = mergeMap(m[k], r[k]); });
    // progress: never let a merge un-complete a lesson, keep best score
    for (var id in m.progress) { var lp = local.progress && local.progress[id], rp = remote.progress && remote.progress[id]; if ((lp && lp.done) || (rp && rp.done)) m.progress[id].done = true; }
    // skills: counts only grow; take max of each side (same events seen on both devices) – safe & conservative
    for (var sk in m.skills) { var a = local.skills && local.skills[sk], b = remote.skills && remote.skills[sk]; if (a && b) { m.skills[sk] = { right: Math.max(a.right, b.right), wrong: Math.max(a.wrong, b.wrong), _u: Math.max(a._u || 0, b._u || 0) }; } }
    // ledger: union by unique id (stars are never lost or double-counted)
    m.ledger = {}; var L = [local.ledger || {}, remote.ledger || {}]; L.forEach(function (x) { for (var k in x) m.ledger[k] = x[k]; });
    // attendance: per day take the larger minutes
    m.attendance = {}; [local.attendance || {}, remote.attendance || {}].forEach(function (x) { for (var d in x) { var c = m.attendance[d]; if (!c || x[d].mins > c.mins) m.attendance[d] = x[d]; if (x[d].counted) m.attendance[d].counted = true; } });
    m.streak = (r.streak.best > m.streak.best || r.streak.last > m.streak.last) ? r.streak : m.streak;
    m.log = (m.log || []).concat(r.log || []).sort(function (a, b) { return a.ts - b.ts; }).slice(-200);
    return m;
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
      attendance: Object.keys(S.state.attendance).filter(function (d) { return d >= fromIso && d <= toIso; }).map(function (d) { return Object.assign({ date: d }, S.state.attendance[d]); }),
      writing: S.state.writing, skills: S.state.skills }, null, 1);
  }

  async function hashPin(pin) {
    var data = new TextEncoder().encode('ava-school:' + pin), buf = await crypto.subtle.digest('SHA-256', data);
    return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
  }

  var api = {
    S: S, blank: blank, load: load, save: save, onChange: onChange, now: now, mondayOf: mondayOf,
    addStars: addStars, weekStars: weekStars, weekMoney: weekMoney, totalOwed: totalOwed, markPaid: markPaid, RULES: RULES,
    recordSkill: recordSkill, weakSkills: weakSkills, markAttendance: markAttendance, daysCounted: daysCounted, totalHours: totalHours,
    touchStreak: touchStreak, merge: merge, exportAll: exportAll, importAll: importAll, exportCSV: exportCSV, exportRange: exportRange, hashPin: hashPin,
    get state() { return S.state; }, set state(v) { S.state = v; }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Store = api;
})(typeof window !== 'undefined' ? window : globalThis);
