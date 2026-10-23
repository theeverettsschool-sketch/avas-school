/* v13 Behavior: shared look (face + 5 half/full bars) for the kid app and the parent app. Data lives in Store
   (state.behavior, merged by entry id). No dependencies; returns HTML strings. */
(function (root) {
  'use strict';
  var BANDS = [
    { min: 9, color: '#1f9d6b', name: 'Super day!', mood: 'big', cheer: 'Amazing choices today. Keep shining!' },
    { min: 7, color: '#6cc04a', name: 'Good day', mood: 'happy', cheer: 'Nice job! You are doing great.' },
    { min: 5, color: '#f2c230', name: 'Okay day', mood: 'neutral', cheer: 'You can turn it around. One good choice at a time!' },
    { min: 3, color: '#f08a24', name: 'Tough day', mood: 'frown', cheer: 'Tomorrow is a fresh start. You can do it!' },
    { min: 1, color: '#d63b2f', name: 'Hard day', mood: 'grumpy', cheer: 'Everyone has hard days. Take a breath, and try again.' }];
  function band(score) { score = Math.max(1, Math.min(10, Math.round(+score) || 8)); for (var i = 0; i < BANDS.length; i++) if (score >= BANDS[i].min) return BANDS[i]; return BANDS[4]; }
  function face(score, size) {
    var b = band(score), s = size || 40, mouth = { big: '<path d="M11 23 Q20 34 29 23 Z" fill="#fff" stroke="#173" stroke-width="2" stroke-linejoin="round"/>', happy: '<path d="M12 24 Q20 31 28 24" fill="none" stroke="#173" stroke-width="2.6" stroke-linecap="round"/>', neutral: '<path d="M13 26 H27" stroke="#5a4500" stroke-width="2.6" stroke-linecap="round"/>', frown: '<path d="M13 28 Q20 22 27 28" fill="none" stroke="#5a2a00" stroke-width="2.6" stroke-linecap="round"/>', grumpy: '<path d="M12 29 Q20 21 28 29" fill="none" stroke="#fff" stroke-width="2.8" stroke-linecap="round"/>' }[b.mood];
    var eyes = b.mood === 'grumpy' ? '<path d="M10 12 L17 15 M30 12 L23 15" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/><circle cx="14" cy="17.5" r="2.2" fill="#fff"/><circle cx="26" cy="17.5" r="2.2" fill="#fff"/>' : b.mood === 'big' ? '<path d="M11 16 Q14 12 17 16 M23 16 Q26 12 29 16" fill="none" stroke="#173" stroke-width="2.4" stroke-linecap="round"/>' : '<circle cx="14" cy="16" r="2.4" fill="' + (b.mood === 'frown' ? '#5a2a00' : b.mood === 'neutral' ? '#5a4500' : '#173') + '"/><circle cx="26" cy="16" r="2.4" fill="' + (b.mood === 'frown' ? '#5a2a00' : b.mood === 'neutral' ? '#5a4500' : '#173') + '"/>';
    return '<svg class="beh-face" width="' + s + '" height="' + s + '" viewBox="0 0 40 40" role="img" aria-label="' + b.name + '"><circle cx="20" cy="20" r="18.5" fill="' + b.color + '" stroke="rgba(0,0,0,.15)"/>' + eyes + mouth + '</svg>';
  }
  // 5 bars; each is empty, half, or full (score / 2)
  function bars(score, h) {
    var b = band(score), v = Math.max(0, Math.min(10, Math.round(+score) || 0)), out = '', H = h || 18;
    for (var i = 0; i < 5; i++) { var fill = Math.max(0, Math.min(2, v - 2 * i)), pct = fill * 50;
      out += '<span class="beh-bar" style="display:inline-block;width:' + Math.round(H * 0.5) + 'px;height:' + H + 'px;margin-right:2px;border-radius:3px;background:linear-gradient(to top,' + b.color + ' ' + pct + '%,rgba(255,255,255,.35) ' + pct + '%);border:1px solid rgba(0,0,0,.18);vertical-align:middle" data-fill="' + fill + '"></span>'; }
    return '<span class="beh-bars" aria-hidden="true">' + out + '</span>';
  }
  function widget(score, opts) { opts = opts || {}; return face(score, opts.size || 30) + ' ' + bars(score, opts.bar || 18) + (opts.num ? ' <b class="beh-num">' + score + '/10</b>' : ''); }
  // last 7 days as mini faces: [{date, score, set}]
  function trend(Store, todayIso, Cal) { var out = []; for (var i = 6; i >= 0; i--) { var d = Cal.addDays(todayIso, -i); out.push({ date: d, score: Store.behScore(d), set: !!Store.behLatest(d) }); } return out; }
  var Beh = { BANDS: BANDS, band: band, face: face, bars: bars, widget: widget, trend: trend };
  if (typeof module !== 'undefined' && module.exports) module.exports = Beh; else root.Beh = Beh;
})(typeof window !== 'undefined' ? window : globalThis);
