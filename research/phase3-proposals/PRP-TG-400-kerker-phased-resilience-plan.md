---
id: PRP-TG-400
title: "Protect the Kerker pumping station first: forecast risky days and pre-fill reservoirs now, win critical-load status with STEG next, then add a bigger buffer and solar with a farm water budget, rather than diesel, desalination alone or unlimited solar pumps"
status: draft
type: combine
case: "Kerker pumping station (SONEDE), Mahdia and Sfax, summer 2026"
question: "Why did our taps run dry this summer, and what can we actually do before next summer?"
sectors: [water, energy, agriculture]
geography: [centre-east, mahdia, sfax]
addresses: [FND-TG-220, FND-TG-250, FND-TG-270, FND-TG-450, FND-TG-451, FND-TG-400]
builds_on: [SOL-TG-420, SOL-TG-110, SOL-TG-100]
run: RUN-TG-001
hypothesis: "If SONEDE can keep the Kerker area supplied for a few more hours after a power cut (through pre-filled reservoirs, a protected feeder and a larger downstream buffer), the 10 to 18 hour outages of summer 2026 should shrink to a fraction of that, because each stop also stops the reservoirs filling and restart takes hours (SRC-TG-687). The size of the gain is not yet estimated: no reservoir, pump or feeder data have been seen."
guardrails:
  - id: G1
    name: Static and dynamic effects
    applied: "Every option is judged over a 10-year horizon with future costs and benefits discounted at about 9-10%, the Tunisian long-term lending rate suggested by our economist reviewer (EXP-TG-002). This is why diesel, fastest on day one, scores 1 over 10 years. Lower investment is not counted as an environmental gain; only clean energy is. No cost quotes exist yet, so the discounting is applied to the ranking logic, not to numbers."
  - id: G2
    name: Count rebound effects
    applied: "Free-to-run solar pumps lead to more pumping: our economist reviewer puts rebound at about 50% for solar pumping, and total use rising (backfire) is plausible. SOL-TG-110 finds that almost 90% of surveyed farmers pump more after installation. Unlimited farm solar pumps score 1 on side effects; the farm option is only kept with a daily water budget. Rebound for air conditioning, about 35% per the reviewer, weakens any plan that relies on AC efficiency alone (SOL-TG-100)."
  - id: G3
    name: Look at who pays
    applied: "The first phase reuses existing staff, data and alert channels and costs households nothing. Any peak-reduction reward or tariff step later must be checked for who captures it, since rewards can favour well-off households most. SONEDE already sells below cost (FND-TG-476), so extra capital for Kerker adds to a strained balance sheet; funding sources are a data gap."
  - id: G4
    name: Do not move the problem
    applied: "Diesel moves the problem to fuel cost and heat reliability, desalination adds load to the same grid (SOL-TG-420, FND-TG-271), unlimited solar pumps move it to aquifers (SOL-TG-110, FND-TG-400). These get penalties in the side-effects score, not exclusion, and are compared across units (hours of water, MW at peak, groundwater level) rather than in one currency."
  - id: G5
    name: Separate correlation from causation
    applied: "Both Kerker cuts started outside STEG's stated 13:00-17:00 peak (SRC-TG-686, SRC-TG-685, SRC-TG-689), which suggests peak load shedding is not the whole story. It does not prove it: STEG also announced rolling cuts from 06:00 to 12:00 (case study, Ahmed), which could cover the August start. The heatwave versus under-investment debate is unresolved, so the plan keeps a local-protection core that works under either cause, and asks STEG for the cut log to test the cause."
  - id: G6
    name: Honest data
    applied: "Every number cites an opened source or is marked as coming only from the case study. Contested figures are shown as contested: peak demand of about 6,000 MW is unvalidated in the press (SRC-TG-228), and the 700-1,000 interruptions are one official's count for 14-15 July (SRC-TG-687). Scores are the case study's first assessment; the Evidence column stays low where Kerker's own data are missing."
  - id: G7
    name: Keep humans responsible
    applied: "These are first scores for SONEDE, STEG and experts to challenge, not a recommendation to invest. The strategic decisions (critical-load status, backup sizing, reservoirs, solar) belong to SONEDE, STEG and the Ministry. Everything the platform presents must be checked against the originals before it is used."
options:
  - name: "Forecast risky days, pre-fill reservoirs, alert users"
    fixes_cause: 3
    speed: 5
    effect_10y: 3
    side_effects: 5
    cost_fairness: 5
    evidence: 3
    total: 24
    note: "Cheapest and fastest, reuses existing staff and data, but only softens cuts and cannot help when a fault is hard to predict."
  - name: "Critical-load status and a second power feed for Kerker"
    fixes_cause: 5
    speed: 3
    effect_10y: 4
    side_effects: 4
    cost_fairness: 3
    evidence: 3
    total: 22
    note: "Removes the single-point-of-failure weakness at its root, but needs STEG agreement and engineering study, and shifts shedding to other feeders unless managed."
  - name: "Bigger water buffer downstream (reservoirs)"
    fixes_cause: 4
    speed: 2
    effect_10y: 4
    side_effects: 4
    cost_fairness: 2
    evidence: 4
    total: 20
    note: "Directly cuts how many hours taps stay dry, but capital-heavy and slow, and useless if reservoirs cannot be refilled between cuts."
  - name: "Farm solar pumps with a daily water budget"
    fixes_cause: 2
    speed: 3
    effect_10y: 4
    side_effects: 4
    cost_fairness: 3
    evidence: 3
    total: 19
    note: "Does not touch the Kerker weakness itself; kept only as a guarded complement so that solar does not draw down the aquifers nearby."
  - name: "Solar and batteries at the station"
    fixes_cause: 3
    speed: 2
    effect_10y: 4
    side_effects: 4
    cost_fairness: 2
    evidence: 3
    total: 18
    note: "Cuts daytime grid draw and gives some ride-through, but sizing and cost for a pumping station of this load are unknown and need vendor quotes."
  - name: "More national power plants"
    fixes_cause: 2
    speed: 1
    effect_10y: 4
    side_effects: 3
    cost_fairness: 1
    evidence: 4
    total: 15
    note: "Needed nationally, but slow and would not on its own have protected Kerker, since both cuts started outside the afternoon peak."
  - name: "Diesel generator at Kerker"
    fixes_cause: 3
    speed: 5
    effect_10y: 1
    side_effects: 1
    cost_fairness: 2
    evidence: 3
    total: 15
    note: "Fastest on day one, but fuel cost, emissions and heat reliability make it poor over 10 years; keep only as a stop-gap if nothing else is ready."
  - name: "Unlimited farm solar pumps"
    fixes_cause: 1
    speed: 4
    effect_10y: 1
    side_effects: 1
    cost_fairness: 4
    evidence: 2
    total: 13
    note: "Free pumping raises use (rebound about 50% per our economist reviewer) and drains aquifers, as SOL-TG-110 shows for Kebili, without helping Kerker."
plan:
  - phase: now
    action: "Build a daily risk score for Kerker from the heat forecast, STEG cut notices and citizen reports"
    owner: "Platform (AI), checked by a researcher"
    measure: "Share of cuts flagged the day before"
  - phase: now
    action: "Pre-fill reservoirs on high-risk days, at night and early morning"
    owner: "SONEDE operators"
    measure: "Hours of water kept during a cut"
  - phase: now
    action: "Alert households to fill tanks and farmers to irrigate at dawn"
    owner: "Citizens, farmers (alerts relayed by the platform and local authorities)"
    measure: "Alert reach; reports of dry taps"
  - phase: next
    action: "Agree critical-load status for the Kerker feeder and study a second power feed"
    owner: "STEG with SONEDE (decision makers)"
    measure: "Number of unplanned stops at Kerker"
  - phase: next
    action: "Size backup for a minimum water service, not the full station, and compare with the Ministry's plan for backup pumps at four stations (case study, Ahmed)"
    owner: "SONEDE, vendors"
    measure: "Minimum service hours covered"
  - phase: later
    action: "Add reservoir capacity where the buffer is shortest"
    owner: "SONEDE, Ministry, funders"
    measure: "Hours of buffer per area"
  - phase: later
    action: "Add solar and batteries to cover part of daytime pumping"
    owner: "Vendors, STEG"
    measure: "MW drawn from the grid between 13:00 and 17:00"
  - phase: later
    action: "Set a water budget for farm solar pumps in the area"
    owner: "Farmers, CRDA, researchers"
    measure: "Groundwater level against the safe limit"
  - phase: always
    action: "Re-score the plan every season as heat, prices and rules change, and feed results into the case library"
    owner: "Platform, reviewed by SONEDE, STEG and experts"
    measure: "Score changes logged after each summer"
data_needed:
  - item: "Kerker station power demand, pump capacity and restart time"
    holder: "SONEDE"
  - item: "Reservoir volumes and daily demand per area served"
    holder: "SONEDE"
  - item: "The feeder supplying Kerker and its cut history"
    holder: "STEG"
  - item: "Cause of the 26 July and 24 August cuts: load shedding, local fault or heat damage"
    holder: "STEG"
  - item: "Wells and groundwater levels near Kerker"
    holder: "CRDA Mahdia, farmers"
  - item: "Cost quotes for backup and solar options"
    holder: "Vendors"
rescore_triggers:
  - "The 150 MW of grid batteries (case study, Ahmed) come online before summer 2027: if national cuts fall, the weight of local protection rises further; check whether Kerker still stops."
  - "STEG confirms the 24 August cut was a local fault: the second power feed moves up and the forecast loses value, since faults are harder to predict than load shedding."
  - "STEG confirms the cuts were load shedding: peak-demand measures and national supply rise in weight."
  - "The new desalination plant for Sousse, Monastir and Mahdia starts: supply improves but grid load rises; re-check that the regional grid can carry it without cutting stations like Kerker (SOL-TG-420)."
  - "Reservoir or pump data show restart takes far longer or shorter than the 5-7 hours SONEDE cited (SRC-TG-687): the buffer option moves."
assumptions:
  - "Kerker's two 2026 cuts and a restart delay are the dominant driver of the 10-18 hour outages, not the national supply deficit."
  - "SONEDE can reach the reservoirs and operate pre-filling without new equipment."
  - "STEG is willing to share the cut log and consider critical-load status for a pumping feeder."
  - "A 10-year horizon and a 9-10% discount rate (our economist reviewer) are the right frame for a public utility; not tested against SONEDE's own investment rules."
validation_path:
  reviewer: "SONEDE (Kerker operations), STEG (feeder and cut log), our economist reviewer (EXP-TG-002) for the scoring frame"
  pilot: "Run the risk score and pre-filling protocol on Kerker for summer 2027 and count hours of water kept per cut"
  rough_cost: "Phase now: staff time and existing data, no cost estimate yet. Phases next and later: cost unknown until SONEDE, STEG and vendors provide quotes."
outreach: []
sources: [SRC-TG-685, SRC-TG-686, SRC-TG-687, SRC-TG-688, SRC-TG-689, SRC-TG-690, SRC-TG-691, SRC-TG-228]
author: TahaGHZ
contributors: ["Ahmed (case study, 21 Nov 2026)", "Economist reviewer (guardrails, name withheld)"]
---

## The question

A regional councillor in Mahdia asked: "Why did our taps run dry this summer, and what can we actually do before next summer?" The decision is what to push SONEDE and STEG to do before summer 2027, and what to avoid funding. See RUN-TG-001 for the simulated session that produced this proposal.

## What happened

| Date | Event | Source |
|---|---|---|
| 14-15 Jul 2026 | SONEDE reports 700 to 1,000 daily power interruptions at its pumping stations | SRC-TG-687 |
| 15-16 Jul 2026 | STEG says peak-hour demand jumped 30% above normal, largely from air conditioners, with a peak window of 13:00 to 17:00 | SRC-TG-688, SRC-TG-689 |
| 17 Jul 2026 | SONEDE is STEG's main customer; about 1,500 pumping stations run on electricity | SRC-TG-691 |
| 26 Jul 2026, 22:00 | Power cut at the main Kerker station; water disrupted in parts of Mahdia and Sfax until planned gradual restoration at 16:00 on 27 Jul (about 18 hours, our arithmetic) | SRC-TG-686 |
| 24 Aug 2026 | Power cut stops the main Kerker station; disruptions announced from 10:00 to 20:00 (10 hours) in ten Mahdia delegations and parts of Sfax | SRC-TG-685 |
| Aug 2026 | The Observatoire tunisien de l'eau counts 361 unannounced drinking-water interruptions and disturbances nationally in the month | SRC-TG-690 |

Context that rests only on the case study (Ahmed), not on sources we opened: a Kerker breakdown disrupted water in Mahdia and Sfax delegations in 2017 (Mosaique FM); STEG announced intermittent cuts from 06:00 to 12:00 in several zones on 21 July; STEG made 18,294 repair interventions in the week of 18-24 July; STEG allowed batteries for home solar on 22 July.

Wider picture, from our existing records: national summer peaks keep outgrowing generation (FND-TG-220), air conditioning loads the peak (FND-TG-250), SONEDE's supply used 563 GWh of electricity in 2023 (FND-TG-270), and supply cuts have been persistent where regional capacity lags (FND-TG-451). STEG generation investment fell about 87% between 2016-2020 and 2021-2025, according to the Observatoire tunisien de l'economie as relayed by the press (SRC-TG-228); a peak of about 6,000 MW is reported there as unvalidated by STEG.

## Why it happened

Factor map, with what we know and where the lever is.

- **Single station, no protected power.** Evidence: one main station serves parts of two governorates and two power cuts stopped it in one month (SRC-TG-686, SRC-TG-685); the cause of each cut is not stated. Lever: critical-load status and a second feed (STEG with SONEDE).
- **Slow restart.** Evidence: a cut stops the pumps automatically and restoring normal supply can take five to seven hours (SRC-TG-687). Lever: operating protocol and backup sized for a minimum service.
- **Thin water buffer downstream.** Evidence: the reservoirs stop filling when pumps stop and empty on repeated cuts (SRC-TG-687); Kerker's reservoir volumes are not public. Lever: pre-filling, then more storage.
- **National supply shortfall at peak.** Evidence: record peak demand and tight margins (FND-TG-220); air conditioning as a main load (FND-TG-250); generation investment collapse (SRC-TG-228). Lever: national generation and demand measures, mostly outside the councillor's reach.
- **SONEDE depends on the grid.** Evidence: main STEG customer, about 1,500 electric pumping stations (SRC-TG-691), 563 GWh in 2023 (FND-TG-270). Lever: critical-load status, on-site solar and storage.
- **Network and finance weakness.** Evidence: ageing pipes and slow renewal (FND-TG-450); tariffs below cost (FND-TG-476). Lever: tariff and investment policy, slow.
- **Farm pumping nearby.** Evidence: power cuts also stop farm wells, and farmers turn to diesel or to solar pumps (case study, Ahmed); unmetered solar pumping raises withdrawals and has been audited as counterproductive for groundwater (SOL-TG-110), in aquifers already overdrawn (FND-TG-400). Lever: a daily water budget for farm solar pumps.
- **Regional supply capacity on the coast.** Evidence: demand centres depend on transfers and peak-day deficits were forecast (FND-TG-451). Lever: supply projects, including desalination (SOL-TG-420).

## What a quick look would miss

1. **It is not only a capacity problem.** Both cuts started outside STEG's stated 13:00-17:00 peak (SRC-TG-686, SRC-TG-685, SRC-TG-689), so more plants alone would not clearly have protected Kerker. Caution (G5): this does not show that load shedding was not the cause, since STEG also announced rolling cuts in the morning (case study, Ahmed). The cause is a data gap held by STEG.
2. **The station is a single point of failure.** Two cuts in a month stopped it (SRC-TG-686, SRC-TG-685); a 2017 breakdown is reported by the case study only.
3. **Restart time, not only cut time, sets the damage.** The outage lasted 10 to 18 hours while SONEDE says restart alone can take five to seven hours (SRC-TG-687). Buffer size matters as much as supply.
4. **The obvious fixes move the problem.** Diesel adds fuel cost and heat risk; desalination adds load to the same grid (SOL-TG-420, FND-TG-271); unlimited farm solar pumping drains aquifers (SOL-TG-110, FND-TG-400); air conditioning products alone are judged superficial for the peak (SOL-TG-100).
5. **Everyone holds a piece of the data.** STEG the feeder and cut schedule, SONEDE the station and reservoirs, farmers their wells, citizens the real cut times (the Observatoire count in SRC-TG-690 is one example of citizen data).

## Options and scores

Scored 1 (poor) to 5 (good) on six criteria, total out of 30. Scores are the case study's first assessment (Ahmed, 21 Nov 2026), guided by the guardrails; they are not independently derived. The evidence column reflects the case study's judgement of data quality and is low where Kerker's own data are missing.

| Option | Fixes cause | Speed | Effect 10y | Side effects (5 = none) | Cost and fairness | Evidence | Total /30 |
|---|---|---|---|---|---|---|---|
| Forecast risky days, pre-fill reservoirs, alert users | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| Critical-load status and a second power feed | 5 | 3 | 4 | 4 | 3 | 3 | 22 |
| Bigger water buffer downstream | 4 | 2 | 4 | 4 | 2 | 4 | 20 |
| Farm solar pumps with a daily water budget | 2 | 3 | 4 | 4 | 3 | 3 | 19 |
| Solar and batteries at the station | 3 | 2 | 4 | 4 | 2 | 3 | 18 |
| More national power plants | 2 | 1 | 4 | 3 | 1 | 4 | 15 |
| Diesel generator at Kerker | 3 | 5 | 1 | 1 | 2 | 3 | 15 |
| Unlimited farm solar pumps | 1 | 4 | 1 | 1 | 4 | 2 | 13 |

How the guardrails shaped the scores: diesel scores 5 on speed but 1 over 10 years (G1); unlimited solar pumps score 1 on side effects because of rebound (G2); pre-filling and alerts cost users nothing (G3); diesel and unlimited pumping are penalised, not excluded (G4); national plants score 2 on the Kerker cause because the cuts did not follow the peak, with the caveat above (G5); the evidence column is low where Kerker data are missing (G6); the scores are for experts to challenge (G7). The two top options are close (24 and 22), and a different cause finding could reverse them (see re-score triggers).

## Recommended plan

1. **Now (weeks).** Daily risk score for Kerker; pre-fill reservoirs on high-risk days, at night and early morning; alerts so households fill tanks and farmers irrigate at dawn. Measures: share of cuts flagged the day before, hours of water kept during a cut, alert reach.
2. **Next (months).** Agree critical-load status for the Kerker feeder and study a second feed; size backup for a minimum water service rather than the full station and compare with the Ministry's plan for backup pumps at four stations (case study, Ahmed). Measures: unplanned stops at Kerker, minimum service hours covered.
3. **Later (years).** More reservoir capacity where the buffer is shortest; solar and batteries to cover part of daytime pumping; a water budget for farm solar pumps nearby. Measures: hours of buffer per area, MW drawn from the grid at 13:00-17:00, groundwater level against the safe limit.
4. **Always.** Re-score every season.

The first phase could start before summer 2027 at almost no cost (case study, Ahmed); no cost quote has been seen for any phase. Diesel is kept only as a stop-gap if nothing else is ready. The decisions are for SONEDE, STEG and the Ministry (G7).

## What we do not know

- Why power was cut on 26 July and 24 August: load shedding, local fault or heat damage (STEG).
- Kerker's pump capacity, power demand and restart time, and the reservoir volumes downstream (SONEDE).
- Whether Kerker sits on a feeder that STEG can protect, and its cut history (STEG).
- Groundwater levels and well numbers near Kerker (CRDA Mahdia, farmers).
- Costs of backup, reservoirs, solar and batteries (vendors); funding sources.
- Whether the 700-1,000 interruptions (SRC-TG-687) include Kerker, and how the national picture of August (SRC-TG-690) breaks down by region.
- Whether the 2017 breakdown and the other case-study-only events are as described.

## Why it might fail

- STEG may decline critical-load status, or the cut may prove to be national load shedding that spares no feeder.
- Pre-filling needs spare supply and storage; with a thin buffer the gain may be small, and it needs staff discipline.
- Forecasts of faults are hard; the risk score may miss most local failures.
- The scores come from one hand-built case and are untested by SONEDE, STEG or the economist reviewer; small score differences (24 versus 22) are within judgement error.
- Pressure for a fast diesel fix may override the plan if outages recur in summer 2027.
- Rebound could erode the farm-solar budget unless metering and enforcement are real (SOL-TG-110).

## Verification

Status is `draft` because several timeline items rest on the case study only; nothing here has been run through the source-verifier agent.

**Checked against originals opened on 22 November 2026:** the Kerker cut of 26-27 July (SRC-TG-686: start 22:00 on 26 July, planned gradual restoration from 16:00 on 27 July); the Kerker cut of 24 August (SRC-TG-685: station stopped, disruption 10:00 to 20:00); SONEDE's 700-1,000 daily interruptions on 14 and 15 July and the five to seven hour restart (SRC-TG-687); STEG's +30% at peak hours and air-conditioning attribution (SRC-TG-688); the 13:00-17:00 window and load-shedding rationale (SRC-TG-689); SONEDE as main STEG customer and about 1,500 electric pumping stations (SRC-TG-691); the 361 unannounced interruptions in August (SRC-TG-690). The existing records FND-TG-220, 250, 270, 271, 400, 450, 451, 476 and SOL-TG-100, 110, 420 were read for their claims; their own verification is recorded in those files.

**Corrections to the case study found while checking:** the +30% is attributed there to Business News of 15 July 2026, but that article does not contain it; it is in La Presse of 16 July (SRC-TG-688). The 700-1,000 figure is per day on 14-15 July, not a summer total. The 18-hour figure is our arithmetic from announced times, and 10 hours is the announced window.

**Rest on the case study (Ahmed) and were not verified against originals:** the 2017 Kerker breakdown (the Mosaique FM page returned no content); STEG's 21 July announcement of rolling cuts from 06:00 to 12:00; the 18,294 repair interventions; STEG allowing batteries on 22 July; the 150 MW of grid batteries and the Sousse, Monastir and Mahdia desalination plant start; the Ministry's plan for backup pumps at four stations; the 40-source count; and all option scores, which are the case study's own judgement. The case study also states the cuts did not follow the afternoon peak and were never linked to load shedding by SONEDE; the sources we read are consistent with that for the stated start times but do not say what caused the cuts.

**Economist guidance:** the 10-year horizon, 9-10% discount rate and rebound orders of magnitude (about 35% air conditioning, about 50% solar pumping) are the opinion of our economist reviewer (EXP-TG-002), who declined to be cited; they are orders of magnitude, not measured Tunisian values.
