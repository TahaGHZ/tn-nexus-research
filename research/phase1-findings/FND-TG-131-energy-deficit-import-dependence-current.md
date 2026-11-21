---
id: FND-TG-131
title: Tunisia covered 35% of primary energy demand in 2025 including transit royalty, with a large energy trade deficit and reliance on Algerian
  gas
status: in-review
sectors:
  - energy
theme: energy-imports
timeframe: current
period: 2015-2026
geography:
  - national
severity: critical
trend: unknown
confidence: high
root_causes:
  - cause: Domestic oil and gas production kept falling after 2015. Gas production roughly halved and crude oil and condensate also roughly halved
      between 2015 and 2025, while demand grew.
    type: technical
    legacy_decision: true
    sources:
      - SRC-TG-221
  - cause: 'Exploration activity was low in the reported periods: ONEM recorded no permits granted and no discoveries in 2025; its September 2026
      bulletin records no permits granted or discoveries in January-September 2026, but two exploration wells. Valid permits numbered 12 at end-2025
      and 11 at end-September 2026. These observations document low activity and a small permit inventory, but do not establish why activity declined
      or that new discoveries alone would reverse production decline.'
    type: institutional
    legacy_decision: true
    sources:
      - SRC-TG-221
      - SRC-TG-100
      - SRC-TG-131
  - cause: Production has been repeatedly interrupted by social blockades, including the 2017 stop in the southern fields, the closure of the
      El Kamour valve from July to November 2020, and the occupation of the Douleb site from December 2020.
    type: behavioural
    legacy_decision: false
    sources:
      - SRC-TG-132
  - cause: Gas supply relies heavily on Algerian purchases and transit gas, and electricity is imported from Algeria and Libya. In 2025, purchased
      Algerian gas was 57% of reported national gas supply and the Algerian transit royalty passed to STEG was 20%; electricity purchases from
      Algeria and Libya covered 11% of the local market. ONEM says electricity imports began in June 2021 to address a limitation in gas purchases,
      without identifying the reason for that limitation. The origin of crude oil and petroleum product imports is not established by these records.
    type: economic
    legacy_decision: true
    sources:
      - SRC-TG-221
indicators:
  - name: Energy independence rate (primary resources / primary demand), royalty counted as national resource
    value: 35
    unit: '%'
    year: 2025
    geography: national
    source: SRC-TG-221
  - name: Energy independence rate, royalty excluded
    value: 27
    unit: '%'
    year: 2025
    geography: national
    source: SRC-TG-221
  - name: Energy independence rate, royalty counted (January-September)
    value: 32
    unit: '%'
    year: 2026
    geography: national
    source: SRC-TG-100
  - name: Energy independence rate, royalty excluded (January-September)
    value: 26
    unit: '%'
    year: 2026
    geography: national
    source: SRC-TG-100
  - name: Primary energy deficit, royalty counted
    value: 6305
    unit: ktep
    year: 2025
    geography: national
    source: SRC-TG-221
  - name: Primary energy deficit, royalty counted
    value: 3697
    unit: ktep
    year: 2015
    geography: national
    source: SRC-TG-221
  - name: Energy trade deficit (ONEM, company data)
    value: 11023
    unit: million TND
    year: 2025
    geography: national
    source: SRC-TG-221
  - name: Energy trade deficit (INS, customs data)
    value: 10869.5
    unit: million TND
    year: 2024
    geography: national
    source: SRC-TG-134
  - name: Energy share of total trade deficit (computed, 10869.5 / 18927.6)
    value: 57
    unit: '%'
    year: 2024
    geography: national
    source: SRC-TG-134
  - name: Energy share of total trade deficit (computed, January-November)
    value: 51
    unit: '%'
    year: 2025
    geography: national
    source: SRC-TG-135
  - name: Crude oil imports by value
    value: 1362
    unit: million TND
    year: 2025
    geography: national
    source: SRC-TG-221
  - name: Petroleum products imports by value
    value: 7762
    unit: million TND
    year: 2025
    geography: national
    source: SRC-TG-221
  - name: Natural gas imports by value
    value: 4225
    unit: million TND
    year: 2025
    geography: national
    source: SRC-TG-221
  - name: Purchased Algerian gas as share of national gas supply
    value: 57
    unit: '%'
    year: 2025
    geography: national
    source: SRC-TG-221
  - name: Purchased Algerian gas
    value: 2824
    unit: ktep-pci
    year: 2025
    geography: national
    source: SRC-TG-221
  - name: Electricity imports from Algeria and Libya
    value: 2463
    unit: GWh
    year: 2025
    geography: national
    source: SRC-TG-221
  - name: Domestic natural gas production
    value: 1129
    unit: ktep-pci
    year: 2025
    geography: national
    source: SRC-TG-221
  - name: Crude oil and condensate production
    value: 1231
    unit: ktep-pci
    year: 2025
    geography: national
    source: SRC-TG-221
  - name: Valid hydrocarbon permits (end-year)
    value: 12
    unit: permits
    year: 2025
    geography: national
    source: SRC-TG-100
  - name: Valid hydrocarbon permits (end-September)
    value: 11
    unit: permits
    year: 2026
    geography: national
    source: SRC-TG-100
stakeholders:
  - Ministry of Industry Mines and Energy
  - ONEM
  - ETAP
  - STEG
  - STIR
  - Sonatrach
  - Sonelgaz
  - Central Bank of Tunisia (foreign exchange)
  - Ministry of Finance
  - communities in producing regions
  - energy consumers
related:
  - FND-TG-130
  - FND-TG-132
  - FND-TG-101
  - FND-TG-100
  - FND-TG-161
sources:
  - SRC-TG-100
  - SRC-TG-131
  - SRC-TG-132
  - SRC-TG-133
  - SRC-TG-134
  - SRC-TG-135
  - SRC-TG-140
  - SRC-TG-221
data_gaps:
  - Origin (supplier countries) of crude oil and petroleum product imports, which are about two thirds of the energy import bill by value (SRC-TG-221).
    Not found in any opened source.
  - Full-year 2025 INS trade note (customs data). The URLs tried (Note_Ann%C3%A9e_2025.pdf, Note_Comext_12_mois_2025.pdf, Note_comext_Dec_25.pdf
    under https://www.ins.tn/sites/default/files-ftp3/files/publication/pdf/) returned HTML, not a PDF. Press reports a 2025 total deficit of
    21,800.3 MD, but it was not opened from INS and is not used.
  - Gas purchase price and contract terms with Sonatrach (oil indexation, take-or-pay, payment arrears). Not found in any opened source.
  - Central Bank (BCT) figures on the energy bill's weight in the current account and on foreign-exchange pressure. bct.gov.tn was not opened.
  - Quantified production losses from the 2017 and 2020 El Kamour blockades. The ONEM chart marks the events but gives no volumes (SRC-TG-132).
  - Drivers of falling domestic oil and gas production and the reduced exploration activity are not established by the indicators cited here.
  - Why gas purchases were "limited" from 2021 (contract volume, price or payment capacity). The ONEM footnote does not say (SRC-TG-221).
  - 'Diversification of supply away from Algeria (LNG, other pipelines): no current import source other than Algeria and Libya appears in the
    bulletins.'
  - A harmonised independent series for net energy imports or energy dependence was not checked.
author: TahaGHZ
---

## Verification status

The national energy balance and trade series are dated and their denominators identified. January–November trade shares are separate from annual energy independence; low exploration activity is described as an observation rather than a quantified cause.

## Problem

In 2025 Tunisia's own primary energy resources covered 35% of its primary demand, counting the
Algerian gas transit royalty as a national resource. Without the royalty, coverage was 27%
(SRC-TG-221). In 2024 the figures were 41% and 31%. In January-September 2026 coverage fell
further, to 32% and 26% (SRC-TG-100). On the same classic basis, coverage was about 59% in 2015
(5,219 of 8,916 ktep, computed from SRC-TG-221). The primary deficit grew from 3.7 Mtep in 2015 to
6.3 Mtep in 2025 (SRC-TG-221). The energy trade deficit was 11.0 billion TND in 2025 by ONEM's
count (SRC-TG-221). On customs data, energy was 57% of the whole trade deficit in 2024 and 51% in
January-November 2025 (SRC-TG-134, SRC-TG-135, computed). By value, the 2025 import bill was
mostly petroleum products (7,762 MTND) and crude oil (1,362 MTND). Natural gas was 4,225 MTND,
about 32% (SRC-TG-221, computed). The origin of the oil imports is not documented in the sources
opened. Purchased Algerian gas was 57% of reported national gas supply in 2025; Algerian transit royalty accounted for another 20%. Electricity imports from Algeria and Libya covered 11% of the local market (SRC-TG-221).

## Root causes

The evidence documents falling domestic production and a growing primary-energy deficit over 2015–2025, alongside a 2025 deterioration from 2024. It does not identify all causal mechanisms; the factors below are observed conditions or plausible contributors, with limits stated.

- **Continued depletion (technical, legacy).** The 2010-2015 production collapse (FND-TG-130) did
  not stop. Between 2015 and 2025, domestic gas production fell from 2,231 to 1,129 ktep-pci, and
  crude oil and condensate from 2,394 to 1,231 ktep-pci (SRC-TG-221). Both roughly halved.
  Primary demand rose from 8,916 to 9,684 ktep (SRC-TG-221).
- **Low recorded exploration activity (institutional context; causal link unestablished).** In 2019, 6 permits were granted, 6 exploration wells drilled and 4 discoveries made (SRC-TG-131). No permits were granted in 2024 or 2025; ONEM reports no exploration wells or discoveries in 2025 and three permit abandonments. The September 2026 bulletin reports no permits granted or discoveries in January-September 2026, but records two exploration wells. Valid permits fell from 25 at end-March 2020 to 12 at end-2025 and 11 at end-September 2026 (SRC-TG-131, SRC-TG-221, SRC-TG-100). The sources do not establish why activity fell or quantify an effect on future production.
- **Social blockades (behavioural).** ONEM's own production chart marks "Arrêt de la production
  dans les champs de sud en 2017" and the closure of the El Kamour valve from 16 July to 5
  November 2020. Production at the Douleb, Semama and Tamesmida concessions stopped totally after
  protesters occupied the site on 11 December 2020 (SRC-TG-132). These are disruptions on top of
  the structural decline, not its main cause.
- **Concentration on Algeria (economic, legacy).** The legacy of building the power system on
  Algerian transit gas is covered in FND-TG-100. Algerian purchases rose 23% in 2025, to 2,824 ktep-pci, and their share of supply rose from
  51% to 57% (SRC-TG-221). Royalty gas fell 13% (SRC-TG-221). Since June 2021, electricity has
  been imported from Algeria and Libya "pour faire face à la limitation des achats de gaz"
  (SRC-TG-221). These purchases went from zero in 2015 to 3,125 GWh in 2024 and 2,463 GWh in 2025,
  11% of the local market (SRC-TG-221).

## Evidence

- Independence rate: 41% / 31% in 2024 and 35% / 27% in 2025, with / without royalty (SRC-TG-221).
  January-September: 36% / 27% in 2025 and 32% / 26% in 2026 (SRC-TG-100). For reference: 43% in
  2020 and 52% in 2021 (SRC-TG-133). The 2021 rate coincided with an 85% rise in royalty gas.
- **Vintages disagree slightly.** The December 2025 bulletin gives 2025 resources of 3,378 ktep,
  demand of 9,684 and a balance of -6,305 (SRC-TG-221). The September 2026 bulletin's revised 2025
  column gives 3,391, 9,639 and -6,248 (SRC-TG-100). The direction of the finding is unchanged, though the precise revised balance differs by vintage.
- **Trade deficit, two measurements.** ONEM, from company data: 10,745 MTND in 2024 and 11,023
  MTND in 2025 (SRC-TG-221). INS, from customs: 10,869.5 MTND in 2024, 9,665.7 in 2023, and
  10,308.4 for January-November 2025 (SRC-TG-134, SRC-TG-135). Energy imports were 13,349 MTND in
  2025, and gas purchases 4,225 MTND of that, about 32% (SRC-TG-221, computed).
- Gas supply shares, 2024 and 2025: domestic 27% and 23%, royalty 22% and 20%, purchases 51% and
  57% (SRC-TG-221). January-September 2026: 22% / 22% / 56% (SRC-TG-100).
- Algeria was Tunisia's third-largest bilateral trade deficit in 2024, at -4,357 MD (SRC-TG-134).
  The note does not break this down by product.

## Why confidence is what it is

High for the size of the deficit and the dependence. All core figures come from the official ONEM
bulletins and INS notes (tier A), checked against page images. The two measures use different accounting bases and are close in 2024; they are not identical. The weaker points are the blockades' quantified effect (only chart
annotations) and the reason gas purchases were "limited" from 2021, which no source opened
explains. The 2025 customs trade share is based on January-November INS data and is not a full-year figure.

## Links to other sectors

None found in the sources opened. The effect on power generation and on electricity-dependent
water pumping and irrigation is covered in FND-TG-101.

## Leads for phase 2

- Stratégie énergétique de la Tunisie à l'horizon 2035, fossil resource development and supply diversification (Zarat field, LNG infrastructure, STIR extension): https://energiemines.gov.tn/fileadmin/docs-u1/synth%C3%A8se_strat%C3%A9gie_2035.pdf
- Sonatrach-STEG gas purchase contract (3 March 1997, amended 2020): SRC-TG-140.
- Electricity imports from Sonelgaz (Algeria) and Gecol (Libya) as a stop-gap (SRC-TG-221).
- New exploitation concessions granted in 2025: "Aziza" (7 July 2025) and "Sabah" (7 October 2025) (SRC-TG-221).
- Agreements ending the El Kamour blockades (2017, 2020): seen only as the events marked on the ONEM chart (SRC-TG-132); no agreement text was opened.
