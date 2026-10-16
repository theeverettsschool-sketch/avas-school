/* v5 "Finish my day" review: scoring, writing checks, redo bookkeeping, merge, optional AI grading hook.
   No DOM here (unit-tested in Node). State: Store.state.reviews[date] = { date, ts, items: { key: item }, done, _u }.
   item = { key, kind:'auto'|'write', lesson, title, subject, pct, right, total, flag:'redo'|'try'|null, reasons:[],
            ai, redo:{tries, right, total, passed, ts}, cleared, required, _u } */
(function (root) {
  'use strict';
  var isNode = typeof require !== 'undefined' && typeof module !== 'undefined';
  function St() { return root.Store || (isNode ? require('./store.js') : null); }
  function P() { return root.Plan; }
  var AUTO_TYPES = { math: 1, lesson: 1, bible: 1, devotion: 1, facts: 1, fluency: 1, 'spell-test': 1 };
  var STOP = 'about after again against because before being below between could doing during every from further have having here into itself more most other ought over same should some such than that their theirs them then there these they this those through under until very what when where which while whom with would your yours write sentence sentences answer passage words using tell explain think something someone things today least'.split(' ');

  function cfg() { var s = (St() && St().state.settings) || {}; return { pct: +s.reviewPct > 0 ? +s.reviewPct : 80, bonus: s.redoBonus !== false, bonusStars: s.redoBonusStars !== undefined ? Math.max(0, Math.min(3, +s.redoBonusStars || 0)) : 1, aiUrl: (s.aiUrl || '').trim() }; }
  function words(t) { return String(t || '').trim().split(/\s+/).filter(function (w) { return /[A-Za-z0-9]/.test(w); }); }

  // ---------- local writing checks (kind, specific reasons for a 4th grader) ----------
  function checkWriting(text, o) {
    o = o || {}; var t = String(text || ''), W = words(t), n = W.length, min = o.min || 15, reasons = [], what = o.what || 'writing';
    if (n < min) reasons.push('Your ' + what + ' has ' + n + ' word' + (n === 1 ? '' : 's') + '. It needs at least ' + min + '. Add ' + (min - n) + ' more: tell what happened, why, or give an example.');
    var lw = W.map(function (w) { return w.toLowerCase().replace(/[^a-z']/g, ''); }).filter(Boolean);
    if (n >= 5) {
      var counts = {}, top = 0; lw.forEach(function (w) { counts[w] = (counts[w] || 0) + 1; if (counts[w] > top) top = counts[w]; });
      var uniq = Object.keys(counts).length, noVowel = lw.filter(function (w) { return w.length > 2 && !/[aeiouy]/.test(w); }).length;
      if (/(.)\1{3,}/.test(t.replace(/[.!?\s]/g, '')) || /(\b\w+\b)(\s+\1\b){3,}/i.test(t) || top / lw.length > 0.4 || (lw.length >= 15 && uniq / lw.length < 0.35) || noVowel / lw.length > 0.3)
        reasons.push('Some of this looks like repeated or made-up words. Use real sentences that say something new each time.');
    }
    var kw = keywords(o.prompt);
    if (n >= 5 && kw.length >= 3 && !kw.some(function (k) { return lw.some(function (w) { return w.slice(0, 5) === k.slice(0, 5); }); }))
      reasons.push('Make sure you answer the question: "' + String(o.prompt).slice(0, 120) + '" Use some of its words in your answer.');
    if (n >= 4) {
      var sents = t.split(/(?<=[.!?])\s+/).map(function (x) { return x.trim(); }).filter(Boolean), low = sents.filter(function (x) { return /^[a-z]/.test(x); }).length;
      if (!/[.!?]["”')]*\s*$/.test(t.trim()) && !/[.!?]/.test(t)) reasons.push('Add end marks: every sentence needs a period, question mark, or exclamation point.');
      else if (low > 0 && low / sents.length > 0.5) reasons.push('Start each sentence with a capital letter.');
      if (/(^|\s)i(\s|'|’|$)/.test(t)) reasons.push('When you write about yourself, "I" is always a capital letter.');
    }
    return { ok: reasons.length === 0, reasons: reasons, words: n };
  }
  function keywords(p) { var seen = {}; return words(p).map(function (w) { return w.toLowerCase().replace(/[^a-z]/g, ''); }).filter(function (w) { if (w.length < 5 || STOP.indexOf(w) >= 0 || seen[w]) return false; seen[w] = 1; return true; }); }

  // ---------- what to review for one lesson ----------
  function scoreLesson(L, p) {
    if (!L || !p || !p.done || !AUTO_TYPES[L.type] || L.pretest || !(p.total > 0)) return null;
    var right = Math.min(p.total, (p.right || 0) + (p.r2 || 0)); return { right: right, total: p.total, pct: Math.round(100 * right / p.total) };
  }
  function lessonWritings(L, st) {
    var out = [], W = st.writing || {}, id = L.id;
    Object.keys(W).forEach(function (k) {
      if (k !== id && k.indexOf(id + ':') !== 0) return; var r = W[k]; if (!r || r.status === 'draft') return;
      if (r.kind === 'journal' || (k === id && L.type === 'journal')) out.push({ key: 'w:' + k, wkey: k, what: 'journal entry', prompt: r.prompt || L.prompt, text: r.text || '', min: L.min || 30 });
      else if (r.kind === 'write' || r.fields) { var F = L.fields || []; F.forEach(function (f) { if (r.fields && r.fields[f.id] !== undefined) out.push({ key: 'w:' + k + '#' + f.id, wkey: k, field: f.id, what: 'answer for "' + f.label.split(':')[0].split('(')[0].trim() + '"', prompt: f.label, text: r.fields[f.id] || '', min: f.min || 10 }); }); }
      else if (r.kind === 'open') { var op = (L.opens || []).filter(function (x) { return x.q === r.q; })[0]; out.push({ key: 'w:' + k, wkey: k, what: 'answer', prompt: r.q, text: r.text || '', min: (op && op.min) || 15 }); }
      else if (r.kind === 'lab') out.push({ key: 'w:' + k, wkey: k, what: 'lab notes', prompt: r.q, text: r.text || '', min: 12 });
    });
    var R = st.readlog && st.readlog[id]; if (R) out.push({ key: 'r:' + id, rkey: id, what: 'reading log summary', prompt: 'What happened in what you read?', text: R.summary || '', min: 10 });
    return out;
  }

  // ---------- build / rebuild a day's review (keeps redo results, parent clears, AI feedback) ----------
  function build(date) {
    var S = St(), st = S.state, C = cfg(), day = P().forDate(date, st.settings), R = st.reviews || (st.reviews = {}), old = (R[date] && R[date].items) || {}, items = {}, now = S.now();
    day.lessons.forEach(function (L) {
      var p = st.progress[L.id], sc = scoreLesson(L, p);
      if (sc) { var o = old[L.id] || {}, it = { key: L.id, kind: 'auto', lesson: L.id, title: L.title, subject: L.subject, right: sc.right, total: sc.total, pct: sc.pct, flag: sc.pct < C.pct ? 'redo' : null, reasons: sc.pct < C.pct ? ['You got ' + sc.right + ' of ' + sc.total + ' (' + sc.pct + '%). Redo the ones you missed to reach ' + C.pct + '%.'] : [], redo: o.redo || null, cleared: !!o.cleared, required: !!o.required, _u: now };
        if (o.required && !it.flag) { it.flag = 'redo'; it.reasons = ['Your parent asked you to redo this one.']; } items[L.id] = it; }
      if (p && p.done) lessonWritings(L, st).forEach(function (w) {
        var o = old[w.key] || {}, ch = checkWriting(w.text, w), it = { key: w.key, kind: 'write', lesson: L.id, wkey: w.wkey, rkey: w.rkey, field: w.field, title: L.title, what: w.what, prompt: w.prompt, min: w.min, subject: L.subject, words: ch.words, flag: ch.ok ? null : 'try', reasons: ch.reasons, ai: o.ai || null, redo: o.redo || null, cleared: !!o.cleared, required: !!o.required, _u: now };
        if (it.ai && it.ai.textHash === hash(w.text)) applyAiToItem(it, it.ai);
        if (o.required && !it.flag) { it.flag = 'try'; it.reasons = ['Your parent asked you to work on this one again.']; }
        items[w.key] = it;
      });
    });
    var rev = R[date] = { date: date, ts: (R[date] && R[date].ts) || now, items: items, done: false, celebrated: !!(R[date] && R[date].celebrated), _u: now };
    rev.done = outstanding(rev).length === 0; return rev;
  }
  function resolved(it) { return !it.flag || it.cleared || !!(it.redo && it.redo.passed); }
  function outstanding(rev) { var o = []; if (!rev) return o; for (var k in rev.items) if (!resolved(rev.items[k])) o.push(rev.items[k]); return o; }
  function touch(rev) { var o = outstanding(rev); rev.done = o.length === 0; rev._u = St().now(); return rev; }

  // ---------- redo bookkeeping ----------
  function redoItems(L, p, date) {
    var G = root.Gen; if (L.type === 'math' || L.type === 'facts' || L.type === 'fluency') {
      var topics = (p.missed || []).map(function (x) { return x.skill; }).filter(function (x, i, a) { return x && a.indexOf(x) === i && G && G.make; }); if (!topics.length) topics = (L.topics || L.review || []).slice(0, 3);
      var pr = (((St().state.reviews || {})[date] || { items: {} }).items[L.id] || {}).redo, n = Math.min(8, Math.max(4, (p.missed || []).length || 6)), out = [], seed = (hash(L.id + date + (pr ? pr.tries : 0)) % 90000) + 101;
      topics.forEach(function (t, i) { try { G.make(t, Math.ceil(n / topics.length), seed + i * 31).forEach(function (q) { out.push(q); }); } catch (e) { } }); return out.slice(0, n);
    }
    if (L.type === 'spell-test') { var sp = (St().state.spelling || {})['list' + L.list], last = sp && sp.tests && sp.tests.filter(function (t) { return !t.pretest; }).slice(-1)[0], miss = (last && last.missed) || [];
      return (L.words || []).filter(function (w) { return miss.indexOf(w.w) >= 0; }).map(function (w) { return { kind: 'text', q: 'Type the missing word: ' + w.s.replace(new RegExp('\\b' + w.w.replace(/[-']/g, '.') + '\\b', 'i'), '_____') + ' (it starts with "' + w.w[0] + '" and has ' + w.w.length + ' letters)', answers: [w.w], why: 'The word is “' + w.w + '.” ' + (w.tip || ''), hint: 'Say it slowly and spell each sound.' }; }); }
    if (p.missed && p.missed.length) return p.missed.slice();
    return [].concat(L.items || [], L.questions || []).filter(function (x) { return x && x.kind !== 'open'; });
  }
  function recordRedo(date, key, r) {
    var S = St(), C = cfg(), rev = (S.state.reviews || {})[date]; if (!rev || !rev.items[key]) return { passed: false, bonus: 0 };
    var it = rev.items[key], pct = r.total ? Math.round(100 * r.right / r.total) : 0, passed = pct >= C.pct, prev = it.redo || { tries: 0 }, bonus = 0;
    if (C.bonus && C.bonusStars && !prev.bonusGiven && r.right > 0) { bonus = Math.min(5, r.right * C.bonusStars); S.addStars(bonus, 'Fixed mistakes (redo)', key, date, today()); }
    it.redo = { tries: (prev.tries || 0) + 1, right: r.right, total: r.total, pct: pct, passed: passed || !!prev.passed, ts: S.now(), bonusGiven: !!(prev.bonusGiven || bonus) }; it._u = S.now(); touch(rev);
    return { passed: passed, bonus: bonus };
  }
  // Ava re-wrote a flagged piece: save the new text into the original record and re-check it
  function recordFix(date, key, text) {
    var S = St(), st = S.state, rev = st.reviews[date], it = rev && rev.items[key]; if (!it) return null;
    if (it.rkey) { var R = st.readlog[it.rkey]; R.summary = text; R._u = S.now(); }
    else { var w = st.writing[it.wkey]; if (it.field) { w.fields = w.fields || {}; w.fields[it.field] = text; } else w.text = text; w.revisedAt = S.now(); w._u = S.now(); }
    var ch = checkWriting(text, it); it.words = ch.words; it.redo = { tries: ((it.redo && it.redo.tries) || 0) + 1, passed: ch.ok, ts: S.now(), reasons: ch.reasons }; it._u = S.now(); touch(rev);
    return ch;
  }
  function parentSet(date, key, action) {
    var S = St(), rev = S.state.reviews[date], it = rev && rev.items[key]; if (!it) return;
    if (action === 'clear') { it.cleared = true; it.required = false; }
    if (action === 'require') { it.cleared = false; it.required = true; it.flag = it.kind === 'auto' ? 'redo' : 'try'; it.redo = null; it.reasons = [it.kind === 'auto' ? 'Your parent asked you to redo this one.' : 'Your parent asked you to work on this one again.']; }
    it._u = S.now(); touch(rev);
  }
  function today() { return root.UI ? root.UI.today() : null; }
  function hash(s) { var x = 5381; s = String(s || ''); for (var i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) >>> 0; return x; }

  // ---------- merge (sync): per date, per item newest wins; never lose a passed redo or a parent clear ----------
  function merge(a, b) {
    var out = {}, d; a = a || {}; b = b || {};
    for (d in a) out[d] = a[d];
    for (d in b) {
      var x = out[d], y = b[d]; if (!x) { out[d] = y; continue; } if (!y) continue;
      var newer = (y._u || 0) > (x._u || 0) ? y : x, items = {}, k, A = x.items || {}, B = y.items || {};
      for (k in A) items[k] = A[k];
      for (k in B) { var p = items[k], q = B[k]; if (!p || (q._u || 0) > (p._u || 0)) { var keep = Object.assign({}, q); if (p && p.redo && p.redo.passed && !(keep.redo && keep.redo.passed) && !keep.required) keep.redo = p.redo; items[k] = keep; } else if (q.redo && q.redo.passed && !(p.redo && p.redo.passed) && !p.required) { items[k] = Object.assign({}, p, { redo: q.redo }); } }
      var m = Object.assign({}, newer, { items: items, celebrated: !!(x.celebrated || y.celebrated) }); m.done = outstanding(m).length === 0; out[d] = m;
    }
    return out;
  }

  // ---------- optional AI grading (a proxy URL the parent sets; the key lives only in the proxy) ----------
  var RUBRIC = '4th grade. 4 = clear, complete, answers the prompt with details and correct capitals/end marks; 3 = mostly there, small fixes; 2 = too short, off topic, or hard to read; 1 = not a real attempt.';
  function aiGrade(url, it, text, fetchFn, ms) {
    fetchFn = fetchFn || (root.fetch && root.fetch.bind(root));
    var ctl = root.AbortController ? new AbortController() : null, to = setTimeout(function () { ctl && ctl.abort(); }, ms || 12000);
    return fetchFn(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: String(it.prompt || '').slice(0, 600), text: String(text || '').slice(0, 4000), grade: 4, kind: it.what, minWords: it.min, rubric: RUBRIC }), signal: ctl ? ctl.signal : undefined })
      .then(function (r) { if (!r.ok) throw new Error('AI grading error ' + r.status); return r.json(); })
      .then(function (j) { clearTimeout(to); var s = +j.score; if (!(s >= 1 && s <= 4) || typeof j.redo !== 'boolean') throw new Error('bad AI reply');
        return { score: s, strengths: String(j.strengths || '').slice(0, 400), fixes: (Array.isArray(j.fixes) ? j.fixes : []).slice(0, 4).map(function (x) { return String(x).slice(0, 200); }), redo: j.redo, feedbackForStudent: String(j.feedbackForStudent || '').slice(0, 600), textHash: hash(text), ts: Date.now() }; })
      .catch(function (e) { clearTimeout(to); throw e; });
  }
  function applyAiToItem(it, ai) {
    it.ai = ai; var local = checkWriting(it.text !== undefined ? it.text : '', it), tooShort = (it.words || 0) < (it.min || 0);
    // AI decides, but the minimum-length rule always stands
    if (ai.redo || tooShort) { it.flag = 'try'; var rs = []; if (tooShort) rs.push(local.reasons[0] || ('It needs at least ' + it.min + ' words.')); if (ai.redo) rs = rs.concat(ai.fixes.length ? ai.fixes : [ai.feedbackForStudent]); it.reasons = rs.filter(Boolean); }
    else { it.flag = null; it.reasons = []; }
  }
  function textOf(it) { var st = St().state; if (it.rkey) return (st.readlog[it.rkey] || {}).summary || ''; var w = st.writing[it.wkey] || {}; return it.field ? ((w.fields || {})[it.field] || '') : (w.text || ''); }
  // grade every writing item of a day through the AI URL; on ANY error keep the local result (returns how many used AI)
  function aiReview(date, fetchFn) {
    var C = cfg(), rev = St().state.reviews[date]; if (!C.aiUrl || !rev) return Promise.resolve({ used: 0, failed: 0 });
    var list = Object.keys(rev.items).map(function (k) { return rev.items[k]; }).filter(function (it) { return it.kind === 'write' && !it.cleared && !(it.redo && it.redo.passed); }), used = 0, failed = 0;
    return list.reduce(function (pr, it) { return pr.then(function () { var t = textOf(it); if (it.ai && it.ai.textHash === hash(t)) { used++; return; } return aiGrade(C.aiUrl, it, t, fetchFn).then(function (ai) { it.text = t; applyAiToItem(it, ai); delete it.text; it._u = St().now(); used++; }, function () { failed++; }); }); }, Promise.resolve())
      .then(function () { touch(rev); return { used: used, failed: failed }; });
  }

  var Review = { cfg: cfg, checkWriting: checkWriting, keywords: keywords, scoreLesson: scoreLesson, lessonWritings: lessonWritings, build: build, outstanding: outstanding, resolved: resolved, redoItems: redoItems, recordRedo: recordRedo, recordFix: recordFix, parentSet: parentSet, merge: merge, aiGrade: aiGrade, aiReview: aiReview, applyAiToItem: applyAiToItem, textOf: textOf, hash: hash, RUBRIC: RUBRIC };
  if (isNode) module.exports = Review; else root.Review = Review;
})(typeof window !== 'undefined' ? window : globalThis);
