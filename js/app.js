/* Boot, routes, sync wiring, end-of-week backup prompt, service worker. */
(function () {
  'use strict';
  var h = UI.h;

  Store.load();
  var st = Store.state;
  Sync.config(Parent.loadCfg()); Sync.loadAuth(); if (Sync.cfg && Sync.auth) Sync.status = 'ready';

  UI.route('/', function () { if (!st.settings.pinHash || !Store.state.profile.name) return Home.setup(); Home.render(); });
  UI.route('/lesson/:id', function (id) { Player.start(id); });
  UI.route('/stars', function () { Home.stars(); });
  UI.route('/parent', function () { Parent.open(); });
  UI.route('/report', function () { Parent.report(); });
  UI.route('/hours', function () { Parent.hours(); });

  // End-of-week / end-of-month nudge to save a copy (parent-gated).
  Player.afterLesson = function (c) {
    var s = Store.state, today = c.today, info = Plan.forDate(today, s.settings);
    var allDone = info.lessons.length && info.lessons.every(function (l) { return s.progress[l.id] && s.progress[l.id].done; });
    if (!allDone) return;
    var next = Cal.nextSchoolDay(Cal.addDays(today, 1), s.settings), endOfWeek = !next || Store.mondayOf(next) !== Store.mondayOf(today), endOfMonth = !next || next.slice(0, 7) !== today.slice(0, 7);
    if (!endOfWeek && !endOfMonth) return;
    setTimeout(function () {
      var m = UI.modal(h('div', null, h('h2', null, endOfMonth ? 'Month complete! 🎉' : 'Week complete! 🎉'), h('p', null, 'Great work. Ask a parent to save a copy of ' + (endOfMonth ? 'this month' : 'this week') + '\'s progress to this device.'),
        h('div', { class: 'row', style: { justifyContent: 'flex-end' } }, h('button', { class: 'btn ghost', onclick: function () { m.close(); } }, 'Later'), h('button', { class: 'btn gold', onclick: function () { m.close(); UI.requirePin(function () { Parent.downloadBackup(); UI.toast('Backup downloaded.'); }); } }, 'Parent: save copy'))));
    }, 900);
  };

  // timers (PE, novel, rotation) keep counting on every screen; refresh the clocks on Home
  setInterval(function () { var stopped = Player.Timers.tick(); if (location.hash === '' || location.hash === '#/') { if (stopped) Home.render(); else Home.tickTimers(); } }, 5000);
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') { Player.Timers.running().forEach(Player.Timers.log); Store.save(); } });

  // sync: on open, when the tab comes back, and every few minutes
  function trySync() { if (Sync.cfg && Sync.auth) Sync.syncNow().then(function (r) { if (r.ok && (location.hash === '' || location.hash === '#/')) Home.render(); }); }
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') trySync(); });
  setInterval(function () { if (document.visibilityState === 'visible') trySync(); }, 180000);
  window.addEventListener('online', trySync);
  if (!window.__noAutoStart) { UI.dispatch(); trySync(); }

  // offline support
  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) { navigator.serviceWorker.register('sw.js').catch(function () { }); }
  if (UI.canSpeak()) { try { speechSynthesis.getVoices(); } catch (e) { } }
})();
