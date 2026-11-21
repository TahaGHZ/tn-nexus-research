---
id: FND-TG-701
title: "Rainfed cereal output swings with rainfall and collapsed in the 2023 drought, cutting the harvest by roughly two-thirds or more"
status: in-review
sectors: [agriculture, water]
theme: cereals
timeframe: current
period: 1990-2025
geography: [national]
severity: high
trend: unknown
confidence: medium
root_causes:
  - cause: "Over 85% of wheat area is rainfed (irrigated wheat under 15% of area; ITES: only 10% of cereal production is irrigated), so output depends on the amount and timing of winter and spring rain"
    type: climatic
    legacy_decision: false
    sources: [SRC-TG-700, SRC-TG-706]
  - cause: "Consecutive drought years (four by 2023) and heat during crop development; seed stocks depleted after failed harvests"
    type: climatic
    legacy_decision: false
    sources: [SRC-TG-700, SRC-TG-705]
indicators:
  - name: "Cereal production 2023, FAO GIEWS estimate (Nov 2023)"
    value: 302000
    unit: t
    year: 2023
    geography: national
    source: SRC-TG-700
  - name: "Cereal production 2023, FAO GIEWS revised estimate (May 2024)"
    value: 520000
    unit: t
    year: 2023
    geography: national
    source: SRC-TG-700
  - name: "Wheat production MY 2023/24 (2023 harvest), Ministry of Agriculture via USDA"
    value: 442
    unit: thousand t
    year: 2023
    geography: national
    source: SRC-TG-704
  - name: "Barley production MY 2023/24 (2023 harvest), Ministry of Agriculture via USDA"
    value: 90
    unit: thousand t
    year: 2023
    geography: national
    source: SRC-TG-704
  - name: "Cereal production 2023, World Bank WDI (FAO)"
    value: 612415
    unit: t
    year: 2023
    geography: national
    source: SRC-TG-707
  - name: "Wheat production MY 2022/23 (2022 harvest)"
    value: 1230
    unit: thousand t
    year: 2022
    geography: national
    source: SRC-TG-704
  - name: "Barley production MY 2022/23 (2022 harvest)"
    value: 460
    unit: thousand t
    year: 2022
    geography: national
    source: SRC-TG-704
  - name: "Wheat and barley area seeded, MY 2023/24"
    value: 952
    unit: thousand ha
    year: 2023
    geography: national
    source: SRC-TG-704
  - name: "Wheat and barley area harvested, MY 2023/24 (revised, TS2026-0004)"
    value: 437
    unit: thousand ha
    year: 2023
    geography: national
    source: SRC-TG-704
  - name: "Wheat and barley area harvested, MY 2023/24 (earlier estimate, TS2024-0003)"
    value: 634
    unit: thousand ha
    year: 2023
    geography: national
    source: SRC-TG-703
  - name: "Grain collected by Office des Céréales, 2023"
    value: 293.4
    unit: thousand t
    year: 2023
    geography: national
    source: SRC-TG-705
  - name: "Grain collected by Office des Céréales, average 2020-2022"
    value: 756.4
    unit: thousand t
    year: "2020-2022"
    geography: national
    source: SRC-TG-705
  - name: "Grain collected by Office des Céréales, 2019"
    value: 1284.7
    unit: thousand t
    year: 2019
    geography: national
    source: SRC-TG-705
  - name: "Government grain purchases, 2023 (GIEWS)"
    value: 225.6
    unit: thousand t
    year: 2023
    geography: national
    source: SRC-TG-700
  - name: "Government grain purchases, 2022 (GIEWS)"
    value: 700
    unit: thousand t
    year: 2022
    geography: national
    source: SRC-TG-700
  - name: "Lowest cereal yield per harvested ha in 1990-2024"
    value: 893.9
    unit: kg/ha
    year: 1994
    geography: national
    source: SRC-TG-707
  - name: "Highest cereal yield per harvested ha in 1990-2024"
    value: 1946.8
    unit: kg/ha
    year: 2019
    geography: national
    source: SRC-TG-707
  - name: "Mean cereal yield 2015-2024 (own calculation)"
    value: 1473
    unit: kg/ha
    year: "2015-2024"
    geography: national
    source: SRC-TG-707
  - name: "Coefficient of variation of cereal yield 2015-2024 (own calculation, sample CV)"
    value: 19.1
    unit: "%"
    year: "2015-2024"
    geography: national
    source: SRC-TG-707
  - name: "Mean cereal yield 1990-1999 (own calculation)"
    value: 1246
    unit: kg/ha
    year: "1990-1999"
    geography: national
    source: SRC-TG-707
  - name: "Coefficient of variation of cereal yield 1990-1999 (own calculation, sample CV)"
    value: 16.8
    unit: "%"
    year: "1990-1999"
    geography: national
    source: SRC-TG-707
  - name: "Average cereal yield 2010-2018 (durum max 25, soft wheat 21, barley 16)"
    value: 18
    unit: q/ha
    year: "2010-2018"
    geography: national
    source: SRC-TG-706
  - name: "Irrigated share of wheat area (upper bound; GIEWS says less than 15%)"
    value: 15
    unit: "%"
    year: 2023
    geography: national
    source: SRC-TG-700
  - name: "Cereal production 2025 (GIEWS)"
    value: 1.7
    unit: million t
    year: 2025
    geography: national
    source: SRC-TG-700
stakeholders: [cereal farmers, Office des Céréales, Ministry of Agriculture, Institut National des Grandes Cultures, seed producers, livestock keepers (barley feed)]
related: [FND-TG-700, FND-TG-702]
sources: [SRC-TG-700, SRC-TG-701, SRC-TG-703, SRC-TG-704, SRC-TG-705, SRC-TG-706, SRC-TG-707, SRC-TG-708, SRC-TG-709]
data_gaps:
  - "Ministry of Agriculture (DGPA) primary publication of 2023 production by crop and governorate: not opened; values are taken via USDA tables."
  - "ONAGRI cereal campaign evaluation note (eva-cereal-2024-2025.pdf) opened but its Arabic text did not extract."
  - "FAOSTAT series directly (API down, HTTP 521); WDI copy of FAO data used instead."
  - "Rainfall series by cereal governorate linked to yields (INM data) not found."
  - "A consistent national projection of cereal yields under climate change: only two single-study abstracts found, with conflicting results (SRC-TG-708, SRC-TG-709); the full CCDR agriculture chapter was not found (only the executive summary, which gives no cereal figure)."
  - "Irrigation water volume needed to reach the 120,000 ha irrigated wheat target."
  - "Economic losses to farmers from the 2023 failure and how much was compensated (FIDAC payouts)."
  - "The SRC-TG-707 URL is the WDI cereal yield series (AG.YLD.CREL.KG). The 2023 production value of 612,415 t and the 1990-2024 production range come from the WDI production series AG.PRD.CREL.MT, api.worldbank.org/v2/country/TUN/indicator/AG.PRD.CREL.MT?format=json&date=1990:2024. The source record should be updated by its owner."
author: TahaGHZ
---

## Problem

Tunisian cereals are mostly rainfed: irrigated wheat is under 15% of wheat area (SRC-TG-700), and ITES says only 10% of cereal production comes from irrigated land (SRC-TG-706). Output therefore moves with rainfall. Since 1990, cereal production has ranged from about 0.55 Mt (2002) to 2.9 Mt (1996) (SRC-TG-707). In 2023 a fourth consecutive dry year combined with heat at critical growth stages (SRC-TG-705, SRC-TG-700). Sources disagree on how far the harvest fell, and their scopes differ. FAO GIEWS first estimated 302,000 t, almost 80% below average. It later revised this to 520,000 t, about 70% below the five-year average (SRC-TG-700). The Ministry of Agriculture's figures reported by USDA give 442 kt wheat and 90 kt barley, about 532 kt (SRC-TG-704). World Bank WDI, using FAO data, gives 612 kt for all cereals (SRC-TG-707). The 2022 harvest had been about 1.69 Mt of wheat and barley (SRC-TG-704). Output recovered to about 1.5 Mt in 2024 and 1.7 Mt in 2025 (SRC-TG-700).

## Root causes

A poor harvest is the symptom. Low yields are a co-symptom (see Evidence), not a cause. The underlying causes are these:

- **Exposure by design: a rainfed system.** Over 85% of wheat area relies on rain (SRC-TG-700), and only 10% of cereal production is irrigated (SRC-TG-706). FAO notes that this makes year-on-year output vary significantly (SRC-TG-700).
- **Climate shock, compounding over years.** 2023 was the fourth below-average rainfall year in a row (SRC-TG-705). FAO says the drought conditions had not been experienced in over two decades (SRC-TG-700). The failed 2022/23 durum harvest did not leave enough seed for 2023/24, so the government imported seed and farmers switched to barley (SRC-TG-700, SRC-TG-703). One bad year therefore weakens the next.
- **How failure shows in the data.** Yield per harvested hectare does not capture a collapse well. WDI yield for 2023 was 1,300 kg/ha, close to normal, because harvested area fell to 471,000 ha (SRC-TG-707). USDA's Ministry-based tables show 952,000 ha of wheat and barley seeded but only 437,000 ha harvested in MY 2023/24 (SRC-TG-704). The earlier USDA report had 634,000 ha harvested (SRC-TG-703). Much of the sown area was simply not harvested.

**What the evidence does not support.** We found no clear evidence that average yields are falling. Our calculation from WDI gives a mean of 1,246 kg/ha over 1990-1999 and 1,473 kg/ha over 2015-2024 (SRC-TG-707). Variability is similar or slightly higher: the coefficient of variation is 16.8% in the 1990s and 19.1% over 2015-2024 (SRC-TG-707). ITES describes a "slight downward trend" in cereal production, in a section whose chart covers 2004-2018 (SRC-TG-706). The problem is better stated as low and highly volatile yields than as declining yields.

## Evidence

- Office des Céréales collection (SRC-TG-705). In 2023 it collected 286.7 kt durum, 6.2 kt soft wheat and 0.5 kt barley, 293.4 kt in total. This compares with 756.4 kt on average in 2020-2022 and 1,284.7 kt in 2019. GIEWS gives government purchases of 225.6 kt in 2023 against 700 kt in 2022 (SRC-TG-700). The two sources disagree on the 2023 figure.
- Consequence for imports and finance: in 2023/24 monthly import needs rose to about 100,000 t for durum and 100,000 t for barley. The Office des Céréales faced an extra financing gap of about US$522 million (SRC-TG-705).
- Yield level (co-symptom): over 2010-2018, yields did not exceed 25 q/ha for durum, 21 q/ha for soft wheat and 16 q/ha for barley, averaging 18 q/ha (SRC-TG-706). A signed analysis article in the ONAGRI Lettre ranks Tunisia 120th of 191 countries for cereal yields. It links low yields to climate, land quality, inputs and practices, without quantifying each factor (SRC-TG-701, secondary analysis, tier B weight).
- Recovery depends on rain: GIEWS attributes the 2025 harvest (about 1.7 Mt, 18% above average) to April-May rainfall (SRC-TG-700). USDA states that wheat yields depend on April rainfall, which can improve them by 10-20% when favourable (SRC-TG-704).
- Future (context only, no projection block). One modelling study (AquaCrop, Med-CORDEX) reports, against its baseline, temperature up 4 °C and precipitation down 37% by the end of the century; the abstract does not name the scenario for these two figures. It gives a durum yield gap of 45-55% under RCP 8.5, and says that under RCP 8.5 the north-west would become unsuited to rainfed wheat (SRC-TG-708). A second study at two north-west sites for 2041-2070 does not report a clear decline and stresses model sensitivity (SRC-TG-709). Only abstracts were read. These do not support a sourced national projection, so no predicted finding is made.

## Why confidence is what it is

High that cereal output is rainfall-driven and that 2023 was a severe failure: GIEWS, USDA/Ministry, the World Bank (OC data) and WDI all agree. Medium overall because the size of the 2023 shortfall differs across sources (302-612 kt), harvested-area figures were revised, and the Ministry's own publication was not opened directly. The long-term yield trend and future projections are weak or contested.

## Links to other sectors

- Water: the dependence on rainfall is the water side of this problem. Irrigation is being promoted to stabilise wheat, with an irrigation water subsidy of USD 0.07/m3 and a target of 120,000 ha of irrigated wheat (SRC-TG-704). Expanding irrigated wheat would therefore add to irrigation water demand; the size of that demand was not sourced (see data_gaps).
- Livestock: barley collection fell to almost nothing in 2023 (SRC-TG-705), and barley is consumed mainly in feedlots and as supplemental feed (SRC-TG-704). This links to the `livestock-feed` theme.

## Leads for phase 2

- FIDAC (Fonds d'indemnisation des dommages agricoles causés par les calamités naturelles), strengthened in the 2024 Finance Law (SRC-TG-705)
- Seasonal credit for grain producers (2024 Finance Law) (SRC-TG-705)
- Certified seed subsidy and seed multiplication after the 2023 seed shortage (SRC-TG-703)
- Delayed sowing dates as a climate adaptation strategy (SRC-TG-708)
- Conservation agriculture or no-till on durum wheat (seen in search results, not opened)
- Drought-tolerant varieties from INRAT and INGC (ONAGRI Lettre 2022 variety list, SRC-TG-701)
- Supplementary irrigation of wheat towards 120,000 ha (SRC-TG-704)

## Verification

**Independent review, 21 November 2026:** pass after corrections. Checked against the originals: GIEWS country briefs of 29 November 2023 (p.14) and 30 May 2024 (p.12) (SRC-TG-700); USDA GAIN TS2026-0004 Tables 1-2 and TS2024-0003 Table 1 (SRC-TG-704, SRC-TG-703); World Bank PAD5602 Table 1 and paragraph 9 (SRC-TG-705); World Bank WDI AG.PRD.CREL.MT 2023 and the yield series rows 1990-2024, with the 1990-2024 production range (0.55 Mt in 2002, 2.9 Mt in 1996) rechecked on the API (SRC-TG-707); ITES section "La production de cereales" (SRC-TG-706). Corrections: the ITES "slight downward trend" is no longer tied to 2010-2018 (its chart covers 2004-2018); the WDI production citation gap is recorded in data_gaps. Independent teammate sign-off is outstanding; reviewer and author share the TahaGHZ identity, so the record is not validated.
