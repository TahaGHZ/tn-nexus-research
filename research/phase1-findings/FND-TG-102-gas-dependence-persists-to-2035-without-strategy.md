---
id: FND-TG-102
title: Official scenarios to 2035 see gas dependence growing under current trends, and the planned alternative relies on a large renewable build-out and new gas infrastructure
status: in-review
sectors: [energy]
theme: electricity-mix
timeframe: predicted
period: horizon 2035
geography: [national]
severity: high
trend: unknown
confidence: low
root_causes:
  - cause: Demand keeps growing (peak demand up 5.5% a year in 2016-2022) while domestic hydrocarbon output declines. If nothing changes, the energy deficit, and with it imported gas for power, keeps widening.
    type: economic
    legacy_decision: false
    sources: [SRC-TG-103, SRC-TG-105]
  - cause: The gas-based fleet inherited from past choices (FND-TG-100) means that new demand is met by gas unless renewable capacity is added at a rate far above the historical pace.
    type: technical
    legacy_decision: true
    sources: [SRC-TG-103, SRC-TG-105, SRC-TG-100]
  - cause: The strategy itself plans more gas infrastructure (Zarat field, LNG terminal, conventional capacity, Skhira combined cycles) alongside renewables. Gas would remain the largest primary energy source in 2035 even if the strategy succeeds.
    type: policy
    legacy_decision: false
    sources: [SRC-TG-103, SRC-TG-104]
indicators:
  - name: Natural gas share of primary energy mix, business-as-usual scenario
    value: 59
    unit: "%"
    year: 2035
    geography: national
    source: SRC-TG-103
  - name: Natural gas share of primary energy mix, strategy scenario
    value: 44
    unit: "%"
    year: 2035
    geography: national
    source: SRC-TG-103
  - name: Natural gas share of primary energy mix (base year)
    value: 56
    unit: "%"
    year: 2021
    geography: national
    source: SRC-TG-103
  - name: Energy deficit as share of demand, trend scenario (the 2021 base of 57% is stated excluding royalty; the 2035 figure carries no such qualifier)
    value: 95
    unit: "%"
    year: 2035
    geography: national
    source: SRC-TG-103
  - name: Energy dependence, strategy scenario, low end of range (fast fossil resource development)
    value: 33
    unit: "%"
    year: 2035
    geography: national
    source: SRC-TG-103
  - name: Energy dependence, strategy scenario, high end of range (slow fossil resource development)
    value: 76
    unit: "%"
    year: 2035
    geography: national
    source: SRC-TG-103
  - name: Renewable capacity target, strategy p. 17 (also used by the World Bank)
    value: 8350
    unit: MW
    year: 2035
    geography: national
    source: SRC-TG-103
  - name: Renewable capacity target, strategy p. 12 (conflicting figure in the same document)
    value: 8530
    unit: MW
    year: 2035
    geography: national
    source: SRC-TG-103
  - name: Renewable capacity target
    value: 4800
    unit: MW
    year: 2030
    geography: national
    source: SRC-TG-105
  - name: Installed renewable capacity (base for targets)
    value: 516
    unit: MW
    year: 2023
    geography: national
    source: SRC-TG-105
  - name: Peak-hour shortage risk (no year stated; as assessed in the April 2025 appraisal)
    value: 770
    unit: MW
    year: 2025
    geography: national
    source: SRC-TG-105
projection:
  horizon: 2035
  scenario: Business as usual (trend) against the "stratégie" scenario of the national energy strategy to 2035 (adopted April 2023)
  method: Business-as-usual and strategy scenarios prepared by the ministry with UNDP support. The synthesis does not name the energy model used for these scenarios. It names the ThreeME general equilibrium model only for the macroeconomic effects (GDP, jobs). The electricity-sector modelling and generation mix are not published in the synthesis.
  source: SRC-TG-103
stakeholders: [Ministry of Industry Mines and Energy, STEG, ETAP, ANME, private renewable developers, Sonatrach, electricity consumers]
related: [FND-TG-100, FND-TG-101]
sources: [SRC-TG-100, SRC-TG-103, SRC-TG-104, SRC-TG-105, SRC-TG-106]
data_gaps:
  - The NDC 3.0 power-mix target. An unverified press report, Webmanager Center (19 May 2026, tier C), says it targets at least 50% solar and wind in the power mix by 2035. The author did not open that article. The UNFCCC registry file (https://unfccc.int/sites/default/files/2026-04/Document%20CDN3.0%20-version%20Finale.pdf) returned an empty HTML response to both curl and WebFetch, so the target is unverified and not used.
  - No projection of the electricity generation mix (share of gas in TWh or %) for 2030 or 2035 was found. The strategy synthesis gives only the primary-energy mix and renewable capacity targets. The full strategy report, STEG's generation expansion plan and the least-cost 10-year plan required under TEREG (DLR 8.1, SRC-TG-105) were not found online.
  - No official electricity demand forecast (TWh, peak MW) to 2030 or 2035 was found. Only historical peak growth (5.5% a year in 2016-2022, SRC-TG-105) is sourced.
  - No IEA or IRENA scenario specific to Tunisia's power mix was opened. The IEA country page returned HTTP 403.
  - How much gas the planned LNG terminal, the Zarat field and the ELMED interconnector would supply, or displace, in the power sector.
  - Whether the 2019 World Bank expectation of a gas shortage "starting in 2023" (SRC-TG-104) happened. Assessing this belongs to the energy-imports topic.
  - The 2030 renewable-share target of the updated strategy. The strategy synthesis cites only the earlier 2016 target of 30% of the electricity mix and states no 2030 share for the new strategy (SRC-TG-103). IRENA gives 30% (SRC-TG-106). The World Bank attributes 35% "in the energy mix" by 2030 to the updated strategy (SRC-TG-105). No primary text for 35% was found.
author: TahaGHZ
---

## Problem

The official outlook to 2035 does not show Tunisia leaving gas behind. In the ministry's
business-as-usual scenario, natural gas rises from 56% of primary energy in 2021 to 59% in 2035, and
the energy deficit could reach 95% of demand (SRC-TG-103). The strategy itself names electricity
generation, "dépendante depuis plusieurs années du gaz naturel", as the most vulnerable part of the
energy sector (SRC-TG-103). Even in the strategy scenario, gas would still be 44% of primary energy
in 2035, the largest single source (SRC-TG-103). Energy dependence would be between 33% and 76%
depending on how fast fossil resources are developed (SRC-TG-103). Getting there requires renewable
capacity to grow from 516 MW (end of 2023) to 4,800 MW in 2030 and 8,350 MW in 2035 (SRC-TG-105,
SRC-TG-103). That is about a 16-fold increase in 12 years.

This finding rests on primary-energy scenarios and capacity targets, not on a published projection
of the electricity mix. No such projection was found (see data_gaps).

## Root causes

- **Demand growth on a gas fleet.** Peak demand grew 5.5% a year in 2016-2022 while new generation
  investment lagged. The appraisal estimates a 770 MW peak-hour shortage risk, about 16% of peak
  (SRC-TG-105). Peak demand reached a record 5,089 MW in January-September 2026 (SRC-TG-100). With a
  fleet that is over 90% gas (FND-TG-101), added demand is met by gas unless renewables grow faster.
- **Gap between targets and the pace achieved.** The 30% renewable-electricity target for 2030 was set
  in 2016 (SRC-TG-103, SRC-TG-106). The World Bank cites 35% for the updated strategy (SRC-TG-105). Renewables were 8.3% of production in January-September 2026
  (SRC-TG-100). The 2035 capacity target needs a build rate far above what has been achieved. The
  barriers are covered under the renewables topic.
- **Gas stays in the plan.** The strategy's investment list includes the Zarat gas field by 2030, an
  LNG terminal in 2027-2030, "les capacités conventionnelles de production électrique nécessaire",
  the Oued El Maleh pumped-storage plant and the link to Italy (SRC-TG-103). The World Bank in 2019
  described two new 500 MW combined-cycle plants at Skhira as "essential to provide grid stability"
  (SRC-TG-104). The strategy changes where the gas comes from (LNG, Zarat) and how much is needed. It
  does not remove gas from the power system.

## Evidence

- Primary energy mix, oil products / gas / renewables: 2021 43/56/1; 2035 BaU 39/59/1; 2035 strategy
  38/44/18 (SRC-TG-103, figure 5).
- Deficit: 57% of demand in 2021 (excluding royalty), possibly 95% in 2035 on the trend (no qualifier stated for 2035)
  (SRC-TG-103). The World Bank gives 52% for 2023 (SRC-TG-105). The definitions may differ.
- Renewable targets: 8,530 MW (p. 12) and 8,350 MW (p. 17) for 2035 in the same strategy synthesis
  (SRC-TG-103); 8,350 MW and 4,800 MW for 2030 in SRC-TG-105. The Tunisian Solar Plan's earlier
  target was 3,815 MW in 2030 (SRC-TG-106).
- Renewable-share target for 2030: 30% of electricity was the 2016 target (SRC-TG-103, SRC-TG-106).
  The World Bank attributes 35% "in the energy mix" to the updated strategy (SRC-TG-105). The
  synthesis gives no figure for the updated strategy.

## Why confidence is what it is

Low. The projection comes from one official scenario document available only as a synthesis
(SRC-TG-103), which gives no electricity-mix numbers. Some values were read from chart labels. Its
own 2035 renewable target is given twice with different numbers. The other forward-looking figures
are World Bank appraisal statements (SRC-TG-104, SRC-TG-105), not independent models. The direction
is consistent across sources: gas dependence persists or grows unless renewables and efficiency
deliver at an unprecedented rate. The size of the effect on the electricity mix is not sourced.

## Links to other sectors

None found in the sources opened for the projection period. The current link to water pumping and
agricultural electricity use is described in FND-TG-101.

## Leads for phase 2

- Stratégie énergétique de la Tunisie à l'horizon 2035 and its 2023-2025 action plan: https://energiemines.gov.tn/fileadmin/docs-u1/synth%C3%A8se_strat%C3%A9gie_2035.pdf
- Zarat gas field development, LNG import infrastructure (2027-2030), Oued El Maleh pumped storage (SRC-TG-103).
- ELMED Tunisia-Italy interconnector (SRC-TG-103, SRC-TG-105).
- World Bank TEREG programme (P507304), including STEG's least-cost 10-year generation and transmission plan (DLR 8.1): https://projects.worldbank.org/en/projects-operations/project-detail/P507304
- Skhira 1 and 2 combined-cycle plants (SRC-TG-104).
- Renewable concession, authorisation and self-generation regimes under Law 2015-12 (SRC-TG-105, SRC-TG-106).
