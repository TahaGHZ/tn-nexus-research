---
id: FND-TG-427
title: Silt already fills about a quarter of Tunisia's large-dam capacity (81% at Mellègue), and without sediment countermeasures Sidi Salem is projected to lose 42% of its usable water-use volume within 30 years. Official estimates of the loss disagree.
status: draft
sectors: [water, agriculture, energy]
theme: surface-water
timeframe: predicted
period: dams commissioned 1954-2020; measured to 2014-2021 surveys; horizons 2030, 2050 and +10/+30/+100 years
geography: [national, north-west, kef, beja, siliana, kairouan]
severity: high
trend: worsening
confidence: medium
root_causes:
  - cause: High sediment yield from eroded catchments of the Medjerda system. Mean annual sediment supply to Sidi Salem is 10.6 Mm3/yr, mainly from the Mellègue, Tessa and upper Medjerda. Intense storms are the main driver.
    type: climatic
    legacy_decision: false
    sources: [SRC-TG-429, SRC-TG-430]
  - cause: Sidi Salem was designed with a sediment allowance far below what has arrived. Its planned sedimentation volume was 77 Mm3 (1972 height-volume curve), against 191-234 Mm3 measured by 2018. According to JICA, no sediment countermeasures for the reservoir had been proposed before its 2017-2018 SAPI study.
    type: technical
    legacy_decision: true
    sources: [SRC-TG-428, SRC-TG-438]
  - cause: The ministry recommended stronger catchment treatment and better synchronisation with dam works because curative desilting is costly; this suggests those measures were insufficiently aligned, an inference rather than an explicit diagnosis (SRC-TG-402).
    type: institutional
    legacy_decision: true
    sources: [SRC-TG-402]
indicators:
  - name: Silt measured in large dams vs their initial capacity (at last survey of each dam)
    value: 674.89 of 2,988.11 (22.6%)
    unit: Mm3
    year: 2021
    geography: national
    source: SRC-TG-438
  - name: Capacity loss of 30 monitored dams (useful 2,078 vs initial 2,787)
    value: 25
    unit: '%'
    year: 2017
    geography: national
    source: SRC-TG-402
  - name: Mellègue measured silt / percentage silted (survey 2014)
    value: 216.87 of 268.00 (80.92%)
    unit: Mm3
    year: 2014
    geography: kef
    source: SRC-TG-438
  - name: Mellègue useful capacity at 2014 survey
    value: 51.13
    unit: Mm3
    year: 2014
    geography: kef
    source: SRC-TG-438
  - name: Mellègue bulletin linear extrapolation
    value: 14.99
    unit: Mm3
    year: 2025
    geography: kef
    source: SRC-TG-442
  - name: Sidi Salem measured silt / percentage silted, DGBGTH (2018 survey, capacity 814 Mm3 at normal level)
    value: 233.65 (28.70%)
    unit: Mm3
    year: 2018
    geography: beja
    source: SRC-TG-438
  - name: Sidi Salem silt, JICA (gross storage 977 Mm3 incl. flood-control slice)
    value: 191 (about 20%); water-use capacity -23%
    unit: Mm3
    year: 2018
    geography: beja
    source: SRC-TG-428
  - name: Siliana measured silt / percentage silted
    value: 39.01 of 70.00 (55.73%)
    unit: Mm3
    year: 2020
    geography: siliana
    source: SRC-TG-438
  - name: Nebhana measured silt / percentage silted (2022 bathymetric survey, reported in 2023 bulletin)
    value: 21.89 of 86.50 (25.31%)
    unit: Mm3
    year: 2022
    geography: kairouan
    source: SRC-TG-440
  - name: Annual capacity loss rate of large reservoirs (ministry figure in 2007 national report)
    value: 1.07
    unit: '% per year'
    year: 2007
    geography: national
    source: SRC-TG-430
  - name: Annual capacity loss rate of reservoirs (DGBGTH figure cited in 2017 national report)
    value: 0.86
    unit: '% per year'
    year: 2017
    geography: national
    source: SRC-TG-402
  - name: Sidi Salem usable water-use volume lost without countermeasures (urgent scenario; implied base about 328 Mm3)
    value: 18% after 10 yrs; 42% after 30 yrs; 88% after 100 yrs
    unit: '% of water-use capacity'
    year: 2023
    geography: beja
    source: SRC-TG-428
projection:
  horizon: "'after 10 years, after 30 years, after 100 years' as written in the study (no base year stated; study published October 2023); Sidi Salem only"
  scenario: '"urgent scenario", no sediment countermeasures. With the proposed bypass tunnel the study gives 3.6 Mm3/yr of reservoir sedimentation (from 8.1) in its sediment budget, and 0.5 Mm3/yr in its water-use section'
  method: "Prediction calculation with the study's constructed analytical model of reservoir sedimentation; present state from the 1972 vs 2018 bed-elevation comparison (JICA preparatory survey)"
  source: SRC-TG-428
stakeholders: [DGBGTH, "DGACTA/DGCES (soil and water conservation)", SECADENORD, SONEDE, "irrigators of the Medjerda valley", "downstream flood-exposed communities of the lower Medjerda", "JICA and KfW as financiers"]
related: [FND-TG-425, FND-TG-426, FND-TG-500]
sources: [SRC-TG-438, SRC-TG-442, SRC-TG-440, SRC-TG-437, SRC-TG-436, SRC-TG-435, SRC-TG-434, SRC-TG-433, SRC-TG-432, SRC-TG-402, SRC-TG-428, SRC-TG-429, SRC-TG-430]
data_gaps:
  - "Ben Mammou and Louati (2007), Revue des sciences de l'eau 20(2), the source of the widely quoted '0.5-1% per year' and '43% loss by 2030'. Érudit returned a bot-check page and the paper was not opened. The 43%/2030 figure is used here only as quoted by SRC-TG-402 (citing ONAGRI, April 2018)."
  - Recent bathymetric surveys. Many reference surveys in the 2021 bulletin are 10-20 years old (e.g. Nebhana 2010, Mellègue 2014), so 'measured' silt understates the present volume.
  - A national projection of total useful capacity to 2050 with a stated method. SRC-TG-402 lists per-dam 2050 figures without method.
  - "Hill dams and hill lakes: SRC-TG-402 states that no data exist on their useful capacity ('ces infrastructures ne bénéficiant d'aucun suivi régulier'); SRC-TG-430 gives a 4.6%/yr loss rate from 2007."
  - "Not independently reopened: the Sidi Salem water-use losses of 18% (10 yrs), 42% (30 yrs) and 88% (100 yrs) with 59, 138 and 288 Mm3 (SRC-TG-428). The reviewer confirmed only the 100-year total (about 510 Mm3, about 50% of 960 Mm3) in the JICA summary text; the percentages sit in figures not readable in the text layer. The headline 42% depends on them."
  - "Not independently reopened: JICA statement that no sediment countermeasures for Sidi Salem had been proposed before the 2017-2018 SAPI study (SRC-TG-428); the 8.1 Mm3/yr figure appears in JICA only in a table without its context."
  - "Not independently reopened by the reviewer, whose local copy of SRC-TG-430 was a different FAO-hosted document: the 2007 plan's 1.07%/yr (large reservoirs) and 4.6%/yr (hill lakes) loss rates and the 2,200 to 1,800 Mm3 forecast, which rest on the extract pasted in SRC-TG-430. The reviewer's reading of the other copy was 2,200 Mm3 as current capacity with 17.25 Mm3/yr siltation; the two copies disagree and the edition needs to be settled."
  - Cost of siltation. SRC-TG-402 quotes a World Bank 2007 range of 13-29.3 M$, which was not opened.
  - Meaning of the bulletin's total 'annual siltation' column (24.03 Mm3/yr in 2017, 13.78 in 2021). It does not equal the sum of the per-dam rows and was not used.
author: TahaGHZ
---

## Problem

Tunisia's large dams lose storage to silt every year. The 2021 DGBGTH bulletin records 674.89 Mm3 of measured silt against 2,988.11 Mm3 of initial capacity, about 22.6% (SRC-TG-438). The 2017 national report puts the loss at 25% for 30 dams (SRC-TG-402). Mellègue is one of Tunisia's two oldest large dams, alongside Ben Métir; its 2014 survey found 81% siltation: its useful capacity was 51.13 Mm3 at the 2014 survey, against 268 Mm3 initial (SRC-TG-438). The bulletin extrapolates this linearly to 14.99 Mm3 of "calculated useful capacity" by September 2025. That figure is not a measurement: the same bulletin shows 25.0 Mm3 stored in Mellègue on that date (SRC-TG-442). Sidi Salem, the hub of the northern transfer system, has lost between 20% and 34% of its capacity depending on the source and its base (see Evidence). JICA projects that, without countermeasures, Sidi Salem will lose 42% of its usable water-use volume within 30 years and 88% within 100 years. The percentages imply a base of about 328 Mm3; this is a smaller base than the water-use slice behind the "-23% to date" figure. Its water-use capacity could fall below the 270-300 Mm3/yr it supplies in as little as 10 years (SRC-TG-428). This is not a sudden event. The ministry had already forecast in 2007 that useful storage would decline from 2,200 Mm3 (2005) to 1,800 Mm3 (2020) (SRC-TG-430).

## Root causes

- **Symptom:** shrinking reservoir capacity.
- **Physical cause:** erosion of the Medjerda catchments. The mean sediment supply to Sidi Salem is 10.6 Mm3/yr, of which 2.6 comes from the Mellègue, 3.8 from the Tessa and 3.9 from the upper main stem (SRC-TG-429). The 2007 ministry report blames "pluies orageuses très intenses" (SRC-TG-430).
- **Decision-level causes:**
  1. **Design allowance.** Sidi Salem's design sediment volume was 77 Mm3 on the 1972 height-volume curve (SRC-TG-428, Fig. 3-2 label). The measured volume is 191 Mm3 (JICA) to 233.65 Mm3 (DGBGTH, 2018 survey), and much of it has settled in the water-use and flood-control slices. JICA notes that no sediment countermeasures for the reservoir had been proposed before its 2017-2018 SAPI study (SRC-TG-428).
  2. **Catchment treatment and dam works.** The 2017 report recommends stronger catchment treatment and better synchronisation with hydraulic works because curative desilting is costly. This implies an alignment gap, but the report does not explicitly state that the two were not synchronised; that causal interpretation is an inference (SRC-TG-402, section VII.3).
     > Les opérations curatives de dévasement étant très coûteuses, l'accent serait à mettre sur un renforcement des actions de traitement des bassins versants et une meilleure synchronisation de celles-ci avec les travaux d'aménagement des ouvrages hydrauliques afin de ralentir / réduire l'envasement des barrages.
  3. **Stock-based strategy.** The mobilisation strategy counted on reservoir volumes that silt erodes (FND-TG-426).

## Evidence

**Measured state (DGBGTH bulletin columns "Envasement mesuré / pourcentage d'envasement"):**
- Mellègue: 216.87 Mm3, 80.92% of 268.00 Mm3, with 51.13 Mm3 of useful capacity left (2014 survey). The bulletin's linear "calculated useful capacity" is 25.83 Mm3 in 2021 and 14.99 Mm3 in 2025. It is contradicted by the 25.0 Mm3 actually stored on 1 September 2025 (SRC-TG-438, SRC-TG-442). JICA gives about 219 Mm3, 81% in 60 years (SRC-TG-429).
- Siliana (1987): 39.01 Mm3, 55.73% of 70 Mm3 (2020 survey) (SRC-TG-438). JICA gives 52% in 25 years, as of 2012 (SRC-TG-429).
- Nebhana: 27.74 Mm3, 32.07% of 86.50 Mm3 (2010 survey) in bulletins up to 2022 (SRC-TG-438). From 2023 the bulletin shows 21.89 Mm3 (25.31%) and useful capacity raised from 58.76 to 64.61 Mm3 (SRC-TG-440), apparently after a new survey or recalculation that the bulletin does not explain.

**Sources disagree on Sidi Salem:**

| Source | Silt (Mm3) | Share lost | Base | Survey / date |
|---|---|---|---|---|
| DGBGTH bulletin 2015 (SRC-TG-432) | 170.88 | 20.99% | 814 Mm3 at normal level | 2006 survey |
| DGBGTH bulletin 2017 (SRC-TG-434) | 274.14 (8.31 Mm3/yr) | 33.68% | 814 Mm3 | 2014 survey (per bulletin note) |
| National report 2017 (SRC-TG-402) | about 8 Mm3/yr | "envasé à près de 34%" | not stated | 2017 |
| DGBGTH bulletin 2019-2025 (SRC-TG-438) | 233.65 (6.31 Mm3/yr) | 28.70% | 814 Mm3 | 2018 survey |
| JICA (SRC-TG-428) | 191 (6.6 Mm3/yr per SAPI; 8.1 Mm3/yr in its own sediment budget) | about 20% of gross; water-use capacity -23% | 977 Mm3 gross incl. flood-control slice | 2018 survey |

The DGBGTH series is not monotonic. A 2014 survey gave 274 Mm3, and the 2018 survey gave 234 Mm3, which is less silt four years later. This points to a change of method or reference curve that the bulletins do not explain. Mellègue shows a similar flip: the 2015, 2016, 2018 and 2019 bulletins print an initial capacity of 182.20 Mm3 with 131.07 Mm3 of silt (71.94%), while the 2017 and 2020-2025 bulletins print 268 Mm3 initial with about 217 Mm3 of silt (about 81%) (SRC-TG-432, SRC-TG-433, SRC-TG-434, SRC-TG-435, SRC-TG-436, SRC-TG-437, SRC-TG-438). Both the DGBGTH 2019+ figure and the JICA figure rest on a 2018 survey, but they differ by 43 Mm3. They also use different capacity bases: 814 Mm3 at normal retention level (115 m) versus 977 Mm3 gross storage including the flood-control slice. This record does not choose between them.

**National loss estimates:**
- 25% for 30 dams in 2017: useful 2,078 Mm3 vs initial 2,787 Mm3 (SRC-TG-402, section VII.1.2).
- 22.6% in 2021: 674.89 vs 2,988.11 Mm3 (SRC-TG-438).

The fall from 25% to 22.6% reflects the downward revision of Sidi Salem's silt (274 to 234 Mm3) and new dams added to the denominator, not any recovery.

**Annual loss rates:**
- 1.07% per year for large reservoirs and 4.6% per year for hill lakes (SRC-TG-430, 2007).
- 0.86% per year (DGBGTH, cited in SRC-TG-402, section VII.1.2).

**Projections (predicted):**
- **JICA, Sidi Salem, urgent scenario without countermeasures:** water-use capacity -18% (59 Mm3) after 10 years, -42% (138 Mm3) after 30 years and -88% (288 Mm3) after 100 years. Total sediment would reach about 510 Mm3 in 100 years, about 50% of 960 Mm3. With the project, the study gives reservoir sedimentation of 3.6 Mm3/yr instead of 8.1 Mm3/yr in its sediment budget, and says sedimentation could be controlled to 0.5 Mm3/yr in its water-use section (SRC-TG-428).
- **National report 2017, 2050 per-dam figures.** (SRC-TG-402):
  > Les estimations sur l'avenir de certains barrages en 2050 montrent que la capacité de stockage deviendra : 43% pour le barrage Sidi Salem, 38% pour le barrage de Nebhana, 6% pour le barrage de Siliana, 5% pour le barrage de Sidi Saad, 16% pour le barrage d'El Houareb, 18% pour le barrage de Chiba et 23% pour le barrage de Lebna.

  The sentence is ambiguous: it does not say whether these percentages are the capacity remaining or the capacity lost. No method is given.
- **National report 2017, 2030 figure.** The report quotes Ben Mammou and Louati (Université de Tunis El Manar), via an ONAGRI "vigilance" note of April 2018: "en 2030, la perte de capacité de stockage des barrages en exploitation pourrait atteindre 43 % de leur capacité initiale" (SRC-TG-402, footnote 16). The original paper was not opened.
- **2007 forecast.** Useful storage at normal level falls to 1,800 Mm3 by 2020 (SRC-TG-430).
  - The 2021 bulletin's total useful capacity is 2,313 Mm3 (SRC-TG-438), but that is the capacity at each dam's last survey and includes dams built after 2007.
  - The bulletin's "calculated useful capacity" total of 1,877 Mm3 leaves out dams with no survey.
  - So the 2007 forecast cannot be checked cleanly against current data.

## Why confidence is what it is

Medium.

**Solid:**
- Mellègue's loss, which is consistent across DGBGTH and JICA.
- The order of magnitude of the national loss (a fifth to a quarter of initial capacity), from tier A bulletins and the ministry report.

**Contested or weak:**
- Sidi Salem's figure: three official values (21%, 29%, 34%) and one donor value (20% of a different base).
- The 2050 per-dam figures, which are ambiguous and have no method.
- The 43%/2030 figure, which is second-hand.
- The only projection with a stated method (JICA) comes from a study prepared to justify a loan-financed countermeasure project.

## Links to other sectors

- **Agriculture.** Lost water-use capacity at Sidi Salem, Siliana and Nebhana directly reduces irrigation allocations in the Medjerda valley, Siliana and the Kairouan-Sahel area. Water from Nebhana is already contested between irrigation and Sahel drinking water (SRC-TG-402). The sediment comes from erosion of the Medjerda catchments (SRC-TG-429). Catchment soil loss belongs to the agriculture lane (soil theme).
- **Energy.** Sidi Salem carries a 36 MW hydropower plant (SRC-TG-438). No generation data were collected, so the effect of silt and low stock on output is not quantified here.
- **Flood risk.** JICA reports the flood-control capacity of Sidi Salem reduced by 5-6% (SRC-TG-428). JICA warns that flushing sediment downstream reduces the flow capacity of the lower Medjerda, which is why the countermeasure is paired with river works in zone D1 (SRC-TG-428).

## Leads for phase 2

- JICA Sidi Salem Comprehensive Sediment Management Project: sediment bypass tunnel, mechanical dredging, D1 river works (https://www.jica.go.jp/english/about/policy/environment/id/middle_east/a_b_fi/tunisia/c8h0vm0000ekm2zv.html).
- KfW-financed flood-control works in the U1, M and U2 zones upstream of Sidi Salem (SRC-TG-428).
- Dam heightening studies: Bou Hertma, Rmel, Nebhana, Sidi Saad, Ghezala; new Mellègue amont dam (SRC-TG-402).
- National soil and water conservation (CES) strategy adopted 2017; national strategy for planning and conservation of agricultural land to 2050 (SRC-TG-402, SRC-TG-429).
- JICA reforestation projects in the Béja region (SRC-TG-429, Figure 18-23).

## Verification

**Independent review, 21 November 2026:** not passed. Checked against the DGBGTH bulletins of 2015, 2017, 2020-2023 and 2025 (SRC-TG-432, 434, 437, 438, 440, 442: Sidi Salem, Mellègue, Siliana, Nebhana and TOTAL GENERAL silt rows), the national water report 2017 (SRC-TG-402, section VII.1.2: 25% loss for 30 dams, 0.86%/yr, 43% by 2030, 2050 per-dam figures), JICA vol. 1 (SRC-TG-428: 191 Mm3, -23% water-use capacity, 100-year total of about 510 Mm3, 77 Mm3 design allowance, 6.6 Mm3/yr) and JICA vol. 2 (SRC-TG-429: 10.6 Mm3/yr budget, Mellègue 219 Mm3, Siliana 52%). The measured-silt indicators and the 25% and 22.6% national figures were confirmed. No corrections to values; status moved from in-review to draft because the headline and the projection indicator (18/42/88% water-use loss for Sidi Salem) could not be located in the JICA text, and the SRC-TG-430 figures could not be rechecked in the original edition (see data_gaps). Independent teammate sign-off is outstanding; reviewer and author share the TahaGHZ identity, so the record is not validated.

**Outstanding verification:** open JICA vol. 1 part 2 (12385258_02.pdf) or the Figure 3-2 and Figure 6 pages of SRC-TG-428 to confirm -18%, -42% and -88% (59, 138 and 288 Mm3) for the urgent scenario, and open the original Plan Bleu 2007 Tunisia report (SRC-TG-430 URL) to confirm the 1.07%/yr, 4.6%/yr and 2,200 to 1,800 Mm3 passages.
