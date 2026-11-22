---
id: SOL-TG-100
name: VRV/VRF central air conditioning with zone control, scheduling and peak demand limiting (Daikin VRV, Hisense VRF), proposed by STC
status: draft
type: product
owner: Daikin and Hisense (manufacturers); proposed for Tunisia by Société Tunisienne de Chauffage (STC), their exclusive Tunisian distributor
targets:
  - FND-TG-220
  - FND-TG-250
  - FND-TG-251
status_in_tunisia: proposed
claims:
  - claim: A VRV outdoor unit can cap its power at roughly 40-80% of nominal on an external signal, so a timer wired for 13:00-17:00 cuts the building's draw when the grid is short (Daikin installer guide, as relayed by STC).
    evidence: SRC-TG-341
    verified: no
  - claim: A building drawing 60 kW capped at 70% removes 18 kW from the grid in every peak hour (STC example with assumed values).
    evidence: SRC-TG-341
    verified: partial
  - claim: About 50% of the summer peak comes from residential air conditioning (ANME/STEG 2024 study, as reported by Webdo and relayed by STC).
    evidence: SRC-TG-341
    verified: no
  - claim: VRF systems use substantially less energy than conventional systems (zone control, part-load operation, scheduling).
    evidence: SRC-TG-350
    verified: partial
  - claim: Summer 2026 peak demand about 5,000 MW against about 4,630 MW maximum STEG production capacity (Webdo, relayed by STC).
    evidence: SRC-TG-341
    verified: no
scores:
  root_cause_coverage: 1
  evidence_quality: 1
  adoption: 0
  side_effects: 2
  cost_accessibility: 0
greenwashing_flags:
  - "unverifiable claim: the demand-limiting capability and the 40-80% cap are attributed to a Daikin guide we did not open; no installed Tunisian case or measured saving is given"
  - "impact shifted elsewhere: the cap defers cooling load out of 13:00-17:00 rather than removing it, and the sources give no measure of what happens after the capped hours"
verdict: superficial
limits:
  - Savings measured in independent studies are against VAV, rooftop or constant-speed systems, not against efficient inverter splits, which most new Tunisian AC sales may already be; no independent comparison against inverter splits was found.
  - Much of the measured saving comes from how rooms are operated (cooling only occupied rooms), not from the VRF equipment itself; a poorly scheduled VRF loses the advantage.
  - Capping outdoor-unit power limits cooling capacity on the hottest afternoons and can cost comfort; the sources do not measure comfort effects.
  - A building-level cap is only as large as the capped building's draw; it does not touch the residential split-AC stock that drives the largest share of AC load.
  - Refrigerant charge is concentrated in one piping network that serves many rooms, which makes leak safety design a requirement of the system.
blockers:
  - blocker: Upfront cost. VRV needs piping, controllers and a larger outdoor unit; the independent studies list higher initial cost as a known concern. No Tunisian price or payback was found, and STC gives none.
    type: economic
    source: SRC-TG-351
  - blocker: Who can adopt it. LBNL assumes 60% of Tunisian ACs are residential and 40% commercial, and the units served by VRV are central systems for offices, hotels and large buildings; households that drive the residential share are unlikely buyers. Numbers of VRV installations in Tunisia were not found.
    type: market
    source: SRC-TG-251
  - blocker: No tariff or incentive pays a building to cap demand at STEG's peak. Med-TSO describes off-peak tariff incentives and voluntary industrial curtailment as reported measures, but we found no demand-limit programme for commercial AC; whether one exists is unconfirmed.
    type: regulatory
    source: SRC-TG-234
  - blocker: Servicing skills. Tunisia has a decree for certification of RAC servicing companies and personnel, but only 76 trainers certified and 386 technicians trained in refrigerant handling in 2020-2024, and the sector is mainly domestic splits and commercial refrigeration. Nothing mentions VRV/VRF-specific training; installation and commissioning skill for multi-room systems is an open question.
    type: institutional
    source: SRC-TG-352
  - blocker: Refrigerant transition. Tunisian AC manufacturing is on R-410A, with HFC-32 (R-32) planned under the Kigali implementation plan; R-32 is mildly flammable and multi-room VRF needs charge-per-room and leak-detection design. Local rules for this were not found.
    type: technical
    source: SRC-TG-352
criticisms:
  - criticism: The reported savings of VRF come mostly from operating mode (part-time, part-space cooling), not from the equipment, so the same behaviour change could be had with cheaper systems.
    from: Yu, Yan, Sun, Hong, Zhu (LBNL and Tsinghua)
    source: SRC-TG-350
    assessment: supported
  - criticism: The best-known US laboratory test compares VRF against a rooftop unit with terminal electric reheat, and its own text says the baseline was set up in a way that exaggerates heating-season savings; the paper reports 17%, 10.5% and 20% cooling savings in different places.
    from: Reading of the paper itself (author is employed by a VRF manufacturer, Samsung)
    source: SRC-TG-351
    assessment: supported
  - criticism: The proposal rests on assumed values and press figures, and gives no measured result from a Tunisian building.
    from: Our own audit of the STC document
    source: SRC-TG-341
    assessment: supported
  - criticism: VRV demand limiting is aimed at buildings, but the largest AC stock is in homes, so the national peak effect is small unless VRV reaches far beyond its current market.
    from: Our own audit (reasoning from LBNL stock shares)
    source: SRC-TG-251
    assessment: partly-supported
trade_offs:
  - effect: A refrigerant leak from a multi-room system with a large charge. R-410A has high global warming potential; R-32 is lower but mildly flammable. Size of this risk in Tunisian practice not documented.
    on: Climate, building occupants
    horizon: long-term
    source: SRC-TG-352
  - effect: Capped hours may shift cooling later in the day, possibly raising load in the evening and night when residential AC use also peaks; not measured.
    on: Grid (energy)
    horizon: short-term
    source: SRC-TG-251
  - effect: Lower daytime electricity draw in commercial buildings saves peak generation capacity and imports, which the World Bank and Med-TSO describe as tight in summer; the amount is unquantified for VRV.
    on: Energy
    horizon: short-term
    source: SRC-TG-234
  - effect: "No direct effect on water or agriculture found."
    on: Water, agriculture
    horizon: long-term
    source: none
creates: []
gap_left: The residential split-AC stock (47.9% of households own an AC, 1,681,000 units in 2019, as reported by STEG via LBNL) and the evening peak; the cause of the growing AC stock; how much cooling demand is avoidable through building envelope, shading and standards rather than equipment.
conflict_of_interest: Proposed by EXP-TG-001 (Maher Mahmoudi), a technical sales engineer at STC, which sells Daikin and Hisense HVAC in Tunisia and would profit from adoption. The proposal's savings figures are assumed values, not measurements. Audited here with the same method as any other solution; the audit did not use STC data beyond the proposal itself.
sources:
  - SRC-TG-234
  - SRC-TG-250
  - SRC-TG-251
  - SRC-TG-341
  - SRC-TG-350
  - SRC-TG-351
  - SRC-TG-352
author: TahaGHZ
---

## What it is

A central air-conditioning system where one outdoor unit serves several indoor units through
a refrigerant pipe network (VRV is Daikin's name, VRF the generic term; Hisense sells a
lower-cost VRF line). Each room has its own control, the compressor speed varies with load,
and the system can be scheduled. STC proposes adding an external demand-limiting adaptor
that caps the outdoor-unit power during STEG's afternoon peak (SRC-TG-341). STC is the
exclusive Tunisian distributor of these brands. The proposal is confidential and not
published (SRC-TG-341).

## What it claims, and what the evidence shows

**Savings against which baseline.** The independent evidence we found compares VRF with
other system types. A sub-metering study of five Chinese offices found VRF used up to 70%
less cooling energy than central VAV, and the authors say this is mainly from operating mode
(SRC-TG-350). A one-building test in the United States found 10.5% (17.3% with standby)
cooling-season savings against a rooftop VAV unit (SRC-TG-351). Neither study compares VRF
with a good inverter split, the likely alternative for a small Tunisian building. We looked
for one and found only vendor and trade material, which is not evidence. So the claim
"VRF saves energy" is partly verified for the baseline of VAV/RTU, and unverified for the
baseline that matters here.

**Demand limiting.** The capability to cap power on an external signal is attributed by STC
to a Daikin installer guide; we did not open it (SRC-TG-341). The 18 kW example is
arithmetic on assumed numbers: 60 kW x 0.3 = 18 kW, correct as arithmetic. It is not a
measurement. By the same example, removing 10 MW from the peak would take about 555
similar buildings capped every afternoon (10,000 kW / 18 kW, illustrative only).

**Peak share: 50% against 44%.** STC states about 50% of the summer peak is residential AC,
citing an "ANME/STEG 2024 study" via Webdo (SRC-TG-341). FND-TG-250 records 44% for August
2021, an STEG estimate relayed by LBNL (SRC-TG-250), and the LBNL framework counts both
residential and commercial AC (60% of units residential, 40% commercial; SRC-TG-251). The
two figures are therefore not the same measure: 44% is all AC in 2021, and the STC figure
says residential only, in a later year and from a study we have not located. If both were
right, residential AC alone would exceed the all-AC share, so they cannot both be taken at
face value. FND-TG-250 also records an unexplained 84% for 2013 (SRC-TG-251). We use 44% as
the better-documented reported number, with its own data gap, and flag the 50% as unverified.

**Who can adopt it.** LBNL says peak hours (10:00-18:00) coincide with business hours, so it
assumes all commercial AC is coincident with the peak, against half of residential use
(SRC-TG-251). That makes commercial buildings a legitimate target for peak action. But the
document's own scope is buildings that can afford a VRV: this reaches only part of the
commercial share, and none of the households.

## Audit

**root_cause_coverage = 1.** The root cause in FND-TG-250 is a growing household AC stock
coinciding with peak hours, and in FND-TG-220 a generation shortfall in heat; the proposal
trims the draw of a subset of commercial buildings. It acts on part of the symptom (afternoon
load of buildings that adopt it), not on stock growth or on efficiency of what is bought.

**evidence_quality = 1.** Independent studies exist for VRF against VAV or RTU, in China and
the United States (SRC-TG-350, SRC-TG-351), but not against efficient inverter splits and not
for Tunisia. Demand limiting and the peak shares come from STC, relayed through the press, or
from a guide we did not open (SRC-TG-341).

**adoption = 0.** No VRV/VRF installation count, market share or demand-limit programme was
found for Tunisia. STC proposes it; it is not yet shown to be used for peak limiting here.
Not failure: "proposed", not "tried and abandoned".

**side_effects = 2.** The cap could shift load rather than remove it, and a refrigerant leak
in a multi-room system carries risks; neither is quantified in the sources (SRC-TG-352 covers
only which refrigerants Tunisia uses). No clear harm to water or agriculture was found.

**cost_accessibility = 0.** No price was found. The independent literature calls higher
initial cost a known barrier (SRC-TG-351), and the buyers who could pay are a small share of
the AC market. Households, the larger share of AC units, are not realistic buyers.

## Limits and blockers

See the frontmatter. In short: the measured savings are against different baselines; the
cap needs a signal source (a timer or STEG signal) and the building must tolerate reduced
cooling; no incentive exists that we found; servicing skills for multi-room refrigerant
systems are not shown (SRC-TG-352 reports certification and training numbers for RAC
servicing as a whole). On refrigerant, SRC-TG-352 states Tunisian AC makers use R-410A with
R-32 to follow under the Kigali plan. A search of standards material on R-32 VRF design
(ASHRAE 15, ISO 5149) found rules limiting whole-system charge in a single room and
requiring leak detection; these came from secondary summaries and were not opened as standard
texts, so no Tunisian regulatory text is cited. No Tunisian law or decree was identified as
requiring or blocking demand limiting.

## Criticisms

See the frontmatter. The strongest is that the savings come from operating mode and from
weak baselines (SRC-TG-350, SRC-TG-351), which leaves the question of VRF against a good
inverter split open. We did not find researchers writing specifically against VRV in Tunisia.

## Trade-offs and consequences

Nothing found creates a problem in water or agriculture. Within energy, the risks are load
shifting to evening hours and refrigerant leaks and end-of-life emissions. Both are stated as
risks from reasoning, not observations; no existing finding covers them, so no `creates`
link is made. A phase 1 finding on refrigerant emissions from Tunisian AC stock (R-410A) and
on evening peak shape could be researched by the lane owner.

## Verdict and gap

**superficial.** The product is real and has independent evidence of savings in other
settings, but the evidence is against different baselines, the Tunisian peak claims are
unverified, the reach is limited to buyers who can afford it, and it does not act on the
residential AC stock or on generation tightness. It is not counterproductive and not shown to
fail.

Phase 3 could combine: efficiency standards and labels for the household stock (SRC-TG-250),
a tariff or programme that pays commercial buildings for peak limiting (testable with a
building that already has VRV), and simple scheduling or occupancy-based control on cheaper
systems, the part of the VRF saving that the evidence says does not need VRF.

## Verification

Opened and quoted: SRC-TG-350, SRC-TG-351, SRC-TG-352 (new), SRC-TG-250 and SRC-TG-251
(existing records, extracts re-read), SRC-TG-341 (STC proposal, a vendor document). SRC-TG-234
is cited through the FND-TG-220 record, not reopened.

**Outstanding verification:** (1) The Daikin DTA104A61/62 adaptor guide and the 40-80% cap. (2) The ANME/STEG 2024 study behind "~50% residential" (not found; ask ANME/STEG). (3) An independent field or simulation study of VRF against efficient inverter splits, and a Tunisian price and payback. (4) The number of VRV/VRF buildings in Tunisia and their share of commercial AC. (5) Refrigerant safety rules (ASHRAE 15, ISO 5149 R-32) from the standard texts and any Tunisian regulation; VRV technician training in Tunisia. (6) Share of ordinary Tunisian AC sales that are already inverter units. (7) Evening load effect of the cap.
