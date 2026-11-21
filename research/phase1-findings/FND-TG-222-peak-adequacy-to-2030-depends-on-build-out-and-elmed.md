---
id: FND-TG-222
title: Peak demand is projected to keep rising to 2030 with structural adequacy risk in 2027; relief by 2030 depends mainly on a large capacity build-out, and the sources disagree on how much Tunisia will lean on ELMED imports at peak
status: draft
sectors: [energy]
theme: grid
timeframe: predicted
period: horizon 2030 (ELMED flows to 2040)
geography: [national]
severity: high
trend: unknown
confidence: low
root_causes:
  - cause: Peak demand keeps growing in summer because of heat and air conditioning, while thermal units derate in the heat and cannot be maintained in summer
    type: climatic
    legacy_decision: false
    sources: [SRC-TG-226, SRC-TG-224]
  - cause: Capacity has been added slowly (about 100 MW a year before 2023), so the 2030 adequacy result rests on a build-out far faster than the track record
    type: institutional
    legacy_decision: false
    sources: [SRC-TG-224, SRC-TG-226, SRC-TG-105]
  - cause: ELMED was redesigned after 2011 from an export project (a 1,000 MW cable plus a 1,200 MW plant in Tunisia) into a 600 MW cable with near-term flows from Italy to Tunisia, which positions it as an import route
    type: policy
    legacy_decision: true
    sources: [SRC-TG-224]
indicators:
  - name: Projected maximum peak demand (highest hour across 36 climate years)
    value: 6796
    unit: MW
    year: 2027
    geography: national
    source: SRC-TG-226
  - name: Projected maximum peak demand (highest hour across 36 climate years)
    value: 7678
    unit: MW
    year: 2030
    geography: national
    source: SRC-TG-226
  - name: Projected average annual consumption growth (CAGR)
    value: 4.10
    unit: percent per year
    year: 2027-2030
    geography: national
    source: SRC-TG-226
  - name: Loss of load expectation, isolated / interconnected
    value: 17 / 2
    unit: hours per year
    year: 2027
    geography: national
    source: SRC-TG-226
  - name: Expected energy not served, isolated / interconnected
    value: 4620 / 554
    unit: MWh per year
    year: 2027
    geography: national
    source: SRC-TG-226
  - name: Assumed net generation installed capacity
    value: 7316 (2027) / 10520 (2030)
    unit: MW
    year: 2027, 2030
    geography: national
    source: SRC-TG-226
  - name: ELMED interconnector capacity
    value: 600
    unit: MW
    year: commissioning assumed by 2028
    geography: nabeul
    source: SRC-TG-226
  - name: Projected net electricity imports in the ELMED base case
    value: 663
    unit: GWh
    year: 2030
    geography: national
    source: SRC-TG-224
  - name: ELMED total estimated cost
    value: 964.2
    unit: million EUR
    year: 2023 estimate
    geography: national
    source: SRC-TG-224
projection:
  horizon: 2027 and 2030 (Med-TSO); 2030 and 2040 (World Bank ELMED dispatch model)
  scenario: Med-TSO reference adequacy scenario with TSO-submitted demand and capacity, 36 climate years, isolated and interconnected modes. World Bank base case and a reduced-renewables case.
  method: Probabilistic Monte Carlo adequacy simulation (Antares) for Med-TSO; cost-benefit dispatch model (World Bank VRE Integration study) for ELMED flows
  source: SRC-TG-226, SRC-TG-224
stakeholders: [STEG, Terna, "Ministry of Industry, Mines and Energy", Med-TSO, World Bank, Sonelgaz, GECOL, households and industry]
related: [FND-TG-220, FND-TG-221, FND-TG-102]
sources: [SRC-TG-100, SRC-TG-105, SRC-TG-224, SRC-TG-225, SRC-TG-226]
data_gaps:
  - "Official Tunisian peak demand forecast (STEG generation plan, Ministry): not found. The Strategy 2035 synthesis (SRC-TG-103) gives no peak figure. The JICA power development plan report (https://openjicareport.jica.go.jp/pdf/12342291.pdf) was not opened."
  - "Med-TSO 2030 loss of load is internally inconsistent. The section 5.5 text says 3 h interconnected and negligible isolated; Figure 3 and Figure 39 say 3 h isolated and about 0 h interconnected (SRC-TG-226)."
  - "ELMED progress after December 2024: the latest World Bank ISR (SRC-TG-225) says procurement is still under way. No later official status was found, so whether commissioning in 2028 holds is unknown."
  - "Algeria and Libya submitted no data to the Med-TSO assessment (SRC-TG-226). The World Bank says the Tunisia-Libya interconnector does not operate properly (SRC-TG-224). Its current status and capacity were not sourced."
  - "Whether the 10,520 MW capacity assumed for 2030 matches real project pipelines: not assessed here (renewables lane 190-219)."
author: TahaGHZ
---

## Problem

Projections show the summer peak continuing to grow. Med-TSO's adequacy study puts Tunisia's
highest hourly peak, across 36 simulated climate years, at 6,796 MW in 2027 and 7,678 MW in 2030,
up 0.9 GW (13.2%). Average consumption grows 4.10% a year in 2027-2030. The maximum falls in
July-August because of air-conditioning load (SRC-TG-226). For 2027 the study finds "structural
adequacy risks". The thermal margin often "approaches zero" in July-August, and expected loss of
load is 17 hours a year with Tunisia isolated, against 2 hours with interconnections. That relief
comes from Algeria and Libya, since ELMED is not yet in service (SRC-TG-226). By 2030, risk falls
mainly because installed capacity is assumed to grow from 7,316 MW to 10,520 MW. In that case the
Italy link is needed for 0 GWh of adequacy exchanges (SRC-TG-226). The World Bank's ELMED
appraisal instead has Tunisia relying "mostly" on imports from Italy at summer evening peaks in
2030 (SRC-TG-224). The two sources disagree on ELMED's role at peak.

## Root causes

- **Heat-driven summer peak on heat-sensitive supply.** Thermal maintenance is not allowed in
  June-August because of the summer peak (SRC-TG-226). Gas units lose output in the heat, which cut
  the real reserve below 10% in 2022 (SRC-TG-224).
- **Build-out vs track record.** The 2030 case assumes about 10.5 GW installed (SRC-TG-226).
  Installed capacity was 5,982 MW at the end of 2023 (SRC-TG-105), and before 2023 it grew by about
  100 MW a year against a government estimate of 400-600 MW needed every two years (SRC-TG-224). The
  2030 improvement is conditional on closing that gap.
- **ELMED as an import route (past decision).** ELMED was conceived in 2005 as a 1,000 MW cable
  with a 1,200 MW plant in Tunisia, 800 MW of it for export to Italy. After 2011 the plant was
  dropped, the cable was cut to 600 MW, and the expected short-term flow was reversed to run from
  Italy to Tunisia (SRC-TG-224). In the World Bank model Tunisia is a net importer in 2030 (663
  GWh) in the base case, and in 2030 and 2040 if renewables grow more slowly. Imports peak in
  summer (SRC-TG-224).

## Evidence

- Med-TSO monthly peaks (MW, maximum across scenarios): 2027 JUN 5,979, JUL 5,994, AUG 6,796; 2030
  JUN 6,920, JUL 6,813, AUG 7,678 (SRC-TG-226).
- These are extreme-weather maxima, not typical-year peaks, so they are not directly comparable
  with ONEM's observed record of 5,089 MW in 2026 (SRC-TG-100). The jump from 5,089 MW observed to
  6,796 MW projected for 2027 is partly a difference of definition. The source does not say how
  much.
- Adequacy in 2027: loss of load 17 h isolated and 2 h interconnected; energy not served 4,620 MWh
  and 554 MWh. Algeria and Libya each supply 2 GWh of the needed exchanges over 250 MW links
  (SRC-TG-226).
- Adequacy in 2030: no exchanges needed on the Algeria, Libya or Italy links (0 GWh), with Tunisia
  "able to rely more on internal resources". The figure for loss of load is contradictory
  (SRC-TG-226; see data_gaps).
- ELMED: 600 MW, 500 kV, from Partanna (Sicily) to Mlaabi (Cap Bon), 220 km of which 200 km is
  undersea, commissioning assumed by 2028 (SRC-TG-226). Total cost €964.2 million (SRC-TG-224).
  The IBRD loan of €247 million to STEG became effective in March 2024. Procurement of the converter
  station and grid reinforcement was under way in December 2024, with risk rated High and closing
  on 28 December 2028 (SRC-TG-225). The project targets a 50% cut in SAIDI by December 2028; 0% had
  been achieved as of April 2024 (SRC-TG-225).

## Why confidence is what it is

Both projections come from tier B institutions and are model outputs that depend on capacity
assumptions not checked here. The Med-TSO peak is an extreme-climate maximum, and the document
contradicts itself on the 2030 adequacy result. The World Bank and Med-TSO differ on whether
Tunisia will need Italian imports at peak in 2030. No official Tunisian peak forecast was found to
cross-check the numbers, and the latest ELMED progress report dates from December 2024.
Confidence is low.

## Links to other sectors

None found with a source. The projected peak is driven by air conditioning (SRC-TG-226), which
will be covered under buildings-cooling.

## Leads for phase 2

- ELMED interconnector, World Bank P179240:
  https://projects.worldbank.org/en/projects-operations/project-detail/P179240
- Med-TSO Master Plan of Mediterranean Interconnections 2025 (not opened):
  https://med-tso.org/wp-content/uploads/2025/11/Master-Plan-of-Mediterranean-Interconnections-2025.pdf
- TEREG programme, including a least-cost 10-year generation and transmission plan (SRC-TG-105).
- Battery storage in the Med-TSO 2030 case (SRC-TG-226).
- STEG pumped-hydro storage plan (press, not opened):
  https://www.energy-storage.news/tunisian-utility-planning-600mw-pumped-hydro-energy-storage-plant
