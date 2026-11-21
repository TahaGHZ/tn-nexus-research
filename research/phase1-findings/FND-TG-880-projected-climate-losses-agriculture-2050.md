---
id: FND-TG-880
title: "Warming and drying are projected to cut Tunisian agricultural output and value added by roughly 15-33% by 2030-2050, but the circulating headline numbers trace back to two studies, and some are quoted at the wrong horizon or cannot be traced"
status: draft
sectors: [agriculture, water]
theme: drought-climate
timeframe: predicted
period: "horizon 2030, 2050 (2036-2065) and 2100 (2071-2100), reference 1981-2010"
geography: [national, north-west, centre-west, south-west, south-east]
severity: high
trend: worsening
confidence: medium
root_causes:
  - cause: "Projected warming of +1.6 to +1.9°C by 2050 and +2 to +3.9°C by 2100 (RCP 4.5 / RCP 8.5), raising evapotranspiration, heat stress and crop water demand"
    type: climatic
    legacy_decision: false
    sources: [SRC-TG-887, SRC-TG-886]
  - cause: "Projected decline in rainfall (-6% to -9% by 2050, -9% to -18% by 2100), concentrated in the humid and sub-humid north where rainfed cereals are grown, and a shift of bioclimatic zones northwards"
    type: climatic
    legacy_decision: false
    sources: [SRC-TG-887, SRC-TG-885]
  - cause: "Exposure is structural: about 90% of arable land is rainfed, so yields follow rainfall; the irrigated 36% of value added depends on water that the same projections shrink"
    type: technical
    legacy_decision: false
    sources: [SRC-TG-881]
  - cause: "The national figures used for adaptation planning (NDC 2021, 4th National Communication 2023) mix studies, scenarios and horizons, so planning rests partly on misattributed projections (an evidence problem, not a cause of the losses themselves)"
    type: institutional
    legacy_decision: false
    sources: [SRC-TG-885, SRC-TG-884, SRC-TG-886]
indicators:
  - name: "Projected change in mean annual temperature vs 1981-2010"
    value: "+1.6 (RCP 4.5) / +1.9 (RCP 8.5) by 2050; +2.0 / +3.9 by 2100"
    unit: "°C"
    year: "2050, 2100"
    geography: national
    source: SRC-TG-887
  - name: "Projected change in annual precipitation vs 1981-2010"
    value: "-6% (RCP 4.5) / -9% (RCP 8.5) by 2050; -9% / -18% by 2100"
    unit: "% of annual total"
    year: "2050, 2100"
    geography: national
    source: SRC-TG-887
  - name: "Projected change in annual precipitation, worst case (World Bank CCDR)"
    value: "-1 to -14% by 2050; -18 to -27% by 2100"
    unit: "% of annual total"
    year: "2050, 2100"
    geography: national
    source: SRC-TG-881
  - name: "Projected frequency of dry years, 2031-2050"
    value: "52% (10 of 19 years) under RCP 4.5; 79% (15 of 19) under RCP 8.5"
    unit: "share of years"
    year: "2031-2050"
    geography: national
    source: SRC-TG-881
  - name: "Projected change in consecutive dry days by 2050"
    value: "+9.3 (RCP 4.5) / +17.1 (RCP 8.5), not statistically significant in 2050"
    unit: "days per year"
    year: 2050
    geography: national
    source: SRC-TG-885
  - name: "Projected agricultural value added vs past-trend baseline (RCP 8.5, macro model)"
    value: "-15% by 2030; -29% by 2050"
    unit: "% of sector value added"
    year: "2030, 2050"
    geography: national
    source: SRC-TG-880
  - name: "Projected agricultural production vs no-climate-stress scenario (water-shortage driven, partial equilibrium)"
    value: "-29.1% (RCP 4.5) / -33.1% (RCP 8.5); TND 4.0-4.6 billion, 2.8-3.2% of GDP at 2022 prices"
    unit: "% of production"
    year: 2050
    geography: national
    source: SRC-TG-881
  - name: "Projected decrease in share of agricultural production in national GDP"
    value: "-5% to -10%"
    unit: "% (source does not say whether relative change or percentage points)"
    year: 2030
    geography: national
    source: SRC-TG-884
  - name: "Projected national cereal production (rainfed + irrigated, yield and suitability effects, constant technology)"
    value: "-21% / -16% (RCP 4.5, 2050 / 2100); -14% / -38% (RCP 8.5, 2050 / 2100)"
    unit: "% vs 1981-2010 reference"
    year: "2050, 2100"
    geography: national
    source: SRC-TG-886
  - name: "Projected olive oil production with shifting suitable area"
    value: "-23% / -28% (RCP 4.5, 2050 / 2100); -35% / -70% (RCP 8.5, 2050 / 2100)"
    unit: "% vs reference (207,000 t oil)"
    year: "2050, 2100"
    geography: national
    source: SRC-TG-886
  - name: "Projected change in climatically suitable area by 2100 (RCP 8.5, model mean)"
    value: "cereals -16% (range -31% to +4%); olives -14% (-27% to +7%); pastoral plants -19% (-36% to +1%)"
    unit: "% of suitable area"
    year: 2100
    geography: national
    source: SRC-TG-885
  - name: "Projected share of livestock feed needs met by natural rangelands"
    value: "8-10% by 2050, vs about 16% in 2020"
    unit: "% of herd needs"
    year: "2020, 2050"
    geography: national
    source: SRC-TG-885
  - name: "Projected loss of agricultural jobs (World Bank CCDR; method not given)"
    value: "at least 30%, attributed mainly to oasis desertification"
    unit: "% of agricultural jobs"
    year: 2050
    geography: national
    source: SRC-TG-881
  - name: "Projected loss of agricultural jobs (4th National Communication; two figures, method not given)"
    value: "30% by 2050 (attached to cereals); at least 20%, with a 30-50% fall in workers' incomes (sector, no horizon)"
    unit: "% of agricultural jobs"
    year: 2050
    geography: national
    source: SRC-TG-885
projection:
  horizon: "2030, 2050 (2036-2065) and 2100 (2071-2100)"
  scenario: "RCP 4.5 and RCP 8.5 (CMIP5); the CCDR value-added figures are RCP 8.5 with no adaptation, against a past-trend baseline"
  method: "Two exercises. (1) MARHP/AFD 2021 PNA study: 12 (RCP 4.5) and 18 (RCP 8.5) downscaled climate models validated by INM, crop yield and climatic-suitability modelling for rainfed cereals, olives and rangelands at constant area and technology, plus or minus 15% uncertainty. (2) World Bank CCDR 2023: water supply-demand balance feeding a Baqaee-Farhi multisector model and the World Bank MFMOD macro model."
  source: SRC-TG-886
stakeholders: [rainfed cereal farmers of the north, olive growers of the centre and south, pastoralists and small livestock keepers of the centre and south, oasis farmers, rural women wage workers, Ministry of Agriculture (MARHP), Ministry of Environment, INM, ONAGRI, Office des Céréales]
related: [FND-TG-881, FND-TG-701, FND-TG-720, FND-TG-742, FND-TG-702, FND-TG-920]
sources: [SRC-TG-880, SRC-TG-881, SRC-TG-882, SRC-TG-884, SRC-TG-885, SRC-TG-886, SRC-TG-887, SRC-TG-888]
data_gaps:
  - "No crop-model projection for irrigated crops, vegetables, fruit trees other than olives, or livestock output; the PNA study covers rainfed cereals, olives, rangelands and fisheries only."
  - "No sourced projection of the national rainfed cropped area (ha); only the change in climatically suitable area is available."
  - "The CCDR's 30% agricultural job-loss figure cites an unidentified 'Ministère de l'Environnement 2021' document; no method was found. The NC4's 20% and 30% figures also show no method."
  - "No projection of drought frequency with a defined drought index (SPI/SPEI) was opened; the CCDR's 'dry years' are undefined."
  - "The 2006-2007 MARHP/GIZ national adaptation strategy (Cahier 2 Projections) was not opened; it is described only through the 4th National Communication."
  - "The 'AFD 2020' deliverable cited by the CCDR for its 2050 yield figures was not found, so the CCDR numbers cannot be traced."
  - "No projection includes technological progress, new varieties or adaptation, so all losses are 'no-adaptation' estimates."
author: TahaGHZ
---

## Problem

Official and donor projections agree on direction: by 2050 Tunisia should be warmer by about 1.6°C (RCP 4.5) to 1.9°C (RCP 8.5) and drier by 6-9% in annual rainfall relative to 1981-2010, with the largest rainfall losses in the humid and sub-humid north (SRC-TG-887). By 2100 the RCP 8.5 values reach +3.9°C and -18% (SRC-TG-887). Because about 90% of arable land is rainfed (SRC-TG-881), this translates into lower yields, a northward retreat of the zones suitable for cereals, olives and rangeland plants, and less irrigation water. The World Bank projects agricultural value added 15% below a past-trend baseline by 2030 and 29% below it by 2050 under RCP 8.5 without action (SRC-TG-880). The updated NDC projects a 5-10% fall in agriculture's share of GDP by 2030 (SRC-TG-884). The predicted problem is real and large, but most specific crop and job numbers in circulation are weaker than they look: they come from two studies, the national cereal figure is quoted at the wrong horizon, and the CCDR's crop-yield figures cannot be traced (see Evidence).

## Root causes

The symptom is projected lower yields and output. The causes are climatic and structural:

- **Climatic.** Higher temperatures shorten crop cycles and add heat-stress days: about +32 to +39 heatwave days per year by 2050, not yet statistically significant (SRC-TG-885). Lower and more variable winter rainfall cuts soil moisture for rainfed crops and inflows for irrigation (SRC-TG-886, SRC-TG-887).
- **Structural exposure.** Rainfed farming dominates land use, while the irrigated sector (36% of agricultural value added) depends on water that the same projections reduce (SRC-TG-881).
- **History of the evidence base (not a cause of the losses).** Tunisia made its first agricultural climate projections early, in the 2006-2007 MARHP/GIZ adaptation strategy using HadCM3 under SRES A2/B2 (SRC-TG-885). They were redone with INM's 2015 A1B downscaling and the 2021 MARHP/AFD RCP downscaling (SRC-TG-885). The NDC and the 4th National Communication now cite these studies inconsistently (see below), so adaptation choices rest partly on mixed numbers.
- **No past decision found.** No sourced past decision was found that created this predicted exposure, beyond the long-standing dominance of rainfed farming. Past policy findings on cereals are in FND-TG-702 and FND-TG-920.

## Evidence

**Climate drivers (projections).**

- **INM portal** (reference 1981-2010): +1.6°C (RCP 4.5) and +1.9°C (RCP 8.5) by 2050; -14 mm (-6%) and -22 mm (-9%) annual rainfall by 2050; -9% and -18% by 2100 (SRC-TG-887).
- **World Bank worst case:** +2 to +2.3°C and -1 to -14% rainfall by 2050; +4.1 to +5.2°C and -18 to -27% by 2100 (SRC-TG-881).
- **Updated NDC:** "-10% to 30% in 2050" rainfall, with no stated method (SRC-TG-884).
- **INM 2015 (SRES A1B, reference 1961-1990):** -10% to -35% by 2050 (SRC-TG-885).

These ranges differ by reference period, scenario generation and model set. The INM/PNA RCP figures are the most recent official set.

**Drought frequency.** The CCDR projects that 10 of 19 years (52%) in 2031-2050 will be dry under RCP 4.5 and 15 of 19 (79%) under RCP 8.5, but it does not define a dry year (SRC-TG-881). The PNA downscaling projects +9.3 (RCP 4.5) and +17.1 (RCP 8.5) consecutive dry days per year by 2050, not significant until 2100 (SRC-TG-885).

**Agriculture-wide output and value added.** There are three related but different metrics, all ultimately from the CCDR modelling or the NDC:

- **Value added (CCDR, RCP 8.5):** -15% by 2030 and -29% by 2050 against a past-trend baseline (SRC-TG-880).
- **Production (CCDR, partial equilibrium):** -29.1% (RCP 4.5) and -33.1% (RCP 8.5) against a no-climate-stress projection, worth TND 4.0-4.6 billion, or 2.8-3.2% of GDP at 2022 prices (SRC-TG-881). The World Bank's Autumn 2023 monitor repeats this (SRC-TG-882).
- **Share of GDP (NDC):** -5% to -10% by 2030, depending on trade-openness scenarios (SRC-TG-884).

**Cross-crop modelling (primary study, constant area and technology).** The MARHP/AFD 2021 study projects these changes in national cereal production:

| Scenario | 2050 | 2100 |
|---|---|---|
| RCP 4.5 | -21% | -16% |
| RCP 8.5 | -14% | -38% |

For olive oil, with the suitable area shifting, it projects:

| Scenario | 2050 | 2100 |
|---|---|---|
| RCP 4.5 | -23% | -28% |
| RCP 8.5 | -35% | -70% |

The study gives an uncertainty of plus or minus 15% around the mean (SRC-TG-886). By 2100 under RCP 8.5, the climatically suitable area would shrink by about 16% for cereals, 14% for olives and 19% for pastoral plants, with wide model ranges (SRC-TG-885). Natural rangelands would meet only 8-10% of herd feed needs by 2050, against about 16% in 2020 (SRC-TG-885). The IPCC's Mediterranean assessment cites a Tunisian estimate that cereal production falls 0.79% for every 1% fall in precipitation. It also cites a study finding some crops non-viable in Tunisia beyond 2°C of warming where irrigation water falls (SRC-TG-888).

**Result: some headline figures do not match, or cannot be traced to, their primary source.** This is reported as a finding in its own right; crop-level detail is left to the cereal and olive records.

- **Cereals in the NDC and NC4: wrong horizon.** Both say cereal production "would fall by almost 40% by 2050" under RCP 8.5 (SRC-TG-884, SRC-TG-885). The study they rely on gives -14% at 2050 and -38% at 2100 under RCP 8.5, and says explicitly that the near-40% fall applies to 2100 (SRC-TG-886). The NDC's olive yield figure (-32%) carries no horizon (SRC-TG-884).
- **Crop yields in the CCDR: cannot be traced.** The CCDR gives olive yield -69% under RCP 8.5, and soft wheat -35% and barley -41% yield "by 2050" under RCP 8.5, citing an "AFD 2020" deliverable that was not found (SRC-TG-881). The final 2021 study states yield losses only for 2100: soft wheat -33% and barley -32% under RCP 8.5, and olive about -66% under RCP 8.5 (SRC-TG-886). The CCDR olive figure is therefore close to the study's 2100 value, while its 2050 wheat and barley figures exceed even the study's 2100 yield losses. The CCDR's RCP 4.5 figures (olive oil -67%, soft wheat -42%, barley -54%) are larger than its RCP 8.5 ones, which is not explained (SRC-TG-881).
- **Rainfall in the NC4: scenario labels swapped.** The NC4 attaches -14 mm to RCP 8.5 and -22 mm to RCP 4.5 (SRC-TG-885). The source study and the INM portal both give -14 mm (-6%) for RCP 4.5 and -22 mm (-9%) for RCP 8.5 (SRC-TG-886, SRC-TG-887).
- **Jobs.** The figures do not agree:
  - CCDR: at least 30% of agricultural jobs lost by 2050, mainly through oasis desertification (SRC-TG-881).
  - NC4: 30% job losses attached to cereals (SRC-TG-885).
  - NC4: "at least 20%" with a 30-50% income fall (SRC-TG-885).

  No method was found for any of them.

## Why confidence is what it is

Medium.

- **Direction is solid.** Every source projects warming, drying and output losses. Warming is also the robust observed signal (FND-TG-881).
- **Few independent sources.** There are effectively two modelling exercises: the MARHP/AFD 2021 PNA study and the World Bank CCDR model. The NDC, the 4th National Communication and the World Bank economic monitors repeat them, and the NC4 cites the CCDR while it was still forthcoming (SRC-TG-885).
- **Wide uncertainty.** Model ranges are wide: suitable-area changes span roughly -30% to +5%, and production carries plus or minus 15% (SRC-TG-885, SRC-TG-886).
- **No adaptation in the estimates.** None of the projections includes technical progress (SRC-TG-886), and the CCDR value-added figures assume no adaptation under RCP 8.5. The CCDR itself calls RCP 8.5 overly pessimistic for long-term emissions (SRC-TG-880).
- **Quotation errors.** Specific crop and job percentages in policy documents should not be quoted without checking the horizon against SRC-TG-886. The job figures are low confidence.

## Links to other sectors

- **Water.** The CCDR's agricultural losses are driven mainly by water shortage: demand exceeds supply by 28% by 2050 under RCP 8.5 (SRC-TG-880).
- **Losses may move to aquifers instead of appearing as lower output.** The NC4 expects irrigated-output losses to stay hidden because farmers will overpump aquifers and use any available water, including drinking water and untreated wastewater. After the 2016-2018 drought, crop changes and groundwater use kept measured losses small (SRC-TG-885). Projected farm losses can therefore turn into faster groundwater depletion and salinisation; see the water lane's groundwater records.
- **Energy.** The CCDR notes that adaptation responses such as desalination and pumping raise energy demand (SRC-TG-880).

## Leads for phase 2

- National Adaptation Plan (PNA), food-security component, MARHP/AFD Adapt'Action: http://www.onagri.nat.tn/uploads/Etudes/01b_AdaptAction-PNA%20Tunisie-Impacts_.pdf ; options report: https://gret.org/wp-content/uploads/2022/09/AdaptAction-PNA-Tunisie-Options_Rapport-Principal-version-finale.pdf
- Updated National Drought Plan (Plan National de la Sécheresse, 2020), NDC adaptation measure 8 (SRC-TG-884)
- Stratégie Eau 2050 (ITES/MARHP): http://www.onagri.tn/uploads/Etudes/ITES-eau2050.pdf
- 2006-2007 MARHP/GIZ national adaptation strategy for agriculture and ecosystems (partial chapters at KIT library: https://publikationen.bibliothek.kit.edu/1000014858/1116689)
- INM climate-services portal Climat-c: https://climat-c.tn
- CCDR and Autumn 2023 Economic Monitor recommendations: climate-smart agriculture, nature-based solutions for groundwater recharge, index-based agricultural insurance, hydromet early warning
