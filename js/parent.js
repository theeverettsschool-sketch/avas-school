/* Parent area (PIN-gated): overview, review queue, progress, payouts, backups/exports, sync, settings, report. */
(function (root) {
  'use strict';
  var h = UI.h, S = function () { return Store.state; };
  var Parent = { tab: 'overview' };
  var TABS = [['overview', 'Overview'], ['review', 'Review'], ['progress', 'Progress'], ['pay', 'Stars & pay'], ['backup', 'Backup'], ['settings', 'Settings'], ['help', 'Plan & help']];

  Parent.backupDue = function () {
    var last = S().settings.lastExport || 0, any = Object.keys(S().progress).some(function (k) { return S().progress[k].done && S().progress[k]._u > last; });
    return any && (Date.now() - last > 6 * 86400000 || !last);
  };
  Parent.reviewCount = function () { var n = 0, W = S().writing; for (var k in W) if (W[k].status === 'submitted') n++; return n; };

  Parent.open = function (tab) {
    UI.requirePin(function () { Parent.tab = tab || Parent.tab; Parent.render(); }, function () { UI.go('/'); });
  };

  Parent.render = function () {
    var body = h('div'), tabs = h('div', { class: 'tabs', role: 'tablist' }, TABS.map(function (t) {
      var badge = t[0] === 'review' && Parent.reviewCount() ? ' (' + Parent.reviewCount() + ')' : t[0] === 'backup' && Parent.backupDue() ? ' •' : '';
      return h('button', { role: 'tab', 'aria-selected': Parent.tab === t[0] ? 'true' : 'false', onclick: function () { Parent.tab = t[0]; Parent.render(); } }, t[1] + badge);
    }));
    var fn = { overview: overview, review: review, progress: progress, pay: pay, backup: backup, settings: settings, help: help }[Parent.tab];
    body.appendChild(fn());
    UI.render(Home.topbar(), h('main', { class: 'wrap wide' }, h('h1', { style: { marginTop: '18px' } }, 'Parent area'), tabs, body));
  };

  function stat(label, value, sub) { return h('div', { class: 'card', style: { flex: '1', minWidth: '180px', marginBottom: 0 } }, h('div', { class: 'muted small' }, label), h('div', { style: { fontSize: '1.8rem', fontWeight: 800 } }, value), sub ? h('div', { class: 'small muted' }, sub) : null); }

  // ============ OVERVIEW ============
  function overview() {
    var st = S(), today = UI.today(), wk = Store.mondayOf(today), m = Store.weekMoney(wk), proj = Cal.projection(0, st.settings), counted = Store.daysCounted();
    var att = st.attendance[today] || { mins: 0 }, info = Plan.forDate(today, st.settings), doneToday = info.lessons.filter(function (l) { return st.progress[l.id] && st.progress[l.id].done; }).length;
    var box = h('div');
    if (Parent.backupDue()) box.appendChild(h('div', { class: 'fb info' }, h('b', { class: 'h' }, 'Backup reminder'), 'There is new progress since your last saved copy. ', h('button', { class: 'btn small', onclick: function () { Parent.tab = 'backup'; Parent.render(); } }, 'Go to Backup')));
    box.appendChild(h('div', { class: 'row', style: { alignItems: 'stretch' } }, stat('Today', doneToday + ' / ' + info.lessons.length, att.mins + ' min in the app'), stat('Stars this week', m.stars, UI.money(m.usd) + (m.capped ? ' (capped)' : '')), stat('Owed to her', UI.money(Store.totalOwed()), 'from unpaid weeks'), stat('Days counted', counted + ' / 180', Store.totalHours() + ' hours in-app')));
    // today count
    var minsIn = h('input', { class: 'f-in', type: 'number', min: 0, max: 600, value: 0, style: { width: '110px', display: 'inline-block' }, 'aria-label': 'Extra minutes learned away from the app' });
    var isCounted = st.attendance[today] && st.attendance[today].counted;
    box.appendChild(h('div', { class: 'card', style: { marginTop: '14px' } }, h('h3', null, 'Count today toward the 180 days'), h('p', null, 'Georgia asks for 180 days averaging 4.5 hours. The app counts what she does here. Add paper work, read-aloud time, art, PE, and book reading, then confirm the day.'),
      h('div', { class: 'row' }, h('label', null, 'Extra minutes away from the app: '), minsIn, h('button', { class: 'btn small gold', onclick: function () { var a = st.attendance[today] || (st.attendance[today] = { mins: 0, lessons: 0, _u: 0 }); a.mins += Math.max(0, +minsIn.value || 0); a.counted = true; a._u = Store.now(); UI.commit(); UI.toast('Today is counted.'); Parent.render(); } }, isCounted ? 'Update' : 'Count today'), isCounted ? h('span', { class: 'badge ok' }, 'Counted') : null)));
    // 180-day projection
    box.appendChild(h('div', { class: 'card' }, h('h3', null, '180-day plan'), h('p', null, 'Fulton calendar days from ', Cal.pretty(Cal.START), ' through May 27: ', h('b', null, proj.scheduledByMay27), '. Georgia needs 180 total school days in your home-study year.'),
      h('p', null, st.settings.priorDays ? 'You entered ' + st.settings.priorDays + ' days already completed earlier this year. ' : 'You have not entered earlier days yet (Settings → Calendar). ', 'With those, you are short by about ', h('b', null, Math.max(0, 180 - (st.settings.priorDays || 0) - proj.scheduledByMay27)), ' days. ',
        (180 - (st.settings.priorDays || 0) - proj.scheduledByMay27) > 0 ? 'Add make-up days (Saturdays, breaks, summer) in Settings → Calendar. Without make-up days the 180th day lands on ' + Cal.pretty(Cal.dateOfDay(180 - (st.settings.priorDays || 0), st.settings) || '2027-07-30') + '.' : 'You are on track.')));
    // weak spots
    var weak = Store.weakSkills(), rushed = Object.keys(st.progress).filter(function (k) { return st.progress[k].rushed >= 3; });
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Skills to watch'), weak.length ? h('table', null, h('tbody', null, weak.map(function (w) { return h('tr', null, h('td', null, w.skill.replace(/-/g, ' ')), h('td', null, w.pct + '% right'), h('td', { class: 'muted' }, w.tries + ' tries')); }))) : h('p', { class: 'muted' }, 'Nothing flagged yet. Skills show here once she has 4+ tries at 70% or lower. They also come back automatically as warm-ups.'),
      rushed.length ? h('p', { class: 'small' }, '⚠️ Rapid guessing was noticed in: ' + rushed.map(function (k) { return k; }).join(', ')) : null));
    // recent
    var recent = st.log.slice(-8).reverse();
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Recent activity'), recent.length ? h('table', null, h('tbody', null, recent.map(function (e) { return h('tr', null, h('td', null, new Date(e.ts).toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })), h('td', null, e.id), h('td', null, e.pct + '%'), h('td', null, '+' + e.stars + ' ⭐')); }))) : h('p', { class: 'muted' }, 'Nothing yet.')));
    return box;
  }

  // ============ REVIEW ============
  function review() {
    var W = S().writing, list = Object.keys(W).map(function (k) { return Object.assign({ key: k }, W[k]); }).filter(function (r) { return r.status === 'submitted' || r.status === 'reviewed'; }).sort(function (a, b) { return (a.status === 'submitted' ? 0 : 1) - (b.status === 'submitted' ? 0 : 1) || b.ts - a.ts; });
    var box = h('div'); if (!list.length) return h('div', { class: 'card' }, h('p', null, 'Nothing to review yet. Writing and book answers will show up here.'));
    list.forEach(function (r) {
      var fb = h('textarea', { class: 'f-in', placeholder: 'Your feedback to her (kind and specific)', 'aria-label': 'Feedback' }); fb.value = r.feedback || '';
      var content = r.kind === 'write' ? Object.keys(r.fields || {}).map(function (f) { return h('div', null, h('p', { style: { whiteSpace: 'pre-wrap' } }, r.fields[f])); }) : [h('p', { class: 'muted' }, r.q), h('p', { style: { whiteSpace: 'pre-wrap' } }, r.text)];
      box.appendChild(h('div', { class: 'card' }, h('div', { class: 'row' }, h('b', null, r.kind === 'write' ? (r.title || r.lesson) : 'Book answer: ' + r.lesson), h('span', { class: 'badge ' + (r.status === 'reviewed' ? 'ok' : 'warn') }, r.status), h('span', { class: 'muted small' }, r.date || '')), content, fb,
        h('div', { style: { marginTop: '8px' } }, h('button', { class: 'btn small gold', onclick: function () { var rec = W[r.key]; rec.feedback = fb.value; rec.status = 'reviewed'; rec._u = Store.now(); if (rec.kind === 'write' && !rec.reviewStars) { rec.reviewStars = true; Store.addStars(Store.RULES.writingReviewed, 'Writing reviewed', rec.lesson, UI.today()); } UI.commit(); UI.toast('Marked reviewed' + (r.kind === 'write' ? ' (+12 stars)' : '')); Parent.render(); } }, r.status === 'reviewed' ? 'Save feedback' : 'Mark reviewed'),
          r.kind === 'write' ? h('button', { class: 'btn small ghost', style: { marginLeft: '8px' }, onclick: function () { UI.download((r.title || 'writing').replace(/\W+/g, '-') + '.txt', Object.keys(r.fields).map(function (f) { return r.fields[f]; }).join('\n\n'), 'text/plain'); } }, 'Download text') : null)));
    });
    // bible reflections
    var B = S().bible, bk = Object.keys(B).sort();
    if (bk.length) box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Bible reflections'), h('table', null, h('tbody', null, bk.map(function (k) { return h('tr', null, h('td', null, k), h('td', null, B[k].reflection)); })))));
    return box;
  }

  // ============ PROGRESS ============
  function progress() {
    var P = S().progress, rows = Object.keys(P).filter(function (k) { return P[k].done; }).map(function (k) { return Object.assign({ id: k }, P[k]); }).sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); });
    var box = h('div');
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Lessons finished (' + rows.length + ')'), rows.length ? h('table', null, h('thead', null, h('tr', null, ['Date', 'Lesson', 'First-try', 'Time', 'Notes'].map(function (x) { return h('th', null, x); }))), h('tbody', null, rows.map(function (r) { var L = Plan.find(r.id); return h('tr', null, h('td', null, r.date), h('td', null, (L ? L.title : r.id)), h('td', null, r.total ? r.right + '/' + r.total : '-'), h('td', null, Math.round((r.secs || 0) / 60) + ' min'), h('td', null, [r.mastered === false ? h('span', { class: 'badge warn' }, 'needs review') : null, r.rushed >= 3 ? h('span', { class: 'badge bad' }, 'rushing') : null, r.hints ? h('span', { class: 'badge' }, r.hints + ' hints') : null])); }))) : h('p', { class: 'muted' }, 'No lessons finished yet.')));
    var sk = S().skills, ks = Object.keys(sk).sort();
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Skills'), ks.length ? h('table', null, h('tbody', null, ks.map(function (k) { var t = sk[k].right + sk[k].wrong; return h('tr', null, h('td', null, k.replace(/-/g, ' ')), h('td', null, Math.round(100 * sk[k].right / t) + '%'), h('td', { class: 'muted' }, t + ' problems')); }))) : h('p', { class: 'muted' }, 'Skill tracking starts once she answers math problems.')));
    var sp = S().spelling, tests = []; Object.keys(sp).forEach(function (k) { (sp[k].tests || []).forEach(function (t) { tests.push(Object.assign({ list: k }, t)); }); });
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Spelling tests'), tests.length ? h('table', null, h('tbody', null, tests.map(function (t) { return h('tr', null, h('td', null, t.date), h('td', null, t.list), h('td', null, t.score + '/' + t.total), h('td', { class: 'muted' }, t.missed.length ? 'Missed: ' + t.missed.join(', ') : 'Perfect')); }))) : h('p', { class: 'muted' }, 'No tests yet.')));
    return box;
  }

  // ============ PAY ============
  function pay() {
    var st = S(), weeks = {}; Object.keys(st.ledger).forEach(function (k) { weeks[st.ledger[k].week] = 1; }); var ws = Object.keys(weeks).sort().reverse();
    var rate = h('input', { class: 'f-in', type: 'number', min: 1, value: st.settings.starsPerDollar, style: { width: '110px' }, 'aria-label': 'Stars per dollar' }), cap = h('input', { class: 'f-in', type: 'number', min: 1, step: '0.5', value: st.settings.weeklyCapUSD, style: { width: '110px' }, 'aria-label': 'Weekly cap in dollars' });
    var box = h('div');
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Money settings'), h('div', { class: 'row' }, h('label', null, 'Stars per $1: '), rate, h('label', null, 'Weekly max ($): '), cap, h('button', { class: 'btn small', onclick: function () { st.settings.starsPerDollar = Math.max(1, +rate.value || 50); st.settings.weeklyCapUSD = Math.max(1, +cap.value || 10); st.settings._u = Store.now(); UI.commit(); UI.toast('Saved.'); Parent.render(); } }, 'Save')), h('p', { class: 'small muted' }, 'Current rule: ' + st.settings.starsPerDollar + ' stars = $1, up to ' + UI.money(st.settings.weeklyCapUSD) + ' per week (Monday to Sunday). Changing the rate re-prices all weeks that are not yet marked paid.')));
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Weekly payouts'), ws.length ? h('table', null, h('thead', null, h('tr', null, ['Week of', 'Stars', 'Earned', 'Status', ''].map(function (x) { return h('th', null, x); }))), h('tbody', null, ws.map(function (w) { var m = Store.weekMoney(w), p = st.payouts[w] && st.payouts[w].paidAt; return h('tr', null, h('td', null, Cal.pretty(w)), h('td', null, m.stars), h('td', null, UI.money(p ? st.payouts[w].usd : m.usd) + (m.capped ? ' (max)' : '')), h('td', null, p ? h('span', { class: 'badge ok' }, 'Paid ' + new Date(p).toLocaleDateString()) : h('span', { class: 'badge warn' }, 'Unpaid')), h('td', null, p ? null : h('button', { class: 'btn small', onclick: function () { UI.confirm('Mark as paid?', UI.money(m.usd) + ' for the week of ' + Cal.pretty(w) + '.', 'Yes, I paid her', function () { Store.markPaid(w); UI.commit(); Parent.render(); }); } }, 'Mark paid'))); }))) : h('p', { class: 'muted' }, 'No stars earned yet.')));
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Adjust stars'), h('p', { class: 'small muted' }, 'Add or remove stars with a reason, for a bonus or a correction. It is saved in her history.'), adjuster()));
    return box;
  }
  function adjuster() {
    var n = h('input', { class: 'f-in', type: 'number', value: 10, style: { width: '110px' }, 'aria-label': 'Stars to add (negative to remove)' }), why = h('input', { class: 'f-in', placeholder: 'Reason (e.g., helped her brother)', 'aria-label': 'Reason' });
    return h('div', { class: 'row' }, n, why, h('button', { class: 'btn small', onclick: function () { if (!+n.value || !why.value.trim()) return UI.toast('Enter stars and a reason.'); Store.addStars(+n.value, 'Parent: ' + why.value.trim(), '', UI.today()); UI.commit(); UI.toast('Saved.'); Parent.render(); } }, 'Apply'));
  }

  // ============ BACKUP ============
  function stamp() { return UI.today(); }
  function markExported() { S().settings.lastExport = Date.now(); S().settings._u = Store.now(); Store.save(); }
  Parent.downloadBackup = function () { UI.download('ava-school-backup-' + stamp() + '.json', Store.exportAll()); markExported(); };
  function backup() {
    var st = S(), box = h('div'), wk = Store.mondayOf(UI.today()), from = h('input', { class: 'f-in', type: 'date', value: wk, 'aria-label': 'From' }), to = h('input', { class: 'f-in', type: 'date', value: Cal.addDays(wk, 6), 'aria-label': 'To' });
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Save a copy on this device'), h('p', null, 'The full backup has everything: progress, stars, writing, spelling results, settings. Keep these files somewhere safe (iCloud Drive, a USB drive, your computer). You can restore from any backup.'),
      h('p', { class: 'muted small' }, st.settings.lastExport ? 'Last saved: ' + new Date(st.settings.lastExport).toLocaleString() : 'You have not saved a backup yet.'),
      h('div', { class: 'row' }, h('button', { class: 'btn gold', onclick: function () { Parent.downloadBackup(); UI.toast('Backup downloaded.'); Parent.render(); } }, 'Download full backup'), h('button', { class: 'btn ghost', onclick: function () { UI.download('ava-school-progress-' + stamp() + '.csv', Store.exportCSV(), 'text/csv'); } }, 'Progress spreadsheet (CSV)'))));
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Chapter, week, or month report'), h('p', { class: 'small muted' }, 'Pick dates. Weeks and months are the natural chapters. The app also reminds you every Friday.'),
      h('div', { class: 'row' }, h('label', null, 'From '), from, h('label', null, 'To '), to, h('button', { class: 'btn small', onclick: function () { UI.download('ava-school-report-' + from.value + '-to-' + to.value + '.json', Store.exportRange(from.value, to.value)); } }, 'Download report')),
      h('div', { class: 'row', style: { marginTop: '8px' } }, [['This week', wk, Cal.addDays(wk, 6)], ['Last week', Cal.addDays(wk, -7), Cal.addDays(wk, -1)], ['This month', UI.today().slice(0, 8) + '01', UI.today().slice(0, 8) + '31']].map(function (q) { return h('button', { class: 'btn small ghost', onclick: function () { from.value = q[1]; to.value = q[2]; } }, q[0]); }))));
    var file = h('input', { type: 'file', accept: '.json,application/json', 'aria-label': 'Choose a backup file' });
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Restore from a backup'), h('p', { class: 'small muted' }, 'This MERGES the backup into what is on this device. Nothing is erased and stars are never double-counted.'), file, h('button', { class: 'btn small', style: { marginLeft: '8px' }, onclick: function () { if (!file.files[0]) return UI.toast('Choose a file first.'); var r = new FileReader(); r.onload = function () { try { Store.importAll(r.result); UI.commit(); UI.toast('Backup restored.'); Parent.render(); } catch (e) { UI.toast(e.message || 'That file could not be read.', 4000); } }; r.readAsText(file.files[0]); } }, 'Restore')));
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Printable records'), h('p', { class: 'small muted' }, 'Georgia requires you to keep attendance and an annual progress report. This page is print-ready (use Print → Save as PDF).'), h('a', { class: 'btn ghost', href: '#/report' }, 'Open annual progress report')));
    return box;
  }

  // ============ SETTINGS ============
  function settings() {
    var st = S(), box = h('div'), cfg = loadCfg();
    var nm = h('input', { class: 'f-in', value: st.profile.name, 'aria-label': 'Her first name' });
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Profile and PIN'), h('label', { class: 'f' }, 'First name'), nm, h('div', { class: 'row', style: { marginTop: '10px' } }, h('button', { class: 'btn small', onclick: function () { st.profile.name = nm.value.trim(); UI.commit(); UI.toast('Saved.'); } }, 'Save name'), h('button', { class: 'btn small ghost', onclick: changePin }, 'Change PIN')),
      h('div', { class: 'row', style: { marginTop: '10px' } }, toggle('Sound effects', st.settings.sound !== false, function (v) { st.settings.sound = v; st.settings._u = Store.now(); UI.commit(); }), toggle('Read questions aloud button', st.settings.readAloud !== false, function (v) { st.settings.readAloud = v; st.settings._u = Store.now(); UI.commit(); }))));
    // cloud sync
    var key = h('input', { class: 'f-in', value: cfg.apiKey || '', placeholder: 'AIzaSy...', 'aria-label': 'Firebase API key' }), pid = h('input', { class: 'f-in', value: cfg.projectId || '', placeholder: 'your-project-id', 'aria-label': 'Firebase project ID' }), em = h('input', { class: 'f-in', type: 'email', value: (Sync.auth && Sync.auth.email) || '', placeholder: 'family email', 'aria-label': 'Family email', autocomplete: 'username' }), pw = h('input', { class: 'f-in', type: 'password', placeholder: 'password (6+ characters)', 'aria-label': 'Family password', autocomplete: 'current-password' }), msg = h('p', { class: 'small' });
    function applyCfg() { saveCfg({ apiKey: key.value.trim(), projectId: pid.value.trim() }); Sync.config({ apiKey: key.value, projectId: pid.value }); }
    function run(fn, okMsg) { applyCfg(); if (!Sync.cfg) { msg.textContent = 'Enter the API key and project ID first.'; return; } msg.textContent = 'Working…'; fn().then(function () { msg.textContent = okMsg; return Sync.syncNow(); }).then(function (r) { if (r && r.ok) { UI.toast('Signed in and synced. Her progress now follows her across devices.', 4500); } else if (r) UI.toast('Signed in, but the first sync said: ' + r.reason, 6000); Parent.render(); }).catch(function (e) { msg.textContent = e.message; msg.style.color = 'var(--bad)'; }); }
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Cloud sync (iPad + MacBook)'), h('p', { class: 'small muted' }, Sync.auth ? 'Signed in as ' + Sync.auth.email + '. Status: ' + Sync.status + (Sync.last ? ' · last sync ' + new Date(Sync.last).toLocaleTimeString() : '') + (Sync.error ? ' · ' + Sync.error : '') : 'Follow SETUP.md Part 2 (about 10 minutes, free). Then enter the two values below and create the family login. On the second device, enter the same values and use Sign in.'),
      h('label', { class: 'f' }, 'Firebase API key'), key, h('label', { class: 'f' }, 'Firebase project ID'), pid, h('label', { class: 'f' }, 'Family email'), em, h('label', { class: 'f' }, 'Family password'), pw,
      h('div', { class: 'row', style: { marginTop: '10px' } }, h('button', { class: 'btn small gold', onclick: function () { run(function () { return Sync.signUp(em.value.trim(), pw.value); }, 'Account created.'); } }, 'Create family login'), h('button', { class: 'btn small', onclick: function () { run(function () { return Sync.signIn(em.value.trim(), pw.value); }, 'Signed in.'); } }, 'Sign in'), Sync.auth ? h('button', { class: 'btn small ghost', onclick: function () { msg.textContent = 'Syncing…'; Sync.syncNow().then(function (r) { msg.textContent = r.ok ? 'Synced just now.' : 'Could not sync: ' + r.reason; Parent.render(); }); } }, 'Sync now') : null, Sync.auth ? h('button', { class: 'btn small ghost', onclick: function () { Sync.signOut(); Parent.render(); } }, 'Sign out') : null), msg));
    // calendar
    var prior = h('input', { class: 'f-in', type: 'number', min: 0, max: 180, value: st.settings.priorDays || 0, style: { width: '110px' }, 'aria-label': 'School days already completed' }), off = h('input', { class: 'f-in', type: 'date', 'aria-label': 'Extra day off' }), mk = h('input', { class: 'f-in', type: 'date', 'aria-label': 'Make-up school day' });
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Calendar'), h('p', { class: 'small muted' }, 'The app follows the official Fulton County 2026-27 calendar (breaks and holidays are already off). Her first day is ' + Cal.pretty(Cal.START) + '.'),
      h('label', { class: 'f' }, 'School days already completed before ' + Cal.START + ' (this home-study year)'), h('div', { class: 'row' }, prior, h('button', { class: 'btn small', onclick: function () { st.settings.priorDays = Math.max(0, +prior.value || 0); st.settings._u = Store.now(); UI.commit(); UI.toast('Saved.'); Parent.render(); } }, 'Save')),
      h('label', { class: 'f' }, 'Add a day off (sick day, trip)'), h('div', { class: 'row' }, off, h('button', { class: 'btn small', onclick: function () { if (off.value) { st.settings.extraOff = (st.settings.extraOff || []).concat([off.value]); st.settings._u = Store.now(); UI.commit(); Parent.render(); } } }, 'Add')),
      h('label', { class: 'f' }, 'Add a make-up school day (Saturday, break day)'), h('div', { class: 'row' }, mk, h('button', { class: 'btn small', onclick: function () { if (mk.value) { st.settings.makeup = (st.settings.makeup || []).concat([mk.value]); st.settings._u = Store.now(); UI.commit(); Parent.render(); } } }, 'Add')),
      h('p', { class: 'small' }, 'Days off: ' + ((st.settings.extraOff || []).join(', ') || 'none') + '. Make-up days: ' + ((st.settings.makeup || []).join(', ') || 'none') + '.')));
    // NIV
    var vs = {}; Object.keys(Content.lessons).forEach(function (id) { var l = Content.lessons[id]; if (l.type === 'bible') { vs[l.verse.ref] = 1; } });
    var rows = Object.keys(vs).map(function (ref) { var ta = h('textarea', { class: 'f-in', rows: 2, 'aria-label': 'NIV text for ' + ref }); ta.value = (st.parentVerses && st.parentVerses[ref]) || ''; ta.addEventListener('change', function () { st.parentVerses = st.parentVerses || {}; st.parentVerses[ref] = ta.value.trim(); if (!ta.value.trim()) delete st.parentVerses[ref]; UI.commit(); }); return h('div', null, h('label', { class: 'f' }, ref + '  ', h('a', { href: Scripture.nivLink(ref), target: '_blank', rel: 'noopener' }, 'open NIV ↗')), ta); });
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'NIV memory verses'), h('p', { class: 'small muted' }, 'The NIV is copyrighted, so it cannot be built into the app. The app shows the public-domain WEB text and an "Open in NIV" link. If you want her NIV words on screen, tap the link, copy the verse, and paste it here (it is stored only in your family data and shown beside the WEB text).'), rows));
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Reset'), h('p', { class: 'small muted' }, 'Erase everything on THIS device. If cloud sync is on, the cloud copy stays and this device will pull it back. Download a backup first.'), h('button', { class: 'btn small ghost', onclick: function () { UI.confirm('Erase this device?', 'Progress on this device will be removed. Make sure you have a backup.', 'Erase', function () { localStorage.removeItem('avaSchool.state.v1'); Store.state = Store.blank(); location.hash = '#/'; location.reload(); }); } }, 'Erase this device')));
    return box;
  }
  function toggle(label, on, fn) { var cb = h('input', { type: 'checkbox' }); cb.checked = on; cb.addEventListener('change', function () { fn(cb.checked); }); return h('label', { class: 'check' }, cb, label); }
  function changePin() {
    var a = h('input', { class: 'f-in', type: 'password', inputmode: 'numeric', maxlength: 8, placeholder: 'New PIN', 'aria-label': 'New PIN' }), m = UI.modal(h('div', null, h('h2', null, 'New PIN'), a, h('div', { class: 'row', style: { marginTop: '10px', justifyContent: 'flex-end' } }, h('button', { class: 'btn', onclick: function () { if (!/^\d{4,8}$/.test(a.value)) return UI.toast('4 to 8 numbers.'); Store.hashPin(a.value).then(function (hh) { S().settings.pinHash = hh; S().settings._u = Store.now(); UI.commit(); m.close(); UI.toast('PIN changed.'); }); } }, 'Save'))));
  }
  function loadCfg() { try { var c = JSON.parse(localStorage.getItem('avaSchool.cfg')); if (c && c.apiKey) return c; } catch (e) { } return window.AVA_CONFIG || {}; }
  function saveCfg(c) { try { localStorage.setItem('avaSchool.cfg', JSON.stringify(c)); } catch (e) { } }
  Parent.loadCfg = loadCfg;

  // ============ HELP / PLAN ============
  function help() {
    var box = h('div');
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'What is built right now'), h('ul', null, h('li', null, h('b', null, 'Weeks 1–4'), ' (Oct 13 – Nov 6): all six subjects, ready to use.'), h('li', null, h('b', null, 'Math through week 8'), ' (division and word problems) is generated, so she always gets fresh problems.'), h('li', null, 'Later weeks arrive as monthly updates: replace the app files with the new version. Her progress is stored separately, so nothing is lost.')),
      h('p', { class: 'small muted' }, 'On days with no lesson content yet, the Home screen says so, and you can use catch-up lessons and fluency practice.')));
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Road to 5th grade (plan)'), h('table', null, h('thead', null, h('tr', null, ['Weeks', 'Dates', 'Math focus', 'Status'].map(function (x) { return h('th', null, x); }))), h('tbody', null, [
      ['1–4', 'Oct 13 – Nov 6', 'Place value, regrouping, multiplication', 'Built'], ['5–8', 'Nov 9 – Dec 4', 'Division, remainders, word problems', 'Built (math only)'], ['9–12', 'Dec 7 – Jan 29', 'Factors, multiples, fractions, equivalent fractions', 'Planned'],
      ['13–16', 'Feb 1 – Feb 26', 'Fraction operations, decimals, measurement', 'Planned'], ['17–19', 'Mar 1 – Mar 19', 'Geometry, angles, finish 4th grade. 5th-grade handoff', 'Planned'],
      ['20–28', 'Mar 22 – May 27', '5th grade: decimals, fraction × ÷, volume, order of operations, coordinate plane', 'Planned']].map(function (r) { return h('tr', null, r.map(function (x) { return h('td', null, x); })); }))), h('p', { class: 'small muted' }, 'Mid-second-semester is around week 19 (mid-March). Reading, science, and social studies follow the same pace, previewing 5th-grade standards in the final weeks.')));
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'Georgia home-study checklist'), h('ul', null, h('li', null, 'Declaration of Intent filed with the state each year (within 30 days of starting, and by September 1 each year after).'), h('li', null, '180 days, averaging 4.5 hours a day. Track in Parent → Overview.'), h('li', null, 'Five core subjects: reading, language arts, math, social studies, science. Bible is the extra you added.'), h('li', null, 'Keep attendance and an annual progress report for each year (Backup → printable report).'), h('li', null, 'Standardized testing every third year starting at the end of 3rd grade, so the next one is end of 6th grade. Results stay with you.')), h('p', { class: 'small muted' }, 'This is a reminder, not legal advice. Check the Georgia Department of Education home-study page for the current rules.')));
    box.appendChild(h('div', { class: 'card' }, h('h3', null, 'How the anti-cheating works'), h('ul', null, h('li', null, 'Every math problem is generated fresh, so a friend or old worksheet has no answers.'), h('li', null, 'Misses show a full worked solution, then a new problem replaces it.'), h('li', null, 'Test days and the spelling test give no hints and no feedback until the end.'), h('li', null, 'Fast random guessing is detected: three quick wrong answers pause the lesson for a breather and flag it here.'), h('li', null, 'Finished lessons can be replayed for practice, but earn no stars. Each lesson has a star ceiling, so restarting does not farm stars.'), h('li', null, 'Speed stars exist only in the Friday fluency sprint.'))));
    return box;
  }

  // ============ PRINTABLE REPORT ============
  Parent.report = function () {
    UI.requirePin(function () {
      var st = S(), dates = Object.keys(st.attendance).sort(), P = st.progress, subj = {};
      Object.keys(P).forEach(function (k) { if (P[k].done) { subj[P[k].subject] = (subj[P[k].subject] || 0) + 1; } });
      var hrs = Store.totalHours(), counted = Store.daysCounted();
      UI.render(h('main', { class: 'wrap wide', style: { paddingTop: '20px' } },
        h('div', { class: 'row no-print' }, h('a', { class: 'btn ghost', href: '#/parent' }, 'Back'), h('button', { class: 'btn gold', onclick: function () { window.print(); } }, 'Print or save as PDF')),
        h('h1', null, 'Home Study Annual Progress Report'), h('p', null, h('b', null, 'Student: '), st.profile.name, '   ', h('b', null, 'Grade: '), '4   ', h('b', null, 'Year: '), '2026–2027   ', h('b', null, 'Generated: '), UI.today()),
        h('div', { class: 'card' }, h('h3', null, 'Attendance'), h('p', null, 'Days counted: ', h('b', null, counted), ' (includes ' + (st.settings.priorDays || 0) + ' entered from earlier in the year). Hours recorded in the app: ', h('b', null, hrs), '. Offline learning is added by the parent when counting each day.'), h('table', null, h('thead', null, h('tr', null, ['Date', 'Minutes', 'Counted'].map(function (x) { return h('th', null, x); }))), h('tbody', null, dates.map(function (d) { return h('tr', null, h('td', null, d), h('td', null, st.attendance[d].mins), h('td', null, st.attendance[d].counted || st.attendance[d].mins >= 60 ? 'Yes' : 'No')); })))),
        h('div', { class: 'card' }, h('h3', null, 'Subjects covered (lessons completed)'), h('table', null, h('tbody', null, ['reading', 'grammar', 'spelling', 'writing', 'math', 'social', 'science', 'bible', 'fun'].map(function (s) { return h('tr', null, h('td', null, UI.subjectName(s)), h('td', null, subj[s] || 0)); })))),
        h('div', { class: 'card' }, h('h3', null, 'Lesson log'), h('table', null, h('thead', null, h('tr', null, ['Date', 'Subject', 'Lesson', 'Result'].map(function (x) { return h('th', null, x); }))), h('tbody', null, Object.keys(P).filter(function (k) { return P[k].done; }).sort(function (a, b) { return (P[a].date || '').localeCompare(P[b].date || ''); }).map(function (k) { var L = Plan.find(k); return h('tr', null, h('td', null, P[k].date), h('td', null, UI.subjectName(P[k].subject)), h('td', null, L ? L.title : k), h('td', null, P[k].total ? P[k].right + '/' + P[k].total + ' first try' : 'Completed')); })))),
        h('div', { class: 'card' }, h('p', null, 'Parent/guardian signature: ______________________________   Date: ______________'))));
    }, function () { UI.go('/'); });
  };

  root.Parent = Parent;
})(window);
