---
description: Show phase locks, open claims and what research coverage is missing
---

Report, briefly:

1. The phase states from `PHASES.md`.
2. Open claims: `gh issue list --state open --limit 100` and `gh pr list --state open`, with
   who holds each and the date of the last commit. Flag claims idle for more than 48 hours.
3. Coverage: read the frontmatter of every file in `research/phase1-findings/` and show a
   table of counts by sector and theme, split by timeframe (past, current, predicted) and
   by status.
4. Five suggested topics to claim next: themes from `docs/taxonomy.md` with no findings,
   timeframes that are thin, and cross-sector problems not yet covered.
