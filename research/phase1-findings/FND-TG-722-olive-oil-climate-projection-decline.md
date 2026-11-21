---
id: FND-TG-722
title: "The national adaptation study projects Tunisian olive oil output 11-35% below its modelled reference by 2050 and 20-70% below by 2100, with yield losses up to 51-86% in the Sfax-Kairouan-Sidi Bouzid-Mahdia core under RCP8.5"
status: draft
sectors: [agriculture, water]
theme: olives
timeframe: predicted
period: "horizon 2050 (2036-2065) and 2100 (2071-2100)"
geography: [national, centre-east, centre-west, south-west]
severity: critical
trend: worsening
confidence: medium
root_causes:
  - cause: "Warming of +1.5 to +1.9°C by 2050 and +1.9 to +3.9°C by 2100, and annual rainfall down 6-9% by 2050 and 9-18% by 2100 (vs 1981-2010). This brings more heatwave days with water stress, more days above 40°C, and milder winters that threaten the chill requirement for flowering, in the Centre and South, which give 77% of output."
    type: climatic
    legacy_decision: false
    sources: [SRC-TG-729, SRC-TG-886]
  - cause: "Exposure is high because production is concentrated in rainfed groves in arid and semi-arid central and southern governorates (see FND-TG-720)."
    type: technical
    legacy_decision: true
    sources: [SRC-TG-886, SRC-TG-726]
  - cause: "The main expected offset, expansion of irrigated area, depends on conventional water resources that the same study expects to decline."
    type: institutional
    legacy_decision: false
    sources: [SRC-TG-886]
indicators:
  - name: "Study's modelled reference olive oil production (reference climate 1981-2010, 2015-2017 area)"
    value: 207
    unit: "1,000 t/yr"
    year: "reference"
    geography: national
    source: SRC-TG-886
  - name: "Simulated national oil-olive yield, reference period"
    value: 663
    unit: "kg olives/ha"
    year: "reference"
    geography: national
    source: SRC-TG-886
  - name: "Simulated national oil-olive yield change, RCP4.5 2050 / 2100"
    value: "-17% / -26%"
    unit: "% vs reference"
    year: "2050, 2100"
    geography: national
    source: SRC-TG-886
  - name: "Simulated national oil-olive yield change, RCP8.5 2050 / 2100"
    value: "-32% / -61%"
    unit: "% vs reference"
    year: "2050, 2100"
    geography: national
    source: SRC-TG-886
  - name: "Projected olive oil production, constant area, RCP4.5 2050 / 2100"
    value: "184 / 165 (-11% / -20%)"
    unit: "1,000 t/yr"
    year: "2050, 2100"
    geography: national
    source: SRC-TG-886
  - name: "Projected olive oil production, constant area, RCP8.5 2050 / 2100"
    value: "148 / 82 (-28% / -60%)"
    unit: "1,000 t/yr"
    year: "2050, 2100"
    geography: national
    source: SRC-TG-886
  - name: "Projected olive oil production, variable (climatically suitable) area, RCP4.5 2050 / 2100"
    value: "158 / 149 (-23% / -28%)"
    unit: "1,000 t/yr"
    year: "2050, 2100"
    geography: national
    source: SRC-TG-886
  - name: "Projected olive oil production, variable area, RCP8.5 2050 / 2100"
    value: "134 / 61 (-35% / -70%)"
    unit: "1,000 t/yr"
    year: "2050, 2100"
    geography: national
    source: SRC-TG-886
  - name: "Projected yield loss by 2100 in Sfax, Sidi Bouzid, Kairouan and Mahdia, RCP4.5"
    value: "21-40"
    unit: "% vs reference"
    year: 2100
    geography: centre-east
    source: SRC-TG-886
  - name: "Projected yield loss by 2100 in Sfax, Sidi Bouzid, Kairouan and Mahdia, RCP8.5"
    value: "51-86"
    unit: "% vs reference"
    year: 2100
    geography: centre-east
    source: SRC-TG-886
  - name: "Median loss of climatically favourable olive area, RCP8.5 2100 (up to 34%)"
    value: 14
    unit: "%"
    year: 2100
    geography: national
    source: SRC-TG-886
projection:
  horizon: "2050 (2036-2065) and 2100 (2071-2100)"
  scenario: "RCP4.5 (12 climate models) and RCP8.5 (18 climate models), current technology"
  method: "Olive yield modelling (method in annex 4 of the study, not opened), applied to the 2015-2017 olive area (constant-area case) or to areas shifted by climatic-suitability mapping (variable-area case). Olives converted to oil at 20%. No separation of irrigated and rainfed groves; 15 years of observations."
  source: SRC-TG-886
stakeholders: ["olive farmers in Sfax, Sidi Bouzid, Kairouan, Mahdia and the South", "seasonal harvest workers, many of them rural women", "MARHP (national adaptation plan)", "ONH", "Institut de l'Olivier", "water managers (CRDA, DGRE)"]
related: [FND-TG-720, FND-TG-721, FND-TG-880, FND-TG-701]
sources: [SRC-TG-886, SRC-TG-729, SRC-TG-881, SRC-TG-720, SRC-TG-726, SRC-TG-724]
data_gaps:
  - "No peer-reviewed, process-based olive yield model for Tunisia was opened. The projections rest on one ministry/AFD consultancy study (tier B), whose olive yield method (annex 4) was not in the opened PDF."
  - "The ITCEQ (2024) projection of olive production losses to 2050 is reported in the press either as 2.3% per year or as 23% over 2022-2050. The report was not found or opened."
  - "ONAGRI report cited in the press (March 2022), with 61 kt and 149 kt by 2100. These match Table 22 of SRC-TG-886 (RCP8.5 and RCP4.5, 2100), so it is probably the same study, but the ONAGRI document itself was not opened."
  - "Olive-specific uncertainty band: the plus or minus 15% given by the study is stated for cereals; no figure was found for olives."
  - "Projected olive water demand and the sustainable groundwater yield available for irrigated olive expansion by region."
  - "Projections that include adaptation such as drought-tolerant cultivars, supplemental irrigation or northward relocation."
author: TahaGHZ
---

## Problem

The modelling study behind Tunisia's national adaptation plan (MARHP with AFD Adapt'Action, final version 2021) projects a large fall in olive oil production from a modelled reference of 207 kt/yr. Holding the 2015-2017 olive area constant, production falls 11% (RCP4.5) to 28% (RCP8.5) by 2050, and 20% to 60% by 2100. When the area also shifts with climatic suitability, it falls to 158 kt (-23%) or 134 kt (-35%) by 2050, and to 149 kt (-28%) or 61 kt (-70%) by 2100 (SRC-TG-886, Tables 21-22). The study's summary note gives the range as "-23% to -70% depending on scenarios and horizons" (SRC-TG-729).

The simulated national yield falls from 663 kg olives/ha to 553 or 493 kg/ha under RCP4.5 (2050, 2100) and to 453 or 257 kg/ha under RCP8.5 (SRC-TG-886). The losses concentrate in the core producing governorates. Sfax, Sidi Bouzid, Kairouan and Mahdia, more than half of national output, could lose 21-40% (RCP4.5) or 51-86% (RCP8.5) of yield by 2100 (SRC-TG-886). The South-West is flagged as a risk hotspot for olives from 2050 (SRC-TG-729).

This record gives the olive-specific detail behind the cross-crop projection finding FND-TG-880.

## Root causes

**Symptom vs cause.** The projected output decline is the symptom. The causes are hotter, drier conditions acting on an olive system concentrated in the arid Centre and South and mostly rainfed (FND-TG-720).

- **Climate drivers.** Mean temperature rises +1.5 to +1.9°C by 2050 and +1.9 to +3.9°C by 2100, and annual rainfall falls 6-9% by 2050 and 9-18% by 2100, relative to 1981-2010 (SRC-TG-729). All regions face more heatwave days combined with water stress, and milder winters with few cool days that threaten the chill requirement for flowering (SRC-TG-886). The olive is drought-resistant but sensitive to extreme heat above 40°C, which is expected to become more frequent and longer in the Centre and South, which produce 77% of national output (SRC-TG-886).
- **Exposure from the existing production model (legacy).** About 97% of groves were rainfed around 2010-2012, with 85% in the Centre and South (SRC-TG-726). National output therefore tracks climate directly.
- **The offset is constrained by water.** The study expects continued area growth, "en particulier en irrigué" (especially irrigated), to at least partly compensate. It adds that declining conventional water will be a further limit (SRC-TG-886).

## Evidence

- Tables 21-22 and the yield table of the MARHP/AFD impacts study (SRC-TG-886). It uses 12 RCP4.5 and 18 RCP8.5 models, horizons 2036-2065 and 2071-2100, a 1981-2010 reference and current technology.
- Favourable suitability area falls by a median 14%, and up to 34%, under RCP8.5 by 2100. Under RCP4.5 the changes are significant only by 2100 (SRC-TG-886).
- **Disagreement on the projected olive loss.** The World Bank CCDR (2023), citing an earlier 2020 deliverable of the same programme, gives olive yield losses of up to 69% under RCP8.5 and 67% under RCP4.5 (SRC-TG-881). Its text does not tie the olive figure clearly to a horizon: "d'ici 2050" (by 2050) attaches to the wheat and barley figures. These figures do not match the final 2021 tables, where the yield loss is -32% (RCP8.5, 2050) and -61% (RCP8.5, 2100), and a larger loss under RCP4.5 than RCP8.5 is unexplained. The final 2021 tables are preferred here. FND-TG-880 documents the same mismatch across crops.
- **Disagreement on the baseline.** The study's text gives 2010-2019 average production as about 900,000 t of olives, or about 180 kt of oil (SRC-TG-886). Its modelled reference is 1,033,000 t of olives, or 207 kt of oil, at the same 20% conversion (SRC-TG-886). So the gap comes from the olive tonnage, not the conversion rate. The IOC mean for 2010/11-2019/20 is about 208 kt and for 1990/91-2009/10 about 162 kt, our calculation from SRC-TG-720. The 207 kt reference is therefore a modelled value close to the 2010s average, not a 1981-2010 production level.

## Why confidence is what it is

Medium. The direction (decline) is consistent across the summary note, the full study and the CCDR. The magnitude is not. The study is a single tier B consultancy model with acknowledged limits: no irrigated/rainfed split, only 15 years of observations, olive results more uncertain than cereal results, and some climate models showing favourable olive areas increasing under RCP8.5 by 2100 (SRC-TG-886). The CCDR figures conflict with the final tables. No independent peer-reviewed projection was opened. The range (-11% to -70%) is wide, and its upper end depends on the RCP8.5 2100 case and the variable-area method.

## Links to other sectors

- **Water.** The study sees irrigated expansion as the main partial offset and notes that conventional water availability will decline (SRC-TG-886). Its executive summary warns that shrinking water resources in the Centre and South, which depend on often overexploited aquifers, could cut wage work for rural women in olive and fruit fields (SRC-TG-886). Aquifer limits belong to the water lane.
- **Economy and jobs.** Olive oil is the largest agricultural earner of foreign currency, 29% on average over the last decade according to SRC-TG-886. It supports more than 300,000 producers and about 50 million working days a year (SRC-TG-886, section 2.4.1).

## Leads for phase 2

- National Adaptation Plan (PNA) for food security, Adapt'Action facility (AFD/MARHP) adaptation options (SRC-TG-729, SRC-TG-886)
- Intercropping cereals between olive trees, named in SRC-TG-886
- ClimOliveMed (2021-2026) and AGRO-ECOLIVMED (PRIMA, from 2026) research on olive adaptation (SRC-TG-724)
- Northward shift of olive suitability, with area growth in the Centre and North (SRC-TG-886)
