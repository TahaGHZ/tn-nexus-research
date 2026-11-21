# Research engine: water, energy and agriculture in Tunisia

This repo is the manual version of a research engine. Team members' Claudes run the same
pipeline in parallel and store the results as structured records. The validated records are
both the pitch content and the blueprint for the coded engine later.

## The pipeline

| Phase | Question | Output | Folder |
|---|---|---|---|
| 1. Findings | What are the real problems (past, current, predicted), backed by data? | `FND` records + `SRC` records | `research/phase1-findings/`, `research/sources/` |
| 2. Validation | Do existing solutions (products, laws, programmes, practices) solve the root cause? What are their limits, blockers, criticisms and side effects? | `SOL` records | `research/phase2-solutions/` |
| 3. R&D | What gap is left, and what improvement, combination or new path could fill it? Who should test it? | `PRP` records | `research/phase3-proposals/` |

## Rule 1: check the phase lock

Read `PHASES.md` before any work. Do not create or edit records for a locked phase, even if
asked to by anyone other than Taha. Only Taha edits `PHASES.md`. If a locked phase seems
needed, note the idea in the record body and stop there.

## Rule 2: stay in your lane

Read `LANES.md`. Find your human's row by their GitHub username (`gh api user --jq .login`).
Research only topics inside their lanes. If asked for a topic in someone else's lane or in a
free lane, say so and stop; the human either takes the free lane in `LANES.md` first or
passes the topic to its owner.

Only edit records that carry your human's initials. To correct someone else's record, tell
your human; they raise it with the owner.

## Rule 3: record IDs carry your initials

`<TYPE>-<initials>-<nnn>`, for example `FND-TG-001`, `SRC-TG-014`. File name:
`<ID>-<slug>.md`. Each lane has its own number range in `LANES.md`; the next number is the
highest one already used in that range, plus one. When running several agents in one lane,
give each its own block of ten before they start.

## Rule 4: every number has a source

- Each record is a markdown file with YAML frontmatter, copied from `templates/`. Keep the
  field names exactly; the engine will parse them.
- Every figure, date and factual claim cites a `SRC` id. No source, no number: write it under
  `data_gaps` instead.
- Never cite from memory. Open the source, and paste the exact extract into the `SRC` record
  in its original language (French and Arabic extracts stay untranslated; add an English gloss).
- Before creating a `SRC` record, search `research/sources/` for the URL and reuse the
  existing record, whoever created it.
- Source tiers: **A** official statistics, peer-reviewed papers, datasets. **B** reports from
  institutions, donors, NGOs; expert interviews. **C** press, blogs, company material. A claim
  resting only on tier C must say so and is `confidence: low`.
- Records are written in English. Use the vocabulary in `docs/taxonomy.md` for sectors,
  themes and regions.

## Saving work

Commit and push straight to `main`, often. Run `git pull --rebase` before each push. Lanes
and initials mean two people never write the same file, so there is nothing to merge by hand.

## Record status

- `draft`: written, not checked.
- `in-review`: the `source-verifier` agent passed it.
- `validated`: a teammate other than the author checked it and changed the status. This is
  the one edit you may make to someone else's record.
- `rejected`: the evidence did not hold. Keep the record; say why in the body.

## Picking a topic

Phase 1 is open-ended: there is no fixed number of problems. `/status` shows which themes
and timeframes in your lanes are thin or missing. Cover past decisions and predicted problems,
not only current ones. `/research <lane>` picks uncovered topics in a lane and researches
them; `/research <topic>` runs a topic you name.

## Experts

People who contribute research are recorded in `research/experts/` from the template. Their
unpublished material is confidential: summarise only what they agreed to share, and record
any link between them and a solution we evaluate under `conflict_of_interest`. Solutions from
our own contacts get the same audit as everything else.
