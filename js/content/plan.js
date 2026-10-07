/* Weekly plan: math lessons (generated), Friday fluency/game day, and day assembly.
   Roles: mon tue wed thu fri.  Curriculum week = calendar week that has at least one school day (Oct 12 = week 1). */
(function (root) {
  'use strict';
  var isNode = typeof require !== 'undefined' && typeof module !== 'undefined';
  var C = isNode ? require('./core.js') : root.Content;
  var Cal = isNode ? require('../calendar.js') : root.Cal;

  // ---------- math topic explanations (what she reads BEFORE the worked example) ----------
  var INFO = {
    'place-value': { title: 'Place value', learn: [
      { h: 'Every digit has a place', p: 'In a big number, where a digit sits tells how much it is worth. From the right: ones, tens, hundreds, thousands, ten-thousands, hundred-thousands. In 4,502 the 5 is in the hundreds place, so its VALUE is 5 × 100 = 500.' },
      { h: 'Expanded form', p: 'Expanded form pulls a number apart: 4,502 = 4,000 + 500 + 2. Each part is a digit times its place. Zero means "none of that place," so we skip it.' }] },
    'rounding': { title: 'Rounding', learn: [
      { h: 'Rounding is finding the closest friendly number', p: 'Rounding to the nearest ten, hundred, or thousand means deciding which one the number is closer to.' },
      { h: 'The rule', p: 'Underline the digit in the place you are rounding to. Look one place to the RIGHT. If that digit is 5 or more, round UP (add 1 to the underlined digit). If it is 4 or less, stay the same. Then change every digit to the right of the underlined one to 0.' }] },
    'add-regroup': { title: 'Adding with carrying (regrouping)', learn: [
      { h: 'Why we carry', p: 'When a column adds to 10 or more, we cannot fit it in one place. 10 ones make 1 ten, so we write the ones and CARRY the ten to the next column.' },
      { h: 'Steps', p: '1) Line up the numbers by place. 2) Add the ones column first. 3) If the sum is 10 or more, write the ones digit and carry 1 to the next column. 4) Add the next column INCLUDING the carried 1. 5) Check by subtracting.' }] },
    'sub-regroup': { title: 'Subtracting with borrowing (regrouping)', learn: [
      { h: 'Why we borrow', p: 'If the top digit is smaller than the bottom digit, we cannot subtract. So we borrow 1 from the next column. That 1 is worth 10 of the smaller place.' },
      { h: 'Steps', p: '1) Start at the ones. 2) If the top digit is smaller, borrow 1 from the next column (cross it out and make it 1 less) and add 10 to the top digit. 3) Subtract. 4) Move left and repeat. 5) Check by adding your answer to the bottom number. You should get the top number.' }] },
    'mult-facts-25': { title: 'Multiplication facts', learn: [
      { h: 'Multiplication means equal groups', p: '4 × 3 means 4 groups with 3 in each group. You can skip count: 3, 6, 9, 12. So 4 × 3 = 12.' },
      { h: 'Tricks', p: '× 0 is always 0. × 1 is the same number. × 2 is doubling. × 5 ends in 0 or 5. × 10 adds a zero. Order does not matter: 3 × 4 = 4 × 3.' }] },
    'mult-facts-69': { title: 'Harder multiplication facts (6–9)', learn: [
      { h: 'Use what you know', p: 'To find 7 × 6, start from a fact you know: 7 × 5 = 35. One more group of 7 makes 7 × 6 = 35 + 7 = 42.' },
      { h: '9s trick', p: 'For 9 × a number, multiply by 10 and subtract the number. 9 × 7 = 70 − 7 = 63. Also, the digits of a 9s answer always add to 9: 6 + 3 = 9.' }] },
    'mult-facts-all': { title: 'Multiplication facts review', learn: [{ h: 'Fast and sure', p: 'You are building facts you know without counting. If you get stuck, use a fact you know and add or subtract a group.' }] },
    'mult-tens': { title: 'Multiplying by 10, 100, 1000', learn: [
      { h: 'The zero pattern', p: 'Multiplying by 10 makes a number 10 times bigger, so each digit moves one place left. 35 × 10 = 350. For 100 add two zeros; for 1,000 add three.' }] },
    'mult-2x1': { title: 'Multiplying a 2-digit number by 1 digit', learn: [
      { h: 'Break it apart', p: 'Use expanded form. 34 × 6 = (30 + 4) × 6. Multiply each part: 30 × 6 = 180 and 4 × 6 = 24. Then add: 180 + 24 = 204. These are called partial products.' },
      { h: 'Why it works', p: 'Multiplying a sum is the same as multiplying each part and adding. This is the distributive property.' }] },
    'mult-3x1': { title: 'Multiplying a 3-digit number by 1 digit', learn: [
      { h: 'Same idea, one more part', p: '234 × 3 = (200 + 30 + 4) × 3. Multiply each part: 600, 90, 12. Add the partial products: 600 + 90 + 12 = 702.' }] },
    'mult-2x2': { title: 'Multiplying two 2-digit numbers', learn: [
      { h: 'Two rows of partial products', p: '23 × 14: first multiply 23 × 4 = 92 (the ones of 14). Then multiply 23 × 10 = 230 (the tens of 14). Add: 92 + 230 = 322.' }] },
    'div-facts': { title: 'Division facts', learn: [
      { h: 'Division is multiplication backwards', p: '24 ÷ 6 asks "6 times what number makes 24?" Since 6 × 4 = 24, then 24 ÷ 6 = 4. Every multiplication fact makes a fact family of four: 6 × 4 = 24, 4 × 6 = 24, 24 ÷ 6 = 4, 24 ÷ 4 = 6.' }] },
    'div-2x1': { title: 'Dividing a 2-digit number by 1 digit', learn: [
      { h: 'Divide, multiply, subtract, bring down', p: '72 ÷ 3: divide the tens (7 tens ÷ 3 = 2 tens, with 1 ten left). Bring down the ones: the leftover ten and the 2 ones make 12. 12 ÷ 3 = 4. So 72 ÷ 3 = 24. Always check: 24 × 3 = 72.' }] },
    'div-remainder': { title: 'Division with remainders', learn: [
      { h: 'What is left over', p: 'Sometimes numbers do not divide evenly. 17 ÷ 5: 5 × 3 = 15, which is the biggest multiple of 5 that fits. 17 − 15 = 2 left over. We write 3 R2. The remainder is always smaller than the number you divide by.' }] },
    'word-1step': { title: 'One-step word problems', learn: [
      { h: 'Find the question, find the numbers, pick the operation', p: 'Read twice. Underline the question. Circle the numbers. Clue words: "in all," "total," "more" → add. "Left," "fewer," "gave away" → subtract. "Each," "groups of" → multiply. "Shared equally" → divide.' }] },
    'word-2step': { title: 'Two-step word problems', learn: [
      { h: 'Break it into two small problems', p: 'Find the hidden first question that you must answer before you can answer the real question. Solve it, write the answer, then use it in step two. Always check the final answer makes sense.' }] },
    'mixed': { title: 'Mixed review', learn: [{ h: 'Choose the right tool', p: 'In a mixed set, read each problem sign first: + − × ÷. Take your time. This is a challenge to show what you know.' }] }
  };

  // week -> role -> {topics, title}
  var MATH = {
    1: { tue: 'place-value', wed: 'rounding', thu: 'add-regroup', fri: ['place-value', 'rounding', 'add-regroup', 'sub-regroup'] },
    2: { mon: 'sub-regroup', tue: 'add-regroup', wed: 'mult-facts-25', thu: 'mult-facts-69', fri: ['add-regroup', 'sub-regroup', 'mult-facts-25', 'mult-facts-69'] },
    3: { mon: 'mult-tens', tue: 'mult-2x1', wed: 'mult-2x1', thu: 'mult-3x1', fri: ['mult-tens', 'mult-2x1', 'mult-3x1', 'mult-facts-all'] },
    4: { mon: 'mult-3x1', tue: 'mult-2x2', wed: 'word-1step', thu: 'word-2step', fri: ['mult-2x1', 'mult-3x1', 'mult-2x2', 'word-1step'] },
    5: { mon: 'div-facts', tue: 'div-facts', wed: 'div-2x1', thu: 'div-2x1', fri: ['div-facts', 'div-2x1', 'mult-2x2', 'word-1step'] },
    6: { mon: 'div-remainder', tue: 'div-remainder', wed: 'word-1step', thu: 'word-2step', fri: ['div-2x1', 'div-remainder', 'word-1step', 'word-2step'] },
    7: { mon: 'mult-2x2', tue: 'mult-3x1', wed: 'div-2x1', thu: 'word-2step', fri: ['mult-2x2', 'div-2x1', 'div-remainder', 'word-2step'] },
    8: { mon: 'add-regroup', tue: 'sub-regroup', wed: 'mult-2x2', thu: 'div-remainder', fri: ['place-value', 'rounding', 'mult-2x2', 'div-remainder', 'word-2step'] }
  };
  var FULL_WEEKS = 4;      // weeks with all six subjects built
  var MATH_LAST_WEEK = 8; // later weeks are added in monthly content updates

  function mathLesson(week, role) {
    var spec = MATH[week] && MATH[week][role]; if (!spec) return null;
    var challenge = Array.isArray(spec), topics = challenge ? spec : [spec];
    var id = 'w' + week + '-' + role + '-math';
    var info = challenge ? INFO.mixed : INFO[spec];
    return { id: id, subject: 'math', type: 'math', title: challenge ? 'Math challenge (test day: no hints)' : info.title, mins: challenge ? 20 : 25, topics: topics, challenge: challenge, learn: info.learn, count: challenge ? 12 : 10 };
  }

  var FUN = {
    1: { drill: 'fluency-add', target: 20, puzzles: [
      C.Q('What comes next? 5, 10, 15, 20, __', ['22', '25', '30', '24'], 1, 'The pattern adds 5 each time. 20 + 5 = 25.'),
      C.Q('I am a number. Double me and add 3 to get 15. What number am I?', ['5', '6', '7', '9'], 1, 'Work backward: 15 − 3 = 12, and 12 ÷ 2 = 6. Check: 6 × 2 + 3 = 15.')] },
    2: { drill: 'fluency-mult', target: 14, puzzles: [
      C.Q('What comes next? 3, 6, 12, 24, __', ['30', '36', '48', '27'], 2, 'Each number doubles. 24 × 2 = 48.'),
      C.Q('A farmer has chickens and cows. There are 8 heads and 22 legs. How many cows are there?', ['3', '4', '5', '6'], 0, 'Pretend all 8 animals are chickens: that would be 8 × 2 = 16 legs. But there are 22 legs, which is 6 extra. Each cow has 2 more legs than a chicken, so 6 ÷ 2 = 3 cows. Check: 3 cows (12 legs) + 5 chickens (10 legs) = 22 legs, and 3 + 5 = 8 heads. ✓')] },
    3: { drill: 'fluency-mult', target: 16, puzzles: [
      C.Q('What is the missing number? 7 × __ = 56', ['6', '7', '8', '9'], 2, 'Think of a fact: 7 × 8 = 56. Division check: 56 ÷ 7 = 8.'),
      C.Q('What comes next? 1, 4, 9, 16, __', ['20', '24', '25', '36'], 2, 'These are square numbers: 1×1, 2×2, 3×3, 4×4, so the next is 5×5 = 25.')] },
    4: { drill: 'fluency-div', target: 14, puzzles: [
      C.Q('Which number is both a multiple of 3 and a multiple of 4?', ['6', '8', '12', '9'], 2, '12 = 3 × 4, so it is in both times tables. 6 is not a multiple of 4, and 8 and 9 are not multiples of both.'),
      C.Q('If today is Monday, what day is it 10 days later?', ['Thursday', 'Friday', 'Wednesday', 'Sunday'], 0, '10 days = 1 week (7 days) + 3 days. Monday + 3 days = Thursday.')] },
    5: { drill: 'fluency-div', target: 16, puzzles: [] }, 6: { drill: 'fluency-div', target: 16, puzzles: [] }, 7: { drill: 'fluency-mult', target: 18, puzzles: [] }, 8: { drill: 'fluency-mult', target: 20, puzzles: [] }
  };
  function funLesson(week) {
    var f = FUN[week]; if (!f) return null;
    return { id: 'w' + week + '-fri-fun', subject: 'fun', type: 'fluency', title: 'Game day: fluency sprint and puzzles', mins: 15, drill: f.drill, target: f.target, seconds: 60, puzzles: f.puzzles };
  }

  // Order within a day
  var ORDER = ['math', 'grammar', 'spelling', 'reading', 'science', 'social', 'writing', 'bible', 'fun'];

  // curriculum week for a date: weeks (Mon-start) that contain a school day, counted from the week of Oct 12.
  var weekCache = {};
  function weekOf(dateIso, opts) {
    var mon = monday(dateIso), key = mon + JSON.stringify(opts && opts.extraOff || []);
    var start = monday(Cal.START), n = 0, d = start;
    while (d <= mon) {
      var has = false; for (var i = 0; i < 5; i++) if (Cal.isSchoolDay(Cal.addDays(d, i), opts)) { has = true; break; }
      if (has) n++; if (d === mon) return has ? n : 0; d = Cal.addDays(d, 7);
    }
    return 0;
  }
  function monday(s) { var d = Cal.parse(s), dow = (d.getDay() + 6) % 7; d.setDate(d.getDate() - dow); return Cal.iso(d); }
  var ROLES = ['mon', 'tue', 'wed', 'thu', 'fri'];
  function roleOf(dateIso) { var d = Cal.parse(dateIso), i = (d.getDay() + 6) % 7; return i < 5 ? ROLES[i] : null; }

  // Lessons for a (week, role), in order. Returns array of lesson objects (math/fun generated, others from registry).
  function lessons(week, role) {
    var out = [], m = mathLesson(week, role); if (m) out.push(m);
    var ids = (C.weeks[week] && C.weeks[week][role]) || [];
    ids.forEach(function (id) { if (C.lessons[id]) out.push(C.lessons[id]); });
    if (role === 'fri') { var f = funLesson(week); if (f) out.push(f); }
    out.sort(function (a, b) { return ORDER.indexOf(a.subject) - ORDER.indexOf(b.subject); });
    return out;
  }
  function forDate(dateIso, opts) {
    var role = roleOf(dateIso); if (!role) return { week: 0, role: null, lessons: [] };
    var wk = weekOf(dateIso, opts); return { week: wk, role: role, lessons: lessons(wk, role) };
  }
  // Every lesson that should have been done by `dateIso` (inclusive), for the catch-up list.
  function dueThrough(dateIso, opts) {
    var out = [], d = Cal.START;
    while (d <= dateIso) { if (Cal.isSchoolDay(d, opts)) { forDate(d, opts).lessons.forEach(function (l) { out.push({ lesson: l, date: d }); }); } d = Cal.addDays(d, 1); }
    return out;
  }
  function find(id) {
    if (C.lessons[id]) return C.lessons[id];
    var m = id.match(/^w(\d+)-(mon|tue|wed|thu|fri)-(math|fun)$/); if (!m) return null;
    return m[3] === 'math' ? mathLesson(+m[1], m[2]) : funLesson(+m[1]);
  }
  function contentWeeks() { return MATH_LAST_WEEK; }

  var api = { INFO: INFO, MATH: MATH, FUN: FUN, mathLesson: mathLesson, funLesson: funLesson, weekOf: weekOf, roleOf: roleOf, monday: monday, lessons: lessons, forDate: forDate, dueThrough: dueThrough, find: find, contentWeeks: contentWeeks, ORDER: ORDER, FULL_WEEKS: FULL_WEEKS };
  if (isNode) module.exports = api; else root.Plan = api;
})(typeof window !== 'undefined' ? window : globalThis);
