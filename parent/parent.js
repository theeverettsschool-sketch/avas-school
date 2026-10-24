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
  var TABS = [['today', '🏠', 'Today'], ['week', '📅', 'Week'], ['behavior', '😊', 'Behavior'], ['work', '📝', 'Work'], ['money', '💵', 'Money'], ['plan', '🗓️', 'Plan']];
  function render() {
    var app = document.getElementById('app'); app.innerHTML = '';
    if (!Sync.cfg) { app.appendChild(h('main', null, h('div', { class: 'card' }, 'Firebase settings are missing (config.js).'))); return; }
    if (!Sync.auth) return login(app);
    var body = h('main'); var fn = { today: todayView, week: weekView, behavior: behaviorView, work: workView, money: moneyView, plan: planView }[A.tab] || todayView;
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
    var ol = offlineList(d); if (ol) c.appendChild(ol); c.appendChild(addTimeBtn(d, '+ Add time', 'addtime-today'));
    b.appendChild(h('div', { class: 'grid', style: { marginBottom: '12px' } },
      h('div', { class: 'stat' }, h('span', { class: 'small muted' }, 'Assignments'), h('b', null, I.done.length + ' / ' + I.lessons.length), h('span', { class: 'small muted' }, 'done today')),
      h('div', { class: 'stat' }, h('span', { class: 'small muted' }, 'Days counted'), h('b', null, counted + ' / 180'), bar(100 * counted / 180, true)),
      h('div', { class: 'stat' }, h('span', { class: 'small muted' }, 'Stars this week'), h('b', null, Store.weekStars(Store.mondayOf(d))), h('span', { class: 'small muted' }, money(Store.weekMoney(Store.mondayOf(d)).usd))),
      h('div', { class: 'stat', onclick: function () { A.tab = 'money'; render(); } }, h('span', { class: 'small muted' }, 'Waiting for payday'), h('b', null, money(Store.unpaid(today()))), h('span', { class: 'small muted' }, 'unpaid balance ›'))));
    var bw = h('div', { class: 'card', id: 'today-beh', onclick: function () { A.tab = 'behavior'; render(); } }, h('h2', null, 'Behavior today')), bi = h('div'); bi.innerHTML = Beh.widget(Store.behScore(d), { size: 34, bar: 20, num: true }) + ' <span class="small muted">' + (Store.behLatest(d) ? '' : 'default · tap to score') + '</span>'; bw.appendChild(bi); b.appendChild(bw);
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
    c.appendChild(addTimeBtn(null, '+ Add time', 'addtime-week'));
    c.appendChild(h('table', null, h('thead', null, h('tr', null, h('th', null, 'Day'), h('th', null, 'Minutes'), h('th', { class: 'r' }, 'Counts'))), h('tbody', null, r.days.map(function (x) { return h('tr', { 'data-day': x.date }, h('td', null, x.label, offlineList(x.date)), h('td', { style: { whiteSpace: 'nowrap' } }, x.mins + ' / ' + thr, bar(100 * x.mins / thr, x.counts), x.offline ? h('div', { class: 'small muted' }, 'incl. ' + x.offline + ' offline') : null), h('td', { class: 'r' }, x.counts ? '✓' : x.future ? 'coming up' : '', x.future ? null : h('div', null, addTimeBtn(x.date)))); }))));
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
    var c0 = card(b, 'Flagged in "Finish my day"'); c0.appendChild(h('p', { class: 'small muted' }, 'Assignments the end-of-day review sent back for a redo or fix, and whether she fixed them.'));
    c0.appendChild(flags.length ? h('table', null, h('tbody', null, flags.slice(0, 25).map(function (f) { var it = f.it, state = it.cleared ? 'cleared' : it.redo && it.redo.passed ? 'fixed' : 'open'; return h('tr', null, h('td', null, Cal.short(f.d)), h('td', null, it.title || it.lesson, (it.reasons || []).length ? h('div', { class: 'small muted' }, it.reasons[0]) : null), h('td', { class: 'r' }, h('span', { class: 'tag ' + (state === 'open' ? 'bad' : 'ok') }, state))); }))) : h('p', { class: 'small muted' }, 'Nothing flagged.'));
    var cm = card(b, 'Missed on first try (for review)'); cm.id = 'missed-first';
    cm.appendChild(h('p', { class: 'small muted' }, 'Questions she got wrong the first time, even if she fixed them on the second try. Good ones to go over together.'));
    if (!rows.length) { cm.appendChild(h('p', { class: 'muted' }, 'No missed answers saved.')); return; }
    rows.slice(0, 30).forEach(function (id) {
      var p = P[id], c = card(b); c.appendChild(h('div', { class: 'row' }, h('b', null, title(id)), h('span', { class: 'tag', style: { flex: '0 0 auto' } }, (p.right || 0) + '/' + (p.total || 0) + ' first try')));
      c.appendChild(h('div', { class: 'small muted' }, p.date ? Cal.pretty(p.date) : ''));
      p.missed.forEach(function (it) { c.appendChild(h('div', { class: 'flag' }, h('div', null, it.q || it.prompt || ''), h('div', { class: 'small' }, h('b', null, 'Correct: '), answerText(it)), h('div', { class: 'small' }, h('b', null, 'Ava answered: '), it.given !== undefined && it.given !== '' ? String(it.given) : h('span', { class: 'muted' }, 'not saved (answers are kept from v14 on)')))); });
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
    var st = S(), owe = Store.unpaid(today()), rows = Store.unpaidWeeks().filter(function (x) { return x.due > 0 || x.paid > 0; }).reverse(), goal = st.settings.saveGoal, d = today();
    var B = Store.payBreakdown(d);
    var c = card(b, 'Waiting for payday'); c.id = 'payday';
    c.appendChild(h('div', { class: 'big', id: 'unpaid' }, money(owe)));
    if (B.bonus || B.deductions || B.credit) c.appendChild(h('table', { id: 'pay-math', style: { margin: '6px 0' } }, h('tbody', null, h('tr', null, h('td', null, 'Weeks earned'), h('td', { class: 'r' }, money(B.weeks))), B.bonus ? h('tr', null, h('td', null, '🌟 Behavior bonus (' + B.bonusWeeks.filter(function (x) { return x.due > 0; }).length + ' wk)'), h('td', { class: 'r' }, '+' + money(B.bonus))) : null, B.credit ? h('tr', null, h('td', null, 'Score raised after payday (given back)'), h('td', { class: 'r' }, '+' + money(B.credit))) : null, B.auto ? h('tr', null, h('td', null, 'Rough-day deductions'), h('td', { class: 'r' }, '−' + money(B.auto))) : null, B.manual ? h('tr', null, h('td', null, 'Other deductions'), h('td', { class: 'r' }, '−' + money(B.manual))) : null, B.carry ? h('tr', null, h('td', { class: 'small muted' }, 'Not applied (balance stops at $0)'), h('td', { class: 'r small muted' }, money(B.carry))) : null, h('tr', null, h('td', null, h('b', null, 'To pay')), h('td', { class: 'r' }, h('b', null, money(owe)))))));
    if (B.carry) c.appendChild(h('p', { class: 'small muted' }, money(B.carry) + ' of deductions is more than what she has earned; it carries to the next payday (the balance never goes below $0).'));
    c.appendChild(h('p', { class: 'small muted' }, 'Unpaid since the last payout. ' + st.settings.starsPerDollar + ' stars = $1, up to ' + money(st.settings.weeklyCapUSD) + ' a week.'));
    if (Cal.parse(d).getDay() === 5 && owe > 0) c.appendChild(h('div', { class: 'okbox' }, '📅 It is Friday – payday!'));
    c.appendChild(rows.length ? h('table', null, h('thead', null, h('tr', null, h('th', null, 'Week of'), h('th', { class: 'r' }, 'Stars'), h('th', { class: 'r' }, 'Earned'), h('th', { class: 'r' }, 'Unpaid'))), h('tbody', null, rows.map(function (x) { return h('tr', null, h('td', null, Cal.short(x.week)), h('td', { class: 'r' }, x.stars), h('td', { class: 'r' }, money(x.earned) + (x.capped ? '*' : '')), h('td', { class: 'r' }, h('b', null, money(x.due)), x.paid ? h('div', { class: 'small muted' }, money(x.paid) + ' paid') : null)); }))) : h('p', { class: 'small muted' }, 'No stars earned yet.'));
    var autoL = []; B.autoWeeks.forEach(function (w) { if (w.due > 0) w.days.forEach(function (x) { autoL.push(x); }); });
    if (autoL.length) c.appendChild(h('div', { id: 'auto-ded', style: { marginTop: '6px' } }, autoL.map(function (x) { return h('div', { class: 'flag' }, Beh.dedLine(x, Cal)); })));
    if (rows.some(function (x) { return x.capped; })) c.appendChild(h('p', { class: 'small muted' }, '* reached the weekly max'));
    var sv = h('input', { type: 'number', min: 0, step: '0.25', inputmode: 'decimal', value: '', placeholder: '0.00', id: 'tosave' });
    if (goal && goal.amount) c.appendChild(h('div', null, h('label', { for: 'tosave' }, 'Part to savings goal "' + goal.name + '" ($)'), sv));
    if (B.weeks + B.bonus > 0) c.appendChild(h('button', { class: 'btn gold wide', id: 'markpaid', style: { marginTop: '10px' }, onclick: function () {
      var amt = owe, s = Math.max(0, Math.min(amt, +sv.value || 0));
      confirmBox('Mark paid ' + money(amt) + '?', 'Covers every unpaid week above' + (s ? ', with ' + money(s) + ' to savings' : '') + '. Her earned history is kept.', 'Yes, I paid her', function () {
        change(function () { return Store.payNow('parent app', s, today()); }, function (r) { return r ? 'Paid ' + money(r.amount) + ' ✓' : 'Nothing was unpaid after the latest sync.'; });
      });
    } }, 'Mark paid ' + money(owe)));
    var list = Store.payList(), c2 = card(b, 'Payout history');
    c2.appendChild(list.length ? h('table', null, h('tbody', null, list.map(function (p) { return h('tr', null, h('td', null, Cal.pretty(p.date), h('div', { class: 'small muted' }, Object.keys(p.weeks || {}).length + ' week(s) · ' + (p.by || '')), p.deducted ? h('div', { class: 'small', style: { color: '#c2410c' } }, '−' + money(p.deducted) + ' behavior: ' + Object.keys(p.adj || {}).map(function (k) { var x = (S().moneyAdj || {})[k]; return x ? x.reason : ''; }).concat(Object.keys(p.auto || {}).filter(function (w) { return p.auto[w] > 0; }).map(function (w) { var a = Store.autoWeek(w); return 'rough days, week of ' + Cal.short(w) + ' (' + money(p.auto[w]) + ')' + (a ? ': ' + a.days.map(function (d) { return Cal.short(d.date) + ' score ' + d.score + (d.note ? ' – ' + d.note : ''); }).join('; ') : ''); })).filter(Boolean).join('; ')) : null, p.bonus && Object.keys(p.bonus).length ? h('div', { class: 'small', style: { color: '#1f9d6b' } }, '🌟 +' + money(Object.keys(p.bonus).reduce(function (t, w) { return t + p.bonus[w]; }, 0)) + ' behavior bonus') : null), h('td', { class: 'r' }, h('b', null, money(p.amount)), p.toSave ? h('div', { class: 'small muted' }, money(p.toSave) + ' saved') : null)); }))) : h('p', { class: 'small muted' }, 'No payouts yet. The first one covers every week since ' + Cal.pretty(Store.payFrom()) + '.'));
    var c3 = card(b, 'Savings goal');
    if (goal && goal.amount) { var saved = Store.savedTotal(); c3.appendChild(h('p', null, goal.name + ': ' + money(saved) + ' of ' + money(goal.amount))); c3.appendChild(bar(100 * saved / goal.amount, true)); }
    var gn = h('input', { placeholder: 'e.g., new bike', value: goal ? goal.name : '' }), ga = h('input', { type: 'number', min: 0, inputmode: 'decimal', value: goal ? goal.amount : '' });
    c3.appendChild(h('details', null, h('summary', null, goal ? 'Change goal' : 'Set a goal'), h('label', null, 'Goal name'), gn, h('label', null, 'Amount ($)'), ga, h('button', { class: 'btn small', style: { marginTop: '8px' }, onclick: function () {
      change(function () { var a = Math.max(0, +ga.value || 0); S().settings.saveGoal = a && gn.value.trim() ? { name: gn.value.trim(), amount: a } : null; S().settings._u = Store.now(); }, 'Goal saved.');
    } }, 'Save goal')));
    // v13 behavior deduction
    var unit = { v: 'usd' }, dn = h('input', { type: 'number', min: 0, step: '0.25', inputmode: 'decimal', id: 'ded-n', placeholder: '1.00' }), dwhy = h('input', { id: 'ded-why', placeholder: 'Reason (required)' });
    var ub = h('div', { class: 'seg', style: { margin: '0 0 8px' } }, [['usd', '$ dollars'], ['stars', '⭐ stars']].map(function (u) { return h('button', { 'aria-selected': u[0] === 'usd' ? 'true' : 'false', 'data-unit': u[0], onclick: function () { unit.v = u[0]; [].forEach.call(ub.children, function (x) { x.setAttribute('aria-selected', x.dataset.unit === unit.v ? 'true' : 'false'); }); dn.placeholder = unit.v === 'usd' ? '1.00' : '50'; } }, u[1]); }));
    var cd = card(b, 'Behavior deduction'); cd.id = 'deduct';
    cd.appendChild(h('p', { class: 'small muted' }, 'Takes money off the unpaid balance (never below $0). It shows in payout history. You can undo it until it is paid out.'));
    cd.appendChild(ub); cd.appendChild(dn); cd.appendChild(h('div', { style: { marginTop: '8px' } }, dwhy));
    cd.appendChild(h('button', { class: 'btn wide', id: 'ded-go', style: { marginTop: '8px', background: '#c2410c' }, onclick: function () { var v = Math.abs(+dn.value || 0), w = dwhy.value.trim(); if (!v || !w) return toast('Enter an amount and a reason.'); change(function () { return Store.addDeduction(unit.v === 'usd' ? v : 0, unit.v === 'stars' ? v : 0, w, today(), 'parent app'); }, function (r) { return r ? '−' + money(r.usd) + ' deducted.' : 'Not saved.'; }); } }, 'Deduct'));
    var ap = Store.adjApplied(), dl = Object.keys(st.moneyAdj || {}).map(function (k) { return st.moneyAdj[k]; }).filter(function (x) { return x && x.kind === 'deduct'; }).sort(function (a, b) { return b.ts - a.ts; }).slice(0, 15);
    if (dl.length) cd.appendChild(h('table', { style: { marginTop: '8px' }, id: 'ded-list' }, h('tbody', null, dl.map(function (x) { var paid = ap[x.id] || 0, state = x.void ? 'undone' : paid >= x.usd ? 'paid out' : paid ? 'part paid out' : 'pending'; return h('tr', null, h('td', null, Cal.short(x.date)), h('td', { class: 'small' }, x.reason, x.stars ? h('div', { class: 'muted' }, x.stars + ' stars') : null), h('td', { class: 'r' }, (x.void ? h('s', null, '−' + money(x.usd)) : '−' + money(x.usd)), h('div', null, h('span', { class: 'tag ' + (state === 'pending' ? 'warn' : state === 'undone' ? '' : 'ok') }, state))), h('td', { class: 'r' }, !x.void && !paid ? h('button', { class: 'btn small ghost', onclick: function () { change(function () { return Store.undoDeduction(x.id); }, 'Deduction undone.'); } }, 'Undo') : null)); }))));
    var ac = Store.autoCfg(), aOn = h('input', { type: 'checkbox', id: 'auto-on', style: { width: 'auto' } }); aOn.checked = ac.on;
    var tIn = ac.tiers.slice(0, 3).map(function (v, i) { return h('input', { type: 'number', min: 0, step: '0.5', id: 'auto-t' + (i + 1), value: v }); }), lIn = h('input', { type: 'number', min: 2, max: 10, id: 'auto-lose', value: ac.loseAt });
    var ca = card(b, 'Automatic rough-day deductions'); ca.id = 'auto-settings';
    ca.appendChild(h('p', { class: 'small muted' }, 'A score of ' + ac.max + ' or lower is a rough day (1–2 counts as two). Each Mon–Sun week, step by step:'));
    ca.appendChild(h('label', { style: { display: 'flex', gap: '8px', alignItems: 'center' } }, aOn, 'On'));
    ca.appendChild(h('div', { class: 'row' }, h('div', null, h('label', null, '1st $'), tIn[0]), h('div', null, h('label', null, '2nd $'), tIn[1]), h('div', null, h('label', null, '3rd $'), tIn[2]), h('div', null, h('label', null, 'Lose week at'), lIn)));
    ca.appendChild(h('p', { class: 'small muted' }, 'Default: −$1, −$2, −$5 (total $8), and the 4th rough day loses the whole week. Changing a score updates this automatically.'));
    ca.appendChild(h('button', { class: 'btn small', id: 'auto-save', onclick: function () { change(function () { S().settings.autoDed = { on: aOn.checked, tiers: tIn.map(function (x) { return Math.max(0, +x.value || 0); }), loseAt: Math.max(2, Math.min(10, Math.round(+lIn.value || 4))) }; S().settings._u = Store.now(); }, 'Saved.'); } }, 'Save'));
    var bc = Store.bonusCfg(), bOn = h('input', { type: 'checkbox', id: 'bon-on', style: { width: 'auto' } }); bOn.checked = bc.on;
    var bUsd = h('input', { type: 'number', min: 0, step: '0.5', id: 'bon-usd', value: (st.settings.behBonus && st.settings.behBonus.usd) || 2 }), bMin = h('input', { type: 'number', min: 1, max: 10, step: '0.5', id: 'bon-min', value: (st.settings.behBonus && st.settings.behBonus.min) || 9 });
    var cb = card(b, 'Weekly behavior bonus');
    cb.appendChild(h('label', { style: { display: 'flex', gap: '8px', alignItems: 'center' } }, bOn, 'On (off by default)'));
    cb.appendChild(h('div', { class: 'row' }, h('div', null, h('label', null, '+$ per week'), bUsd), h('div', null, h('label', null, 'if average ≥'), bMin)));
    cb.appendChild(h('p', { class: 'small muted' }, 'Added once the week\'s Friday arrives, if her school-day average reaches the target. Paid with the next payday.'));
    cb.appendChild(h('button', { class: 'btn small', id: 'bon-save', onclick: function () { change(function () { S().settings.behBonus = { on: bOn.checked, usd: Math.max(0, +bUsd.value || 0), min: Math.max(1, Math.min(10, +bMin.value || 9)) }; S().settings._u = Store.now(); }, 'Bonus setting saved.'); } }, 'Save'));
    var n = h('input', { type: 'number', inputmode: 'numeric', id: 'adj-n', placeholder: '+10 or -5' }), why = h('input', { id: 'adj-why', placeholder: 'Reason (e.g., helped with chores)' });
    var c4 = card(b, 'Adjust stars');
    c4.appendChild(h('p', { class: 'small muted' }, 'Add or take away stars with a reason. It goes into this week and her history.'));
    c4.appendChild(h('div', { class: 'row' }, n, h('button', { class: 'btn small', style: { flex: '0 0 auto' }, onclick: function () { n.value = (+n.value || 0) + 5; } }, '+5'), h('button', { class: 'btn small ghost', style: { flex: '0 0 auto' }, onclick: function () { n.value = (+n.value || 0) - 5; } }, '−5')));
    c4.appendChild(h('div', { style: { marginTop: '8px' } }, why));
    c4.appendChild(h('button', { class: 'btn wide', id: 'adj-go', style: { marginTop: '8px' }, onclick: function () { var k = Math.round(+n.value || 0), w = why.value.trim(); if (!k || !w) return toast('Enter stars and a reason.'); change(function () { return Store.addStars(k, 'Parent: ' + w, '', today(), today()); }, (k > 0 ? '+' : '') + k + ' stars saved.'); } }, 'Save adjustment'));
    var adj = Object.keys(st.ledger).map(function (k) { return st.ledger[k]; }).filter(function (e) { return /^Parent:/.test(e.why || ''); }).sort(function (a, b) { return b.ts - a.ts; }).slice(0, 10);
    if (adj.length) c4.appendChild(h('table', { style: { marginTop: '8px' } }, h('tbody', null, adj.map(function (e) { return h('tr', null, h('td', null, Cal.short(e.date)), h('td', null, e.why.replace(/^Parent: /, '')), h('td', { class: 'r' }, (e.stars > 0 ? '+' : '') + e.stars)); }))));
  }

  // ---------- v14 offline minutes (same time entries the kid app's Parent -> Overview writes) ----------
  function addTimeForm(date) {
    var d0 = date || today(), thr = Store.threshold();
    var dIn = h('input', { type: 'date', id: 'at-date', value: d0, max: today() }), sub = h('select', { id: 'at-subj' }, Store.OFFLINE.filter(function (o) { return o[0] !== 'writing' && o[0] !== 'arts'; }).map(function (o) { return h('option', { value: o[0] }, o[1]); }));
    var mIn = h('input', { type: 'number', id: 'at-mins', min: 1, max: 720, inputmode: 'numeric', placeholder: 'minutes' }), note = h('input', { id: 'at-note', placeholder: 'Note (e.g., Georgia Aquarium)' }), info = h('p', { class: 'small muted', id: 'at-info' });
    function upd() { var d = dIn.value || d0; info.textContent = Cal.pretty(d) + ': ' + Store.dayMinutes(d) + ' of ' + thr + ' min so far' + (Store.dayCounts(d) ? ' (already counts ✓)' : ', ' + Store.fillMins(d) + ' to go') + '.'; }
    dIn.addEventListener('change', upd);
    var m = h('div', { class: 'modal' }, h('div', { id: 'addtime' }, h('h2', { style: { margin: '0 0 4px' } }, 'Add time'), h('p', { class: 'small muted', style: { margin: 0 } }, 'Learning away from the app: field trips, read-alouds, sports, church class.'),
      h('label', { for: 'at-date' }, 'Day'), dIn, h('label', { for: 'at-subj' }, 'Subject'), sub, h('label', { for: 'at-mins' }, 'Minutes'), mIn,
      h('button', { class: 'btn small ghost', id: 'at-fill', style: { marginTop: '8px' }, onclick: function () { var f = Store.fillMins(dIn.value || d0); if (!f) return toast('That day already has ' + thr + '+ minutes.'); mIn.value = f; } }, '⚡ Fill the rest of the day to ' + thr),
      info, h('label', { for: 'at-note' }, 'Note (optional)'), note,
      h('div', { class: 'row', style: { marginTop: '14px' } }, h('button', { class: 'btn ghost', onclick: function () { m.remove(); } }, 'Cancel'), h('button', { class: 'btn gold', id: 'at-save', onclick: function () {
        var d = dIn.value, n = Math.round(+mIn.value || 0); if (!d || d > today()) return toast('Pick today or a past day.'); if (n < 1 || n > 720) return toast('Enter 1 to 720 minutes.');
        m.remove(); change(function () { return Store.addOffline({ date: d, subject: sub.value, mins: n, note: note.value, by: 'parent app' }); }, function () { return n + ' min added to ' + Cal.short(d) + (Store.dayCounts(d) ? ' – day counts ✓' : ''); });
      } }, 'Add'))));
    document.body.appendChild(m); upd();
  }
  function addTimeBtn(date, label, id) { return h('button', { class: 'btn small' + (label ? '' : ' ghost'), id: id || null, 'data-addtime': date || '', 'aria-label': 'Add time' + (date ? ' for ' + date : ''), onclick: function (e) { e.stopPropagation(); addTimeForm(date); } }, label || '＋'); }
  function offlineList(d) {
    var L = Store.offlineEntries(d, true); if (!L.length) return null;
    return h('div', { class: 'offl', 'data-off': d }, L.map(function (e) { var gone = !!e.removed; return h('div', { class: 'small', style: { display: 'flex', gap: '6px', alignItems: 'center', margin: '3px 0', opacity: gone ? 0.55 : 1 } }, h('span', { class: 'tag' }, 'offline'), h('span', { style: { flex: '1' } }, (gone ? h('s', null, Math.round((e.prevSecs || 0) / 60) + ' min') : Math.round(e.secs / 60) + ' min') , ' ' + subjName(e.subject) + (e.note ? ' – ' + e.note : '')),
      gone ? h('button', { class: 'btn small ghost', 'data-undo': e.id, onclick: function () { change(function () { Store.restoreTime(e.id); }, 'Restored.'); } }, 'Undo') : h('button', { class: 'btn small ghost', 'data-del': e.id, 'aria-label': 'Delete', onclick: function () { change(function () { Store.removeTime(e.id); }, 'Deleted. Tap Undo to bring it back.'); } }, '✕')); }));
  }

  function behaviorView(b) {
    var st = S(), d = A.behDate || today(), sc = Store.behScore(d), cur = Store.behLatest(d), pick = { score: cur ? cur.score : sc, reasons: {} };
    var c = card(b, 'Behavior'); c.id = 'beh-editor';
    var dIn = h('input', { type: 'date', value: d, max: today(), id: 'beh-date', onchange: function () { A.behDate = dIn.value || today(); render(); } });
    c.appendChild(h('label', { for: 'beh-date' }, 'Day')); c.appendChild(dIn);
    var view = h('div', { style: { margin: '12px 0', textAlign: 'center' }, id: 'beh-view' }); c.appendChild(view);
    function paint() { view.innerHTML = Beh.face(pick.score, 64) + '<div style="margin-top:6px">' + Beh.bars(pick.score, 26) + '</div><div><b>' + pick.score + '/10 · ' + Beh.band(pick.score).name + '</b></div>' + (cur ? '' : '<div class="small muted">No score saved for this day yet (starts at ' + Store.behDefault() + ')</div>');
      [].forEach.call(grid.children, function (x) { x.setAttribute('aria-pressed', +x.dataset.v === pick.score ? 'true' : 'false'); x.style.outline = +x.dataset.v === pick.score ? '3px solid #1b2a4e' : 'none'; }); }
    var grid = h('div', { class: 'beh-grid', style: { display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '6px' } }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (v) { return h('button', { class: 'btn small', 'data-v': v, style: { background: Beh.band(v).color, color: v >= 5 && v <= 8 ? '#1b2a4e' : '#fff' }, onclick: function () { pick.score = v; paint(); } }, String(v)); }));
    c.appendChild(h('label', null, 'Score (1–10)')); c.appendChild(grid);
    c.appendChild(h('label', null, 'Reasons (optional)'));
    c.appendChild(h('div', { class: 'row', style: { flexWrap: 'wrap' } }, Store.REASONS.map(function (r) { var bt = h('button', { class: 'btn small ghost chip', 'aria-pressed': 'false', 'data-r': r, onclick: function () { pick.reasons[r] = !pick.reasons[r]; bt.setAttribute('aria-pressed', pick.reasons[r] ? 'true' : 'false'); bt.className = 'btn small chip' + (pick.reasons[r] ? '' : ' ghost'); } }, r); return bt; })));
    var note = h('textarea', { rows: 2, id: 'beh-note', placeholder: 'Note for Ava (she will see it)' }); c.appendChild(h('label', { for: 'beh-note' }, 'Note (optional)')); c.appendChild(note);
    c.appendChild(h('button', { class: 'btn gold wide', id: 'beh-save', style: { marginTop: '10px' }, onclick: function () { var rs = Store.REASONS.filter(function (r) { return pick.reasons[r]; }); change(function () { return Store.addBehavior(d, pick.score, rs, note.value.trim(), 'parent app'); }, 'Saved ' + pick.score + '/10 for ' + Cal.short(d) + '.'); } }, 'Save score'));
    paint();
    var mon = Store.mondayOf(today()), a1 = Store.behWeekAvg(mon, today()), a0 = Store.behWeekAvg(Cal.addDays(mon, -7));
    var c2 = card(b, 'Weekly average'); c2.appendChild(h('div', { class: 'grid' }, h('div', null, h('span', { class: 'small muted' }, 'This week'), h('b', { style: { display: 'block', fontSize: '1.4rem' }, id: 'beh-avg' }, a1 === null ? '–' : a1)), h('div', null, h('span', { class: 'small muted' }, 'Last week'), h('b', { style: { display: 'block', fontSize: '1.4rem' } }, a0 === null ? '–' : a0))));
    var tr = h('div', { style: { display: 'flex', gap: '4px', marginTop: '10px' } }, Beh.trend(Store, today(), Cal).map(function (x) { var e = h('div', { style: { flex: '1', textAlign: 'center', opacity: x.set ? 1 : 0.5 } }); e.innerHTML = Beh.face(x.score, 30) + '<div class="small">' + Cal.parse(x.date).toLocaleDateString([], { weekday: 'narrow' }) + '</div>'; return e; })); c2.appendChild(tr);
    c2.appendChild(h('p', { class: 'small muted' }, 'School days without a score count as the default (' + Store.behDefault() + ').'));
    var hist = Store.behEntries().reverse().slice(0, 30), c3 = card(b, 'History');
    c3.appendChild(hist.length ? h('table', null, h('tbody', null, hist.map(function (x) { var latest = Store.behLatest(x.date) === x; return h('tr', null, h('td', null, Cal.short(x.date), latest ? null : h('div', { class: 'small muted' }, 'replaced')), h('td', null, h('b', null, x.score)), h('td', { class: 'small' }, (x.reasons || []).join(', '), x.note ? h('div', { class: 'muted' }, x.note) : null), h('td', { class: 'r' }, h('button', { class: 'btn small ghost', onclick: function () { confirmBox('Remove this score?', x.score + '/10 on ' + Cal.pretty(x.date) + '.', 'Remove', function () { change(function () { Store.removeBehavior(x.id); }, 'Removed.'); }); } }, '✕'))); }))) : h('p', { class: 'small muted' }, 'No scores yet.'));
    var def = h('input', { type: 'number', min: 1, max: 10, value: Store.behDefault(), id: 'beh-def' }), c4 = card(b, 'Default score');
    c4.appendChild(h('p', { class: 'small muted' }, 'Each day starts at this score until you set one.')); c4.appendChild(h('div', { class: 'row' }, def, h('button', { class: 'btn small', style: { flex: '0 0 auto' }, onclick: function () { var v = Math.max(1, Math.min(10, Math.round(+def.value || 8))); change(function () { S().settings.behaviorDefault = v; S().settings._u = Store.now(); }, 'Default is now ' + v + '.'); } }, 'Save')));
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
