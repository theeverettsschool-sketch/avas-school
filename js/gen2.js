/* Math generators for the rest of the year (v3): factors through 5th-grade fractions, decimals, volume, and the
   coordinate plane. Same contract as gen.js: every problem is fresh, carries a hint, a full step-by-step solution,
   and an answer check. Optional `pic` is drawn by js/pics.js. */
(function (root) {
  'use strict';
  var Gen = (typeof require !== 'undefined' && typeof module !== 'undefined') ? require('./gen.js') : root.Gen;
  var fmt = Gen.fmt, PLACES = Gen.PLACES, NAMES = Gen.NAMES;

  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
  function lcm(a, b) { return a / gcd(a, b) * b; }
  function simp(n, d) { var g = gcd(n, d); return [n / g, d / g]; }
  function fr(n, d) { return n + '/' + d; }
  // nice text for a fraction value: improper -> also give mixed number
  function frText(n, d) {
    var s = simp(n, d), N = s[0], D = s[1];
    if (D === 1) return String(N);
    if (N > D) { var w = Math.floor(N / D), r = N % D; return fr(N, D) + ' (which is ' + w + ' ' + fr(r, D) + ')'; }
    return fr(N, D);
  }
  function mixedText(n, d) { var s = simp(n, d), N = s[0], D = s[1]; if (D === 1) return String(N); if (N > D) return Math.floor(N / D) + ' ' + fr(N % D, D); return fr(N, D); }
  function dec(x, places) { var s = (Math.round(x * 1e6) / 1e6).toFixed(places === undefined ? 6 : places); if (places === undefined) s = s.replace(/\.?0+$/, ''); return s; }
  function d2(x) { return dec(x); }

  // ---------------- FACTORS, PRIMES, MULTIPLES, PATTERNS ----------------
  function factorPairs(n) { var p = []; for (var i = 1; i * i <= n; i++) if (n % i === 0) p.push([i, n / i]); return p; }
  Gen.add('factors', function (S) {
    var n; do { n = S.int(12, 72); } while (factorPairs(n).length < 3);
    var pairs = factorPairs(n), all = []; pairs.forEach(function (p) { all.push(p[0]); if (p[1] !== p[0]) all.push(p[1]); }); all.sort(function (a, b) { return a - b; });
    var steps = ['Factors are numbers that multiply together to make ' + n + '. Find them in PAIRS, starting with 1.'];
    for (var i = 1; i * i <= n; i++) steps.push(n % i === 0 ? i + ' × ' + (n / i) + ' = ' + n + ' ✓ so ' + i + ' and ' + (n / i) + ' are factors.' : i + ' does not divide ' + n + ' evenly (' + n + ' ÷ ' + i + ' has a remainder), so skip it.');
    steps.push('Stop when the pairs start to repeat. List them in order: ' + all.join(', ') + '.');
    steps.push('Count them: ' + n + ' has ' + all.length + ' factors.');
    return { skill: 'factors', kind: 'num', q: 'How many factors does ' + n + ' have?', a: String(all.length), hint: 'Find factor pairs: 1 × ' + n + ', then try 2, 3, 4, ... Each pair gives two factors (unless both are the same number).', steps: steps };
  });
  function isPrime(n) { if (n < 2) return false; for (var i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; }
  Gen.add('prime-composite', function (S) {
    var n = S.int(2, 99), p = isPrime(n), f = null; for (var i = 2; i * i <= n; i++) if (n % i === 0) { f = i; break; }
    return { skill: 'prime-composite', kind: 'text', at: 'choice', choices: ['prime', 'composite'], q: 'Is ' + n + ' prime or composite?', a: p ? 'prime' : 'composite',
      hint: 'A prime number has exactly two factors: 1 and itself. Try dividing by 2, 3, 5, and 7.',
      steps: ['A PRIME number has exactly two factors: 1 and itself. A COMPOSITE number has more than two factors.',
        'Try small numbers: does 2, 3, 5, or 7 divide ' + n + ' evenly?',
        p ? 'None of them divide ' + n + ' evenly (and we only need to test numbers up to about ' + Math.floor(Math.sqrt(n)) + '). Its only factors are 1 and ' + n + '.' : f + ' × ' + (n / f) + ' = ' + n + ', so ' + f + ' is a factor besides 1 and ' + n + '.',
        'So ' + n + ' is ' + (p ? 'PRIME.' : 'COMPOSITE.')] };
  });
  Gen.add('multiples', function (S) {
    var k = S.int(3, 12), nth = S.int(4, 12);
    if (S.r() < 0.5) {
      var list = []; for (var i = 1; i <= nth; i++) list.push(k * i);
      return { skill: 'multiples', kind: 'num', q: 'What is the ' + ord(nth) + ' multiple of ' + k + '?', a: String(k * nth), hint: 'Multiples are what you get when you skip count: ' + k + ', ' + (2 * k) + ', ' + (3 * k) + ', ...',
        steps: ['Multiples of ' + k + ' are ' + k + ' × 1, ' + k + ' × 2, ' + k + ' × 3, and so on.', 'Skip count by ' + k + ': ' + list.join(', ') + '.', 'The ' + ord(nth) + ' one is ' + k + ' × ' + nth + ' = ' + (k * nth) + '.'] };
    }
    var right = k * S.int(3, 9), wrongs = [], tries = 0; while (wrongs.length < 3 && tries++ < 50) { var w = right + S.pick([-2, -1, 1, 2, 3]) * S.int(1, 2); if (w > 0 && w % k !== 0 && wrongs.indexOf(w) < 0) wrongs.push(w); }
    var ch = S.shuffle([right].concat(wrongs)).map(String);
    return { skill: 'multiples', kind: 'text', at: 'choice', choices: ch, q: 'Which number is a multiple of ' + k + '?', a: String(right), hint: 'A multiple of ' + k + ' can be divided by ' + k + ' with no remainder.',
      steps: ['A multiple of ' + k + ' is a number in the ' + k + 's times table.', 'Check each choice by dividing by ' + k + '. Only one divides evenly.', right + ' ÷ ' + k + ' = ' + (right / k) + ' with no remainder, because ' + k + ' × ' + (right / k) + ' = ' + right + '.', 'The others leave a remainder, so they are not multiples of ' + k + '.'] };
  });
  function ord(n) { var s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); }
  Gen.add('patterns', function (S) {
    var t = S.int(0, 2), a = S.int(2, 15), k = S.int(2, 9), seq = [], i;
    if (t === 2) { a = S.int(1, 4); k = S.pick([2, 3]); for (i = 0; i < 5; i++) seq.push(a * Math.pow(k, i)); var nx = a * Math.pow(k, 5);
      return { skill: 'patterns', kind: 'num', q: 'What comes next? ' + seq.join(', ') + ', __', a: String(nx), hint: 'Is each number the one before PLUS something, or TIMES something?',
        steps: ['Compare each number to the one before it: ' + seq[1] + ' ÷ ' + seq[0] + ' = ' + k + ', ' + seq[2] + ' ÷ ' + seq[1] + ' = ' + k + '.', 'The rule is "multiply by ' + k + '".', 'Next: ' + seq[4] + ' × ' + k + ' = ' + nx + '.', 'Notice: every number is ' + (a % 2 === 0 || k % 2 === 0 ? 'even after the first steps, because multiplying by an even number makes an even number.' : 'odd, because odd × odd is always odd.')] }; }
    for (i = 0; i < 5; i++) seq.push(a + k * i); var next = a + 5 * k;
    if (t === 1) { var n = S.int(8, 12), val = a + k * (n - 1);
      return { skill: 'patterns', kind: 'num', q: 'A pattern starts at ' + a + ' and the rule is "add ' + k + '". What is the ' + ord(n) + ' number in the pattern?', a: String(val), hint: 'Write the pattern out, or think: the ' + ord(n) + ' number has ' + (n - 1) + ' jumps of ' + k + ' after the start.',
        steps: ['Start: ' + a + '. Each jump adds ' + k + '.', 'The 1st number has 0 jumps, the 2nd has 1 jump, so the ' + ord(n) + ' number has ' + (n - 1) + ' jumps.', (n - 1) + ' jumps × ' + k + ' = ' + (k * (n - 1)) + '.', a + ' + ' + (k * (n - 1)) + ' = ' + val + '.', 'Check by listing: ' + Array.from({ length: n }, function (_, j) { return a + k * j; }).join(', ') + '.'] }; }
    return { skill: 'patterns', kind: 'num', q: 'What comes next? ' + seq.join(', ') + ', __', a: String(next), hint: 'Find how much each number grows.',
      steps: ['Subtract neighbors: ' + seq[1] + ' − ' + seq[0] + ' = ' + k + ', ' + seq[2] + ' − ' + seq[1] + ' = ' + k + '.', 'The rule is "add ' + k + '".', 'Next: ' + seq[4] + ' + ' + k + ' = ' + next + '.', (k % 2 === 0 ? 'Adding an even number keeps odd numbers odd and even numbers even, so every number has the same odd/even type as ' + a + '.' : 'Adding an odd number flips odd and even each time, so the pattern goes back and forth between odd and even.')] };
  });

  // ---------------- MULTI-DIGIT MULTIPLY / DIVIDE ----------------
  Gen.add('mult-4x1', function (S) {
    var a = S.int(1012, 9876), b = S.int(2, 9), ds = Gen.digits(a), parts = [];
    ds.forEach(function (d, i) { var pv = Math.pow(10, ds.length - 1 - i); if (d) parts.push({ v: d * pv, p: d * pv * b }); });
    return { skill: 'mult-4x1', kind: 'num', q: fmt(a) + ' × ' + b + ' = ?', a: String(a * b), hint: 'Break ' + fmt(a) + ' into thousands, hundreds, tens, and ones. Multiply each part by ' + b + ', then add.',
      steps: ['Break apart ' + fmt(a) + ' = ' + parts.map(function (p) { return fmt(p.v); }).join(' + ') + '.'].concat(parts.map(function (p) { return fmt(p.v) + ' × ' + b + ' = ' + fmt(p.p) + '.'; })).concat(['Add the partial products: ' + parts.map(function (p) { return fmt(p.p); }).join(' + ') + ' = ' + fmt(a * b) + '.', 'Estimate to check: ' + fmt(Math.round(a / 1000) * 1000) + ' × ' + b + ' = ' + fmt(Math.round(a / 1000) * 1000 * b) + ', which is close. ✓']) };
  });
  // long division steps for any divisor
  function longDiv(n, d) {
    var ds = String(n).split('').map(Number), steps = [], cur = 0, q = '', started = false;
    ds.forEach(function (x, i) {
      cur = cur * 10 + x; var place = PLACES[ds.length - 1 - i], qd = Math.floor(cur / d);
      if (!started && qd === 0 && i < ds.length - 1) { steps.push('Look at ' + cur + ' (' + place + '). ' + d + ' does not fit into ' + cur + ', so combine it with the next digit.'); return; }
      started = true; q += String(qd);
      steps.push((i === 0 || steps.length === 0 ? '' : 'Bring down the ' + x + '. ') + 'Divide: ' + cur + ' ÷ ' + d + ' = ' + qd + (qd ? ' (' + d + ' × ' + qd + ' = ' + (d * qd) + ')' : '') + '. Write ' + qd + ' in the ' + place + ' place. Subtract: ' + cur + ' − ' + (d * qd) + ' = ' + (cur - d * qd) + '.');
      cur = cur - d * qd;
    });
    return { steps: steps, q: Math.floor(n / d), r: n % d };
  }
  Gen.add('div-4x1', function (S) {
    var d = S.int(2, 9), q = S.int(Math.ceil(1000 / d), Math.floor(9999 / d)), n = d * q, L = longDiv(n, d);
    return { skill: 'div-4x1', kind: 'num', q: fmt(n) + ' ÷ ' + d + ' = ?', a: String(q), hint: 'Divide one place at a time from the left: divide, multiply, subtract, bring down.',
      steps: ['Set up ' + fmt(n) + ' ÷ ' + d + '. Work from the LEFT, one place at a time: divide, multiply, subtract, bring down.'].concat(L.steps).concat(['The answer is ' + fmt(q) + '.', 'Check: ' + fmt(q) + ' × ' + d + ' = ' + fmt(n) + ' ✓']) };
  });
  Gen.add('div-4x1-rem', function (S) {
    var d = S.int(3, 9), q = S.int(Math.ceil(500 / d), Math.floor(9000 / d)), r = S.int(1, d - 1), n = d * q + r, L = longDiv(n, d);
    return { skill: 'div-remainder', kind: 'text', q: fmt(n) + ' ÷ ' + d + ' = ?  (answer like “' + q + ' R' + r + '”)', a: q + ' R' + r, hint: 'Divide place by place. Whatever is left at the end is the remainder, and it must be smaller than ' + d + '.',
      steps: ['Set up ' + fmt(n) + ' ÷ ' + d + ' and work from the left.'].concat(L.steps).concat(['Nothing is left to bring down, so the ' + r + ' left over is the remainder. (' + r + ' is less than ' + d + ', good.)', 'Answer: ' + q + ' R' + r + '.', 'Check: ' + q + ' × ' + d + ' + ' + r + ' = ' + fmt(n) + ' ✓']) };
  });
  Gen.add('rem-word', function (S) {
    var nm = S.pick(NAMES), d = S.int(3, 8), q = S.int(4, 15), r = S.int(1, d - 1), n = d * q + r, t = S.int(0, 2);
    var base = [n + ' ÷ ' + d + ': ' + d + ' × ' + q + ' = ' + (d * q) + ', and ' + n + ' − ' + (d * q) + ' = ' + r + '. So ' + n + ' ÷ ' + d + ' = ' + q + ' R' + r + '.'];
    if (t === 0) return { skill: 'rem-word', kind: 'num', q: n + ' students are going on a trip. Each van holds ' + d + ' students. How many vans are needed so that everyone can go?', a: String(q + 1), hint: 'Divide, then think: what happens to the students who are left over?',
      steps: ['We need to share ' + n + ' students into vans of ' + d + ', so divide.'].concat(base).concat([q + ' vans are full, but ' + r + ' student' + (r > 1 ? 's are' : ' is') + ' still waiting!', 'Nobody can be left behind, so we need one more van: ' + q + ' + 1 = ' + (q + 1) + '.', 'Answer: ' + (q + 1) + ' vans. (Here the remainder makes us ROUND UP.)']) };
    if (t === 1) return { skill: 'rem-word', kind: 'num', q: nm + ' has ' + n + ' cookies and packs them in bags of ' + d + '. How many FULL bags can ' + nm + ' make?', a: String(q), hint: 'Only full bags count. What do you do with the leftover cookies?',
      steps: ['Bags of ' + d + ' means divide by ' + d + '.'].concat(base).concat(['There are ' + q + ' full bags, and ' + r + ' cookie' + (r > 1 ? 's' : '') + ' left over that cannot fill a bag.', 'The question asks for FULL bags, so we drop the remainder.', 'Answer: ' + q + ' full bags.']) };
    return { skill: 'rem-word', kind: 'num', q: nm + ' shares ' + n + ' stickers equally among ' + d + ' friends and keeps the extras. How many stickers does ' + nm + ' keep?', a: String(r), hint: 'Divide. The extras are the remainder.',
      steps: ['Sharing equally among ' + d + ' means divide by ' + d + '.'].concat(base).concat(['Each friend gets ' + q + '. The ' + r + ' left over are the extras.', 'The question asks how many ' + nm + ' keeps, which is the REMAINDER.', 'Answer: ' + r + ' stickers.']) };
  });
  Gen.add('mult-multi', function (S) {
    var big = S.r() < 0.5, a = big ? S.int(102, 989) : S.int(1012, 4999), b = S.int(12, 89), bt = Math.floor(b / 10) * 10, bo = b % 10;
    return { skill: 'mult-multi', kind: 'num', q: fmt(a) + ' × ' + b + ' = ?', a: String(a * b), hint: 'Multiply ' + fmt(a) + ' by the ONES of ' + b + ', then by the TENS (put a 0 first), then add the two rows.',
      steps: ['Split ' + b + ' into ' + bt + ' + ' + bo + '.', 'Row 1 (ones): ' + fmt(a) + ' × ' + bo + ' = ' + fmt(a * bo) + '.', 'Row 2 (tens): ' + fmt(a) + ' × ' + bt + ' = ' + fmt(a * bt) + '. (Multiply by ' + (bt / 10) + ', then put a 0 on the end because it is tens.)', 'Add the rows: ' + fmt(a * bt) + ' + ' + fmt(a * bo) + ' = ' + fmt(a * b) + '.', 'Estimate to check: about ' + fmt(Math.round(a / 100) * 100) + ' × ' + (Math.round(b / 10) * 10) + ' = ' + fmt(Math.round(a / 100) * 100 * Math.round(b / 10) * 10) + '. Close! ✓'] };
  });
  Gen.add('div-4x2', function (S) {
    var d = S.int(11, 39), q = S.int(Math.ceil(100 / d) + 3, Math.floor(4999 / d)), withR = S.r() < 0.4, r = withR ? S.int(1, d - 1) : 0, n = d * q + r, L = longDiv(n, d);
    var est = Math.round(d / 10) * 10;
    return { skill: 'div-4x2', kind: withR ? 'text' : 'num', q: fmt(n) + ' ÷ ' + d + ' = ?' + (withR ? '  (answer like “' + q + ' R' + r + '”)' : ''), a: withR ? q + ' R' + r : String(q), hint: 'Round ' + d + ' to ' + est + ' to estimate each digit, then multiply to check it fits.',
      steps: ['Set up ' + fmt(n) + ' ÷ ' + d + '. Tip: think of ' + d + ' as about ' + est + ' to guess each digit, then check by multiplying ' + d + '.'].concat(L.steps).concat([withR ? 'Remainder ' + r + ' (smaller than ' + d + ').' : 'No remainder.', 'Answer: ' + (withR ? q + ' R' + r : fmt(q)) + '.', 'Check: ' + fmt(q) + ' × ' + d + (withR ? ' + ' + r : '') + ' = ' + fmt(n) + ' ✓']) };
  });

  // ---------------- FRACTIONS (4th) ----------------
  var DEN4 = [2, 3, 4, 5, 6, 8, 10, 12];
  Gen.add('frac-equiv', function (S) {
    var b = S.pick([2, 3, 4, 5, 6]), a = S.int(1, b - 1), k = S.int(2, 4), c = b * k;
    return { skill: 'frac-equiv', kind: 'num', pic: { t: 'frac', bars: [[a, b], [0, c]] }, q: a + '/' + b + ' = ?/' + c, a: String(a * k), hint: 'What do you multiply ' + b + ' by to get ' + c + '? Do the same to the top.',
      steps: ['Equivalent fractions name the same amount. The picture shows ' + a + '/' + b + ' and a bar cut into ' + c + ' equal parts.', 'Find the multiplier: ' + b + ' × ' + k + ' = ' + c + '. Each part was cut into ' + k + ' smaller pieces.', 'Whatever you do to the bottom, do to the top: ' + a + ' × ' + k + ' = ' + (a * k) + '.', 'So ' + a + '/' + b + ' = ' + (a * k) + '/' + c + '. The amount shaded is the same; it just has more, smaller pieces.'] };
  });
  Gen.add('frac-compare', function (S) {
    var b = S.pick(DEN4), d = S.pick(DEN4), a = S.int(1, b - 1), c = S.int(1, d - 1); if (b === d && a === c) c = c === d - 1 ? c - 1 || 1 : c + 1;
    var L = lcm(b, d), A = a * L / b, C = c * L / d, ans = A > C ? '>' : A < C ? '<' : '=';
    return { skill: 'frac-compare', kind: 'text', at: 'choice', choices: ['>', '<', '='], pic: { t: 'frac', bars: [[a, b], [c, d]] }, q: 'Compare: ' + a + '/' + b + '  ?  ' + c + '/' + d + '   (pick >, <, or =)', a: ans,
      hint: 'Make the bottoms the same, or compare each to 1/2.',
      steps: ['To compare, rename both fractions with the same denominator (bottom number).', 'A common denominator of ' + b + ' and ' + d + ' is ' + L + '.', a + '/' + b + ' = ' + A + '/' + L + ' (multiply top and bottom by ' + (L / b) + ').', c + '/' + d + ' = ' + C + '/' + L + ' (multiply top and bottom by ' + (L / d) + ').', 'Now compare the tops: ' + A + ' ' + ans + ' ' + C + ', so ' + a + '/' + b + ' ' + ans + ' ' + c + '/' + d + '.', 'The picture agrees: look at how much of each bar is shaded.'] };
  });
  Gen.add('frac-add-like', function (S) {
    var d = S.pick(DEN4), a = S.int(1, d - 1), b = S.int(1, d - 1), s = a + b;
    return { skill: 'frac-add', kind: 'text', at: 'frac', pic: { t: 'frac', bars: [[a, d], [b, d]] }, q: a + '/' + d + ' + ' + b + '/' + d + ' = ?', a: fr(s, d), hint: 'The pieces are the same size (' + d + 'ths), so just add how many pieces.',
      steps: ['Both fractions are in ' + d + 'ths, so the pieces are the same size.', 'Add the tops (how many pieces): ' + a + ' + ' + b + ' = ' + s + '.', 'Keep the bottom the same. The answer is ' + fr(s, d) + '.', s > d ? fr(s, d) + ' is more than 1 whole. As a mixed number it is ' + mixedText(s, d) + '.' : (gcd(s, d) > 1 ? 'You can also simplify it: ' + fr(s, d) + ' = ' + mixedText(s, d) + '.' : fr(s, d) + ' cannot be simplified.'), 'Any equal form is correct, like ' + frText(s, d) + '.'] };
  });
  Gen.add('frac-sub-like', function (S) {
    var d = S.pick(DEN4), a = S.int(2, d), b = S.int(1, a - 1), s = a - b;
    return { skill: 'frac-sub', kind: 'text', at: 'frac', pic: { t: 'frac', bars: [[a, d]] }, q: a + '/' + d + ' − ' + b + '/' + d + ' = ?', a: fr(s, d), hint: 'Same size pieces. Take away ' + b + ' pieces from ' + a + ' pieces.',
      steps: ['Both fractions are in ' + d + 'ths, so the pieces are the same size.', 'Subtract the tops: ' + a + ' − ' + b + ' = ' + s + '.', 'Keep the bottom: ' + fr(s, d) + '.', gcd(s, d) > 1 ? 'Simplified, that is ' + mixedText(s, d) + '. Either answer is correct.' : 'That is the answer: ' + fr(s, d) + '.'] };
  });
  Gen.add('mixed-add', function (S) {
    var d = S.pick([3, 4, 5, 6, 8]), w1 = S.int(1, 5), w2 = S.int(1, 4), a = S.int(1, d - 1), b = S.int(1, d - 1), sub = S.r() < 0.4;
    if (sub) { if (w1 <= w2) w1 = w2 + 1; if (a < b) { var t = a; a = b; b = t; } if (a === b) b = Math.max(1, a - 1); if (a === b) { a = d - 1; b = 1; } }
    var top = sub ? (w1 * d + a) - (w2 * d + b) : (w1 * d + a) + (w2 * d + b), ans = mixedText(top, d);
    var stepsAdd = ['Add the whole numbers: ' + w1 + ' + ' + w2 + ' = ' + (w1 + w2) + '.', 'Add the fractions: ' + a + '/' + d + ' + ' + b + '/' + d + ' = ' + (a + b) + '/' + d + '.', (a + b) >= d ? (a + b) + '/' + d + ' is 1 whole and ' + (a + b - d) + '/' + d + ' more, so add 1 to the whole number: ' + (w1 + w2 + 1) + ' ' + (a + b - d ? (a + b - d) + '/' + d : '') + '.' : 'Put them together: ' + (w1 + w2) + ' ' + (a + b) + '/' + d + '.', 'Answer: ' + ans + '.'];
    var stepsSub = ['Subtract the whole numbers: ' + w1 + ' − ' + w2 + ' = ' + (w1 - w2) + '.', 'Subtract the fractions: ' + a + '/' + d + ' − ' + b + '/' + d + ' = ' + (a - b) + '/' + d + '.', 'Put them together: ' + (w1 - w2) + ' ' + (a - b) + '/' + d + '.', 'Answer: ' + ans + '. (Any equal form is correct.)'];
    return { skill: 'mixed-numbers', kind: 'text', at: 'frac', q: w1 + ' ' + a + '/' + d + (sub ? ' − ' : ' + ') + w2 + ' ' + b + '/' + d + ' = ?   (answer like “3 1/4”)', a: ans, hint: 'Work with the whole numbers and the fractions separately.', steps: sub ? stepsSub : stepsAdd };
  });
  Gen.add('frac-times-whole', function (S) {
    var d = S.pick([2, 3, 4, 5, 6, 8, 10]), a = S.int(1, d - 1), n = S.int(2, 6), top = a * n;
    return { skill: 'frac-times-whole', kind: 'text', at: 'frac', q: n + ' × ' + a + '/' + d + ' = ?', a: fr(top, d), hint: n + ' × ' + a + '/' + d + ' means ' + n + ' groups of ' + a + '/' + d + '. Add them up.',
      steps: [n + ' × ' + a + '/' + d + ' means ' + n + ' groups of ' + a + '/' + d + '.', 'Repeated addition: ' + Array(n + 1).join(a + '/' + d + ' + ').replace(/ \+ $/, '') + '.', 'Multiply the top by ' + n + ': ' + n + ' × ' + a + ' = ' + top + '. The bottom stays ' + d + ': ' + fr(top, d) + '.', top >= d ? 'As a mixed number: ' + mixedText(top, d) + '. Either form is correct.' : 'Answer: ' + fr(top, d) + '.'] };
  });
  Gen.add('dec-tenths', function (S) {
    var t = S.int(0, 2);
    if (t === 0) { var a = S.int(1, 9); return { skill: 'decimals', kind: 'num', pic: { t: 'grid100', n: a * 10 }, q: '0.' + a + ' = ?/100', a: String(a * 10), hint: 'One tenth is the same as ten hundredths.',
      steps: ['0.' + a + ' means ' + a + (a === 1 ? ' tenth' : ' tenths') + ' (' + a + '/10).', 'Each tenth is a column of 10 small squares on a hundreds grid, so ' + a + (a === 1 ? ' tenth' : ' tenths') + ' = ' + (a * 10) + ' hundredths.', 'Multiply top and bottom by 10: ' + a + '/10 = ' + (a * 10) + '/100.', 'Answer: ' + (a * 10) + '.'] }; }
    if (t === 1) { var b = S.int(1, 99); return { skill: 'decimals', kind: 'text', at: 'dec', pic: { t: 'grid100', n: b }, q: 'Write ' + b + '/100 as a decimal.', a: dec(b / 100), hint: 'The second place after the decimal point is the hundredths place.',
      steps: [b + '/100 means ' + b + ' hundredths.', 'The places after the decimal point are tenths, then hundredths.', b < 10 ? 'With only ' + b + ' hundredths, there are 0 tenths, so write 0.0' + b + '.' : b + ' hundredths = ' + Math.floor(b / 10) + ' tenths and ' + (b % 10) + ' hundredths, so write 0.' + (b < 10 ? '0' + b : b) + '.', 'Answer: ' + dec(b / 100) + '.'] }; }
    var x = S.int(1, 8), y = S.int(1, 99 - x * 10), sum = x * 10 + y;
    return { skill: 'decimals', kind: 'num', q: x + '/10 + ' + y + '/100 = ?/100', a: String(sum), hint: 'Change tenths into hundredths first, then add.',
      steps: ['To add, the pieces must be the same size. Change ' + x + '/10 into hundredths.', x + '/10 = ' + (x * 10) + '/100 (multiply top and bottom by 10).', 'Now add: ' + (x * 10) + '/100 + ' + y + '/100 = ' + sum + '/100.', 'As a decimal that is ' + dec(sum / 100) + '.'] };
  });
  Gen.add('dec-compare', function (S) {
    var a = S.int(1, 99) / 100, b = S.int(1, 9) / 10; if (S.r() < 0.5) b = S.int(1, 99) / 100; if (a === b) b = Math.min(0.99, Math.round((b + 0.1) * 100) / 100);
    var A = dec(a), B = dec(b), ans = a > b ? '>' : a < b ? '<' : '=';
    return { skill: 'decimal-compare', kind: 'text', at: 'choice', choices: ['>', '<', '='], q: 'Compare: ' + A + '  ?  ' + B + '   (pick >, <, or =)', a: ans, hint: 'Write both with two decimal places, like 0.40 and 0.35, then compare.',
      steps: ['Line up the decimal points and give both numbers the same number of places.', A + ' = ' + dec(a, 2) + ' and ' + B + ' = ' + dec(b, 2) + '.', 'Now they are both in hundredths: ' + Math.round(a * 100) + ' hundredths and ' + Math.round(b * 100) + ' hundredths.', Math.round(a * 100) + ' ' + ans + ' ' + Math.round(b * 100) + ', so ' + A + ' ' + ans + ' ' + B + '.', 'Watch out: a number with more digits is NOT always bigger. 0.5 is bigger than 0.45.'] };
  });

  // ---------------- MEASUREMENT, AREA, ANGLES, GEOMETRY ----------------
  var CONV = [['feet', 'inches', 12], ['yards', 'feet', 3], ['yards', 'inches', 36], ['hours', 'minutes', 60], ['minutes', 'seconds', 60], ['days', 'hours', 24], ['weeks', 'days', 7], ['pounds', 'ounces', 16], ['kilograms', 'grams', 1000], ['kilometers', 'meters', 1000], ['meters', 'centimeters', 100], ['liters', 'milliliters', 1000], ['gallons', 'quarts', 4], ['quarts', 'pints', 2], ['pints', 'cups', 2]];
  Gen.add('measure-convert', function (S) {
    var c = S.pick(CONV), n = S.int(2, c[2] >= 100 ? 9 : 12);
    if (S.r() < 0.35 && c[2] <= 60) { var extra = S.int(1, c[2] - 1);
      return { skill: 'measurement', kind: 'num', q: n + ' ' + c[0] + ' ' + extra + ' ' + c[1] + ' = ? ' + c[1], a: String(n * c[2] + extra), hint: 'Change the ' + c[0] + ' to ' + c[1] + ' first, then add the extra ' + extra + '.',
        steps: ['1 ' + c[0].replace(/s$/, '') + ' = ' + c[2] + ' ' + c[1] + '.', 'Change ' + n + ' ' + c[0] + ' to ' + c[1] + ': ' + n + ' × ' + c[2] + ' = ' + (n * c[2]) + ' ' + c[1] + '.', 'Add the extra ' + extra + ': ' + (n * c[2]) + ' + ' + extra + ' = ' + (n * c[2] + extra) + ' ' + c[1] + '.'] }; }
    return { skill: 'measurement', kind: 'num', q: n + ' ' + c[0] + ' = ? ' + c[1], a: String(n * c[2]), hint: 'Going from a bigger unit to a smaller unit, you need MORE of them, so multiply.',
      steps: ['1 ' + c[0].replace(/s$/, '') + ' = ' + c[2] + ' ' + c[1] + '.', c[1] + ' are smaller, so there will be MORE of them. Multiply.', n + ' × ' + c[2] + ' = ' + fmt(n * c[2]) + '.', 'Answer: ' + n + ' ' + c[0] + ' = ' + fmt(n * c[2]) + ' ' + c[1] + '.'] };
  });
  Gen.add('area-perim', function (S) {
    var w = S.int(3, 15), hh = S.int(2, 12), t = S.int(0, 3), u = S.pick(['cm', 'm', 'in', 'ft']);
    if (t === 0) return { skill: 'area', kind: 'num', pic: { t: 'rect', w: w, h: hh, u: u }, q: 'A rectangle is ' + w + ' ' + u + ' long and ' + hh + ' ' + u + ' wide. What is its AREA in square ' + u + '?', a: String(w * hh), hint: 'Area is how many squares cover it: length × width.',
      steps: ['AREA is the space inside, counted in square units.', 'For a rectangle, area = length × width.', w + ' × ' + hh + ' = ' + (w * hh) + '.', 'Answer: ' + (w * hh) + ' square ' + u + '.'] };
    if (t === 1) return { skill: 'perimeter', kind: 'num', pic: { t: 'rect', w: w, h: hh, u: u }, q: 'A rectangle is ' + w + ' ' + u + ' long and ' + hh + ' ' + u + ' wide. What is its PERIMETER in ' + u + '?', a: String(2 * (w + hh)), hint: 'Perimeter is the distance all the way around: add all four sides.',
      steps: ['PERIMETER is the distance around the outside.', 'A rectangle has two long sides (' + w + ') and two short sides (' + hh + ').', w + ' + ' + hh + ' + ' + w + ' + ' + hh + ' = ' + (2 * (w + hh)) + '.', 'Shortcut: 2 × (' + w + ' + ' + hh + ') = 2 × ' + (w + hh) + ' = ' + (2 * (w + hh)) + '.', 'Answer: ' + (2 * (w + hh)) + ' ' + u + '.'] };
    if (t === 2) return { skill: 'area', kind: 'num', pic: { t: 'rect', w: w, h: '?', u: u }, q: 'A rectangle has an area of ' + (w * hh) + ' square ' + u + '. One side is ' + w + ' ' + u + '. How long is the other side?', a: String(hh), hint: 'Area = length × width, so ' + w + ' × ? = ' + (w * hh) + '.',
      steps: ['Area = length × width.', 'So ' + w + ' × ? = ' + (w * hh) + '.', 'Divide to find the missing side: ' + (w * hh) + ' ÷ ' + w + ' = ' + hh + '.', 'Check: ' + w + ' × ' + hh + ' = ' + (w * hh) + ' ✓'] };
    return { skill: 'perimeter', kind: 'num', pic: { t: 'rect', w: w, h: '?', u: u }, q: 'A rectangle has a perimeter of ' + (2 * (w + hh)) + ' ' + u + '. Its length is ' + w + ' ' + u + '. What is its width?', a: String(hh), hint: 'Two lengths plus two widths make the perimeter.',
      steps: ['Perimeter = 2 lengths + 2 widths.', 'The two lengths: 2 × ' + w + ' = ' + (2 * w) + '.', 'What is left for the two widths: ' + (2 * (w + hh)) + ' − ' + (2 * w) + ' = ' + (2 * hh) + '.', 'One width: ' + (2 * hh) + ' ÷ 2 = ' + hh + '.', 'Answer: ' + hh + ' ' + u + '.'] };
  });
  Gen.add('angles', function (S) {
    var t = S.int(0, 3), tot = t === 0 ? 90 : t === 1 ? 180 : t === 2 ? 360 : 0;
    if (t === 3) { var a = S.int(15, 80), b = S.int(15, 80);
      return { skill: 'angles', kind: 'num', pic: { t: 'angle', parts: [a, b], label: [a + '°', b + '°'] }, q: 'Angle ABC is made of two smaller angles that measure ' + a + '° and ' + b + '°. What does angle ABC measure?', a: String(a + b), hint: 'When angles sit side by side, their measures add.',
        steps: ['Angles that share a side and do not overlap ADD together.', a + '° + ' + b + '° = ' + (a + b) + '°.', 'Answer: ' + (a + b) + ' degrees.', (a + b) < 90 ? 'It is less than 90°, so angle ABC is acute.' : (a + b) === 90 ? 'It is exactly 90°, a right angle.' : 'It is more than 90°, so angle ABC is obtuse.'] }; }
    var k = S.int(15, tot - 15); if (t === 2) k = S.int(100, 300);
    var name = t === 0 ? 'a right angle (a square corner)' : t === 1 ? 'a straight line' : 'a full circle around a point';
    return { skill: 'angles', kind: 'num', pic: { t: 'angle', parts: [k, tot - k], label: [k + '°', '?'], whole: tot }, q: 'Two angles together make ' + name + '. One angle is ' + k + '°. What is the other angle?', a: String(tot - k), hint: name.charAt(0).toUpperCase() + name.slice(1) + ' is ' + tot + '°.',
      steps: [name.charAt(0).toUpperCase() + name.slice(1) + ' measures ' + tot + '°.', 'The two angles must add up to ' + tot + '°: ' + k + '° + ? = ' + tot + '°.', 'Subtract: ' + tot + ' − ' + k + ' = ' + (tot - k) + '.', 'Answer: ' + (tot - k) + ' degrees. Check: ' + k + ' + ' + (tot - k) + ' = ' + tot + ' ✓'] };
  });
  var SYM = [['a square', 4], ['a rectangle (not a square)', 2], ['an equilateral triangle', 3], ['the capital letter H', 2], ['the capital letter A', 1], ['the capital letter F', 0], ['a regular hexagon', 6], ['an isosceles triangle (two equal sides)', 1], ['a regular pentagon', 5], ['the capital letter S', 0]];
  Gen.add('geometry', function (S) {
    var t = S.int(0, 2);
    if (t === 0) { var deg = S.pick([S.int(10, 85), 90, S.int(95, 175), 180]), ans = deg < 90 ? 'acute' : deg === 90 ? 'right' : deg < 180 ? 'obtuse' : 'straight';
      return { skill: 'geometry', kind: 'text', at: 'choice', choices: ['acute', 'right', 'obtuse', 'straight'], pic: { t: 'angle', parts: [deg], label: [deg + '°'] }, q: 'An angle measures ' + deg + '°. What kind of angle is it?', a: ans, hint: 'Compare it to 90° (a square corner) and 180° (a straight line).',
        steps: ['ACUTE: less than 90°. RIGHT: exactly 90°. OBTUSE: more than 90° but less than 180°. STRAIGHT: exactly 180°.', 'This angle is ' + deg + '°.', deg < 90 ? deg + ' is less than 90, so it is ACUTE (think "a cute little angle").' : deg === 90 ? 'It is exactly 90°, a RIGHT angle, like the corner of a book.' : deg < 180 ? deg + ' is between 90 and 180, so it is OBTUSE (wider than a corner).' : 'It is exactly 180°, a STRAIGHT angle: it makes a line.'] }; }
    if (t === 1) { var A = S.int(20, 80), B = S.int(20, 80), tri = S.r() < 0.33 ? 'right' : S.r() < 0.5 ? 'obtuse' : 'acute', a2, b2, c2;
      if (tri === 'right') { a2 = 90; b2 = S.int(20, 70); c2 = 90 - b2; } else if (tri === 'obtuse') { a2 = S.int(95, 140); b2 = S.int(10, 180 - a2 - 10); c2 = 180 - a2 - b2; } else { a2 = S.int(50, 80); b2 = S.int(50, 80); c2 = 180 - a2 - b2; if (c2 >= 90 || c2 <= 0) { a2 = 60; b2 = 70; c2 = 50; } }
      return { skill: 'geometry', kind: 'text', at: 'choice', choices: ['acute triangle', 'right triangle', 'obtuse triangle'], q: 'A triangle has angles of ' + a2 + '°, ' + b2 + '°, and ' + c2 + '°. What kind of triangle is it?', a: tri + ' triangle', hint: 'Look for an angle that is exactly 90° or more than 90°.',
        steps: ['Triangles are named by their biggest angle.', 'RIGHT triangle: one angle is exactly 90°. OBTUSE triangle: one angle is more than 90°. ACUTE triangle: all three angles are less than 90°.', 'The angles are ' + a2 + '°, ' + b2 + '°, ' + c2 + '° (they add to 180°, like every triangle).', tri === 'right' ? 'One angle is 90°, so it is a RIGHT triangle.' : tri === 'obtuse' ? a2 + '° is more than 90°, so it is an OBTUSE triangle.' : 'All three are less than 90°, so it is an ACUTE triangle.'] }; }
    var sh = S.pick(SYM), opts = ['0', '1', '2', '3', '4', '5', '6'].filter(function (x) { return Math.abs(+x - sh[1]) <= 2; }).slice(0, 4); if (opts.indexOf(String(sh[1])) < 0) opts[0] = String(sh[1]);
    return { skill: 'symmetry', kind: 'text', at: 'choice', choices: opts, q: 'How many lines of symmetry does ' + sh[0] + ' have?', a: String(sh[1]), hint: 'A line of symmetry folds a shape into two halves that match exactly. Imagine folding it.',
      steps: ['A LINE OF SYMMETRY is a fold line where both halves match exactly.', 'Picture ' + sh[0] + ' and try folding it up and down, side to side, and corner to corner.', sh[1] === 0 ? 'No fold makes the halves match, so it has 0 lines of symmetry.' : 'There ' + (sh[1] === 1 ? 'is 1 fold' : 'are ' + sh[1] + ' different folds') + ' where the halves match.', 'Answer: ' + sh[1] + '.'] };
  });

  // ---------------- 5th GRADE: powers of ten, order of operations, decimals ----------------
  Gen.add('powers10', function (S) {
    var t = S.int(0, 3);
    if (t === 0) { var e = S.int(2, 5), v = Math.pow(10, e); return { skill: 'exponents', kind: 'num', q: '10 to the power of ' + e + ' (10^' + e + ') = ?', a: String(v), hint: 'The exponent tells how many 10s to multiply together.', steps: ['10^' + e + ' means ' + Array(e + 1).join('10 × ').replace(/ × $/, '') + '.', 'Each × 10 adds a zero, so there are ' + e + ' zeros.', 'Answer: ' + fmt(v) + '.'] }; }
    var x = S.int(1, 999) / 10, p = S.pick([10, 100, 1000]), z = String(p).length - 1;
    if (t === 1) { var r = Math.round(x * p * 1000) / 1000; return { skill: 'powers10', kind: 'text', at: 'dec', q: d2(x) + ' × ' + fmt(p) + ' = ?', a: d2(r), hint: 'Multiplying by ' + fmt(p) + ' moves every digit ' + z + ' place' + (z > 1 ? 's' : '') + ' to the LEFT (the number gets bigger).', steps: [fmt(p) + ' has ' + z + ' zero' + (z > 1 ? 's' : '') + '.', 'Multiplying by ' + fmt(p) + ' makes the number ' + fmt(p) + ' times bigger, so move the decimal point ' + z + ' place' + (z > 1 ? 's' : '') + ' to the RIGHT.', d2(x) + ' → ' + fmt(r) + '.', 'Answer: ' + fmt(r) + '.'] }; }
    var n = S.int(1, 9999), q2 = n / p; return { skill: 'powers10', kind: 'text', at: 'dec', q: fmt(n) + ' ÷ ' + fmt(p) + ' = ?', a: d2(q2), hint: 'Dividing by ' + fmt(p) + ' moves the decimal point ' + z + ' place' + (z > 1 ? 's' : '') + ' to the LEFT.', steps: ['Dividing by ' + fmt(p) + ' makes the number ' + fmt(p) + ' times smaller.', 'Move the decimal point ' + z + ' place' + (z > 1 ? 's' : '') + ' to the LEFT. (' + n + ' is the same as ' + n + '.0)', fmt(n) + ' → ' + d2(q2) + '.', 'Answer: ' + d2(q2) + '.'] };
  });
  Gen.add('order-ops', function (S) {
    var a = S.int(2, 9), b = S.int(2, 9), c = S.int(2, 9), d = S.int(1, 9), t = S.int(0, 3), q, ans, steps;
    if (t === 0) { q = a + ' + ' + b + ' × ' + c; ans = a + b * c; steps = ['Order of operations: Parentheses first, then × and ÷ (left to right), then + and − (left to right).', 'No parentheses. Multiply first: ' + b + ' × ' + c + ' = ' + (b * c) + '.', 'Then add: ' + a + ' + ' + (b * c) + ' = ' + ans + '.', 'Careful: adding first would give the wrong answer ' + ((a + b) * c) + '.']; }
    else if (t === 1) { q = '(' + a + ' + ' + b + ') × ' + c; ans = (a + b) * c; steps = ['Parentheses first: ' + a + ' + ' + b + ' = ' + (a + b) + '.', 'Then multiply: ' + (a + b) + ' × ' + c + ' = ' + ans + '.', 'Parentheses change the order, so this answer is different from ' + a + ' + ' + b + ' × ' + c + ' = ' + (a + b * c) + '.']; }
    else if (t === 2) { var big = Math.max(b, c) + d, sm = Math.min(b, c); q = a + ' × (' + big + ' − ' + sm + ') + ' + d; ans = a * (big - sm) + d; steps = ['Parentheses first: ' + big + ' − ' + sm + ' = ' + (big - sm) + '.', 'Now it is ' + a + ' × ' + (big - sm) + ' + ' + d + '. Multiply next: ' + a + ' × ' + (big - sm) + ' = ' + (a * (big - sm)) + '.', 'Add last: ' + (a * (big - sm)) + ' + ' + d + ' = ' + ans + '.']; }
    else { var m = a * b; q = m + ' ÷ ' + a + ' + ' + c + ' × ' + d; ans = b + c * d; steps = ['No parentheses. Do × and ÷ first, left to right.', m + ' ÷ ' + a + ' = ' + b + '.', c + ' × ' + d + ' = ' + (c * d) + '.', 'Now add: ' + b + ' + ' + (c * d) + ' = ' + ans + '.']; }
    return { skill: 'order-ops', kind: 'num', q: q + ' = ?', a: String(ans), hint: 'Parentheses first, then multiply/divide, then add/subtract.', steps: steps };
  });
  Gen.add('dec-place', function (S) {
    var w = S.int(1, 99), f = S.int(101, 999); if (f % 10 === 0) f += 1; var s = w + '.' + f, ds = String(f).split(''), i = S.int(0, 2); while (ds[i] === '0') i = (i + 1) % 3;
    var names = ['tenths', 'hundredths', 'thousandths'], val = +ds[i] / Math.pow(10, i + 1);
    return { skill: 'decimal-place', kind: 'text', at: 'dec', pic: { t: 'pvd', s: s }, q: 'In ' + s + ', what is the VALUE of the digit ' + ds[i] + ' in the ' + names[i] + ' place?', a: dec(val), hint: 'After the decimal point the places are tenths, hundredths, thousandths.',
      steps: ['After the decimal point, the places are: tenths (1/10), hundredths (1/100), thousandths (1/1000).', 'In ' + s + ': ' + ds[0] + ' is in the tenths, ' + ds[1] + ' in the hundredths, ' + ds[2] + ' in the thousandths.', 'The ' + ds[i] + ' is in the ' + names[i] + ' place, so its value is ' + ds[i] + ' × ' + ['0.1', '0.01', '0.001'][i] + ' = ' + dec(val) + '.', 'Answer: ' + dec(val) + '.'] };
  });
  Gen.add('dec-round', function (S) {
    var x = S.int(1001, 99999) / 1000, to = S.pick([['whole number', 0], ['tenth', 1], ['hundredth', 2]]), p = Math.pow(10, to[1]), r = Math.round(x * p + 1e-9) / p;
    var s = dec(x, 3), look = +s.replace('.', '').charAt(String(Math.floor(x)).length + to[1]);
    return { skill: 'decimal-round', kind: 'text', at: 'dec', q: 'Round ' + s + ' to the nearest ' + to[0] + '.', a: dec(r, to[1]), hint: 'Look at the digit just to the right of the place you are rounding to.',
      steps: ['Find the ' + (to[1] === 0 ? 'ones' : to[0] + 's') + ' place in ' + s + '.', 'Look one place to the right. That digit is ' + look + '.', look >= 5 ? look + ' is 5 or more, so round UP.' : look + ' is 4 or less, so the digit stays the same.', 'Drop the digits after that place.', 'Answer: ' + dec(r, to[1]) + '.'] };
  });
  Gen.add('dec-compare5', function (S) {
    var a = S.int(100, 999) / 1000, b = S.pick([S.int(10, 99) / 100, S.int(100, 999) / 1000, S.int(1, 9) / 10]); if (a === b) b = Math.round((b + 0.01) * 1000) / 1000;
    var ans = a > b ? '>' : a < b ? '<' : '=';
    return { skill: 'decimal-compare', kind: 'text', at: 'choice', choices: ['>', '<', '='], q: 'Compare: ' + dec(a) + '  ?  ' + dec(b) + '   (pick >, <, or =)', a: ans, hint: 'Write both with three decimal places, then compare like whole numbers.',
      steps: ['Give both numbers three decimal places: ' + dec(a, 3) + ' and ' + dec(b, 3) + '.', 'Compare digit by digit from the left: tenths first, then hundredths, then thousandths.', 'In thousandths: ' + Math.round(a * 1000) + ' ' + ans + ' ' + Math.round(b * 1000) + '.', 'So ' + dec(a) + ' ' + ans + ' ' + dec(b) + '.'] };
  });
  Gen.add('dec-add', function (S) {
    var a = S.int(100, 9999) / 100, b = S.int(10, 999) / S.pick([10, 100]), s = Math.round((a + b) * 100) / 100;
    return { skill: 'decimal-add', kind: 'text', at: 'dec', q: dec(a) + ' + ' + dec(b) + ' = ?', a: dec(s), hint: 'Line up the decimal points. Fill empty places with zeros.',
      steps: ['Line up the decimal points, one above the other.', 'Fill empty places with 0 so both have two decimal places: ' + dec(a, 2) + ' + ' + dec(b, 2) + '.', 'Add like whole numbers, right to left, carrying when a column is 10 or more.', 'Bring the decimal point straight down: ' + dec(s, 2) + '.', 'Answer: ' + dec(s) + '.'] };
  });
  Gen.add('dec-sub', function (S) {
    var a = S.int(500, 9999) / 100, b = S.int(10, Math.floor(a * 100) - 1) / 100, s = Math.round((a - b) * 100) / 100;
    return { skill: 'decimal-sub', kind: 'text', at: 'dec', q: dec(a) + ' − ' + dec(b) + ' = ?', a: dec(s), hint: 'Line up the decimal points and fill empty places with zeros before you subtract.',
      steps: ['Line up the decimal points.', 'Write both with two decimal places: ' + dec(a, 2) + ' − ' + dec(b, 2) + '.', 'Subtract like whole numbers, borrowing when the top digit is smaller.', 'Bring the decimal point straight down: ' + dec(s, 2) + '.', 'Check by adding: ' + dec(s, 2) + ' + ' + dec(b, 2) + ' = ' + dec(a, 2) + ' ✓'] };
  });
  Gen.add('dec-times-whole', function (S) {
    var a = S.int(11, 99) / 10, n = S.int(2, 9), p = Math.round(a * n * 10) / 10;
    return { skill: 'decimal-mult', kind: 'text', at: 'dec', q: dec(a) + ' × ' + n + ' = ?', a: dec(p), hint: 'Multiply as if there were no decimal point, then put back one decimal place.',
      steps: ['Ignore the decimal point for a moment: ' + Math.round(a * 10) + ' × ' + n + ' = ' + Math.round(a * 10 * n) + '.', dec(a) + ' has ONE digit after the decimal point, so the answer needs one too.', Math.round(a * 10 * n) + ' → ' + dec(p, 1) + '.', 'Estimate to check: about ' + Math.round(a) + ' × ' + n + ' = ' + (Math.round(a) * n) + '. Close! ✓'] };
  });
  Gen.add('dec-div-whole', function (S) {
    var n = S.int(2, 9), q = S.int(11, 99) / 10, x = Math.round(q * n * 10) / 10;
    return { skill: 'decimal-div', kind: 'text', at: 'dec', q: dec(x) + ' ÷ ' + n + ' = ?', a: dec(q), hint: 'Divide like whole numbers and keep the decimal point in the same spot.',
      steps: ['Think of ' + dec(x) + ' as ' + Math.round(x * 10) + ' tenths.', Math.round(x * 10) + ' tenths ÷ ' + n + ' = ' + Math.round(q * 10) + ' tenths.', Math.round(q * 10) + ' tenths = ' + dec(q) + '.', 'Check: ' + dec(q) + ' × ' + n + ' = ' + dec(x) + ' ✓'] };
  });

  // ---------------- 5th GRADE fractions ----------------
  var DEN5 = [2, 3, 4, 5, 6, 8, 10, 12];
  function unlike(S) { var b, d; do { b = S.pick(DEN5); d = S.pick(DEN5); } while (b === d); return [b, d]; }
  Gen.add('frac-add-unlike', function (S) {
    var bd = unlike(S), b = bd[0], d = bd[1], a = S.int(1, b - 1), c = S.int(1, d - 1), L = lcm(b, d), A = a * L / b, C = c * L / d;
    return { skill: 'frac-add', kind: 'text', at: 'frac', pic: { t: 'frac', bars: [[a, b], [c, d]] }, q: a + '/' + b + ' + ' + c + '/' + d + ' = ?', a: fr(A + C, L), hint: 'The pieces are different sizes. Find a common denominator first.',
      steps: ['You can only add pieces of the same size, so find a common denominator for ' + b + ' and ' + d + '.', 'The least common multiple of ' + b + ' and ' + d + ' is ' + L + '.', a + '/' + b + ' = ' + A + '/' + L + '   and   ' + c + '/' + d + ' = ' + C + '/' + L + '.', 'Add the tops: ' + A + ' + ' + C + ' = ' + (A + C) + '. The answer is ' + fr(A + C, L) + '.', 'In simplest form: ' + mixedText(A + C, L) + '. Any equal form is correct.'] };
  });
  Gen.add('frac-sub-unlike', function (S) {
    var bd = unlike(S), b = bd[0], d = bd[1], a = S.int(1, b - 1), c = S.int(1, d - 1), L = lcm(b, d), A = a * L / b, C = c * L / d;
    if (A < C) { var t = a; a = c; c = t; t = b; b = d; d = t; A = a * L / b; C = c * L / d; } if (A === C) { a = b - 1; A = a * L / b; if (A <= C) { c = 1; C = L / d; } }
    return { skill: 'frac-sub', kind: 'text', at: 'frac', q: a + '/' + b + ' − ' + c + '/' + d + ' = ?', a: fr(A - C, L), hint: 'Rename both fractions with a common denominator, then subtract the tops.',
      steps: ['Find a common denominator for ' + b + ' and ' + d + ': ' + L + '.', a + '/' + b + ' = ' + A + '/' + L + '   and   ' + c + '/' + d + ' = ' + C + '/' + L + '.', 'Subtract the tops: ' + A + ' − ' + C + ' = ' + (A - C) + '. The answer is ' + fr(A - C, L) + '.', 'In simplest form: ' + mixedText(A - C, L) + '.'] };
  });
  Gen.add('frac-mult', function (S) {
    var b = S.pick([2, 3, 4, 5, 6, 8]), d = S.pick([2, 3, 4, 5, 6]), a = S.int(1, b - 1), c = S.int(1, d - 1), N = a * c, D = b * d;
    return { skill: 'frac-mult', kind: 'text', at: 'frac', q: a + '/' + b + ' × ' + c + '/' + d + ' = ?', a: fr(N, D), hint: 'Multiply top × top and bottom × bottom.',
      steps: [a + '/' + b + ' × ' + c + '/' + d + ' means ' + a + '/' + b + ' OF ' + c + '/' + d + '.', 'Multiply the tops: ' + a + ' × ' + c + ' = ' + N + '.', 'Multiply the bottoms: ' + b + ' × ' + d + ' = ' + D + '.', 'Answer: ' + fr(N, D) + (gcd(N, D) > 1 ? ', which simplifies to ' + mixedText(N, D) + '.' : '.'), 'Makes sense: taking a part of a part gives something smaller than both.'] };
  });
  Gen.add('frac-div-unit', function (S) {
    var b = S.int(2, 9), n = S.int(2, 6);
    if (S.r() < 0.5) return { skill: 'frac-div', kind: 'text', at: 'frac', q: '1/' + b + ' ÷ ' + n + ' = ?', a: fr(1, b * n), hint: 'Share 1/' + b + ' into ' + n + ' equal parts. Each part is smaller.',
      steps: ['1/' + b + ' ÷ ' + n + ' means: split 1/' + b + ' into ' + n + ' equal parts.', 'Each 1/' + b + ' piece gets cut into ' + n + ' smaller pieces, so the whole would have ' + b + ' × ' + n + ' = ' + (b * n) + ' pieces.', 'One of those pieces is 1/' + (b * n) + '.', 'Check: 1/' + (b * n) + ' × ' + n + ' = ' + n + '/' + (b * n) + ' = 1/' + b + ' ✓'] };
    return { skill: 'frac-div', kind: 'num', q: n + ' ÷ 1/' + b + ' = ?', a: String(n * b), hint: 'How many 1/' + b + ' pieces fit into ' + n + ' wholes?',
      steps: [n + ' ÷ 1/' + b + ' asks: how many pieces of size 1/' + b + ' fit in ' + n + ' wholes?', 'Each whole holds ' + b + ' pieces of 1/' + b + '.', n + ' wholes hold ' + n + ' × ' + b + ' = ' + (n * b) + ' pieces.', 'Answer: ' + (n * b) + '.'] };
  });
  Gen.add('volume', function (S) {
    var l = S.int(2, 9), w = S.int(2, 7), hh = S.int(2, 6), t = S.int(0, 1), u = S.pick(['cm', 'in', 'ft', 'm']), v = l * w * hh;
    if (t === 0) return { skill: 'volume', kind: 'num', pic: { t: 'box', l: l, w: w, h: hh, u: u }, q: 'A box is ' + l + ' ' + u + ' long, ' + w + ' ' + u + ' wide, and ' + hh + ' ' + u + ' tall. What is its volume in cubic ' + u + '?', a: String(v), hint: 'Volume = length × width × height.',
      steps: ['VOLUME is how many unit cubes fill the box.', 'One layer on the bottom has ' + l + ' × ' + w + ' = ' + (l * w) + ' cubes.', 'There are ' + hh + ' layers: ' + (l * w) + ' × ' + hh + ' = ' + v + '.', 'Answer: ' + v + ' cubic ' + u + '.'] };
    return { skill: 'volume', kind: 'num', pic: { t: 'box', l: l, w: w, h: '?', u: u }, q: 'A box has a volume of ' + v + ' cubic ' + u + '. It is ' + l + ' ' + u + ' long and ' + w + ' ' + u + ' wide. How tall is it?', a: String(hh), hint: 'Find the area of the bottom (length × width), then divide.',
      steps: ['Volume = length × width × height.', 'Bottom layer: ' + l + ' × ' + w + ' = ' + (l * w) + '.', (l * w) + ' × ? = ' + v + ', so divide: ' + v + ' ÷ ' + (l * w) + ' = ' + hh + '.', 'Answer: ' + hh + ' ' + u + '.'] };
  });
  Gen.add('coord', function (S) {
    var x = S.int(0, 9), y = S.int(0, 9), t = S.int(0, 1);
    if (t === 0) return { skill: 'coordinates', kind: 'text', at: 'coord', pic: { t: 'coord', pts: [[x, y, 'A']] }, q: 'What are the coordinates of point A? (answer like “(3, 5)”)', a: '(' + x + ', ' + y + ')', hint: 'Start at 0. Go ACROSS first (x), then UP (y).',
      steps: ['An ordered pair is (x, y): x is how far ACROSS, y is how far UP. "Walk before you climb."', 'Start at the origin (0, 0). Count across the bottom to point A: ' + x + '.', 'Now count up to point A: ' + y + '.', 'Answer: (' + x + ', ' + y + ').'] };
    var dx = S.int(1, 9 - Math.min(x, 8)), dy = S.int(1, 9 - Math.min(y, 8)); if (x + dx > 9) dx = 9 - x; if (y + dy > 9) dy = 9 - y;
    return { skill: 'coordinates', kind: 'text', at: 'coord', pic: { t: 'coord', pts: [[x, y, 'P']] }, q: 'Start at point P (' + x + ', ' + y + '). Move ' + dx + ' units right and ' + dy + ' units up. Where are you? (answer like “(3, 5)”)', a: '(' + (x + dx) + ', ' + (y + dy) + ')', hint: 'Moving right changes x. Moving up changes y.',
      steps: ['Moving RIGHT adds to x: ' + x + ' + ' + dx + ' = ' + (x + dx) + '.', 'Moving UP adds to y: ' + y + ' + ' + dy + ' = ' + (y + dy) + '.', 'Answer: (' + (x + dx) + ', ' + (y + dy) + ').'] };
  });
  // fluency mix for the facts sprint
  Gen.add('fluency-mixed', function (S) { var a = S.int(2, 9), b = S.int(2, 9); return S.r() < 0.5 ? { skill: 'mult-fluency', kind: 'num', q: a + ' × ' + b, a: String(a * b), hint: '', steps: [a + ' × ' + b + ' = ' + (a * b) + '.'] } : { skill: 'div-fluency', kind: 'num', q: (a * b) + ' ÷ ' + a, a: String(b), hint: '', steps: [(a * b) + ' ÷ ' + a + ' = ' + b + '.'] }; });

  var api = { gcd: gcd, lcm: lcm, frText: frText, mixedText: mixedText, longDiv: longDiv };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Gen2 = api;
})(typeof window !== 'undefined' ? window : globalThis);
