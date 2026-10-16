# Ava's School v4 (Phase 2)

## Required time per assignment
- Parent → Settings → "Required time per assignment": minutes per block (defaults = schedule minutes; a block with two assignments splits them), plus an optional per-lesson override for any day. Stored as `settings.reqMins` / `settings.reqLesson` (new, additive).
- Opening an assignment shows a countdown in the header. It counts only while the page is visible and focused and she is active (the "Still working?" check pauses it). Progress is saved in `reqt['lessonId|date']` (merged by max), so reloads, closing the app, or switching devices resume it.
- Work finished early -> a "Work finished!" page with the countdown and optional review ideas; nothing is marked done until the countdown reaches 0. Leaving shows a friendly reminder (allowed; time is kept).
- When both are met she is credited exactly X minutes: time entry `cr-<date>-<lessonId>` (src `credit`). A credit replaces the tap/timer time logged for the same lesson and date, so nothing is double counted, and the fixed id means two devices never credit twice.
- Timer blocks (novel, PE, rotation) keep their wall-clock timer (the activity happens away from the screen) but use X as the target and credit exactly X.
- PIN override: "Parent: count it as finished now" on the waiting page / "Parent: allow finishing now" on timer blocks, and "Mark finished" in the per-lesson list (credits X, no stars).
- Lessons finished before this version are not re-gated.

## Past days (catch-up)
- New "📅 Past days" tab: every school day from the first school day to today, newest first, with school-day number, blocks finished and minutes. Opening a day shows that day's full schedule.
- Work on a past day's lesson is credited to that lesson's own date (derived from its id), so that day can reach 270 minutes and count toward 180. Stars go to that date's week, unless that week is already marked paid: then they go to the current week (`origWeek` records the original). The streak is only advanced by today's work.
- Parent → Settings → Calendar: "First school day" (`settings.startDate`, which the app now actually uses).

## Safety
- Same localStorage key; only new fields. Merge keeps `reqt`, prefers the finished record if one device finished a lesson. Old v3 devices keep all new data (unknown keys are merged, not dropped).
- sw.js cache `ava-school-v4`; precache now bypasses the HTTP cache and network fetches revalidate, so updates arrive as one consistent set.

# Ava's School v3 (Phase 1)

## Sync and saved-data safety
- `Store.merge` keeps every key it does not know (from a newer version) and merges unknown maps by record. Nothing is renamed or removed; the localStorage key is unchanged.
- `sync.js` keeps any extra fields in the cloud wrapper and refuses to overwrite a damaged cloud copy.
- New `time` map: every stretch of learning time is its own entry with a unique id. Merge = union by id, and the same id keeps its larger value, so two devices never drop or double-count minutes. The old `attendance[date].mins` field is still written for older versions.
- `sw.js`: cache `ava-school-v3`, every new file precached (checked: 42 of 42 cached, the app reloads offline).
- `config.js` unchanged.

## Time tracking (section 3)
- Lessons count time while open and active, saved every 15 seconds (not only at the end). After 3 idle minutes a "Still working?" check pauses the clock.
- Offline blocks (novel, PE, art, music, nature, project) use start/pause timers that keep running on Home and stop by themselves at the block's target.
- The day-counts threshold is a parent setting (default 270 minutes). The "extra minutes" box only adds minutes, by subject and with a note; a day counts on its own when the total reaches the threshold.
- Lessons are assigned by school-day number, so Monday holidays (Jan 4, Jan 18, Mar 15) no longer drop lessons and Saturday make-up days get the next day's lessons.

## No empty days (section 2)
- Every school day through summer has every subject. Weeks 1–4 keep their written lessons (same ids, same dates) plus daily practice.
- New year-long banks for weeks 1–37: science, social studies, reading (an original passage each week), grammar (20 items a week), spelling (a 12-word list each week), a Bible reading plan (Genesis through Acts), 190 journal prompts, rotation activities, and 8 monthly writing projects.
- Math generators for the rest of 4th grade and 5th-grade preview (factors through fractions, decimals, volume, coordinates), with a plan through week 37. 15,200 generated problems are checked automatically.

## The 4.5-hour day (section 1)
- `js/schedule.js`: 11 blocks = 270 minutes (Bible 20, math 40, facts 10, reading 25, novel 30, grammar + spelling 25, writing 25, science 25, social studies 25, PE 20, rotation 25), plus breaks and lunch that are not counted. `Plan.forDate` returns `blocks` with the lessons.
- Math practice keeps going until she gets 8 of her last 10 right on the first try (at most 15 extra problems).
- Once a block's lesson is done, "Keep practicing" fills the remaining minutes (up to 10 extra stars per block per day).

## Look and feel (section 4)
- Home: timeline with clock times, per-block progress bars, start/pause timers, a star that lights up for each finished block, a constellation of today's blocks, and an "X of 270 minutes" ring.
- Streak, levels by hours (11 levels up to 810 hours), and new hour and full-schedule badges.
- Confetti on finishing (off when the device asks for reduced motion).
- SVG pictures: fraction bars, place-value charts, hundred grids, rectangles, angles, coordinate grids, boxes, and a compass rose. Bigger lesson cards.
- Parent: hours today, this week, and this year against 4.5 a day; minutes by subject; days counted out of 180; a printable hours record (`#/hours`).

## Money (section 5)
- Weekly max $15. A full, solid week (every block done, about 80% right on the first try) earns about 950–1,000 stars, so the default is **65 stars = $1**.
- Devices still on the old untouched defaults (50 stars/$, $10) move to the new ones automatically. Custom values are kept.

## Review fixes (before release)
- `config.js`: the delivered copy had blank Firebase settings; the live settings were kept unchanged.
- Day totals: removing parent-added minutes now lowers the day total. Before, the legacy minutes field kept the old, higher number. Minutes logged by an older app version on the same day are added to the time entries (tracked with `attendance[date].tmins`) instead of being hidden by a max().
- Merge: a removal wins a same-millisecond tie; the reading log (`readlog`) is a known, merged key; duplicate event-log lines from repeated syncs are removed.
- Sync: after a background sync, unchanged records keep the same objects, so a journal being typed (or any open screen) keeps saving into the live state and isn't orphaned.
- Lesson time is saved when the iPad sleeps or the app is switched away (not only every 15 seconds).
- The printable hours record has a total-hours-by-subject row.
- Yearly totals (days counted, total hours) are computed in one pass over the time entries, so they stay fast as entries pile up.
