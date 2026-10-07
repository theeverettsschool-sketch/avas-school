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
