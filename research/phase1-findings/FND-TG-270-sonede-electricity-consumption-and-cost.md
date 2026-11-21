---
id: FND-TG-270
title: SONEDE's water supply used 563 GWh of electricity in 2023
status: in-review
sectors:
  - energy
  - water
theme: grid
timeframe: current
period: 2023
geography:
  - national
severity: medium
trend: worsening
confidence: medium
root_causes:
  - cause: Pumping, treatment and distribution require electricity throughout SONEDE's water-supply system; the available institutional sources
      report the total and a 2023 split by facility type (treatment and pumping, boreholes, brackish-water and seawater desalination), but not by
      supply stage (pumping, treatment, distribution).
    type: technical
    legacy_decision: false
    sources:
      - SRC-TG-270
      - SRC-TG-282
      - SRC-TG-529
indicators:
  - name: SONEDE electricity consumption
    value: 563
    unit: GWh
    year: 2023
    geography: national
    source: SRC-TG-282
  - name: SONEDE energy expenditure, excluding VAT
    value: 172
    unit: million TND
    year: 2023
    geography: national
    source: SRC-TG-282
  - name: Specific energy consumption, SONEDE web-chart series
    value: 0.725
    unit: kWh per cubic metre
    year: 2023
    geography: national
    source: SRC-TG-270
  - name: Specific electricity consumption per cubic metre produced, annual energy-management series
    value: 0.728
    unit: kWh/m³ produced
    year: 2023
    geography: national
    source: SRC-TG-529
stakeholders:
  - SONEDE
  - STEG
  - Ministry of Agriculture
  - households
related:
  - FND-TG-450
  - FND-TG-476
sources:
  - SRC-TG-270
  - SRC-TG-282
  - SRC-TG-529
data_gaps:
  - The utility web chart and the ministry's annual table give slightly different intensities. Their calculation or revision difference is undocumented.
    The ministry's Tableau 47 splits 2023 electricity by facility type, not by supply stage (pumping, treatment, distribution), so no split by end use
    is supplied (SRC-TG-529).
author: TahaGHZ
---

## Problem

SONEDE reports 563 GWh of electricity use in 2023 and an energy bill of 172 million TND before
VAT, equal to 28% of the cost of potable water (SRC-TG-282). The utility's key-figures page reports
specific consumption of 0.725 kWh/m³ in 2023 (SRC-TG-270). This makes water supply a significant
electricity consumer, although the public data do not split the electricity by supply stage (pumping, treatment, distribution); the ministry splits it only by facility type (SRC-TG-529).

## Root causes

Water production and conveyance depend on electrically powered equipment. The ministry's 2023 report splits electricity use by facility type
(treatment and pumping 312.5 GWh, boreholes 169.4 GWh, brackish-water desalination 26.7 GWh, seawater desalination 36 GWh; SRC-TG-529, Tableau 47), but
not by supply stage. The cited public data do not quantify the contribution of elevation, network losses, treatment technology or pumping
choices.

## Evidence

SONEDE's Arabic energy-management page provides the 2023 total and cost (SRC-TG-282); its key
figures page provides unit intensity (SRC-TG-270).

## Why confidence is what it is

The utility’s rounded electricity and expenditure totals agree with the ministry’s more precise annual figures. The two publications give slightly different intensity values. Only the annual report explicitly labels the denominator as water produced (SRC-TG-270, SRC-TG-282, SRC-TG-529).

## Links to other sectors

This is an energy-sector finding with direct implications for water service operations.

## Leads for phase 2

- SONEDE energy-efficiency actions (SRC-TG-282).

## Verification

SONEDE’s web chart gives 0.725 kWh/m³ in 2023. The ministry’s 2023 water report, Table 46, gives 0.728 per cubic metre produced; 562.9 GWh divided by 773.3 million m³ rounds to 0.728. The ministry quotes the utility’s underlying annual energy-management report, so these are two presentations of utility data. The annual series rises from 552.8 GWh in 2022 to 562.9 in 2023. It also reports 172.2 million TND and a 28% cost share (SRC-TG-270, SRC-TG-282, SRC-TG-529).

**Independent review, 21 November 2026:** pass after corrections. Checked SONEDE "Maîtrise de l'énergie" page, paragraph 3 (SRC-TG-282: 563 GWh, 172 million TND excluding tax, 28% of water cost price in 2023); SONEDE "Chiffres clés" chart, 2023 row (SRC-TG-270: 0.725 kWh/m³); Ministry of Agriculture 2023 water report, printed p. 115, Tableau 46 (SRC-TG-529: 562.9 GWh, 773.3 Mm³, 0.728 kWh/m³) and Tableaux 47 and 48 (split by facility type). Corrections: the root cause, data gap, Problem and Root causes text said the sources do not disaggregate end uses; they now say the ministry splits 2023 electricity by facility type but not by supply stage, and SRC-TG-529 is cited for it. Independent teammate sign-off is outstanding; reviewer and author share the TahaGHZ identity, so the record is not validated.
