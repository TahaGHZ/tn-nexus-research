---
id: FND-TG-220
title: Tunisia's summer electricity peak is rising while modeled capacity margins are tight; imports and demand response support adequacy
status: draft
sectors:
  - energy
theme: grid
timeframe: current
period: 2014-2026
geography:
  - national
severity: high
trend: worsening
confidence: medium
root_causes:
  - cause: Generation capacity additions have lagged peak-demand growth; the World Bank attributes system tightness to low investment and reports
      financial constraints that have exacerbated STEG's capacity expansion plan and affected distribution investment.
    type: economic
    legacy_decision: false
    sources:
      - SRC-TG-105
      - SRC-TG-224
  - cause: Thermal generation availability falls in high temperatures, when demand peaks; the World Bank says this reduced the real reserve capacity
      below 10% at the 2022 peak.
    type: technical
    legacy_decision: false
    sources:
      - SRC-TG-224
      - SRC-TG-234
  - cause: High temperatures and cooling consumption drive the summer maximum; STEG's spokesperson was also reported saying heat damaged lines
      and equipment during the July 2023 peak.
    type: climatic
    legacy_decision: false
    sources:
      - SRC-TG-226
      - SRC-TG-227
  - cause: Delays in projects and slow procedures and authorisations are cited by the electricity workers' union; a parliamentary committee chair
      separately attributes delays to a 2018 choice to abandon the Skhira thermal project in favour of solar projects. These are tier C attributed
      accounts, not independently documented causal findings.
    type: institutional
    legacy_decision: true
    sources:
      - SRC-TG-229
      - SRC-TG-233
indicators:
  - name: Annual peak electricity demand, observed through September (new national record)
    value: 5089
    unit: MW
    year: 2026
    geography: national
    source: SRC-TG-100
  - name: Annual peak electricity demand (ONEM chart label)
    value: 3465
    unit: MW
    year: 2014
    geography: national
    source: SRC-TG-100
  - name: Annual peak electricity demand
    value: 4825
    unit: MW
    year: 2023
    geography: national
    source: SRC-TG-220
  - name: Annual peak electricity demand
    value: 4888
    unit: MW
    year: 2024
    geography: national
    source: SRC-TG-223
  - name: Annual peak electricity demand
    value: 4837
    unit: MW
    year: 2025
    geography: national
    source: SRC-TG-221
  - name: Peak demand annual growth rate, 2016-2022 appraisal period
    value: 5.5
    unit: percent per year
    year: 2022
    geography: national
    source: SRC-TG-105
  - name: Installed generation capacity
    value: 6015
    unit: MW
    year: 2022
    geography: national
    source: SRC-TG-224
  - name: Peak demand used in World Bank reserve-margin comparison
    value: 4678
    unit: MW
    year: 2022
    geography: national
    source: SRC-TG-224
  - name: Nominal reserve margin reported by the World Bank (surplus as share of installed capacity)
    value: 22
    unit: percent
    year: 2022
    geography: national
    source: SRC-TG-224
  - name: Real reserve capacity at peak, upper bound
    value: 10
    unit: percent
    year: 2022
    geography: national
    source: SRC-TG-224
  - name: Estimated risk of peak-hour electricity shortage, reported in 2025 appraisal (historical context 2016-2022)
    value: 770
    unit: MW
    year: 2025
    geography: national
    source: SRC-TG-105
  - name: Algeria-Tunisia exchange during a summer adequacy shortfall, above the established NTC
    value: 700
    unit: MW
    year: 2025
    geography: national
    source: SRC-TG-234
  - name: Modeled seasonal loss-of-load expectation, isolated mode, normal conditions
    value: 81
    unit: hours
    year: 2026
    geography: national
    source: SRC-TG-234
  - name: Modeled seasonal loss-of-load expectation, interconnected mode, normal conditions
    value: 39
    unit: hours
    year: 2026
    geography: national
    source: SRC-TG-234
  - name: Modeled seasonal loss-of-load expectation, isolated mode, P95 sensitivity
    value: 219
    unit: hours
    year: 2026
    geography: national
    source: SRC-TG-234
  - name: Modeled seasonal loss-of-load expectation, interconnected mode, P95 sensitivity
    value: 122
    unit: hours
    year: 2026
    geography: national
    source: SRC-TG-234
  - name: Peak-hour generation deficit reported by MP Maher Kettari on 25 July
    value: 600
    unit: MW
    year: 2026
    geography: national
    source: SRC-TG-230
  - name: Peak-hour generation deficit reported by MP Maher Ktari on 28 July
    value: 1500
    unit: MW
    year: 2026
    geography: national
    source: SRC-TG-233
  - name: Peak-hour generation deficit reported by electricity workers' federation
    value: 2000
    unit: MW
    year: 2026
    geography: national
    source: SRC-TG-229
  - name: System Average Interruption Duration Index baseline
    value: 137
    unit: minutes per customer per year
    year: 2023
    geography: national
    source: SRC-TG-105
  - name: Energy not supplied (storm-related increase reported by World Bank)
    value: 10
    unit: GWh
    year: 2019
    geography: national
    source: SRC-TG-105
  - name: Energy not supplied (prior year comparator)
    value: 6.3
    unit: GWh
    year: 2018
    geography: national
    source: SRC-TG-105
stakeholders:
  - STEG
  - Ministry of Industry, Mines and Energy
  - households
  - industry and SMEs
  - Fédération générale de l'électricité et du gaz
  - World Bank
  - Sonelgaz
  - GECOL
  - Med-TSO
related:
  - FND-TG-101
  - FND-TG-102
  - FND-TG-131
  - FND-TG-161
  - FND-TG-221
  - FND-TG-222
sources:
  - SRC-TG-100
  - SRC-TG-105
  - SRC-TG-220
  - SRC-TG-221
  - SRC-TG-223
  - SRC-TG-224
  - SRC-TG-226
  - SRC-TG-227
  - SRC-TG-228
  - SRC-TG-229
  - SRC-TG-230
  - SRC-TG-233
  - SRC-TG-234
data_gaps:
  - The 5,089 MW ONEM value is a record in the January-September 2026 bulletin and is not a complete calendar-year maximum. Press/MP accounts
    later put an unvalidated peak near 6,000 MW. It remains unclear whether those accounts estimate unconstrained demand, use another period or
    method, or are inaccurate (SRC-TG-100, SRC-TG-228, SRC-TG-233).
  - The 770 MW peak-hour shortage risk appears in the 2025 World Bank appraisal's description of demand growth and lagging investment in 2016-2022;
    the PAD does not specify the exact assessment year or methodology. The 770 MW shortage-risk estimate is reported in the 2025 appraisal against
    the stated 2016-2022 demand-growth context; its exact assessment year and method are not identified (SRC-TG-105).
  - Volume, duration, affected areas and operational cause of load shedding in July 2023 and summer 2026 remain unconfirmed in STEG or regulator
    operational data. The July 2023 report attributes periodic shedding to STEG but cites a journalist's account; July 2026 scheduled cuts are
    reported by press, while another report describes STEG notices as technical-work interruptions (SRC-TG-227, SRC-TG-228, SRC-TG-233).
  - The World Bank PAD mentions a nationwide blackout in 2023 without date or cause; it has not been equated with the July 2023 press-reported
    periodic load shedding (SRC-TG-105, SRC-TG-227).
  - The PAD reports the 2016-2022 peak-hour shortage risk as 770 MW, about 16% of peak demand, but provides no calculation method in the cited
    passage. Do not treat this appraisal estimate as an observed shortage or an annual event count (SRC-TG-105).
  - The 2022 World Bank reserve comparison and 2026 Med-TSO seasonal model use different periods, system definitions and assumptions. Med-TSO's
    zero margin is a worst-case thermal margin in July-August, not an observed nationwide reserve or proof of realized unserved load; its assessment
    also assumes interconnection support and characterizes the executive-summary isolated risk as moderate, while a later section says high (SRC-TG-224,
    SRC-TG-234).
  - Med-TSO's P95 sensitivity narrative labels seasonal results as LOLE, while the formal methods section distinguishes P95/P50 loss-of-load duration
    (LOLD) from expected LOLE. Retain these figures only as source-labelled sensitivity results pending clarification (SRC-TG-234).
  - Peak-hour imports from Algeria and Libya during the reported 2023 and 2026 shortages were not established. The 700 MW Algeria-Tunisia exchange
    above the established NTC refers to summer 2025 only (SRC-TG-234).
  - The MP and union deficit figures for July-August 2026 range from 600 MW to 2,000 MW and lack a stated method; their estimates are politically/organizationally
    attributed tier C claims, not validated system measurements (SRC-TG-229, SRC-TG-230, SRC-TG-233).
  - The fall in STEG generation investment from TND 1.947 billion (2016-2020) to TND 248 million (2021-2025), the Skhira decision narrative, and
    blocked-project capacities are secondary press accounts. The primary OTE analysis and official project-decision records were not obtained
    (SRC-TG-228, SRC-TG-233).
  - STEG annual activity reports for 2023 and 2024 were not located; the accessible 2023 CMF filing contains financial statements only.
  - No governorate-level supply-quality series or documented water-supply/irrigation impacts from the cited 2023 or 2026 events were found. ONEM
    reports Jan-Sep 2026 HV/MV sales shares of 12% for water pumping/sanitation and 9% agriculture; these indicate exposure, not documented outage
    impacts (SRC-TG-100).
author: TahaGHZ
---

## Problem

Tunisia's electricity demand peaks in summer, and official annual peak records show a longer-run rise: ONEM's chart labels 3,465 MW in 2014, while its September 2026 bulletin reports a January-September record of 5,089 MW (SRC-TG-100). The peak was 4,825 MW in 2023, 4,888 MW in 2024 and 4,837 MW in 2025 (SRC-TG-220, SRC-TG-223, SRC-TG-221), so year-to-year movement is not monotonic. Capacity adequacy is tight under heat: the World Bank reports less than 10% real reserve capacity at the 2022 peak, and Med-TSO's pre-summer 2026 model shows zero worst-case thermal margin in July-August while treating 500 MW of import capacity as practically necessary (SRC-TG-224, SRC-TG-234). Med-TSO models seasonal loss-of-load risk even when interconnected, while actual 2023 and 2026 load-shedding episodes remain press-reported rather than confirmed by published operational statistics (SRC-TG-227, SRC-TG-228, SRC-TG-233, SRC-TG-234).

## Root causes

Demand growth and constrained available generation coincide in hot summer periods. The World Bank states that peak demand grew by more than 4% annually over 2010-2021 and 5.5% annually over 2016-2022, while new generation investment lagged. It says the government estimated a need for 400-600 MW of additions every two years, compared with about 100 MW per year of capacity growth “in the last few years” (SRC-TG-224). The same appraisal attributes system tightness to low investment and says STEG's financial situation exacerbated implementation of its capacity-expansion plan and affected distribution investment (SRC-TG-105, SRC-TG-224).

Heat reduces thermal unit output at the same time that cooling consumption raises demand. The World Bank links the 2022 real reserve below 10% to degraded gas-unit performance in high temperatures, coincident with peak demand; Med-TSO likewise attributes the July-August maximum to high temperatures and cooling consumption (SRC-TG-224, SRC-TG-226). STEG's spokesperson was reported in 2023 as saying heat damaged lines and equipment while demand rose (SRC-TG-227).

Project delays and the 2018 Skhira decision are possible institutional contributors, but the evidence is attributed tier C testimony. The electricity workers' union cites slow procedures, authorisations and delayed projects; an MP attributes project delays to abandoning Skhira in favour of solar development (SRC-TG-229, SRC-TG-233). The reported 87% fall in STEG generation investment and blocked or delayed project capacities relay an OTE analysis through press, whose primary report was not opened (SRC-TG-228). These accounts do not independently establish how much each factor contributed to the measured adequacy risk.

Imports and demand response help manage tight periods. The World Bank's 2023 appraisal says electricity imports met 12% of demand in 2023 (SRC-TG-105). Med-TSO reports the Algeria-Tunisia exchange reached 700 MW, above the established transfer capacity, to cover a significant adequacy shortfall in summer 2025 (SRC-TG-234). Its 2026 outlook describes commercial-lighting and air-conditioning restrictions, off-peak tariff incentives, voluntary industrial curtailment and discussions with Algeria on temporary import increases; these are measures and negotiations reported before the summer, not evidence that each was implemented or that load was served in a specific later event (SRC-TG-234).

## Evidence

- **Observed annual peak demand:** ONEM's monthly series labels 3,465 MW in 2014, 4,025 MW in 2017, 4,247 MW in 2019, 4,472 MW in 2021, 4,677 MW in 2022, 4,825 MW in 2023 and 4,888 MW in 2024. The same September 2026 chart shows 5,089 MW in 2026; its text explicitly says this is the record “à fin septembre” (through September), not a final calendar-year total. ONEM reports 4,837 MW for full-year 2025 (SRC-TG-100, SRC-TG-220, SRC-TG-221, SRC-TG-223). The rise from 2014 to the 2026 through-September record is about 47%, a calculation from the two ONEM values, not a separately published statistic (SRC-TG-100).
- **Historical capacity and reserve context:** The World Bank reports 6,015 MW installed capacity and a 4,678 MW peak in 2022, calling the reserve margin 22%; it states real reserve capacity was less than 10% due to heat-related gas-unit derating. The 22% is the surplus as a share of installed capacity; calculated as a share of peak demand, the nominal surplus is about 28.6%. The World Bank's separate 770 MW peak-hour shortage-risk estimate is reported in the 2025 appraisal in the context of 2016-2022 demand growth and lagging investment, but its exact model base year is not given (SRC-TG-105, SRC-TG-224).
- **Seasonal model, not observed outcome:** Med-TSO's Summer Outlook 2026 gives seasonal LOLE of 81 hours isolated and 39 hours interconnected under normal conditions, with EENS of 27,786 and 12,572 MWh respectively. For its P95 sensitivity it reports 219 and 122 hours and 82,028 and 37,423 MWh; its methods terminology for these P95 durations is inconsistent, as noted in `data_gaps`. The model's weekly peak reaches 5,827 MW across 36 climatic years; average available thermal capacity is about 5,000 MW, with a minimum average daily available value of 3,100 MW. Its worst-case hourly thermal margin reaches zero from late June through July and August. These are modeled seasonal adequacy results, published before the summer, not measurements of actual outages or unserved energy (SRC-TG-234).
- **Imports and annual import dependence:** ONEM's 2023 bulletin reports 2,461 GWh of purchases from Algeria and Libya and 21,810 GWh “available for local market”; the World Bank separately says imports covered 12% of electricity demand in 2023. Their scopes/denominators may differ, so the two should not be forced to agree. Med-TSO's 700 MW above-NTC flow concerns summer 2025, not 2026 (SRC-TG-220, SRC-TG-105, SRC-TG-234).
- **Reliability indicators:** The World Bank TEREG appraisal reports 2023 SAIDI of 137 minutes and a programme target of 128 minutes by 2028. It separately says storms drove energy not supplied (ENS) from 6.3 GWh in 2018 to 10 GWh in 2019. Its 2023 “nationwide blackout” reference has no date or cause in the cited passage (SRC-TG-105).
- **Press-reported events and estimates:** Webdo reported periodic load shedding in some regions on 20 July 2023, alongside the official peak of 4,825 MW; the article's statement that STEG adopted shedding is journalistic attribution. In 2026, Webmanagercenter reported scheduled cuts in July and a peak near 6,000 MW based on unnamed sources and MPs; Webdo reported an MP's 1,500 MW deficit claim on 28 July; La Presse reported an MP's 600 MW claim on 25 July and the union's 2,000 MW estimate on 25 August. The peak and deficit estimates are unverified tier C claims and conflict with the official 5,089 MW record through September (SRC-TG-227, SRC-TG-228, SRC-TG-229, SRC-TG-230, SRC-TG-233, SRC-TG-100).

## Why confidence is what it is

Confidence is medium for a current adequacy concern: the observed ONEM peak series is a tier A official source, and the 2022 reserve figures and separate 2026 seasonal model come from tier B institutional sources. They establish rising historical peaks and modeled heat-season tightness, but do not provide one directly comparable observed firm-capacity time series through 2026. The 2026 summer model is a projection/scenario, not an observed outage record. Load-shedding claims and disputed 2026 deficits are tier C reports; the causes assigned to permitting delays, Skhira and the investment collapse are also not independently confirmed. The draft therefore retains those claims only with attribution and explicit gaps.

## Links to other sectors

- **Water:** ONEM reports water pumping and sanitation as 12% of high- and medium-voltage sales in January-September 2026 (SRC-TG-100). This indicates potential exposure to electricity interruptions; no documented water-supply impact from the cited episodes was found.
- **Agriculture:** Agricultural pumping accounted for 9% of high- and medium-voltage sales in January-September 2026, and its sales grew 5% year on year (SRC-TG-100). No sourced irrigation impact from the cited outages was found.

## Leads for phase 2

- TEREG programme (World Bank, P507304), including SAIDI and loss-reduction indicators and a 10-year least-cost investment plan: https://documents1.worldbank.org/curated/en/099041025150537909/text/BOSIB-5b68fe2f-7a73-435b-930b-ec670325463c.txt
- ELMED Tunisia-Italy interconnector (World Bank, P179240): https://projects.worldbank.org/en/projects-operations/project-detail/P179240
- Skhira power plant and Kairouan solar project (claims and status require primary project records; SRC-TG-228, SRC-TG-233).
- Summer demand-reduction measures, off-peak tariffs and voluntary industrial curtailment described in Med-TSO's outlook (SRC-TG-234).

## Verification

Dated national peaks and the published adequacy studies have different periods and methods. The official peak series is used for observed values. Press accounts are attributed as reports; undocumented comparisons and residual capacity estimates do not establish actual outages.

**Outstanding verification:** The observed peak is distinguished from the reported and modelled values. Event attribution and undated capacity-margin estimates remain unconfirmed.
