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
  function removeTime(id) { var e = S.state.time[id]; if (!e) return; e.secs = 0; e.removed = true; e._u = now(); syncLegacy(e.date); }
  function timeEntries(filter) { var out = [], T = S.state.time || {}; for (var k in T) { var e = T[k]; if (!e.removed && e.secs > 0 && (!filter || filter(e))) out.push(e); } return out; }
  function timeSecs(dateIso, filter) { var t = 0; timeEntries(function (e) { return e.date === dateIso && (!filter || filter(e)); }).forEach(function (e) { t += e.secs; }); return t; }
  // Minutes for a day = the larger of (sum of time entries) and the legacy minutes field (older versions only wrote that).
  function dayMinutes(dateIso) { var a = S.state.attendance[dateIso]; return Math.max(Math.floor(timeSecs(dateIso) / 60), (a && a.mins) || 0); }
  function syncLegacy(dateIso) { if (!dateIso) return; var a = S.state.attendance[dateIso] || (S.state.attendance[dateIso] = { mins: 0, lessons: 0, _u: 0 }); var m = Math.floor(timeSecs(dateIso) / 60); if (m > a.mins) { a.mins = m; a._u = now(); } }
  function markAttendance(dateIso, minutes) {
    var a = S.state.attendance[dateIso] || (S.state.attendance[dateIso] = { mins: 0, lessons: 0, _u: 0 });
    if (minutes) addTime({ date: dateIso, secs: minutes * 60, src: 'app' });
    a.lessons++; a._u = now(); syncLegacy(dateIso);
  }
  function threshold() { var t = +S.state.settings.dayMinutes; return t > 0 ? t : 270; }
  // A day counts toward Georgia's 180 when its minutes reach the parent's threshold (default 270 = 4.5 hours).
  function dayCounts(dateIso) { return dayMinutes(dateIso) >= threshold(); }
  function datesWithTime() { var d = {}; for (var k in S.state.attendance) d[k] = 1; timeEntries().forEach(function (e) { d[e.date] = 1; }); return Object.keys(d).sort(); }
  function daysCounted() {
    var n = S.state.settings.priorDays || 0; datesWithTime().forEach(function (d) { if (dayCounts(d)) n++; });
    return n;
  }
  function totalMinutes(fromIso, toIso) { var m = 0; datesWithTime().forEach(function (d) { if ((!fromIso || d >= fromIso) && (!toIso || d <= toIso)) m += dayMinutes(d); }); return m; }
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
    var KNOWN = ['v', 'device', 'profile', 'settings', 'progress', 'skills', 'ledger', 'payouts', 'attendance', 'time', 'writing', 'spelling', 'bible', 'memory', 'parentVerses', 'badges', 'streak', 'log', '_saved'];
    ['progress', 'skills', 'payouts', 'writing', 'spelling', 'bible', 'memory', 'parentVerses', 'badges'].forEach(function (k) { m[k] = mergeMap(m[k], r[k]); });
    // keys this version does not know (added by a newer version): keep them, never drop them
    Object.keys(r).forEach(function (k) {
      if (KNOWN.indexOf(k) >= 0) return;
      if (m[k] === undefined) m[k] = r[k];
      else if (m[k] && r[k] && typeof m[k] === 'object' && typeof r[k] === 'object' && !Array.isArray(m[k]) && !Array.isArray(r[k])) m[k] = mergeMap(m[k], r[k]);
    });
    // time entries: union by id; the same id is one growing session, so keep the larger amount
    m.time = {}; [local.time || {}, remote.time || {}].forEach(function (x) { for (var id in x) { var c = m.time[id], e = x[id]; if (!c) m.time[id] = e; else { var keep = (e.removed || c.removed) ? ((e._u || 0) > (c._u || 0) ? e : c) : (e.secs > c.secs ? e : c); m.time[id] = keep; } } });
    // progress: never let a merge un-complete a lesson, keep best score
    for (var id in m.progress) { var lp = local.progress && local.progress[id], rp = remote.progress && remote.progress[id]; if ((lp && lp.done) || (rp && rp.done)) m.progress[id].done = true; }
    // skills: counts only grow; take max of each side (same events seen on both devices) – safe & conservative
    for (var sk in m.skills) { var a = local.skills && local.skills[sk], b = remote.skills && remote.skills[sk]; if (a && b) { m.skills[sk] = { right: Math.max(a.right, b.right), wrong: Math.max(a.wrong, b.wrong), _u: Math.max(a._u || 0, b._u || 0) }; } }
    // ledger: union by unique id (stars are never lost or double-counted)
    m.ledger = {}; var L = [local.ledger || {}, remote.ledger || {}]; L.forEach(function (x) { for (var k in x) m.ledger[k] = x[k]; });
    // attendance: per day take the larger minutes
    m.attendance = {}; [local.attendance || {}, remote.attendance || {}].forEach(function (x) { for (var d in x) { var c = m.attendance[d]; if (!c || x[d].mins > c.mins) m.attendance[d] = Object.assign({}, x[d]); if (x[d].counted) m.attendance[d].counted = true; } });
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
      attendance: datesWithTime().filter(function (d) { return d >= fromIso && d <= toIso; }).map(function (d) { return { date: d, minutes: dayMinutes(d), counts: dayCounts(d), lessons: (S.state.attendance[d] || {}).lessons || 0 }; }),
      time: timeEntries(function (e) { return e.date >= fromIso && e.date <= toIso; }),
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
    newId: newId, logTime: logTime, addTime: addTime, removeTime: removeTime, timeEntries: timeEntries, timeSecs: timeSecs, dayMinutes: dayMinutes, dayCounts: dayCounts, threshold: threshold,
    datesWithTime: datesWithTime, totalMinutes: totalMinutes, minutesBySubject: minutesBySubject, blockSecs: blockSecs, DEFAULT_RATE: DEFAULT_RATE, DEFAULT_CAP: DEFAULT_CAP,
    touchStreak: touchStreak, merge: merge, exportAll: exportAll, importAll: importAll, exportCSV: exportCSV, exportRange: exportRange, hashPin: hashPin,
    get state() { return S.state; }, set state(v) { S.state = v; }
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Store = api;
})(typeof window !== 'undefined' ? window : globalThis);
