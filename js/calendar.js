/* Fulton County Schools 2026-27 calendar, applied to home-school days.
   Off days come from the official calendar (approved 12/19/2024).
   Everything is editable by the parent in Settings (extra off days / make-up days). */
(function (root) {
  'use strict';

  var START = '2026-10-13';          // Ava's first day
  var LAST_DAY = '2027-05-27';       // last day of Fulton school year
  var REQUIRED_DAYS = 180;           // Georgia home study requirement (O.C.G.A. 20-2-690)

  // Date ranges (inclusive) that are NOT school days. Weekends handled separately.
  var OFF_RANGES = [
    ['2026-10-12', '2026-10-12', 'Holiday'],
    ['2026-11-23', '2026-11-27', 'Thanksgiving Break'],
    ['2026-12-21', '2027-01-01', 'December Break / New Year'],
    ['2027-01-04', '2027-01-04', 'Teacher Workday'],
    ['2027-01-18', '2027-01-18', 'MLK Jr. Holiday'],
    ['2027-02-15', '2027-02-19', 'Winter Break / Teacher Workday'],
    ['2027-03-15', '2027-03-15', 'Holiday'],
    ['2027-04-05', '2027-04-09', 'Spring Break'],
    ['2027-05-31', '2027-05-31', 'Memorial Day']
  ];

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function iso(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function parse(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2], 12, 0, 0); }
  function addDays(s, n) { var d = parse(s); d.setDate(d.getDate() + n); return iso(d); }

  function offReason(s, extraOff) {
    var d = parse(s), dow = d.getDay();
    if (dow === 0 || dow === 6) return 'Weekend';
    for (var i = 0; i < OFF_RANGES.length; i++) {
      if (s >= OFF_RANGES[i][0] && s <= OFF_RANGES[i][1]) return OFF_RANGES[i][2];
    }
    if (extraOff && extraOff.indexOf(s) >= 0) return 'Day off (parent)';
    return null;
  }

  function isSchoolDay(s, opts) {
    opts = opts || {};
    if (s < (opts.start || START)) return false;
    if (opts.makeup && opts.makeup.indexOf(s) >= 0) return true;
    return offReason(s, opts.extraOff) === null;
  }

  // List of school days from start through `through` (or a safe max of 260 days / ~ end of July 2027).
  function schoolDays(opts) {
    opts = opts || {};
    var start = opts.start || START;
    var through = opts.through || '2027-08-31';
    var out = [], d = start;
    while (d <= through) {
      if (isSchoolDay(d, opts)) out.push(d);
      d = addDays(d, 1);
    }
    return out;
  }

  // Which numbered school day (1-based) is this date? 0 if not a school day.
  function dayNumber(s, opts) {
    var list = schoolDays(Object.assign({}, opts, { through: s }));
    var i = list.indexOf(s);
    return i < 0 ? 0 : i + 1;
  }

  // Date of the Nth school day.
  function dateOfDay(n, opts) {
    var list = schoolDays(opts);
    return list[n - 1] || null;
  }

  // Next school day on/after s.
  function nextSchoolDay(s, opts) {
    var d = s;
    for (var i = 0; i < 400; i++) { if (isSchoolDay(d, opts)) return d; d = addDays(d, 1); }
    return null;
  }

  // Day-of-week label.
  var DOW = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var MON = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  function pretty(s) { var d = parse(s); return DOW[d.getDay()] + ', ' + MON[d.getMonth()] + ' ' + d.getDate(); }
  function short(s) { var d = parse(s); return (d.getMonth() + 1) + '/' + d.getDate(); }

  // Week number (1-based) and weekday index (0=Mon..4=Fri) of the Nth *curriculum* day:
  // curriculum is built as weeks of 5 lessons (Mon..Fri roles). The Nth school day maps to
  // week ceil(N/5), role (N-1)%5. This keeps the lesson pattern intact across holidays.
  function lessonSlot(n) { return { week: Math.ceil(n / 5), role: (n - 1) % 5 }; }

  // Projection: given completed school days so far, what date do we hit 180?
  function projection(completedDays, opts) {
    opts = opts || {};
    var all = schoolDays(Object.assign({}, opts, { through: '2028-06-30' }));
    var d180 = all[REQUIRED_DAYS - 1] || null;
    var fultonEnd = LAST_DAY;
    var inYear = all.filter(function (x) { return x <= fultonEnd; }).length;
    return { required: REQUIRED_DAYS, scheduledByMay27: inYear, shortBy: Math.max(0, REQUIRED_DAYS - inYear), date180: d180 };
  }

  var api = {
    START: START, LAST_DAY: LAST_DAY, REQUIRED_DAYS: REQUIRED_DAYS, OFF_RANGES: OFF_RANGES,
    iso: iso, parse: parse, addDays: addDays, offReason: offReason, isSchoolDay: isSchoolDay,
    schoolDays: schoolDays, dayNumber: dayNumber, dateOfDay: dateOfDay, nextSchoolDay: nextSchoolDay,
    pretty: pretty, short: short, lessonSlot: lessonSlot, projection: projection
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Cal = api;
})(typeof window !== 'undefined' ? window : globalThis);
