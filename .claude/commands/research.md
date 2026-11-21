---
description: Research one or more phase 1 topics in your lane, verify them and push
argument-hint: <topic> [; <second topic> ; ...]
---

Research: $ARGUMENTS

1. Read `PHASES.md` (stop if phase 1 is locked) and `LANES.md`. Run `git pull --rebase`.
   Confirm each topic is inside your human's lane; if one is not, say whose lane it is and
   drop it.
2. Search `research/phase1-findings/` for existing findings on each topic. If one is already
   covered, show it and ask whether to extend it or skip.
3. Work out the next free record numbers for your human's initials. With several topics,
   give each its own block of ten.
4. Run one `phase1-investigator` agent per topic, in parallel if there are several. Give each
   its topic, the initials, and its number block.
5. Run `source-verifier` on the new records. Have the problems fixed, then set the passing
   records to `status: in-review`.
6. Commit, `git pull --rebase`, push to `main`.
7. Report per topic: records created, confidence, data gaps, and links to other sectors that
   the cross-sector lane owner should know about.
