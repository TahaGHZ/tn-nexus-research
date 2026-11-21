---
id: FND-TG-251
title: Summer warming could add cooling pressure, but Tunisia's AC demand model omits climate change
status: draft
sectors: [energy]
theme: buildings-cooling
timeframe: predicted
period: horizon 2050
geography: [national]
severity: high
trend: worsening
confidence: medium
root_causes:
  - cause: The model extrapolates historical ownership growth and assumes continued sales, adding units to the electricity-consuming stock.
    type: economic
    legacy_decision: false
    sources: [SRC-TG-251]
indicators:
  - name: BAU AC electricity consumption
    value: 3000
    unit: GWh/year
    year: 2030
    geography: national
    source: SRC-TG-251
  - name: BAU AC electricity consumption, approximate chart reading
    value: 4700
    unit: GWh/year
    year: 2040
    geography: national
    source: SRC-TG-251
  - name: AC unit sales forecast
    value: 600000
    unit: units
    year: 2040
    geography: national
    source: SRC-TG-250
  - name: Projected increase in national heatwave days, RCP 4.5
    value: 31.9
    unit: days
    year: 2050
    geography: national
    source: SRC-TG-283
  - name: Projected increase in national heatwave days, RCP 8.5
    value: 39.1
    unit: days
    year: 2050
    geography: national
    source: SRC-TG-283
projection:
  horizon: 2050
  scenario: LBNL business-as-usual AC projection and INM national climate RCP projections are separate; there is no integrated climate-demand case
  method: Historical AC ownership stock-turnover model plus INM climate projection; heatwave trend is not statistically significant in 2050
  source: SRC-TG-251, SRC-TG-283
stakeholders: [STEG, ANME, households, Ministry of Industry Mines and Energy]
related: [FND-TG-250, FND-TG-222]
sources: [SRC-TG-250, SRC-TG-251, SRC-TG-283]
data_gaps:
  - The model does not include heatwave or climate-change effects; it cannot quantify the additional demand under heatwaves.
author: TahaGHZ
---

## Problem

LBNL's business-as-usual model projects national air-conditioning electricity consumption at
approximately 3,000 GWh/year in 2030 and 4,700 GWh/year in 2040 (values read from a chart), while
its companion market assessment projects sales reaching 600,000 units in 2040 (SRC-TG-250,
SRC-TG-251). Separately, Tunisia's Fourth National Communication projects 31.9 to 39.1 additional
heatwave days by 2050 under RCP4.5 and RCP8.5, though the trend is not statistically significant
at that horizon (SRC-TG-283). The AC model has no temperature term, so the evidence signals
possible additional cooling pressure but does not quantify it.

## Root causes

The projected growth is driven by stock turnover and historical ownership growth. Hotter summers
and more heatwave days could increase use, but this is an inference; no source quantifies that
increment for Tunisia.

## Evidence

Approximate chart values and model limits are recorded in SRC-TG-251; unit-sales method and forecast
are in SRC-TG-250.

## Why confidence is what it is

Medium: institutional demand and climate models are available, but chart values are approximate,
the 2050 heatwave-day trend is not statistically significant, and no integrated demand projection
exists.

## Links to other sectors

Higher cooling demand adds to electricity system peak load (FND-TG-222).

## Leads for phase 2

- Appliance efficiency standards and labels (SRC-TG-250).

## Verification status

Draft retained. Outstanding exact issue: the 2030/2040 AC electricity-demand values are approximate chart readings from a model without a temperature term, while the separate 2050 heatwave trend is not statistically significant; no integrated climate-driven demand estimate exists.
