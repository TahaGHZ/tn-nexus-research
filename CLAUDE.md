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
needed, note the idea in the issue or PR and stop there.

## Rule 2: claim before you work

Other Claudes are working in this repo at the same time. Before researching anything:

1. `git pull`, then `gh issue list --state open` and `gh pr list --state open`. If an open
   issue covers your topic, do not start; pick another topic or ask your human.
2. Open an issue titled `[P1] <topic>` (or `[P2]`, `[P3]`), assigned to your human. One
   sentence on scope. This is the claim.
3. Create branch `p1/<issue#>-<slug>` and open a **draft PR** with `Closes #<issue#>` right
   after the first commit, so work in progress is visible.
4. When done, mark the PR ready. Another team member reviews and merges.

A claim with no commit for 48 hours is stale: comment on the issue, then anyone may take it.

The `/claim <topic>` command does steps 1 to 3.

## Rule 3: record IDs come from the issue number

`<TYPE>-<issue#>-<nn>`, for example `FND-12-01`, `SRC-12-03`. File name: `<ID>-<slug>.md`.
This is what prevents two Claudes from creating the same ID. Only touch records created under
your own claim; to change someone else's record, comment on their PR or open an issue.

## Rule 4: every number has a source

- Each record is a markdown file with YAML frontmatter, copied from `templates/`. Keep the
  field names exactly; the engine will parse them.
- Every figure, date and factual claim cites a `SRC` id. No source, no number: write it under
  `data_gaps` instead.
- Never cite from memory. Open the source, and paste the exact extract into the `SRC` record
  in its original language (French and Arabic extracts stay untranslated; add an English gloss).
- Before creating a `SRC` record, search `research/sources/` for the URL to reuse an existing one.
- Source tiers: **A** official statistics, peer-reviewed papers, datasets. **B** reports from
  institutions, donors, NGOs; expert interviews. **C** press, blogs, company material. A claim
  resting only on tier C must say so and is `confidence: low`.
- Records are written in English. Use the vocabulary in `docs/taxonomy.md` for sectors,
  themes and regions.

## Picking a topic

Phase 1 is open-ended: there is no fixed number of problems. To pick one, list the `sectors`,
`theme` and `timeframe` of existing findings (`/status` does this) and choose a combination
that is thin or missing. Prefer problems where sectors interact (for example energy used to
pump water for crops), and cover past decisions and predicted problems, not only current ones.

## Experts

People who contribute research are recorded in `research/experts/` from the template. Their
unpublished material is confidential: summarise only what they agreed to share, and record
any link between them and a solution we evaluate under `conflict_of_interest`. Solutions from
our own contacts get the same audit as everything else.
