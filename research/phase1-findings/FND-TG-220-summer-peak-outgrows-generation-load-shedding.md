---
id: FND-TG-220
title: The summer peak has grown into a thin firm-capacity margin (real reserve under 10% in 2022, zero worst-case thermal margin modelled for July-August 2026), leaving Tunisia dependent on imports at peak; the press reports load shedding in 2023 and 2026
status: draft
sectors: [energy]
theme: grid
timeframe: current
period: 2014-2026
geography: [national]
severity: high
trend: worsening
confidence: medium
root_causes:
  - cause: Generation projects were delayed by slow procedures and authorisations, and the Skhira thermal plant project was abandoned in 2018 in favour of solar PV, which itself ran late (statements by the electricity workers' union and the chair of the parliamentary finance committee, tier C)
    type: institutional
    legacy_decision: true
    sources: [SRC-TG-229, SRC-TG-233]
  - cause: STEG's financial crisis held back its capacity expansion plan and its distribution investment. Press reports relay an 87% fall in STEG's generation investment between 2016-2020 and 2021-2025.
    type: economic
    legacy_decision: false
    sources: [SRC-TG-105, SRC-TG-228]
  - cause: The nominal reserve margin overstates real reserve, because gas-fired units lose output in high temperatures, which is exactly when the summer peak occurs
    type: technical
    legacy_decision: false
    sources: [SRC-TG-224, SRC-TG-234]
  - cause: Heatwaves raise cooling demand and damage lines and equipment at the same time
    type: climatic
    legacy_decision: false
    sources: [SRC-TG-226, SRC-TG-227, SRC-TG-228]
indicators:
  - name: Annual peak electricity demand, national record (cumulative to end of September)
    value: 5089
    unit: MW
    year: 2026
    geography: national
    source: SRC-TG-100
  - name: Annual peak electricity demand (chart label)
    value: 3465
    unit: MW
    year: 2014
    geography: national
    source: SRC-TG-100
  - name: Annual peak electricity demand (record of 20 July 2023, 12:48)
    value: 4825
    unit: MW
    year: 2023
    geography: national
    source: SRC-TG-220
  - name: Annual peak electricity demand (record of 14 August 2024)
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
  - name: Peak demand growth rate, average 2016-2022
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
  - name: Nominal reserve margin, as stated by the World Bank (installed 6,015 MW over 4,678 MW peak, expressed as a share of installed capacity)
    value: 22
    unit: percent
    year: 2022
    geography: national
    source: SRC-TG-224
  - name: Real reserve margin at peak with gas units derated in heat (upper bound, "less than")
    value: 10
    unit: percent
    year: 2022
    geography: national
    source: SRC-TG-224
  - name: Estimated risk of peak-hour shortage, about 16% of peak demand (PAD dated 2025, base year not stated)
    value: 770
    unit: MW
    year: 2025
    geography: national
    source: SRC-TG-105
  - name: Algeria-Tunisia import flow raised above the established transfer capacity during a shortfall ("last summer" in a June 2026 report)
    value: 700
    unit: MW
    year: 2025
    geography: national
    source: SRC-TG-234
  - name: Modelled loss of load expectation, summer 2026, isolated mode, normal conditions
    value: 81
    unit: hours
    year: 2026
    geography: national
    source: SRC-TG-234
  - name: Modelled loss of load expectation, summer 2026, interconnected mode, normal conditions
    value: 39
    unit: hours
    year: 2026
    geography: national
    source: SRC-TG-234
  - name: Peak-hour generation deficit stated by MP Maher Kettari/Ktari on 25 July 2026
    value: 600
    unit: MW
    year: 2026
    geography: national
    source: SRC-TG-230
  - name: Peak-hour generation deficit stated by the same MP on 28 July 2026 (peak near 6,000 MW against STEG capacity of at most 4,500 MW)
    value: 1500
    unit: MW
    year: 2026
    geography: national
    source: SRC-TG-233
  - name: Peak-hour generation deficit stated by the electricity workers' federation, 25 August 2026
    value: 2000
    unit: MW
    year: 2026
    geography: national
    source: SRC-TG-229
  - name: SAIDI, average interruption minutes per customer (TEREG baseline)
    value: 137
    unit: minutes per year
    year: 2023
    geography: national
    source: SRC-TG-105
  - name: Energy not supplied (6.3 GWh in 2018)
    value: 10
    unit: GWh
    year: 2019
    geography: national
    source: SRC-TG-105
stakeholders: [STEG, "Ministry of Industry, Mines and Energy", households, industry and SMEs, Fédération générale de l'électricité et du gaz, World Bank, Sonelgaz, GECOL]
related: [FND-TG-101, FND-TG-102, FND-TG-131, FND-TG-161, FND-TG-221, FND-TG-222]
sources: [SRC-TG-100, SRC-TG-105, SRC-TG-220, SRC-TG-221, SRC-TG-223, SRC-TG-224, SRC-TG-226, SRC-TG-227, SRC-TG-228, SRC-TG-229, SRC-TG-230, SRC-TG-233, SRC-TG-234]
data_gaps:
  - "Official 2026 peak: ONEM gives a record of 5,089 MW to the end of September 2026 (SRC-TG-100). An MP and the press speak of a peak near 6,000 MW, not validated (SRC-TG-228, SRC-TG-233). No source says whether ONEM's peak is load actually served (which load shedding would cap) or estimated unconstrained demand."
  - "Volume, duration and location of load shedding in July 2023 and summer 2026: no STEG communiqué or statistic was found, only press accounts. Dates for 2026 are sourced only for July 2026 (SRC-TG-228, SRC-TG-233) and late August 2026 (SRC-TG-229)."
  - "The 'nationwide blackout in 2023' in the TEREG PAD (SRC-TG-105) has no date or cause. It may or may not be the same as the July 2023 load shedding; we have not merged them."
  - "SAIDI baselines in the two ELMED documents (SRC-TG-224, SRC-TG-225) are given only as percentage targets. SAIDI time series before 2023 and energy not supplied after 2019 were not found."
  - "Regional differences in supply quality (outage minutes by governorate or STEG district): not found. ONEM's regional tables give sales volumes only (SRC-TG-223)."
  - "STEG annual activity reports (rapport annuel d activité) 2023 and 2024: not found online. The STEG 2023 document on cmf.tn (https://www.cmf.tn/sites/default/files/pdfs/emetteurs/informations/rapports-societes/rapport_steg_is_2023.pdf) contains financial statements only."
  - "Primary OTE report 'La crise électrique tunisienne - une panne d investissement' (1 August 2026): not opened. https://www.economie-tunisie.org/fr returned nothing. The 87% fall in investment rests on press only."
  - "Official record of the 2018 decision on the Skhira plant: only the MP's statement (SRC-TG-233) and a press reference (SRC-TG-228) were found."
  - "Peak-hour imports from Algeria and Libya during the 2023 and 2026 shortages, beyond the 700 MW summer 2025 episode (imports lane 130-159)."
author: TahaGHZ
---

## Problem

Tunisia's annual electricity peak comes in summer. It rose from 3,465 MW in 2014 to a record
5,089 MW in 2026, according to ONEM's monthly peak series (SRC-TG-100). Firm capacity has not kept
up. In 2022 installed capacity was 6,015 MW against a 4,678 MW peak. The World Bank calls that a
22% reserve margin, but its 22% is the surplus as a share of installed capacity; measured over
peak demand it is about 29% (our calculation). The real margin at peak was under 10%, because gas
units lose output in the heat (SRC-TG-224). For summer 2026, Med-TSO modelled a worst-case
thermal margin of zero throughout July and August, and called the 500 MW of import capacity "a
practical necessity" (SRC-TG-234). In summer 2025, Algerian imports were pushed to 700 MW, above
the established transfer capacity, to cover a "significant adequacy shortfall" (SRC-TG-234). The
press reports load shedding on 20 July 2023 (SRC-TG-227) and scheduled cuts in summer 2026
(SRC-TG-228, SRC-TG-233). Those events rest on tier C sources only.

## Root causes

The symptoms are load shedding and emergency imports on hot afternoons. Behind them, firm
generation capacity has not kept pace with a peak that grew more than 4% a year in 2010-2021
(SRC-TG-224) and 5.5% a year in 2016-2022 (SRC-TG-105). Capacity grew about 100 MW a year against
a government estimate of 400-600 MW needed every two years (SRC-TG-224). Why it lagged:

- **Delayed and abandoned projects, slow permitting (tier C).** The electricity workers' union
  blames delays in several projects and slow procedures and authorisations (SRC-TG-229). The chair
  of the parliamentary finance committee cites the 2018 abandonment of the Skhira power plant
  project in favour of solar PV, after which several solar projects were delayed. He notes that a
  thermal plant takes two to three years to build (SRC-TG-233). The press also reports the 480 MW
  Skhira combined cycle and 380 MW of STEG wind and solar as blocked or delayed (SRC-TG-228). These
  are statements by interested or political actors; no official document on the 2018 decision was
  found.
- **STEG's finances.** The World Bank says STEG's financial situation "has exacerbated
  implementation of its capacity expansion plan" and affected its distribution investment plan
  (SRC-TG-105), and attributes the tightness to "low investment" (SRC-TG-224). Press reports of an
  Observatoire tunisien de l'économie analysis give a fall in STEG generation investment from
  TND 1.947 billion (2016-2020) to TND 248 million (2021-2025) (SRC-TG-228, tier C, primary not
  opened).
- **Heat cuts supply as it raises demand.** Gas units derate in high temperatures, so the real
  margin was under 10% at peak in 2022 (SRC-TG-224). STEG's spokesman said in July 2023 that heat
  had damaged lines and equipment while demand rose (SRC-TG-227).
- **Cooling demand (brief, see future buildings-cooling topic).** Med-TSO attributes Tunisia's
  July-August maximum to "high temperatures and cooling consumption" (SRC-TG-226). The press points
  to heavy air-conditioning use in July 2026 (SRC-TG-228).
- **Imports cover part of the gap.** Purchases from Algeria and Libya met 11% of the local market in
  2023 (SRC-TG-220); the TEREG PAD gives 12% (SRC-TG-105). Imports are analysed in the imports
  lane. The point here is that the margin depends on them, beyond the safe limit in 2025
  (SRC-TG-234).

## Evidence

- **Peak series (ONEM, observed):** 3,465 MW in 2014; 4,025 MW in 2017; 4,247 MW in 2019; 4,472 MW
  in 2021; 4,677 MW in 2022; 4,825 MW in 2023; 4,888 MW in 2024; 5,089 MW in 2026 (SRC-TG-100
  chart labels). Also 4,825 MW on 20 July 2023 (SRC-TG-220), 4,888 MW on 14 August 2024
  (SRC-TG-223), and 4,837 MW in 2025 (SRC-TG-221). From 2014 to 2026 the peak rose about 47%
  (derived from SRC-TG-100).
- **Capacity:** 6,015 MW installed in 2022 (SRC-TG-224); 5,982 MW at the end of 2023 (SRC-TG-105).
  Installed capacity did not grow between these two World Bank figures, although they may not use
  the same scope. Med-TSO models about 5,000 MW of average available thermal capacity in summer
  2026, with a minimum of 3,100 MW (SRC-TG-234).
- **Shortage risk:** the World Bank estimates 770 MW, about 16% of peak (SRC-TG-105). Med-TSO's
  summer 2026 outlook gives a loss of load expectation of 81 h isolated and 39 h interconnected
  under normal conditions, and 219 h and 122 h at P95 (SRC-TG-234). It also calls summer 2026 one
  of Tunisia's "most constrained summers in recent years". That outlook was published before the
  summer and models risk; it does not report load actually shed.
- **Reliability:** SAIDI was 137 minutes in 2023, with a TEREG target of 128 minutes by 2028
  (SRC-TG-105). Energy not supplied rose from 6.3 GWh (2018) to 10 GWh (2019) after storms. A
  "nationwide blackout in 2023" is reported without a date (SRC-TG-105).
- **Outage events (press, tier C):** on 20 July 2023, Webdo's journalist reports that STEG adopted
  periodic load shedding "in some regions". The STEG spokesman is quoted only for the 4,825 MW peak
  and the heat damage (SRC-TG-227). In July 2026 STEG applied scheduled cuts (SRC-TG-228) and
  announced scheduled interruptions in several regions, officially "for technical work"
  (SRC-TG-233). The union describes load shedding as the way to avoid system collapse
  (SRC-TG-229).
- **Disagreement on 2026:** ONEM's official record is 5,089 MW (SRC-TG-100), while an MP and the
  press put the peak near 6,000 MW, unvalidated (SRC-TG-228, SRC-TG-233). Deficit estimates vary:
  the same MP gave about 600 MW on 25 July (SRC-TG-230) and about 1,500 MW on 28 July
  (SRC-TG-233); the union gave about 2,000 MW on 25 August (SRC-TG-229). None states a method, and
  we found no source that reconciles them.

## Why confidence is what it is

The peak series, the capacity and reserve figures and SAIDI come from tier A ONEM bulletins and
tier B World Bank documents, and they agree with each other: 4,825 MW appears in ONEM, in STEG's
statement and in the press. Med-TSO's summer outlook (tier B) independently supports the thin
margin and the reliance on imports. The weak parts are three. Accounts of actual load shedding
are press only (tier C). Deficit estimates range from 600 to 2,000 MW. The explanations for the
investment lag (2018 Skhira decision, slow permitting, an 87% investment fall) rest on statements
by an MP, a union and press relaying an NGO. Confidence is medium for the capacity gap and low for
the load-shedding events and the causes cited from tier C.

## Links to other sectors

- **Water:** high- and medium-voltage sales include water pumping and sanitation services (12% of
  HV/MV consumption, Jan-Sep 2026; SRC-TG-100), so peak-hour cuts can reach water pumping. We found
  no source documenting effects on water supply during the 2023 or 2026 load shedding.
- **Agriculture:** agricultural pumping is 9% of HV/MV consumption and grew 5% in Jan-Sep 2026
  (SRC-TG-100). We found no source on the impact of load shedding on irrigation.

## Leads for phase 2

- TEREG programme (World Bank, P507304), with SAIDI and loss-reduction indicators and a 10-year
  least-cost investment plan:
  https://documents1.worldbank.org/curated/en/099041025150537909/text/BOSIB-5b68fe2f-7a73-435b-930b-ec670325463c.txt
- ELMED Tunisia-Italy interconnector (World Bank, P179240):
  https://projects.worldbank.org/en/projects-operations/project-detail/P179240
- STEG short-term capacity plan reported in October 2026 (press, not opened):
  https://fr.allafrica.com/stories/202610100004.html
- Skhira power plant project (SRC-TG-228, SRC-TG-233).
- Summer 2026 demand reduction measures: limits on commercial lighting and air conditioning,
  off-peak tariff incentives, voluntary industrial curtailment (SRC-TG-234).
- Kairouan 100 MW solar plant (SRC-TG-233).
- Bazma (Kébili) solar and battery tender, 2026 (SRC-TG-228).
