/* Confetti burst when she finishes something. Skipped entirely when the device asks for reduced motion. */
(function (root) {
  'use strict';
  var Fx = {};
  function reduced() { try { return root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  Fx.confetti = function (n) {
    if (reduced() || !document.body) return;
    var cv = document.createElement('canvas'), dpr = Math.min(2, root.devicePixelRatio || 1), W = root.innerWidth, H = root.innerHeight;
    cv.className = 'confetti'; cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px'; cv.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cv); var g = cv.getContext('2d'); g.scale(dpr, dpr);
    var colors = ['#ffb703', '#ffd45e', '#2f6fed', '#e0457b', '#1f9d6b', '#8a4fd6', '#ffffff'], ps = [], i;
    for (i = 0; i < (n || 90); i++) ps.push({ x: W / 2 + (Math.random() - 0.5) * W * 0.3, y: H * 0.35, vx: (Math.random() - 0.5) * 9, vy: -Math.random() * 11 - 4, r: Math.random() * 6 + 4, a: Math.random() * 6, va: (Math.random() - 0.5) * 0.3, c: colors[i % colors.length], star: i % 5 === 0 });
    var t0 = performance.now();
    function star(x, y, r) { g.beginPath(); for (var k = 0; k < 10; k++) { var ang = Math.PI / 5 * k - Math.PI / 2, rr = k % 2 ? r * 0.45 : r; g.lineTo(x + Math.cos(ang) * rr, y + Math.sin(ang) * rr); } g.closePath(); g.fill(); }
    (function frame(t) {
      var el = t - t0; g.clearRect(0, 0, W, H);
      ps.forEach(function (p) { p.vy += 0.32; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.a += p.va; g.save(); g.translate(p.x, p.y); g.rotate(p.a); g.fillStyle = p.c; g.globalAlpha = Math.max(0, 1 - el / 2400); if (p.star) star(0, 0, p.r * 1.3); else g.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); g.restore(); });
      if (el < 2400) requestAnimationFrame(frame); else cv.remove();
    })(t0);
  };
  root.Fx = Fx;
})(window);
