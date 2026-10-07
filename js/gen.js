/* Math problem generators. Every problem is generated fresh (seeded), carries its own
   step-by-step worked solution, a hint, and an accepted-answer check.
   Problem shape: { q, a (string answer), kind:'num'|'text', steps:[...], hint, skill, unit? } */
(function (root) {
  'use strict';

  // ---- seeded RNG (mulberry32) so a problem can be regenerated from its seed ----
  function rng(seed) {
    var t = seed >>> 0;
    return function () {
      t += 0x6D2B79F5; var r = Math.imul(t ^ (t >>> 15), 1 | t);
      r ^= r + Math.imul(r ^ (r >>> 7), 61 | r); return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }
  function mk(seed) {
    var r = rng(seed);
    return {
      r: r,
      int: function (a, b) { return a + Math.floor(r() * (b - a + 1)); },
      pick: function (arr) { return arr[Math.floor(r() * arr.length)]; },
      shuffle: function (arr) { var a = arr.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
    };
  }
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function digits(n) { return String(n).split('').map(Number); }
  var PLACES = ['ones', 'tens', 'hundreds', 'thousands', 'ten-thousands', 'hundred-thousands'];

  var NAMES = ['Mia', 'Noah', 'Zoe', 'Eli', 'Ruby', 'Sam', 'Ivy', 'Leo', 'Nora', 'Max', 'Tess', 'Omar'];
  var THINGS = [['stickers', 'sticker'], ['marbles', 'marble'], ['cookies', 'cookie'], ['pencils', 'pencil'], ['shells', 'shell'], ['books', 'book'], ['apples', 'apple'], ['beads', 'bead']];

  var G = {};

  // ---------- PLACE VALUE ----------
  G.placeValue = function (S) {
    var n = S.int(1000, 999999), ds = digits(n), len = ds.length;
    var nz = []; ds.forEach(function (x, i) { if (x !== 0) nz.push(i); });
    var idx = S.pick(nz), d = ds[idx], place = PLACES[len - 1 - idx], value = d * Math.pow(10, len - 1 - idx);
    var named = ds.map(function (x, i) { return x + ' in the ' + PLACES[len - 1 - i] + ' place'; });
    if (S.r() < 0.5) {
      return { skill: 'place-value', kind: 'num', pic: { t: 'pv', n: n }, q: 'In ' + fmt(n) + ', what is the VALUE of the digit ' + d + ' in the ' + place + ' place?', a: String(value),
        hint: 'Value means the digit times its place. Count how many places it is from the right.',
        steps: ['Write the number and name every place, starting from the RIGHT (ones, tens, hundreds, ...): ' + ds.map(function (x, i) { return x + ' = ' + PLACES[len - 1 - i]; }).join(', ') + '.',
          'Find the digit ' + d + ' that the question asks about. It sits in the ' + place + ' place.',
          'The ' + place + ' place is worth ' + fmt(Math.pow(10, len - 1 - idx)) + ' for each one.',
          'Value = digit × place value = ' + d + ' × ' + fmt(Math.pow(10, len - 1 - idx)) + ' = ' + fmt(value) + '.',
          'Check: the digit is ' + d + ', but its VALUE is ' + fmt(value) + ' because of where it sits.'] };
    }
    var parts = []; ds.forEach(function (x, i) { if (x !== 0) parts.push({ d: x, p: PLACES[len - 1 - i], v: x * Math.pow(10, len - 1 - i) }); });
    var steps = ['Each piece of the sum is a digit times its place, so every piece belongs in its own place in the answer.'], run = 0;
    parts.forEach(function (p, i) { var prev = run; run += p.v; steps.push(i === 0 ? 'Start with ' + fmt(p.v) + '. The ' + p.d + ' is in the ' + p.p + ' place.' : 'Add ' + fmt(p.v) + ' (the ' + p.d + ' goes in the ' + p.p + ' place): ' + fmt(prev) + ' + ' + fmt(p.v) + ' = ' + fmt(run) + '.'); });
    var missing = []; for (var k = 0; k < len; k++) if (ds[k] === 0) missing.push(PLACES[len - 1 - k]);
    steps.push(missing.length ? 'There is no piece for the ' + missing.join(' and ') + ' place, so a 0 holds that place.' : 'Every place has a digit, so there are no zeros to hold places.');
    steps.push('Answer: ' + fmt(n) + '. Check by reading it: ' + named.join(', ') + '.');
    return { skill: 'place-value', kind: 'num', q: 'What number is: ' + parts.map(function (p) { return fmt(p.v); }).join(' + ') + ' ?', a: String(n),
      hint: 'Add the parts together, biggest first. Zeros hold the places that have no piece.', steps: steps };
  };

  // ---------- ROUNDING ----------
  G.rounding = function (S) {
    var to = S.pick([10, 100, 1000]);
    var n = S.int(to === 10 ? 12 : to === 100 ? 120 : 1200, to === 1000 ? 98999 : 9999);
    var name = to === 10 ? 'ten' : to === 100 ? 'hundred' : 'thousand', placeName = name + 's';
    var down = Math.floor(n / to) * to, up = down + to, half = down + to / 2;
    var placeDigit = Math.floor(n / to) % 10, look = Math.floor((n % to) / (to / 10));
    var ans = (n - down) * 2 >= to ? up : down;
    return { skill: 'rounding', kind: 'num', q: 'Round ' + fmt(n) + ' to the nearest ' + name + '.', a: String(ans),
      hint: 'Find the digit one place to the RIGHT of the ' + placeName + ' place. 5 or more: round up. 4 or less: stay.',
      steps: ['Rounding to the nearest ' + name + ' means picking the multiple of ' + fmt(to) + ' that ' + fmt(n) + ' is closest to.',
        'The two choices are ' + fmt(down) + ' (below) and ' + fmt(up) + ' (above). ' + fmt(n) + ' sits between them.',
        'Find the ' + placeName + ' place in ' + fmt(n) + '. The digit there is ' + placeDigit + '.',
        'Look one place to the RIGHT. That digit is ' + look + '. It tells us which side of the halfway point (' + fmt(half) + ') we are on.',
        look >= 5 ? look + ' is 5 or more, so ' + fmt(n) + ' is at or past halfway. Round UP: add 1 to the ' + placeName + ' digit.' : look + ' is 4 or less, so ' + fmt(n) + ' is before halfway. Round DOWN: the ' + placeName + ' digit stays the same.',
        'Change every digit to the right of the ' + placeName + ' place to 0.',
        'Answer: ' + fmt(n) + ' rounds to ' + fmt(ans) + '.'] };
  };

  // ---------- ADD / SUBTRACT with regrouping (steps by column) ----------
  function addSteps(a, b) {
    var A = digits(a).reverse(), B = digits(b).reverse(), carry = 0, steps = [], names = PLACES, out = [];
    var len = Math.max(A.length, B.length);
    for (var i = 0; i < len; i++) {
      var x = A[i] || 0, y = B[i] || 0, s = x + y + carry;
      var t = names[i].charAt(0).toUpperCase() + names[i].slice(1) + ': ' + x + ' + ' + y + (carry ? ' + ' + carry + ' (carried)' : '') + ' = ' + s;
      if (s >= 10) { t += '. Write ' + (s % 10) + ' and carry 1 to the ' + names[i + 1] + '.'; carry = 1; } else { t += '. Write ' + s + '.'; carry = 0; }
      out.push(s % 10); steps.push(t);
    }
    if (carry) { out.push(1); steps.push('Carry 1 down as the leading digit.'); }
    return { steps: steps, result: a + b };
  }
  function subSteps(a, b) {
    var A = digits(a).reverse(), B = digits(b).reverse(), steps = [];
    for (var i = 0; i < A.length; i++) {
      var x = A[i], y = B[i] || 0, nm = PLACES[i];
      if (x < y) {
        var j = i + 1; while (A[j] === 0) j++;
        steps.push(nm + ': ' + x + ' is smaller than ' + y + ', so borrow from the ' + PLACES[j] + '.');
        A[j] -= 1; for (var k = j - 1; k > i; k--) A[k] = 9; x += 10; A[i] = x;
        steps.push('Now it is ' + x + ' - ' + y + ' = ' + (x - y) + '.');
      } else steps.push(nm + ': ' + x + ' - ' + y + ' = ' + (x - y) + '.');
    }
    return { steps: steps, result: a - b };
  }
  G.addRegroup = function (S) {
    var a, b, tries = 0, hi = 9999;
    do { a = S.int(120, hi); b = S.int(120, hi - 3000 > 200 ? hi - 3000 : 900); tries++; } while (!needsCarry(a, b) && tries < 50);
    var r = addSteps(a, b);
    return { skill: 'add-regroup', kind: 'num', q: fmt(a) + ' + ' + fmt(b) + ' = ?', a: String(r.result),
      hint: 'Start at the ones column. If a column adds to 10 or more, carry 1 to the next column.',
      steps: ['Line up the numbers so ones are over ones, tens over tens.'].concat(r.steps).concat(['Answer: ' + fmt(r.result) + '.', 'Check: ' + fmt(r.result) + ' - ' + fmt(b) + ' = ' + fmt(a) + ' ✓']) };
  };
  function needsCarry(a, b) { var A = digits(a).reverse(), B = digits(b).reverse(); for (var i = 0; i < Math.min(A.length, B.length); i++) if (A[i] + B[i] >= 10) return true; return false; }
  function needsBorrow(a, b) { var A = digits(a).reverse(), B = digits(b).reverse(); for (var i = 0; i < B.length; i++) if (A[i] < B[i]) return true; return false; }
  G.subRegroup = function (S) {
    var a, b, tries = 0;
    do { a = S.int(1200, 9999); b = S.int(130, a - 100); tries++; } while (!needsBorrow(a, b) && tries < 80);
    var r = subSteps(a, b);
    return { skill: 'sub-regroup', kind: 'num', q: fmt(a) + ' - ' + fmt(b) + ' = ?', a: String(r.result),
      hint: 'Start at the ones. If the top digit is smaller, borrow 1 from the next column (it becomes 10 more here).',
      steps: ['Line up the numbers: ' + fmt(a) + ' on top, ' + fmt(b) + ' below.'].concat(r.steps).concat(['Answer: ' + fmt(r.result) + '.', 'Check by adding: ' + fmt(r.result) + ' + ' + fmt(b) + ' = ' + fmt(a) + ' ✓']) };
  };

  // ---------- MULTIPLICATION ----------
  function mulFact(S, lo, hi, skill) {
    var a = S.int(lo, hi), b = S.int(2, 9), p = a * b;
    return { skill: skill, kind: 'num', q: a + ' × ' + b + ' = ?', a: String(p),
      hint: 'Think of ' + a + ' groups of ' + b + '. Skip count by ' + b + ' (or by ' + a + ').',
      steps: [a + ' × ' + b + ' means ' + a + ' groups with ' + b + ' in each group.', 'Skip count by ' + b + ': ' + Array.from({ length: a }, function (_, i) { return b * (i + 1); }).join(', ') + '.', 'The ' + a + 'th number is ' + p + '.', 'So ' + a + ' × ' + b + ' = ' + p + '. (And ' + b + ' × ' + a + ' is the same.)'] };
  }
  G.mulFacts25 = function (S) { return mulFact(S, 0, 5, 'mult-facts'); };
  G.mulFacts69 = function (S) { return mulFact(S, 6, 9, 'mult-facts'); };
  G.mulFactsAll = function (S) { return mulFact(S, 2, 9, 'mult-facts'); };
  G.mulFluency = function (S) { var a = S.int(2, 9), b = S.int(2, 9); return { skill: 'mult-fluency', kind: 'num', q: a + ' × ' + b, a: String(a * b), hint: 'Use a fact you know, then add or subtract a group.', steps: [a + ' × ' + b + ' = ' + (a * b) + '.'] }; };
  G.divFluency = function (S) { var a = S.int(2, 9), b = S.int(2, 9); return { skill: 'div-fluency', kind: 'num', q: (a * b) + ' ÷ ' + a, a: String(b), hint: 'Think: ' + a + ' × ? = ' + (a * b) + '.', steps: [(a * b) + ' ÷ ' + a + ' asks: ' + a + ' × what = ' + (a * b) + '?', a + ' × ' + b + ' = ' + (a * b) + '.', 'So ' + (a * b) + ' ÷ ' + a + ' = ' + b + '.'] }; };
  G.addFluency = function (S) { var a = S.int(6, 19), b = S.int(6, 19); return { skill: 'add-fluency', kind: 'num', q: a + ' + ' + b, a: String(a + b), hint: 'Make a 10 first.', steps: [a + ' + ' + b + ' = ' + (a + b) + '.'] }; };

  G.mulBy10 = function (S) {
    var n = S.int(3, 99), p = S.pick([10, 100, 1000]);
    return { skill: 'mult-tens', kind: 'num', q: n + ' × ' + fmt(p) + ' = ?', a: String(n * p), hint: 'Multiplying by ' + fmt(p) + ' slides the digits left. Add the zeros.',
      steps: ['Multiply ' + n + ' × 1 = ' + n + '.', fmt(p) + ' has ' + (String(p).length - 1) + ' zero(s).', 'Put those zeros after ' + n + ': ' + fmt(n * p) + '.'] };
  };

  // 2-digit (or 3-digit) × 1-digit, partial products shown
  G.mul2x1 = function (S) {
    var a = S.int(12, 99), b = S.int(3, 9), t = Math.floor(a / 10) * 10, o = a % 10;
    return { skill: 'mult-2x1', kind: 'num', q: a + ' × ' + b + ' = ?', a: String(a * b),
      hint: 'Break ' + a + ' into ' + t + ' + ' + o + '. Multiply each part by ' + b + ', then add.',
      steps: ['Break apart ' + a + ' into ' + t + ' + ' + o + ' (expanded form).', 'Multiply the ones: ' + o + ' × ' + b + ' = ' + (o * b) + '.', 'Multiply the tens: ' + t + ' × ' + b + ' = ' + (t * b) + '.', 'Add the partial products: ' + (t * b) + ' + ' + (o * b) + ' = ' + (a * b) + '.', 'Answer: ' + a + ' × ' + b + ' = ' + (a * b) + '.'] };
  };
  G.mul3x1 = function (S) {
    var a = S.int(112, 499), b = S.int(3, 9), h = Math.floor(a / 100) * 100, t = Math.floor((a % 100) / 10) * 10, o = a % 10;
    return { skill: 'mult-3x1', kind: 'num', q: a + ' × ' + b + ' = ?', a: String(a * b),
      hint: 'Break ' + a + ' into hundreds, tens, ones. Multiply each by ' + b + ', then add.',
      steps: ['Break apart ' + a + ' = ' + h + ' + ' + t + ' + ' + o + '.', o + ' × ' + b + ' = ' + (o * b) + '.', t + ' × ' + b + ' = ' + (t * b) + '.', h + ' × ' + b + ' = ' + (h * b) + '.', 'Add: ' + (h * b) + ' + ' + (t * b) + ' + ' + (o * b) + ' = ' + (a * b) + '.'] };
  };
  G.mul2x2 = function (S) {
    var a = S.int(12, 59), b = S.int(11, 39), bt = Math.floor(b / 10) * 10, bo = b % 10;
    return { skill: 'mult-2x2', kind: 'num', q: a + ' × ' + b + ' = ?', a: String(a * b),
      hint: 'Multiply ' + a + ' by the ones of ' + b + ', then by the tens, then add both.',
      steps: ['Split ' + b + ' into ' + bt + ' + ' + bo + '.', a + ' × ' + bo + ' = ' + (a * bo) + '.', a + ' × ' + bt + ' = ' + (a * bt) + '.', 'Add: ' + (a * bt) + ' + ' + (a * bo) + ' = ' + (a * b) + '.'] };
  };

  // ---------- DIVISION ----------
  G.divFacts = function (S) { var d = S.int(2, 9), q = S.int(2, 9); return { skill: 'div-facts', kind: 'num', q: (d * q) + ' ÷ ' + d + ' = ?', a: String(q), hint: 'Ask: ' + d + ' times what number is ' + (d * q) + '?', steps: ['Division is multiplication backwards.', d + ' × ? = ' + (d * q) + '.', d + ' × ' + q + ' = ' + (d * q) + ', so ' + (d * q) + ' ÷ ' + d + ' = ' + q + '.', 'Fact family: ' + d + ' × ' + q + ' = ' + (d * q) + ', ' + q + ' × ' + d + ' = ' + (d * q) + ', ' + (d * q) + ' ÷ ' + q + ' = ' + d + '.'] }; };
  G.div2x1 = function (S) {
    var d = S.int(2, 9), lo = Math.max(10, Math.ceil(20 / d)), q = S.int(lo, Math.floor(99 / d)), n = d * q, tens = Math.floor(n / 10), ones = n % 10;
    var tq = Math.floor(tens / d), used = tq * d, left = tens - used, next = left * 10 + ones, oq = next / d;
    return { skill: 'div-2x1', kind: 'num', q: n + ' ÷ ' + d + ' = ?', a: String(q),
      hint: 'Divide the tens first, then bring down the ones. Check with multiplication.',
      steps: ['Set up ' + n + ' ÷ ' + d + '. We divide one place at a time, starting with the tens. ' + n + ' is ' + tens + ' tens and ' + ones + ' ones.',
        'Tens: ' + tens + ' tens ÷ ' + d + ' = ' + tq + ' ten' + (tq === 1 ? '' : 's') + (tq === 0 ? ' (' + d + ' does not fit into ' + tens + ' yet)' : '') + '. That uses ' + tq + ' × ' + d + ' = ' + used + ' tens, so ' + tens + ' − ' + used + ' = ' + left + ' ten' + (left === 1 ? '' : 's') + ' left over.',
        'Ones: bring down the ' + ones + ' ones. Each leftover ten is worth 10 ones, so ' + left + ' × 10 + ' + ones + ' = ' + next + ' ones to share.',
        next + ' ÷ ' + d + ' = ' + oq + '.',
        'Put the places together: ' + tq + ' ten' + (tq === 1 ? '' : 's') + ' and ' + oq + ' ones is ' + q + '.',
        'Check by multiplying: ' + q + ' × ' + d + ' = ' + n + ' ✓'] };
  };
  G.divRemainder = function (S) {
    var d = S.int(3, 9), q = S.int(4, 19), r = S.int(1, d - 1), n = d * q + r;
    return { skill: 'div-remainder', kind: 'text', q: n + ' ÷ ' + d + ' = ?  (answer like “' + q + ' R' + r + '”)', a: q + ' R' + r,
      hint: 'Find the biggest multiple of ' + d + ' that fits. What is left over is the remainder.',
      steps: ['Find how many whole groups of ' + d + ' fit in ' + n + '.', d + ' × ' + q + ' = ' + (d * q) + ' (that is as close as we can get without going over).', 'Leftover: ' + n + ' - ' + (d * q) + ' = ' + r + '.', 'Answer: ' + q + ' R' + r + '.', 'Check: ' + q + ' × ' + d + ' + ' + r + ' = ' + n + ' ✓'] };
  };

  // ---------- WORD PROBLEMS ----------
  G.wordOneStep = function (S) {
    var nm = S.pick(NAMES), th = S.pick(THINGS), t = S.int(0, 3);
    if (t === 0) { var a = S.int(120, 780), b = S.int(45, 390); return { skill: 'word-1step', kind: 'num', q: nm + ' has ' + a + ' ' + th[0] + '. A friend gives ' + nm + ' ' + b + ' more. How many ' + th[0] + ' now?', a: String(a + b), hint: '"More" and "now" tell you to put amounts together.', steps: ['Read: ' + nm + ' STARTS with ' + a + ' and GETS ' + b + ' more.', 'Getting more means ADD.', a + ' + ' + b + ' = ' + (a + b) + '.', 'Answer: ' + (a + b) + ' ' + th[0] + '.'] }; }
    if (t === 1) { var c = S.int(400, 950), d = S.int(60, 380); return { skill: 'word-1step', kind: 'num', q: nm + ' had ' + c + ' ' + th[0] + ' and gave away ' + d + '. How many are left?', a: String(c - d), hint: '"Gave away" and "left" mean take away.', steps: [nm + ' had ' + c + ' and lost ' + d + '.', 'Giving away means SUBTRACT.', c + ' - ' + d + ' = ' + (c - d) + '.', 'Answer: ' + (c - d) + ' ' + th[0] + ' left.'] }; }
    if (t === 2) { var e = S.int(3, 9), f = S.int(4, 9); return { skill: 'word-1step', kind: 'num', q: 'There are ' + e + ' boxes. Each box holds ' + f + ' ' + th[0] + '. How many ' + th[0] + ' in all?', a: String(e * f), hint: 'Equal groups: multiply the number of groups by the number in each group.', steps: ['Equal groups → MULTIPLY.', 'Groups: ' + e + '. In each group: ' + f + '.', e + ' × ' + f + ' = ' + (e * f) + '.', 'Answer: ' + (e * f) + ' ' + th[0] + '.'] }; }
    var g = S.int(3, 8), h = S.int(4, 9); return { skill: 'word-1step', kind: 'num', q: nm + ' shares ' + (g * h) + ' ' + th[0] + ' equally among ' + g + ' friends. How many does each friend get?', a: String(h), hint: 'Sharing equally means divide.', steps: ['Sharing equally → DIVIDE.', 'Total: ' + (g * h) + '. Friends: ' + g + '.', (g * h) + ' ÷ ' + g + ' = ' + h + '.', 'Answer: ' + h + ' each.'] };
  };
  G.wordTwoStep = function (S) {
    var nm = S.pick(NAMES), a = S.int(3, 8), b = S.int(4, 9), c = S.int(5, 40);
    if (S.r() < 0.5) return { skill: 'word-2step', kind: 'num', q: nm + ' buys ' + a + ' packs of cards with ' + b + ' cards in each pack, then gets ' + c + ' more as a gift. How many cards in all?', a: String(a * b + c), hint: 'Do the multiplication first. Then add the gift.', steps: ['Step 1: cards from packs = ' + a + ' × ' + b + ' = ' + (a * b) + '.', 'Step 2: add the gift: ' + (a * b) + ' + ' + c + ' = ' + (a * b + c) + '.', 'Answer: ' + (a * b + c) + ' cards.'] };
    var groups = S.int(3, 8), each = S.int(3, 9), tot = groups * each + c;
    return { skill: 'word-2step', kind: 'num', q: nm + ' has ' + tot + ' beads. ' + nm + ' uses ' + c + ' for a bracelet, then puts the rest equally into ' + groups + ' bags. How many beads in each bag?', a: String(each), hint: 'First find how many beads are left. Then divide.', steps: ['Step 1: beads left = ' + tot + ' - ' + c + ' = ' + (tot - c) + '.', 'Step 2: share equally: ' + (tot - c) + ' ÷ ' + groups + ' = ' + each + '.', 'Answer: ' + each + ' beads in each bag.'] };
  };

  // ---------- TOPIC REGISTRY ----------
  var TOPICS = {
    'place-value': G.placeValue, 'rounding': G.rounding, 'add-regroup': G.addRegroup, 'sub-regroup': G.subRegroup,
    'mult-facts-25': G.mulFacts25, 'mult-facts-69': G.mulFacts69, 'mult-facts-all': G.mulFactsAll, 'mult-tens': G.mulBy10,
    'mult-2x1': G.mul2x1, 'mult-3x1': G.mul3x1, 'mult-2x2': G.mul2x2,
    'div-facts': G.divFacts, 'div-2x1': G.div2x1, 'div-remainder': G.divRemainder,
    'word-1step': G.wordOneStep, 'word-2step': G.wordTwoStep,
    'fluency-mult': G.mulFluency, 'fluency-div': G.divFluency, 'fluency-add': G.addFluency
  };

  // Build n distinct problems for a topic. seedBase should differ per attempt so retries are new problems.
  function make(topic, n, seedBase, allowDup) {
    var fn = TOPICS[topic]; if (!fn) throw new Error('Unknown math topic: ' + topic);
    var out = [], seen = {}, i = 0, guard = 0;
    while (out.length < n && guard < n * 40) {
      var seed = (seedBase * 7919 + i * 104729 + guard * 13) >>> 0;
      var p = fn(mk(seed)); guard++; i++;
      if (!allowDup && seen[p.q]) continue; seen[p.q] = 1; p.seed = seed; p.topic = topic; out.push(p);
    }
    return out;
  }

  // Answer check: tolerant of commas, spaces, "r"/"R" remainder format.
  // v3: problems may set `at` (answer type): 'dec' (numeric value), 'frac' (any equivalent fraction or mixed number),
  // 'coord' (an ordered pair), 'choice' (one of `choices`), or `alts` (other accepted answers).
  function norm(s) { return String(s).toLowerCase().replace(/[,\s]/g, '').replace(/remainder/g, 'r'); }
  function parseFrac(s) {
    s = String(s).trim().replace(/\s+/g, ' ').replace(/^(-?\d+)-(\d+\/\d+)$/, '$1 $2'); var m;
    if ((m = s.match(/^(-?\d+) (\d+)\/(\d+)$/))) { var d = +m[3]; return d ? (+m[1]) + (+m[2]) / d : NaN; }
    if ((m = s.match(/^(-?\d+)\/(\d+)$/))) { return +m[2] ? (+m[1]) / (+m[2]) : NaN; }
    if (/^-?\d+(\.\d+)?$/.test(s)) return +s; return NaN;
  }
  function parseNum(s) { s = String(s).trim().replace(/,/g, '').replace(/\s/g, ''); return /^-?(\d+\.?\d*|\.\d+)$/.test(s) ? +s : NaN; }
  function check(problem, given) {
    var at = problem.at, g = String(given == null ? '' : given).trim(); if (!g) return false;
    if (problem.alts && problem.alts.some(function (x) { return norm(x) === norm(g); })) return true;
    if (at === 'dec') { var v = parseNum(g); return !isNaN(v) && Math.abs(v - +problem.a) < 1e-9; }
    if (at === 'frac') { var f = parseFrac(g), t = parseFrac(problem.a); return !isNaN(f) && Math.abs(f - t) < 1e-9; }
    if (at === 'coord') { var p = g.replace(/[()\s]/g, '').split(/[,;]/), q = String(problem.a).replace(/[()\s]/g, '').split(','); return p.length === 2 && +p[0] === +q[0] && +p[1] === +q[1] && p[0] !== '' && p[1] !== ''; }
    return norm(g) === norm(problem.a);
  }
  // register more topics (js/gen2.js adds the rest of the year)
  function add(name, fn) { TOPICS[name] = fn; if (api.TOPICS.indexOf(name) < 0) api.TOPICS.push(name); }

  var api = { make: make, check: check, TOPICS: Object.keys(TOPICS), fmt: fmt, mk: mk, add: add, digits: digits, PLACES: PLACES, NAMES: NAMES, THINGS: THINGS, parseFrac: parseFrac, parseNum: parseNum };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Gen = api;
})(typeof window !== 'undefined' ? window : globalThis);
