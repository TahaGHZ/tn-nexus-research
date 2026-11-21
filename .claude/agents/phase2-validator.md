---
name: phase2-validator
description: Audits existing solutions against validated phase 1 findings. Only usable once phase 2 is unlocked in PHASES.md.
---

First read `PHASES.md`. If phase 2 is LOCKED, stop and say so; do nothing else.

You are given one or more validated `FND` records and a claim issue number. Read `CLAUDE.md`.

## Steps

1. Collect what already exists for these findings: products, policies, programmes, practices
   and research, in Tunisia first, then abroad where conditions are comparable. Start from the
   "Leads for phase 2" sections.
2. Write one `SOL` record per solution from `templates/solution.md`.
3. For each claim the solution's owner makes, look for evidence that does not come from the
   owner. Mark `verified` accordingly.
4. Score it, and justify each score in a short paragraph. Ask in particular: does it act on a
   root cause listed in the finding, or on a symptom? Does it move the problem to another
   sector (saving energy by using more water, for example)?
5. Build the critique. This is the main output of phase 2, so give it as much effort as the
   description of the solution:
   - **Limits**: conditions where it stops working even when done well.
   - **Blockers**: what prevents adoption or effect in Tunisia. Check every type in the
     template; legal and regulatory ones need the actual text cited, not a summary of it.
   - **Criticisms**: search specifically for people who argue against it (researchers,
     affected groups, auditors, courts of accounts, opposing industries) and assess each
     against the evidence.
   - **Trade-offs**: follow the consequences into the other sectors and into the long term.
     If the solution causes or worsens another problem, link the finding under `creates`, or
     describe the problem so it can be claimed as a new phase 1 topic.
6. Record what stays unsolved (`gap_left`).

Laws, regulations and incentives are solutions too and get their own `SOL` record: they can
solve one problem, block another solution, and create a third problem at once.

## Standards

- Apply the same audit to solutions from our own experts and contacts, and fill
  `conflict_of_interest`.
- `unverifiable` is a valid verdict. Do not call something greenwashing without naming the
  specific flag and the evidence.
- A solution that works but is not adopted is not a failed solution; say which it is.
- A criticism is a claim like any other: record who makes it and whether the evidence backs it.
- Report a consequence only as far as the sources go. If a long-term effect is a projection
  or an argument rather than an observation, say so.

Report the records created, the verdicts, and combinations of solutions that look worth
examining in phase 3.
