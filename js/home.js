/* Child-facing screens: setup, home (constellation), stars/bank, badges. */
(function (root) {
  'use strict';
  var h = UI.h, S = function () { return Store.state; };
  var Home = {};

  function topbar(active) {
    var wk = Store.weekStars(Store.mondayOf(UI.today()));
    return h('header', { class: 'topbar' }, h('div', { class: 'in' },
      h('a', { class: 'brand', href: '#/', style: { color: '#fff', textDecoration: 'none' } }, '✨ ', S().profile.name ? S().profile.name + '\'s School' : 'School'),
      h('span', { class: 'sp' }),
      h('a', { class: 'pill gold', id: 'starpill', href: '#/stars', 'aria-label': 'Star bank' }, '⭐ ' + wk),
      h('a', { class: 'pill', href: '#/parent' }, '🔒 Parent')));
  }
  Home.topbar = topbar;

  // ---------- first-run setup ----------
  Home.setup = function () {
    var name = h('input', { class: 'f-in', id: 'nm', placeholder: 'Her first name', autocomplete: 'off', style: { fontSize: '1.3rem' } });
    var pin = h('input', { class: 'f-in', id: 'pn', type: 'password', inputmode: 'numeric', maxlength: 8, placeholder: '4 to 8 digits', autocomplete: 'off', style: { fontSize: '1.3rem' } });
    var err = h('p', { style: { color: 'var(--bad)' } });
    var go = h('button', { class: 'btn gold', onclick: function () {
      if (!name.value.trim()) { err.textContent = 'Type her first name.'; return; } if (!/^\d{4,8}$/.test(pin.value)) { err.textContent = 'The PIN must be 4 to 8 numbers.'; return; }
      Store.hashPin(pin.value).then(function (hh) { S().profile.name = name.value.trim(); S().settings.pinHash = hh; S().settings._u = Store.now(); UI.parentUntil = Date.now() + 600000; UI.commit(); UI.go('/'); });
    } }, 'Start school');
    var joinBtn = h('button', { class: 'btn ghost small', type: 'button', onclick: Home.join }, 'I already set this up on another device');
    UI.render(h('main', { class: 'wrap', style: { paddingTop: '40px' } }, h('div', { class: 'card' }, h('h1', null, 'Welcome 👋'), h('p', null, 'This takes a minute. Only a first name is stored. No last name, no address, no photos.'),
      h('label', { class: 'f', for: 'nm' }, 'Her first name'), name, h('label', { class: 'f', for: 'pn' }, 'Parent PIN (keeps the grown-up area private)'), pin, err, h('div', { class: 'row', style: { marginTop: '14px' } }, go, joinBtn))));
  };

  // second device: sign in and pull everything (name, PIN, progress) instead of creating a new profile
  Home.join = function () {
    var cfg = Parent.loadCfg(), key = h('input', { class: 'f-in', value: cfg.apiKey || '', placeholder: 'AIzaSy...', 'aria-label': 'Firebase API key' }), pid = h('input', { class: 'f-in', value: cfg.projectId || '', 'aria-label': 'Firebase project ID' }),
      em = h('input', { class: 'f-in', type: 'email', 'aria-label': 'Family email', autocomplete: 'username' }), pw = h('input', { class: 'f-in', type: 'password', 'aria-label': 'Family password', autocomplete: 'current-password' }), msg = h('p', { class: 'small' });
    var go = h('button', { class: 'btn gold', onclick: function () {
      try { localStorage.setItem('avaSchool.cfg', JSON.stringify({ apiKey: key.value.trim(), projectId: pid.value.trim() })); } catch (e) { }
      Sync.config({ apiKey: key.value, projectId: pid.value }); if (!Sync.cfg) { msg.textContent = 'Enter the API key and project ID.'; return; } msg.textContent = 'Signing in…'; msg.style.color = '';
      Sync.signIn(em.value.trim(), pw.value).then(function () { msg.textContent = 'Getting her progress…'; return Sync.syncNow(); }).then(function (r) {
        if (r.ok && Store.state.settings.pinHash) { UI.toast('Welcome back, ' + (Store.state.profile.name || '') + '!'); UI.go('/'); location.reload(); } else { msg.textContent = r.ok ? 'Signed in, but no profile was found in the cloud yet. Finish setup on the first device first.' : 'Could not sync: ' + r.reason; msg.style.color = 'var(--bad)'; }
      }).catch(function (e) { msg.textContent = e.message; msg.style.color = 'var(--bad)'; });
    } }, 'Sign in and get her progress');
    UI.render(h('main', { class: 'wrap', style: { paddingTop: '40px' } }, h('div', { class: 'card' }, h('h1', null, 'Pick up where she left off'), h('p', null, 'Use the same family login you created on the first device.'),
      h('label', { class: 'f' }, 'Firebase API key'), key, h('label', { class: 'f' }, 'Firebase project ID'), pid, h('label', { class: 'f' }, 'Family email'), em, h('label', { class: 'f' }, 'Family password'), pw, msg,
      h('div', { class: 'row', style: { marginTop: '14px' } }, go, h('button', { class: 'btn ghost', onclick: function () { Home.setup(); } }, 'Back')))));
  };

  // ---------- constellation: one star per block of today's schedule ----------
  var NS = 'http://www.w3.org/2000/svg';
  function svg(tag, attrs) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); return e; }
  function starPoints(r) { var pts = []; for (var i = 0; i < 10; i++) { var a = Math.PI / 5 * i - Math.PI / 2, rr = i % 2 ? r * .45 : r; pts.push((Math.cos(a) * rr).toFixed(1) + ',' + (Math.sin(a) * rr).toFixed(1)); } return pts.join(' '); }
  function constellation(blocks) {
    var W = 720, H = 120, n = blocks.length, root = svg('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': 'Today\'s constellation: ' + blocks.filter(function (b) { return b.full; }).length + ' of ' + n + ' blocks finished.' }), pts = [];
    blocks.forEach(function (b, i) { var x = 34 + (W - 68) * (n === 1 ? .5 : i / (n - 1)), y = H / 2 + Math.sin(i * 1.3) * 32 + Math.cos(i * .7) * 8; pts.push({ x: x, y: y, b: b }); });
    pts.forEach(function (p, i) { if (i) root.appendChild(svg('line', { x1: pts[i - 1].x, y1: pts[i - 1].y, x2: p.x, y2: p.y, class: 'cline' + (p.b.full && pts[i - 1].b.full ? ' lit' : '') })); });
    pts.forEach(function (p) { var g = svg('g', { transform: 'translate(' + p.x.toFixed(1) + ',' + p.y.toFixed(1) + ')' }), r = p.b.full ? 11 : p.b.done ? 8 : 6; g.appendChild(svg('polygon', { points: starPoints(r), class: p.b.full ? 'star-lit' : p.b.done ? 'star-half' : 'star-dim' })); var t = svg('title', {}); t.textContent = p.b.b.name + (p.b.full ? ' (finished)' : ''); g.appendChild(t); root.appendChild(g); });
    return root;
  }

  function tile(l, date, extra) {
    var p = S().progress[l.id], done = p && p.done, c = UI.subjectColor(l.subject), resumed = p && p.partial && !done;
    var meta = [UI.subjectName(l.subject), l.mins ? '~' + l.mins + ' min' : '', done ? (p.total ? p.right + '/' + p.total + ' first try' : 'done') : (resumed ? 'in progress' : '')].filter(Boolean).join(' · ');
    return h('a', { class: 'tile' + (done ? ' done' : ''), style: { '--c': c }, href: '#/lesson/' + l.id, 'data-lesson': l.id },
      h('div', { class: 't' }, h('span', { class: 'subj' }, UI.subjectName(l.subject)), h('b', null, l.title), h('span', null, meta)), extra || null, h('div', { class: 'chk', 'aria-label': done ? 'Done' : 'Not done' }, done ? '★' : ''));
  }
  Home.tile = tile;

  // next extra-practice id for a block today (reuse one that was started but not finished)
  function extraId(block, today) { var pre = 'x-' + block + '-' + today + '-', P = S().progress, k = 1; while (P[pre + k]) { if (!P[pre + k].done) return pre + k; k++; } return pre + k; }
  Home.extraId = extraId;
  var EXTRA_OK = { math: 1, facts: 1, reading: 1, grammar: 1, writing: 1, science: 1, social: 1, bible: 1 };

  // one row of the timeline
  function blockRow(bs, today, isToday) {
    var b = bs.b, st = S(), color = UI.subjectColor(b.subject), pct = Math.min(100, 100 * bs.mins / b.mins);
    var timerL = b.items.length === 1 && b.items[0].type === 'timer' ? b.items[0] : null, T = timerL ? Player.Timers.get(timerL.id, today) : null, running = T && T.start;
    var lessons = b.items.map(function (l) { var p = st.progress[l.id], done = p && p.done; return h('a', { class: 'bl-item' + (done ? ' done' : ''), href: '#/lesson/' + l.id, 'data-lesson': l.id }, h('span', { class: 'bl-chk', 'aria-hidden': 'true' }, done ? '✓' : ''), h('span', null, l.title), p && p.partial && !done ? h('span', { class: 'badge' }, 'in progress') : null); });
    var actions = [];
    if (isToday && timerL && !bs.done) {
      actions.push(h('button', { class: 'btn small ' + (running ? 'ghost' : 'gold'), type: 'button', onclick: function (e) { e.preventDefault(); if (running) Player.Timers.pause(timerL.id); else Player.Timers.start(timerL, today); Home.render(); } }, running ? '⏸ Pause' : (T && T.acc ? '▶ Resume' : '▶ Start timer')));
      actions.push(h('span', { class: 'bl-clock', 'data-timer': timerL.id }, Player.fmtClock(Player.Timers.elapsed(T)) + ' / ' + timerL.mins + ':00'));
    } else if (isToday && bs.done && !bs.full && EXTRA_OK[b.key]) {
      actions.push(h('a', { class: 'btn small ghost', href: '#/lesson/' + extraId(b.key, today) }, 'Keep practicing (' + (b.mins - bs.mins) + ' min to go)'));
    } else if (isToday && !bs.done) {
      var first = b.items.filter(function (l) { return !(st.progress[l.id] && st.progress[l.id].done); })[0];
      if (first && !timerL) actions.push(h('a', { class: 'btn small gold', href: '#/lesson/' + first.id }, st.progress[first.id] && st.progress[first.id].partial ? 'Keep going' : 'Start'));
    }
    return h('div', { class: 'block' + (bs.full ? ' full' : bs.done ? ' done' : ''), style: { '--c': color } },
      h('div', { class: 'bl-time' }, b.start), h('div', { class: 'bl-icon', 'aria-hidden': 'true' }, b.icon),
      h('div', { class: 'bl-main' }, h('div', { class: 'bl-head' }, h('b', null, b.name), h('span', { class: 'muted small' }, bs.mins + ' of ' + b.mins + ' min')),
        h('div', { class: 'bl-bar', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': b.mins, 'aria-valuenow': bs.mins, 'aria-label': b.name + ' minutes' }, h('i', { style: { width: pct + '%' } })),
        h('div', { class: 'bl-items' }, lessons), actions.length ? h('div', { class: 'bl-act' }, actions) : null),
      h('div', { class: 'bl-star' + (bs.full ? ' on' : ''), 'aria-label': bs.full ? 'Block finished' : 'Not finished yet' }, '★'));
  }
  function breakRow(b) { return h('div', { class: 'block brk' }, h('div', { class: 'bl-time' }, b.start), h('div', { class: 'bl-icon', 'aria-hidden': 'true' }, b.key === 'lunch' ? '🥪' : '☕'), h('div', { class: 'bl-main' }, h('span', { class: 'muted' }, b.name + ' (' + b.mins + ' min, not counted)'))); }
  function timeline(ds, today, isToday) {
    var map = {}; ds.blocks.forEach(function (x) { map[x.b.key] = x; });
    return h('div', { class: 'timeline' }, ds.day.blocks.map(function (b) { return b.brk ? breakRow(b) : blockRow(map[b.key], today, isToday); }));
  }

  // ---------- home ----------
  Home.render = function () {
    var st = S(), today = UI.today(), settings = st.settings, name = st.profile.name || 'there';
    var isSchool = Cal.isSchoolDay(today, settings), beforeStart = today < Cal.START;
    var weekMonday = Store.mondayOf(today), money = Store.weekMoney(weekMonday), cap = settings.weeklyCapUSD;
    var main = h('main', { class: 'wrap wide' }), ds = isSchool && !beforeStart ? Player.dayStatus(today) : null, target = Store.threshold();
    var mins = Store.dayMinutes(today), hours = Store.totalHours(), lvl = Player.level(hours), full = ds ? ds.blocks.filter(function (b) { return b.full; }).length : 0;
    var hero = h('section', { class: 'sky' },
      h('div', { class: 'sky-top' },
        h('div', { class: 'sky-hi' }, h('h1', null, beforeStart ? 'School starts ' + Cal.pretty(Cal.START).replace(/^[A-Za-z]+, /, '') : (new Date().getHours() < 12 ? 'Good morning, ' : 'Hi, ') + name + '!'),
          h('p', { class: 'sub' }, Cal.pretty(today) + (ds ? ', school day ' + ds.day.n + ', week ' + ds.day.week : '')),
          ds ? h('p', { class: 'sub' }, full + ' of ' + ds.blocks.length + ' blocks finished') : null),
        ds ? h('div', { class: 'sky-ring' }, Pics.ring(mins / target, String(mins), 132, 'of ' + target + ' min')) : null),
      ds ? constellation(ds.blocks) : null,
      h('div', { class: 'bank' }, h('div', null, h('b', null, UI.money(money.usd)), h('div', { class: 'sub' }, 'earned this week (' + money.stars + ' stars)')),
        h('div', { class: 'meter' }, h('div', { class: 'meter-bar', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': cap, 'aria-valuenow': money.usd, 'aria-label': 'Money toward the weekly max' }, h('i', { style: { width: Math.min(100, 100 * money.usd / cap) + '%' } })), h('div', { class: 'sub small' }, 'weekly max ' + UI.money(cap))),
        h('div', null, h('b', null, '🔥 ' + (st.streak.n || 0)), h('div', { class: 'sub' }, 'day streak')),
        h('a', { class: 'lvl', href: '#/stars' }, h('b', null, 'Level ' + lvl.n), h('div', { class: 'sub' }, lvl.name + ', ' + hours + ' h'))));
    main.appendChild(hero);
    var run = Player.Timers.running(); if (run.length) main.appendChild(h('div', { class: 'fb info running' }, h('b', { class: 'h' }, '⏱️ Timer running'), run.map(function (t) { var L = Plan.find(t.id); return h('a', { href: '#/lesson/' + t.id, style: { display: 'block' } }, (L ? L.title : t.id) + ': ', h('span', { 'data-timer': t.id }, Player.fmtClock(Player.Timers.elapsed(t)) + ' / ' + Math.round(t.cap / 60) + ':00')); })));

    if (beforeStart) {
      var first = Cal.START, fd = Plan.forDate(first, settings), fds = { day: fd, blocks: fd.blocks.filter(function (b) { return !b.brk; }).map(function (b) { return { b: b, mins: 0, done: false, full: false }; }) };
      main.appendChild(h('div', { class: 'card' }, h('h2', null, 'Here is a school day'), h('p', null, 'Every day has ' + Schedule.DAY_MINUTES + ' minutes of learning (4.5 hours, not counting lunch and breaks), in blocks like these. You can try the first lessons early for a head start.')));
      main.appendChild(timeline(fds, first, false));
    } else if (!isSchool) {
      var why = Cal.offReason(today, settings) || 'Day off', nxt = Cal.nextSchoolDay(Cal.addDays(today, 1), settings);
      main.appendChild(h('div', { class: 'card' }, h('h2', null, 'No school today: ' + why), h('p', null, 'Next school day: ', h('b', null, nxt ? Cal.pretty(nxt) : 'soon'), '.'), h('p', { class: 'muted' }, 'Want extra practice? Open a catch-up lesson below. A parent can turn today into a make-up school day in the Parent area.')));
    } else {
      if (ds.blocks.every(function (b) { return b.full; })) main.appendChild(h('div', { class: 'fb good' }, h('b', { class: 'h' }, 'Every block is finished! 🎉'), 'That is a full school day. Great job.'));
      main.appendChild(h('h2', { class: 'tl-h' }, 'Today\'s schedule'));
      main.appendChild(timeline(ds, today, true));
    }

    // missed core lessons (catch-up)
    var due = Plan.dueThrough(Cal.addDays(today, -1), settings).filter(function (x) { return !(S().progress[x.lesson.id] && S().progress[x.lesson.id].done); });
    if (due.length && !beforeStart) main.appendChild(h('details', { class: 'card' }, h('summary', { style: { fontWeight: 800, cursor: 'pointer' } }, 'Catch-up: ' + due.length + ' main lesson' + (due.length > 1 ? 's' : '') + ' from earlier days'), h('p', { class: 'muted small' }, 'These introduce new material, so do them when you can. Practice and timer blocks from past days are not listed.'), due.slice(0, 20).map(function (x) { return tile(x.lesson, x.date, h('span', { class: 'badge warn' }, Cal.short(x.date))); })));
    // work ahead
    var nxtDay = Cal.nextSchoolDay(Cal.addDays(isSchool && !beforeStart ? today : Cal.addDays(today, -1), 1), settings);
    if (nxtDay && !beforeStart) { var ni = Plan.forDate(nxtDay, settings), core = ni.lessons.filter(function (l) { return l.type !== 'timer'; }); if (core.length) main.appendChild(h('details', { class: 'card' }, h('summary', { style: { fontWeight: 800, cursor: 'pointer' } }, 'Work ahead: ' + Cal.pretty(nxtDay)), h('p', { class: 'muted small' }, 'Finish early and you earn the same stars. Working ahead helps you reach 5th grade sooner.'), core.map(function (l) { return tile(l, nxtDay); }))); }
    var verses = Object.keys(S().memory).filter(function (k) { return S().memory[k].due && S().memory[k].due <= today && ((S().parentVerses || {})[k] || Scripture.text(k)); });
    if (verses.length) main.appendChild(h('div', { class: 'card' }, h('h3', null, '📖 Verse check'), h('p', null, 'Can you say ', h('b', null, verses[0]), ' without looking? Then peek: '), h('div', { class: 'passage scripture' }, (S().parentVerses || {})[verses[0]] || Scripture.text(verses[0]))));
    main.appendChild(roadCard());
    UI.render(topbar(), main);
    var el = document.getElementById('starpill'); if (el) el.textContent = '⭐ ' + money.stars;
  };
  // update timer clocks without re-rendering (called every few seconds by app.js)
  Home.tickTimers = function () { var nodes = document.querySelectorAll('[data-timer]'); for (var i = 0; i < nodes.length; i++) { var id = nodes[i].getAttribute('data-timer'), T = Player.Timers.get(id, UI.today()); if (T) nodes[i].textContent = Player.fmtClock(Player.Timers.elapsed(T)) + ' / ' + Math.round(T.cap / 60) + ':00'; } };

  function roadCard() {
    var cur = Plan.weekOf(UI.today(), S().settings) || 0, targetWeek = 19;
    return h('div', { class: 'card' }, h('h3', null, '🚀 Road to 5th grade'), h('p', null, cur >= targetWeek ? 'You are learning 5th-grade material now! Keep going.' : '5th-grade math, reading, science, and social studies start in week ' + targetWeek + ' (mid-March). Every block you finish is one step closer.'),
      h('div', { class: 'meter-bar', style: { background: '#dfe7f6' }, role: 'progressbar', 'aria-valuenow': cur, 'aria-valuemax': targetWeek, 'aria-label': 'Weeks until 5th grade' }, h('i', { style: { width: Math.min(100, 100 * Math.max(0, cur - 1) / (targetWeek - 1)) + '%' } })), h('p', { class: 'small muted' }, 'You are in week ' + cur + '. 5th grade starts in week ' + targetWeek + '.'));
  }

  // ---------- star bank ----------
  Home.stars = function () {
    var st = S(), today = UI.today(), wk = Store.mondayOf(today), m = Store.weekMoney(wk), cap = st.settings.weeklyCapUSD, rate = st.settings.starsPerDollar, hours = Store.totalHours(), lvl = Player.level(hours);
    var entries = Object.keys(st.ledger).map(function (k) { return st.ledger[k]; }).filter(function (e) { return e.week === wk; }).sort(function (a, b) { return b.ts - a.ts; }).slice(0, 25);
    var main = h('main', { class: 'wrap' },
      h('div', { class: 'sky' }, h('h1', null, 'Star bank ⭐'), h('div', { class: 'bank' }, h('div', null, h('b', null, m.stars), h('div', { class: 'sub' }, 'stars this week')), h('div', null, h('b', null, UI.money(m.usd)), h('div', { class: 'sub' }, 'worth')), h('div', null, h('b', null, UI.money(Store.totalOwed())), h('div', { class: 'sub' }, 'waiting to be paid'))), h('div', { class: 'meter-bar', style: { marginTop: '12px' } }, h('i', { style: { width: Math.min(100, 100 * m.usd / cap) + '%' } })), h('p', { class: 'sub small' }, rate + ' stars = $1. You can earn up to ' + UI.money(cap) + ' each week. ' + (m.capped ? 'You hit the max this week!' : 'Keep going!'))),
      h('div', { class: 'card level-card' }, h('div', { class: 'row' }, Pics.ring(lvl.pct / 100, String(lvl.n), 96, 'level'), h('div', { class: 'grow' }, h('h3', null, 'Level ' + lvl.n + ': ' + lvl.name), h('p', null, hours + ' hours of learning so far.'), lvl.next ? h('p', { class: 'muted' }, (Math.round((lvl.next - hours) * 10) / 10) + ' more hours to reach ' + lvl.nextName + '.') : h('p', null, 'You reached the top level!')))),
      h('div', { class: 'card' }, h('h3', null, 'How stars work'), h('ul', null,
        h('li', null, h('b', null, '2 stars'), ' for a right answer on the first try, ', h('b', null, '1 star'), ' on the second try'),
        h('li', null, h('b', null, '5 stars'), ' for finishing a lesson (+5 for a perfect one)'), h('li', null, h('b', null, 'Spelling test:'), ' 2 stars per word (pretest: 1)'),
        h('li', null, h('b', null, 'Writing:'), ' 8 for a project stage (12 more when your parent reviews it), 6 for a journal entry'),
        h('li', null, h('b', null, 'Timers'), ' (PE, reading, art, music, nature): 5 when the timer finishes'),
        h('li', null, h('b', null, 'Speed stars'), ' only in fluency sprints'), h('li', null, 'Practice lessons you already finished do not earn stars. Extra practice earns up to 10 a block each day.'))),
      h('div', { class: 'card' }, h('h3', null, 'Recent stars'), entries.length ? h('table', null, h('tbody', null, entries.map(function (e) { return h('tr', null, h('td', null, '+' + e.stars), h('td', null, e.why), h('td', { class: 'muted' }, Cal.short(e.date))); }))) : h('p', { class: 'muted' }, 'Finish a lesson to earn your first stars.')),
      h('div', { class: 'card' }, h('h3', null, 'Badges'), h('div', { class: 'badge-grid' }, Object.keys(Player.BADGES).map(function (id) { var b = Player.BADGES[id], on = !!st.badges[id]; return h('div', { class: 'bd' + (on ? '' : ' off'), title: b.d }, h('div', { class: 'e' }, b.e), h('b', null, b.n), h('div', { class: 'small muted' }, b.d)); }))),
      h('p', null, h('a', { class: 'btn ghost', href: '#/' }, 'Back')));
    UI.render(topbar(), main);
  };

  root.Home = Home;
})(window);
