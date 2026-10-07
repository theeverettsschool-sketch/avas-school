/* Cloud sync using the Firebase REST APIs directly (no SDK, no third-party code).
   - Auth: email + password (one family account), via Identity Toolkit.
   - Data: Firestore documents under families/{uid}. State is gzip+base64 and split into chunks.
   - Merge is done locally with Store.merge, so two devices can never overwrite each other.
   Setup steps for the parent are in SETUP.md. */
(function (root) {
  'use strict';
  var Store = (typeof require !== 'undefined' && typeof module !== 'undefined') ? require('./store.js') : root.Store;

  var CHUNK = 600000; // chars per Firestore chunk doc (limit is ~1MB)
  var TK = 'avaSchool.auth.v1';

  var Sync = { cfg: null, auth: null, status: 'off', last: null, error: '', fetch: null, storage: null };

  function f() { return Sync.fetch || root.fetch.bind(root); }
  function ls() { return Sync.storage || root.localStorage; }

  function config(c) {
    Sync.cfg = c && c.apiKey && c.projectId ? { apiKey: c.apiKey.trim(), projectId: c.projectId.trim() } : null;
    Sync.status = Sync.cfg ? (Sync.auth ? 'ready' : 'signed-out') : 'off';
  }
  function saveAuth() { try { ls().setItem(TK, JSON.stringify(Sync.auth)); } catch (e) { } }
  function loadAuth() { try { var a = JSON.parse(ls().getItem(TK)); if (a && a.refreshToken) Sync.auth = a; } catch (e) { } }

  function friendly(code) {
    var map = { EMAIL_EXISTS: 'That email already has an account. Use Sign in instead.', EMAIL_NOT_FOUND: 'No account for that email. Use Create account first.', INVALID_PASSWORD: 'Wrong password.', INVALID_LOGIN_CREDENTIALS: 'Email or password is wrong.', WEAK_PASSWORD: 'Password needs at least 6 characters.', INVALID_EMAIL: 'That email address is not valid.', TOO_MANY_ATTEMPTS_TRY_LATER: 'Too many tries. Wait a few minutes and try again.', API_KEY_INVALID: 'The API key is not valid. Re-copy it from Firebase.', 'API key not valid. Please pass a valid API key.': 'The API key is not valid. Re-copy it from Firebase.', CONFIGURATION_NOT_FOUND: 'Email sign-in is not turned on in Firebase yet (Authentication → Sign-in method → Email/Password).' };
    for (var k in map) if (String(code).indexOf(k) >= 0) return map[k];
    return String(code);
  }

  async function identity(path, body) {
    var r = await f()('https://identitytoolkit.googleapis.com/v1/accounts:' + path + '?key=' + Sync.cfg.apiKey, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    var j = await r.json(); if (!r.ok) throw new Error(friendly((j.error && j.error.message) || r.status)); return j;
  }
  async function signUp(email, password) { var j = await identity('signUp', { email: email, password: password, returnSecureToken: true }); setAuth(j); }
  async function signIn(email, password) { var j = await identity('signInWithPassword', { email: email, password: password, returnSecureToken: true }); setAuth(j); }
  function setAuth(j) { Sync.auth = { uid: j.localId, email: j.email, idToken: j.idToken, refreshToken: j.refreshToken, exp: Date.now() + (+j.expiresIn - 60) * 1000 }; Sync.status = 'ready'; saveAuth(); }
  function signOut() { Sync.auth = null; try { ls().removeItem(TK); } catch (e) { } Sync.status = Sync.cfg ? 'signed-out' : 'off'; }

  async function token() {
    if (!Sync.auth) throw new Error('Not signed in.');
    if (Date.now() < Sync.auth.exp) return Sync.auth.idToken;
    var r = await f()('https://securetoken.googleapis.com/v1/token?key=' + Sync.cfg.apiKey, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'grant_type=refresh_token&refresh_token=' + encodeURIComponent(Sync.auth.refreshToken) });
    var j = await r.json(); if (!r.ok) { signOut(); throw new Error('Sign-in expired. Sign in again.'); }
    Sync.auth.idToken = j.id_token; Sync.auth.refreshToken = j.refresh_token; Sync.auth.exp = Date.now() + (+j.expires_in - 60) * 1000; saveAuth();
    return Sync.auth.idToken;
  }

  // ---- compression helpers (browser CompressionStream, Node 18+ also has it) ----
  async function gz(str) {
    var cs = new CompressionStream('gzip'), w = cs.writable.getWriter(); w.write(new TextEncoder().encode(str)); w.close();
    var buf = new Uint8Array(await new Response(cs.readable).arrayBuffer()), bin = ''; for (var i = 0; i < buf.length; i += 8192) bin += String.fromCharCode.apply(null, buf.subarray(i, i + 8192));
    return btoa(bin);
  }
  async function gunz(b64) {
    var bin = atob(b64), u = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    var ds = new DecompressionStream('gzip'), w = ds.writable.getWriter(); w.write(u); w.close();
    return new TextDecoder().decode(await new Response(ds.readable).arrayBuffer());
  }

  function base() { return 'https://firestore.googleapis.com/v1/projects/' + Sync.cfg.projectId + '/databases/(default)/documents/families/' + Sync.auth.uid; }

  async function fsGet(path) {
    var r = await f()(base() + path, { headers: { Authorization: 'Bearer ' + await token() } });
    if (r.status === 404) return null; var j = await r.json();
    if (!r.ok) throw new Error(friendlyFs(j, r.status)); return j;
  }
  async function fsPatch(path, fields) {
    var r = await f()(base() + path, { method: 'PATCH', headers: { Authorization: 'Bearer ' + await token(), 'Content-Type': 'application/json' }, body: JSON.stringify({ fields: fields }) });
    var j = await r.json(); if (!r.ok) throw new Error(friendlyFs(j, r.status)); return j;
  }
  function friendlyFs(j, status) {
    var m = (j && j.error && j.error.message) || ''; if (status === 403 || /PERMISSION/.test(m)) return 'Firebase blocked the save. Check that the Firestore rules from SETUP.md were published.';
    if (/not been used|disabled/i.test(m)) return 'Firestore is not turned on yet. In Firebase: Build → Firestore Database → Create database.'; return m || ('Sync error ' + status);
  }

  async function pull() {
    var meta = await fsGet(''); if (!meta || !meta.fields || !meta.fields.n) return null;
    var n = +meta.fields.n.integerValue, parts = [];
    for (var i = 0; i < n; i++) { var d = await fsGet('/chunks/c' + i); if (!d) throw new Error('Cloud copy is incomplete; will retry.'); parts.push(d.fields.d.stringValue); }
    return JSON.parse(await gunz(parts.join('')));
  }
  async function push(state) {
    var b64 = await gz(JSON.stringify(state)), n = Math.ceil(b64.length / CHUNK) || 1;
    for (var i = 0; i < n; i++) await fsPatch('/chunks/c' + i, { d: { stringValue: b64.slice(i * CHUNK, (i + 1) * CHUNK) } });
    await fsPatch('', { n: { integerValue: String(n) }, updatedAt: { integerValue: String(Date.now()) }, size: { integerValue: String(b64.length) } });
  }

  var busy = false;
  // Pull -> merge -> save locally -> push merged. Safe to call often.
  async function syncNow() {
    if (!Sync.cfg || !Sync.auth) return { ok: false, reason: 'not-configured' };
    if (busy) return { ok: false, reason: 'busy' }; busy = true; Sync.status = 'syncing';
    try {
      var wrapper = await pull(), remote = wrapper;
      if (wrapper && wrapper.state !== undefined) remote = wrapper.state; else wrapper = null;
      if (remote && (typeof remote !== 'object' || Array.isArray(remote))) throw new Error('The cloud copy looks damaged, so nothing was overwritten. Try again later.');
      // Store.merge keeps every key it does not know about, so data written by a newer app version is never dropped.
      var merged = remote ? Store.merge(Store.state, remote) : Store.state;
      Store.state = merged; Store.save();
      // keep any extra top-level fields a newer version may have put in the cloud wrapper
      var out = Object.assign({}, wrapper || {}, { app: 'Ava School', schema: 3, state: merged });
      await push(out);
      Sync.last = Date.now(); Sync.status = 'ok'; Sync.error = '';
      return { ok: true };
    } catch (e) {
      Sync.status = navigator && navigator.onLine === false ? 'offline' : 'error'; Sync.error = e.message || String(e);
      return { ok: false, reason: Sync.error };
    } finally { busy = false; }
  }

  Object.assign(Sync, { config: config, loadAuth: loadAuth, signUp: signUp, signIn: signIn, signOut: signOut, syncNow: syncNow, _gz: gz, _gunz: gunz, _pull: pull, _push: push });
  if (typeof module !== 'undefined' && module.exports) module.exports = Sync; else root.Sync = Sync;
})(typeof window !== 'undefined' ? window : globalThis);
