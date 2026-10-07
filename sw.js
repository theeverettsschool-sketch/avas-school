/* Offline cache: network first (so monthly updates arrive), fall back to the saved copy when offline. */
var CACHE = 'ava-school-v2';
var FILES = ['./', 'index.html', 'config.js', 'manifest.json', 'css/app.css', 'js/calendar.js', 'js/gen.js', 'js/store.js', 'js/sync.js', 'js/scripture.js', 'js/content/core.js', 'js/content/bible.js', 'js/content/lang.js', 'js/content/stem.js', 'js/content/plan.js', 'js/ui.js', 'js/lessons.js', 'js/home.js', 'js/parent.js', 'js/app.js', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-180.png'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); })); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); })); });
self.addEventListener('fetch', function (e) {
  var r = e.request; if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(fetch(r).then(function (res) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(r, copy); }); return res; }).catch(function () { return caches.match(r).then(function (m) { return m || caches.match('index.html'); }); }));
});
