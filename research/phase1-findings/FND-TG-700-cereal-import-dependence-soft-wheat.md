---
id: FND-TG-700
title: "Tunisia imports roughly half of its cereals and almost all of its soft (bread) wheat, even in good harvest years"
status: draft
sectors: [agriculture]
theme: cereals
timeframe: current
period: 2018-2026
geography: [national]
severity: high
trend: stable
confidence: high
root_causes:
  - cause: "Soft wheat is barely grown: about 32-70 thousand ha seeded a year against 500,000+ ha of durum, and Tunisia has a comparative advantage only in irrigated or northern rainfed soft wheat"
    type: economic
    legacy_decision: false
    sources: [SRC-TG-703, SRC-TG-704, SRC-TG-706, SRC-TG-710]
  - cause: "Demand for bread wheat grows with population and is kept high by universal bread and flour subsidies, with documented waste"
    type: policy
    legacy_decision: true
    sources: [SRC-TG-701, SRC-TG-703, SRC-TG-704, SRC-TG-705, SRC-TG-706]
  - cause: "Domestic durum and barley output swings with rainfall, so imports must fill a variable gap on top of the structural soft wheat gap (see FND-TG-701)"
    type: climatic
    legacy_decision: false
    sources: [SRC-TG-701, SRC-TG-705]
indicators:
  - name: "Foreign dependence coefficient, soft wheat (net imports / consumption)"
    value: 93.1
    unit: "%"
    year: 2021
    geography: national
    source: SRC-TG-701
  - name: "Soft wheat import dependence (World Bank, from OC)"
    value: 95
    unit: "%"
    year: 2024
    geography: national
    source: SRC-TG-705
  - name: "Average dependence on imported soft wheat (ITES)"
    value: 80
    unit: "%"
    year: "multi-year average, period not stated"
    geography: national
    source: SRC-TG-706
  - name: "Foreign dependence coefficient, durum wheat"
    value: 35
    unit: "%"
    year: 2021
    geography: national
    source: SRC-TG-701
  - name: "Foreign dependence coefficient, barley"
    value: 75.6
    unit: "%"
    year: 2021
    geography: national
    source: SRC-TG-701
  - name: "Share of domestic annual needs covered by local production (GIEWS wording, after 2025 harvest)"
    value: 60
    unit: "%"
    year: 2025
    geography: national
    source: SRC-TG-700
  - name: "Wheat production / total wheat consumption, MY 2025/26 (own calculation, 1,318 / 2,950 kt)"
    value: 45
    unit: "%"
    year: 2025
    geography: national
    source: SRC-TG-704
  - name: "Soft (common) wheat production, MY 2023/24 (2023 harvest)"
    value: 14
    unit: "thousand t"
    year: 2023
    geography: national
    source: SRC-TG-704
  - name: "Soft wheat consumption"
    value: 1221.7
    unit: "thousand t"
    year: 2021
    geography: national
    source: SRC-TG-701
  - name: "Imports of wheat other than durum (HS 100199), calendar year"
    value: 1587.2
    unit: "thousand t"
    year: 2024
    geography: national
    source: SRC-TG-702
  - name: "Cereal imports (HS 10), CIF value, calendar year"
    value: 1579.3
    unit: "million USD"
    year: 2023
    geography: national
    source: SRC-TG-702
  - name: "Cereal import requirement forecast, MY 2023/24"
    value: "4.7 (Nov 2023 forecast) / 4.0 (May 2024 forecast)"
    unit: "million t"
    year: 2023
    geography: national
    source: SRC-TG-700
  - name: "Wheat consumption, MY 2025/26"
    value: 2950
    unit: "thousand t"
    year: 2025
    geography: national
    source: SRC-TG-704
stakeholders: [Office des Céréales, Caisse Générale de Compensation, Ministry of Agriculture, Ministry of Trade, millers, bakeries, consumers, cereal farmers]
related: [FND-TG-701, FND-TG-702]
sources: [SRC-TG-700, SRC-TG-701, SRC-TG-702, SRC-TG-703, SRC-TG-704, SRC-TG-705, SRC-TG-706, SRC-TG-710]
data_gaps:
  - "Official INS/ONAGRI cereal supply-utilisation balance after 2021 (the ONAGRI Lettre covers 2018-2021 only)."
  - "Annual CGC subsidy spending on cereals from the Ministry of Finance compensation report: the finances.gov.tn Budget citoyen 2025 PDF opened but its Arabic text did not extract; press figures (about 2.4-2.6 bn TND for cereals) were not used."
  - "FAOSTAT import dependency ratio and food balance sheet (FAOSTAT API down, HTTP 521, on 2026-11-21)."
  - "A modelled projection of cereal import needs to 2030-2050: the only forward figures found are the ITES 2035 trend scenario, which holds the ten-year average constant (57% cereals, 84% soft wheat), and an unsourced-method '75%' in the ONAGRI Lettre citing Tanchum 2021."
  - "Whether food subsidies and energy subsidies compete within the same compensation budget (suspected, not sourced)."
  - "Calendar-year trade data (Comtrade) and July/June marketing-year balances (USDA, GIEWS) could not be reconciled."
author: TahaGHZ
---

## Problem

Tunisia depends on world markets for a large share of its staple cereals, and for almost all of its bread wheat. Dependence estimates vary by method and year. ONAGRI's 2021 balance sheet puts the foreign dependence coefficient at 93.1% for soft wheat, 35% for durum wheat and 75.6% for barley (SRC-TG-701). The World Bank, citing the Office des Céréales, says Tunisia is 95% dependent on imports for soft wheat (SRC-TG-705). ITES gives long-run averages of 80% for soft wheat, 40% for durum and 50% for barley, about 60% for all cereals (SRC-TG-706). FAO GIEWS says imports cover more than half of cereal needs (SRC-TG-700). After the above-average 2025 harvest, GIEWS says local production covers about 60% of "domestic annual needs" (SRC-TG-700). USDA's balance for the same marketing year gives 1,318 kt of wheat produced against 2,950 kt consumed, about 45% by our calculation (SRC-TG-704). The two figures disagree; the GIEWS one does not say how needs are defined. Wheat imports are about 1.9-2.0 million t a year (calendar 2021-2023). Of this, 1.2-1.6 million t is non-durum (soft) wheat (SRC-TG-702). Cereal imports cost 1.15-1.58 billion USD a year over 2021-2024 (SRC-TG-702).

## Root causes

The symptom is a large, recurring import bill. Two different gaps cause it.

**Structural soft wheat gap.** Bread is made from soft wheat, and Tunisia hardly grows it. Common wheat was 32-70 thousand ha seeded a year over MY 2021/22-2026/27, against 514-550 thousand ha of durum (SRC-TG-703, SRC-TG-704). Common wheat production was 14 thousand t in the 2023 drought harvest and 78-200 thousand t in other recent years (SRC-TG-703, SRC-TG-704). Consumption is about 1.2 million t (2021, SRC-TG-701). ITES reports that soft wheat production fell 25% over 2010-2018 while durum rose 27% (SRC-TG-706). Part of this gap is comparative advantage, not policy failure. The World Bank's 2014 analysis found Tunisia competitive in durum wheat. It found soft wheat competitive only on irrigated land and in the wetter north and north-west, and only temporarily during the 2008 price spike (SRC-TG-710). This weakens the common belief that the soft wheat gap can be closed by producing more at home. Imports of soft wheat may be the cheaper option for the country. The real problem is then the exposure to price shocks and foreign-currency shortages that comes with them.

**Demand kept high by subsidies.** The state subsidises flour, semolina and bread for the whole population at below-market prices (SRC-TG-703, SRC-TG-704). This system goes back to the creation of the CGC in 1970/71 (SRC-TG-705, SRC-TG-706). The World Bank reports waste of 900,000 baguettes a day, use of subsidised semolina as animal feed, and leakage to neighbouring countries (SRC-TG-705). USDA reports that bread waste had been 5-8% before the 2023/24 shortages reduced it (SRC-TG-703). ONAGRI's 2021 balance puts soft wheat consumption at 101.6 kg per person. This is above the 84.9 kg found in the INS 2015 household survey (SRC-TG-701). The past decision behind this is described in FND-TG-702.

**Variable durum and barley gap.** For durum wheat and barley, dependence changes from year to year with the weather (SRC-TG-701). In the 2023 drought the Office des Céréales planned additional durum and barley imports. It faced a financing gap of about US$522 million for July 2023-June 2024 (SRC-TG-705). See FND-TG-701.

## Evidence

- Dependence coefficients for 2021: soft wheat 93.1%, durum 35%, barley 75.6% (SRC-TG-701). Soft wheat 95% (World Bank 2024, SRC-TG-705). Soft wheat 80%, durum 40%, barley 50% (ITES average, SRC-TG-706). The sources differ in year and method: ONAGRI uses a net import/consumption balance, while ITES does not state a period. All of them agree that soft wheat is mostly imported.
- Comtrade, calendar years (SRC-TG-702). Imports of non-durum wheat were 1,324 kt (2021), 1,313 kt (2022), 1,182 kt (2023) and 1,587 kt (2024). Durum imports were 566 kt (2021) and rose to 846 kt in the 2023 drought year. Total cereal imports cost 1,231 M USD (2021), 1,493 M USD (2022), 1,579 M USD (2023) and 1,151 M USD (2024).
- Price exposure: the average import price of soft wheat rose from USD 231/t (2020) to USD 416/t (2022). For durum it rose from USD 327/t to USD 665/t (SRC-TG-700).
- Supplier concentration: over 2016-2020, almost 40% of wheat imports came from Ukraine and 7% from Russia (SRC-TG-700). Over July 2023-May 2024, Russia and Ukraine supplied about half of wheat imports (SRC-TG-700).
- Consumption grows about 2% a year. USDA estimates wheat consumption at 2.95 Mt in MY 2025/26 and forecasts 3.0 Mt in 2026/27 (SRC-TG-704).
- The government has a self-sufficiency goal of 3 Mt of cereals, including 1.7 Mt of durum (SRC-TG-703). FAO also cites the 3 Mt target (SRC-TG-700).
- Forward-looking: the ITES trend scenario to 2035 keeps cereal dependence at 57% (soft wheat 84%, durum 41%, barley 51%). Its footnote says this is the ten-year average held constant (SRC-TG-706). ONAGRI's Lettre cites a view that dependence could reach 75%, without a stated method (SRC-TG-701). Neither is a modelled projection, so no predicted finding is made.

## Why confidence is what it is

High that soft wheat dependence is structural and close to or above 80-95%. Three Tunisian or OC-based sources agree on the direction (SRC-TG-701, SRC-TG-705, SRC-TG-706). The trade dataset and USDA production tables are consistent with them (SRC-TG-702, SRC-TG-704). The exact percentage is uncertain because methods differ. The all-cereal figure is softer: "more than half" (GIEWS), about 60% (ITES) and 57% (ITES trend). We found no official balance after 2021.

## Links to other sectors

- Water: irrigated wheat is less than 15% of wheat area (SRC-TG-700). The state subsidises irrigation water at USD 0.07/m3 (32% of cost) to expand irrigated wheat to 120,000 ha (SRC-TG-704). Producing more soft wheat at home therefore draws on scarce irrigation water. This is a link to the water lane, not evaluated here.
- Energy: none found.

## Leads for phase 2

- Office des Céréales reform plan, including planned liberalisation of soft wheat imports for pastry flour (PS-7) and differentiation of PS and PS-7 flour. World Bank PAD5602, Table 3: http://documents.worldbank.org/curated/en/099030524110023463/pdf/BOSIB1fafdb50807218c1c13b056ba52ad7.pdf
- Barley import liberalisation for private operators (April 2023) (SRC-TG-705, SRC-TG-703)
- Tunisia Emergency Food Security Response Project, World Bank P179010 / P181565
- EIB loan for wheat purchases and grain silo modernisation: https://www.eib.org/de/stories/tunisia-food-security?lang=en (not opened)
- ITES proposal for a single purchasing centre for strategic food imports, and better distribution of cereal silos (SRC-TG-706)
- Irrigated wheat expansion target of 120,000 ha, with irrigation water subsidy (SRC-TG-704)
