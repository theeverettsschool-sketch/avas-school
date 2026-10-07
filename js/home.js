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

  // ---------- constellation ----------
  var NS = 'http://www.w3.org/2000/svg';
  function svg(tag, attrs) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); return e; }
  function constellation(lessonsByDay) {
    // one star per lesson, positioned along a gentle arc per day; lines connect stars within a day
    var W = 720, H = 150, root = svg('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img', 'aria-label': 'Constellation of this week\'s lessons. Gold stars are finished lessons.' });
    var days = lessonsByDay.length || 1, pts = [], idx = 0;
    lessonsByDay.forEach(function (d, di) {
      var cx = 60 + (W - 120) * (days === 1 ? .5 : di / (days - 1)), prev = null;
      d.lessons.forEach(function (l, li) {
        var n = d.lessons.length, y = 24 + (H - 48) * (n === 1 ? .5 : li / (n - 1)) + Math.sin(di * 1.7 + li) * 8, x = cx + Math.cos(di * 2.3 + li * 1.3) * 22, done = !!(S().progress[l.id] && S().progress[l.id].done);
        pts.push({ x: x, y: y, done: done, l: l, prev: prev, di: di }); prev = pts[pts.length - 1];
      });
    });
    pts.forEach(function (p) { if (p.prev) root.appendChild(svg('line', { x1: p.prev.x, y1: p.prev.y, x2: p.x, y2: p.y, class: 'cline' + (p.done && p.prev.done ? ' lit' : '') })); });
    pts.forEach(function (p, i) { if (i && p.di !== pts[i - 1].di) root.appendChild(svg('line', { x1: pts[i - 1].x, y1: pts[i - 1].y, x2: p.x, y2: p.y, class: 'cline', 'stroke-dasharray': '2 6', opacity: .5 })); });
    pts.forEach(function (p) {
      var g = svg('g', { transform: 'translate(' + p.x + ',' + p.y + ')' }), r = p.done ? 9 : 6;
      var star = svg('polygon', { points: starPoints(r), class: p.done ? 'star-lit' : 'star-dim' }); g.appendChild(star); var t = svg('title', {}); t.textContent = p.l.title + (p.done ? ' (done)' : ''); g.appendChild(t); root.appendChild(g);
    });
    return root;
  }
  function starPoints(r) { var pts = []; for (var i = 0; i < 10; i++) { var a = Math.PI / 5 * i - Math.PI / 2, rr = i % 2 ? r * .45 : r; pts.push((Math.cos(a) * rr).toFixed(1) + ',' + (Math.sin(a) * rr).toFixed(1)); } return pts.join(' '); }

  function tile(l, date, extra) {
    var p = S().progress[l.id], done = p && p.done, c = UI.subjectColor(l.subject), resumed = p && p.partial && !done;
    var meta = [UI.subjectName(l.subject), l.mins ? '~' + l.mins + ' min' : '', done ? (p.total ? p.right + '/' + p.total + ' first try' : 'done') : (resumed ? 'in progress' : '')].filter(Boolean).join(' · ');
    return h('a', { class: 'tile' + (done ? ' done' : ''), style: { '--c': c }, href: '#/lesson/' + l.id, 'data-lesson': l.id },
      h('div', { class: 't' }, h('span', { class: 'subj' }, UI.subjectName(l.subject)), h('b', null, l.title), h('span', null, meta)), extra || null, h('div', { class: 'chk', 'aria-label': done ? 'Done' : 'Not done' }, done ? '★' : ''));
  }

  // ---------- home ----------
  Home.render = function () {
    var st = S(), today = UI.today(), settings = st.settings, info = Plan.forDate(today, settings), name = st.profile.name || 'there';
    var isSchool = Cal.isSchoolDay(today, settings), beforeStart = today < Cal.START;
    var weekMonday = Store.mondayOf(today), money = Store.weekMoney(weekMonday), cap = settings.weeklyCapUSD;
    var main = h('main', { class: 'wrap wide' });

    // build week's days for the constellation
    var weekDays = []; for (var i = 0; i < 5; i++) { var d = Cal.addDays(weekMonday, i); if (Cal.isSchoolDay(d, settings)) { var fi = Plan.forDate(d, settings); if (fi.lessons.length) weekDays.push({ date: d, lessons: fi.lessons }); } }
    var dayNo = Math.max(0, Store.daysCounted()), sched = Cal.dayNumber(today, settings);
    var hero = h('section', { class: 'sky' },
      h('h1', null, (beforeStart ? 'School starts ' + Cal.pretty(Cal.START).replace(/^[A-Za-z]+, /, '') : (new Date().getHours() < 12 ? 'Good morning, ' : 'Hi, ') + name + '!')),
      h('p', { class: 'sub' }, Cal.pretty(today) + (isSchool && sched ? ' · school day ' + sched : '') + (info.week ? ' · week ' + info.week : '')),
      weekDays.length ? constellation(weekDays) : null,
      h('div', { class: 'bank' }, h('div', null, h('b', null, UI.money(money.usd)), h('div', { class: 'sub' }, 'earned this week (' + money.stars + ' stars)')),
        h('div', { class: 'meter' }, h('div', { class: 'meter-bar', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': cap, 'aria-valuenow': money.usd }, h('i', { style: { width: Math.min(100, 100 * money.usd / cap) + '%' } })), h('div', { class: 'sub small' }, 'weekly max ' + UI.money(cap))),
        st.streak.n > 1 ? h('div', null, h('b', null, '🔥 ' + st.streak.n), h('div', { class: 'sub' }, 'day streak')) : null));
    main.appendChild(hero);

    // today's lessons
    if (beforeStart) {
      var first = Cal.START, fi2 = Plan.forDate(first, settings);
      main.appendChild(h('div', { class: 'card' }, h('h2', null, 'Get ready for ' + Cal.pretty(first)), h('p', null, 'Here is what the first day looks like. You can try the first lesson early if you want a head start.'), fi2.lessons.map(function (l) { return tile(l, first); })));
    } else if (!isSchool) {
      var why = Cal.offReason(today, settings) || 'Day off', nxt = Cal.nextSchoolDay(Cal.addDays(today, 1), settings);
      main.appendChild(h('div', { class: 'card' }, h('h2', null, 'No school today: ' + why), h('p', null, 'Next school day: ', h('b', null, nxt ? Cal.pretty(nxt) : 'soon'), '.'), h('p', { class: 'muted' }, 'Want extra practice? You can open any lesson below. Make-up days count toward the 180 days when your parent adds them in the Parent area.')));
    } else if (!info.lessons.length || !info.lessons.some(function (l) { return true; })) {
      main.appendChild(h('div', { class: 'card' }, h('h2', null, 'No lessons yet for this day'), h('p', null, 'New weeks of lessons are delivered monthly. You can practice math and review old lessons in the meantime.')));
    } else {
      var doneN = info.lessons.filter(function (l) { return S().progress[l.id] && S().progress[l.id].done; }).length;
      if (info.week > Plan.FULL_WEEKS) main.appendChild(h('div', { class: 'fb info' }, h('b', { class: 'h' }, 'Math only for now'), 'This week has math lessons in the app. The rest of this week\'s subjects arrive in the next monthly update. Read your book, keep up your Bible reading with your parent, and use the catch-up list below.'));
      main.appendChild(h('h2', null, 'Today: ' + doneN + ' of ' + info.lessons.length + ' done'));
      if (doneN === info.lessons.length) main.appendChild(h('div', { class: 'fb good' }, h('b', { class: 'h' }, 'All done for today! 🎉'), 'Great job. You can practice any lesson again below or come back tomorrow.'));
      info.lessons.forEach(function (l) { main.appendChild(tile(l, today)); });
    }

    // missed lessons (catch-up)
    var due = Plan.dueThrough(Cal.addDays(today, -1), settings).filter(function (x) { return !(S().progress[x.lesson.id] && S().progress[x.lesson.id].done); });
    if (due.length && !beforeStart) {
      var det = h('details', { class: 'card' }, h('summary', { style: { fontWeight: 800, cursor: 'pointer' } }, 'Catch-up: ' + due.length + ' lesson' + (due.length > 1 ? 's' : '') + ' from earlier days'), h('p', { class: 'muted small' }, 'These were on the schedule but not finished yet. Do them when you have time. They count the same.'), due.slice(0, 20).map(function (x) { return tile(x.lesson, x.date, h('span', { class: 'badge warn' }, Cal.short(x.date))); }));
      main.appendChild(det);
    }
    // work ahead
    var nxtDay = Cal.nextSchoolDay(Cal.addDays(isSchool && !beforeStart ? today : Cal.addDays(today, -1), 1), settings);
    if (nxtDay && !beforeStart) { var ni = Plan.forDate(nxtDay, settings); if (ni.lessons.length) main.appendChild(h('details', { class: 'card' }, h('summary', { style: { fontWeight: 800, cursor: 'pointer' } }, 'Work ahead: ' + Cal.pretty(nxtDay)), h('p', { class: 'muted small' }, 'Finish early and you earn the same stars. Working ahead helps you reach 5th grade sooner.'), ni.lessons.map(function (l) { return tile(l, nxtDay); }))); }

    // verse of the week + road to 5th grade
    var verses = Object.keys(S().memory).filter(function (k) { return S().memory[k].due && S().memory[k].due <= today; });
    if (verses.length) main.appendChild(h('div', { class: 'card' }, h('h3', null, '📖 Verse check'), h('p', null, 'Can you say ', h('b', null, verses[0]), ' without looking? Then peek: '), h('div', { class: 'passage scripture' }, Scripture.text(verses[0]))));
    main.appendChild(roadCard());
    UI.render(topbar(), main);
    var el = document.getElementById('starpill'); if (el) el.textContent = '⭐ ' + money.stars;
  };

  function roadCard() {
    var total = Plan.contentWeeks(), cur = Plan.weekOf(UI.today(), S().settings);
    var targetWeek = 19;
    return h('div', { class: 'card' }, h('h3', null, '🚀 Road to 5th grade'), h('p', null, 'We start 5th-grade math and reading in about ', h('b', null, 'week ' + targetWeek + ' (mid-March)'), '. Every lesson you finish is one step closer.'),
      h('div', { class: 'meter-bar', style: { background: '#dfe7f6' }, role: 'progressbar', 'aria-valuenow': cur, 'aria-valuemax': targetWeek }, h('i', { style: { width: Math.min(100, 100 * Math.max(0, cur - 1) / targetWeek) + '%' } })), h('p', { class: 'small muted' }, 'You are in week ' + (cur || 0) + ' of 28.'));
  }

  // ---------- star bank ----------
  Home.stars = function () {
    var st = S(), today = UI.today(), wk = Store.mondayOf(today), m = Store.weekMoney(wk), cap = st.settings.weeklyCapUSD, rate = st.settings.starsPerDollar;
    var entries = Object.keys(st.ledger).map(function (k) { return st.ledger[k]; }).filter(function (e) { return e.week === wk; }).sort(function (a, b) { return b.ts - a.ts; }).slice(0, 25);
    var main = h('main', { class: 'wrap' },
      h('div', { class: 'sky' }, h('h1', null, 'Star bank ⭐'), h('div', { class: 'bank' }, h('div', null, h('b', null, m.stars), h('div', { class: 'sub' }, 'stars this week')), h('div', null, h('b', null, UI.money(m.usd)), h('div', { class: 'sub' }, 'worth')), h('div', null, h('b', null, UI.money(Store.totalOwed())), h('div', { class: 'sub' }, 'waiting to be paid'))), h('div', { class: 'meter-bar', style: { marginTop: '12px' } }, h('i', { style: { width: Math.min(100, 100 * m.usd / cap) + '%' } })), h('p', { class: 'sub small' }, rate + ' stars = $1. You can earn up to ' + UI.money(cap) + ' each week. ' + (m.capped ? 'You hit the max this week!' : 'Keep going!'))),
      h('div', { class: 'card' }, h('h3', null, 'How stars work'), h('ul', null,
        h('li', null, h('b', null, '2 stars'), ' for a right answer on the first try'), h('li', null, h('b', null, '1 star'), ' for a right answer on the second try'),
        h('li', null, h('b', null, '5 stars'), ' for finishing a lesson (+5 for a perfect one)'), h('li', null, h('b', null, 'Spelling test:'), ' 2 stars per word'),
        h('li', null, h('b', null, 'Writing:'), ' 8 stars for turning it in, 12 more when your parent reviews it'), h('li', null, h('b', null, 'Speed stars'), ' only in the Friday fluency sprint'), h('li', null, 'Practice lessons you already finished do not earn stars.'))),
      h('div', { class: 'card' }, h('h3', null, 'Recent stars'), entries.length ? h('table', null, h('tbody', null, entries.map(function (e) { return h('tr', null, h('td', null, '+' + e.stars), h('td', null, e.why), h('td', { class: 'muted' }, Cal.short(e.date))); }))) : h('p', { class: 'muted' }, 'Finish a lesson to earn your first stars.')),
      h('div', { class: 'card' }, h('h3', null, 'Badges'), h('div', { class: 'badge-grid' }, Object.keys(Player.BADGES).map(function (id) { var b = Player.BADGES[id], on = !!st.badges[id]; return h('div', { class: 'bd' + (on ? '' : ' off'), title: b.d }, h('div', { class: 'e' }, b.e), h('b', null, b.n), h('div', { class: 'small muted' }, b.d)); }))),
      h('p', null, h('a', { class: 'btn ghost', href: '#/' }, 'Back')));
    UI.render(topbar(), main);
  };

  root.Home = Home;
})(window);
