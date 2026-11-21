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
  - cause: Pumping, treatment and distribution require electricity throughout SONEDE's water-supply system; the available institutional source
      reports the total but does not disaggregate end uses.
    type: technical
    legacy_decision: false
    sources:
      - SRC-TG-270
      - SRC-TG-282
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
    No complete split by end use is supplied.
author: TahaGHZ
---

## Problem

SONEDE reports 563 GWh of electricity use in 2023 and an energy bill of 172 million TND before
VAT, equal to 28% of the cost of potable water (SRC-TG-282). The utility's key-figures page reports
specific consumption of 0.725 kWh/m³ in 2023 (SRC-TG-270). This makes water supply a significant
electricity consumer, although public data do not identify which supply stages use the electricity.

## Root causes

Water production and conveyance depend on electrically powered equipment. The cited public data
do not quantify the contribution of elevation, network losses, treatment technology or pumping
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
