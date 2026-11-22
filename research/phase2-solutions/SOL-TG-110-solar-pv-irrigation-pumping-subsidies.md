---
id: SOL-TG-110
name: Subsidised solar photovoltaic pumping for irrigation (FTE via ANME, FTI via APIA)
status: in-review
type: programme
owner: "ANME (Fonds de Transition Énergétique, FTE) and APIA (Fonds Tunisien de l'Investissement, FTI), under the Ministry of Energy and the Ministry of Agriculture (MARHP); CRDAs check well authorisation"
targets: [FND-TG-400, FND-TG-401, FND-TG-410, FND-TG-625]
status_in_tunisia: deployed
claims:
  - claim: "The main reason surveyed farmers give for adopting solar pumping is saving on energy spending, notably for farms that pumped with diesel before (50% of the 24 surveyed farms; 17% used grid electricity, 33% none); the saving itself was not measured"
    evidence: SRC-TG-361
    verified: yes
  - claim: "As reported by GIZ in 2019, subsidies are paid only for systems on wells authorised by the CRDA and meeting a specification that sets a maximum pump flow and requires a meter; the same report finds this insufficient to protect the aquifer because meters are not read"
    evidence: SRC-TG-360
    verified: yes
  - claim: "Subsidy rules: FTE premium since 2009 (40%, cap 20,000 DT), raised in 2017 to a 50,000 DT cap on a sliding per-kWp scale, off-grid farms only; FTI 50% up to 500,000 DT (60% for service cooperatives and development groups)"
    evidence: SRC-TG-360
    verified: partial
  - claim: "Adoption: more than 1,000 systems installed since 2015 (inferred from 1,340 converters with import tax privileges in 2015-2018); 2,358 photovoltaic stations were detected in the Kébili region by mapping in 2021 (a stock, not 2021 installations; SRC-TG-631)"
    evidence: SRC-TG-361
    verified: yes
  - claim: "Pumping rises after installation: almost 90% of surveyed farmers (sample of 20) say they pump more water than before, and a third started farming arid or unused land"
    evidence: SRC-TG-532
    verified: yes
scores:
  root_cause_coverage: 0
  evidence_quality: 2
  adoption: 2
  side_effects: 0
  cost_accessibility: 1
greenwashing_flags:
  - "impact shifted elsewhere: the energy and climate benefit is claimed while the cost falls on aquifers; the ministry's own national water report says the subsidy works against water conservation (SRC-TG-402)"
verdict: counterproductive
limits:
  - "It acts on the pumping energy bill, not on the amount of water withdrawn; it can only help the aquifer if volume is capped some other way"
  - "Subsidy conditions (authorised well, flow cap, meter) apply only to subsidised systems; systems bought outside the scheme face no condition"
  - "The 2017 reform changed caps and conditions; none of the sources measured its effect on pumping"
  - "Grid-connected farms get almost no benefit because electricity for pumping is already heavily subsidised, so the programme in practice serves off-grid land: the new, often unauthorised, extensions"
blockers:
  - blocker: "The CRDA specification requires a meter but no volume limit; reading the meters is neither done nor required by law (GIZ 2019)"
    type: regulatory
    source: SRC-TG-360
  - blocker: "After the pre-payment site visit, a major part of farmers remove or stop using the meters"
    type: institutional
    source: SRC-TG-532
  - blocker: "Systems on unauthorised wells are not subsidised but are installed anyway, and are outside administrative control"
    type: legal
    source: SRC-TG-361
  - blocker: "Slow subsidy procedures push farmers to buy outside the scheme"
    type: institutional
    source: SRC-TG-360
  - blocker: "Water Code Art. 9: wells under 50 m need no prior authorisation outside decreed perimeters, so a solar pump on a shallow well can sit outside the permit system altogether (see FND-TG-401)"
    type: legal
    source: SRC-TG-406
criticisms:
  - criticism: "The subsidy encourages waste by making pumped water free (no STEG bill)"
    from: "Ministry of Agriculture, national water sector report 2017"
    source: SRC-TG-402
    assessment: supported
  - criticism: "Installers oversize systems to maximise profit, which encourages over-irrigation; STEG staff in Kébili did not know the scale of solar pumping or the illicit extensions"
    from: "Ferchichi et al. 2024 (Cahiers Agricultures, peer-reviewed)"
    source: SRC-TG-631
    assessment: partly-supported
  - criticism: "Solar made the illicit extensions possible; perceived free, renewable energy drives over-pumping"
    from: "Mekki et al. 2024 (Massire policy note)"
    source: SRC-TG-632
    assessment: partly-supported
  - criticism: "Solar pumps are likely to increase groundwater depletion, and could worsen it in already stressed aquifers; the authors call for enhanced regulation and planning"
    from: "Garrick, Balasubramanya et al. (Science policy forum, 2024), via a news release"
    source: SRC-TG-362
    assessment: partly-supported
  - criticism: "Surveyed farmers believe the water is free and inexhaustible and all refused to give up individual boreholes for a collective one (reason given: difficulty of managing shared assets and risk of too little water)"
    from: "GIZ/FAO case study"
    source: SRC-TG-361
    assessment: supported
trade_offs:
  - effect: "More groundwater withdrawal on aquifers already above 100% exploitation; the ministry itself links this to overdraft"
    on: water
    horizon: long-term
    source: SRC-TG-402
  - effect: "New irrigated land opened in dry-farming or unused zones (a third of surveyed farmers); in Kébili, 2,358 PV stations were detected in a region where private extensions on collective land are mostly irrigated from illicit boreholes (SRC-TG-631)"
    on: agriculture
    horizon: short-term
    source: SRC-TG-532
  - effect: "Public money (FTE, FTI) spent on pumps whose use rises demand on a scarce resource while the national strategy aims to cut irrigation demand by about 26% by 2050"
    on: energy and public finance
    horizon: long-term
    source: SRC-TG-503
  - effect: "Fewer diesel litres and lower pumping electricity use per cubic metre; the emission gain is not quantified in any opened source"
    on: energy
    horizon: short-term
    source: SRC-TG-361
creates: [FND-TG-400, FND-TG-625]
gap_left: "The overdraft itself: cap on abstraction volume, enforcement against unauthorised boreholes, and a legal regime for shallow wells. Also unsolved: measurable pumped volumes per well and a registry linking each solar system to a permit."
conflict_of_interest: none
sources: [SRC-TG-360, SRC-TG-361, SRC-TG-362, SRC-TG-532, SRC-TG-402, SRC-TG-406, SRC-TG-503, SRC-TG-631, SRC-TG-632]
author: TahaGHZ
---

## What it is

Two public funds pay part of the cost of solar photovoltaic pumping systems (SPIS) on farms. The Fonds de Transition Énergétique (FTE), run by ANME, started a premium in 2009 at 40% of cost, capped at 20,000 DT. In 2017 the cap went to 50,000 DT, computed per kWp on a sliding scale from 6,000 TND/kWp for tiny systems down to 1,000 TND/kWp above 10 kW. It goes only to farms with no grid connection. The FTI, run by APIA, pays 50% of the investment up to 500,000 DT, and 60% for service cooperatives and development groups (SRC-TG-360). From 2018 a farmer had to choose one fund (SRC-TG-360). Grid-connected farms qualify only for FTE self-generation premiums capped at 5,000 DT (SRC-TG-360), and grid-connected solar pumps have long payback because the pumping tariff is already heavily subsidised (SRC-TG-532). The stated rules are as the GIZ consultants described them in 2019; the decree texts were not opened.

## What it claims, and what the evidence shows

- **Saves energy cost.** Farmers' main reason for adopting is saving on energy spending, notably those who pumped with diesel before (50% of the 24 farms, slide 8; SRC-TG-361). This matches the programme's aim. Evidence is a 20-24 farm survey, not a measurement of bills or emissions.
- **Guards the aquifer through conditions.** The scheme pays only on CRDA-authorised wells, with a flow cap and a meter (SRC-TG-360). In practice the CRDA specification sets no volume limit, meter readings are not required by law, and a major part of farmers remove or ignore meters after the inspection visit (SRC-TG-360, SRC-TG-532). On slide 20 of the case study, 12 of 24 farms had no working meter (10 none, 1 removed, 1 never installed), and 16 of 24 said they do not track the volumes they pump (SRC-TG-361). GIZ adds that several farmers removed meters to cut head loss and raise flow (SRC-TG-360). So the safeguard exists on paper and is weak in use.
- **Adoption.** 1,340 converters got import tax privileges in 2015-2018, so the authors infer more than 1,000 systems since 2015 (SRC-TG-361). ANME paid subsidies on only 124 systems between 2010 and 2017 (SRC-TG-532), so most systems sit outside the paid scheme, and the authors suspect many are on unauthorised wells (SRC-TG-532). In the Kébili region alone, researchers mapped 2,358 photovoltaic stations in 2021 (a stock, not 2021 installations; SRC-TG-631). There is no national register of installed systems in the sources we opened.
- **Rebound.** Almost 90% of the surveyed farmers pump more than before the installation, and a third started using arid or unused land (SRC-TG-532). More than 80% say solar raised the volumes they irrigate (SRC-TG-361). This is self-reported and has no before and after metering, so it is a strong signal but not a measurement (the authors say so). International evidence that cheap solar energy raises groundwater development is argued in a Science policy forum, seen here only through a news release (SRC-TG-362).
- **Unauthorised wells.** In the case study, 4 of 24 farms had illicit solar systems. The authors write that missing subsidy for illicit wells does not stop solar equipment and that these systems escape inspection (SRC-TG-361). The Ministry's national report says solar pumps are installed on illicit boreholes in Kébili, where STEG connection is impossible (FND-TG-625 data_gaps, quoted from SRC-TG-402; the extract is not yet in that record). Researchers confirm solar enabled the extensions since about 2015 (SRC-TG-631, SRC-TG-632).

## Audit

**Root cause coverage (0).** The overdraft in FND-TG-400, 401, 410 and 625 comes from illicit and unregulated drilling, weak enforcement and cheap access to water. The programme acts on the energy bill, which is a cost brake on pumping, not a cause the findings want removed. It makes the cost brake weaker. The ministry's national water report lists the subsidy among the factors behind the overexploitation, next to drought and weak control of the public water domain (SRC-TG-402, printed p. 36).

**Evidence quality (2).** Several independent sources point the same way: the ministry's national report (tier A), a peer-reviewed article on Kébili (SRC-TG-631), a policy note (SRC-TG-632) and the GIZ/FAO survey. But the Tunisian quantitative evidence is two small surveys (20-24 farms), self-reported, with no metering of pumped volumes before and after. No source measures groundwater change attributable to solar pumps. The 2017 reform is unmeasured.

**Adoption (2).** More than 1,000 systems since 2015 and at least 2,358 in Kébili in 2021 show real uptake, far beyond the 124 subsidised systems. It is concentrated in the off-grid South and Centre. Exact national count unknown. Adoption is high, but a high share of it is outside the scheme.

**Side effects (0).** Under the scale used here, 0 means it worsens the targeted problem. Extra pumping on aquifers already above 100% (FND-TG-400), opening new irrigated land (SRC-TG-532), and in Kébili feeding the illicit extensions (FND-TG-625). The effect is observed in surveys; the aquifer-level consequence is argued, not measured.

**Cost and accessibility (1).** Small farmers find the investment onerous even with the subsidy; large farmers hit the cap; farmers use their own funds, with no bank credit (SRC-TG-361). FTI pays the farmer after the whole amount is spent and farmers report delays; FTE can pay the installer directly, or the farmer after commissioning (SRC-TG-360, SRC-TG-361). Costs ran from 2,600 to 4,100 DT/kWp without pumps (SRC-TG-361). Operating cost is near zero, which is the issue.

## Limits and blockers

- The meter requirement is the only volume safeguard, and reading is not mandatory (SRC-TG-360). Farmers remove meters (SRC-TG-532). Nothing caps the volume that a legal well may pump.
- Legal gap: Water Code Art. 9 lets wells up to 50 m be dug without prior authorisation outside decreed perimeters (SRC-TG-406). A solar pump on such a well falls under no permit. The subsidy rule needs a CRDA authorisation, which such wells lack by design, so they are either unsubsidised or enter by another route; this link is our inference.
- Unauthorised wells: no subsidy, but equipment is still installed, and nothing in the sources shows a sanction on installers or sellers of such systems. The GIZ study recommends controlling the sale of variable-speed drives (SRC-TG-361).
- Off-grid targeting channels money to land that has no STEG access, which is largely new land. The same study found that grid-connected systems are not economic because pumping tariffs are subsidised (SRC-TG-532).
- Administrative delays push small farmers to buy outside the incentive system (SRC-TG-360).

## Criticisms

Listed in the frontmatter. The strongest is the ministry's own: the subsidy makes the water "totalement gratuite" and works against conservation (SRC-TG-402). Supported by the farmer survey (SRC-TG-361). The claim that solar "enabled" illicit extensions is supported as an enabling factor, not as the sole cause; the sources also list market liberalisation, date prices and lax enforcement (SRC-TG-631, SRC-TG-632, FND-TG-625). Oversizing by installers is reported in one source (SRC-TG-631); the ANME survey found PV ratios from under 0.5 to over 2 kWp per hectare and that most sizing relies on supplier advice (SRC-TG-361). No source defends the programme against these criticisms; the farmers' and GIZ's own positive findings concern satisfaction (96% would reinvest), not water outcomes (SRC-TG-361).

## Trade-offs and consequences

- **Water (long-term):** more pumping on over-drawn aquifers. Central and Kébili aquifers are already above their resource (FND-TG-400, FND-TG-625). The ministry lists the subsidy among the factors of overexploitation (SRC-TG-402). Aquifer-level consequences are argued from this, not measured.
- **Agriculture (short-term):** new orchards and dates on land previously unused (SRC-TG-532). Jobs created in lagging regions (SRC-TG-361). But in Kébili the extensions face salinisation and waterlogging with no drainage (FND-TG-625).
- **Energy (short-term):** fewer diesel and grid kWh per cubic metre. But no opened source quantifies it, and the study found STEG and ANME planning do not account for groundwater limits (SRC-TG-631).
- **Public finance (long-term):** funds subsidise equipment that raises demand while the EAU 2050 strategy depends on cutting irrigation demand by about 26% (FND-TG-410, SRC-TG-503). Projection, not measured.
- **Creates:** FND-TG-400 and FND-TG-625 already carry this as a root cause. We link them under `creates` because the programme worsens them; no separate new finding is needed. A separate phase 1 topic worth opening: the number and location of solar pumps on unauthorised wells, which no source gives (flag for the lane owner).

## Verdict and gap

Counterproductive for the overdraft findings as currently run. It is not a failed energy programme: it is adopted and farmers like it. The harm comes from combining a near-zero marginal cost with weak well permits, a meter that nobody reads and an unregistered, partly illicit market. The verdict rests on consistent but mostly qualitative evidence, so "counterproductive" is the best reading, not a quantified result. International rebound evidence (India, Morocco) was only partly accessed, which is why the Tunisian signal is the one we rely on.

Phase 3 could build on: ties between subsidy and a volume cap per authorised well; metering with remote telemetry (recommended in SRC-TG-361); a permit and serial-number register for every solar system and drive; buy-back of surplus electricity so water is no longer the only use of the panels (proposed in SRC-TG-632, India model); and combining with the Massire "win-win contract" in Kébili (legalisation of plots in return for meters and no further extension). These need testing by experts. Do not draft phase 3 records yet: phase 3 is locked.

## Verification

**Independent review, 22 November 2026:** pass after corrections. Originals checked (pdftotext of the published PDFs, or the page itself): SRC-TG-360 (introduction on authorised wells, flow cap and meter; sections 3.1.2, 4.1 on FTE and FTI rates, 2018 fund choice, 5,000 DT cap for grid-connected farms, payment modes; section 5.1 on meters removed), SRC-TG-361 (slides 2, 8, 9, 12, 19, 20, 21, 24 and 29: sample of 24 farms, pre-solar energy 50% diesel, sizing basis, satisfaction 96%, meter table, 1,340 converters), SRC-TG-532 (pages 2-4: 124 subsidised systems 2010-2017, third of farmers on new land, almost 90% pumping more, meters removed after the site visit, grid-connected payback), SRC-TG-402 (printed p. 36 subsidy sentence; PDF section on solar pumping in Kébili), SRC-TG-503 (irrigation demand 3,382 to 2,502 Mm3, 2020 to 2050, a 26% cut, normative scenario), SRC-TG-406 (Article 9), SRC-TG-631 (2,358 stations, oversizing, STEG statement), SRC-TG-632 (free-energy over-pumping, meter and resale ideas) and the University of Waterloo release (SRC-TG-362). Corrections: the meter count is 12 of 24 farms without a working meter (10 none, 1 removed, 1 never installed), not 10; the 2,358 Kébili stations are a stock mapped in 2021, not 2021 installations, and are not stated to serve the extensions; the diesel figure is the pre-solar energy source of 24 farms (50%), and the cost saving is a motivation, not a measured result; the claim that the conditions mean the scheme "guards the aquifer" was replaced by the rule as reported plus GIZ's finding that it is insufficient; the ministry lists the subsidy among factors of overexploitation rather than as one of four root causes; the GIZ/FAO collective-borehole point was reworded to what the slide says; the FTE payment route is installer or farmer. Scores and verdict unchanged. Not confirmed in any original: the decree texts and CRDA specification (rates and rules rest on the GIZ 2019 report), and the Closas and Rap and Science forum originals (only the news release was read); neither is essential to the verdict.
Teammate sign-off is outstanding.
