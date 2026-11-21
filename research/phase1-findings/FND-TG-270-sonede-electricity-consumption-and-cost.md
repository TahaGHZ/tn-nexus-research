---
id: FND-TG-270
title: SONEDE's water supply used 563 GWh of electricity in 2023
status: draft
sectors: [energy, water]
theme: grid
timeframe: current
period: 2023
geography: [national]
severity: medium
trend: worsening
confidence: medium
root_causes:
  - cause: Pumping, treatment and distribution require electricity throughout SONEDE's water-supply system; the available institutional source reports the total but does not disaggregate end uses.
    type: technical
    legacy_decision: false
    sources: [SRC-TG-270, SRC-TG-282]
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
  - name: Specific energy consumption
    value: 0.725
    unit: kWh per cubic metre
    year: 2023
    geography: national
    source: SRC-TG-270
stakeholders: [SONEDE, STEG, Ministry of Agriculture, households]
related: [FND-TG-450, FND-TG-476]
sources: [SRC-TG-270, SRC-TG-282]
data_gaps:
  - SONEDE's specific-consumption denominator and the split across production, transfer pumping and distribution are undefined in the public chart.
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

Medium: figures are from SONEDE, but the energy-management page is undated and the per-m³
denominator is not defined.

## Links to other sectors

This is an energy-sector finding with direct implications for water service operations.

## Leads for phase 2

- SONEDE energy-efficiency actions (SRC-TG-282).

## Verification status

Draft retained. Outstanding exact issue: SONEDE's original Arabic webpage was opened and the figures match its text, but a fresh local downloaded-text file could not be written to the requested external evidence directory under the workspace's path restrictions.
