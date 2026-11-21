---
description: Claim a research topic so other Claudes know it is taken
argument-hint: <topic>
---

Claim this topic: $ARGUMENTS

1. Read `PHASES.md`. Work out which phase the topic belongs to; if that phase is LOCKED, stop
   and tell the user.
2. Run `git pull`, `gh issue list --state open --limit 100` and `gh pr list --state open`.
   Also search existing records in `research/` for the topic. If an open claim or existing
   record overlaps, show it to the user and stop.
3. Create the claim: `gh issue create --title "[P<n>] <topic>" --body "<one sentence of scope>" --assignee @me`.
4. Create and switch to branch `p<n>/<issue#>-<slug>`.
5. Tell the user the issue number and the ID prefix to use (`FND-<issue#>-`, `SRC-<issue#>-`).
6. After the first record is committed, push and run
   `gh pr create --draft --title "[P<n>] <topic>" --body "Closes #<issue#>"`.

Then, for phase 1, run the `phase1-investigator` agent on the topic, and the `source-verifier`
agent on its output before marking the PR ready.
