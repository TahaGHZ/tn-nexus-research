---
id: FND-TG-221
title: STEG's network losses roughly doubled from about 11-12% in 2010 to about 20% since 2021, and the increase appears to be mainly non-technical (theft), although the split is disputed
status: draft
sectors: [energy]
theme: grid
timeframe: current
period: 2010-2026
geography: [national]
severity: high
trend: stable
confidence: medium
root_causes:
  - cause: Electricity theft (illegal connections, meter tampering) grew after 2011 and continues despite a TND 2,000 fine per offence set in 2018
    type: behavioural
    legacy_decision: false
    sources: [SRC-TG-222, SRC-TG-224, SRC-TG-105, SRC-TG-231, SRC-TG-232]
  - cause: No advanced metering infrastructure (AMI) to detect fraud
    type: institutional
    legacy_decision: false
    sources: [SRC-TG-105]
  - cause: Under-spending on operation and maintenance and ageing network assets, linked to STEG's financial crisis
    type: economic
    legacy_decision: false
    sources: [SRC-TG-105]
indicators:
  - name: Total network loss rate (technical + commercial), share of gross production
    value: 11.4
    unit: percent
    year: 2010
    geography: national
    source: SRC-TG-222
  - name: Total network loss rate (technical + commercial), share of gross production
    value: 21.7
    unit: percent
    year: 2022
    geography: national
    source: SRC-TG-222
  - name: Total network loss rate (technical + commercial), share of gross production
    value: 20.0
    unit: percent
    year: 2023
    geography: national
    source: SRC-TG-222
  - name: Total network losses (World Bank figure, definition not stated)
    value: 18.4
    unit: percent
    year: 2023
    geography: national
    source: SRC-TG-105
  - name: Total network loss rate (technical + commercial), share of gross production
    value: 21.1
    unit: percent
    year: 2024
    geography: national
    source: SRC-TG-222
  - name: Total losses (World Bank figure)
    value: 12 (2010) to 21 (2021)
    unit: percent
    year: 2010-2021
    geography: national
    source: SRC-TG-224
  - name: Transmission losses
    value: "<=2.23"
    unit: percent
    year: 2024
    geography: national
    source: SRC-TG-222
  - name: Distribution losses
    value: 7-9
    unit: percent
    year: 2024
    geography: national
    source: SRC-TG-222
  - name: Unbilled electricity, split as stated by an unnamed official (technical 12%, illegal consumption 7%)
    value: 19
    unit: percent of production
    year: 2026
    geography: national
    source: SRC-TG-231
  - name: Detected electricity theft cases
    value: 18000
    unit: cases
    year: 2023
    geography: national
    source: SRC-TG-232
stakeholders: [STEG, "Ministry of Industry, Mines and Energy", paying customers, State budget, World Bank]
related: [FND-TG-101, FND-TG-161, FND-TG-220, FND-TG-222]
sources: [SRC-TG-105, SRC-TG-220, SRC-TG-222, SRC-TG-224, SRC-TG-230, SRC-TG-231, SRC-TG-232]
data_gaps:
  - Official split between technical and non-technical losses. ONEM gives transmission ≤2.23% and distribution 7-9% (citing the STEG 2024 annual report) and says "most" losses are theft (SRC-TG-222). A 2026 press source gives 12% technical and 7% illegal (SRC-TG-231). The STEG annual activity report 2024 cited by ONEM was not found online.
  - Loss rate by region or STEG district. Not found.
  - Annual volume of detected theft in GWh and recovered revenue, as a time series. Only one press figure for 2023 (SRC-TG-232), with ambiguous units.
  - World Bank's 18.4% for 2023 (SRC-TG-105) against ONEM's 20.0% (SRC-TG-222). The World Bank does not give its denominator, so the gap cannot be explained from the sources.
  - Number of smart meters installed under the AFD-financed STEG smart-grid project. Not sourced here.
author: TahaGHZ
---

## Problem

STEG loses about a fifth of the electricity it produces before it is billed. ONEM puts the total
loss rate (technical plus commercial, as a share of gross production) at 11.4% in 2010 and 21.1%
in 2024, with a high of 21.7% in 2022 (SRC-TG-222). The World Bank reported 12% in 2010 and 21% in
2021 (SRC-TG-224), and 18.4% in 2023 (SRC-TG-105). Technical losses alone are much lower:
transmission ≤2.23% and distribution 7-9% in 2024 (SRC-TG-222). On those figures the increase since
2010 looks mainly non-technical. That is our inference, but ONEM itself attributes "most" losses to
electricity theft (SRC-TG-222). Since 2021 the rate has plateaued at 20-22% (SRC-TG-222).
In 2026 an MP and an unnamed official both put the losses at about 19% (SRC-TG-230, SRC-TG-231).

## Root causes

The symptom is a high loss rate. The causes are:

- **Theft and fraud.** ONEM says theft "keeps growing" despite a TND 2,000 fine per offence under
  Government Decree 2018-59 (SRC-TG-222). The World Bank says losses and non-payment worsened
  "since the revolution" (SRC-TG-224) and names commercial losses ("mainly fraud") first among the
  causes in 2023 (SRC-TG-105). STEG inspections found 18,000 theft cases in 2023 (SRC-TG-232,
  tier C).
- **No smart metering.** The World Bank cites the "lack of advanced metering infrastructure" as a
  cause (SRC-TG-105).
- **Ageing assets and under-spent maintenance (legacy of STEG's finances).** The World Bank cites
  "under-spending on operation and maintenance (O&M), aging network assets" (SRC-TG-105). STEG's
  financial crisis is covered by the subsidies/STEG finances lane. It feeds this problem through
  maintenance budgets.

Losses and non-payment are separate. Unpaid bills are electricity that was metered and billed but
not paid; public customers leave about 50% unpaid (SRC-TG-224). They are noted only for clarity.
Receivables belong to lane 160-189.

## Evidence

- ONEM loss series, read from Figure 33 (SRC-TG-222): 2010 11.4%, 2015 16.1%, 2019 16.6%, 2020
  17.4%, 2021 21.1%, 2022 21.7%, 2023 20.0%, 2024 21.1%. The biggest jump is 2020 to 2021 (+3.7
  points).
- World Bank: 12% (2010) to 21% (2021) (SRC-TG-224); 18.4% in 2023 (SRC-TG-105).
- Technical losses: transmission ≤2.23%, distribution 7-9% (2024) (SRC-TG-222).
- Derived (ours, not stated in any source): if technical losses are about 9-11% of production,
  non-technical losses are about 10-12% of production in 2024. The 2026 press split of 12%
  technical and 7% illegal (SRC-TG-231) implies a larger technical share and a smaller theft share
  than ONEM's reading. The two do not agree.
- Scale reference: 2023 production was 19,314 GWh (SRC-TG-220), so each percentage point of losses
  is about 190 GWh (derived).

## Why confidence is what it is

The trend is solid. ONEM (tier A) and two World Bank appraisal documents (tier B) agree that
losses roughly doubled since 2010 to about 20%. The exact level differs by source and definition:
for 2023, 20.0% (ONEM, gross production) against 18.4% (World Bank, definition not stated). The
technical versus non-technical split is the weak point. ONEM's transmission and distribution
figures come second-hand from a STEG report we could not open. The alternative split rests on an
anonymous official quoted in the press. That theft drives the growth is stated by ONEM and the
World Bank, but neither publishes a theft volume. Confidence is medium.

## Links to other sectors

Every unbilled kWh is still generated, mostly from gas largely of Algerian origin (see
FND-TG-101). Losses therefore raise gas demand and the import bill for the same billed
consumption. We found no source quantifying the gas volume lost this way. Links to water and
agriculture: none found.

## Leads for phase 2

- TEREG programme DLI 3, which targets 15% total losses, with AMI, wholesale metering and
  anti-theft measures (World Bank P507304):
  https://documents1.worldbank.org/curated/en/099041025150537909/text/BOSIB-5b68fe2f-7a73-435b-930b-ec670325463c.txt
- Government Decree 2018-59 of 16 January 2018 (fine for electricity theft), cited in SRC-TG-222.
- STEG smart-grid (smart meter) project financed by AFD (not opened):
  https://www.tresor.economie.gouv.fr/Articles/2025/02/28/projet-smart-grid-de-la-steg-finance-par-l-afd-succes-de-la-phase-experimentale-et-lancement-de-la-mise-en-production
- STEG anti-theft inspection campaigns (SRC-TG-232).
