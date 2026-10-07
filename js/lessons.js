/* Lesson player: math, quiz lessons, spelling study/test, writing, Bible, fluency. */
(function (root) {
  'use strict';
  var h = UI.h, isLocal = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  var Player = {};

  Player.BADGES = {
    first: { e: '🌟', n: 'First lesson', d: 'Finished your very first lesson.' },
    perfect: { e: '💯', n: 'Perfect lesson', d: 'Every answer right on the first try.' },
    streak3: { e: '🔥', n: '3-day streak', d: 'Studied 3 school days in a row.' },
    streak5: { e: '🚀', n: '5-day streak', d: 'Studied 5 school days in a row.' },
    streak10: { e: '🏅', n: '10-day streak', d: 'Studied 10 school days in a row.' },
    verse: { e: '📖', n: 'Verse keeper', d: 'Said a memory verse from memory.' },
    speed: { e: '⚡', n: 'Speed star', d: 'Beat the fluency target with 90% accuracy.' },
    writer: { e: '✏️', n: 'Author', d: 'Turned in your first writing.' },
    speller: { e: '🔤', n: 'Spelling champ', d: 'Got every word right on a spelling test.' },
    fullday: { e: '🎯', n: 'Full day', d: 'Finished every lesson in one day.' },
    mastered3: { e: '🧠', n: 'Math whiz', d: 'Mastered 3 math lessons (80% or better).' }
  };

  var CAPS = { math: 50, lesson: 45, bible: 40, write: 30, 'spell-study': 20, 'spell-test': 40, fluency: 45 };
  var CHEERS = ['Correct!', 'You got it!', 'Nice work!', 'Exactly right!', 'Yes!'];

  // ============================== context ==============================
  function makeCtx(lesson, opts) {
    var st = Store.state, prev = st.progress[lesson.id] || {};
    var practice = !!prev.done || !!(opts && opts.practice);
    var c = { lesson: lesson, today: UI.today(), practice: practice, stars: 0, right1: 0, right2: 0, total: 0, wrong: 0, rushed: 0, rushWarned: false,
      last: Date.now(), secs: 0, cap: CAPS[lesson.type] || 40, given: practice ? 0 : (prev.starsGiven || 0), color: UI.subjectColor(lesson.subject), missed: [], extra: {} };
    var part = (!practice && prev.partial) || null; if (part) { c.resume = part; c.right1 = part.right1 || 0; c.right2 = part.right2 || 0; c.total = part.total || 0; c.wrong = part.wrong || 0; c.rushed = part.rushed || 0; c.secs = part.secs || 0; c.extra = part.extra || {}; }
    return c;
  }
  function touch(c) { var n = Date.now(), d = (n - c.last) / 1000; c.secs += Math.min(d, 45); c.last = n; }
  function award(c, n, why) {
    if (c.practice || n <= 0) return 0; n = Math.min(n, c.cap - c.given); if (n <= 0) return 0;
    Store.addStars(n, why, c.lesson.id, c.today); c.given += n; c.stars += n; UI.sound('star'); updateStarPill(); return n;
  }
  function savePartial(c, stage, extra) {
    if (c.practice) return; var p = Store.state.progress[c.lesson.id] || (Store.state.progress[c.lesson.id] = { done: false, date: c.today });
    p.partial = { stage: stage, right1: c.right1, right2: c.right2, total: c.total, wrong: c.wrong, rushed: c.rushed, secs: Math.round(c.secs), extra: Object.assign(c.extra, extra || {}) };
    p.starsGiven = c.given; p._u = Store.now(); Store.save();
  }
  function updateStarPill() { var el = document.getElementById('starpill'); if (el) el.textContent = '⭐ ' + Store.weekStars(Store.mondayOf(UI.today())); }

  // ============================== frame ==============================
  var stageEl = null, dotsEl = null;
  function frame(c) {
    var lesson = c.lesson;
    dotsEl = h('div', { class: 'dots', 'aria-hidden': 'true' }); stageEl = h('main', { class: 'wrap stage', id: 'stage', style: { '--c': c.color } });
    var head = h('header', { class: 'ph', style: { '--c': c.color } }, h('div', { class: 'in' },
      h('div', { class: 'ttl' }, UI.subjectName(lesson.subject) + (c.practice ? ' (practice: no stars)' : ''), h('small', null, lesson.title)),
      h('span', { class: 'pill', id: 'starpill' }, '⭐ ' + Store.weekStars(Store.mondayOf(UI.today()))),
      h('button', { class: 'x', onclick: function () { UI.confirm('Leave this lesson?', 'Your place is saved. You can come back and keep going.', 'Leave', function () { UI.stopSpeak(); UI.go('/'); }, 'Stay'); } }, 'Exit')), dotsEl);
    UI.render(head, stageEl);
  }
  function setDots(n, results) { dotsEl.innerHTML = ''; for (var i = 0; i < n; i++) dotsEl.appendChild(h('i', { class: results && results[i] === 1 ? 'on' : results && results[i] === 0 ? 'bad' : '' })); }
  function show(nodes, actions) {
    stageEl.innerHTML = ''; (function add(list) { [].concat(list).forEach(function (n) { if (Array.isArray(n)) add(n); else if (n) stageEl.appendChild(n); }); })(nodes);
    if (actions) stageEl.appendChild(h('div', { class: 'sticky-actions' }, actions));
    window.scrollTo(0, 0);
  }
  function btn(label, fn, cls) { return h('button', { class: 'btn ' + (cls || ''), type: 'button', onclick: fn }, label); }

  // ============================== reusable pieces ==============================
  function learnCards(c, cards) {
    return h('div', { class: 'learn' }, cards.map(function (x) { return h('div', { class: 'card' }, h('h3', null, x.h), h('p', null, x.p)); }));
  }
  function readAloudOf(cards) { return cards.map(function (x) { return (x.h ? x.h + '. ' : '') + x.p; }).join(' '); }

  // Step-by-step reveal ("Watch me")
  function stepReveal(c, steps, onDone) {
    var list = h('ol', { class: 'steps' }), i = 0, nextBtn, wrap = h('div');
    function more() { touch(c); list.appendChild(h('li', null, steps[i])); i++; if (i >= steps.length) { nextBtn.remove(); onDone && onDone(); } else nextBtn.textContent = 'Show next step (' + (i + 1) + ' of ' + steps.length + ')'; if (UI.canSpeak() && Store.state.settings.readAloud) UI.speak(steps[i - 1]); }
    nextBtn = btn('Show step 1 of ' + steps.length, more, 'gold'); wrap.appendChild(list); wrap.appendChild(h('div', { style: { margin: '10px 0' } }, nextBtn)); return wrap;
  }

  // normalise anything askable into one shape
  function adapt(item) {
    if (item.steps) return { type: 'input', q: item.q, numeric: item.kind === 'num', check: function (g) { return Gen.check(item, g); }, answerText: item.a, hint: item.hint, explain: item.steps, skill: item.skill, isSteps: true };
    if (item.kind === 'choice') return { type: 'choice', q: item.q, options: item.options, correct: item.a, hint: item.hint, explain: [item.why], isSteps: false };
    if (item.kind === 'text') return { type: 'input', q: item.q, numeric: false, check: function (g) { return UI.matchText(item, g); }, answerText: item.answers[0], hint: item.hint, explain: [item.why], isSteps: false };
    if (item.kind === 'open') return { type: 'open', q: item.q, min: item.min || 15, explain: [item.why] };
  }

  /* Ask one question. o = { mode: 'practice'|'test'|'together', first: 2, second: 1, done(res), nextLabel }
     res = { first:bool, second:bool, missed:bool, skipped:bool } */
  function askItem(c, rawItem, o) {
    o = o || {}; var it = adapt(rawItem), mode = o.mode || 'practice', tries = 0, t0 = Date.now(), done = false;
    var wrap = h('div'), fb = h('div'), actions = h('div', { class: 'sticky-actions' });
    var qEl = h('div', { class: 'q', role: 'heading', 'aria-level': '2' }, it.q);
    var speak = UI.canSpeak() && Store.state.settings.readAloud ? UI.speakBtn(it.q, 'Read question') : null;
    wrap.appendChild(qEl); if (speak) wrap.appendChild(h('div', { style: { margin: '-6px 0 12px' } }, speak));
    var inputEl, sel = -1, optEls = [], checkBtn;
    if (isLocal) root.__q = { type: it.type, answer: it.answerText, correct: it.correct, options: it.options, q: it.q, mode: mode };

    if (it.type === 'choice') {
      var order = UI.shuffle(it.options.map(function (t, i) { return i; })), list = h('div', { role: 'group', 'aria-label': 'Answer choices' });
      order.forEach(function (oi) { var b = h('button', { class: 'opt', type: 'button', 'aria-pressed': 'false', 'data-oi': oi, onclick: function () { if (done) return; sel = oi; optEls.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }); checkBtn.disabled = false; } }, it.options[oi]); optEls.push(b); list.appendChild(b); });
      wrap.appendChild(list);
    } else if (it.type === 'input') {
      inputEl = h('input', { class: 'ans', type: 'text', inputmode: it.numeric ? 'numeric' : 'text', autocomplete: 'off', autocorrect: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Your answer', placeholder: it.numeric ? 'Type your answer' : 'Type your answer here' });
      inputEl.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !checkBtn.disabled) checkBtn.click(); });
      inputEl.addEventListener('input', function () { checkBtn.disabled = !inputEl.value.trim(); });
      wrap.appendChild(inputEl); setTimeout(function () { inputEl.focus(); }, 60);
    } else if (it.type === 'open') {
      inputEl = h('textarea', { class: 'ans', 'aria-label': 'Your answer', placeholder: 'Write your answer in complete sentences.', autocapitalize: 'sentences' });
      var wc = h('div', { class: 'small muted' }, '0 / ' + it.min + ' words');
      inputEl.addEventListener('input', function () { var n = UI.wordCount(inputEl.value); wc.textContent = n + ' / ' + it.min + ' words'; checkBtn.disabled = n < it.min; });
      wrap.appendChild(inputEl); wrap.appendChild(wc);
    }
    wrap.appendChild(fb);

    checkBtn = btn(it.type === 'open' ? 'Turn in' : 'Check answer', onCheck, 'gold'); checkBtn.disabled = true; actions.appendChild(checkBtn);
    if (mode === 'together' && it.isSteps) { var shown = 0, stepBtn = btn('Show me a step', function () { touch(c); if (!fb.querySelector('ol.steps')) { fb.innerHTML = ''; fb.appendChild(h('div', { class: 'fb info' }, h('b', { class: 'h' }, 'Steps (one at a time)'), h('ol', { class: 'steps' }))); } var ol = fb.querySelector('ol.steps'); if (shown < it.explain.length) { ol.appendChild(h('li', null, it.explain[shown])); shown++; } if (shown >= it.explain.length) stepBtn.disabled = true; }, 'ghost'); actions.insertBefore(stepBtn, checkBtn); }
    if (mode !== 'test' && it.hint && it.type !== 'open') { var hintBtn = btn('💡 Hint', function () { touch(c); fb.innerHTML = ''; fb.appendChild(h('div', { class: 'fb info' }, h('b', { class: 'h' }, 'Hint'), it.hint)); c.extra.hints = (c.extra.hints || 0) + 1; }, 'ghost'); actions.insertBefore(hintBtn, checkBtn); }

    function explainNode(open) {
      if (it.isSteps) { var ol = h('ol', { class: 'steps' }, it.explain.map(function (s) { return h('li', null, s); })); if (open) return h('div', null, h('b', null, 'Here is how it works:'), ol); var d = h('details', null, h('summary', { style: { fontWeight: 700, cursor: 'pointer' } }, 'See how it works'), ol); return d; }
      return h('p', { style: { margin: '6px 0 0' } }, it.explain.join(' '));
    }
    function finish(res) {
      done = true; checkBtn.remove();
      var nb = btn(o.nextLabel || 'Next', function () { touch(c); UI.stopSpeak(); o.done(res); }, 'gold'); actions.appendChild(nb); nb.focus && setTimeout(function () { nb.focus(); }, 50);
      if (UI.canSpeak() && Store.state.settings.readAloud && it.explain && !it.isSteps) { /* explanation is read on demand */ }
    }
    function onCheck() {
      touch(c); var elapsed = Date.now() - t0, correct;
      if (it.type === 'open') {
        var txt = inputEl.value.trim(); var key = c.lesson.id + ':' + (o.key || 'o'); Store.state.writing[key] = { kind: 'open', q: it.q, text: txt, ts: Store.now(), status: 'submitted', lesson: c.lesson.id, _u: Store.now() };
        award(c, 3, 'Book response'); UI.commit(); fb.innerHTML = ''; fb.appendChild(h('div', { class: 'fb good' }, h('b', { class: 'h' }, 'Turned in!'), 'Your parent will read this. Nice thinking.')); inputEl.disabled = true; c.total++; c.right1++; return finish({ first: true });
      }
      if (it.type === 'choice') correct = sel === it.correct; else correct = it.check(inputEl.value);
      if (mode === 'test') { // no feedback until the end
        c.total++; if (correct) { c.right1++; award(c, o.first || 2, 'Correct answer'); } else { c.wrong++; c.missed.push({ item: rawItem, it: it, given: it.type === 'choice' ? it.options[sel] : inputEl.value }); }
        if (it.skill) Store.recordSkill(it.skill, correct);
        UI.sound(correct ? 'good' : 'bad'); return o.done({ first: correct, missed: !correct });
      }
      if (correct) {
        UI.sound('good'); var scored = !o.counted && mode !== 'together';
        if (tries === 0) { if (scored) c.right1++; award(c, o.first === undefined ? 2 : o.first, 'Correct on the first try'); } else { if (scored) c.right2++; award(c, o.second === undefined ? 1 : o.second, 'Correct on the second try'); }
        if (scored) c.total++; if (it.skill && mode !== 'together') Store.recordSkill(it.skill, tries === 0);
        if (it.type === 'choice') optEls.forEach(function (x) { if (+x.dataset.oi === it.correct) x.classList.add('right'); });
        if (inputEl) inputEl.disabled = true; fb.innerHTML = '';
        fb.appendChild(h('div', { class: 'fb good' }, h('b', { class: 'h' }, tries === 0 ? CHEERS[Math.floor(Math.random() * CHEERS.length)] : 'Right! Good fixing.'), explainNode(false)));
        savePartial(c, o.stage || 'q', o.partial); return finish({ first: tries === 0, second: tries === 1 });
      }
      // wrong
      UI.sound('bad'); if (elapsed < 1400) { c.rushed++; if (c.rushed >= 3 && !c.rushWarned) { c.rushWarned = true; slowDown(); } }
      tries++;
      if (it.type === 'choice') { optEls.forEach(function (x) { if (+x.dataset.oi === sel) { x.classList.add('wrong'); x.disabled = true; x.setAttribute('aria-pressed', 'false'); } }); sel = -1; checkBtn.disabled = true; }
      if (tries === 1 && mode !== 'together' || (mode === 'together' && tries === 1)) {
        fb.innerHTML = ''; fb.appendChild(h('div', { class: 'fb bad' }, h('b', { class: 'h' }, 'Not quite. You can try once more.'), it.hint || 'Read the question again slowly.'));
        if (inputEl) { inputEl.value = ''; inputEl.select && inputEl.focus(); checkBtn.disabled = true; } t0 = Date.now(); return;
      }
      // second miss: teach it fully
      if (!o.counted && mode !== 'together') { c.total++; c.wrong++; c.missed.push({ item: rawItem, it: it }); }
      if (it.skill && mode !== 'together') Store.recordSkill(it.skill, false);
      if (inputEl) inputEl.disabled = true; if (it.type === 'choice') optEls.forEach(function (x) { x.disabled = true; if (+x.dataset.oi === it.correct) x.classList.add('right'); });
      fb.innerHTML = ''; fb.appendChild(h('div', { class: 'fb bad' }, h('b', { class: 'h' }, 'Let us learn this one together.'), h('p', null, 'The answer is: ', h('b', null, it.type === 'choice' ? it.options[it.correct] : it.answerText)), explainNode(true)));
      savePartial(c, o.stage || 'q', o.partial); finish({ missed: true });
    }
    stageEl.innerHTML = ''; stageEl.appendChild(wrap); stageEl.appendChild(actions); window.scrollTo(0, 0);
  }

  function slowDown() {
    var left = 8, b = h('button', { class: 'btn', disabled: true }, 'Wait ' + left + '…'), m = UI.modal(h('div', null, h('h2', null, 'Slow down, star! 🐢'), h('p', null, 'Quick guesses do not earn stars. Read the whole question, use your scratch paper, and think it through. Take a breath.'), b), { dismiss: false });
    var t = setInterval(function () { left--; if (left <= 0) { clearInterval(t); b.disabled = false; b.textContent = 'I am ready'; b.onclick = function () { m.close(); }; } else b.textContent = 'Wait ' + left + '…'; }, 1000);
  }

  // Run a list of questions one by one. makeNext(i, lastRes) may return a replacement item.
  function askSequence(c, items, o, doneAll) {
    var i = c.resume && c.resume.stage === (o.stage || 'q') ? Math.min((c.resume.extra && c.resume.extra[(o.stage || 'q') + 'Idx']) || 0, items.length) : 0, results = [];
    if (i > 0) for (var k = 0; k < i; k++) results[k] = 1;
    setDots(items.length, results);
    (function next() {
      if (i >= items.length) return doneAll(); var item = items[i], idx = i;
      askItem(c, item, Object.assign({}, o, { partial: (function () { var x = {}; x[(o.stage || 'q') + 'Idx'] = idx + 1; return x; })(), done: function (res) {
        results[idx] = res.missed ? 0 : 1; setDots(items.length, results);
        if (res.missed && o.replace && (c.extra.repl || 0) < 6) { var r = o.replace(item, idx); if (r) { c.extra.repl = (c.extra.repl || 0) + 1; return askItem(c, r, Object.assign({}, o, { first: 1, second: 0, counted: true, nextLabel: 'Next', partial: {}, done: function () { i++; next(); } })); } }
        i++; next(); } }));
    })();
  }

  // ============================== finish / celebrate ==============================
  function badge(id, list) { if (!Store.state.badges[id]) { Store.state.badges[id] = { ts: Store.now(), _u: Store.now() }; list.push(id); } }
  function finishLesson(c, summary) {
    touch(c); var L = c.lesson, st = Store.state, wasPractice = c.practice, newBadges = [];
    var total = c.total || 1, pct = Math.round(100 * c.right1 / total);
    if (!wasPractice) {
      award(c, 5, 'Finished the lesson'); if (c.total >= 5 && c.right1 === c.total) award(c, 5, 'Perfect lesson');
      var p = st.progress[L.id] || {}; var tries = (p.tries || 0) + 1;
      st.progress[L.id] = { done: true, date: c.today, right: c.right1, r2: c.right2, total: c.total, secs: Math.round(c.secs), tries: tries, starsGiven: c.given, rushed: c.rushed, hints: c.extra.hints || 0, subject: L.subject, type: L.type, mastered: pct >= 80, _u: Store.now() };
      Object.assign(st.progress[L.id], summary || {});
      Store.touchStreak(c.today); badge('first', newBadges); if (c.total >= 5 && c.right1 === c.total) badge('perfect', newBadges);
      var sn = st.streak.n; if (sn >= 3) badge('streak3', newBadges); if (sn >= 5) badge('streak5', newBadges); if (sn >= 10) badge('streak10', newBadges);
      if (L.type === 'write') badge('writer', newBadges);
      if (summary && summary.perfectSpelling) badge('speller', newBadges); if (summary && summary.verse) badge('verse', newBadges); if (summary && summary.speed) badge('speed', newBadges);
      var mm = 0; for (var k in st.progress) if (st.progress[k].type === 'math' && st.progress[k].mastered) mm++; if (mm >= 3) badge('mastered3', newBadges);
      var info = Plan.forDate(c.today, st.settings); if (info.lessons.length && info.lessons.every(function (x) { return st.progress[x.id] && st.progress[x.id].done; })) badge('fullday', newBadges);
    }
    Store.markAttendance(c.today, Math.max(1, Math.round(c.secs / 60)));
    st.log.push({ ts: Store.now(), t: 'lesson', id: L.id, pct: pct, stars: c.stars }); if (st.log.length > 200) st.log.shift();
    UI.commit(); UI.sound('win');
    var wk = Store.mondayOf(c.today), money = Store.weekMoney(wk);
    var nextUp = Plan.forDate(c.today, st.settings).lessons.filter(function (x) { return !(st.progress[x.id] && st.progress[x.id].done); })[0];
    var showMastery = L.type === 'math' || L.type === 'lesson';
    var msg = pct >= 80 ? 'Mastered! You really know this.' : pct >= 60 ? 'Good effort. A little more practice will make it stick.' : 'This one is tricky. We will practice it again, and you will get it.';
    var node = h('div', { class: 'cele' }, h('div', { class: 'big' }, wasPractice ? '👏' : '🌟'), h('h1', null, wasPractice ? 'Practice complete' : 'Lesson complete!'),
      !wasPractice && h('div', { class: 'earned' }, '+' + c.stars + ' stars'),
      showMastery && c.total ? h('p', null, c.right1 + ' of ' + c.total + ' right on the first try (' + pct + '%). ', msg) : null,
      !wasPractice ? h('p', { class: 'muted' }, 'This week: ' + Store.weekStars(wk) + ' stars = ' + UI.money(money.usd) + ' of ' + UI.money(Store.state.settings.weeklyCapUSD) + (money.capped ? ' (you hit the weekly max!)' : '')) : h('p', { class: 'muted' }, 'Practice lessons do not earn stars, but they make you stronger.'),
      newBadges.length ? h('div', { class: 'card' }, h('h3', null, 'New badge' + (newBadges.length > 1 ? 's' : '') + '!'), newBadges.map(function (b) { var B = Player.BADGES[b]; return h('p', null, h('span', { style: { fontSize: '2rem' } }, B.e + ' '), h('b', null, B.n), ' ' + B.d); })) : null,
      h('div', { class: 'row', style: { justifyContent: 'center', marginTop: '14px' } },
        nextUp ? btn('Next lesson: ' + nextUp.title, function () { UI.go('/lesson/' + nextUp.id); }, 'gold') : null,
        btn(nextUp ? 'Back to today' : 'Back to home', function () { UI.go('/'); }, nextUp ? 'ghost' : 'gold')));
    show(node); setDots(0);
    if (!wasPractice && Player.afterLesson) Player.afterLesson(c);
  }

  // ============================== MATH ==============================
  function hashStr(s) { var x = 5381; for (var i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) >>> 0; return x; }
  function startMath(L, c) {
    var seedBase = c.extra.seed || (hashStr(L.id + c.today) % 100000 + 1); c.extra.seed = seedBase;
    var topics = L.topics, per = Math.ceil(L.count / topics.length), problems = [];
    topics.forEach(function (t, ti) { Gen.make(t, per, seedBase + ti * 17).forEach(function (p) { problems.push(p); }); });
    problems = problems.slice(0, L.count); if (L.challenge) { problems = shuffleSeeded(problems, seedBase); }
    var stages = [];
    if (!L.challenge) {
      stages.push(function (next) { show([h('h2', null, 'Learn: ' + Plan.INFO[topics[0]].title), UI.canSpeak() ? UI.speakBtn(readAloudOf(L.learn)) : null, learnCards(c, L.learn)], [btn('Watch me do one', next, 'gold')]); });
      stages.push(function (next) {
        var demo = Gen.make(topics[0], 1, hashStr('demo' + L.id) % 100000 + 7)[0], nb = btn('Now we try one together', next, 'gold'); nb.disabled = true;
        var reveal = stepReveal(c, demo.steps, function () { nb.disabled = false; });
        show([h('div', { class: 'demo' }, h('span', { class: 'tag' }, 'Watch me do one'), h('div', { class: 'q' }, demo.q), reveal), h('p', { class: 'muted small' }, 'Tip: grab scratch paper and copy each step as I go.')], [nb]);
      });
      stages.push(function (next) {
        var tp = Gen.make(topics[0], 1, hashStr('together' + L.id + c.today) % 100000 + 11)[0]; setDots(1);
        var steps = tp.steps.slice(), fbwrap = h('div');
        askItem(c, tp, { mode: 'together', first: 0, second: 0, stage: 'together', done: function () { next(); }, nextLabel: 'Got it! On to my turn' });
      });
    }
    var weak = Store.weakSkills().filter(function (w) { return topics.every(function (t) { return t.indexOf(w.skill.split('-')[0]) !== 0 || true; }) && Gen.TOPICS.some(function (t) { return Gen.make(t, 1, 3)[0].skill === w.skill; }); });
    if (!L.challenge && weak.length && !c.practice) {
      stages.push(function (next) {
        var topicFor = Gen.TOPICS.filter(function (t) { return Gen.make(t, 1, 3)[0].skill === weak[0].skill; })[0], ws = Gen.make(topicFor, 3, seedBase + 99);
        show([h('div', { class: 'card' }, h('h2', null, 'Warm-up from earlier 🔥'), h('p', null, 'Let us sharpen something that was tricky before: ', h('b', null, weak[0].skill.replace(/-/g, ' ')), '.'))], [btn('Start warm-up', function () { askSequence(c, ws, { stage: 'warm', replace: null }, next); }, 'gold')]);
      });
    }
    stages.push(named('practice', function (next) {
      var replaceFn = L.challenge ? null : function (item, idx) { return Gen.make(item.topic, 1, seedBase * 31 + idx * 7 + (c.extra.repl || 0) + 1)[0]; };
      var intro = L.challenge ? h('div', { class: 'card' }, h('h2', null, 'Test day 🎯'), h('p', null, 'No hints. One try for each problem. Use scratch paper and take your time. Your answers show what you really know.')) : h('div', { class: 'card' }, h('h2', null, 'Your turn!'), h('p', null, 'Stars: 2 for a right answer on the first try, 1 for the second try. If you miss one, I will show you how, then give you a new one.'));
      show([intro], [btn(L.challenge ? 'Start the test' : 'Start', function () { askSequence(c, problems, { mode: L.challenge ? 'test' : 'practice', stage: 'practice', replace: replaceFn, first: 2 }, next); }, 'gold')]);
    }));
    if (L.challenge) stages.push(function (next) { reviewMisses(c, next); });
    runStages(c, stages, function () {
      if (L.challenge && c.total && c.right1 / c.total >= 0.9) award(c, 10, 'Test day: 90% or better');
      problems.forEach(function (p) { }); finishLesson(c, {});
    });
  }
  function shuffleSeeded(arr, seed) { var a = arr.slice(), r = Gen.mk(seed).r; for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function reviewMisses(c, next) {
    if (!c.missed.length) return next();
    var i = 0; (function one() {
      if (i >= c.missed.length) return next(); var m = c.missed[i], it = m.it; i++;
      var nb = btn(i < c.missed.length ? 'Next one to review' : 'Finish', one, 'gold');
      show([h('div', { class: 'card' }, h('span', { class: 'badge warn' }, 'Review ' + i + ' of ' + c.missed.length), h('div', { class: 'q' }, it.q), h('p', null, 'You answered: ', h('b', null, m.given || '(no answer)'), '. The answer is ', h('b', null, it.type === 'choice' ? it.options[it.correct] : it.answerText), '.'), h('b', null, 'Here is how it works:'), h('ol', { class: 'steps' }, it.explain.map(function (s) { return h('li', null, s); })))], [nb]);
    })();
  }
  function runStages(c, stages, done) {
    var i = 0;
    if (c.resume && c.resume.stage) { for (var k = 0; k < stages.length; k++) if (stages[k].stageName === c.resume.stage) { i = k; break; } }
    (function go() { if (i >= stages.length) return done(); var s = stages[i++]; s(go); })();
  }
  function named(name, fn) { fn.stageName = name; return fn; }

  // ============================== QUIZ-STYLE LESSON (grammar, science, SS, reading) ==============================
  function startLesson(L, c) {
    var stages = [];
    if (L.passage) stages.push(function (next) {
      var txt = L.passage.join(' ');
      show([h('h2', null, L.subject === 'reading' ? 'Read the passage' : 'Read about it'), UI.canSpeak() ? UI.speakBtn(txt, 'Read it to me') : null, h('div', { class: 'passage', style: { marginTop: '10px' } }, L.passage.map(function (p) { return h('p', null, p); })), h('p', { class: 'muted small' }, 'Read it once for the big idea. You can look back while you answer.')], [btn('I read it', next, 'gold')]);
    });
    stages.push(function (next) { show([h('h2', null, 'Learn'), UI.canSpeak() ? UI.speakBtn(readAloudOf(L.learn)) : null, learnCards(c, L.learn)], [btn(L.demo ? 'Watch me do one' : 'Start', next, 'gold')]); });
    if (L.demo) stages.push(function (next) {
      var nb = btn("Now it's my turn", next, 'gold'); nb.disabled = true;
      show([h('div', { class: 'demo' }, h('span', { class: 'tag' }, 'Watch me do one'), h('div', { class: 'q' }, L.demo.q), stepReveal(c, L.demo.steps, function () { nb.disabled = false; }), h('div', { class: 'fb info', style: { marginTop: '10px' } }, h('b', null, 'Answer: '), L.demo.a))], [nb]);
    });
    stages.push(named('items', function (next) {
      var intro = h('div', { class: 'card' }, h('h2', null, 'Your turn'), h('p', null, 'Stars: 2 for a right answer on the first try, 1 for the second. After every question I will explain why, so you learn even when you miss.'), L.passage ? h('details', null, h('summary', { style: { fontWeight: 700, cursor: 'pointer' } }, 'Show the passage again'), h('div', { class: 'passage' }, L.passage.map(function (p) { return h('p', null, p); }))) : null);
      show([intro], [btn('Start', function () { askSequence(c, L.items, { stage: 'items' }, next); }, 'gold')]);
    }));
    if (L.book) stages.push(function (next) {
      var prompts = L.book.prompts;
      show([h('div', { class: 'card' }, h('h2', null, '📚 Book time: ' + L.book.title), h('p', null, L.book.assign), h('p', { class: 'muted' }, 'When you have read, answer the questions below in complete sentences. Your parent will read your answers.'))], [btn('I finished reading', function () { var k = 0; (function one() { if (k >= prompts.length) return next(); var kk = k++; askItem(c, prompts[kk], { key: 'book' + kk, stage: 'book', done: one, nextLabel: k < prompts.length ? 'Next question' : 'Finish' }); })(); }, 'gold')]);
    });
    if (L.activity) stages.push(function (next) {
      var cb = h('input', { type: 'checkbox', id: 'act' });
      show([h('div', { class: 'card' }, h('h2', null, '🔬 Hands-on activity'), h('p', null, L.activity), h('label', { class: 'check', for: 'act' }, cb, 'I did this activity (or I will do it with my parent today).'))], [btn('Finish lesson', function () { c.extra.activity = cb.checked; next(); }, 'gold')]);
    });
    runStages(c, stages, function () { finishLesson(c, { activity: !!c.extra.activity }); });
  }

  // ============================== SPELLING STUDY ==============================
  function startSpellStudy(L, c) {
    var words = L.words.slice(), struggled = [], i = 0;
    var stages = [function (next) {
      show([h('div', { class: 'card' }, h('h2', null, 'How spelling study works'), h('p', null, h('b', null, 'LOOK'), ' at the word and say it. ', h('b', null, 'COVER'), ' it. ', h('b', null, 'WRITE'), ' it from memory. ', h('b', null, 'CHECK'), ' it.'), h('p', null, 'Rule this week: ', L.rule), h('p', { class: 'muted' }, 'On Friday there is a blind test, so you will need to really know these words, not just copy them.'))], [btn('Start', next, 'gold')]);
    }];
    function round(list, label, after) {
      var k = 0; setDots(list.length, []); var res = [];
      (function one() {
        if (k >= list.length) return after(); var w = list[k], idx = k++;
        function look() {
          var go = btn('Cover it and write it', function () { write(false); }, 'gold');
          show([h('span', { class: 'badge' }, label + ' ' + (idx + 1) + ' of ' + list.length), h('div', { class: 'big-word' }, w.w), h('div', { class: 'row', style: { justifyContent: 'center' } }, UI.canSpeak() ? btn('🔊 Hear it', function () { UI.speak(w.w + '. ' + w.s); }, 'ghost small') : null), h('div', { class: 'card' }, h('p', null, h('b', null, 'In a sentence: '), w.s), w.tip ? h('p', { class: 'muted' }, h('b', null, 'Memory trick: '), w.tip) : null), h('p', { class: 'muted small' }, 'Say the letters out loud, then cover the word.')], [go]);
          if (UI.canSpeak()) UI.speak(w.w);
        }
        function write(retry) {
          var inp = h('input', { class: 'ans', type: 'text', autocomplete: 'off', autocorrect: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Type the word' }), fb = h('div'), chk = btn('Check', check, 'gold'); chk.disabled = true;
          inp.addEventListener('input', function () { chk.disabled = !inp.value.trim(); }); inp.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !chk.disabled) chk.click(); });
          if (isLocal) root.__q = { type: 'input', answer: w.w, mode: 'spell' };
          show([h('span', { class: 'badge' }, label + ' ' + (idx + 1) + ' of ' + list.length), h('div', { class: 'q' }, retry ? 'Look at it once more, then type it.' : 'Type the word from memory.'), retry ? h('div', { class: 'big-word' }, w.w) : null, h('div', { class: 'row' }, UI.canSpeak() ? btn('🔊 Hear it again', function () { UI.speak(w.w + '. ' + w.s); }, 'ghost small') : null), inp, fb], [chk]); setTimeout(function () { inp.focus(); }, 60);
          function check() {
            touch(c); var ok = UI.matchWord(w.w, inp.value);
            if (ok) { UI.sound('good'); if (!retry) { award(c, 1, 'Spelling study word'); c.right1++; } else { struggled.indexOf(w.w) < 0 && struggled.push(w.w); } c.total += retry ? 0 : 1; res[idx] = 1; setDots(list.length, res); savePartial(c, 'study'); fb.innerHTML = ''; fb.appendChild(h('div', { class: 'fb good' }, h('b', { class: 'h' }, 'Yes! ' + w.w))); chk.remove(); inp.disabled = true; var nb = btn('Next word', one, 'gold'); document.querySelector('.sticky-actions').appendChild(nb); setTimeout(function () { nb.focus(); }, 40); }
            else { UI.sound('bad'); if (!retry) { c.total++; c.wrong++; res[idx] = 0; setDots(list.length, res); } struggled.indexOf(w.w) < 0 && struggled.push(w.w); fb.innerHTML = ''; fb.appendChild(h('div', { class: 'fb bad' }, h('b', { class: 'h' }, 'Not quite.'), 'You wrote: ' + inp.value, h('br'), 'The word is: ', h('b', null, w.w), '. Look closely at each letter.')); chk.remove(); var rb = btn('Look again and fix it', function () { write(true); }, 'gold'); document.querySelector('.sticky-actions').appendChild(rb); }
          }
        }
        look();
      })();
    }
    stages.push(function (next) { round(words, 'Word', next); });
    stages.push(function (next) {
      var again = words.filter(function (w) { return struggled.indexOf(w.w) >= 0; }); if (!again.length) return next();
      show([h('div', { class: 'card' }, h('h2', null, 'Round 2: the tricky ones'), h('p', null, 'You will try ' + again.length + ' word' + (again.length > 1 ? 's' : '') + ' again, from memory.'))], [btn('Go', function () { var saved = struggled.slice(); struggled.length = 0; round(again.map(function (w) { return w; }), 'Tricky word', next); }, 'gold')]);
    });
    runStages(c, stages, function () {
      var key = 'list' + L.list, sp = Store.state.spelling[key] || (Store.state.spelling[key] = { tests: [], struggled: [] }); sp.struggled = struggled.slice(); sp._u = Store.now(); finishLesson(c, {});
    });
  }

  // ============================== SPELLING TEST ==============================
  function startSpellTest(L, c) {
    var words = UI.shuffle(L.words), answers = [], plays = {}, i = 0, can = UI.canSpeak();
    var stages = [function (next) {
      show([h('div', { class: 'card' }, h('h2', null, 'Spelling test 📝'), h('p', null, 'Listen to each word and the sentence. Type the word. You will not find out if it is right until the end, just like a real test. No peeking at notes. Put your study papers away.'), can ? null : h('div', { class: 'fb info' }, 'This device cannot read words aloud. Ask your parent to read each word and its sentence out loud, then type what you hear.'), h('p', { class: 'muted' }, words.length + ' words. Stars: 2 for each word you spell right.'))], [btn('Begin the test', next, 'gold')]);
    }];
    stages.push(function (next) {
      setDots(words.length, []);
      (function one() {
        if (i >= words.length) return next(); var w = words[i], idx = i; plays[idx] = 0;
        var inp = h('input', { class: 'ans', type: 'text', autocomplete: 'off', autocorrect: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Type the word you hear' }), nb = btn(idx < words.length - 1 ? 'Next word' : 'Finish test', function () { touch(c); answers[idx] = inp.value; i++; setDots(words.length, answers.map(function () { return 1; })); savePartial(c, 'test'); one(); }, 'gold'); nb.disabled = true;
        inp.addEventListener('input', function () { nb.disabled = !inp.value.trim(); }); inp.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !nb.disabled) nb.click(); });
        var hear = can ? btn('🔊 Hear the word', function () { if (plays[idx] >= 4) { UI.toast('That was the last replay.'); return; } plays[idx]++; UI.speak(w.w + '. ... ' + w.s + ' ... ' + w.w, 0.85); }, 'ghost') : btn('Parent: show me the word', function () { UI.requirePin(function () { var m = UI.modal(h('div', null, h('h2', null, w.w), h('p', null, w.s), h('button', { class: 'btn', onclick: function () { m.close(); } }, 'Done reading'))); }); }, 'ghost');
        if (isLocal) root.__q = { type: 'input', answer: w.w, mode: 'spelltest' };
        show([h('span', { class: 'badge' }, 'Word ' + (idx + 1) + ' of ' + words.length), h('div', { class: 'q' }, 'Type the word you hear.'), h('div', { style: { margin: '0 0 12px' } }, hear), inp], [nb]); setTimeout(function () { inp.focus(); if (can) hear.click(); }, 80);
      })();
    });
    stages.push(function (next) {
      var score = 0, missed = [], rows = words.map(function (w, idx) { var ok = UI.matchWord(w.w, answers[idx] || ''); if (ok) score++; else missed.push(w.w); return h('tr', null, h('td', null, ok ? '✅' : '❌'), h('td', null, h('b', null, w.w)), h('td', null, ok ? '' : 'You wrote: ' + (answers[idx] || '(blank)'))); });
      c.total = words.length; c.right1 = score; c.wrong = words.length - score; award(c, score * 2, 'Spelling test'); var perfect = score === words.length; if (perfect) award(c, 10, 'Perfect spelling test');
      var sp = Store.state.spelling['list' + L.list] || (Store.state.spelling['list' + L.list] = { tests: [], struggled: [] }); sp.tests.push({ ts: Store.now(), date: c.today, score: score, total: words.length, missed: missed, answers: answers.slice() }); sp._u = Store.now(); c.extra.perfectSpelling = perfect;
      show([h('div', { class: 'cele' }, h('div', { class: 'big' }, perfect ? '🏆' : '📝'), h('h1', null, score + ' out of ' + words.length), h('p', null, perfect ? 'A perfect test!' : 'Look at the ones you missed, and study them again this weekend.')), h('div', { class: 'card' }, h('table', null, h('tbody', null, rows)))], [btn('Finish', next, 'gold')]);
    });
    runStages(c, stages, function () { finishLesson(c, { perfectSpelling: c.extra.perfectSpelling, score: c.right1 }); });
  }

  // ============================== WRITING ==============================
  function startWrite(L, c) {
    var st = Store.state, rec = st.writing[L.id] || (st.writing[L.id] = { kind: 'write', title: L.title, fields: {}, status: 'draft', ts: Store.now(), lesson: L.id, _u: 0 });
    var timer = null; function save() { rec._u = Store.now(); rec.ts = rec._u; Store.save(); } function saveSoon() { clearTimeout(timer); timer = setTimeout(save, 500); }
    var stages = [
      function (next) { show([h('div', { class: 'card' }, h('h2', null, 'Writing workshop: ' + L.project), h('p', null, L.intro)), UI.canSpeak() ? UI.speakBtn(L.intro) : null], [btn('Watch me do one', next, 'gold')]); },
      function (next) { var nb = btn('Start writing', next, 'gold'); nb.disabled = true; show([h('div', { class: 'demo' }, h('span', { class: 'tag' }, 'Watch me do one'), h('div', { class: 'q' }, L.demo.q), stepReveal(c, L.demo.steps, function () { nb.disabled = false; }), h('div', { class: 'fb info', style: { marginTop: '10px' } }, h('b', null, 'Remember: '), L.demo.a))], [nb]); },
      function (next) {
        var prev = L.carryFrom && st.writing[L.carryFrom], nodes = [h('h2', null, 'Your writing'), h('p', { class: 'muted' }, 'You can type, or tap the microphone on the iPad keyboard to speak your words. Your work saves as you go.')];
        if (prev && prev.fields) nodes.push(h('details', { class: 'card' }, h('summary', { style: { fontWeight: 700, cursor: 'pointer' } }, 'Show my earlier work'), Object.keys(prev.fields).map(function (k) { return h('p', null, prev.fields[k]); })));
        var checks = [], nextBtn = btn('Check my work', function () { next(); }, 'gold'); function upd() { var ok = L.fields.every(function (f) { return UI.wordCount(rec.fields[f.id] || '') >= f.min; }); nextBtn.disabled = !ok; }
        L.fields.forEach(function (f) { var ta = h('textarea', { class: 'ans', id: 'f_' + f.id, 'aria-label': f.label, autocapitalize: 'sentences' }); ta.value = rec.fields[f.id] || ''; var wc = h('div', { class: 'small muted' }); function cnt() { var n = UI.wordCount(ta.value); wc.textContent = n + ' words (need at least ' + f.min + ')'; wc.style.color = n >= f.min ? 'var(--good)' : 'var(--muted)'; } ta.addEventListener('input', function () { rec.fields[f.id] = ta.value; cnt(); upd(); saveSoon(); }); cnt(); nodes.push(h('label', { class: 'f', for: 'f_' + f.id }, f.label), ta, wc); });
        show(nodes, [nextBtn]); upd();
      },
      function (next) {
        var boxes = [], sub = btn('Turn it in', next, 'gold'); sub.disabled = true; function upd() { sub.disabled = !boxes.every(function (b) { return b.checked; }); }
        show([h('div', { class: 'card' }, h('h2', null, 'Checklist'), h('p', null, 'Read your writing out loud once. Then check each box only if it is true.'), L.checklist.map(function (t, i) { var b = h('input', { type: 'checkbox', id: 'ck' + i, onchange: upd }); boxes.push(b); return h('label', { class: 'check', for: 'ck' + i }, b, t); }))], [sub]);
      }
    ];
    runStages(c, stages, function () {
      rec.status = rec.status === 'reviewed' ? 'reviewed' : 'submitted'; rec.submittedAt = Store.now(); rec.date = c.today; save(); award(c, 8, 'Turned in writing'); c.total = 1; c.right1 = 1;
      if (L.publish) { var full = (rec.fields.final || ''); c.extra.publish = true; }
      finishLesson(c, {});
    });
  }

  // ============================== BIBLE ==============================
  function passageNodes(L) {
    var out = [], textAll = [];
    L.refs.forEach(function (r) {
      var verses = r.ref ? [{ v: +r.ref.split(':')[1], t: Scripture.text(r.ref) }] : Scripture.passage(r.book, r.ch, r.from, r.to), label = r.ref ? r.ref : r.book + ' ' + r.ch + ':' + r.from + (r.to && r.to !== r.from ? '-' + r.to : '');
      out.push(h('h3', null, label)); textAll.push(label + '.');
      out.push(h('div', { class: 'passage scripture' }, verses.map(function (v) { textAll.push(v.t); return h('span', null, h('span', { class: 'vn' }, v.v), v.t + ' '); })));
      var nivText = Store.state.parentVerses && Store.state.parentVerses[label]; if (nivText) out.push(h('div', { class: 'fb info' }, h('b', { class: 'h' }, 'NIV (typed in by your parent)'), nivText));
    });
    return { nodes: out, text: textAll.join(' ') };
  }
  function blankVerse(text, level) {
    var toks = text.split(/\s+/), cand = []; toks.forEach(function (t, i) { if (t.replace(/[^A-Za-z]/g, '').length >= 4) cand.push(i); });
    var pick = []; if (level === 'blanks1') { var step = Math.max(1, Math.floor(cand.length / 2)); for (var a = 1; a < cand.length && pick.length < 2; a += step) pick.push(cand[a]); } else { cand.forEach(function (ci, k) { if (k % 2 === 1) pick.push(ci); }); }
    return { toks: toks, blanks: pick };
  }
  function startBible(L, c) {
    var pass = passageNodes(L), verseText = Scripture.text(L.verse.ref), st = L.verse.stage;
    var niv = h('a', { class: 'btn ghost small', href: Scripture.nivLink(L.niv), target: '_blank', rel: 'noopener' }, 'Open in NIV ↗');
    var stages = [
      function (next) { show([h('h2', null, 'Read God\'s Word'), h('div', { class: 'row' }, UI.canSpeak() ? UI.speakBtn(pass.text, 'Read it to me') : null, niv), h('p', { class: 'muted small' }, 'World English Bible (WEB). It uses the name "Yahweh" where many Bibles say "the LORD."'), pass.nodes], [btn('Next: In other words', next, 'gold')]); },
      function (next) { show([h('h2', null, 'In other words'), UI.canSpeak() ? UI.speakBtn(L.retell.join(' ')) : null, h('div', { class: 'card' }, L.retell.map(function (p) { return h('p', { style: { fontSize: '1.12rem' } }, p); }))], [btn('Questions', next, 'gold')]); },
      named('bq', function (next) { askSequence(c, L.questions, { stage: 'bq' }, next); }),
      function (next) { memoryStage(c, L, verseText, st, next); },
      function (next) {
        var ta = h('textarea', { class: 'ans', 'aria-label': 'Your reflection', autocapitalize: 'sentences', placeholder: 'Write 1 or 2 sentences.' }), wc = h('div', { class: 'small muted' }, '0 / 8 words'), go = btn('Save my thoughts', function () { Store.state.bible[L.id] = { reflection: ta.value.trim(), ts: Store.now(), date: c.today, _u: Store.now() }; award(c, 3, 'Bible reflection'); next(); }, 'gold'); go.disabled = true;
        ta.addEventListener('input', function () { var n = UI.wordCount(ta.value); wc.textContent = n + ' / 8 words'; go.disabled = n < 8; });
        show([h('h2', null, 'Think about it'), h('div', { class: 'card' }, h('p', { style: { fontSize: '1.15rem' } }, L.reflect)), ta, wc], [go]);
      }
    ];
    runStages(c, stages, function () { finishLesson(c, { verse: c.extra.verseOk && (st === 'recall' || st === 'letters') }); });
  }
  function memoryStage(c, L, verseText, stage, next) {
    var ref = L.verse.ref, head = h('h2', null, 'Memory verse: ' + ref), nivText = Store.state.parentVerses && Store.state.parentVerses[ref];
    var niv = nivText ? h('div', { class: 'fb info' }, h('b', { class: 'h' }, 'NIV (typed in by your parent)'), nivText) : null;
    function pass() { c.extra.verseOk = true; var m = Store.state.memory[ref] || { box: 0, due: '', _u: 0 }; m.box = Math.min(5, (m.box || 0) + 1); var days = [1, 3, 7, 14, 30][m.box - 1] || 30; m.due = Cal.addDays(c.today, days); m._u = Store.now(); Store.state.memory[ref] = m; award(c, 5, 'Memory verse'); }
    if (stage === 'read') {
      var boxes = [], go = btn('I said it 3 times', function () { pass(); next(); }, 'gold'); go.disabled = true; function upd() { go.disabled = !boxes.every(function (b) { return b.checked; }); }
      return show([head, h('div', { class: 'passage scripture' }, h('p', { style: { fontSize: '1.5rem', textAlign: 'center' } }, verseText), h('p', { class: 'muted small', style: { textAlign: 'center' } }, ref + ' (WEB)')), niv, UI.canSpeak() ? UI.speakBtn(verseText, 'Hear it') : null,
        h('div', { class: 'card' }, h('p', null, 'Read it out loud three times. Check each box after you say it.'), [1, 2, 3].map(function (n) { var b = h('input', { type: 'checkbox', id: 'sv' + n, onchange: upd }); boxes.push(b); return h('label', { class: 'check', for: 'sv' + n }, b, 'Said it (' + n + ')'); }))], [go]);
    }
    if (stage === 'blanks1' || stage === 'blanks2') {
      var bv = blankVerse(verseText, stage), inputs = [], fb = h('div'), chk = btn('Check', check, 'gold'), tries = 0;
      var line = h('p', { style: { fontFamily: 'var(--read)', fontSize: '1.45rem', lineHeight: '2.3' } }, bv.toks.map(function (t, i) { if (bv.blanks.indexOf(i) >= 0) { var clean = t.replace(/[^A-Za-z']/g, ''), tail = t.slice(t.indexOf(clean) + clean.length), inp = h('input', { class: 'verse-in', type: 'text', autocomplete: 'off', autocapitalize: 'off', autocorrect: 'off', spellcheck: 'false', size: Math.max(5, clean.length + 1), 'aria-label': 'Missing word', 'data-a': clean }); inputs.push(inp); return h('span', null, inp, tail + ' '); } return t + ' '; }));
      function check() { touch(c); var ok = inputs.every(function (i) { return i.value.trim().toLowerCase() === i.dataset.a.toLowerCase(); }); tries++; if (ok) { UI.sound('good'); pass(); fb.innerHTML = ''; fb.appendChild(h('div', { class: 'fb good' }, h('b', { class: 'h' }, 'Perfect! You know it.'))); chk.remove(); var nb = btn('Next', next, 'gold'); document.querySelector('.sticky-actions').appendChild(nb); } else { UI.sound('bad'); inputs.forEach(function (i) { if (i.value.trim().toLowerCase() !== i.dataset.a.toLowerCase()) i.style.background = 'var(--bad-bg)'; }); fb.innerHTML = ''; fb.appendChild(h('div', { class: 'fb bad' }, tries >= 2 ? 'The missing words are: ' + inputs.map(function (i) { return i.dataset.a; }).join(', ') + '. Try typing them now.' : 'Close. Fix the red blanks and try again.')); } }
      if (isLocal) root.__q = { type: 'verse', answer: bv.blanks.map(function (i) { return bv.toks[i].replace(/[^A-Za-z']/g, ''); }), mode: 'verse-blanks' };
      return show([head, h('p', null, 'Fill in the missing words from memory.'), niv, h('div', { class: 'passage scripture' }, line), fb], [chk]);
    }
    // letters + recall: typed recall
    var ta = h('textarea', { class: 'ans', 'aria-label': 'Type the verse', autocapitalize: 'off', autocorrect: 'off', spellcheck: 'false' }), fb2 = h('div'), tries2 = 0, go2 = btn('Check', check2, 'gold'); go2.disabled = true; ta.addEventListener('input', function () { go2.disabled = !ta.value.trim(); });
    var letters = stage === 'letters' ? h('div', { class: 'passage scripture' }, h('p', { style: { fontSize: '1.5rem', letterSpacing: '.08em', textAlign: 'center' } }, verseText.split(/\s+/).map(function (w) { return w.charAt(0) + (/[.,;:!?"]+$/.test(w) ? w.match(/[.,;:!?"]+$/)[0] : ''); }).join(' '))) : null;
    function check2() {
      touch(c); var sc = UI.verseScore(verseText, ta.value); tries2++; if (isLocal) root.__q = { type: 'verse', answer: verseText, mode: 'verse-recall' };
      if (sc >= 0.85) { UI.sound('good'); pass(); fb2.innerHTML = ''; fb2.appendChild(h('div', { class: 'fb good' }, h('b', { class: 'h' }, 'You said it from memory! 🎉'), verseText)); go2.remove(); ta.disabled = true; document.querySelector('.sticky-actions').appendChild(btn('Next', next, 'gold')); }
      else { UI.sound('bad'); fb2.innerHTML = ''; if (tries2 >= 2) { fb2.appendChild(h('div', { class: 'fb bad' }, h('b', { class: 'h' }, 'Here is the verse again. Read it, then try once more.'), verseText)); } else fb2.appendChild(h('div', { class: 'fb bad' }, 'You matched ' + Math.round(sc * 100) + '% of the words. Try again; think about the next word.')); if (tries2 >= 3) { go2.remove(); document.querySelector('.sticky-actions').appendChild(btn('Keep practicing tomorrow', next, 'ghost')); } }
    }
    if (isLocal) root.__q = { type: 'verse', answer: verseText, mode: 'verse-recall' };
    show([head, h('p', null, stage === 'letters' ? 'Here are the first letters of each word. Type the whole verse.' : 'Type the whole verse from memory. No peeking!'), niv, letters, ta, fb2], [go2]);
  }

  // ============================== FLUENCY ==============================
  function startFluency(L, c) {
    var rounds = 0, best = 0, bonusGiven = false, extraSpeed = false, MAX = 3, seed = hashStr(L.id + c.today);
    var stages = [function (next) {
      show([h('div', { class: 'card' }, h('h2', null, 'Game day: fluency sprint ⚡'), h('p', null, 'You have ' + L.seconds + ' seconds. Answer as many as you can. This is the ONLY place in the app where speed earns stars.'), h('ul', null, h('li', null, 'You earn 1 star for every 4 right answers (up to 5).'), h('li', null, 'Hit ' + L.target + ' right with 90% accuracy to earn the 10-star Speed Bonus.'), h('li', null, 'Wrong answers do not lose stars, but they lower your accuracy, so do not guess wildly.')), h('p', { class: 'muted' }, 'You can play up to ' + MAX + ' rounds. Your best round counts.'))], [btn('Start round 1', next, 'gold')]);
    }];
    function round(next) {
      rounds++; var left = L.seconds, right = 0, wrong = 0, probs = Gen.make(L.drill, 150, seed + rounds * 101, true), i = 0, over = false;
      var timer = h('div', { class: 'timer', role: 'timer' }, left), q = h('div', { class: 'bigq' }), score = h('div', { class: 'muted', style: { textAlign: 'center' } }, 'Right: 0'), inp = h('input', { class: 'ans', type: 'text', inputmode: 'numeric', autocomplete: 'off', 'aria-label': 'Answer', style: { textAlign: 'center' } });
      function setQ() { if (i >= probs.length) probs = probs.concat(Gen.make(L.drill, 150, seed + rounds * 101 + i, true)); q.textContent = probs[i].q + ' = ?'; inp.value = ''; if (isLocal) root.__q = { type: 'input', answer: probs[i].a, mode: 'fluency' }; }
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter' && inp.value.trim() && !over) { var ok = Gen.check(probs[i], inp.value); if (ok) right++; else wrong++; score.textContent = 'Right: ' + right; i++; setQ(); } });
      var iv = setInterval(function () { left--; timer.textContent = left; if (left <= 0) { clearInterval(iv); over = true; end(); } }, 1000); UI.cleanup = function () { clearInterval(iv); };
      show([timer, q, inp, score, h('p', { class: 'muted small', style: { textAlign: 'center' } }, 'Press Return after each answer.')]); setQ(); setTimeout(function () { inp.focus(); }, 60);
      function end() {
        touch(c); var acc = right + wrong ? right / (right + wrong) : 0, stars = Math.min(5, Math.floor(right / 4)), msgs = [];
        if (rounds === 1) { award(c, stars, 'Fluency sprint'); } else if (right > best) { award(c, Math.max(0, Math.min(5, Math.floor(right / 4)) - Math.min(5, Math.floor(best / 4))), 'Fluency sprint (improved)'); }
        if (!bonusGiven && right >= L.target && acc >= 0.9) { bonusGiven = true; extraSpeed = true; award(c, 10, 'Speed bonus'); msgs.push('⚡ SPEED BONUS! +10 stars'); UI.sound('win'); }
        best = Math.max(best, right); c.total = Math.max(c.total, right + wrong); c.right1 = Math.max(c.right1, right);
        var again = rounds < MAX ? btn('Play round ' + (rounds + 1), function () { round(next); }, 'ghost') : null;
        show([h('div', { class: 'cele' }, h('div', { class: 'big' }, '⏱️'), h('h1', null, right + ' right!'), h('p', null, wrong + ' missed · accuracy ' + Math.round(acc * 100) + '%'), h('p', null, 'Target: ' + L.target + ' right with 90%'), msgs.map(function (m) { return h('p', { class: 'earned' }, m); }), h('p', { class: 'muted' }, 'Best round: ' + best)), h('div', { class: 'sticky-actions' }, [again, btn('Done with sprints', next, 'gold')])]);
      }
    }
    stages.push(function (next) { round(next); });
    if (L.puzzles && L.puzzles.length) stages.push(function (next) { show([h('div', { class: 'card' }, h('h2', null, 'Brain teasers 🧩'), h('p', null, 'Think it through. Stars work like always: 2 for first try.'))], [btn('Start', function () { askSequence(c, L.puzzles, { stage: 'puz' }, next); }, 'gold')]); });
    stages.push(function (next) { show([h('div', { class: 'card' }, h('h2', null, '🎲 Family game time'), h('p', null, 'Ask your parent to play one of these with you this weekend (no screens needed):'), h('ul', null, h('li', null, 'Multiplication war: flip two playing cards each and race to multiply them.'), h('li', null, 'Roll two dice and make the biggest number you can, then round it.'), h('li', null, 'Tell a story from this week\'s Bible lesson in 60 seconds.')))], [btn('Finish', next, 'gold')]); });
    runStages(c, stages, function () { finishLesson(c, { speed: extraSpeed, best: best }); });
  }

  // ============================== entry ==============================
  Player.start = function (id, opts) {
    var L = Plan.find(id); if (!L) { UI.toast('That lesson is not available yet.'); return UI.go('/'); }
    var c = makeCtx(L, opts || {}); frame(c); UI.cleanup = function () { UI.stopSpeak(); };
    if (L.type === 'math') startMath(L, c); else if (L.type === 'lesson') startLesson(L, c); else if (L.type === 'spell-study') startSpellStudy(L, c);
    else if (L.type === 'spell-test') startSpellTest(L, c); else if (L.type === 'write') startWrite(L, c); else if (L.type === 'bible') startBible(L, c); else if (L.type === 'fluency') startFluency(L, c);
    else { UI.toast('Unknown lesson type.'); UI.go('/'); }
  };
  root.Player = Player;
})(window);
