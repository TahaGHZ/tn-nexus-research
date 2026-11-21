---
id: FND-TG-310
title: Transport was Tunisia's largest final-energy consumer in 2024, with petroleum products supplying about 90%
status: in-review
sectors:
  - energy
theme: transport-energy
timeframe: current
period: 2024
geography:
  - national
severity: high
trend: unknown
confidence: high
root_causes:
  - cause: Transport energy use is concentrated in road transport, and the transport balance is dominated by petroleum products; the available
      balance describes this structure but does not establish its underlying behavioural, economic or policy causes.
    type: technical
    legacy_decision: false
    sources:
      - SRC-TG-222
indicators:
  - name: Transport final energy consumption
    value: 2721
    unit: ktep
    year: 2024
    geography: national
    source: SRC-TG-222
  - name: Transport share of national final energy demand (ONEM narrative)
    value: 35
    unit: percent
    year: 2024
    geography: national
    source: SRC-TG-222
  - name: Petroleum-products subtotal in transport final energy balance
    value: 2437
    unit: ktep
    year: 2024
    geography: national
    source: SRC-TG-222
  - name: Petroleum products as share of transport final energy consumption (calculated from ONEM balance; ONEM prints 89.5% in Figure 13)
    value: 89.6
    unit: percent
    year: 2024
    geography: national
    source: SRC-TG-222
  - name: Road transport final energy consumption
    value: 2423
    unit: ktep
    year: 2024
    geography: national
    source: SRC-TG-222
  - name: Road transport as share of transport final energy consumption (calculated from ONEM balance; ONEM text says 89% and Figure 12 prints 89.1%)
    value: 89
    unit: percent
    year: 2024
    geography: national
    source: SRC-TG-222
stakeholders:
  - transport users
  - Ministry of Transport
  - Ministry of Industry Mines and Energy
  - STIR
  - fuel importers
related:
  - FND-TG-131
  - FND-TG-161
sources:
  - SRC-TG-222
  - SRC-TG-290
  - SRC-TG-311
  - SRC-TG-312
  - SRC-TG-313
data_gaps:
  - ONEM's 2024 report gives transport as 35% of final demand in its narrative and sector summary table when biomass is included, but gives 37%
    in the same table excluding biomass. The report text also says the transport share rises to 37% excluding biomass. Because 37% is denominator-specific,
    the finding uses the 35% with-biomass value; no unresolved conflict remains in the denominator-labelled published figures.
  - 'Not independently reopened: the ANME transport profile figures (undated 36% share, road 90%, more than 55% of petroleum-product use) (SRC-TG-313).'
  - No current fleet fuel-efficiency series or recent transport-mode split was verified; this finding does not estimate avoidable fuel imports.
  - The national balance and sector profile describe the end-use mix, not causal drivers such as passenger versus freight activity, fleet age,
    travel demand or modal policy.
author: TahaGHZ
---

## Problem

ONEM's 2024 national energy balance records 2,721 ktep of final energy consumption by transport, the largest sector. The report narrative gives its share as 35%; Table 6 reports 35% with biomass included and 37% without biomass, and the accompanying text explicitly says the share rises to 37% when biomass is excluded. The percentage differs by denominator, not because of a second transport total (SRC-TG-222).

In the detailed 2024 balance, petroleum products total 2,437 ktep of transport's 2,721 ktep, or 89.6% (calculated from the source values). The road row is 2,423 ktep, or 89.0% of transport consumption (also calculated from source values). These are distinct indicators: petroleum is an energy-carrier subtotal, while road is an end-use sub-sector. The table also shows non-petroleum inputs, so petroleum is dominant rather than exclusive (SRC-TG-222).

ANME's transport profile independently describes transport as the largest energy-consuming sector and gives an undated 36% share, with road at 90% of transport use and transport responsible for more than 55% of national petroleum-product use. Because the page does not date those figures and its aggregate wording does not resolve ONEM's internal 2024 discrepancy, it is used only as a separate, undated corroboration of the broad sector pattern (SRC-TG-313). ONEM reports that transport final consumption rose 4% in 2024 compared with 2023; this is a single-year change, so no multi-year trend is claimed (SRC-TG-222). The finding links transport activity to liquid-fuel demand without repeating the national import-bill issue in FND-TG-131.

## Root causes

The balance establishes concentration in road transport and petroleum products, not why that pattern exists. It does not separate passenger and freight demand, fleet age or efficiency, travel demand, or the effects of transport policy. The structural description is therefore not presented as a demonstrated causal explanation.

## Evidence

The dated primary evidence is ONEM's official 2024 national energy balance and accompanying report (SRC-TG-222). It directly reports the 2,721 ktep transport total, 2,437 ktep petroleum subtotal and 2,423 ktep road row; the 89.6% and 89.0% ratios are arithmetic derived from those reported values. The report presents the 35% share including biomass and the 37% share excluding biomass. ANME's undated profile (SRC-TG-313) offers secondary corroboration, not a replacement dated series. The World Bank's 2022 fuel-supply context in SRC-TG-311 is not used to infer 2024 imports. The national energy-management strategy (SRC-TG-290) is retained as context for the phase-2 lead, not as evidence for the 2024 indicators.

## Why confidence is what it is

High for the official 2024 transport total, its first-place ranking, and the two calculated composition ratios. ONEM's 35% share includes biomass; its 37% share excludes biomass. No causal claim is made about why road transport dominates.

## Links to other sectors

Fuel use connects transport to refining and imported petroleum supply. This finding describes end use and does not quantify the import-bill effect.

## Leads for phase 2

- Transport efficiency actions described in the national energy-management strategy (SRC-TG-290).

## Verification

ONEM’s 2024 balance records 2,721 ktoe consumed by transport, including 2,437 ktoe of petroleum products. ANME independently identifies transport as the largest sector, without dating its percentage; use ONEM for the 2024 share (SRC-TG-312, SRC-TG-313).

**Independent review, 21 November 2026:** pass after corrections. Checked ONEM Rapport Bilan Énergétique 2024 (SRC-TG-222): Tableau 6 (printed p. 18, transport 2,721 ktep, 35% with biomass and 37% without), section 1.4 (p. 17, transport the first consuming sector), the national balance (petroleum products 2,437 ktep; road 2,423 ktep), Figures 12 and 13 (p. 20, printed 89.1% road and 89.5% petroleum products) and the transport text (p. 20, +4% against 2023, 89% road, about 90% petroleum products). Corrections: the calculated shares now note the percentages ONEM prints (89.5% and 89.1%); the trend field is set to unknown because the previous "worsening" rested on a single year (+4% in 2024, now stated as such). The ANME corroboration was not reopened and is listed in data_gaps. Independent teammate sign-off is outstanding; reviewer and author share the TahaGHZ identity, so the record is not validated.
