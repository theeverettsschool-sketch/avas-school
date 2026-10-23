/* Ava's School – Parent app (v12). Signs in with the family Firebase account and reads/writes the SAME families/{uid}
   data as the kid app, through the kid app's own Store.merge and Sync code (pull -> merge -> push), so nothing the
   kid app wrote is ever dropped. Local copy is kept under its own keys (avaParent.*) so it never touches the kid
   app's saved state if both are opened in the same browser. */
(function () {
  'use strict';
  var PFX = 'avaParent.';
  var box = { getItem: function (k) { return localStorage.getItem(PFX + k); }, setItem: function (k, v) { localStorage.setItem(PFX + k, v); }, removeItem: function (k) { localStorage.removeItem(PFX + k); } };
  Store.S.storage = box; Sync.storage = box;
  var hadLocal = !!box.getItem('avaSchool.state.v1');
  Store.load();
  if (!hadLocal) Store.state.settings._u = -1; // a fresh parent copy never outranks the family's real settings
  Sync.config(window.AVA_CONFIG); Sync.loadAuth(); if (Sync.cfg && Sync.auth) Sync.status = 'ready';

  var A = { tab: 'today', sub: 'writing', synced: false };
  function S() { return Store.state; }
  function today() { try { var q = new URLSearchParams(location.search).get('today'); if (q && /^(localhost|127\.0\.0\.1)$/.test(location.hostname) && /^\d{4}-\d\d-\d\d$/.test(q)) return q; } catch (e) { } return Cal.iso(new Date()); }
  function money(n) { return '$' + (Math.round(n * 100) / 100).toFixed(2); }
  function fmt(m) { m = Math.round(m); return m >= 60 ? Math.floor(m / 60) + ' h ' + (m % 60) + ' min' : m + ' min'; }
  function h(tag, attrs) {
    var el = document.createElement(tag), kids = Array.prototype.slice.call(arguments, 2);
    for (var k in (attrs || {})) { var v = attrs[k]; if (v === null || v === undefined || v === false) continue; if (k === 'class') el.className = v; else if (k === 'style') { for (var s in v) el.style[s] = v[s]; } else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2), v); else el.setAttribute(k, v === true ? '' : v); }
    (function add(L) { L.forEach(function (c) { if (Array.isArray(c)) add(c); else if (c !== null && c !== undefined && c !== false) el.appendChild(c.nodeType ? c : document.createTextNode(String(c))); }); })(kids);
    return el;
  }
  function toast(t, ms) { var e = h('div', { class: 'toast', role: 'status' }, t); document.body.appendChild(e); setTimeout(function () { e.remove(); }, ms || 2600); }
  function confirmBox(title, text, yes, fn) { var m = h('div', { class: 'modal' }, h('div', null, h('h2', { style: { margin: '0 0 6px' } }, title), h('p', null, text), h('div', { class: 'row' }, h('button', { class: 'btn ghost', onclick: function () { m.remove(); } }, 'Cancel'), h('button', { class: 'btn gold', id: 'confirm-yes', onclick: function () { m.remove(); fn(); } }, yes)))); document.body.appendChild(m); }
  function subjName(k) { var C = window.Content && Content.SUBJECTS && Content.SUBJECTS[k]; return (C && (C.name || C.label)) || k || 'Other'; }
  function title(id) { var L = window.Plan && Plan.find && (function () { try { return Plan.find(id); } catch (e) { return null; } })(); return (L && L.title) || id; }

  // ---------- sync ----------
  async function sync(quiet) {
    if (!Sync.auth) return { ok: false };
    var r = await Sync.syncNow(); if (r.ok) { A.synced = true; if (!quiet) toast('Up to date ✓'); } else if (r.reason !== 'busy') toast('Sync problem: ' + r.reason, 4000);
    return r;
  }
  function syncLabel() { return Sync.status === 'syncing' ? 'Syncing…' : Sync.last ? 'Synced ' + new Date(Sync.last).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) : Sync.status === 'error' || Sync.status === 'offline' ? 'Offline – tap to retry' : 'Sync'; }
  // every change: pull the newest copy first, make the change on it, save, push
  async function change(fn, okMsg) {
    var r = await Sync.syncNow(); if (!r.ok) { toast('Could not reach the cloud, so nothing was changed. Try again when online.', 4000); return false; }
    var res = fn(); Store.save(); var r2 = await Sync.syncNow(); render();
    toast(r2.ok ? (typeof okMsg === 'function' ? okMsg(res) : okMsg) : 'Saved on this phone; will sync when online.', 3000); return res;
  }

  // ---------- screens ----------
  var TABS = [['today', '🏠', 'Today'], ['week', '📅', 'Week'], ['work', '📝', 'Work'], ['money', '💵', 'Money'], ['plan', '🗓️', 'Plan']];
  function render() {
    var app = document.getElementById('app'); app.innerHTML = '';
    if (!Sync.cfg) { app.appendChild(h('main', null, h('div', { class: 'card' }, 'Firebase settings are missing (config.js).'))); return; }
    if (!Sync.auth) return login(app);
    var body = h('main'); var fn = { today: todayView, week: weekView, work: workView, money: moneyView, plan: planView }[A.tab] || todayView;
    try { fn(body); } catch (e) { body.appendChild(h('div', { class: 'card' }, h('h2', null, 'This screen hit a problem'), h('p', { class: 'small muted' }, String(e && e.message || e)))); }
    app.appendChild(h('header', null, h('h1', null, ((S().profile && S().profile.name) || 'Ava') + "'s School · Parent"), h('button', { class: 'sync', onclick: function () { sync().then(render); } }, syncLabel())));
    app.appendChild(body);
    app.appendChild(h('nav', { role: 'tablist' }, TABS.map(function (t) { return h('button', { role: 'tab', 'aria-selected': A.tab === t[0] ? 'true' : 'false', 'data-tab': t[0], onclick: function () { A.tab = t[0]; render(); window.scrollTo(0, 0); } }, h('span', null, t[1]), t[2]); })));
  }

  function login(app) {
    var em = h('input', { type: 'email', id: 'em', autocomplete: 'username', placeholder: 'family@email.com' }), pw = h('input', { type: 'password', id: 'pw', autocomplete: 'current-password' }), err = h('div', { class: 'err' });
    var go = async function (e) { e.preventDefault(); err.textContent = ''; btn.disabled = true; btn.textContent = 'Signing in…'; try { await Sync.signIn(em.value.trim(), pw.value); pw.value = ''; await sync(true); render(); } catch (x) { err.textContent = x.message || String(x); btn.disabled = false; btn.textContent = 'Sign in'; } };
    var btn = h('button', { class: 'btn gold wide', type: 'submit', style: { marginTop: '14px' } }, 'Sign in');
    app.appendChild(h('main', null, h('form', { class: 'card login', onsubmit: go }, h('h2', null, "Ava's School · Parent"), h('p', { class: 'small muted' }, 'Sign in with the same family email and password you used for sync in the kid app. Your password is sent only to Google Firebase and is not stored on this phone.'), h('label', { for: 'em' }, 'Family email'), em, h('label', { for: 'pw' }, 'Password'), pw, btn, err)));
  }

  function card(parent, t) { var c = h('div', { class: 'card' }, t ? h('h2', null, t) : null); parent.appendChild(c); return c; }
  function bar(pct, ok) { return h('div', { class: 'bar' + (ok ? ' ok' : '') }, h('i', { style: { width: Math.max(0, Math.min(100, pct)) + '%' } })); }

  function dayInfo(d) {
    var st = S(), info = { lessons: [] }; try { info = Plan.forDate(d, st.settings) || info; } catch (e) { }
    var L = (info.lessons || []), done = L.filter(function (l) { return st.progress[l.id] && st.progress[l.id].done; });
    return { lessons: L, done: done, mins: Store.dayMinutes(d), counts: Store.dayCounts(d) };
  }
  function todayView(b) {
    var st = S(), d = today(), I = dayInfo(d), thr = Store.threshold(), counted = Store.daysCounted();
    if (!A.synced && !Sync.last) b.appendChild(h('div', { class: 'card small muted' }, 'Showing the copy saved on this phone. Tap Sync for the newest.'));
    var c = card(b, 'Today · ' + Cal.pretty(d));
    c.appendChild(h('div', { class: 'big' }, I.mins + ' ', h('span', { class: 'small muted' }, 'of ' + thr + ' min')));
    c.appendChild(bar(100 * I.mins / thr, I.counts)); c.appendChild(h('p', { class: 'small' }, I.counts ? '✓ Today counts toward the 180 days.' : (thr - I.mins > 0 ? (thr - I.mins) + ' more minutes for today to count.' : '')));
    b.appendChild(h('div', { class: 'grid', style: { marginBottom: '12px' } },
      h('div', { class: 'stat' }, h('span', { class: 'small muted' }, 'Assignments'), h('b', null, I.done.length + ' / ' + I.lessons.length), h('span', { class: 'small muted' }, 'done today')),
      h('div', { class: 'stat' }, h('span', { class: 'small muted' }, 'Days counted'), h('b', null, counted + ' / 180'), bar(100 * counted / 180, true)),
      h('div', { class: 'stat' }, h('span', { class: 'small muted' }, 'Stars this week'), h('b', null, Store.weekStars(Store.mondayOf(d))), h('span', { class: 'small muted' }, money(Store.weekMoney(Store.mondayOf(d)).usd))),
      h('div', { class: 'stat', onclick: function () { A.tab = 'money'; render(); } }, h('span', { class: 'small muted' }, 'Waiting for payday'), h('b', null, money(Store.unpaid())), h('span', { class: 'small muted' }, 'unpaid balance ›'))));
    var c2 = card(b, "Today's assignments");
    c2.appendChild(I.lessons.length ? h('table', null, h('tbody', null, I.lessons.map(function (l) { var p = st.progress[l.id]; return h('tr', null, h('td', null, (l.icon || '') + ' ' + (l.title || l.id)), h('td', { class: 'r' }, p && p.done ? h('span', { class: 'tag ok' }, p.total ? Math.round(100 * (p.right || 0) / p.total) + '%' : 'done') : h('span', { class: 'tag' }, 'not yet'))); }))) : h('p', { class: 'muted small' }, 'No school today.'));
    var subs = Store.minutesBySubject(d, d), ks = Object.keys(subs).filter(function (k) { return subs[k] > 0; });
    if (ks.length) { var c3 = card(b, 'Time by subject today'); c3.appendChild(h('table', null, h('tbody', null, ks.map(function (k) { return h('tr', null, h('td', null, subjName(k)), h('td', { class: 'r' }, fmt(subs[k]))); })))); }
  }

  function weekView(b) {
    var d = today(), mon = Store.mondayOf(d), r = Planner.weekSummary(d), st = S(), thr = Store.threshold(), planned = 0, done = 0;
    for (var i = 0; i < 7; i++) { var I = dayInfo(Cal.addDays(mon, i)); planned += I.lessons.length; done += I.done.length; }
    b.appendChild(h('div', { class: 'grid', style: { marginBottom: '12px' } },
      h('div', { class: 'stat' }, h('span', { class: 'small muted' }, 'This week'), h('b', null, fmt(r.totalMins)), h('span', { class: 'small muted' }, r.counted + ' day(s) counted')),
      h('div', { class: 'stat' }, h('span', { class: 'small muted' }, 'Assignments'), h('b', null, done + ' / ' + planned), h('span', { class: 'small muted' }, 'done this week'))));
    var c = card(b, 'Week of ' + Cal.pretty(mon));
    c.appendChild(h('table', null, h('thead', null, h('tr', null, h('th', null, 'Day'), h('th', null, 'Minutes'), h('th', { class: 'r' }, 'Counts'))), h('tbody', null, r.days.map(function (x) { return h('tr', null, h('td', null, x.label), h('td', null, x.mins + ' / ' + thr, bar(100 * x.mins / thr, x.counts)), h('td', { class: 'r' }, x.counts ? '✓' : x.future ? 'coming up' : '')); }))));
    var c2 = card(b, 'Quizzes and tests this week');
    c2.appendChild(r.scores.length ? h('table', null, h('tbody', null, r.scores.map(function (x) { return h('tr', null, h('td', null, x.kind + ' · ' + Cal.short(x.date)), h('td', { class: 'r' }, h('b', null, x.pct + '%'), ' ' + x.right + '/' + x.total)); }))) : h('p', { class: 'small muted' }, 'None finished yet this week.'));
    var c3 = card(b, 'Weekly summary');
    c3.appendChild(h('div', { class: 'text small', id: 'week-text', style: { fontFamily: 'inherit' } }, r.text));
    c3.appendChild(h('div', { class: 'row' }, h('button', { class: 'btn small', onclick: function () { if (navigator.share) navigator.share({ title: 'Weekly summary', text: r.text }).catch(function () { }); else if (navigator.clipboard) navigator.clipboard.writeText(r.text).then(function () { toast('Copied.'); }); } }, navigator.share ? 'Share' : 'Copy')));
  }

  function answerText(it) { if (!it) return ''; if (it.options && typeof it.a === 'number') return it.options[it.a]; if (Array.isArray(it.a)) return it.a.join(' / '); return it.a !== undefined ? String(it.a) : (it.answer || ''); }
  function workView(b) {
    b.appendChild(h('div', { class: 'seg', role: 'tablist' }, [['writing', 'Written work'], ['answers', 'Answers to fix'], ['scores', 'Scores']].map(function (t) { return h('button', { role: 'tab', 'aria-selected': A.sub === t[0] ? 'true' : 'false', onclick: function () { A.sub = t[0]; render(); } }, t[1]); })));
    ({ writing: writingList, answers: answersList, scores: scoresList })[A.sub](b);
  }
  function writingList(b) {
    var W = S().writing, list = Object.keys(W).map(function (k) { return Object.assign({ key: k }, W[k]); }).filter(function (r) { return r.status === 'submitted' || r.status === 'reviewed'; }).sort(function (a, b) { return (a.status === 'submitted' ? 0 : 1) - (b.status === 'submitted' ? 0 : 1) || (b.ts || 0) - (a.ts || 0); });
    if (!list.length) { card(b).appendChild(h('p', { class: 'muted' }, 'Nothing turned in yet.')); return; }
    list.slice(0, 40).forEach(function (r) {
      var text = r.kind === 'write' ? Object.keys(r.fields || {}).map(function (f) { return r.fields[f]; }).join('\n\n') : (r.text || '');
      var c = card(b); c.appendChild(h('div', { class: 'row', style: { justifyContent: 'space-between' } }, h('b', null, r.title || r.q || title(r.lesson || r.key)), h('span', { style: { flex: '0 0 auto' }, class: 'tag ' + (r.status === 'submitted' ? 'warn' : 'ok') }, r.status === 'submitted' ? 'needs review' : 'reviewed')));
      c.appendChild(h('div', { class: 'small muted' }, (r.date ? Cal.pretty(r.date) : r.ts ? new Date(r.ts).toLocaleDateString() : '') + (r.kind ? ' · ' + r.kind : '')));
      if (r.prompt || (r.q && r.title)) c.appendChild(h('p', { class: 'small muted' }, 'Prompt: ' + (r.prompt || r.q)));
      c.appendChild(h('div', { class: 'text' }, text || '(empty)'));
      var reasons = []; try { reasons = Review.checkWriting(text, { min: r.kind === 'write' ? 40 : 15, prompt: r.prompt || r.q, what: 'writing' }).reasons; } catch (e) { }
      reasons.forEach(function (x) { c.appendChild(h('div', { class: 'flag' }, '⚠️ ' + x)); });
      if (!reasons.length) c.appendChild(h('div', { class: 'okbox' }, '✓ No problems flagged by the automatic check.'));
      if (r.feedback) c.appendChild(h('p', { class: 'small' }, h('b', null, 'Your feedback: '), r.feedback));
      var fb = h('textarea', { rows: 2, placeholder: 'Feedback for her (optional)' }); fb.value = r.feedback || '';
      c.appendChild(h('details', null, h('summary', null, r.status === 'reviewed' ? 'Edit feedback' : 'Review it'), fb, h('button', { class: 'btn small gold', style: { marginTop: '8px' }, onclick: function () {
        change(function () { var rec = S().writing[r.key]; if (!rec) return; rec.feedback = fb.value; rec.status = 'reviewed'; rec._u = Store.now(); if (rec.kind === 'write' && !rec.reviewStars) { rec.reviewStars = true; Store.addStars(Store.RULES.writingReviewed, 'Writing reviewed', rec.lesson, today()); } }, 'Marked reviewed.');
      } }, 'Mark reviewed')));
    });
  }
  function answersList(b) {
    var P = S().progress, rows = Object.keys(P).filter(function (k) { return P[k].done && P[k].missed && P[k].missed.length; }).sort(function (a, b) { return (P[b].date || '').localeCompare(P[a].date || ''); });
    var flags = []; Object.keys(S().reviews || {}).sort().reverse().forEach(function (d) { var rv = S().reviews[d]; Object.keys(rv.items || {}).forEach(function (k) { var it = rv.items[k]; if (it.flag) flags.push({ d: d, it: it }); }); });
    var c0 = card(b, 'Flagged in "Finish my day"');
    c0.appendChild(flags.length ? h('table', null, h('tbody', null, flags.slice(0, 25).map(function (f) { var it = f.it, state = it.cleared ? 'cleared' : it.redo && it.redo.passed ? 'fixed' : 'open'; return h('tr', null, h('td', null, Cal.short(f.d)), h('td', null, it.title || it.lesson, (it.reasons || []).length ? h('div', { class: 'small muted' }, it.reasons[0]) : null), h('td', { class: 'r' }, h('span', { class: 'tag ' + (state === 'open' ? 'bad' : 'ok') }, state))); }))) : h('p', { class: 'small muted' }, 'Nothing flagged.'));
    if (!rows.length) { card(b).appendChild(h('p', { class: 'muted' }, 'No missed answers saved.')); return; }
    rows.slice(0, 30).forEach(function (id) {
      var p = P[id], c = card(b); c.appendChild(h('div', { class: 'row' }, h('b', null, title(id)), h('span', { class: 'tag', style: { flex: '0 0 auto' } }, (p.right || 0) + '/' + (p.total || 0) + ' first try')));
      c.appendChild(h('div', { class: 'small muted' }, p.date ? Cal.pretty(p.date) : ''));
      p.missed.forEach(function (it) { c.appendChild(h('div', { class: 'flag' }, h('div', null, it.q || it.prompt || ''), h('div', { class: 'small' }, h('b', null, 'Correct: '), answerText(it)), it.given ? h('div', { class: 'small' }, 'She answered: ' + it.given) : null)); });
    });
  }
  function scoresList(b) {
    var R = window.Assess ? Assess.results(S()) : [], c = card(b, 'Quizzes and tests');
    c.appendChild(R.length ? h('table', null, h('tbody', null, R.map(function (x) { return h('tr', null, h('td', null, x.kind + ' · ' + Cal.pretty(x.date)), h('td', { class: 'r' }, h('b', null, x.pct + '%'), h('div', { class: 'small muted' }, x.right + '/' + x.total + ' first try'))); }))) : h('p', { class: 'small muted' }, 'No quiz or test finished yet.'));
    var P = S().progress, L = Object.keys(P).filter(function (k) { return P[k].done && P[k].total && !/^(quiz|test)-/.test(k); }).sort(function (a, b) { return (P[b].date || '').localeCompare(P[a].date || '') || (P[b]._u || 0) - (P[a]._u || 0); }).slice(0, 30);
    var c2 = card(b, 'Recent lesson scores');
    c2.appendChild(L.length ? h('table', null, h('tbody', null, L.map(function (k) { var p = P[k], pct = Math.round(100 * (p.right || 0) / p.total); return h('tr', null, h('td', null, title(k), h('div', { class: 'small muted' }, p.date ? Cal.short(p.date) : '')), h('td', { class: 'r' }, h('span', { class: 'tag ' + (pct >= 80 ? 'ok' : pct >= 60 ? 'warn' : 'bad') }, pct + '%'))); }))) : h('p', { class: 'small muted' }, 'No scored lessons yet.'));
  }

  function moneyView(b) {
    var st = S(), owe = Store.unpaid(), rows = Store.unpaidWeeks().filter(function (x) { return x.due > 0 || x.paid > 0; }).reverse(), goal = st.settings.saveGoal, d = today();
    var c = card(b, 'Waiting for payday'); c.id = 'payday';
    c.appendChild(h('div', { class: 'big', id: 'unpaid' }, money(owe)));
    c.appendChild(h('p', { class: 'small muted' }, 'Unpaid since the last payout. ' + st.settings.starsPerDollar + ' stars = $1, up to ' + money(st.settings.weeklyCapUSD) + ' a week.'));
    if (Cal.parse(d).getDay() === 5 && owe > 0) c.appendChild(h('div', { class: 'okbox' }, '📅 It is Friday – payday!'));
    c.appendChild(rows.length ? h('table', null, h('thead', null, h('tr', null, h('th', null, 'Week of'), h('th', { class: 'r' }, 'Stars'), h('th', { class: 'r' }, 'Earned'), h('th', { class: 'r' }, 'Unpaid'))), h('tbody', null, rows.map(function (x) { return h('tr', null, h('td', null, Cal.short(x.week)), h('td', { class: 'r' }, x.stars), h('td', { class: 'r' }, money(x.earned) + (x.capped ? '*' : '')), h('td', { class: 'r' }, h('b', null, money(x.due)), x.paid ? h('div', { class: 'small muted' }, money(x.paid) + ' paid') : null)); }))) : h('p', { class: 'small muted' }, 'No stars earned yet.'));
    if (rows.some(function (x) { return x.capped; })) c.appendChild(h('p', { class: 'small muted' }, '* reached the weekly max'));
    var sv = h('input', { type: 'number', min: 0, step: '0.25', inputmode: 'decimal', value: '', placeholder: '0.00', id: 'tosave' });
    if (goal && goal.amount) c.appendChild(h('div', null, h('label', { for: 'tosave' }, 'Part to savings goal "' + goal.name + '" ($)'), sv));
    if (owe > 0) c.appendChild(h('button', { class: 'btn gold wide', id: 'markpaid', style: { marginTop: '10px' }, onclick: function () {
      var amt = owe, s = Math.max(0, Math.min(amt, +sv.value || 0));
      confirmBox('Mark paid ' + money(amt) + '?', 'Covers every unpaid week above' + (s ? ', with ' + money(s) + ' to savings' : '') + '. Her earned history is kept.', 'Yes, I paid her', function () {
        change(function () { return Store.payNow('parent app', s, today()); }, function (r) { return r ? 'Paid ' + money(r.amount) + ' ✓' : 'Nothing was unpaid after the latest sync.'; });
      });
    } }, 'Mark paid ' + money(owe)));
    var list = Store.payList(), c2 = card(b, 'Payout history');
    c2.appendChild(list.length ? h('table', null, h('tbody', null, list.map(function (p) { return h('tr', null, h('td', null, Cal.pretty(p.date), h('div', { class: 'small muted' }, Object.keys(p.weeks || {}).length + ' week(s) · ' + (p.by || ''))), h('td', { class: 'r' }, h('b', null, money(p.amount)), p.toSave ? h('div', { class: 'small muted' }, money(p.toSave) + ' saved') : null)); }))) : h('p', { class: 'small muted' }, 'No payouts yet. The first one covers every week since ' + Cal.pretty(Store.payFrom()) + '.'));
    var c3 = card(b, 'Savings goal');
    if (goal && goal.amount) { var saved = Store.savedTotal(); c3.appendChild(h('p', null, goal.name + ': ' + money(saved) + ' of ' + money(goal.amount))); c3.appendChild(bar(100 * saved / goal.amount, true)); }
    var gn = h('input', { placeholder: 'e.g., new bike', value: goal ? goal.name : '' }), ga = h('input', { type: 'number', min: 0, inputmode: 'decimal', value: goal ? goal.amount : '' });
    c3.appendChild(h('details', null, h('summary', null, goal ? 'Change goal' : 'Set a goal'), h('label', null, 'Goal name'), gn, h('label', null, 'Amount ($)'), ga, h('button', { class: 'btn small', style: { marginTop: '8px' }, onclick: function () {
      change(function () { var a = Math.max(0, +ga.value || 0); S().settings.saveGoal = a && gn.value.trim() ? { name: gn.value.trim(), amount: a } : null; S().settings._u = Store.now(); }, 'Goal saved.');
    } }, 'Save goal')));
    var n = h('input', { type: 'number', inputmode: 'numeric', id: 'adj-n', placeholder: '+10 or -5' }), why = h('input', { id: 'adj-why', placeholder: 'Reason (e.g., helped with chores)' });
    var c4 = card(b, 'Adjust stars');
    c4.appendChild(h('p', { class: 'small muted' }, 'Add or take away stars with a reason. It goes into this week and her history.'));
    c4.appendChild(h('div', { class: 'row' }, n, h('button', { class: 'btn small', style: { flex: '0 0 auto' }, onclick: function () { n.value = (+n.value || 0) + 5; } }, '+5'), h('button', { class: 'btn small ghost', style: { flex: '0 0 auto' }, onclick: function () { n.value = (+n.value || 0) - 5; } }, '−5')));
    c4.appendChild(h('div', { style: { marginTop: '8px' } }, why));
    c4.appendChild(h('button', { class: 'btn wide', id: 'adj-go', style: { marginTop: '8px' }, onclick: function () { var k = Math.round(+n.value || 0), w = why.value.trim(); if (!k || !w) return toast('Enter stars and a reason.'); change(function () { return Store.addStars(k, 'Parent: ' + w, '', today(), today()); }, (k > 0 ? '+' : '') + k + ' stars saved.'); } }, 'Save adjustment'));
    var adj = Object.keys(st.ledger).map(function (k) { return st.ledger[k]; }).filter(function (e) { return /^Parent:/.test(e.why || ''); }).sort(function (a, b) { return b.ts - a.ts; }).slice(0, 10);
    if (adj.length) c4.appendChild(h('table', { style: { marginTop: '8px' } }, h('tbody', null, adj.map(function (e) { return h('tr', null, h('td', null, Cal.short(e.date)), h('td', null, e.why.replace(/^Parent: /, '')), h('td', { class: 'r' }, (e.stars > 0 ? '+' : '') + e.stars)); }))));
  }

  function planView(b) {
    var d = today(), P = Planner.status(d), sug = Planner.suggestions(d, null, Math.min(8, P.short || 0)), st = S();
    var c = card(b, '180-day plan');
    c.appendChild(h('div', { class: 'big' }, P.counted + ' ', h('span', { class: 'small muted' }, 'of 180 days counted')));
    c.appendChild(bar(P.pctCounted, true));
    c.appendChild(h('p', { class: 'small' }, 'Planned school days this year: ' + P.planned + ' (' + P.prior + ' before the app, ' + P.inYear + ' on the calendar' + (P.summer ? ', ' + P.summer + ' in summer' : '') + ').'));
    c.appendChild(P.short ? h('div', { class: 'flag' }, 'Short by ' + P.short + ' day' + (P.short === 1 ? '' : 's') + '. Make-up days added: ' + P.makeupAdded + '.') : h('div', { class: 'okbox' }, '✓ On track for 180 days.'));
    if (sug.length) { var c2 = card(b, 'Suggested make-up days'); c2.appendChild(h('table', null, h('tbody', null, sug.map(function (x) { return h('tr', null, h('td', null, Cal.pretty(x.date)), h('td', { class: 'small muted' }, x.why)); })))); c2.appendChild(h('p', { class: 'small muted' }, 'Add them in the kid app: Parent → Settings → Make-up planner.')); }
    var mk = (st.settings.makeup || []).filter(function (x) { return x >= d; });
    if (mk.length) { var c3 = card(b, 'Upcoming make-up days'); c3.appendChild(h('p', null, mk.slice(0, 12).map(function (x) { return Cal.short(x); }).join(', '))); }
    var c4 = card(b, 'Account');
    c4.appendChild(h('p', { class: 'small muted' }, 'Signed in as ' + (Sync.auth && Sync.auth.email || '') + '. The parent PIN stays in the kid app.'));
    c4.appendChild(h('button', { class: 'btn ghost small', onclick: function () { confirmBox('Sign out?', 'The copy on this phone is kept; you will need the family password to sign in again.', 'Sign out', function () { Sync.signOut(); render(); }); } }, 'Sign out'));
  }

  window.ParentApp = { render: render, sync: sync, A: A };
  render();
  if (Sync.auth) sync(true).then(render);
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible' && Sync.auth) sync(true).then(render); });
  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) navigator.serviceWorker.register('sw.js', { scope: './' }).catch(function () { });
})();
