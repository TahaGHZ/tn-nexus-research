# R&D method (phase 3)

How we turn findings and audited solutions into a ranked, phased plan for a case. The method
comes from the Kerker case study by Ahmed (21 November 2026), checked against seven
guardrails reviewed by our economist reviewer (EXP-TG-002). The `phase3-rnd` agent follows
this file. Records are written in the format of `templates/proposal.md`.

Scores are a first assessment. Operators (SONEDE, STEG, ANME, CRDA) and experts are meant
to challenge them. A proposal is a hypothesis, never a result.

## The 7 guardrails

Each guardrail does two things. It shapes the scores (as a penalty on one or more criteria),
and it is written up in the `guardrails` field of the proposal, one or two sentences each.

The figures below are the reviewer's orders of magnitude, given in a written review on
21 November 2026. They are expert opinion (tier B). Cite EXP-TG-002 for them, and replace
them with a published figure as soon as a source is found.

### G1. Judge static and dynamic effects

- Meaning: an option can look good today and bad later. Judge both.
- When scoring: use a 10-year horizon for `effect_10y`. Discount future costs and benefits
  at about 9-10%, the Tunisian long-term lending rate. An option that is fast but weak over
  10 years gets a high `speed` and a low `effect_10y` (Kerker: diesel, 5 and 1).
- Reviewer: a lower investment is not an environmental gain. Only clean energy improves
  environmental quality. The reviewer also suggested that a plan over this horizon combines
  new power capacity with awareness campaigns for farmers on pumping.

### G2. Count rebound effects

- Meaning: when energy or water gets cheaper to use, people use more.
- When scoring: cut the expected saving by the rebound. Reviewer's order of magnitude: about
  35% for air conditioning, about 50% for solar pumping. Direct rebound shows as more hours
  of use, so name hours of use as a measure. Backfire (total use rising) is plausible for
  solar pumping because the energy is nearly free. Such an option gets a low `side_effects`
  score unless a cap, such as a water budget, is part of it.

### G3. Look at who pays

- Meaning: say who bears the cost and who gets the benefit.
- When scoring: use `cost_fairness`. Raising tariffs on electricity sold below cost lowers
  consumption, but it falls on households and farmers. Rewards for reports and peak
  reduction risk going mostly to well-off households, so score them down unless the design
  prevents it. Options that reuse what exists and cost users nothing score high.

### G4. Do not move the problem

- Meaning: a fix that shifts the burden to another resource is not a fix.
- When scoring: compare effects in different units (kWh, m3, hectares, tonnes of CO2) with a
  multi-criteria comparison, not by forcing everything into money. An option that degrades a
  critical resource gets a penalty in `side_effects`, not exclusion. Keep the option in the
  table so readers can see why it ranks low. Examples: desalination adds load to the grid;
  unlimited solar pumping drains aquifers.

### G5. Separate correlation from causation

- Meaning: two things happening together is not a cause.
- When scoring: give a high `fixes_cause` score only to an option aimed at a cause that has
  evidence. Where the cause is contested, test it before picking a side. With limited data,
  use time series, for example cut dates against the daily demand and temperature series.
  The heatwave versus under-investment debate is contradictory: do not pick one without a
  test. Put the test in `data_needed` and lower `evidence` until it is done.

### G6. Use honest data

- Meaning: no source, no number.
- When scoring: every figure cites a `SRC` id (see `CLAUDE.md`, Rule 4). If a source is
  missing, write the item under `data_needed`, not in the text. Prefer INS for economic data
  and ANME for environmental and energy data. Show contested figures as contested, for
  example the national deficit estimates, which range from 400 to 1,500 MW in the case. The
  reviewer's view is to require a source rather than average conflicting figures. Keep
  `evidence` low where the case's own data is missing.

### G7. Keep humans responsible

- Meaning: people decide, the AI prepares.
- When scoring: never present a ranking as a decision. Strategic investment decisions must
  not be delegated to an AI, even as a recommendation. Every AI output, including ours, is
  verified by a person: the `source-verifier` agent, then a teammate, then operators and
  experts. Say in the `Verification` section what was checked and by whom. The plan names
  human owners for every step.

For the jury demo the reviewer would keep G1, G5 and G6.

## The R&D workflow

The Kerker case did these steps by hand in one day, from about 40 public sources. The
steps are the same for any case.

1. **Collect and trust-rate sources.** Gather every public signal on the case. Rate each
   source: operator notices and official statistics high; independent analysis and
   research medium-high to high; utility statements medium (a party in the debate); press
   medium, check the original; crowdsourced reports medium-low alone and high when many
   agree; expert input is field knowledge that confirms or corrects the data. Map the
   rating to our tiers (A, B, C) when creating `SRC` records. Reuse existing `SRC` records.
2. **Rebuild the timeline.** Put every dated event on one line of time, with its source.
   Read the case against what the grid, the weather and the operators were doing. Look for
   patterns, such as the same node failing before, or events outside the expected peak.
3. **Map the factors.** For each factor, give the evidence and the lever: who can act on it
   and how. Separate national factors from local ones. Local factors are often the cheapest
   and fastest to act on.
4. **List what a quick look would miss.** Cross-check sources and write the insights that
   change which option makes sense. Each insight ends with what follows from it.
5. **Score the options.** List every option considered, including the obvious ones that
   move the problem. Score each from 1 (poor) to 5 (good) on six criteria:
   - `fixes_cause`: does it address a cause with evidence (G5)?
   - `speed`: how soon does it work?
   - `effect_10y`: effect over 10 years, discounted (G1, G2).
   - `side_effects`: 5 means none (G2, G4).
   - `cost_fairness`: cost over 10 years and who pays (G3).
   - `evidence`: how well it is shown to work, using sourced data (G6).

   `total` is the sum, out of 30. The guardrails act as penalties inside the six scores, as
   described above. Add a one-sentence `note` per option. Rank by total, but read the
   notes: a tie or a close call is a reason to ask an expert, not to pick.
6. **Turn the top options into a phased plan.** Phases: `now` (weeks), `next` (months),
   `later` (years), `always` (repeated every season). Each step has an owner and a
   measure. Owners are people or institutions, not the AI.
7. **List the data still needed, and who holds it.** Name the holder (SONEDE, STEG, CRDA,
   vendors, farmers). Do not guess the missing value.
8. **Set re-score triggers.** Name the events that would change the ranking, and say
   which way. Re-score every season.

## Worked example: Kerker (short)

Case: the Kerker pumping station (Mahdia) stopped on 26-27 July and 24 August 2026, cutting
water in Mahdia and Sfax. Both cuts began outside the 13h-17h air-conditioning peak, and
SONEDE did not link them to load shedding. The weak point is local: one station with no
protected power and no downstream buffer. Eight options were scored. Top: forecast risky
days, pre-fill reservoirs and alert users (24/30). Then critical-load status and a second
feed (22), a bigger downstream buffer (20). Last: diesel at the station (15) and unlimited
farm solar pumps (13), penalised under G1, G2 and G4. The plan runs now (risk score,
pre-fill), next (critical-load status), later (backup, solar with a farm water budget) and
always (re-score each season). The cause of the cuts is still unknown, so it is listed under
`data_needed` (STEG).

Source: Ahmed's case study, 21 November 2026. The scores there are his first assessment and
need checking against sources before they go into a `PRP` record.
