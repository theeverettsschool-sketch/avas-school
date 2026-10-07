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
    'mixed': { title: 'Mixed review', learn: [{ h: 'Choose the right tool', p: 'In a mixed set, read each problem sign first: + − × ÷. Take your time. This is a challenge to show what you know.' }] },
    // ---------- v3: the rest of 4th grade ----------
    'factors': { title: 'Factors and factor pairs', learn: [
      { h: 'What is a factor?', p: 'Factors are numbers you multiply to get another number. 3 × 4 = 12, so 3 and 4 are factors of 12. Every number has 1 and itself as factors.' },
      { h: 'Find them in pairs', p: 'Start with 1 × the number. Then try 2, 3, 4, and so on. When a number divides evenly, you found a PAIR. Stop when the pairs start to repeat. The factors of 12 are 1, 2, 3, 4, 6, 12.' }] },
    'prime-composite': { title: 'Prime and composite numbers', learn: [
      { h: 'Prime numbers', p: 'A PRIME number has exactly two factors: 1 and itself. 2, 3, 5, 7, 11, and 13 are prime. 2 is the only even prime.' },
      { h: 'Composite numbers', p: 'A COMPOSITE number has more than two factors. 9 is composite because 3 × 3 = 9. The number 1 is special: it is neither prime nor composite.' }] },
    'multiples': { title: 'Multiples', learn: [
      { h: 'Skip counting', p: 'Multiples of a number are what you get when you skip count by it. Multiples of 6: 6, 12, 18, 24, 30, ... A multiple of 6 can be divided by 6 with no remainder.' },
      { h: 'Factor or multiple?', p: 'Factors are small and multiply TO make the number. Multiples are big and come FROM the number. 4 is a factor of 12, and 12 is a multiple of 4.' }] },
    'patterns': { title: 'Number patterns and rules', learn: [
      { h: 'Find the rule', p: 'A pattern follows a rule, like "add 4" or "multiply by 2." Compare each number to the one before it to find the rule, then use the rule to keep going.' },
      { h: 'Look for more', p: 'Patterns hide extra secrets. In "start at 1, add 2" every number is odd: 1, 3, 5, 7. Adding an even number keeps odd numbers odd.' }] },
    'mult-4x1': { title: 'Multiplying a 4-digit number by 1 digit', learn: [
      { h: 'Partial products', p: 'Break the big number into thousands, hundreds, tens, and ones. 2,315 × 4 = (2,000 × 4) + (300 × 4) + (10 × 4) + (5 × 4) = 8,000 + 1,200 + 40 + 20 = 9,260.' },
      { h: 'Estimate first', p: 'Before you multiply, estimate: 2,315 is about 2,000, and 2,000 × 4 = 8,000. Your answer should be close to that.' }] },
    'div-4x1': { title: 'Dividing a 4-digit number by 1 digit', learn: [
      { h: 'Divide, multiply, subtract, bring down', p: 'Work from the LEFT, one place at a time. Divide that place, multiply to see how much you used, subtract to see what is left, then bring down the next digit and repeat.' },
      { h: 'Check with multiplication', p: 'Multiply your answer by the divisor. If you get the number you started with, you are right.' }] },
    'div-4x1-rem': { title: 'Long division with remainders', learn: [
      { h: 'What is left at the end', p: 'Sometimes there is something left after the last step. That is the REMAINDER. Write it like 452 R3. The remainder must be smaller than the number you divide by.' }] },
    'rem-word': { title: 'What do I do with the remainder?', learn: [
      { h: 'Read the question', p: 'In a story problem the remainder means something real. Need a van for EVERYONE? Round UP. How many FULL bags? Drop the remainder. How many are LEFT OVER? The answer IS the remainder.' }] },
    'frac-equiv': { title: 'Equivalent fractions', learn: [
      { h: 'Same amount, different names', p: '1/2 and 2/4 are equivalent: they cover the same amount. If you cut each piece into 2 smaller pieces, you have twice as many pieces, and each is half as big.' },
      { h: 'The rule', p: 'Multiply (or divide) the top and the bottom by the SAME number. 2/3 = (2 × 4)/(3 × 4) = 8/12.' }] },
    'frac-compare': { title: 'Comparing fractions', learn: [
      { h: 'Make the pieces the same size', p: 'To compare 2/3 and 3/4, rename both with a common denominator: 2/3 = 8/12 and 3/4 = 9/12. Now compare tops: 8 < 9, so 2/3 < 3/4.' },
      { h: 'Benchmark 1/2', p: 'Another trick: is each fraction more or less than 1/2? 3/8 is less than half (half of 8 is 4). 5/6 is more than half. So 3/8 < 5/6.' }] },
    'frac-add-like': { title: 'Adding fractions with the same denominator', learn: [
      { h: 'Count the pieces', p: 'When the bottoms match, the pieces are the same size, so just add the tops. 2/8 + 3/8 = 5/8. The bottom stays 8 because the piece size did not change.' }] },
    'frac-sub-like': { title: 'Subtracting fractions with the same denominator', learn: [
      { h: 'Take away pieces', p: 'Same bottoms means same size pieces. Subtract the tops and keep the bottom. 7/10 − 3/10 = 4/10, which is also 2/5.' }] },
    'mixed-add': { title: 'Adding and subtracting mixed numbers', learn: [
      { h: 'Wholes and parts', p: 'A mixed number like 2 3/4 is 2 wholes and 3/4 more. Add or subtract the whole numbers, then the fractions.' },
      { h: 'Too many pieces?', p: 'If the fractions add to more than 1 whole, like 5/4, trade 4/4 for 1 whole: 3 5/4 becomes 4 1/4.' }] },
    'frac-times-whole': { title: 'Multiplying a fraction by a whole number', learn: [
      { h: 'Groups of a fraction', p: '3 × 2/5 means 3 groups of 2/5: 2/5 + 2/5 + 2/5 = 6/5. Multiply the top by the whole number and keep the bottom.' }] },
    'dec-tenths': { title: 'Tenths, hundredths, and decimals', learn: [
      { h: 'Decimals are fractions', p: '0.7 means 7 tenths (7/10). 0.47 means 47 hundredths (47/100). The first place after the point is tenths; the second is hundredths.' },
      { h: 'Tenths to hundredths', p: '1 tenth = 10 hundredths, just like 1 dime = 10 pennies. So 3/10 = 30/100 = 0.30.' }] },
    'dec-compare': { title: 'Comparing decimals', learn: [
      { h: 'Line them up', p: 'Write both decimals with the same number of places: 0.5 = 0.50. Now compare 50 hundredths with 45 hundredths: 0.5 > 0.45. More digits does NOT mean bigger.' }] },
    'measure-convert': { title: 'Converting measurements', learn: [
      { h: 'Big unit to small unit: multiply', p: '1 foot = 12 inches, so 3 feet = 3 × 12 = 36 inches. When you change to a smaller unit, you need MORE of them, so multiply.' },
      { h: 'Facts to know', p: '12 inches = 1 foot. 3 feet = 1 yard. 60 minutes = 1 hour. 16 ounces = 1 pound. 1,000 grams = 1 kilogram. 1,000 milliliters = 1 liter. 4 quarts = 1 gallon.' }] },
    'area-perim': { title: 'Area and perimeter', learn: [
      { h: 'Perimeter is around', p: 'Perimeter is the distance around the outside. Add all the sides. For a rectangle: 2 × (length + width).' },
      { h: 'Area is inside', p: 'Area is how many squares cover the inside. For a rectangle: length × width. Area is measured in SQUARE units.' }] },
    'angles': { title: 'Measuring and adding angles', learn: [
      { h: 'Degrees', p: 'Angles are measured in degrees (°). A square corner is 90°. A straight line is 180°. All the way around a point is 360°.' },
      { h: 'Angles add', p: 'If two angles sit side by side, the big angle is the sum. If they make a straight line, they add to 180°, so you can find a missing one by subtracting.' }] },
    'geometry': { title: 'Angles, triangles, and symmetry', learn: [
      { h: 'Kinds of angles', p: 'ACUTE: less than 90°. RIGHT: exactly 90°. OBTUSE: between 90° and 180°. STRAIGHT: exactly 180°.' },
      { h: 'Triangles and symmetry', p: 'Triangles are named by their angles: right, acute, or obtuse. A line of symmetry folds a shape into two matching halves. A square has 4.' }] },
    // ---------- v3: 5th-grade preview ----------
    'powers10': { title: 'Powers of 10 and exponents', learn: [
      { h: 'Exponents', p: '10³ means 10 × 10 × 10 = 1,000. The small number (the exponent) tells how many 10s are multiplied, which is also how many zeros.' },
      { h: 'Moving the decimal point', p: 'Multiply by 10, 100, 1,000: move the decimal point 1, 2, or 3 places RIGHT. Divide: move it LEFT. 4.5 × 100 = 450. 450 ÷ 1,000 = 0.45.' }] },
    'order-ops': { title: 'Order of operations', learn: [
      { h: 'Which step first?', p: 'Do Parentheses first. Then multiply and divide from left to right. Then add and subtract from left to right. 2 + 3 × 4 = 2 + 12 = 14, not 20.' }] },
    'dec-place': { title: 'Decimal place value to thousandths', learn: [
      { h: 'Places after the point', p: 'Tenths (0.1), hundredths (0.01), thousandths (0.001). In 3.482 the 4 is 4 tenths (0.4), the 8 is 8 hundredths (0.08), and the 2 is 2 thousandths (0.002).' }] },
    'dec-round': { title: 'Rounding decimals', learn: [
      { h: 'Same rule as whole numbers', p: 'Find the place you are rounding to. Look one digit to the right. 5 or more rounds up; 4 or less stays. 3.476 to the nearest tenth: look at the 7, round up to 3.5.' }] },
    'dec-compare5': { title: 'Comparing decimals to thousandths', learn: [
      { h: 'Fill with zeros', p: 'Write both numbers with three places after the point: 0.4 = 0.400. Then compare from the left: tenths, hundredths, thousandths.' }] },
    'dec-add': { title: 'Adding decimals', learn: [
      { h: 'Line up the points', p: 'Stack the numbers so the decimal points line up. Fill empty places with zeros. Add like whole numbers, then bring the point straight down.' }] },
    'dec-sub': { title: 'Subtracting decimals', learn: [
      { h: 'Line up and fill zeros', p: 'Line up the decimal points and write zeros in empty places, so 5 − 1.25 becomes 5.00 − 1.25. Subtract like whole numbers, borrowing when needed.' }] },
    'mult-multi': { title: 'Multiplying multi-digit numbers', learn: [
      { h: 'Two rows', p: 'For 234 × 56: first 234 × 6 = 1,404. Then 234 × 50 = 11,700 (multiply by 5 and add a 0). Add the rows: 13,104.' }] },
    'div-4x2': { title: 'Dividing by a 2-digit number', learn: [
      { h: 'Estimate each digit', p: 'To divide by 23, think of it as about 20. Guess each digit, multiply by 23 to check, and adjust if the guess was too big or too small.' }] },
    'dec-times-whole': { title: 'Multiplying decimals by whole numbers', learn: [
      { h: 'Multiply, then place the point', p: '2.4 × 3: multiply 24 × 3 = 72. 2.4 has one decimal place, so the answer has one too: 7.2. Estimate to check: 2 × 3 = 6, close to 7.2.' }] },
    'dec-div-whole': { title: 'Dividing decimals by whole numbers', learn: [
      { h: 'Share the tenths', p: '8.4 ÷ 4: think of 84 tenths shared by 4, which is 21 tenths = 2.1. The decimal point stays in the same spot above.' }] },
    'frac-add-unlike': { title: 'Adding fractions with unlike denominators', learn: [
      { h: 'Make the pieces match', p: 'You cannot add thirds and fourths directly. Find a common denominator: 1/3 + 1/4 = 4/12 + 3/12 = 7/12.' }] },
    'frac-sub-unlike': { title: 'Subtracting fractions with unlike denominators', learn: [
      { h: 'Common denominator first', p: '3/4 − 1/6: the least common multiple of 4 and 6 is 12. 9/12 − 2/12 = 7/12.' }] },
    'frac-mult': { title: 'Multiplying fractions', learn: [
      { h: 'Top times top, bottom times bottom', p: '2/3 × 3/4 = (2 × 3)/(3 × 4) = 6/12 = 1/2. Multiplying by a fraction less than 1 makes the number smaller.' }] },
    'frac-div-unit': { title: 'Dividing with unit fractions', learn: [
      { h: 'How many fit?', p: '3 ÷ 1/4 asks how many quarters fit in 3 wholes: 12. And 1/4 ÷ 2 means split a quarter into 2 parts: each is 1/8.' }] },
    'volume': { title: 'Volume of rectangular prisms', learn: [
      { h: 'Layers of cubes', p: 'Volume is how many unit cubes fill a box. Count one layer (length × width), then multiply by how many layers (height). V = l × w × h, in cubic units.' }] },
    'coord': { title: 'The coordinate plane', learn: [
      { h: 'Walk, then climb', p: 'A point is named (x, y). Start at (0, 0). Go ACROSS x units, then UP y units. (3, 5) is 3 across and 5 up.' }] },
    'review': { title: 'Mixed review', learn: [{ h: 'Keep it sharp', p: 'Today mixes skills you have already learned. Read every problem carefully, decide which tool you need, and show your work on scratch paper.' }] }
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
  // ---------- v3: weeks 9-37 (rest of 4th grade, then 5th-grade preview from week 19, about mid-March) ----------
  function R() { return { review: [].slice.call(arguments) }; }
  var G4A = ['mult-4x1', 'div-4x1-rem', 'rem-word', 'frac-equiv', 'frac-compare'], G4B = ['frac-add-like', 'frac-sub-like', 'mixed-add', 'frac-times-whole', 'dec-tenths', 'dec-compare'], G4C = ['measure-convert', 'area-perim', 'angles', 'geometry', 'factors', 'multiples'];
  var G5 = ['powers10', 'order-ops', 'dec-place', 'dec-round', 'dec-compare5', 'dec-add', 'dec-sub', 'mult-multi', 'div-4x2', 'dec-times-whole', 'dec-div-whole', 'frac-add-unlike', 'frac-sub-unlike', 'frac-mult', 'frac-div-unit', 'volume', 'coord'];
  var MORE = {
    9: { mon: 'factors', tue: 'prime-composite', wed: 'multiples', thu: 'patterns', fri: ['factors', 'prime-composite', 'multiples', 'patterns'] },
    10: { mon: 'mult-4x1', tue: 'div-4x1', wed: 'div-4x1-rem', thu: 'rem-word', fri: ['mult-4x1', 'div-4x1', 'div-4x1-rem', 'rem-word'] },
    11: { mon: 'frac-equiv', tue: 'frac-equiv', wed: 'frac-compare', thu: 'frac-compare', fri: ['frac-equiv', 'frac-compare', 'mult-4x1', 'div-4x1-rem'] },
    12: { mon: 'frac-add-like', tue: 'frac-sub-like', wed: 'mixed-add', thu: 'mixed-add', fri: ['frac-add-like', 'frac-sub-like', 'mixed-add', 'frac-compare'] },
    13: { mon: 'frac-times-whole', tue: 'frac-times-whole', wed: 'dec-tenths', thu: 'dec-compare', fri: ['frac-times-whole', 'dec-tenths', 'dec-compare', 'frac-add-like'] },
    14: { mon: 'measure-convert', tue: 'measure-convert', wed: 'area-perim', thu: 'area-perim', fri: ['measure-convert', 'area-perim', 'dec-compare', 'frac-equiv'] },
    15: { mon: 'angles', tue: 'angles', wed: 'geometry', thu: 'geometry', fri: ['angles', 'geometry', 'area-perim', 'measure-convert'] },
    16: { mon: R('mult-4x1', 'div-4x1-rem', 'rem-word'), tue: R('frac-equiv', 'frac-compare'), wed: R('frac-add-like', 'frac-sub-like', 'mixed-add'), thu: R('frac-times-whole', 'dec-tenths', 'dec-compare'), fri: G4A.concat(['frac-add-like']) },
    17: { mon: R('measure-convert', 'area-perim'), tue: R('angles', 'geometry'), wed: R('factors', 'prime-composite', 'multiples', 'patterns'), thu: R('add-regroup', 'sub-regroup', 'mult-2x2', 'div-remainder'), fri: G4B.concat(G4C.slice(0, 2)) },
    18: { mon: R.apply(null, G4A), tue: R.apply(null, G4B), wed: R.apply(null, G4C), thu: R('mult-2x2', 'div-2x1', 'word-2step', 'rounding'), fri: { test: G4A.concat(G4B, G4C), count: 20, title: '4th-grade benchmark test' } },
    19: { mon: 'powers10', tue: 'order-ops', wed: 'order-ops', thu: 'dec-place', fri: ['powers10', 'order-ops', 'dec-place', 'frac-compare'] },
    20: { mon: 'dec-compare5', tue: 'dec-round', wed: 'dec-add', thu: 'dec-sub', fri: ['dec-compare5', 'dec-round', 'dec-add', 'dec-sub'] },
    21: { mon: 'mult-multi', tue: 'mult-multi', wed: 'div-4x2', thu: 'div-4x2', fri: ['mult-multi', 'div-4x2', 'dec-add', 'order-ops'] },
    22: { mon: 'dec-times-whole', tue: 'dec-times-whole', wed: 'dec-div-whole', thu: 'dec-div-whole', fri: ['dec-times-whole', 'dec-div-whole', 'dec-sub', 'mult-multi'] },
    23: { mon: 'frac-add-unlike', tue: 'frac-add-unlike', wed: 'frac-sub-unlike', thu: 'frac-sub-unlike', fri: ['frac-add-unlike', 'frac-sub-unlike', 'frac-equiv', 'dec-round'] },
    24: { mon: 'frac-mult', tue: 'frac-mult', wed: 'frac-div-unit', thu: 'frac-div-unit', fri: ['frac-mult', 'frac-div-unit', 'frac-add-unlike', 'div-4x2'] },
    25: { mon: 'volume', tue: 'volume', wed: 'coord', thu: 'coord', fri: ['volume', 'coord', 'frac-mult', 'dec-times-whole'] },
    26: { mon: 'measure-convert', tue: R('powers10', 'order-ops'), wed: R('dec-place', 'dec-round', 'dec-compare5'), thu: R('dec-add', 'dec-sub'), fri: ['measure-convert', 'powers10', 'order-ops', 'dec-round'] }
  };
  for (var wk = 27; wk <= 37; wk++) {
    var k = (wk - 27) * 4, pick = function (i) { return G5[(k + i) % G5.length]; };
    MORE[wk] = { mon: R(pick(0), pick(1)), tue: R(pick(2), pick(3)), wed: R(pick(4), pick(5), 'frac-equiv'), thu: R(pick(6), pick(7), G4A[wk % G4A.length]), fri: [pick(0), pick(2), pick(4), pick(6)] };
  }
  MORE[37].fri = { test: G5.slice(), count: 20, title: 'End-of-year benchmark test' };
  for (var mw in MORE) MATH[mw] = MORE[mw];

  var FULL_WEEKS = 37;      // v3: every week has all subjects (written lessons weeks 1-4, year-long banks after)
  var MATH_LAST_WEEK = 37;

  function mathLesson(week, role) {
    var spec = (MATH[week] && MATH[week][role]) || (week > 37 ? (MATH[27 + (week - 27) % 10] || {})[role] : null); if (!spec) return null;
    var test = spec && spec.test, review = spec && spec.review, challenge = Array.isArray(spec) || !!test;
    var topics = test ? spec.test : review ? spec.review : challenge ? spec : [spec];
    var id = 'w' + week + '-' + role + '-math';
    var info = challenge ? INFO.mixed : review ? INFO.review : INFO[spec];
    var learn = review ? INFO.review.learn.concat(topics.map(function (t) { return INFO[t] ? INFO[t].learn[0] : null; }).filter(Boolean)) : info.learn;
    var title = test ? spec.title + ' (no hints)' : challenge ? 'Math challenge (test day: no hints)' : review ? 'Mixed review: ' + topics.map(function (t) { var x = (INFO[t] || { title: t }).title; return x.charAt(0).toLowerCase() + x.slice(1); }).slice(0, 3).join(', ') : info.title;
    return { id: id, subject: 'math', type: 'math', title: title, mins: 40, topics: topics, challenge: challenge, review: !!review, learn: learn, count: test ? (spec.count || 20) : challenge ? 12 : 12, mastery: !challenge, core: true };
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
  // v3: every week gets a Friday game day; later weeks use generated brain teasers.
  function drillFor(week) { return week === 1 ? 'fluency-add' : week <= 4 ? 'fluency-mult' : week <= 6 ? 'fluency-div' : ['fluency-mult', 'fluency-div', 'fluency-mixed'][week % 3]; }
  function funLesson(week) {
    var f = FUN[week] || { drill: drillFor(week), target: Math.min(24, 14 + Math.floor(week / 3)), puzzles: [] };
    return { id: 'w' + week + '-fri-fun', subject: 'fun', type: 'fluency', title: 'Game day: fluency sprint and puzzles', mins: 25, drill: f.drill, target: f.target, seconds: 60, puzzles: f.puzzles.length ? f.puzzles : (root.Puzzles ? root.Puzzles.make(week, 3) : []) };
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

  var api = { INFO: INFO, MATH: MATH, FUN: FUN, mathLesson: mathLesson, funLesson: funLesson, drillFor: drillFor, ROLES: ROLES, weekOf: weekOf, roleOf: roleOf, monday: monday, lessons: lessons, forDate: forDate, dueThrough: dueThrough, find: find, contentWeeks: contentWeeks, ORDER: ORDER, FULL_WEEKS: FULL_WEEKS };
  if (isNode) module.exports = api; else root.Plan = api;
})(typeof window !== 'undefined' ? window : globalThis);
