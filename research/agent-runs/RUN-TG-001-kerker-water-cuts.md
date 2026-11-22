---
id: RUN-TG-001
title: "Why did Mahdia and Sfax lose water in summer 2026, and what can be done before next summer?"
status: simulated
simulated_note: "Reconstructed from the team's hand-built Kerker case study (Ahmed, 21 November 2026); the steps show what the gateway would do, not a live execution."
asked_by: "Regional councillor, Mahdia"
question: "Why did our taps run dry this summer, and what can we actually do before next summer?"
date: 2026-11-22
modes: [findings, solutions, rnd]
sectors: [water, energy, agriculture]
findings_used: [FND-TG-220, FND-TG-250, FND-TG-270, FND-TG-271, FND-TG-400, FND-TG-450, FND-TG-451, FND-TG-476]
solutions_used: [SOL-TG-100, SOL-TG-110, SOL-TG-420]
proposals_out: [PRP-TG-400]
sources_used: [SRC-TG-685, SRC-TG-686, SRC-TG-687, SRC-TG-688, SRC-TG-689, SRC-TG-690, SRC-TG-691, SRC-TG-228]
step_count: 28
author: TahaGHZ
---

## [01] user

Why did our taps run dry this summer, and what can we actually do before next summer?

## [02] agent | mode: gateway | sector: water

I can help with that, but two questions first, so that I answer your situation and not a generic one.

1. Which areas are you asking about? "Our taps" could mean a town, a delegation or a whole governorate, and the answer depends on which pumping station and network serve them.
2. What decision do you face, and over what horizon? For example: which projects to push for in the council's budget, what to ask SONEDE or STEG for, or what to tell residents. And what can the council actually spend or influence?

## [03] user

I represent delegations in the Mahdia governorate: El Jem, Sidi Alouane and Chebba mainly. Our taps went dry for many hours in late July and again in August. I have two decisions: what to ask SONEDE and STEG for before the summer of 2027, and what to put in the council's three-year priorities. We have no money for pumping stations ourselves, so this is about what we push for and what we avoid backing.

## [04] agent | mode: gateway | sector: water

Understood. Your delegations are among those named in the SONEDE notices for the Kerker pumping station, which feeds parts of Mahdia and Sfax. I will work in three passes and tell you which one I am in.

1. **Findings:** what our records and public sources show about the 2026 outages and the causes behind them.
2. **Solutions:** what has already been tried or proposed, and why the obvious fixes fall short or move the problem.
3. **R&D:** what gap is left, and a phased plan, with what I do not know and who holds the data.

One caution up front: I work from public sources and our own records, not from SONEDE or STEG internal data, and the plan I give you is an input for the people who own these decisions, not a decision.

## [05] tool | mode: findings | sector: energy | action: search findings

Query: `summer peak, load shedding, electricity, 2026`. Records in the energy lane that match.

- **FND-TG-220** (in-review, confidence medium): Tunisia's summer electricity peak reached a record 5,089 MW by September 2026, while modelled summer 2026 margins are tight. Imports and demand measures are reported, not shown to be effective.
- **FND-TG-250** (confidence medium): air conditioning loads the summer peak. LBNL reports a STEG estimate that air conditioners were 44% of the August system peak in 2021; the STEG calculation itself was not located.
- **FND-TG-270** (in-review): SONEDE's water supply used 563 GWh of electricity in 2023.
- **FND-TG-271** (in-review): the 2030 desalination scenario, at an assumed 2.4 kWh/m3, would imply about 460 GWh a year; the source itself gives no electricity figure.

## [06] tool | mode: findings | sector: water | action: search findings

Query: `drinking water cuts, rationing, SONEDE network, groundwater`. Records in the water lane that match.

- **FND-TG-451** (in-review): supply cuts went from very rare in 2009 to national rationing in 2023-2024, and persist where regional transfer and network capacity lag, even when national dam stocks recover. Mahdia and Sfax are in its geography.
- **FND-TG-450** (in-review, confidence high): SONEDE records about two-thirds of production as consumed; ageing pipes and slow renewal threaten network performance.
- **FND-TG-476** (in-review): since about 2007 SONEDE has sold water below its cost, because tariffs are frozen or raised ad hoc while energy and other costs climb.
- **FND-TG-400** (in-review): deep aquifers in the centre and north-east are pumped far beyond their resources, increasingly through illicit boreholes.

No finding in our records is specific to Kerker or to the 2026 outages. The records in phase 1 pre-date this case, so I need to read the original reports.

## [07] agent | mode: findings | sector: water

Here is what the records say, before the 2026 detail.

The national background is real and documented. Summer electricity demand keeps outgrowing generation, with a record peak in 2026 (FND-TG-220), and air conditioning is a main load at that peak, though the 44% figure is a 2021 estimate reported second-hand (FND-TG-250). SONEDE is also a heavy electricity user (FND-TG-270), so a tight grid hits water quickly. Separately, the coastal Sahel and Sfax supply system has been short of capacity for years, so cuts have lingered there even after the dam stocks recovered (FND-TG-451).

None of these records tells us why Kerker stopped. For that I will open the original press reports of the two cuts.

## [08] tool | mode: findings | sector: water | action: open source

Opened the two Kerker reports.

**SRC-TG-686** (Webdo, 27 July 2026), in the original French: "Cette interruption, qui a débuté dimanche 26 juillet à 22h00, est due à une coupure d'électricité" at "la station principale de pompage de Kerker". Gradual restoration was planned "à partir de lundi 27 juillet à 16h00". Mahdia delegations named include Boumerdès, El Jem and Sidi Alouane; in Sfax, El Hencha and Jebiniana.

**SRC-TG-685** (Business News, 24 August 2026): "Une coupure d'électricité a provoqué, lundi 24 août 2026, l'arrêt de la station principale de pompage de Kerker". SONEDE announced disruptions "à partir de 10 heures et jusqu'à 20 heures". Mahdia delegations named include El Jem, Sidi Alouane and Chebba.

Neither report states why the power was cut.

## [09] tool | mode: findings | sector: nexus | action: open source

Opened the reports on the wider 2026 picture.

- **SRC-TG-687** (Business News, 20 July 2026): a SONEDE regional director reports "entre 700 et mille interruptions quotidiennes de l'alimentation électrique" at pumping stations on 14 and 15 July. A cut "entraîne automatiquement l'arrêt des équipements"; restoring normal supply after power returns can take five to seven hours, depending on network length and reservoir levels (paraphrased from the page).
- **SRC-TG-691** (allAfrica from La Presse, 17 July 2026): SONEDE is STEG's main customer; about 1,500 pumping stations run on electricity.
- **SRC-TG-688** (La Presse, 16 July 2026): "Durant les heures de pointe, la demande a bondi de 30 % par rapport à la consommation normale", largely attributed to air conditioners.
- **SRC-TG-689** (Business News, 15 July 2026): STEG attributes load shedding to demand exceeding capacity, with peak-hour air conditioning "entre 13 heures et 17 heures".
- **SRC-TG-690** (Afrik.com, 6 October 2026): the Observatoire tunisien de l'eau counted 361 unannounced interruptions and disturbances of drinking water in August alone.
- **SRC-TG-228** (Webmanagercenter, 3 August 2026): STEG's generation investment fell about 87% between 2016-2020 and 2021-2025 according to the Observatoire tunisien de l'economie. A peak near 6,000 MW is reported there but not validated by STEG.

Note: the team's case study credits the +30% to Business News of 15 July; that article does not contain it. The figure is in La Presse of 16 July, so I cite that.

## [10] tool | mode: findings | sector: water | action: build timeline

Timeline of summer 2026, built only from sources opened in this run.

| Date | Event | Source |
|---|---|---|
| 14-15 Jul | 700 to 1,000 daily power interruptions recorded at SONEDE pumping stations | SRC-TG-687 |
| 15-16 Jul | STEG: peak-hour demand up 30%, mostly air conditioning, peak window 13:00-17:00; load shedding when demand exceeds capacity | SRC-TG-688, SRC-TG-689 |
| 17 Jul | SONEDE is STEG's main customer; about 1,500 electric pumping stations | SRC-TG-691 |
| 26 Jul, 22:00 | Power cut at Kerker; restoration planned from 16:00 on 27 Jul (about 18 hours, our arithmetic) | SRC-TG-686 |
| 24 Aug | Power cut stops Kerker; disruption announced 10:00-20:00 (10 hours) | SRC-TG-685 |
| Aug | 361 unannounced drinking-water interruptions counted nationally | SRC-TG-690 |

Reported in the team's case study but not verified against originals here: a 2017 Kerker breakdown; STEG rolling cuts announced from 06:00 to 12:00 on 21 July; 18,294 repair interventions in the week of 18-24 July.

## [11] agent | mode: findings | sector: water

This is what the evidence supports about why your taps ran dry.

**Direct cause.** Two power cuts stopped the Kerker station, once on the night of 26 July and once on the morning of 24 August. When the pumps stop, the reservoirs stop filling, and SONEDE says restart alone can take five to seven hours (SRC-TG-687). That is how a power cut becomes a 10 to 18 hour water cut.

**Wider picture.** The same summer, SONEDE counted hundreds of interruptions a day at pumping stations (SRC-TG-687), and an NGO counted 361 unannounced water cuts in August nationally (SRC-TG-690). Kerker was not alone.

**What the sources do not show.** Both Kerker cuts began outside STEG's stated 13:00-17:00 peak (SRC-TG-686, SRC-TG-685, SRC-TG-689). That hints that afternoon load shedding alone does not explain them. It does not prove it: the case study reports STEG rolling cuts from 06:00 to 12:00 from 21 July, which could include a 10:00 August start. I cannot tell you whether these two cuts were load shedding, a local fault or heat damage. Only STEG can.

Confidence on the facts above: medium. They are press reports of operator notices (tier C).

## [12] agent | mode: gateway | sector: water

That is the findings pass. Next I will look at what has already been tried or proposed, and whether it would have prevented a cut like Kerker's.

## [13] tool | mode: solutions | sector: water | action: read solution audit

Opened **SOL-TG-420**, the seawater desalination programme (verdict: partially-solves).

- Real: plants run at Djerba, Zarat and Sfax; Sousse was still in testing in July 2026.
- It addresses a coastal supply deficit forecast for Greater Tunis, Cap Bon, the Sahel and Sfax (FND-TG-451), but late.
- It adds load: no measured kWh/m3 exists for Tunisian plants; figures in circulation run from 2.4 to 4.2 (not measured values), and supply is mainly gas-fired (FND-TG-271).
- It does not touch the station-level weakness: a desalination plant needs power as much as Kerker does.

## [14] tool | mode: solutions | sector: agriculture | action: read solution audit

Opened **SOL-TG-110**, solar PV pumping subsidies for irrigation (verdict: counterproductive for the overdraft findings as currently run).

- Pumping energy becomes nearly free, so pumping rises: almost 90% of 24 surveyed farmers pump more than before, and a third started using arid or unused land (self-reported, no before-and-after metering).
- A meter is the only volume safeguard, and 12 of 24 surveyed farms had no working meter.
- It worsens the overdraft in FND-TG-400.

## [15] tool | mode: solutions | sector: energy | action: read solution audit

Opened **SOL-TG-100**, central air-conditioning demand limiting with VRV/VRF systems (verdict: superficial).

- The product is real and has independent savings evidence in other settings, but against different baselines.
- The Tunisian peak claims it relies on are unverified, and reach is limited to buyers who can afford it.
- It does not act on the household air-conditioner stock or on generation tightness, so on its own it would not protect a pumping station.
- The audit notes that a demand cap could shift load rather than remove it.

## [16] agent | mode: solutions | sector: water

Three fixes come to mind first. None of them would have prevented Kerker, and two of them move the problem.

1. **More desalination (SOL-TG-420).** It adds water on the coast, but it is slow, and each plant adds electricity load on a grid that is already short at peak (FND-TG-271). It does not give the Kerker station protected power.
2. **More solar pumps for farms (SOL-TG-110).** Cheap pumping sounds like good news for water, but the audit finds that it raises pumping and worsens the overdraft in FND-TG-400. Our economist reviewer puts the rebound for solar pumping at about 50% in order of magnitude, with total use plausibly rising, because the energy is nearly free. That is an expert estimate, not a Tunisian measurement.
3. **Cutting air-conditioning demand (SOL-TG-100).** Useful for the national peak, but the audit rates the product superficial for the peak, and the same reviewer puts air-conditioning rebound at about 35%. If your cuts did not follow the peak, this does not reach them.

The common weakness: all three act on the national shortage or on supply volume. The Kerker cuts look like a local weakness, one station with no protected power. A local weakness needs a local fix.

## [17] user

Would a diesel generator at the station not be quicker?

## [18] agent | mode: solutions | sector: energy

Yes, it would very likely be the quickest physical fix, and I would not rule it out as a stop-gap. But I would not make it the plan, for four reasons.

- **Speed is its only strength.** In the case study's scoring it gets 5 for speed and 1 for the 10-year effect. Over a 10-year horizon with future costs discounted at about 9-10% (our economist reviewer's guidance), fuel and maintenance costs add up, and a generator that is rarely used is also the one most likely to fail when it is needed.
- **It moves the problem.** It adds fuel cost and emissions, and no clean-energy gain; the reviewer's point is that only clean energy improves environmental quality, and lower investment is not an environmental gain either.
- **Heat reliability.** The case study states that diesel can fail in heat, but I have no source for that at Kerker.
- **I have no audit of it.** There is no diesel record in our phase 2 solutions, so my judgement on diesel is the case study's first assessment, not a verified finding.

What I do not know, and it matters: Kerker's power demand and pump size. Without them, nobody can say what a generator would cost or whether it could even start a station of that size. The right next step is to ask SONEDE for those numbers.

My suggestion is to keep diesel as a stop-gap if nothing else is ready by next summer, and to size anything permanent for a minimum water service, not the full station.

## [19] agent | mode: gateway | sector: water

Moving to R&D. I will map the factors, look for what a quick reading would miss, and score the options against our guardrails.

## [20] tool | mode: rnd | sector: nexus | action: build factor map

Factors behind a 10-18 hour water cut, with evidence and the lever.

| Factor | Evidence | Lever |
|---|---|---|
| Single station, no protected power | Two cuts stopped it in a month (SRC-TG-686, SRC-TG-685); cause unknown | Critical-load status, second feed (STEG, SONEDE) |
| Slow restart | Pumps stop automatically; five to seven hours to normal supply (SRC-TG-687) | Operating protocol, backup for minimum service |
| Thin buffer downstream | Reservoirs stop filling when pumps stop (SRC-TG-687); volumes not public | Pre-filling, then more storage |
| National peak shortfall | Record peak (FND-TG-220); air conditioning (FND-TG-250); generation investment down (SRC-TG-228) | National supply and demand measures |
| SONEDE depends on the grid | Main STEG customer, about 1,500 electric pumping stations (SRC-TG-691); 563 GWh (FND-TG-270) | Critical-load status, on-site solar |
| Network and finance weakness | FND-TG-450, FND-TG-476 | Tariff and renewal policy, slow |
| Coastal capacity | FND-TG-451 | Supply projects (SOL-TG-420) |

## [21] agent | mode: rnd | sector: nexus

Here are the insights a quick look would miss.

1. **It is not only a capacity problem, but I cannot yet prove it.** Both cuts began outside the 13:00-17:00 peak (SRC-TG-686, SRC-TG-685, SRC-TG-689), so more power plants alone would not clearly have protected Kerker. The caution is that the rolling cuts the case study reports for the mornings could cover the August start. Whether the cuts were load shedding, a fault or heat damage is untested, and the debate between the heatwave and under-investment is contradictory. I would not pick a side without STEG's cut log.
2. **The station is a single point of failure.** One station feeds parts of two governorates, and it stopped twice in a month. Protecting this node gives the most water per dinar, on the case study's logic.
3. **Restart time sets the damage as much as cut time.** A 10 to 18 hour outage after a power loss that SONEDE says needs five to seven hours to recover from (SRC-TG-687). The size of the water buffer matters as much as the power supply.
4. **The obvious fixes move the problem.** Diesel moves it to fuel cost and heat, desalination to the grid, unlimited solar pumps to the aquifers.
5. **Everyone holds a piece of the data.** STEG knows the feeder and cut schedule, SONEDE the station and reservoirs, farmers their wells, citizens the real cut times. The 361 unannounced cuts counted for August (SRC-TG-690) show how much of the picture only citizens see.

## [22] tool | mode: rnd | sector: water | action: score options

Eight options, scored 1 (poor) to 5 (good) on six criteria, total out of 30. These are the case study's first assessment (Ahmed), not independently derived.

| Option | Fixes cause | Speed | Effect 10y | Side effects (5 = none) | Cost and fairness | Evidence | Total |
|---|---|---|---|---|---|---|---|
| Forecast risky days, pre-fill reservoirs, alert users | 3 | 5 | 3 | 5 | 5 | 3 | 24 |
| Critical-load status and a second power feed | 5 | 3 | 4 | 4 | 3 | 3 | 22 |
| Bigger water buffer downstream | 4 | 2 | 4 | 4 | 2 | 4 | 20 |
| Farm solar pumps with a daily water budget | 2 | 3 | 4 | 4 | 3 | 3 | 19 |
| Solar and batteries at the station | 3 | 2 | 4 | 4 | 2 | 3 | 18 |
| More national power plants | 2 | 1 | 4 | 3 | 1 | 4 | 15 |
| Diesel generator at Kerker | 3 | 5 | 1 | 1 | 2 | 3 | 15 |
| Unlimited farm solar pumps | 1 | 4 | 1 | 1 | 4 | 2 | 13 |

## [23] tool | mode: rnd | sector: nexus | action: apply guardrails

Seven guardrails checked against the scores.

- **G1 Static and dynamic:** 10-year horizon, 9-10% discount rate. Diesel: 5 on speed, 1 over 10 years.
- **G2 Rebound:** about 50% for solar pumping, about 35% for air conditioning (our economist reviewer, orders of magnitude). Unlimited pumps: 1 on side effects.
- **G3 Who pays:** phase one reuses existing staff and data and costs households nothing; later rewards need an equity check.
- **G4 Do not move the problem:** diesel, unlimited pumps and desalination alone are penalised, not excluded.
- **G5 Correlation and causation:** national plants score 2 on the Kerker cause because the cuts did not follow the peak; flagged as untested.
- **G6 Honest data:** the evidence column is low where Kerker's own data are missing; the 6,000 MW peak is marked unvalidated (SRC-TG-228).
- **G7 Humans decide:** scores are for SONEDE, STEG and experts to challenge.

## [24] agent | mode: rnd | sector: water

How I read the scores.

The top option, forecast and pre-fill (24), wins because it is the cheapest and fastest and has no side effects, not because it fixes the cause: it scores only 3 on the cause. The second, critical-load status with a second feed (22), is the only option that scores 5 on the cause, but it needs STEG, takes months and costs more. The two are close, and a finding from STEG that the cuts were a local fault would push the second one up. Treat the order as a judgement, not a measurement.

The farm solar pumps with a water budget (19) are a complement, not a Kerker fix. Without a budget they drop to 13.

## [25] agent | mode: rnd | sector: water

Here is the phased plan, each step with an owner and a measure.

**Now (weeks)**
- Build a daily risk score for Kerker from the heat forecast, STEG cut notices and live reports. Owner: platform, checked by a researcher. Measure: share of cuts flagged the day before.
- Pre-fill reservoirs on high-risk days, at night and early morning. Owner: SONEDE operators. Measure: hours of water kept during a cut.
- Alert households to fill tanks and farmers to irrigate at dawn. Measure: alert reach and reports of dry taps.

**Next (months)**
- Agree critical-load status for the Kerker feeder and study a second feed. Owner: STEG with SONEDE. Measure: unplanned stops at Kerker.
- Size backup for a minimum water service, not the full station, and compare with the Ministry's plan for backup pumps at four stations (case study). Owner: SONEDE, vendors.

**Later (years)**
- More reservoir capacity where the buffer is shortest; solar and batteries to cover part of daytime pumping; a water budget for farm solar pumps nearby. Measures: hours of buffer per area, MW drawn from the grid at 13:00-17:00, groundwater level against the safe limit.

**Always:** re-score every season.

**What I do not know, and who holds it**
- Why power was cut on 26 July and 24 August (STEG).
- Kerker's power demand, pump capacity and restart time, and reservoir volumes (SONEDE).
- The feeder supplying Kerker and its cut history (STEG).
- Wells and groundwater levels near Kerker (CRDA Mahdia, farmers).
- Costs of backup and solar options (vendors). I have no cost figure for any phase.

**What would change the ranking:** the 150 MW of grid batteries coming online before summer 2027; STEG confirming the cause of the 24 August cut; the Sousse, Monastir and Mahdia desalination plant starting (these three are from the case study, not verified here).

## [26] tool | mode: rnd | sector: water | action: write proposal

Wrote **PRP-TG-400**, "Protect the Kerker pumping station first". Status: draft. Reason: the 2026 cuts and the figures above were checked against originals opened in this run, but the 2017 breakdown, the 21 July rolling-cut announcement, the repair count and all option scores rest on the case study only. The Verification section lists which is which.

## [27] user

What can I actually ask SONEDE and STEG for this month?

## [28] agent | mode: gateway | sector: water

Here is your plan, and what to ask this month. The full record is **PRP-TG-400**.

**Ask SONEDE (three things):**
1. How long Kerker takes to restart and how many hours of reservoir buffer your delegations have.
2. Whether it can pre-fill reservoirs before forecast heatwave days, and how you can pass alerts to residents.
3. Whether it has a plan for backup at Kerker, and how it compares with the Ministry's plan for backup pumps at four stations.

**Ask STEG (two things):**
1. The cause of the 26 July and 24 August cuts, and the cut history of the Kerker feeder.
2. Whether Kerker can be given critical-load status, and whether a second feed is feasible.

**For your three-year priorities:** back the buffer and the protected-power work. I would not back diesel as a permanent answer or a subsidy for unlimited farm solar pumps; if solar pumping is supported locally, tie it to a water budget with metering.

**What this plan cannot promise.** I cannot tell you that it will end the outages. The scores are a first assessment for SONEDE, STEG and experts to challenge, not a verdict, and strategic investment decisions must stay with the people accountable for them, never with an AI (guardrail G7). Please check what I have presented against the sources before you use any figure in public; the originals are linked in the records, and the Verification section of PRP-TG-400 says which facts rest only on the team's case study.
