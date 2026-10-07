/* Small SVG pictures drawn in the app (no outside images): fraction bars, place-value charts, hundred grids,
   rectangles, angles, coordinate grids, boxes, a compass rose, and the progress ring. */
(function (root) {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  function el(tag, a, kids) { var e = document.createElementNS(NS, tag); for (var k in a) e.setAttribute(k, a[k]); (kids || []).forEach(function (c) { if (c) e.appendChild(c); }); return e; }
  function txt(x, y, s, a) { var t = el('text', Object.assign({ x: x, y: y, 'text-anchor': 'middle', 'dominant-baseline': 'middle', class: 'pt' }, a || {})); t.textContent = s; return t; }
  function svg(w, hh, label, kids) { return el('svg', { viewBox: '0 0 ' + w + ' ' + hh, role: 'img', 'aria-label': label, class: 'pic-svg' }, kids); }
  var P = {};
  // fraction bars: bars = [[shaded, parts], ...]
  P.frac = function (o) {
    var W = 420, bh = 44, gap = 22, kids = [];
    o.bars.forEach(function (b, i) {
      var y = 10 + i * (bh + gap), n = b[1], pw = (W - 80) / n;
      for (var k = 0; k < n; k++) kids.push(el('rect', { x: 10 + k * pw, y: y, width: pw, height: bh, class: k < b[0] ? 'fill-a' : 'fill-0', rx: 3 }));
      kids.push(txt(W - 34, y + bh / 2, b[0] ? b[0] + '/' + n : '?/' + n, { class: 'pt big' }));
    });
    return svg(W, 10 + o.bars.length * (bh + gap), 'Fraction bars: ' + o.bars.map(function (b) { return (b[0] || '?') + ' out of ' + b[1] + ' parts'; }).join('; '), kids);
  };
  var PV = ['hundred-thousands', 'ten-thousands', 'thousands', 'hundreds', 'tens', 'ones'], PVs = ['100,000s', '10,000s', '1,000s', '100s', '10s', '1s'];
  P.pv = function (o) {
    var ds = String(o.n).split(''), cols = PVs.slice(6 - ds.length), cw = 68, W = cw * ds.length + 20, kids = [];
    ds.forEach(function (d, i) { var x = 10 + i * cw; kids.push(el('rect', { x: x, y: 8, width: cw - 4, height: 34, class: 'fill-h', rx: 6 })); kids.push(txt(x + (cw - 4) / 2, 25, cols[i], { class: 'pt sm' })); kids.push(el('rect', { x: x, y: 46, width: cw - 4, height: 54, class: 'fill-0', rx: 6 })); kids.push(txt(x + (cw - 4) / 2, 74, d, { class: 'pt big' })); });
    return svg(W, 108, 'Place value chart for ' + o.n, kids);
  };
  P.pvd = function (o) {
    var parts = o.s.split('.'), whole = parts[0].split(''), fr = parts[1].split(''), heads = whole.map(function (_, i) { return ['1s', '10s', '100s'][whole.length - 1 - i] || '1000s'; }).concat(['.'], ['tenths', 'hundredths', 'thousandths'].slice(0, fr.length)), digs = whole.concat(['.'], fr), cw = 74, W = cw * digs.length + 20, kids = [];
    digs.forEach(function (d, i) { var x = 10 + i * cw, dot = d === '.'; if (!dot) { kids.push(el('rect', { x: x, y: 8, width: cw - 4, height: 34, class: 'fill-h', rx: 6 })); kids.push(txt(x + (cw - 4) / 2, 25, heads[i], { class: 'pt sm' })); kids.push(el('rect', { x: x, y: 46, width: cw - 4, height: 54, class: 'fill-0', rx: 6 })); } kids.push(txt(x + (cw - 4) / 2, 74, d, { class: 'pt big' })); });
    return svg(W, 108, 'Decimal place value chart for ' + o.s, kids);
  };
  P.grid100 = function (o) {
    var s = 22, kids = [];
    for (var i = 0; i < 100; i++) { var col = Math.floor(i / 10), row = i % 10; kids.push(el('rect', { x: 6 + col * s, y: 6 + row * s, width: s - 2, height: s - 2, class: i < o.n ? 'fill-a' : 'fill-0', rx: 2 })); }
    return svg(s * 10 + 12, s * 10 + 12, 'Hundred grid with ' + o.n + ' squares shaded', kids);
  };
  P.rect = function (o) {
    var maxW = 360, maxH = 200, w = typeof o.w === 'number' ? o.w : 6, hh = typeof o.h === 'number' ? o.h : 4, sc = Math.min(maxW / w, maxH / hh, 34), W = w * sc, H = hh * sc, kids = [el('rect', { x: 50, y: 20, width: W, height: H, class: 'fill-a2', rx: 2 })];
    if (typeof o.w === 'number' && typeof o.h === 'number' && w * hh <= 180) { for (var i = 1; i < w; i++) kids.push(el('line', { x1: 50 + i * sc, y1: 20, x2: 50 + i * sc, y2: 20 + H, class: 'gridl' })); for (var j = 1; j < hh; j++) kids.push(el('line', { x1: 50, y1: 20 + j * sc, x2: 50 + W, y2: 20 + j * sc, class: 'gridl' })); }
    kids.push(txt(50 + W / 2, 20 + H + 18, o.w + ' ' + o.u)); kids.push(txt(26, 20 + H / 2, o.h + ' ' + o.u));
    return svg(W + 90, H + 48, 'Rectangle ' + o.w + ' by ' + o.h + ' ' + o.u, kids);
  };
  P.angle = function (o) {
    var cx = 150, cy = 150, R = 120, kids = [], a0 = 0, parts = o.parts, whole = o.whole || parts.reduce(function (a, b) { return a + b; }, 0);
    function pt(deg, r) { var t = -deg * Math.PI / 180; return [cx + Math.cos(t) * r, cy + Math.sin(t) * r]; }
    kids.push(el('line', { x1: cx, y1: cy, x2: pt(0, R)[0], y2: pt(0, R)[1], class: 'ray' }));
    parts.forEach(function (d, i) {
      var a1 = a0 + d, p1 = pt(a1, R), arcR = 46 + i * 14, s = pt(a0, arcR), e = pt(a1, arcR), large = d > 180 ? 1 : 0;
      kids.push(el('path', { d: 'M ' + s[0] + ' ' + s[1] + ' A ' + arcR + ' ' + arcR + ' 0 ' + large + ' 0 ' + e[0] + ' ' + e[1], class: i % 2 ? 'arc2' : 'arc1' }));
      if (a1 < 359.9) kids.push(el('line', { x1: cx, y1: cy, x2: p1[0], y2: p1[1], class: 'ray' }));
      var m = pt(a0 + d / 2, arcR + 22); if (o.label && o.label[i]) kids.push(txt(m[0], m[1], o.label[i], { class: 'pt' }));
      a0 = a1;
    });
    if (Math.abs(whole - 90) < 0.01 || parts.length === 1 && parts[0] === 90) { var q = 16; kids.push(el('path', { d: 'M ' + (cx + q) + ' ' + cy + ' L ' + (cx + q) + ' ' + (cy - q) + ' L ' + cx + ' ' + (cy - q), class: 'ray thin' })); }
    kids.push(el('circle', { cx: cx, cy: cy, r: 4, class: 'dot' }));
    var minY = whole > 180 ? 300 : 160;
    return svg(300, minY, 'Angle diagram: ' + (o.label || parts).join(' and '), kids);
  };
  P.coord = function (o) {
    var s = 26, n = 10, ox = 34, oy = 10 + s * n, kids = [];
    for (var i = 0; i <= n; i++) { kids.push(el('line', { x1: ox + i * s, y1: 10, x2: ox + i * s, y2: oy, class: i ? 'gridl' : 'axis' })); kids.push(el('line', { x1: ox, y1: oy - i * s, x2: ox + n * s, y2: oy - i * s, class: i ? 'gridl' : 'axis' })); kids.push(txt(ox + i * s, oy + 14, String(i), { class: 'pt sm' })); kids.push(txt(ox - 14, oy - i * s, String(i), { class: 'pt sm' })); }
    (o.pts || []).forEach(function (p) { kids.push(el('circle', { cx: ox + p[0] * s, cy: oy - p[1] * s, r: 7, class: 'dot' })); kids.push(txt(ox + p[0] * s + 14, oy - p[1] * s - 12, p[2], { class: 'pt b' })); });
    kids.push(txt(ox + n * s / 2, oy + 30, 'x (across)', { class: 'pt sm' }));
    return svg(ox + n * s + 20, oy + 40, 'Coordinate grid with point ' + (o.pts || []).map(function (p) { return p[2]; }).join(', '), kids);
  };
  P.box = function (o) {
    var kids = [], X = 40, Y = 60, W = 170, H = 110, D = 60;
    kids.push(el('path', { d: 'M ' + X + ' ' + Y + ' l ' + D + ' -' + (D * 0.6) + ' h ' + W + ' l -' + D + ' ' + (D * 0.6) + ' z', class: 'fill-a' }));
    kids.push(el('path', { d: 'M ' + (X + W) + ' ' + Y + ' l ' + D + ' -' + (D * 0.6) + ' v ' + H + ' l -' + D + ' ' + (D * 0.6) + ' z', class: 'fill-a2' }));
    kids.push(el('rect', { x: X, y: Y, width: W, height: H, class: 'fill-h' }));
    kids.push(txt(X + W / 2, Y + H + 18, o.l + ' ' + o.u)); kids.push(txt(X + W + D / 2 + 22, Y + H - 12, o.w + ' ' + o.u)); kids.push(txt(X - 22, Y + H / 2, o.h + ' ' + o.u));
    return svg(X + W + D + 70, Y + H + 32, 'Box ' + o.l + ' by ' + o.w + ' by ' + o.h, kids);
  };
  P.compass = function () {
    var c = 90, kids = [el('circle', { cx: c, cy: c, r: 70, class: 'fill-0' })];
    [['N', 0], ['E', 90], ['S', 180], ['W', 270]].forEach(function (d) { var t = (d[1] - 90) * Math.PI / 180; kids.push(el('path', { d: 'M ' + c + ' ' + c + ' L ' + (c + Math.cos(t - 0.18) * 22) + ' ' + (c + Math.sin(t - 0.18) * 22) + ' L ' + (c + Math.cos(t) * 62) + ' ' + (c + Math.sin(t) * 62) + ' L ' + (c + Math.cos(t + 0.18) * 22) + ' ' + (c + Math.sin(t + 0.18) * 22) + ' Z', class: d[0] === 'N' ? 'fill-a' : 'fill-h' })); kids.push(txt(c + Math.cos(t) * 80, c + Math.sin(t) * 80, d[0], { class: 'pt b' })); });
    [['NE', 45], ['SE', 135], ['SW', 225], ['NW', 315]].forEach(function (d) { var t = (d[1] - 90) * Math.PI / 180; kids.push(txt(c + Math.cos(t) * 50, c + Math.sin(t) * 50, d[0], { class: 'pt sm' })); });
    return svg(180, 180, 'Compass rose showing north, east, south, west and the in-between directions', kids);
  };
  // progress ring with an icon (or text) in the middle
  P.ring = function (pct, center, size, sub) {
    size = size || 120; var r = size / 2 - 10, C2 = 2 * Math.PI * r, s = svg(size, size, Math.round(pct * 100) + ' percent', [
      el('circle', { cx: size / 2, cy: size / 2, r: r, class: 'ring-bg' }),
      el('circle', { cx: size / 2, cy: size / 2, r: r, class: 'ring-fg', 'stroke-dasharray': C2, 'stroke-dashoffset': C2 * (1 - Math.max(0, Math.min(1, pct))), transform: 'rotate(-90 ' + size / 2 + ' ' + size / 2 + ')' }),
      txt(size / 2, size / 2 - (sub ? 8 : 0), center, { class: 'ring-t' }), sub ? txt(size / 2, size / 2 + 18, sub, { class: 'ring-s' }) : null]);
    s.setAttribute('class', 'pic-svg ring'); s.setAttribute('width', size); s.setAttribute('height', size); return s;
  };
  P.render = function (spec) { try { var f = P[spec.t]; return f ? f(spec) : null; } catch (e) { return null; } };
  root.Pics = P;
})(window);
