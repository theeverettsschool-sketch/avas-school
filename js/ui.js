/* UI helpers: DOM builder, router, modal, toast, PIN, speech, sound, downloads, answer matching. */
(function (root) {
  'use strict';
  var UI = { parentUntil: 0, subjects: Content.SUBJECTS };

  // ---------- DOM ----------
  UI.h = function (tag, attrs) {
    var el = document.createElement(tag), kids = Array.prototype.slice.call(arguments, 2);
    for (var k in (attrs || {})) {
      var v = attrs[k]; if (v === null || v === undefined || v === false) continue;
      if (k === 'class') el.className = v; else if (k === 'html') el.innerHTML = v; else if (k === 'style' && typeof v === 'object') { for (var sk in v) { if (sk.indexOf('--') === 0) el.style.setProperty(sk, v[sk]); else el.style[sk] = v[sk]; } }
      else if (k.slice(0, 2) === 'on' && typeof v === 'function') el.addEventListener(k.slice(2), v);
      else if (v === true) el.setAttribute(k, ''); else el.setAttribute(k, v);
    }
    (function add(list) { list.forEach(function (c) { if (Array.isArray(c)) add(c); else if (c === null || c === undefined || c === false) return; else el.appendChild(c.nodeType ? c : document.createTextNode(String(c))); }); })(kids);
    return el;
  };
  var h = UI.h;
  UI.render = function () { var a = document.getElementById('app'); a.innerHTML = ''; Array.prototype.slice.call(arguments).forEach(function (n) { if (Array.isArray(n)) n.forEach(function (x) { a.appendChild(x); }); else if (n) a.appendChild(n); }); window.scrollTo(0, 0); };
  UI.esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  UI.shuffle = function (arr) { var a = arr.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
  UI.money = function (n) { return '$' + (Math.round(n * 100) / 100).toFixed(2); };

  // ---------- time ----------
  UI.today = function () {
    try { var q = new URLSearchParams(location.search).get('today'); if (q && /^(localhost|127\.0\.0\.1)$/.test(location.hostname) && /^\d{4}-\d{2}-\d{2}$/.test(q)) return q; } catch (e) { }
    return Cal.iso(new Date());
  };

  // ---------- state + sync glue ----------
  var syncTimer = null;
  UI.commit = function () { Store.save(); UI.queueSync(); };
  UI.queueSync = function () {
    if (!Sync.cfg || !Sync.auth) return; clearTimeout(syncTimer);
    syncTimer = setTimeout(function () { Sync.syncNow().then(function () { UI.syncDot && UI.syncDot(); }); }, 4000);
  };

  // ---------- router ----------
  var routes = [];
  UI.route = function (pattern, fn) { routes.push({ re: new RegExp('^' + pattern.replace(/:[a-z]+/g, '([^/]+)') + '$'), fn: fn }); };
  UI.go = function (hash) { if (location.hash === '#' + hash) UI.dispatch(); else location.hash = hash; };
  UI.dispatch = function () {
    var path = (location.hash || '#/').slice(1) || '/';
    for (var i = 0; i < routes.length; i++) { var m = path.match(routes[i].re); if (m) { UI.cleanup && UI.cleanup(); UI.cleanup = null; return routes[i].fn.apply(null, m.slice(1).map(decodeURIComponent)); } }
    UI.go('/');
  };
  window.addEventListener('hashchange', function () { UI.dispatch(); });

  // ---------- toast / modal ----------
  UI.toast = function (msg, ms) { var t = h('div', { class: 'toast', role: 'status' }, msg); document.body.appendChild(t); setTimeout(function () { t.remove(); }, ms || 2600); };
  UI.modal = function (node, opts) {
    opts = opts || {}; var bg = h('div', { class: 'modal-bg', role: 'dialog', 'aria-modal': 'true' }), box = h('div', { class: 'modal' }, node);
    bg.appendChild(box); document.body.appendChild(bg);
    var api = { close: function () { bg.remove(); } };
    if (opts.dismiss !== false) bg.addEventListener('click', function (e) { if (e.target === bg) api.close(); });
    var f = box.querySelector('input,textarea,button'); if (f) setTimeout(function () { f.focus(); }, 30);
    return api;
  };
  UI.confirm = function (title, text, yes, cb, no) {
    var m = UI.modal(h('div', null, h('h2', null, title), h('p', null, text), h('div', { class: 'row', style: { justifyContent: 'flex-end' } },
      h('button', { class: 'btn ghost', onclick: function () { m.close(); } }, no || 'Cancel'), h('button', { class: 'btn', onclick: function () { m.close(); cb(); } }, yes))));
  };

  // ---------- parent PIN ----------
  UI.requirePin = function (cb, onCancel) {
    var st = Store.state.settings;
    if (!st.pinHash) return cb();
    if (Date.now() < UI.parentUntil) return cb();
    var inp = h('input', { class: 'f-in', type: 'password', inputmode: 'numeric', autocomplete: 'off', maxlength: 8, 'aria-label': 'Parent PIN', style: { fontSize: '1.6rem', textAlign: 'center', letterSpacing: '.3em' } });
    var msg = h('p', { class: 'small', style: { color: 'var(--bad)', minHeight: '1.4em' } });
    var m;
    function go() { Store.hashPin(inp.value).then(function (hh) { if (hh === st.pinHash) { UI.parentUntil = Date.now() + 10 * 60 * 1000; m.close(); cb(); } else { msg.textContent = 'That PIN is not right. Try again.'; inp.value = ''; inp.focus(); } }); }
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    m = UI.modal(h('div', null, h('h2', null, 'Parent PIN'), h('p', { class: 'muted' }, 'This area is for the grown-up.'), inp, msg,
      h('div', { class: 'row', style: { justifyContent: 'flex-end' } }, h('button', { class: 'btn ghost', onclick: function () { m.close(); onCancel && onCancel(); } }, 'Cancel'), h('button', { class: 'btn', onclick: go }, 'Open'))), { dismiss: false });
  };

  // ---------- speech ----------
  UI.canSpeak = function () { return 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined'; };
  UI.speak = function (text, rate) {
    if (!UI.canSpeak()) return false;
    try { speechSynthesis.cancel(); var u = new SpeechSynthesisUtterance(text); u.lang = 'en-US'; u.rate = rate || 0.9; var vs = speechSynthesis.getVoices().filter(function (v) { return /^en[-_]US/.test(v.lang); }); var pref = vs.filter(function (v) { return /samantha|ava|allison|nicky|siri/i.test(v.name); })[0] || vs[0]; if (pref) u.voice = pref; speechSynthesis.speak(u); return true; } catch (e) { return false; }
  };
  UI.stopSpeak = function () { try { speechSynthesis.cancel(); } catch (e) { } };
  UI.speakBtn = function (text, label) { if (!UI.canSpeak()) return null; return h('button', { class: 'btn ghost small', type: 'button', onclick: function () { UI.speak(text); }, 'aria-label': 'Read aloud' }, '🔊 ' + (label || 'Read to me')); };

  // ---------- sound ----------
  var ac = null;
  UI.sound = function (kind) {
    if (Store.state.settings.sound === false) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)(); var seq = { good: [[660, 0, .1], [880, .1, .16]], bad: [[220, 0, .18]], win: [[523, 0, .12], [659, .12, .12], [784, .24, .12], [1046, .36, .3]], star: [[988, 0, .08], [1318, .08, .18]] }[kind] || [];
      seq.forEach(function (n) { var o = ac.createOscillator(), g = ac.createGain(); o.type = kind === 'bad' ? 'triangle' : 'sine'; o.frequency.value = n[0]; g.gain.setValueAtTime(.0001, ac.currentTime + n[1]); g.gain.exponentialRampToValueAtTime(.12, ac.currentTime + n[1] + .02); g.gain.exponentialRampToValueAtTime(.0001, ac.currentTime + n[1] + n[2]); o.connect(g); g.connect(ac.destination); o.start(ac.currentTime + n[1]); o.stop(ac.currentTime + n[1] + n[2] + .05); });
    } catch (e) { }
  };

  // ---------- downloads ----------
  UI.download = function (name, text, mime) {
    var blob = new Blob([text], { type: mime || 'application/json' }), url = URL.createObjectURL(blob), a = h('a', { href: url, download: name });
    document.body.appendChild(a); a.click(); setTimeout(function () { a.remove(); URL.revokeObjectURL(url); }, 1500);
  };

  // ---------- answer matching ----------
  function clean(s) { return String(s).replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim(); }
  UI.matchText = function (item, given) {
    var g = clean(given); if (!g) return false;
    if (item.exact) { g = g.replace(/[.!?]+$/, ''); return item.answers.some(function (a) { return clean(a).replace(/[.!?]+$/, '') === g; }); }
    function n(s) { return clean(s).toLowerCase().replace(/[.,;:!?"'()\-]/g, '').replace(/\s+/g, ' ').trim(); }
    var ng = n(g); return item.answers.some(function (a) { return n(a) === ng; });
  };
  UI.matchWord = function (word, given) { return clean(given).toLowerCase() === clean(word).toLowerCase(); };
  // Verse recall: fraction of words matched in order (tolerant of punctuation).
  UI.verseScore = function (target, given) {
    function toks(s) { return clean(s).toLowerCase().replace(/[.,;:!?"'()—\-]/g, ' ').split(/\s+/).filter(Boolean); }
    var t = toks(target), g = toks(given), i = 0, hit = 0; g.forEach(function (w) { var j = t.indexOf(w, i); if (j >= 0) { hit++; i = j + 1; } });
    return t.length ? hit / t.length : 0;
  };
  UI.wordCount = function (s) { return (String(s).trim().match(/\S+/g) || []).length; };

  UI.subjectColor = function (s) { return (UI.subjects[s] || {}).color || '#2f6fed'; };
  UI.subjectName = function (s) { return (UI.subjects[s] || {}).name || s; };

  root.UI = UI;
})(window);
