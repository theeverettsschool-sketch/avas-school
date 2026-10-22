/* v5 "Finish my day": button under the day's schedule, results screen, writing "Try again" screen, parent daily report. */
(function (root) {
  'use strict';
  var h = UI.h, S = function () { return Store.state; };
  var Finish = {};

  // button at the bottom of a day's schedule (today on Home, or a past day)
  Finish.button = function (date) {
    var ds = Player.dayStatus(date), left = ds.blocks.filter(function (b) { return !b.done; }), rev = (S().reviews || {})[date];
    if (!ds.blocks.length) return null;
    var href = '#/finish/' + date;
    if (left.length) return h('div', { class: 'card finish-card' }, h('button', { class: 'btn', type: 'button', disabled: true, id: 'finish-btn' }, 'Finish my day ✔'),
      h('p', { class: 'small muted' }, 'Finish every block first. Still to do: ' + left.map(function (b) { return b.b.name; }).join(', ') + '.'));
    var T = Store.threshold(), mins = Store.dayMinutes(date), dayDone = rev && rev.done && (mins >= T || rev.endedByParent);
    var label = dayDone ? 'School day done ✔ See my review' : rev && rev.done ? 'Continue: practice rounds (' + (T - mins) + ' min left)' : rev ? 'Back to my review (' + Review.outstanding(rev).length + ' to fix)' : 'Finish my day ✔';
    return h('div', { class: 'card finish-card' }, h('a', { class: 'btn gold big', href: href, id: 'finish-btn' }, label), h('p', { class: 'small muted' }, 'Checks every assignment from today. Anything below ' + Review.cfg().pct + '% or writing that needs work comes back for a quick fix.'));
  };

  function backHref(date) { return date === UI.today() ? '#/' : '#/day/' + date; }
  function itemLine(it, date, rev) {
    var fixed = it.flag && Review.resolved(it), score = it.kind === 'auto' ? it.pct + '% (' + it.right + '/' + it.total + ')' : it.words + ' words';
    var head = h('div', { class: 'rv-head' }, h('b', null, it.kind === 'write' ? it.title + ': ' + it.what : it.title), h('span', { class: 'muted small' }, ' ' + UI.subjectName(it.subject) + ' · ' + score));
    var body = [];
    if (it.ai && it.ai.feedbackForStudent && !it.cleared) body.push(h('p', { class: 'rv-ai' }, '💬 ' + it.ai.feedbackForStudent));
    if (!it.flag) return h('li', { class: 'rv-ok' }, head, body);
    if (fixed) return h('li', { class: 'rv-ok' }, head, h('span', { class: 'badge ok' }, it.cleared ? 'OK (parent)' : 'Fixed ✓'), body);
    body = body.concat(it.reasons.map(function (r) { return h('p', { class: 'rv-why' }, r); }));
    var b = it.kind === 'auto' ? h('a', { class: 'btn gold small', href: '#/redo/' + date + '/' + encodeURIComponent(it.key), 'data-redo': it.key }, it.redo ? '🔁 Try the redo again' : '🔁 Redo the missed ones')
      : h('a', { class: 'btn gold small', href: '#/fix/' + date + '/' + encodeURIComponent(it.key), 'data-fix': it.key }, '✏️ Try again');
    return h('li', { class: 'rv-fix' }, head, body, b);
  }

  Finish.open = function (date) {
    var ds = Player.dayStatus(date); if (date > UI.today() || !ds.blocks.length) return UI.go('/');
    if (ds.blocks.some(function (b) { return !b.done; }) && !(S().reviews || {})[date]) { UI.toast('Finish every block first.'); return UI.go(backHref(date).slice(1)); }
    var rev = Review.build(date); UI.commit(); paint(date, rev, false);
    if (Review.cfg().aiUrl && Object.keys(rev.items).some(function (k) { return rev.items[k].kind === 'write'; })) {
      paint(date, rev, true);
      Review.aiReview(date).then(function (r) { UI.commit(); if (location.hash === '#/finish/' + date) { paint(date, S().reviews[date], false); if (r.failed) UI.toast('Writing helper is not reachable right now, so the app checked your writing itself.', 4000); } });
    }
  };
  function paint(date, rev, checking) {
    var items = Object.keys(rev.items).map(function (k) { return rev.items[k]; }), out = Review.outstanding(rev), good = items.filter(function (i) { return !i.flag || Review.resolved(i); }), fix = items.filter(function (i) { return i.flag && !Review.resolved(i); });
    var main = h('main', { class: 'wrap', id: 'review' }, h('h1', { style: { marginTop: '18px' } }, 'My day review: ' + Cal.pretty(date)));
    if (checking) main.appendChild(h('div', { class: 'fb info' }, '✨ Checking your writing…'));
    var T = Store.threshold(), mins = Store.dayMinutes(date);
    if (!out.length && (mins >= T || rev.endedByParent)) {
      main.appendChild(h('div', { class: 'cele', id: 'all-done' }, h('div', { class: 'big' }, '🎉'), h('h1', null, 'Your school day is done!'), h('p', null, mins + ' minutes of learning' + (rev.endedByParent && mins < T ? ' (your parent ended the day)' : '') + '. Every assignment is checked and fixed. "Whatever you do, work at it with all your heart." (Colossians 3:23)'), h('a', { class: 'btn gold', href: backHref(date) }, 'Back')));
      if (!rev.celebrated) { rev.celebrated = true; rev._u = Store.now(); UI.commit(); if (root.Fx) Fx.confetti(120); UI.sound && UI.sound('win'); if (root.App && App.syncSoon) App.syncSoon('finish'); }
    } else if (!out.length) {
      main.appendChild(h('div', { class: 'card', id: 'practice-card', style: { textAlign: 'center' } }, h('h2', null, '✅ Corrections done!'), h('p', null, 'You have ' + mins + ' of ' + T + ' minutes today. Practice rounds fill the last ' + (T - mins) + ' minutes, mixing subjects (your trickiest ones first). Small bonus stars for correct answers.'),
        h('a', { class: 'btn gold big', href: '#/practice/' + date, id: 'practice-btn' }, '⭐ Start practice rounds (' + (T - mins) + ' min)'),
        h('p', null, h('button', { class: 'btn ghost small', type: 'button', id: 'end-day-review', onclick: function () { UI.requirePin(function () { Player.endDay(date); }); } }, '🔒 Parent: end the day now'))));
    } else main.appendChild(h('div', { class: 'fb info' }, h('b', { class: 'h' }, out.length + ' thing' + (out.length > 1 ? 's' : '') + ' to fix'), 'Fix these and your day is finished. You can do them in any order.'));
    if (fix.length) main.appendChild(h('div', { class: 'card' }, h('h2', null, '🔧 To fix'), h('ul', { class: 'rv-list' }, fix.map(function (i) { return itemLine(i, date, rev); }))));
    var PR = (S().practice || {})[date], pk = PR ? Object.keys(PR).filter(function (k) { return PR[k] && PR[k].total; }) : [];
    if (pk.length) main.appendChild(h('div', { class: 'card' }, h('h2', null, '⭐ Bonus practice'), h('p', null, pk.map(function (k) { return UI.subjectName(Schedule.BLOCKS.filter(function (b) { return b.key === k; }).map(function (b) { return b.subject; })[0] || k) + ': ' + PR[k].right + ' of ' + PR[k].total + ' right'; }).join(' · '))));
    if (good.length) main.appendChild(h('div', { class: 'card' }, h('h2', null, '⭐ What\'s great'), h('ul', { class: 'rv-list' }, good.map(function (i) { return itemLine(i, date, rev); }))));
    if (!items.length) main.appendChild(h('div', { class: 'card' }, h('p', null, 'Nothing to check today (timer blocks only). Great job!')));
    main.appendChild(h('p', null, h('a', { class: 'btn ghost', href: backHref(date) }, '← Back to the schedule')));
    UI.render(Home.topbar(), main);
  }

  // writing "Try again"
  Finish.fix = function (date, key) {
    var rev = (S().reviews || {})[date], it = rev && rev.items[key]; if (!it) return UI.go('/finish/' + date);
    var ta = h('textarea', { class: 'ans journal', 'aria-label': 'Your writing', autocapitalize: 'sentences', id: 'fix-text' }), wc = h('div', { class: 'small muted' }), msg = h('div');
    ta.value = Review.textOf(it);
    var stopT = Player.trackSimple(date, 'fix:' + it.lesson, it.subject, (Plan.find(it.lesson) || {}).block); UI.cleanup = stopT; // corrections time counts toward the day
    function upd() { var n = ta.value.trim().split(/\s+/).filter(Boolean).length; wc.textContent = n + ' words (at least ' + it.min + ')'; wc.style.color = n >= it.min ? 'var(--good)' : 'var(--muted)'; }
    ta.addEventListener('input', upd);
    var go = h('button', { class: 'btn gold', type: 'button', id: 'fix-check', onclick: function () {
      var ch = Review.recordFix(date, key, ta.value.trim()); UI.commit(); msg.innerHTML = '';
      if (ch.ok) { UI.toast('Nice work! That looks great.'); UI.go('/finish/' + date); }
      else msg.appendChild(h('div', { class: 'fb warn' }, h('b', { class: 'h' }, 'Almost there'), ch.reasons.map(function (r) { return h('p', null, r); })));
    } }, 'Check my writing');
    UI.render(Home.topbar(), h('main', { class: 'wrap' }, h('h1', { style: { marginTop: '18px' } }, '✏️ Try again: ' + it.what),
      h('div', { class: 'card' }, h('span', { class: 'badge' }, it.title), h('p', { class: 'prompt' }, it.prompt || ''), UI.canSpeak() ? UI.speakBtn(it.prompt || '', 'Read it to me') : null),
      h('div', { class: 'fb info' }, h('b', { class: 'h' }, 'How to make it better'), it.reasons.map(function (r) { return h('p', null, r); })),
      ta, wc, msg, h('div', { class: 'sticky-actions' }, h('a', { class: 'btn ghost', href: '#/finish/' + date }, 'Back'), go)));
    upd();
  };

  // ---------- parent: daily report ----------
  Finish.report = function (box) {
    var st = S(), d = Finish.repDate || UI.today(), dIn = h('input', { class: 'f-in', type: 'date', value: d, style: { width: '180px' }, 'aria-label': 'Report day', onchange: function () { Finish.repDate = dIn.value; Parent.render(); } });
    var rev = (st.reviews || {})[d];
    box.appendChild(h('div', { class: 'card no-print' }, h('div', { class: 'row' }, h('label', null, 'Day: '), dIn, h('button', { class: 'btn small', onclick: function () { Review.build(d); UI.commit(); Parent.render(); } }, rev ? 'Re-check now' : 'Run the review now'), h('button', { class: 'btn small ghost', onclick: function () { window.print(); } }, '🖨️ Print'))));
    var rep = h('div', { class: 'card', id: 'daily-report' }, h('h3', null, 'Daily report: ' + Cal.pretty(d)), h('p', { class: 'small muted' }, 'Minutes: ' + Store.dayMinutes(d) + ' of ' + Store.threshold() + (Store.dayCounts(d) ? ' (counts toward 180)' : '') + '. ' + (rev ? (rev.done ? 'Day review finished.' : Review.outstanding(rev).length + ' item(s) still to fix.') + ' Checked ' + new Date(rev.ts).toLocaleString() : 'She has not tapped "Finish my day" for this day yet.')));
    box.appendChild(rep); if (!rev) return;
    var items = Object.keys(rev.items).map(function (k) { return rev.items[k]; }), bySub = {};
    items.filter(function (i) { return i.kind === 'auto'; }).forEach(function (i) { var b = bySub[i.subject] || (bySub[i.subject] = { r: 0, t: 0 }); b.r += i.right; b.t += i.total; });
    rep.appendChild(h('h4', null, 'Scores by subject'));
    rep.appendChild(Object.keys(bySub).length ? h('table', null, h('tbody', null, Object.keys(bySub).map(function (k) { var b = bySub[k]; return h('tr', null, h('td', null, UI.subjectName(k)), h('td', null, Math.round(100 * b.r / b.t) + '%'), h('td', { class: 'muted' }, b.r + '/' + b.t)); }))) : h('p', { class: 'muted' }, 'No auto-graded work.'));
    rep.appendChild(h('h4', null, 'Assignments'));
    rep.appendChild(h('table', { class: 'rv-table' }, h('thead', null, h('tr', null, ['Assignment', 'Result', 'Flag / redo', ''].map(function (x) { return h('th', null, x); }))), h('tbody', null, items.map(function (i) {
      var res = i.kind === 'auto' ? i.pct + '% (' + i.right + '/' + i.total + ')' : i.words + ' words' + (i.ai ? ' · AI ' + i.ai.score + '/4' : '');
      var st2 = !i.flag ? h('span', { class: 'badge ok' }, 'OK') : i.cleared ? h('span', { class: 'badge ok' }, 'Cleared by you') : i.redo && i.redo.passed ? h('span', { class: 'badge ok' }, 'Redo passed' + (i.redo.total ? ' ' + i.redo.right + '/' + i.redo.total : '') + ' (' + i.redo.tries + ' tr' + (i.redo.tries > 1 ? 'ies' : 'y') + ')') : h('span', { class: 'badge warn' }, (i.kind === 'auto' ? 'Redo' : 'Try again') + (i.redo ? ' (tried ' + i.redo.tries + ')' : ''));
      var act = (!i.flag || i.cleared || (i.redo && i.redo.passed)) ? h('button', { class: 'btn small ghost no-print', 'data-require': i.key, onclick: function () { Review.parentSet(d, i.key, 'require'); UI.commit(); Parent.render(); } }, 'Require redo') : h('button', { class: 'btn small no-print', 'data-clear': i.key, onclick: function () { Review.parentSet(d, i.key, 'clear'); UI.commit(); Parent.render(); } }, 'Clear flag');
      return h('tr', null, h('td', null, h('b', null, i.title), i.kind === 'write' ? h('div', { class: 'small muted' }, i.what) : null), h('td', null, res), h('td', null, st2, i.flag && !Review.resolved(i) ? h('div', { class: 'small' }, i.reasons.join(' ')) : null), h('td', null, act));
    }))));
    // time: tracked (her real active time) vs credited (required minutes)
    var lessonIds = {}; items.forEach(function (i) { lessonIds[i.lesson] = 1; }); Plan.forDate(d, st.settings).lessons.forEach(function (l) { lessonIds[l.id] = 1; });
    // day breakdown: assignments / corrections / practice / parent-added vs target
    var cat = { a: 0, c: 0, p: 0, x: 0 }; Store.timeEntries(function (e) { return e.date === d; }).forEach(function (e) { var l = String(e.lesson || ''); if (e.src === 'parent') cat.x += e.secs; else if (/^(redo|fix):/.test(l)) cat.c += e.secs; else if (/^prac:/.test(l)) cat.p += e.secs; else cat.a += e.secs; });
    var mm = function (s) { return Math.round(s / 60) + ' min'; };
    rep.appendChild(h('h4', null, 'Time today'));
    rep.appendChild(h('table', { id: 'day-time' }, h('tbody', null, h('tr', null, h('td', null, 'Assignments (incl. timer blocks)'), h('td', null, mm(cat.a))), h('tr', null, h('td', null, 'Corrections (redos / try again)'), h('td', null, mm(cat.c))), h('tr', null, h('td', null, 'Practice rounds'), h('td', null, mm(cat.p))), cat.x ? h('tr', null, h('td', null, 'Added by you'), h('td', null, mm(cat.x))) : null,
      h('tr', null, h('td', null, h('b', null, 'Total vs target')), h('td', null, h('b', null, Store.dayMinutes(d) + ' / ' + Store.threshold() + ' min' + (rev.endedByParent ? ' (ended early by parent)' : '')))))));
    var T = st.time || {}, trows = Object.keys(lessonIds).map(function (id) { var tr = 0, cr = 0; for (var k in T) { var e = T[k]; if (!e || e.removed || e.date !== d || e.lesson !== id) continue; if (e.src === 'credit') cr += e.secs; else tr += e.secs; } return { id: id, tr: Math.round(tr / 60), cr: Math.round(cr / 60) }; }).filter(function (r) { return r.tr || r.cr; });
    if (trows.length) { rep.appendChild(h('h4', null, 'Time: tracked vs credited')); rep.appendChild(h('table', null, h('thead', null, h('tr', null, ['Assignment', 'Tracked (active)', 'Credited'].map(function (x) { return h('th', null, x); }))), h('tbody', null, trows.map(function (r) { var L = Plan.find(r.id); return h('tr', null, h('td', null, L ? L.title : r.id), h('td', null, r.tr + ' min'), h('td', null, r.cr ? r.cr + ' min' : '-')); })))); }
    var PR = (st.practice || {})[d]; if (PR) { var pk = Object.keys(PR).filter(function (k) { return PR[k] && PR[k].total; }); if (pk.length) { rep.appendChild(h('h4', null, 'Bonus practice')); rep.appendChild(h('p', null, pk.map(function (k) { return k + ': ' + PR[k].right + '/' + PR[k].total; }).join(' · '))); } }
    var W = items.filter(function (i) { return i.kind === 'write'; });
    if (W.length) { rep.appendChild(h('h4', null, 'Her writing')); W.forEach(function (i) { rep.appendChild(h('div', { class: 'rv-writing' }, h('b', null, i.title + ': ' + i.what), h('p', { class: 'small muted' }, i.prompt || ''), h('p', { style: { whiteSpace: 'pre-wrap' } }, Review.textOf(i)), i.ai ? h('p', { class: 'small' }, 'Writing helper: ' + i.ai.score + '/4. ' + (i.ai.strengths || '') + (i.ai.fixes.length ? ' Fixes: ' + i.ai.fixes.join('; ') : '')) : null, i.reasons.length ? h('p', { class: 'small' }, 'Checks: ' + i.reasons.join(' ')) : h('p', { class: 'small' }, 'Checks: looks good.'))); }); }
  };
  // ---------- parent settings card ----------
  Finish.settingsCard = function () {
    var st = S(), s = st.settings, C = Review.cfg();
    var pct = h('input', { class: 'f-in', type: 'number', min: 50, max: 100, value: C.pct, style: { width: '90px' }, id: 'rv-pct', 'aria-label': 'Redo threshold percent' });
    var bon = h('input', { type: 'checkbox', id: 'rv-bonus' }); bon.checked = C.bonus;
    var bs = h('input', { class: 'f-in', type: 'number', min: 0, max: 3, value: C.bonusStars, style: { width: '70px' }, 'aria-label': 'Bonus stars per fixed item' });
    var url = h('input', { class: 'f-in', type: 'url', value: s.aiUrl || '', placeholder: 'https://ava-grader.<you>.workers.dev  (blank = off)', id: 'rv-ai', 'aria-label': 'AI grading URL' }), msg = h('p', { class: 'small' });
    return h('div', { class: 'card', id: 'review-card' }, h('h3', null, '✔ Finish my day review'),
      h('p', { class: 'small muted' }, 'When she taps "Finish my day", any auto-graded assignment below this score comes back as a Redo of only the missed questions (math: a fresh similar set). Writing is checked for length, real words, answering the prompt, and capitals/end marks. Redos never add learning minutes.'),
      h('div', { class: 'row' }, h('label', null, 'Redo below: '), pct, h('span', null, '%'), h('label', { class: 'check' }, bon, 'Bonus stars for fixing mistakes'), h('label', null, 'stars per fixed item (max 5 a redo): '), bs),
      h('label', { class: 'f' }, 'AI writing grading URL (optional, off when blank)'), url,
      h('p', { class: 'small muted' }, 'Only a proxy URL goes here, never an API key. See ai-proxy/README.md in the app repo. If the helper is offline or errors, the app uses its own checks.'),
      h('div', { class: 'row' }, h('button', { class: 'btn small gold', onclick: function () { s.reviewPct = Math.max(50, Math.min(100, Math.round(+pct.value || 80))); s.redoBonus = bon.checked; s.redoBonusStars = Math.max(0, Math.min(3, Math.round(+bs.value || 0))); var u = url.value.trim(); if (u && !/^https:\/\//.test(u) && !/^http:\/\/(localhost|127\.0\.0\.1)/.test(u)) return UI.toast('The URL must start with https://'); s.aiUrl = u; s._u = Store.now(); UI.commit(); UI.toast('Saved.'); } }, 'Save'),
        h('button', { class: 'btn small ghost', onclick: function () { var u = url.value.trim(); if (!u) return UI.toast('Enter a URL first.'); msg.textContent = 'Testing…'; Review.aiGrade(u, { prompt: 'Tell about your favorite animal.', what: 'test', min: 10 }, 'My favorite animal is a dog because dogs are loyal and fun to play with.').then(function (r) { msg.textContent = 'Works: score ' + r.score + '/4. "' + r.feedbackForStudent + '"'; }, function (e) { msg.textContent = 'Not working: ' + e.message; }); } }, 'Test URL')), msg);
  };

  root.Finish = Finish;
})(window);
