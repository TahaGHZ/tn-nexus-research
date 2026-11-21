---
id: FND-TG-291
title: World Bank model places Tunisia third among selected cement exporters for CBAM trade exposure
status: in-review
sectors:
  - energy
theme: industrial-efficiency
timeframe: predicted
period: 2022 trade and 2017-benchmarked emissions; CBAM definitive regime from 2026
geography:
  - national
severity: medium
trend: unknown
confidence: medium
root_causes:
  - cause: In the World Bank model, cement trade exposure depends jointly on the difference between Tunisia's sector-average carbon-cost intensity
      and the EU average, and Tunisia's cement-export dependence on the EU; the model does not identify firm-level emissions or realized liabilities.
    type: economic
    legacy_decision: false
    sources:
      - SRC-TG-292
indicators:
  - name: Tunisia position among ten countries shown in World Bank cement Trade Exposure Index chart
    value: 3
    unit: rank
    year: 2022
    geography: national
    source: SRC-TG-292
  - name: Cement trade exposure index, World Bank model (2022 trade inputs)
    value: 6.59
    unit: percent
    year: 2022
    geography: national
    source: SRC-TG-296
projection:
  horizon: 2026
  scenario: EU CBAM definitive regime; the cited World Bank estimate is a static full-phase-in exposure calculation using historical inputs, not
    a forecast of Tunisian firm payments in 2026
  method: World Bank Trade Exposure Index, using 2022 WITS mirror trade and emissions intensities benchmarked to 2017, with a notional USD 100
    per metric ton CO2 certificate price
  source: SRC-TG-292
stakeholders:
  - cement producers
  - Ministry of Industry Mines and Energy
  - Ministry of Trade
  - European Union
related:
  - FND-TG-290
sources:
  - SRC-TG-292
  - SRC-TG-293
  - SRC-TG-294
  - SRC-TG-296
data_gaps:
  - The estimate uses country-sector average emissions benchmarked to 2017 and 2022 mirror trade; it is not firm-specific, does not account for
    subsequent production changes, and is sensitive to the carbon-price assumption. Domestic carbon-price credits can lower incremental obligations.
  - Actual Tunisian cement exports to the EU, firm-level embedded emissions, and realized CBAM costs after the definitive regime begins are not
    established by these sources.
author: TahaGHZ
---

## Problem

The World Bank’s model ranks Tunisia third in the cement chart and gives a trade exposure index of 6.59099% in its companion workbook. Its two inputs are how much of Tunisia’s cement exports go to the EU and how the modelled sector-average carbon payment compares with the EU average. The index is not a realised tax bill (SRC-TG-292, SRC-TG-296).

## Root causes

The modelled exposure reflects both relative carbon-cost intensity against average EU production
and the value/share of cement exports directed to the EU. These are determinants within the
World Bank index, not a finding that individual Tunisian plants have the same emissions intensity or
that exporters themselves legally surrender CBAM certificates. The source warns that firm-level
emissions may differ from country-sector averages, domestic carbon prices may be credited, and
results vary with the carbon-price assumption (SRC-TG-292).

## Evidence

CBAM_RP.xlsx, worksheet fig1, row 14 gives Tunisia 6.59099%, rank 3 and an EU share of world cement exports of 65.4924%. The ACER reproduction rounds the same estimate to 6.59% (SRC-TG-296, SRC-TG-293). The graphic in the methodological note reports the ranking; the underlying workbook supplies numeric precision (SRC-TG-292).

## Why confidence is what it is

The published reproducibility workbook establishes the model output. Firm-level costs, realised liabilities and changes since the input years cannot be inferred from this index (SRC-TG-296).

## Links to other sectors

CBAM is an EU trade and climate policy affecting cement, an energy-intensive industrial subsector.
FND-TG-290 addresses Tunisia's broader industrial energy use and audit information.

## Leads for phase 2

- EU CBAM Regulation (SRC-TG-294).

## Verification

The original World Bank results workbook confirms the cement trade exposure index (6.59099%, rank 3). ACER’s rounded 6.59% agrees (SRC-TG-296, SRC-TG-293). Neither is a realised cost to Tunisian firms.
