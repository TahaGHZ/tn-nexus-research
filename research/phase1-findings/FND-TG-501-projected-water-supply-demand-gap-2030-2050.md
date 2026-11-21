---
id: FND-TG-501
title: Without action, Tunisia's water balance is projected to turn negative by 2030-2050, leaving about 28% of demand unmet by 2050 under RCP8.5
status: draft
sectors: [water, agriculture, energy]
theme: water-governance
timeframe: predicted
period: baseline 2018-2020, horizons 2030 and 2050 (2100 in one source)
geography: [national]
severity: critical
trend: worsening
confidence: medium
root_causes:
  - cause: Climate-driven decline of conventional resources (see FND-TG-500) of about 28-35% of mobilisable blue water by 2050
    type: climatic
    legacy_decision: false
    sources: [SRC-TG-504]
  - cause: Demand growth from population, urbanisation and irrigation, plus higher crop evapotranspiration (+4.6% irrigation demand by 2050 at constant area)
    type: economic
    legacy_decision: false
    sources: [SRC-TG-504, SRC-TG-482]
  - cause: Supply-side development model built on a perception of abundance and subsidised tariffs disconnected from cost; low irrigation water prices led to over-exploitation, and groundwater exploitation exceeds 100% of resources
    type: policy
    legacy_decision: true
    sources: [SRC-TG-503, SRC-TG-504, SRC-TG-482]
indicators:
  - name: Blue-water demand
    value: 3103
    unit: Mm3/year
    year: 2018
    geography: national
    source: SRC-TG-504
  - name: Blue-water demand (CCDR figure 18, non-drought year; includes industry and tourism per CCDR footnote 86, hence above the AFD 3103)
    value: 3239
    unit: Mm3/year
    year: 2018
    geography: national
    source: SRC-TG-482
  - name: Total blue-water resources
    value: 4574
    unit: Mm3/year
    year: 2018
    geography: national
    source: SRC-TG-504
  - name: Groundwater exploitation rate (share of resources)
    value: ">123"
    unit: "%"
    year: 2018
    geography: national
    source: SRC-TG-504
  - name: Aquifer exploitation rate (Eau 2050 table)
    value: 139
    unit: "%"
    year: 2020
    geography: national
    source: SRC-TG-503
  - name: Projected total demand
    value: 4117
    unit: Mm3/year
    year: 2050, RCP8.5, no action
    geography: national
    source: SRC-TG-504
  - name: Projected total resources
    value: 2978
    unit: Mm3/year
    year: 2050, RCP8.5, no action
    geography: national
    source: SRC-TG-504
  - name: Projected supply-demand deficit
    value: -1139
    unit: Mm3/year
    year: 2050, RCP8.5, no action
    geography: national
    source: SRC-TG-504
  - name: Share of demand covered by resources
    value: 72 (2050) / 41 (2100)
    unit: "%"
    year: 2050 and 2100, RCP8.5
    geography: national
    source: SRC-TG-504
  - name: Unmet demand
    value: 28
    unit: "%"
    year: 2050, RCP8.5
    geography: national
    source: SRC-TG-482
  - name: Renewable resources per capita (AFD/PNA)
    value: 366 now to 200 (2050), below 150 (2100)
    unit: m3/person/year
    year: 2050, 2100
    geography: national
    source: SRC-TG-504
  - name: Water resources per capita (CCDR, citing AFD 2020)
    value: 366 to 210 (RCP4.5) / 122 (RCP8.5)
    unit: m3/person/year
    year: 2050
    geography: national
    source: SRC-TG-482
  - name: Water availability per capita (MARHP 2022 via World Bank)
    value: 357 (2020) to 268 (2050)
    unit: m3/person/year
    year: 2020-2050
    geography: national
    source: SRC-TG-506
  - name: Water availability per capita incl. desalination and reuse, Eau 2050 strategy scenario
    value: 422 (2020) to 387 (2050)
    unit: m3/person/year
    year: 2020-2050, RCP4.5, strategy executed
    geography: national
    source: SRC-TG-503
  - name: Exploitable water per capita (2008 estimate)
    value: 340
    unit: m3/person/year
    year: 2008
    geography: national
    source: SRC-TG-509
projection:
  horizon: 2030 (systemic "water crash" risk) and 2050
  scenario: "RCP8.5 with no action (AFD/PNA, CCDR); RCP4.5 with full strategy implementation (Eau 2050 'Eau et Développement Durable')"
  method: "Blue-water balance: projected demand (drinking water from Eau 2050/STUDI, irrigation at constant area corrected for evapotranspiration) against conventional plus current non-conventional resources from water-balance runoff modelling; MARHP hydro-economic model for Eau 2050"
  source: SRC-TG-504
stakeholders: [MARHP, SONEDE, irrigators and GDA water user groups, urban households, industry and tourism, Ministry of Finance (tariffs and subsidies)]
related: [FND-TG-500, FND-TG-502, FND-TG-400, FND-TG-410, FND-TG-426, FND-TG-476, FND-TG-477]
sources: [SRC-TG-482, SRC-TG-503, SRC-TG-504, SRC-TG-506, SRC-TG-507, SRC-TG-508, SRC-TG-509]
data_gaps:
  - The Eau 2050 "do-nothing" balance behind the 2030 "crash hydrique" statement; the synthesis gives the conclusion but no figures (stage-3 report not opened)
  - MARHP 2022 source and definition for 357 to 268 m3/capita; not opened
  - Independent (non-AFD) national projection of the 2050 supply-demand gap; the CCDR figure derives from the AFD study
  - WRI Aqueduct 2030/2050 baseline water stress projections for Tunisia; not opened
  - Projected drinking-water demand under other population variants (UN high and low variants are shown in SRC-TG-504 but were not extracted)
author: TahaGHZ
---

## Problem

Tunisia already meets its water demand partly by mining groundwater. In 2018, blue-water demand was about 3.1 billion m3, met with groundwater exploitation above 123% of resources (SRC-TG-504). The Eau 2050 table puts the aquifer exploitation rate at 139% in 2020 (SRC-TG-503).

The Eau 2050 diagnostic, run on the ministry's hydro-economic model, concluded there is a "certain risk" of a "water crash" from 2030: a systemic break between supply and demand (SRC-TG-503). With no action under RCP8.5, the National Adaptation Plan study projects demand of 4,117 Mm3 against resources of 2,978 Mm3 by 2050. That is a deficit of 1,139 Mm3, with only 72% of demand covered, falling to 41% in 2100 (SRC-TG-504). The World Bank CCDR presents the same result as 28% of demand unmet (SRC-TG-482). Projections of water per inhabitant in 2050 range from 122 to 387 m3, depending on scenario and on what is counted (see Evidence).

## Root causes

**Symptom vs cause.** Rationing and supply cuts are symptoms. The gap is the result of three drivers.

1. **Climatic (predicted).** Mobilisable conventional blue water falls by about 35% by 2050 versus 2018 (SRC-TG-504). The summary of the same study says resources fall by 28% by 2050 and 59% by 2100, while demand rises by about 38% (SRC-TG-504). See FND-TG-500.
2. **Demand-side (economic and behavioural).** Demand grows with population, urban growth and irrigation (SRC-TG-482). Even at constant irrigated area, higher evapotranspiration raises irrigation demand by 4.6% by 2050 and 9.1% by 2100 (SRC-TG-504). Drinking-water demand reaches 913 Mm3 in the AFD/STUDI assumptions. The Eau 2050 table goes from 780 Mm3 in 2020 to 1,100 Mm3 in 2050 (SRC-TG-503, SRC-TG-504).
3. **Policy legacy (past decision).** The Eau 2050 synthesis names the legacy directly:
   - Users were used to a perception of "abundance".
   - Supply has always been at subsidised tariffs "entirely disconnected from costs".
   - The arid character of the country was not sufficiently taken into account.
   - Irrigated agriculture uses 80% of resources and is "far from operating at its optimum".
   (SRC-TG-503.) This supply-led model explains why demand was allowed to exceed renewable supply (groundwater exploitation above 100%) before any climate signal (SRC-TG-503, SRC-TG-504).

## Evidence

**Supply-demand balances compared (AFD/PNA Table 30, SRC-TG-504)**

| | 2018 (MARHP) | Eau 2050 / STUDI 2050 | PNA RCP8.5 2050 | PNA RCP8.5 2100 |
|---|---|---|---|---|
| Agricultural demand (Mm3) | 2,440 | 3,063 | 3,204 | 3,342 |
| Total resources (Mm3) | 4,574 | 4,594 | 2,978 | 1,755 |
| Balance (Mm3) | +1,471 | +618 | -1,139 | -2,500 |
| Coverage of demand | 147% | 116% | 72% | 41% |

The STUDI (Eau 2050) column reaches +16% only by adding 626 Mm3 of non-conventional water (ten times current volumes) and about 900 Mm3 of water savings. The AFD study calls this conditional on the investments being made (SRC-TG-504). The Eau 2050 synthesis table reaches balance in 2050 only under its strategy scenario, with irrigation demand assumed to fall from 3,382 to 2,502 Mm3 (SRC-TG-503).

**Per-capita projections disagree because they measure different things**

| Source | 2020 or "now" | 2050 | What is counted |
|---|---|---|---|
| WDI / FAO (SRC-TG-507, baseline only) | 350 m3 (2020) | n/a | internal renewable resources, fixed 4.195 km3 |
| AFD/PNA (SRC-TG-504) | 366 m3 | 200 m3 | renewable resources, climate-adjusted |
| CCDR (SRC-TG-482) | 366 m3 | 210 m3 (RCP4.5), 122 m3 (RCP8.5) | "global water resources", cites AFD 2020 |
| MARHP 2022 via WB note (SRC-TG-506) | 357 m3 | 268 m3 | not stated |
| Eau 2050 strategy (SRC-TG-503) | 422 m3 | 387 m3 | conventional plus desalination and reuse, strategy executed, RCP4.5 |
| Gafrej and Pillet 2008 (SRC-TG-509) | 340 m3 (2008) | n/a | exploitable resources |

The CCDR figures (210 and 122 m3) do not appear in the final April 2021 AFD study it cites, which gives 200 m3 for 2050 (SRC-TG-504, SRC-TG-482).

**What "28%" means.** Three different 28% figures circulate:
- CCDR: 28% of demand unmet in 2050 under RCP8.5 (SRC-TG-482).
- AFD summary: resources fall by 28% by 2050 (SRC-TG-504).
- Gafrej and Pillet: conventional resources fall by 28% by 2030 under HadCM3 A2. That decline is driven mostly by overexploited and saline aquifers; surface water falls only about 5% (SRC-TG-509).

## Why confidence is what it is

- **Solid.** Current overexploitation (exploitation above 100% of resources) appears in two independent tier-B sources (SRC-TG-503, SRC-TG-504). Every no-action projection shows a gap by 2050.
- **Thin.** The quantified 2050 deficit (1,139 Mm3 / 28%) rests on a single study (AFD/PNA). The CCDR repeats it rather than confirming it. The 2030 "water crash" is stated in the official strategy without figures in the synthesis.
- **Scenario-dependent.** The official strategy shows the gap can close on paper only with large investment. Its own synthesis estimates the required annual investment at 63% of the whole public capital budget (Titre II), "inenvisageable" (SRC-TG-503).
- All sources are tier B. Hence `medium`.

## Links to other sectors

- **Agriculture.** Agriculture uses three quarters of exploited resources: 2.4 billion m3 for 406,540 ha in 2018, 84% from groundwater (SRC-TG-504). Quotas for public irrigated schemes were cut to 27% of normal supply in the third drought year of 2015-2018 (SRC-TG-504). The CCDR projects agricultural value added falling 15% by 2030 and 29% by 2050 under RCP8.5 inaction, driven largely by water shortages (English executive summary, SRC-TG-482). The AFD study notes that net virtual-water imports (4.7 billion m3 in 2013) already exceed national mobilisable resources (SRC-TG-504).
- **Energy.** Closing the gap with desalination and deeper pumping raises energy demand. The CCDR reports that SONEDE's "average energy cost" of drinking water rose from 0.82 DT/m3 (2015) to 1.30 DT/m3 (2021) after its desalination plants came online (SRC-TG-482, SRC-TG-482). SRC-TG-482 notes that this series is probably total cost, mislabelled as energy cost.

## Leads for phase 2

- Stratégie Eau 2050, "Eau et Développement Durable" scenario and Plan d'action (MARHP): https://www.environnement.gov.tn/fileadmin/Bibliotheque/SNTE/Synthese-Eau-2050.pdf
- Proposed "Fonds Eau 2050" financing vehicle (in the Eau 2050 synthesis)
- Updated NDC adaptation measure 7, implementation of the Eau 2050 action plan (SRC-TG-508)
- World Bank CCDR water recommendations (demand regulation, network loss reduction, early-warning system): https://www.worldbank.org/en/country/tunisia/publication/tunisia-country-climate-and-development-report
- Irrigation water tariff reform (CCDR notes the public-scheme tariff unchanged since 2004)
- Rehabilitation and modernisation of irrigation networks (Eau 2050 demand axis)
- Treated wastewater reuse and desalination expansion (Eau 2050 balance lines)
