---
description: Research phase 1 topics in one of your lanes, verify them and push
argument-hint: <lane name> | <topic> [; <second topic> ; ...]
---

Research: $ARGUMENTS

1. Read `PHASES.md` (stop if phase 1 is locked) and `LANES.md`. Run `git pull --rebase`.
2. Decide the topics.
   - If the argument is a lane name (`energy`, `water`, `agriculture`, `cross-sector`):
     confirm the lane is your human's, read the existing findings in it, and choose up to
     five topics from that lane's themes in `docs/taxonomy.md` that have no findings yet or
     only cover one timeframe. Cover past and predicted problems as well as current ones.
     List the chosen topics in one line each and continue without waiting.
   - If the argument is a list of topics: confirm each belongs to one of your human's lanes;
     drop any that does not and say whose lane it is. Skip topics already covered and say so.
3. Work in one lane per run. Find the highest record number already used in that lane's
   range and give each topic its own block of ten above it.
4. Run one `phase1-investigator` agent per topic, all in parallel. Give each its topic, the
   lane, the initials and its number block.
5. Run `source-verifier` on the new records. Have the problems fixed, then set the passing
   records to `status: in-review`.
6. Commit only the files created in this run, `git pull --rebase`, push to `main`.
7. Report per topic: records created, confidence, data gaps, and links to other sectors.
