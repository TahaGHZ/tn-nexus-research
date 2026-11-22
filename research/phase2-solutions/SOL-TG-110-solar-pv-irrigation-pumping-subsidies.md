---
id: SOL-TG-110
name: Subsidised solar photovoltaic pumping for irrigation (FTE via ANME, FTI via APIA)
status: draft
type: programme
owner: "ANME (Fonds de Transition Énergétique, FTE) and APIA (Fonds Tunisien de l'Investissement, FTI), under the Ministry of Energy and the Ministry of Agriculture (MARHP); CRDAs check well authorisation"
targets: [FND-TG-400, FND-TG-401, FND-TG-410, FND-TG-625]
status_in_tunisia: deployed
claims:
  - claim: "Solar pumping cuts diesel and grid electricity costs for farms; the main reason farmers adopt it is to save energy spending, especially those on diesel (50% of the surveyed farms)"
    evidence: SRC-TG-361
    verified: partial
  - claim: "Subsidies are paid only for systems on wells authorised by the CRDA and meeting a specification that caps pump flow and requires a meter, so the scheme itself guards the aquifer"
    evidence: SRC-TG-360
    verified: no
  - claim: "Subsidy rules: FTE premium since 2009 (40%, cap 20,000 DT), raised in 2017 to a 50,000 DT cap on a sliding per-kWp scale, off-grid farms only; FTI 50% up to 500,000 DT (60% for service cooperatives and development groups)"
    evidence: SRC-TG-360
    verified: partial
  - claim: "Adoption: more than 1,000 systems installed since 2015 (inferred from 1,340 converters with import tax privileges in 2015-2018); at least 2,358 photovoltaic stations detected in the Kébili region in 2021 alone"
    evidence: SRC-TG-361
    verified: partial
  - claim: "Pumping rises after installation: almost 90% of surveyed farmers pump more water than before, and a third started farming arid or unused land"
    evidence: SRC-TG-532
    verified: partial
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
  - criticism: "Promoting solar irrigation without controls on allocation is likely to deepen depletion in stressed aquifers"
    from: "Garrick, Balasubramanya et al. (Science policy forum, 2024), via a news release"
    source: SRC-TG-362
    assessment: partly-supported
  - criticism: "Farmers installing solar systems vote against collective boreholes and believe the water is free and inexhaustible"
    from: "GIZ/FAO case study"
    source: SRC-TG-361
    assessment: supported
trade_offs:
  - effect: "More groundwater withdrawal on aquifers already above 100% exploitation; the ministry itself links this to overdraft"
    on: water
    horizon: long-term
    source: SRC-TG-402
  - effect: "New irrigated land opened in dry-farming or unused zones (a third of surveyed farmers); in Kébili, 2,358 PV stations serve private extensions on collective land"
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
conflict_of_interest: "none identified. The owner agencies (ANME, APIA) are not linked to team members or to expert EXP-TG-001 (STC) in the sources opened. The source authors (GIZ, FAO, GFA) ran the programme studies and recommended reforms; they promote solar irrigation, not criticise it."
sources: [SRC-TG-360, SRC-TG-361, SRC-TG-362, SRC-TG-532, SRC-TG-402, SRC-TG-406, SRC-TG-503, SRC-TG-631, SRC-TG-632]
author: TahaGHZ
---

## What it is

Two public funds pay part of the cost of solar photovoltaic pumping systems (SPIS) on farms. The Fonds de Transition Énergétique (FTE), run by ANME, started a premium in 2009 at 40% of cost, capped at 20,000 DT. In 2017 the cap went to 50,000 DT, computed per kWp on a sliding scale from 6,000 TND/kWp for tiny systems down to 1,000 TND/kWp above 10 kW. It goes only to farms with no grid connection. The FTI, run by APIA, pays 50% of the investment up to 500,000 DT, and 60% for service cooperatives and development groups (SRC-TG-360). From 2018 a farmer had to choose one fund (SRC-TG-360). Grid-connected farms qualify only for small self-generation premiums, because grid pumping electricity is already heavily subsidised (SRC-TG-360, SRC-TG-532). The stated rules are as the GIZ consultants described them in 2019; the decree texts were not opened.

## What it claims, and what the evidence shows

- **Saves energy cost.** Farmers' main reason for adopting is saving on energy spending, most of all those on diesel (SRC-TG-361). This matches the programme's aim. Evidence is a 20-24 farm survey, not a measurement of bills or emissions.
- **Guards the aquifer through conditions.** The scheme pays only on CRDA-authorised wells, with a flow cap and a meter (SRC-TG-360). In practice the CRDA specification sets no volume limit, meter readings are not required by law, and a major part of farmers remove or ignore meters after the inspection visit (SRC-TG-360, SRC-TG-532). On slide 20 of the case study, 10 of 24 farms had no meter at all (SRC-TG-361). So the safeguard exists on paper and is weak in use.
- **Adoption.** 1,340 converters got import tax privileges in 2015-2018, so the authors infer more than 1,000 systems since 2015 (SRC-TG-361). ANME paid subsidies on only 124 systems between 2010 and 2017 (SRC-TG-532), so most systems sit outside the paid scheme, and the authors suspect many are on unauthorised wells (SRC-TG-532). In Kébili alone researchers detected 2,358 photovoltaic stations in 2021 (SRC-TG-631). There is no national register of installed systems in the sources we opened.
- **Rebound.** Almost 90% of the surveyed farmers pump more than before the installation, and a third started using arid or unused land (SRC-TG-532). More than 80% say solar raised the volumes they irrigate (SRC-TG-361). This is self-reported and has no before and after metering, so it is a strong signal but not a measurement (the authors say so). International evidence that cheap solar energy raises groundwater development is argued in a Science policy forum, seen here only through a news release (SRC-TG-362).
- **Unauthorised wells.** In the case study, 4 of 24 farms had illicit solar systems. The authors write that missing subsidy for illicit wells does not stop solar equipment and that these systems escape inspection (SRC-TG-361). The Ministry's national report says solar pumps are installed on illicit boreholes in Kébili, where STEG connection is impossible (FND-TG-625 data_gaps, quoted from SRC-TG-402; the extract is not yet in that record). Researchers confirm solar enabled the extensions since about 2015 (SRC-TG-631, SRC-TG-632).

## Audit

**Root cause coverage (0).** The overdraft in FND-TG-400, 401, 410 and 625 comes from illicit and unregulated drilling, weak enforcement and cheap access to water. The programme acts on the energy bill, which is a cost brake on pumping, not a cause the findings want removed. It makes the cost brake weaker. The ministry names the subsidy as one of four root causes in FND-TG-400 (SRC-TG-402).

**Evidence quality (2).** Several independent sources point the same way: the ministry's national report (tier A), a peer-reviewed article on Kébili (SRC-TG-631), a policy note (SRC-TG-632) and the GIZ/FAO survey. But the Tunisian quantitative evidence is two small surveys (20-24 farms), self-reported, with no metering of pumped volumes before and after. No source measures groundwater change attributable to solar pumps. The 2017 reform is unmeasured.

**Adoption (2).** More than 1,000 systems since 2015 and at least 2,358 in Kébili in 2021 show real uptake, far beyond the 124 subsidised systems. It is concentrated in the off-grid South and Centre. Exact national count unknown. Adoption is high, but a high share of it is outside the scheme.

**Side effects (0).** Under the scale used here, 0 means it worsens the targeted problem. Extra pumping on aquifers already above 100% (FND-TG-400), opening new irrigated land (SRC-TG-532), and in Kébili feeding the illicit extensions (FND-TG-625). The effect is observed in surveys; the aquifer-level consequence is argued, not measured.

**Cost and accessibility (1).** Small farmers find the investment onerous even with the subsidy; large farmers hit the cap; farmers use their own funds, with no bank credit (SRC-TG-361). FTI pays after the farmer has spent the whole amount and has delays; FTE pays the installer directly (SRC-TG-360). Costs ran from 2,600 to 4,100 DT/kWp without pumps (SRC-TG-361). Operating cost is near zero, which is the issue.

## Limits and blockers

- The meter requirement is the only volume safeguard, and reading is not mandatory (SRC-TG-360). Farmers remove meters (SRC-TG-532). Nothing caps the volume that a legal well may pump.
- Legal gap: Water Code Art. 9 lets wells up to 50 m be dug without prior authorisation outside decreed perimeters (SRC-TG-406). A solar pump on such a well falls under no permit. The subsidy rule needs a CRDA authorisation, which such wells lack by design, so they are either unsubsidised or enter by another route; this link is our inference.
- Unauthorised wells: no subsidy, but equipment is still installed, and nothing in the sources shows a sanction on installers or sellers of such systems. The GIZ study recommends controlling the sale of variable-speed drives (SRC-TG-361).
- Off-grid targeting channels money to land that has no STEG access, which is largely new land. The same study found that grid-connected systems are not economic because pumping tariffs are subsidised (SRC-TG-532).
- Administrative delays push small farmers to buy outside the incentive system (SRC-TG-360).

## Criticisms

Listed in the frontmatter. The strongest is the ministry's own: the subsidy makes the water "totalement gratuite" and works against conservation (SRC-TG-402). Supported by the farmer survey (SRC-TG-361). The claim that solar "enabled" illicit extensions is supported as an enabling factor, not as the sole cause; the sources also list market liberalisation, date prices and lax enforcement (SRC-TG-631, SRC-TG-632, FND-TG-625). Oversizing by installers is reported in one source (SRC-TG-631); the ANME survey found PV ratios from under 0.5 to over 2 kWp per hectare and that most sizing relies on supplier advice (SRC-TG-361). No source defends the programme against these criticisms; the farmers' and GIZ's own positive findings concern satisfaction (96% would reinvest), not water outcomes (SRC-TG-361).

## Trade-offs and consequences

- **Water (long-term):** more pumping on over-drawn aquifers. Central and Kébili aquifers are already above their resource (FND-TG-400, FND-TG-625). The ministry names the subsidy in its root causes. Aquifer-level consequences are argued from this, not measured.
- **Agriculture (short-term):** new orchards and dates on land previously unused (SRC-TG-532). Jobs created in lagging regions (SRC-TG-361). But in Kébili the extensions face salinisation and waterlogging with no drainage (FND-TG-625).
- **Energy (short-term):** fewer diesel and grid kWh per cubic metre. But no opened source quantifies it, and the study found STEG and ANME planning do not account for groundwater limits (SRC-TG-631).
- **Public finance (long-term):** funds subsidise equipment that raises demand while the EAU 2050 strategy depends on cutting irrigation demand by about 26% (FND-TG-410, SRC-TG-503). Projection, not measured.
- **Creates:** FND-TG-400 and FND-TG-625 already carry this as a root cause. We link them under `creates` because the programme worsens them; no separate new finding is needed. A separate phase 1 topic worth opening: the number and location of solar pumps on unauthorised wells, which no source gives (flag for the lane owner).

## Verdict and gap

Counterproductive for the overdraft findings as currently run. It is not a failed energy programme: it is adopted and farmers like it. The harm comes from combining a near-zero marginal cost with weak well permits, a meter that nobody reads and an unregistered, partly illicit market. The verdict rests on consistent but mostly qualitative evidence, so "counterproductive" is the best reading, not a quantified result. International rebound evidence (India, Morocco) was only partly accessed, which is why the Tunisian signal is the one we rely on.

Phase 3 could build on: ties between subsidy and a volume cap per authorised well; metering with remote telemetry (recommended in SRC-TG-361); a permit and serial-number register for every solar system and drive; buy-back of surplus electricity so water is no longer the only use of the panels (proposed in SRC-TG-632, India model); and combining with the Massire "win-win contract" in Kébili (legalisation of plots in return for meters and no further extension). These need testing by experts. Do not draft phase 3 records yet: phase 3 is locked.

## Verification

**Outstanding verification:** open the 2017 decree on FTE and FTI solar pumping and the CRDA specification (cahier des charges) to confirm the rates, the flow cap and the meter rule as currently in force; add the two RNE 2017 extracts on solar pumping to SRC-TG-402 (FND-TG-625 data_gaps) and confirm the page numbers; open Closas and Rap (2017, Energy Policy) and the Science forum itself for the international rebound evidence on India and Morocco; find an ANME or APIA count of subsidised systems after 2017 and any national register of solar pumps; check whether the 2017 reform and the 2023 ANME installer list changed practice; look for any before and after metered study in Tunisia.
