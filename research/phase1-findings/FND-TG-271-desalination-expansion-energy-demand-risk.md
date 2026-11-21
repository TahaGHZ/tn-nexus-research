---
id: FND-TG-271
title: Tunisia’s 2030 desalination scenario implies material electricity demand; its scale depends on the intensity assumed
status: in-review
sectors:
  - energy
  - water
theme: grid
timeframe: predicted
period: 2030-2050
geography:
  - national
severity: medium
trend: worsening
confidence: medium
root_causes:
  - cause: The Eau 2050 water-and-sustainable-development scenario increases planned seawater desalination to support the national water balance;
      its synthesis also says sustainable desalination should build on renewable energy, but it does not translate the water scenario into national
      electricity demand.
    type: institutional
    legacy_decision: false
    sources:
      - SRC-TG-276
indicators:
  - name: Scenario seawater desalination volume
    value: 192
    unit: million cubic metres per year
    year: 2030
    geography: national
    source: SRC-TG-276
  - name: Scenario seawater desalination volume
    value: 265
    unit: million cubic metres per year
    year: 2035
    geography: national
    source: SRC-TG-276
  - name: Scenario seawater desalination volume
    value: 265
    unit: million cubic metres per year
    year: 2050
    geography: national
    source: SRC-TG-276
  - name: Illustrative annual seawater desalination electricity at 2022 operating intensity of 2.4 kWh/m³ applied to the 2030 strategy volume
    value: 460.8
    unit: GWh/year
    year: 2030
    geography: national
    source: SRC-TG-276
  - name: Utility-wide electricity use projected by SONEDE, all water-supply operations
    value: 1000
    unit: GWh/year
    year: 2030
    geography: national
    source: SRC-TG-529
projection:
  horizon: 2050
  scenario: Eau 2050 water-and-sustainable-development scenario
  method: Multiply national scenario output by an explicitly fixed observed intensity (SRC-TG-276, SRC-TG-528). This sensitivity omits plant mix,
    utilisation and evolving efficiency. The utility-wide forecast is reported separately (SRC-TG-529).
  source: SRC-TG-276
stakeholders:
  - SONEDE
  - Ministry of Agriculture
  - STEG
  - Ministry of Industry Mines and Energy
related:
  - FND-TG-270
  - FND-TG-450
sources:
  - SRC-TG-270
  - SRC-TG-271
  - SRC-TG-273
  - SRC-TG-275
  - SRC-TG-276
  - SRC-TG-528
  - SRC-TG-529
data_gaps:
  - No source reviewed reconciles the Eau 2050 national seawater-volume scenario with plant commissioning schedules, operating load factors, current
    plant-specific energy performance, and the electricity supply mix to produce a national annual GWh forecast. The JICA 2015 estimate covers
    Djerba and Sfax Phase 1 only and relies on a 3.5 kWh/m3 planning assumption.
  - Eau 2050's table is a scenario water balance, not an observed production series or a confirmed implementation schedule; public evidence reviewed
    here does not establish whether its 2030-2050 desalination volumes have since been revised.
author: TahaGHZ
---

## Problem

The Ministry's Eau 2050 synthesis gives a national seawater-desalination scenario of 192 million m³/year in 2030, 265 million m³/year in 2035, and 265 million m³/year in both 2040 and 2050. These are scenario water-balance values, not measured output or a confirmed construction schedule (SRC-TG-276). They indicate a larger planned desalination role in the national water balance, but the synthesis does not quantify the associated electricity requirement. It says sustainable desalination should build on renewable-energy experience.

The electricity gap is narrower than the original draft stated. A 2015 JICA preparatory survey estimated 192 GWh/year for Djerba at 50,000 m³/day plus Sfax Phase 1 at 100,000 m³/day, assuming 3.5 kWh/m³. It also applied a 40 MW design supply for the planned Sfax plant (SRC-TG-275). These are project-planning estimates for specified plants and assumptions, not measured consumption and not a forecast for the Eau 2050 national scenario. Current SONEDE records identify Djerba's 50,000 m³/day capacity, extendable to 75,000, and Sfax's 100,000 m³/day first phase, extendable to 250,000; those later capacities differ from the JICA assumptions (SRC-TG-271, SRC-TG-273).

## Root causes

The strategy's selected water scenario includes a substantial increase in seawater desalination as part of its national resource-demand balance. The same synthesis calls for renewable energy to support sustainable desalination. However, the synthesis does not connect its projected water volumes to electricity intensity, facility commissioning and utilization, or a national power-demand path. The evidence therefore supports a planning and evidence gap, not a quantified grid impact or a claim that renewable supply will be inadequate.

## Evidence

The original Eau 2050 synthesis table labels the values as availability of non-conventional water resources and lists seawater desalination as 18, 91, 192, 265, 265, and 265 million m³ for 2020, 2025, 2030, 2035, 2040, and 2050 respectively (SRC-TG-276). The strategy also explicitly links sustainable desalination to renewable energy, without giving a kWh/m³ or national GWh estimate in the synthesis reviewed.

JICA's 2015 Sfax survey provides a historical planning benchmark: it estimates 192 GWh/year for Djerba and Sfax Phase 1 together under a 3.5 kWh/m³ assumption. Its 40 MW Sfax design figure is a capacity requirement, not annual energy use. Neither figure should be applied directly to the full Eau 2050 volume: the plant scope, date, design assumptions, output levels, and later SONEDE capacity descriptions differ (SRC-TG-275, SRC-TG-271, SRC-TG-273).

SONEDE's national specific-energy indicator of 0.725 kWh/m³ in 2023 covers water utility activity with an undefined denominator and system boundary; it is not a desalination intensity and is not used to extrapolate the scenario (SRC-TG-270).

## Why confidence is what it is

Medium for the desalination volumes as values in the Ministry's published scenario, and for the existence of the JICA project-level planning estimates. Low for any national future electricity impact: no reviewed source supplies a reconciled forecast for the Eau 2050 volumes, and the JICA estimate is old, project-specific, and assumption-based.

## Links to other sectors

This is an energy-framed finding about the interface between electricity planning and national water-supply planning. The values concern seawater desalination only, not brackish-water desalination or all non-conventional water.

## Leads for phase 2

- Compare later plant designs and operating data with the JICA planning assumptions, and determine whether STEG or SONEDE has updated national electricity scenarios for the Eau 2050 desalination volumes.
- Examine how the strategy's renewable-energy direction is reflected in plant procurement and power-supply arrangements.

## Verification status

At 2.4 kWh/m³, the 192 million m³/year 2030 strategy volume would require 460.8 GWh/year; 265 million m³/year in 2035 would require 636 GWh/year. These are illustrative totals, not additional national load or an official forecast. The assumed intensity comes from 2022 operations (31.2 GWh for 12.9 million m³ of seawater), not from a national 2030 design. By contrast, SONEDE’s 1,000 GWh forecast for 2030 covers all its electricity use, including supply and treatment. Do not add these estimates together (SRC-TG-528, SRC-TG-529, SRC-TG-276).
