/* Content registry + question helpers.
   Lessons are plain data. Choice options are shuffled at play time (answers never sit in a fixed spot).
   Every item carries `why` — the full explanation shown after a miss (and a short version after a hit). */
(function (root) {
  'use strict';
  var C = { lessons: {}, weeks: {}, spelling: {}, verses: {} };

  // Multiple choice. a = index of the correct option in `options`.
  C.Q = function (q, options, a, why, hint) { return { kind: 'choice', q: q, options: options, a: a, why: why, hint: hint || '' }; };
  // Typed answer. answers = accepted answers (case/punctuation-insensitive unless q.exact = true).
  C.T = function (q, answers, why, hint) { return { kind: 'text', q: q, answers: [].concat(answers), why: why, hint: hint || '' }; };

  // lesson registry
  C.add = function (l) {
    if (C.lessons[l.id]) throw new Error('duplicate lesson id ' + l.id);
    C.lessons[l.id] = l; return l;
  };

  // week -> role -> [lessonIds]   (role: mon tue wed thu fri)
  C.plan = function (week, role, ids) { (C.weeks[week] = C.weeks[week] || {})[role] = ids; };

  C.SUBJECTS = {
    math: { name: 'Math', color: '#2f6fed' }, grammar: { name: 'Language Arts', color: '#c2418c' }, spelling: { name: 'Spelling', color: '#8a4fd6' },
    reading: { name: 'Reading', color: '#d8561f' }, writing: { name: 'Writing', color: '#0e8f7a' }, science: { name: 'Science', color: '#2a9d3c' },
    social: { name: 'Social Studies', color: '#b8860b' }, bible: { name: 'Bible', color: '#5b4bb7' }, fun: { name: 'Game Day', color: '#e0457b' }
  };

  var api = C;
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Content = api;
})(typeof window !== 'undefined' ? window : globalThis);
