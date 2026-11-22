---
name: phase3-rnd
description: Turns validated findings and audited solutions into scored, phased proposals (PRP records) for experts to test. Only usable once phase 3 is unlocked in PHASES.md.
---

First read `PHASES.md`. If phase 3 is LOCKED, stop and say so; do nothing else.

You are given a case or question, `FND` and `SOL` records, and your human's initials. Read
`CLAUDE.md`, `LANES.md` (stay in your human's lane and number range) and `docs/rnd-method.md`.
Follow the method in that file. Write each proposal in `research/phase3-proposals/` as
`PRP-<initials>-<nnn>-<slug>.md`, from `templates/proposal.md`.

## Steps

1. State the question and the case. List the `FND` and `SOL` records you build on. From their
   `gap_left`, `limits`, `blockers` and `trade_offs` fields, state what remains unsolved and
   what any new path must avoid making worse.
2. Collect and trust-rate sources. Reuse existing `SRC` records; create new ones only after
   opening the source (Rule 4 in `CLAUDE.md`).
3. Rebuild the timeline of the case, each event with a `SRC` id.
4. Map the factors: factor, evidence, lever.
5. Write what a quick look would miss.
6. List every option, the obvious ones too. Look for paths in this order: remove a barrier to
   a solution that already works; improve a partial solution; combine solutions not yet tried
   together; transfer something proven elsewhere; propose something new. Search for prior
   attempts before calling anything untested.
7. Score each option 1 to 5 on the six criteria (`fixes_cause`, `speed`, `effect_10y`,
   `side_effects`, `cost_fairness`, `evidence`). `total` is the sum, out of 30. Apply the 7
   guardrails as penalties inside the scores, and fill the `guardrails` field with one or two
   sentences per guardrail. Use a 10-year horizon and a 9-10% discount rate; count rebound
   (about 35% air conditioning, about 50% solar pumping); never exclude an option, penalise it.
8. Turn the top options into a plan: phases `now`, `next`, `later`, `always`, each with an
   owner (a person or institution, never the AI) and a measure.
9. Fill `data_needed` with the item and who holds it, `rescore_triggers`, `assumptions` and
   `validation_path` (reviewer, smallest pilot, rough cost). Name the lab, institution or
   expert already working on this, in Tunisia where possible.
10. Write the body sections in this order: The question, What happened, Why it happened,
    What a quick look would miss, Options and scores, Recommended plan, What we do not know,
    Why it might fail, Verification.
11. Draft the questions for experts and operators. A human sends them.

## Standards

- A proposal is a hypothesis. The hypothesis must be specific enough that an expert could say
  it is wrong. Never write it as a result.
- Every figure, date and claim cites a `SRC` id. No source, no number: put it under
  `data_needed`. Prefer INS for economic data and ANME for environmental and energy data.
  Show contested figures as contested. Figures from the economist reviewer cite EXP-TG-002.
- Test causes before choosing between them (time series where data is thin). Do not pick
  between contested explanations without a test.
- Impact estimates state their assumptions and sources; an estimate with no basis is left out.
- Scores are a first assessment for operators and experts to challenge. Say so in the record.
- Never present a ranking as a decision. Strategic investment decisions are for humans. State
  in `Verification` what was checked and by whom.
- Do not contact anyone. A human sends the outreach. Do not name the economist reviewer or his
  thesis; call him "our economist reviewer".
- Write the "Why it might fail" section as seriously as the proposal.
- Set `status: draft`. Only the `source-verifier` agent passes a record to `in-review`.

Report the proposals, who should review each, and what is still unknown.
