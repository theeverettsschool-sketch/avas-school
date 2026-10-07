/* The school day (v3).
   - Lessons are assigned by SCHOOL-DAY NUMBER, not weekday: day 1 = week 1 Tuesday, day 5 = week 2 Monday, and so on.
     A Monday holiday no longer drops that Monday's lessons, and Saturday make-up days get the next day's lessons.
   - Every day is a 270-minute plan of blocks (lunch and breaks not counted). Each block holds the written lesson for
     that subject if one exists, or a generated review/practice lesson from the year-long content banks.
   - Lesson ids are stable ("w5-tue-science"), so saved progress always lines up.
   This file replaces Plan.forDate / Plan.find / Plan.dueThrough with day-number-based versions. */
(function (root) {
  'use strict';
  var isNode = typeof require !== 'undefined' && typeof module !== 'undefined';
  var C = isNode ? require('./content/core.js') : root.Content;
  var Cal = isNode ? require('./calendar.js') : root.Cal;
  var Plan = isNode ? require('./content/plan.js') : root.Plan;
  var Gen = isNode ? require('./gen.js') : root.Gen;
  var ROLES = ['mon', 'tue', 'wed', 'thu', 'fri'];

  // ---------------- blocks: 270 minutes ----------------
  var BLOCKS = [
    { key: 'bible', name: 'Devotion and Bible', icon: '📖', mins: 20, subject: 'bible' },
    { key: 'math', name: 'Math lesson and practice', icon: '🧮', mins: 40, subject: 'math' },
    { key: 'facts', name: 'Math facts sprint and review', icon: '⚡', mins: 10, subject: 'math' },
    { key: 'break1', brk: true, name: 'Break', mins: 10 },
    { key: 'reading', name: 'Reading skills', icon: '🔎', mins: 25, subject: 'reading' },
    { key: 'novel', name: 'Novel reading', icon: '📚', mins: 30, subject: 'reading' },
    { key: 'grammar', name: 'Grammar and spelling', icon: '✏️', mins: 25, subject: 'grammar' },
    { key: 'writing', name: 'Writing', icon: '📝', mins: 25, subject: 'writing' },
    { key: 'lunch', brk: true, name: 'Lunch', mins: 45 },
    { key: 'science', name: 'Science', icon: '🔬', mins: 25, subject: 'science' },
    { key: 'social', name: 'Social studies', icon: '🗺️', mins: 25, subject: 'social' },
    { key: 'break2', brk: true, name: 'Break', mins: 10 },
    { key: 'pe', name: 'PE and outdoor time', icon: '🏃', mins: 20, subject: 'pe' },
    { key: 'rotation', name: 'Rotation', icon: '🎨', mins: 25, subject: 'arts' }
  ];
  var ROT = { mon: ['art', 'Art', '🎨'], tue: ['music', 'Music and hymns', '🎵'], wed: ['nature', 'Nature journal', '🌿'], thu: ['project', 'Project time', '🛠️'], fri: ['game', 'Friday game day', '🎲'] };
  var DAY_MINUTES = BLOCKS.reduce(function (t, b) { return t + (b.brk ? 0 : b.mins); }, 0); // 270
  var SUBJECT_BLOCK = { bible: 'bible', math: 'math', reading: 'reading', grammar: 'grammar', spelling: 'grammar', writing: 'writing', science: 'science', social: 'social', fun: 'rotation', pe: 'pe', arts: 'rotation' };

  // ---------------- day number -> curriculum slot ----------------
  function slotOf(n) { if (!(n >= 1)) return null; if (n <= 4) return { week: 1, role: ROLES[n] }; var k = n - 5; return { week: 2 + Math.floor(k / 5), role: ROLES[k % 5] }; }
  function slotIndex(week, role) { var r = ROLES.indexOf(role); if (week === 1) return r >= 1 ? r : 0; return 4 + (week - 2) * 5 + r + 1; }
  var listCache = { key: '', list: [], index: {} };
  function list(opts) {
    opts = opts || {}; var key = JSON.stringify([opts.start || '', opts.extraOff || [], opts.makeup || []]);
    if (listCache.key !== key) { var L = Cal.schoolDays(Object.assign({}, opts, { through: '2028-06-30' })), idx = {}; L.forEach(function (d, i) { idx[d] = i + 1; }); listCache = { key: key, list: L, index: idx }; }
    return listCache;
  }
  function dayNum(date, opts) { return list(opts).index[date] || 0; }
  function dateOfDay(n, opts) { return list(opts).list[n - 1] || null; }

  // ---------------- helpers ----------------
  function hash(s) { var x = 5381; for (var i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) >>> 0; return x; }
  function seeded(id) { return Gen.mk(hash(id) % 1000003 + 1); }
  function pick(arr, n, S) { return S.shuffle(arr).slice(0, Math.min(n, arr.length)); }
  function wrapRange(arr, start, n) { var out = []; for (var i = 0; i < n && arr.length; i++) out.push(arr[(start + i) % arr.length]); return out; }
  function bank(subject, week) {
    var b = C.bank && C.bank[subject]; if (!b) return null; if (b[week]) return b[week];
    var keys = Object.keys(b).map(Number).sort(function (a, c) { return a - c; }); if (!keys.length) return null;
    if (week > keys[keys.length - 1]) { var lo = keys.filter(function (k) { return k >= 5; }), arr = lo.length ? lo : keys; return b[arr[(week - arr[0]) % arr.length]]; }
    return null;
  }
  function written(week, role, subject, type) {
    var ids = (C.weeks[week] && C.weeks[week][role]) || [];
    for (var i = 0; i < ids.length; i++) { var l = C.lessons[ids[i]]; if (l && l.subject === subject && (!type || l.type === type)) return l; }
    return null;
  }
  function writtenAny(week, role, subject) { var ids = (C.weeks[week] && C.weeks[week][role]) || [], out = []; ids.forEach(function (id) { var l = C.lessons[id]; if (l && l.subject === subject) out.push(l); }); return out; }
  // In week 1 school starts on Tuesday, so Tuesday plays Monday's part for generated lessons.
  function patternRole(week, role) { return week === 1 && role === 'tue' ? 'mon' : role; }
  function noPassage(q) { return !/\b(passage|story|article|poem|play|text|paragraph|author|narrator|reading)\b/i.test(q.q); }
  function mark(l, block, core) { if (!l) return l; l.block = l.block || block; if (core !== undefined && l.core === undefined) l.core = core; return l; }
  // all written lessons count as core (they introduce new material)
  Object.keys(C.lessons).forEach(function (id) { var l = C.lessons[id]; if (l.core === undefined) l.core = true; l.block = l.block || SUBJECT_BLOCK[l.subject]; });

  function vocabQs(u, S, n) {
    var V = u.vocab || [], out = [];
    pick(V, n || V.length, S).forEach(function (v) {
      var others = V.filter(function (x) { return x !== v; }).map(function (x) { return x[1]; }), wrong = pick(others, 3, S);
      if (wrong.length < 2) return;
      out.push(C.Q('What does “' + v[0] + '” mean?', [v[1]].concat(wrong), 0, '“' + v[0] + '” means ' + v[1] + '. The other choices are meanings of other words from this week.', 'Think back to how the word was used in the reading.'));
    });
    return out;
  }
  function openItem(q, min, why) { return { kind: 'open', q: q, min: min || 20, why: why || 'Your parent will read this and talk with you about it.' }; }

  // ---------------- generated lessons ----------------
  function genBible(W, R, id) {
    var u = bank('bible', W); if (!u) return null; var d = u.days[ROLES.indexOf(R)] || u.days[0];
    var stage = { mon: 'read', tue: 'read', wed: 'blanks1', thu: 'letters', fri: 'recall' }[R];
    return { id: id, subject: 'bible', type: 'devotion', block: 'bible', core: false, title: 'Devotion: ' + d.title, mins: 20, theme: u.theme, refs: d.refs, retell: d.retell, questions: d.questions, reflect: d.reflect, verse: { ref: u.verse.ref, why: u.verse.why, stage: stage } };
  }
  function mathTopicsThrough(W) { var seen = {}, out = []; for (var w = 1; w <= W; w++) { var m = Plan.MATH[w]; if (!m) continue; ROLES.forEach(function (r) { var s = m[r]; if (!s) return; var ts = typeof s === 'string' ? [s] : Array.isArray(s) ? s : s.review || s.test || []; ts.forEach(function (t) { if (!seen[t] && t.indexOf('fluency') !== 0) { seen[t] = 1; out.push(t); } }); }); } return out; }
  function genFacts(W, R, id) {
    var S = seeded(id), topics = mathTopicsThrough(Math.max(1, W - (R === 'mon' ? 1 : 0))), review = pick(topics, 6, S);
    return { id: id, subject: 'math', type: 'facts', block: 'facts', core: false, title: 'Facts sprint and mixed review', mins: 10, drill: Plan.drillFor(W), target: Math.min(26, 12 + Math.floor(W / 2)), seconds: 60, review: review, reviewCount: 5 };
  }
  function genReading(W, R, id) {
    var u = bank('reading', W); if (!u) return null; var P = patternRole(W, R), S = seeded(id), t = 'Reading: ' + u.title;
    var base = { id: id, subject: 'reading', type: 'lesson', block: 'reading', mins: 25, standard: u.skill, core: false };
    if (P === 'mon') return Object.assign(base, { core: true, title: t + ' (' + u.skill + ')', passage: u.passage, learn: u.learn, vocabCards: u.vocab, demo: u.demo, items: u.items.slice() });
    if (P === 'tue') return Object.assign(base, { title: t + ': words to know', passage: u.passage, reread: true, learn: [{ h: 'Words from the passage', p: 'Good readers figure out new words from the sentences around them. Re-read the passage, then match each word to its meaning.' }], vocabCards: u.vocab, items: vocabQs(u, S).concat(pick(u.items, 4, S)) });
    if (P === 'wed') return Object.assign(base, { title: t + ': prove it with the text', passage: u.passage, reread: true, learn: [{ h: 'Text evidence', p: 'When you answer a question about a reading, PROVE it. Copy a sentence from the passage inside quotation marks, then explain how it supports your answer.' }], items: pick(u.items, 3, S), opens: u.evidence.map(function (q) { return openItem(q + ' Copy a sentence from the passage as your proof.', 25); }) });
    if (P === 'thu') { var prev = bank('reading', W - 1) || u; return Object.assign(base, { title: 'Reading: re-read “' + prev.title + '”', passage: prev.passage, learn: [{ h: 'Read it again', p: 'Re-reading an older passage makes you a faster, smoother reader, and you notice things you missed the first time. Read it once, then answer.' }, u.learn[1] || u.learn[0]], items: pick(prev.items, 7, S) }); }
    return Object.assign(base, { title: t + ': summary and quiz', passage: u.passage, reread: true, learn: [{ h: 'Summarize', p: 'A summary tells the most important ideas in your own words, in order, without small details or your opinion. Aim for 3 to 4 sentences.' }], items: pick(u.items, 6, S), opens: [openItem(u.summary, 40)] });
  }
  function grammarUnit(W) { return bank('grammar', W); }
  function genGrammar(W, R, id) {
    var u = grammarUnit(W); if (!u) return null; var P = patternRole(W, R), S = seeded(id), start = { mon: 0, tue: 8, wed: 16, thu: 4, fri: 12 }[P];
    var spiral = []; for (var w = W - 1; w >= Math.max(1, W - 3); w--) { var pu = grammarUnit(w); if (pu) spiral = spiral.concat(pu.items); }
    var base = { id: id, subject: 'grammar', type: 'lesson', block: 'grammar', mins: 15, standard: u.standard, core: false };
    if (P === 'mon') return Object.assign(base, { core: true, title: 'Grammar: ' + u.title, learn: u.learn, demo: u.demo, items: u.items.slice(0, 8) });
    var items = wrapRange(u.items, start, P === 'fri' ? 7 : 8).concat(pick(spiral, P === 'fri' ? 3 : 2, S));
    return Object.assign(base, { title: (P === 'fri' ? 'Grammar Friday check: ' : 'Grammar practice: ') + u.title, learn: [{ h: 'Remember', p: u.learn[0].p }].concat(u.learn.slice(1, 2)), items: items });
  }
  function spellList(W) { if (C.spelling && C.spelling[W]) { var L = C.spelling[W]; return { name: L.name, rule: L.rule, words: L.words }; } var u = bank('spelling', W); return u ? { name: u.name, rule: u.rule, words: u.words } : null; }
  // believable misspellings for "which is spelled correctly?"
  function misspell(w, S) {
    var out = [], tries = 0;
    var rules = [
      function (x) { return x.replace(/ie/, 'ei'); }, function (x) { return x.replace(/ei/, 'ie'); },
      function (x) { return x.replace(/([bcdfgklmnprstz])\1/, '$1'); }, function (x) { var m = x.match(/^(.*?[aeiou])([bcdfglmnprst])([aeiou].*)$/); return m ? m[1] + m[2] + m[2] + m[3] : x; },
      function (x) { return x.replace(/e$/, ''); }, function (x) { return /[^e]$/.test(x) && x.length > 3 ? x + 'e' : x; },
      function (x) { return x.replace(/tion$/, 'shun').replace(/sion$/, 'tion'); }, function (x) { return x.replace(/ph/, 'f'); },
      function (x) { return x.replace(/ou/, 'ow'); }, function (x) { return x.replace(/ai/, 'ay'); }, function (x) { return x.replace(/ea/, 'ee'); },
      function (x) { return x.replace(/c(?=[aou])/, 'k'); }, function (x) { return x.replace(/le$/, 'el'); }, function (x) { return x.replace(/able$/, 'ible'); }, function (x) { return x.replace(/ible$/, 'able'); },
      function (x) { var i = 1 + Math.floor(S.r() * Math.max(1, x.length - 2)); return x.length > 3 ? x.slice(0, i) + x.charAt(i + 1) + x.charAt(i) + x.slice(i + 2) : x; },
      function (x) { var m = x.match(/[aeiou]/g); if (!m) return x; var v = S.pick(m), sw = { a: 'e', e: 'i', i: 'e', o: 'u', u: 'o' }[v]; var k = x.lastIndexOf(v); return k > 0 ? x.slice(0, k) + sw + x.slice(k + 1) : x; },
      function (x) { return x.replace(/y$/, 'ey'); }, function (x) { return x.replace(/ough/, 'uff'); }, function (x) { return x.replace(/gh/, ''); }
    ];
    while (out.length < 3 && tries++ < 80) { var f = S.pick(rules), m2 = f(w); if (m2 && m2 !== w && out.indexOf(m2) < 0 && /^[a-z'-]+$/i.test(m2)) out.push(m2); }
    return out;
  }
  function genSpelling(W, R, id, key) {
    var L = spellList(W); if (!L) return null; var S = seeded(id), words = L.words.map(function (x) { return { w: x[0], s: x[1], tip: x[2] || '' }; });
    var base = { id: id, subject: 'spelling', block: 'grammar', mins: 10, list: W, core: false };
    if (key === 'spell-pre') return Object.assign(base, { type: 'spell-test', pretest: true, title: 'Spelling pretest: ' + L.name, words: S.shuffle(words) });
    if (key === 'spell-study') return Object.assign(base, { type: 'spell-study', title: 'Spelling study: ' + L.name, rule: L.rule, words: words });
    if (key === 'spell-check') return Object.assign(base, { type: 'spell-study', dictation: true, title: 'Spelling practice test: ' + L.name, rule: L.rule, words: S.shuffle(words) });
    if (key === 'spell-test') return Object.assign(base, { type: 'spell-test', core: true, title: 'Friday spelling test', words: S.shuffle(words) });
    // spell-prac: which spelling is correct?
    var items = []; words.forEach(function (w) { var bad = misspell(w.w, S); if (bad.length >= 2) items.push(C.Q('Which spelling is correct? (' + w.s.replace(new RegExp('\\b' + w.w.replace(/[-']/g, '.') + '\\b', 'i'), '_____') + ')', [w.w].concat(bad), 0, 'The correct spelling is “' + w.w + '.” ' + (w.tip ? w.tip + ' ' : '') + 'Rule this week: ' + L.rule, 'Say it slowly and picture the word.')); });
    return Object.assign(base, { type: 'lesson', title: 'Spelling: choose the right spelling', learn: [{ h: 'This week: ' + L.name, p: L.rule }], items: pick(items, 10, S) });
  }
  function spellingKey(W, R) { return { mon: 'spell-pre', tue: 'spell-study', wed: 'spell-prac', thu: 'spell-check', fri: 'spell-test' }[R]; }
  function genSci(subject, W, R, id) {
    var u = bank(subject, W); if (!u) return null; var P = patternRole(W, R), S = seeded(id), sci = subject === 'science', nm = sci ? 'Science' : 'Social studies';
    var base = { id: id, subject: subject, type: 'lesson', block: subject, mins: 25, standard: u.standard, core: false };
    if (P === 'mon') return Object.assign(base, { core: true, title: nm + ': ' + u.title, passage: u.passage, learn: u.learn, vocabCards: u.vocab, demo: u.demo, items: u.items.slice(0, 6) });
    if (P === 'tue') return Object.assign(base, { title: (sci ? 'Science lab: ' : 'Activity: ') + u.activities[0].title, learn: [{ h: u.title, p: u.learn[0].p }], lab: u.activities[0], items: u.items.slice(6, 9) });
    if (P === 'wed') return Object.assign(base, { title: nm + ' words: ' + u.title, passage: u.passage, reread: true, learn: [{ h: 'Words to know', p: 'Scientists and historians use exact words. Learn this week\'s words, then use them.' }], vocabCards: u.vocab, items: vocabQs(u, S).concat(u.items.slice(9, 12)) });
    if (P === 'thu') return Object.assign(base, { title: (sci ? 'Science lab: ' : 'Activity: ') + u.activities[1].title, learn: [{ h: u.title, p: (u.learn[1] || u.learn[0]).p }], lab: u.activities[1], opens: [openItem(u.think[0], 25)] });
    return Object.assign(base, { title: nm + ' review: ' + u.title, passage: u.passage, reread: true, learn: [{ h: 'Review the week', p: 'Look back at what you learned this week. You can open the reading again if you need it.' }], items: u.items.slice(12).concat(pick(u.items.slice(0, 6), 4, S)), opens: [openItem(u.think[1], 30)] });
  }
  function journalPrompt(n) { var J = (C.prompts && C.prompts.journal) || []; return J.length ? J[(n - 1 + J.length) % J.length] : 'Write about something you learned this week and why it matters to you.'; }
  function genJournal(W, R, id) {
    var n = slotIndex(W, R);
    return { id: id, subject: 'writing', type: 'journal', block: 'writing', core: false, mins: 25, title: 'Journal', prompt: journalPrompt(n), min: W < 10 ? 50 : W < 19 ? 70 : 90 };
  }
  function genProject(W, id) {
    var P = (C.projects || []).filter(function (p) { return W >= p.start && W < p.start + 4; })[0];
    if (!P) { var F = C.projectFinale; return F ? Object.assign({ id: id, subject: 'writing', type: 'write', block: 'writing', core: true, mins: 25, project: 'Year-end celebration' }, F) : null; }
    var k = W - P.start, st = P.stages[k];
    return { id: id, subject: 'writing', type: 'write', block: 'writing', core: true, mins: 25, project: P.name, title: 'Writing project: ' + st.title, intro: (k === 0 ? P.intro + ' ' : '') + st.intro, demo: st.demo, fields: st.fields, checklist: st.checklist, publish: !!st.publish, carryFrom: k > 0 ? 'w' + (W - 1) + '-thu-write' : null };
  }
  function promptFor(kind, n, step) { var B = (C.prompts && C.prompts[kind]) || []; if (!B.length) return null; return B[Math.floor((n - 1) / (step || 1)) % B.length]; }
  function genTimer(W, R, id, key) {
    var n = slotIndex(W, R), rot = ROT[R];
    if (key === 'novel') return { id: id, subject: 'reading', type: 'timer', block: 'novel', core: false, mins: 30, title: 'Novel reading', icon: '📚', how: 'Read your chapter book (or read aloud with a parent) for 30 minutes. When the timer finishes, fill in your reading log.', log: true };
    if (key === 'pe') { var p = promptFor('pe', n) || { title: 'Outdoor play', how: 'Play outside for 20 minutes: run, jump, bike, or play a game.' }; return { id: id, subject: 'pe', type: 'timer', block: 'pe', core: false, mins: 20, title: 'PE: ' + p.title, icon: '🏃', how: p.how }; }
    var kind = rot[0], q = promptFor(kind, n, kind === 'project' ? 15 : 5) || { title: rot[1], how: 'Spend this time on ' + rot[1].toLowerCase() + '.' };
    return { id: id, subject: 'arts', type: 'timer', block: 'rotation', core: false, mins: 25, title: rot[1] + ': ' + q.title, icon: rot[2], how: q.how, note: kind === 'nature' || kind === 'art' };
  }

  // Any generated lesson from its id parts. Returns null if this slot has a written lesson instead.
  function genLesson(W, R, key) {
    var id = 'w' + W + '-' + R + '-' + key;
    if (C.lessons[id]) return C.lessons[id];
    switch (key) {
      case 'math': return Plan.mathLesson(W, R);
      case 'fun': return mark(Plan.funLesson(W), 'rotation', false);
      case 'facts': return genFacts(W, R, id);
      case 'bible': return genBible(W, R, id);
      case 'reading': return genReading(W, R, id);
      case 'grammar': return genGrammar(W, R, id);
      case 'spell-pre': case 'spell-study': case 'spell-prac': case 'spell-check': case 'spell-test': return genSpelling(W, R, id, key);
      case 'journal': return genJournal(W, R, id);
      case 'write': return W >= 5 ? genProject(W, id) : null;
      case 'science': return genSci('science', W, R, id);
      case 'social': return genSci('social', W, R, id);
      case 'novel': case 'pe': case 'rot': return genTimer(W, R, id, key);
    }
    return null;
  }

  // What goes in each block on curriculum slot (W, R)
  function itemsFor(key, W, R) {
    var out = [], w;
    function add(l, core) { if (l) out.push(mark(l, key, core)); }
    switch (key) {
      case 'bible': add(written(W, R, 'bible') || genLesson(W, R, 'bible')); break;
      case 'math': add(genLesson(W, R, 'math')); break;
      case 'facts': add(genLesson(W, R, 'facts')); break;
      case 'reading': add(written(W, R, 'reading') || genLesson(W, R, 'reading')); break;
      case 'novel': add(genLesson(W, R, 'novel')); break;
      case 'grammar':
        add(written(W, R, 'grammar') || genLesson(W, R, 'grammar'));
        w = writtenAny(W, R, 'spelling'); if (w.length) w.forEach(function (l) { add(l); }); else add(genLesson(W, R, spellingKey(W, R)));
        break;
      case 'writing': add(written(W, R, 'writing') || (R === 'thu' && W >= 5 ? genLesson(W, R, 'write') : genLesson(W, R, 'journal'))); break;
      case 'science': add(written(W, R, 'science') || genLesson(W, R, 'science')); break;
      case 'social': add(written(W, R, 'social') || genLesson(W, R, 'social')); break;
      case 'pe': add(genLesson(W, R, 'pe')); break;
      case 'rotation': add(R === 'fri' ? genLesson(W, R, 'fun') : genLesson(W, R, 'rot')); break;
    }
    return out;
  }

  // ---------------- the day ----------------
  function timeToMin(t) { var m = String(t || '08:30').match(/^(\d{1,2}):(\d{2})$/); return m ? +m[1] * 60 + +m[2] : 510; }
  function minToTime(m) { var hh = Math.floor(m / 60), mm = m % 60, ap = hh >= 12 ? 'PM' : 'AM', h12 = hh % 12 || 12; return h12 + ':' + (mm < 10 ? '0' : '') + mm + ' ' + ap; }
  function forSlot(W, R, opts) {
    var t = timeToMin(opts && opts.dayStart), blocks = BLOCKS.map(function (b) {
      var o = Object.assign({}, b); o.start = minToTime(t); t += b.mins; o.end = minToTime(t);
      if (b.key === 'rotation') { o.name = ROT[R][1]; o.icon = ROT[R][2]; }
      o.items = b.brk ? [] : itemsFor(b.key, W, R); return o;
    });
    var lessons = []; blocks.forEach(function (b) { b.items.forEach(function (l) { lessons.push(l); }); });
    return { week: W, role: R, blocks: blocks, lessons: lessons, minutes: DAY_MINUTES };
  }
  function forDate(date, opts) {
    var n = dayNum(date, opts); if (!n) return { n: 0, week: 0, role: null, lessons: [], blocks: [], minutes: DAY_MINUTES };
    var s = slotOf(n), d = forSlot(s.week, s.role, opts); d.n = n; d.date = date; return d;
  }
  // Core lessons (new material) that should have been finished by `date`, for the catch-up list.
  function dueThrough(date, opts) {
    var out = [], L = list(opts).list;
    for (var i = 0; i < L.length && L[i] <= date; i++) { var s = slotOf(i + 1), d = forSlot(s.week, s.role, opts); d.lessons.forEach(function (l) { if (l.core) out.push({ lesson: l, date: L[i] }); }); }
    return out;
  }
  // Extra practice to fill a block's minutes once its lesson is done. id: x-<block>-<date>-<k>
  function extraLesson(id, opts) {
    var m = id.match(/^x-([a-z]+)-(\d{4}-\d\d-\d\d)-(\d+)$/); if (!m) return null;
    var block = m[1], date = m[2], n = dayNum(date, opts) || 1, s = slotOf(n), W = s.week, S = seeded(id), base = { id: id, extra: true, block: block, core: false, mins: 10 };
    function poolFrom(subject) { var out = []; for (var w = 1; w <= W; w++) { var u = bank(subject, w); if (u && u.items) out = out.concat(u.items.filter(noPassage)); } return out; }
    if (block === 'math' || block === 'facts') { var topics = mathTopicsThrough(W); return Object.assign(base, { subject: 'math', type: 'math', title: 'Extra practice: mixed math', topics: pick(topics, 4, S), count: 8, review: true, practiceOnly: true, learn: [] }); }
    if (block === 'reading') { var u = bank('reading', W) || bank('reading', 5); return u ? Object.assign(base, { subject: 'reading', type: 'lesson', title: 'Extra practice: re-read and answer', passage: u.passage, learn: [], items: pick(u.items, 6, S) }) : null; }
    if (block === 'grammar') { var g = []; for (var w2 = 1; w2 <= W; w2++) { var gu = grammarUnit(w2); if (gu) g = g.concat(gu.items); } return Object.assign(base, { subject: 'grammar', type: 'lesson', title: 'Extra practice: grammar mix', learn: [], items: pick(g, 8, S) }); }
    if (block === 'science' || block === 'social') { var pool = poolFrom(block); return pool.length ? Object.assign(base, { subject: block, type: 'lesson', title: 'Extra practice: ' + (block === 'science' ? 'science' : 'social studies') + ' review', learn: [], items: pick(pool, 6, S) }) : null; }
    if (block === 'writing') return Object.assign(base, { subject: 'writing', type: 'journal', title: 'Free writing', prompt: journalPrompt(n + 60 + (+m[3]) * 7), min: 30 });
    if (block === 'bible') { var bu = bank('bible', W) || bank('bible', 5); if (!bu) return null; var qs = []; bu.days.forEach(function (d) { qs = qs.concat(d.questions); }); return Object.assign(base, { subject: 'bible', type: 'lesson', title: 'Extra practice: this week\'s Bible stories', learn: [], items: pick(qs, 6, S) }); }
    return null;
  }
  function find(id) {
    if (C.lessons[id]) return C.lessons[id];
    var m = id.match(/^w(\d+)-(mon|tue|wed|thu|fri)-([a-z-]+)$/); if (m) return genLesson(+m[1], m[2], m[3]);
    if (/^x-/.test(id)) return extraLesson(id, root.Store ? root.Store.state.settings : null);
    return null;
  }
  function weekOf(date, opts) { var n = dayNum(date, opts); if (n) return slotOf(n).week; var nx = Cal.nextSchoolDay(date, opts); var k = nx ? dayNum(nx, opts) : 0; return k ? slotOf(k).week : 0; }

  // ---------------- brain teasers for game day (generated, with full explanations) ----------------
  var Puzzles = {
    make: function (week, n) {
      var S = Gen.mk(week * 7919 + 13), out = [], kinds = [riddle, days, legs, nextIn, clock];
      for (var i = 0; i < n; i++) out.push(kinds[(week + i) % kinds.length](S));
      return out;
    }
  };
  function opts4(S, right, spread) { var o = [right], t = 0; while (o.length < 4 && t++ < 40) { var x = right + S.pick([-3, -2, -1, 1, 2, 3]) * (spread || 1); if (x >= 0 && o.indexOf(x) < 0) o.push(x); } var sh = S.shuffle(o); return { options: sh.map(String), a: sh.indexOf(right) }; }
  function riddle(S) { var x = S.int(3, 12), m = S.int(2, 4), a = S.int(1, 9), r = x * m + a, o = opts4(S, x); return C.Q('I am a number. Multiply me by ' + m + ' and add ' + a + ', and you get ' + r + '. What number am I?', o.options, o.a, 'Work backward and undo each step: ' + r + ' − ' + a + ' = ' + (r - a) + ', then ' + (r - a) + ' ÷ ' + m + ' = ' + x + '. Check: ' + x + ' × ' + m + ' + ' + a + ' = ' + r + '.', 'Undo the steps in reverse order.'); }
  function days(S) { var D = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], s = S.int(0, 6), k = S.int(8, 30), e = (s + k) % 7, o = S.shuffle([D[e], D[(e + 1) % 7], D[(e + 6) % 7], D[(e + 3) % 7]]); return C.Q('Today is ' + D[s] + '. What day of the week will it be in ' + k + ' days?', o, o.indexOf(D[e]), k + ' days = ' + Math.floor(k / 7) + ' week' + (Math.floor(k / 7) === 1 ? '' : 's') + ' and ' + (k % 7) + ' extra day' + (k % 7 === 1 ? '' : 's') + '. Whole weeks land on the same weekday, so count ' + (k % 7) + ' day' + (k % 7 === 1 ? '' : 's') + ' forward from ' + D[s] + ': ' + D[e] + '.', 'Every 7 days it is the same day again.'); }
  function legs(S) { var cows = S.int(2, 7), hens = S.int(2, 8), H = cows + hens, L = cows * 4 + hens * 2, o = opts4(S, cows); return C.Q('A farm has chickens and cows. There are ' + H + ' heads and ' + L + ' legs. How many cows are there?', o.options, o.a, 'Pretend all ' + H + ' animals are chickens: ' + H + ' × 2 = ' + (H * 2) + ' legs. There are really ' + L + ', which is ' + (L - H * 2) + ' extra legs. Each cow has 2 more legs than a chicken, so ' + (L - H * 2) + ' ÷ 2 = ' + cows + ' cows. Check: ' + cows + ' cows have ' + (cows * 4) + ' legs and ' + hens + ' chickens have ' + (hens * 2) + ', total ' + L + '.', 'Pretend every animal is a chicken first.'); }
  function nextIn(S) { var a = S.int(1, 5), d = S.int(1, 4), seq = [a], i; for (i = 1; i < 5; i++) seq.push(seq[i - 1] + d + i - 1); var nx = seq[4] + d + 4, o = opts4(S, nx); return C.Q('What comes next? ' + seq.join(', ') + ', __', o.options, o.a, 'Look at the jumps between numbers: ' + seq.slice(1).map(function (x, j) { return x - seq[j]; }).join(', ') + '. Each jump grows by 1, so the next jump is ' + (d + 4) + ': ' + seq[4] + ' + ' + (d + 4) + ' = ' + nx + '.', 'Look at how much each jump grows.'); }
  function clock(S) { var h = S.int(1, 11), m = S.pick([0, 15, 30, 45]), ah = S.int(1, 4), am = S.pick([15, 30, 45, 20]), tot = h * 60 + m + ah * 60 + am, eh = Math.floor(tot / 60), em = tot % 60, f = function (H, M) { var hh = ((H - 1) % 12) + 1; return hh + ':' + (M < 10 ? '0' : '') + M; }, right = f(eh, em), o = S.shuffle([right, f(eh + 1, em), f(eh, (em + 30) % 60), f(eh - 1 || 12, em)]).filter(function (x, i, a) { return a.indexOf(x) === i; }); if (o.length < 3) o.push(f(eh + 2, em)); return C.Q('A movie starts at ' + f(h, m) + '. It lasts ' + ah + ' hour' + (ah > 1 ? 's' : '') + ' and ' + am + ' minutes. What time does it end?', o, o.indexOf(right), 'Add the hours first: ' + f(h, m) + ' + ' + ah + ' hour' + (ah > 1 ? 's' : '') + ' = ' + f(h + ah, m) + '. Then add ' + am + ' minutes: ' + (m + am >= 60 ? m + ' + ' + am + ' = ' + (m + am) + ' minutes, which is 1 hour and ' + (m + am - 60) + ' minutes, so ' : '') + 'the movie ends at ' + right + '.', 'Add the hours, then the minutes. 60 minutes make an hour.'); }

  var Schedule = { BLOCKS: BLOCKS, ROT: ROT, DAY_MINUTES: DAY_MINUTES, SUBJECT_BLOCK: SUBJECT_BLOCK, slotOf: slotOf, slotIndex: slotIndex, dayNum: dayNum, dateOfDay: dateOfDay, forDate: forDate, forSlot: forSlot, dueThrough: dueThrough, find: find, genLesson: genLesson, extraLesson: extraLesson, weekOf: weekOf, bank: bank, misspell: misspell, minToTime: minToTime, timeToMin: timeToMin, Puzzles: Puzzles };
  // take over day assembly in Plan (old weekday-based versions stay available as Plan._old*)
  Plan._oldForDate = Plan.forDate; Plan._oldFind = Plan.find; Plan._oldDueThrough = Plan.dueThrough; Plan._oldWeekOf = Plan.weekOf;
  Plan.forDate = forDate; Plan.find = find; Plan.dueThrough = dueThrough; Plan.weekOf = weekOf;
  root.Puzzles = Puzzles;
  if (isNode) module.exports = Schedule; else root.Schedule = Schedule;
})(typeof window !== 'undefined' ? window : globalThis);
