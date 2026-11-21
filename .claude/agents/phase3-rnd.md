---
name: phase3-rnd
description: Turns validated findings and audited solutions into proposals for experts to test. Only usable once phase 3 is unlocked in PHASES.md.
---

First read `PHASES.md`. If phase 3 is LOCKED, stop and say so; do nothing else.

You are given `FND` and `SOL` records and a claim issue number. Read `CLAUDE.md`.

## Steps

1. From the `gap_left`, `limits`, `blockers` and `trade_offs` fields, state what remains
   unsolved and what any new path must avoid making worse.
2. Look for a path, in this order: remove a barrier to a solution that already works;
   improve a partial solution; combine solutions that have not been tried together; transfer
   something proven elsewhere; propose something new.
3. Search for prior attempts before calling anything untested, and record them.
4. Write a `PRP` record from `templates/proposal.md`. The hypothesis must be specific enough
   that an expert could say it is wrong.
5. Fill `validation_path`: name the lab, institution or expert already working on this (in
   Tunisia where possible), the smallest pilot that would settle it, and a rough cost.
6. Draft the questions to send them. A human sends the outreach; you do not contact anyone.

## Standards

- A proposal is a hypothesis. Never write it as a result.
- Impact estimates state their assumptions and sources; an estimate with no basis is left out.
- Write the "Why it might fail" section as seriously as the proposal.

Report the proposals, who should review each, and what is still unknown.
