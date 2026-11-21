---
author: TahaGHZ
confidence: medium
data_gaps:
  - The 44% peak attribution and STEG residential-survey results are reported by LBNL; the underlying STEG calculation, survey report and microdata
    were not located. Treat these as sourced reporting, not independently inspected primary observations.
  - SRC-TG-251 reports a separate STEG 2013 estimate that 84% of peak demand was due to ACs, but gives no definition or calculation. It is not
    comparable on the available evidence with the LBNL-reported 44% estimate for 2021 and is not used as a trend point.
  - The cause of rising ownership (including income, housing, weather and appliance-efficiency effects) is not decomposed by the cited sources.
geography:
  - national
id: FND-TG-250
indicators:
  - geography: national
    name: Recorded national electricity peak demand
    source: SRC-TG-254
    unit: MW
    value: 4472
    year: 2021
  - geography: national
    name: AC share of August system peak, as estimated by STEG and reported by LBNL
    source: SRC-TG-250
    unit: percent
    value: 44
    year: 2021
  - geography: national
    name: Household AC ownership rate, STEG survey as reported by LBNL
    source: SRC-TG-250
    unit: percent
    value: 47.9
    year: 2019
  - geography: national
    name: National household AC stock, STEG survey as reported by LBNL
    source: SRC-TG-250
    unit: units
    value: 1681000
    year: 2019
  - geography: national
    name: AC stock annual electricity consumption, STEG survey as reported by LBNL
    source: SRC-TG-250
    unit: GWh
    value: 757.3
    year: 2019
  - geography: national
    name: Estimated AC demand if the entire stock operated simultaneously, STEG survey as reported by LBNL
    source: SRC-TG-250
    unit: MW
    value: 1560
    year: 2019
period: 2019-2021 (observations; published 2023)
related:
  - FND-TG-220
  - FND-TG-222
  - FND-TG-251
root_causes:
  - cause: Household air-conditioner ownership and stock had grown by 2019, while cooling use coincides with hot-summer peak hours; LBNL relays
      STEG's estimate that AC operation accounted for 44% of the August 2021 peak.
    legacy_decision: false
    sources:
      - SRC-TG-250
      - SRC-TG-254
    type: technical
sectors:
  - energy
severity: high
sources:
  - SRC-TG-250
  - SRC-TG-251
  - SRC-TG-254
stakeholders:
  - STEG
  - ANME
  - households
  - Ministry of Industry Mines and Energy
status: in-review
theme: buildings-cooling
timeframe: current
title: Air conditioning was a material reported contributor to Tunisia's summer peak demand in 2021
trend: worsening
---

## Problem

Air conditioning was a material reported contributor to Tunisia's hot-season electricity peak in
2021. LBNL's 2023 market assessment says STEG recorded a 4,472 MW peak in August and estimated
that air conditioners accounted for 44% of it (SRC-TG-250). The official ONEM September 2021
energy bulletin independently records 4,472 MW as the new peak on 11 August 2021 (SRC-TG-254).
This confirms the peak value and date, but not the separate 44% attribution calculation.

LBNL reports STEG survey results showing household AC ownership at 47.9%, an installed stock of
1,681,000 units, and annual stock electricity consumption of 757.3 GWh in 2019. The same report
gives a 1,560 MW estimate for demand if the full stock operated simultaneously (SRC-TG-250).
These are distinct measures: household penetration, unit stock, annual energy, and a hypothetical
simultaneous-operation power estimate. The survey results are STEG data relayed by LBNL, not
primary survey records inspected here.

## Root causes

The evidence supports a proximate demand mechanism: a growing household AC stock creates cooling
load, and AC operation overlaps the hot hours when Tunisia's system peak occurs (SRC-TG-250,
SRC-TG-251). LBNL reports STEG's 44% attribution for 2021. The available sources do not establish
why ownership increased or quantify the separate effects of income, weather, housing, or equipment
efficiency; these remain unresolved causal questions rather than asserted root causes.

## Evidence

- **Observed peak series:** ONEM's official September 2021 bulletin reports that the national
  peak reached 4,472 MW on 11 August 2021 (SRC-TG-254). This is a direct official statistic.
- **Peak attribution:** LBNL states that STEG estimated 44% of that 2021 demand was due to AC
  operation (SRC-TG-250). This is institutional reporting of a STEG estimate; the underlying
  attribution method was not located.
- **Household survey:** LBNL reports STEG's 2019 survey values: 47.9% ownership, 1,681,000 ACs,
  757.3 GWh annual stock consumption, and 1,560 MW estimated demand under simultaneous operation
  (SRC-TG-250). These values are reported survey results/model estimates rather than direct
  observations available in the local evidence set.
- **Separate historical estimate:** LBNL's companion cost-benefit report says STEG estimated in
  2013 that 84% of peak demand was due to ACs (SRC-TG-251). It supplies no definition that would
  reconcile this figure with the later 44%; neither is used to calculate a trend.

## Why confidence is what it is

Medium: the national 2021 peak is confirmed by an official ONEM bulletin, and LBNL clearly reports
the STEG attribution and survey values. The underlying STEG calculation and survey documentation
were not located, and the companion report's 2013 peak-share estimate is unexplained and not
comparable. The finding therefore supports a material reported contribution, not an independently
reproduced load attribution or a quantified causal decomposition.

## Links to other sectors

Cooling demand relates to building thermal comfort and household electricity expenditure. The
cited sources do not quantify the distribution of AC ownership, use, or expenditure by income.

## Leads for phase 2

- Residential appliance minimum-energy-performance standards and labels (SRC-TG-250).
- Building thermal regulation and cooling efficiency, with attention to the difference between
  appliance performance and peak-hour operating behaviour.

## Verification

ONEM confirms the 2021 national peak. LBNL attributes the 44% estimate to STEG; the primary calculation was not available. It is an attributed estimate with undisclosed method, distinct from household ownership and annual consumption.
