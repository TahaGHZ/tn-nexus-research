---
id: FND-TG-222
title: Med-TSO projects rising summer peaks and 2027 adequacy risk; its lower 2030 risk depends on assumed capacity build-out, while the 2026
  summer outlook reports separate seasonal stress
status: draft
sectors:
  - energy
theme: grid
timeframe: predicted
period: horizon 2030 (ELMED flows to 2040)
geography:
  - national
severity: high
trend: unknown
confidence: low
root_causes:
  - cause: Peak demand keeps growing in summer because of heat and air conditioning, while thermal units derate in the heat and cannot be maintained
      in summer
    type: climatic
    legacy_decision: false
    sources:
      - SRC-TG-226
      - SRC-TG-224
  - cause: Capacity has been added slowly (about 100 MW a year in the few years before the 2023 appraisal), so the 2030 adequacy result rests
      on a build-out far faster than the track record
    type: institutional
    legacy_decision: false
    sources:
      - SRC-TG-224
      - SRC-TG-226
      - SRC-TG-105
indicators:
  - name: Projected maximum peak demand (highest hour across 36 climate years, Med-TSO mid-term)
    value: 6796
    unit: MW
    year: 2027
    geography: national
    source: SRC-TG-226
  - name: Projected maximum peak demand (highest hour across 36 climate years, Med-TSO mid-term)
    value: 7678
    unit: MW
    year: 2030
    geography: national
    source: SRC-TG-226
  - name: Projected average annual consumption growth (CAGR 2027-2030)
    value: 4.1
    unit: percent per year
    year: 2030
    geography: national
    source: SRC-TG-226
  - name: Loss of load expectation, isolated mode (Med-TSO mid-term)
    value: 17
    unit: hours per year
    year: 2027
    geography: national
    source: SRC-TG-226
  - name: Loss of load expectation, interconnected mode (Med-TSO mid-term)
    value: 2
    unit: hours per year
    year: 2027
    geography: national
    source: SRC-TG-226
  - name: Expected energy not served, isolated mode (Med-TSO mid-term)
    value: 4620
    unit: MWh per year
    year: 2027
    geography: national
    source: SRC-TG-226
  - name: Expected energy not served, interconnected mode (Med-TSO mid-term)
    value: 554
    unit: MWh per year
    year: 2027
    geography: national
    source: SRC-TG-226
  - name: Loss of load expectation for summer 2026, isolated mode, normal conditions (Med-TSO Summer Outlook)
    value: 81
    unit: hours
    year: 2026
    geography: national
    source: SRC-TG-234
  - name: Loss of load expectation for summer 2026, interconnected mode, normal conditions (Med-TSO Summer Outlook)
    value: 39
    unit: hours
    year: 2026
    geography: national
    source: SRC-TG-234
  - name: Loss-of-load duration (P95 sensitivity; Tunisia narrative labels it LOLE), summer 2026, isolated mode (Med-TSO Summer Outlook)
    value: 219
    unit: hours
    year: 2026
    geography: national
    source: SRC-TG-234
  - name: Loss-of-load duration (P95 sensitivity; Tunisia narrative labels it LOLE), summer 2026, interconnected mode (Med-TSO Summer Outlook)
    value: 122
    unit: hours
    year: 2026
    geography: national
    source: SRC-TG-234
  - name: Assumed net generation installed capacity (Med-TSO mid-term)
    value: 7316
    unit: MW
    year: 2027
    geography: national
    source: SRC-TG-226
  - name: Assumed net generation installed capacity (Med-TSO mid-term)
    value: 10520
    unit: MW
    year: 2030
    geography: national
    source: SRC-TG-226
  - name: ELMED interconnector capacity (commissioning assumed by 2028; Tunisian end at Mlaabi, Cap Bon, which we place in Nabeul governorate)
    value: 600
    unit: MW
    year: 2028
    geography: nabeul
    source: SRC-TG-226
  - name: Projected net electricity imports in the ELMED base case (economic dispatch)
    value: 663
    unit: GWh
    year: 2030
    geography: national
    source: SRC-TG-224
projection:
  horizon: 2027 and 2030 (Med-TSO mid-term); summer 2026 (Med-TSO Summer Outlook); 2030 and 2040 (World Bank ELMED dispatch model)
  scenario: Med-TSO reference adequacy scenarios with TSO-submitted demand and capacity, 36 climate years, isolated and interconnected modes.
    World Bank base case and a reduced-renewables case.
  method: Probabilistic Monte Carlo adequacy simulation (Antares) for Med-TSO; cost-benefit dispatch model (World Bank VRE Integration study)
    for ELMED flows
  source: SRC-TG-226, SRC-TG-234, SRC-TG-224
stakeholders:
  - STEG
  - Terna
  - Ministry of Industry, Mines and Energy
  - Med-TSO
  - World Bank
  - Sonelgaz
  - GECOL
  - households and industry
related:
  - FND-TG-220
  - FND-TG-221
  - FND-TG-102
sources:
  - SRC-TG-100
  - SRC-TG-103
  - SRC-TG-105
  - SRC-TG-224
  - SRC-TG-225
  - SRC-TG-226
  - SRC-TG-234
data_gaps:
  - 'Official Tunisian peak demand forecast (STEG generation plan, Ministry): not found. The Strategy 2035 synthesis (SRC-TG-103) gives no peak
    figure. The JICA power development plan report (https://openjicareport.jica.go.jp/pdf/12342291.pdf) was not opened.'
  - Med-TSO 2030 loss of load is unresolved. The section 5.5 text says 3 h interconnected and negligible isolated; Figure 3 and Figure 39 say
    3 h isolated and about 0 h interconnected; Table 12 shows zero adequacy exchanges on every Tunisian link, which fits neither reading cleanly
    (SRC-TG-226).
  - The mid-term study reports annual 2027 LOLE; the Summer Outlook reports seasonal 2026 LOLE and P95 LOLD (called LOLE in its country narrative).
    Their periods and model inputs differ, so the values cannot be compared directly and no source reconciles the assessments (SRC-TG-226, SRC-TG-234).
  - 'ELMED progress after December 2024: the latest World Bank ISR (SRC-TG-225) says procurement is still under way. No later official status
    was found, so whether commissioning in 2028 holds is unknown.'
  - Algeria and Libya submitted no data to the Med-TSO mid-term assessment (SRC-TG-226). The World Bank says the Tunisia-Libya interconnector
    does not operate properly (SRC-TG-224). Its current status and capacity were not sourced.
  - 'Whether the 10,520 MW capacity assumed for 2030 matches real project pipelines: not assessed here (renewables lane 190-219).'
author: TahaGHZ
---

## Problem

Projections show the summer peak continuing to grow. Med-TSO's mid-term adequacy study puts
Tunisia's highest hourly peak, across 36 simulated climate years, at 6,796 MW in 2027 and
7,678 MW in 2030, up 882 MW (about 13.0%, calculated from the cited exact values; Med-TSO separately reports a rounded 0.9 GW and 13.2% increase from rounded peak values). Average consumption grows 4.10% a year in 2027-2030. The
maximum falls in July-August because of air-conditioning load (SRC-TG-226). For 2027 the study
finds "structural adequacy risks". The thermal margin often "approaches zero" in July-August, and
expected loss of load is 17 hours a year isolated against 2 hours interconnected. That relief
comes from Algeria and Libya, since ELMED is not yet in service (SRC-TG-226). By 2030, risk falls
mainly because installed capacity is assumed to grow from 7,316 MW to 10,520 MW (SRC-TG-226). The
A separate Med-TSO Summer Outlook reports seasonal 2026 loss-of-load expectation of 81 h isolated and 39 h interconnected under normal conditions. Its P95 sensitivity gives 219 h and 122 h loss-of-load duration (LOLD), although the country narrative labels these values LOLE (SRC-TG-234). These are summer-season results, not directly comparable with the mid-term study's annual 2027 LOLE; the studies also use different models and inputs. They show material seasonal risk in the 2026 assessment but do not establish that the 2027 annual estimates are optimistic.
models and inputs.

## Root causes

- **Heat-driven summer peak on heat-sensitive supply.** Thermal maintenance is not allowed in
  June-August because of the summer peak (SRC-TG-226). Gas units lose output in the heat, which cut
  the real reserve below 10% in 2022 (SRC-TG-224).
- **Build-out vs track record.** The 2030 case assumes about 10.5 GW installed (SRC-TG-226).
  Installed capacity was 5,982 MW at the end of 2023 (SRC-TG-105), and in the few years before the 2023 appraisal it grew by about
  100 MW a year against a government estimate of 400-600 MW needed every two years (SRC-TG-224). The
  2030 improvement depends on closing that gap.

**Context: what ELMED changes.** ELMED was conceived in 2005 as a 1,000 MW cable with a 1,200 MW
plant in Tunisia, 800 MW of it for export. After 2011 it was redesigned as a 600 MW cable with
near-term flows from Italy to Tunisia (SRC-TG-224). The two sources measure different things, so
they do not contradict each other:

- **Med-TSO (adequacy only):** counts only the exchanges needed to avoid unserved load. In 2030 the
  Italy link carries 0 GWh for adequacy, and Tunisia "can rely on imports from Italy if necessary"
  (SRC-TG-226).
- **World Bank (economic dispatch):** models trade on cost. Tunisia imports "mostly" from Italy at
  summer evening peaks, when its thermal capacity is "more expensive or insufficient". It is a net
  importer of 663 GWh in 2030 in the base case, and in 2030 and 2040 if renewables grow more slowly
  (SRC-TG-224).

ELMED is therefore a backup for adequacy and a route for cheaper peak imports. On these sources it
is not the main driver of the projected 2027 risk; ELMED is not assumed in service until 2028.

## Evidence

- **Med-TSO monthly peaks** (MW, maximum across scenarios): 2027 JUN 5,979, JUL 5,994, AUG 6,796;
  2030 JUN 6,920, JUL 6,813, AUG 7,678 (SRC-TG-226). The Summer Outlook gives weekly peaks up to
  5,827 MW in summer 2026, on the same 36-climate-year maximum basis (SRC-TG-234).
- **Not comparable with observed peaks.** These are extreme-weather maxima, not typical-year peaks,
  so they cannot be compared directly with ONEM's observed record of 5,089 MW in 2026 (SRC-TG-100).
- **Adequacy in 2027:** loss of load 17 h isolated and 2 h interconnected; energy not served
  4,620 MWh and 554 MWh. Algeria and Libya each supply 2 GWh of the needed exchanges over 250 MW
  links (SRC-TG-226).
- **Adequacy in 2030:** zero exchanges are needed on the Algeria, Libya and Italy links, with Tunisia
  "able to rely more on internal resources". The loss of load figure is unresolved (SRC-TG-226; see
  data_gaps).
- **Summer 2026 (seasonal outlook, not annual):** worst-case thermal margin zero throughout July and August, and the 500 MW of
  import capacity "a practical necessity" (SRC-TG-234).
- **ELMED:** 600 MW, 500 kV, from Partanna (Sicily) to Mlaabi (Cap Bon), 220 km of which 200 km is
  undersea, commissioning assumed by 2028 (SRC-TG-226). The 2023 project appraisal estimated total cost at €964.2 million for the Tunisian and Italian sides combined (SRC-TG-224); this combined-country total is contextual prose, not a geography-coded indicator.
  (SRC-TG-224). The IBRD loan of €247 million to STEG became effective in March 2024. Procurement of
  the converter station and grid reinforcement was under way in December 2024, with risk rated High
  and closing on 28 December 2028 (SRC-TG-225). The project targets a 50% cut in SAIDI by December
  2028; 0% had been achieved as of April 2024 (SRC-TG-225).

## Why confidence is what it is

All projections come from tier B institutions and are model outputs that depend on capacity
assumptions not checked here. The mid-term peak is an extreme-climate maximum, and the document is
unresolved on the 2030 adequacy result. The seasonal 2026 outlook reports high risk for that season. Its seasonal duration is not directly comparable with the annual 2027 mid-term LOLE, so it does not independently contradict that estimate. No official Tunisian peak forecast was found
to cross-check, and the latest ELMED progress report dates from December 2024. Confidence is low.

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
- Summer demand reduction measures and off-peak tariff incentives (SRC-TG-234).
- STEG pumped-hydro storage plan (press, not opened):
  https://www.energy-storage.news/tunisian-utility-planning-600mw-pumped-hydro-energy-storage-plant

## Verification

Med-TSO’s summary, figure and table disagree on the national 2030 loss-of-load estimate. The competing statements remain attributed individually. The source does not establish a unique number; an author correction or a reproducible result is still required for that indicator (SRC-TG-226).

**Outstanding verification:** The publisher’s figure and table still disagree on the 2030 model output; no reproducible correction was found.
