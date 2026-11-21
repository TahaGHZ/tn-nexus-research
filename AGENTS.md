# Instructions for coding agents (Codex and others)

The rules of this repo are in `CLAUDE.md`. They apply to every agent, whatever tool runs it.
Read `CLAUDE.md`, `PHASES.md` and `LANES.md` before doing anything.

## What differs outside Claude Code

The `/research` and `/status` commands and the agents under `.claude/agents/` are Claude Code
features. Without them, do the same work yourself by following these files as procedures:

| Instead of | Follow |
|---|---|
| `/research <lane or topic>` | `.claude/commands/research.md` |
| the `phase1-investigator` agent | `.claude/agents/phase1-investigator.md` |
| the `source-verifier` agent | `.claude/agents/source-verifier.md` |
| `/status` | `.claude/commands/status.md` |

Where those files say to run an agent, do that step yourself, one topic at a time. Verify a
record in a separate pass after writing it: reopen each cited source and check the value,
unit, year and geography before setting `status: in-review`.

## Continuing paused research

Each lane that was paused has a file in `docs/resume/` (`energy.md`, `water.md`,
`agriculture.md`). To continue a lane:

1. `git pull --rebase`. Read the lane's resume file and the existing records in its number
   range (see `LANES.md`).
2. Work through the resume file in this order: apply verifier flags that were left
   unapplied; verify records still at `draft`; finish topics that were partly researched;
   only then follow the listed leads into new findings.
3. Start new findings from a specific, documented issue (an incident, a stalled project, a
   law and its effects, an audit report) and trace outward to the general problem.
4. Use record numbers above the highest already used in the lane's range.
5. Update the resume file as you go, so the next session can continue from it.
6. Commit only the lane's files and push to `main` after each topic.

## Setup on Windows

Record file names are long. Run `git config core.longpaths true` in the clone, or checkouts
and pulls fail with "Filename too long".
