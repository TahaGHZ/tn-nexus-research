---
id: SOL-TG-100
name: VRV/VRF central air conditioning with zone control, scheduling and peak demand limiting (Daikin VRV, Hisense VRF)
status: in-review
type: product
owner: Daikin and Hisense (manufacturers); sold in Tunisia by Société Tunisienne de Chauffage (STC), their exclusive Tunisian distributor according to SRC-TG-341
targets:
  - FND-TG-220
  - FND-TG-250
  - FND-TG-251
status_in_tunisia: proposed
claims:
  - claim: A Daikin VRV outdoor unit can limit its demand on an external contact signal through the DTA104A61/A62 adaptor; the manufacturer's engineering data gives guideline levels of about 70% (Demand 1) and about 40% (Demand 2), plus a forced thermo-off (Demand 3). The use-case note's range of "roughly 40-80%" is only partly confirmed (the 80% level is not in the manual), and the timer wired for 13:00-17:00 is the note's use case, not stated in the manual.
    evidence: SRC-TG-353
    verified: partial
  - claim: A building drawing 60 kW capped at 70% removes 18 kW from the grid in every peak hour (example with assumed values in the use-case note).
    evidence: SRC-TG-341
    verified: partial
  - claim: About 50% of the summer peak comes from residential air conditioning (ANME/STEG 2024 study, as reported by Webdo and relayed in the use-case note; original not found).
    evidence: SRC-TG-341
    verified: no
  - claim: VRF systems used less energy than central VAV or rooftop systems in two studies (up to 70% less in five Chinese offices, mainly from operating mode; 10.5% to 17.3% less in one US test building); no comparison against efficient inverter splits was found.
    evidence: SRC-TG-350
    verified: partial
  - claim: Summer 2026 peak demand about 5,000 MW against about 4,630 MW maximum STEG production capacity (Webdo, relayed in the use-case note; original not opened). Med-TSO (SRC-TG-234) models weekly peak hourly demand of 4,000 to 5,827 MW for summer 2026, which is a different measure.
    evidence: SRC-TG-341
    verified: no
scores:
  root_cause_coverage: 1
  evidence_quality: 1
  adoption: 0
  side_effects: 2
  cost_accessibility: 0
greenwashing_flags:
  - "partly verified claim: Daikin's engineering data confirms an external demand-limit input with guideline levels of about 70% and 40% (SRC-TG-353), but not the 80% level, the timer use at 13:00-17:00, or any installed Tunisian case or measured saving"
  - "impact shifted elsewhere: the cap defers cooling load out of 13:00-17:00 rather than removing it, and the sources give no measure of what happens after the capped hours"
verdict: superficial
limits:
  - Savings measured in independent studies are against VAV, rooftop or constant-speed systems, not against efficient inverter splits (variable-speed units were 34% of the 128 models LBNL listed on the Tunisian market, SRC-TG-250); no comparison against inverter splits was found.
  - Much of the measured saving comes from how rooms are operated (cooling only occupied rooms), not from the VRF equipment itself; a poorly scheduled VRF loses the advantage.
  - Capping outdoor-unit power limits cooling capacity on the hottest afternoons and can cost comfort; the sources do not measure comfort effects.
  - A building-level cap is only as large as the capped building's draw; it does not touch the residential split-AC stock that drives the largest share of AC load.
  - A multi-room refrigerant network concentrates the charge in one piping system; whether this creates specific leak-safety requirements was not confirmed in an original and is unconfirmed.
blockers:
  - blocker: Upfront cost. VRV needs piping, controllers and a larger outdoor unit; the ORNL paper (co-authored by an employee of a VRF manufacturer) lists higher initial cost among concerns reported for VRF in the United States. No Tunisian price or payback was found, and the use-case note gives none.
    type: economic
    source: SRC-TG-351
  - blocker: Who can adopt it. LBNL assumes 60% of Tunisian ACs are residential and 40% commercial, and the units served by VRV are central systems for offices, hotels and large buildings; households that drive the residential share are unlikely buyers. Numbers of VRV installations in Tunisia were not found.
    type: market
    source: SRC-TG-251
  - blocker: No tariff or incentive pays a building to cap demand at STEG's peak. Med-TSO (summer 2026) reports restrictions on commercial lighting and air conditioning, extended off-peak tariff incentives and appeals for voluntary industrial curtailment; it does not describe a programme that pays a building to cap AC demand, and we found none; whether one exists is unconfirmed.
    type: regulatory
    source: SRC-TG-234
  - blocker: Servicing skills. Tunisia has a decree for certification of RAC servicing companies and personnel, but only 76 trainers certified and 386 technicians trained in refrigerant handling in 2020-2024, and the sector is mainly domestic splits and commercial refrigeration. Nothing mentions VRV/VRF-specific training; installation and commissioning skill for multi-room systems is an open question.
    type: institutional
    source: SRC-TG-352
  - blocker: Refrigerant transition. Tunisian AC manufacturing is on R-410A, with HFC-32 (R-32) to replace it under the Kigali implementation plan (SRC-TG-352). Whether the change brings extra safety design requirements (charge limits, leak detection) for multi-room VRF was not confirmed in any original, and no local rules were found.
    type: technical
    source: SRC-TG-352
criticisms:
  - criticism: The authors attribute the measured VRF saving mainly to operating mode (part-time, part-space cooling) rather than to the equipment; that the same behaviour change could be had with cheaper systems is our inference, not a statement in the paper.
    from: Yu, Yan, Sun, Hong, Zhu (LBNL and Tsinghua)
    source: SRC-TG-350
    assessment: partly-supported
  - criticism: The US laboratory test compares VRF against a rooftop unit with terminal electric reheat, and its limitations section notes the baseline's fixed 14 °C discharge setpoint causes excessive reheat in the heating season; the paper reports 17%, 10.5% and 20% cooling savings in different places.
    from: Reading of the paper itself (one author is employed by a VRF manufacturer, Samsung)
    source: SRC-TG-351
    assessment: supported
  - criticism: The use-case note rests on assumed values and press figures, and gives no measured result from a Tunisian building.
    from: Our own audit of the use-case note shared by Maher Mahmoudi (EXP-TG-001)
    source: SRC-TG-341
    assessment: supported
  - criticism: VRV demand limiting is aimed at buildings, but the largest AC stock is in homes, so the national peak effect is small unless VRV reaches far beyond its current market.
    from: Our own audit (reasoning from LBNL stock shares)
    source: SRC-TG-251
    assessment: partly-supported
trade_offs:
  - effect: A refrigerant leak from a multi-room system with a large single charge, and the change from R-410A to HFC-32 (SRC-TG-352) changing the refrigerant's properties. The global warming potential and flammability differences were not confirmed in an original here; the size of this risk in Tunisian practice is not documented.
    on: Climate, building occupants
    horizon: long-term
    source: SRC-TG-352
  - effect: Capped hours may shift cooling later in the day, possibly raising load in the evening and night when residential AC use also peaks; not measured.
    on: Grid (energy)
    horizon: short-term
    source: SRC-TG-251
  - effect: Lower daytime electricity draw in commercial buildings saves peak generation capacity and imports, which Med-TSO describes as having very little headroom between installed capacity and peak demand; the amount is unquantified for VRV.
    on: Energy
    horizon: short-term
    source: SRC-TG-234
  - effect: "No direct effect on water or agriculture found."
    on: Water, agriculture
    horizon: long-term
    source: none
creates: []
gap_left: The residential split-AC stock (47.9% of households own an AC, 1,681,000 units in 2019, as reported by STEG via LBNL) and the evening peak; the cause of the growing AC stock; how much cooling demand is avoidable through building envelope, shading and standards rather than equipment.
conflict_of_interest: "Suggested as an example of an existing solution by Maher Mahmoudi (EXP-TG-001), a friend of the team who works at STC, the Tunisian distributor of Daikin and Hisense HVAC. He shared a short use-case note (SRC-TG-341); the audit was carried out independently."
sources:
  - SRC-TG-234
  - SRC-TG-250
  - SRC-TG-251
  - SRC-TG-341
  - SRC-TG-350
  - SRC-TG-351
  - SRC-TG-352
  - SRC-TG-353
author: TahaGHZ
---

## What it is

A central air-conditioning system where one outdoor unit serves several indoor units through
a refrigerant pipe network (VRV is Daikin's name, VRF the generic term; Hisense sells a
lower-cost VRF line). Each room has its own control, the compressor speed varies with load,
and the system can be scheduled. The use-case note shared by Maher Mahmoudi (EXP-TG-001)
describes adding an external demand-limiting adaptor that caps the outdoor-unit power during
STEG's afternoon peak (SRC-TG-341). The note states that STC is the exclusive Tunisian
distributor of these brands. The note is confidential and not published (SRC-TG-341).

## What it claims, and what the evidence shows

**Savings against which baseline.** The independent evidence we found compares VRF with
other system types. A sub-metering study of five Chinese offices found VRF used up to 70%
less cooling energy than central VAV, and the authors say this is mainly from operating mode
(SRC-TG-350). A one-building test in the United States found 10.5% (17.3% with standby)
cooling-season savings against a rooftop VAV unit (SRC-TG-351). Neither study compares VRF
with a good inverter split, the likely alternative for a small Tunisian building. We looked
for one and found only manufacturer and trade material, which is not evidence. So the claim
"VRF saves energy" is partly verified for the baseline of VAV/RTU, and unverified for the
baseline that matters here. Variable-speed (inverter) units were 34% of the 128 models LBNL
listed on the Tunisian market, so inverter splits are a real alternative (SRC-TG-250).

**Demand limiting.** The use-case note attributes the capability to cap power on an external
signal to a Daikin installer guide (SRC-TG-341). Daikin's engineering data for the
DTA104A61/A62 adaptor confirms an external demand input with guideline levels of about 70%
(Demand 1) and about 40% (Demand 2), and a forced thermo-off (Demand 3) (SRC-TG-353). The
80% upper level in the note's "roughly 40-80%" and the 13:00-17:00 timer wiring are not in
that manual, so the capability is partly verified. The 18 kW example is
arithmetic on assumed numbers: 60 kW x 0.3 = 18 kW, correct as arithmetic. It is not a
measurement. By the same example, removing 10 MW from the peak would take about 555
similar buildings capped every afternoon (10,000 kW / 18 kW, illustrative only).

**Peak share: 50% against 44%.** The use-case note states about 50% of the summer peak is residential AC,
citing an "ANME/STEG 2024 study" via Webdo (SRC-TG-341). FND-TG-250 records 44% for August
2021, an STEG estimate relayed by LBNL (SRC-TG-250), and the LBNL framework counts both
residential and commercial AC (60% of units residential, 40% commercial; SRC-TG-251). The
two figures are therefore not the same measure: 44% is all AC in 2021, and the note's figure
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
for Tunisia. The existence of a demand-limit input is shown by manufacturer documentation (SRC-TG-353),
but its effect is not measured; the peak shares come from press figures relayed in the
use-case note (SRC-TG-341).

**adoption = 0.** No VRV/VRF installation count, market share or demand-limit programme was
found for Tunisia. It is suggested as an example in the use-case note; it is not shown to be used for peak limiting here.
Not failure: "proposed", not "tried and abandoned".

**side_effects = 2.** The cap could shift load rather than remove it, and a refrigerant leak
in a multi-room system carries risks; neither is quantified in the sources (SRC-TG-352 covers
only which refrigerants Tunisia uses). No clear harm to water or agriculture was found.

**cost_accessibility = 0.** No price was found. The independent literature calls higher
initial cost a concern in the United States (SRC-TG-351), and the buyers who could pay are a small share of
the AC market. Households, the larger share of AC units, are not realistic buyers.

## Limits and blockers

See the frontmatter. In short: the measured savings are against different baselines; the
cap needs a signal source (a timer or STEG signal) and the building must tolerate reduced
cooling; no incentive exists that we found; servicing skills for multi-room refrigerant
systems are not shown (SRC-TG-352 reports certification and training numbers for RAC
servicing as a whole). On refrigerant, SRC-TG-352 states Tunisian AC makers use R-410A with
R-32 to follow under the Kigali plan. Whether R-32 multi-room VRF carries specific charge-limit
or leak-detection requirements (for example under ASHRAE 15 or ISO 5149) was not confirmed:
no standard text or Tunisian regulation was opened. No Tunisian law or decree was identified
as requiring or blocking demand limiting.

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

**Independent review, 22 November 2026:** pass after corrections. Originals opened as PDFs and read with pdftotext: Med-TSO Summer Outlook 2026 (SRC-TG-234, pp. 11, 45-46); LBNL AC market assessment (SRC-TG-250, intro, section 3, variable-speed passage); LBNL cost-benefit analysis (SRC-TG-251, section 5.1.3, 40%/60% commercial/residential split and 10:00-18:00 peak); LBNL/Tsinghua VRF vs VAV study (SRC-TG-350, abstract, section 1, five-building sub-metering); ORNL VRF test (SRC-TG-351, abstract, sections 1, 4, 5, 6); UNIDO HPMP stage III request (SRC-TG-352, decree list, 76 trainers, 386 technicians, R-410A/HFC-32); Daikin DTA104A61/A62 engineering data (new SRC-TG-353, section 9.1 demand input). Corrections: the "40-80%" cap is only partly confirmed (the manual gives guideline levels of about 70% and 40%, no 80%, no timer wiring), so that claim is now `partial` with SRC-TG-353; the statement that most new Tunisian AC sales may already be inverter units was removed (LBNL lists variable-speed at 34% of 128 models); the unsourced R-32 flammability, global warming potential and ASHRAE 15/ISO 5149 statements were reworded as unconfirmed; the "no incentive" blocker now notes Med-TSO's reported restrictions on commercial air conditioning; the World Bank mention was removed (not a cited source); the "cheaper systems could do the same" criticism is marked as our inference (partly-supported); "best-known US test" was reworded and the ORNL baseline limitation stated as the paper words it; the higher-cost concern is attributed to the ORNL paper, not to "independent studies". Scores and verdict (superficial) still follow. The Webdo figures (about 5,000 MW vs 4,630 MW, about 50% residential AC) were searched for and not found, and stay flagged as unverified.
Teammate sign-off is outstanding.
