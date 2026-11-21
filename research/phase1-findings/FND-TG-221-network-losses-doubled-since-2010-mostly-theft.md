---
id: FND-TG-221
title: ONEM reports national network losses rose from 11.4% in 2010 to 21.1% in 2024; theft attribution is unverified
status: draft
sectors:
  - energy
theme: grid
timeframe: current
period: 2010-2024
geography:
  - national
severity: high
trend: stable
confidence: medium
root_causes:
  - cause: ONEM attributes most losses to electricity diversion and says the practice continues despite the TND 2,000 fine per offence set in
      2018; independent national measurement of theft volumes is unavailable
    type: behavioural
    legacy_decision: false
    sources:
      - SRC-TG-222
      - SRC-TG-224
      - SRC-TG-105
      - SRC-TG-231
      - SRC-TG-232
  - cause: The World Bank identifies lack of advanced metering infrastructure (AMI) as one contributor to commercial losses; installed coverage
      is not established here
    type: institutional
    legacy_decision: false
    sources:
      - SRC-TG-105
  - cause: Under-spending on operation and maintenance and ageing network assets, linked to STEG's financial crisis
    type: economic
    legacy_decision: false
    sources:
      - SRC-TG-105
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
  - name: Total network losses, World Bank/STEG definition (energy injected minus sales, divided by energy injected; injected supply includes
      net STEG generation, imports and IPP output; sales include recovered fraud and pro-rata amounts)
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
    value: 12
    unit: percent
    year: 2010
    geography: national
    source: SRC-TG-224
  - name: Total losses (World Bank figure)
    value: 21
    unit: percent
    year: 2021
    geography: national
    source: SRC-TG-224
  - name: Transmission losses, upper bound ("did not exceed"; ONEM citing the STEG 2024 annual report)
    value: 2.23
    unit: percent
    year: 2024
    geography: national
    source: SRC-TG-222
  - name: Distribution losses, lower end of ONEM-reported 7–9% range
    value: 7
    unit: percent
    year: 2024
    geography: national
    source: SRC-TG-222
  - name: Distribution losses, upper end of ONEM-reported 7–9% range
    value: 9
    unit: percent
    year: 2024
    geography: national
    source: SRC-TG-222
  - name: Unaccounted electricity as a share of production, stated by an unnamed official
    value: 19
    unit: percent
    year: 2026
    geography: national
    source: SRC-TG-231
  - name: Technical losses as share of production, stated by an unnamed official
    value: 12
    unit: percent
    year: 2026
    geography: national
    source: SRC-TG-231
  - name: Illegal consumption as share of production, approximate value stated by an unnamed official
    value: 7
    unit: percent
    year: 2026
    geography: national
    source: SRC-TG-231
  - name: Losses in transmission and distribution as a share of electricity produced, stated by the chair of the parliamentary finance committee
    value: 19
    unit: percent
    year: 2026
    geography: national
    source: SRC-TG-230
  - name: Total loss target under TEREG DLI 3
    value: 15
    unit: percent
    year: 2028
    geography: national
    source: SRC-TG-105
  - name: Detected electricity theft cases
    value: 18000
    unit: cases
    year: 2023
    geography: national
    source: SRC-TG-232
stakeholders:
  - STEG
  - Ministry of Industry, Mines and Energy
  - paying customers
  - State budget
  - World Bank
related:
  - FND-TG-101
  - FND-TG-161
  - FND-TG-220
  - FND-TG-222
sources:
  - SRC-TG-105
  - SRC-TG-220
  - SRC-TG-222
  - SRC-TG-224
  - SRC-TG-230
  - SRC-TG-231
  - SRC-TG-232
data_gaps:
  - 'Comparable measured split between technical and non-technical losses, by year: ONEM gives 2024 transmission losses no higher than 2.23% and
    distribution losses of 7–9%, citing STEG’s annual report, and attributes the largest part of losses to electricity diversion (SRC-TG-222);
    a tier C 2026 press report gives a separately attributed 12% technical / about 7% illegal split from an unnamed official (SRC-TG-231). Methods
    and denominators are not disclosed or reconciled. The underlying STEG 2024 annual activity report was not obtained for independent inspection.'
  - 'Loss rate by region or STEG district: not found.'
  - 'Annual volume of detected theft in GWh and recovered revenue, as a time series: only one press report for 2023 states 18,000 cases and ‘200
    gigawatts’; gigawatt is a power unit, not an energy unit, so this quantity is unusable without clarification (SRC-TG-232).'
  - 'The 18.4% (World Bank, 2023) and 20.0% (ONEM, 2023) are reported on differently described bases: the World Bank gives an injected-energy
    formula, while ONEM labels its indicator as a share of gross production (SRC-TG-105, SRC-TG-222). The underlying calculations and denominator
    data were not reconciled. No 2025 or 2026 official ONEM/STEG observation was found; the 2026 figures of about 19% are attributed press statements
    only (SRC-TG-230, SRC-TG-231).'
  - 'Number and coverage of smart meters installed under the AFD-financed STEG smart-grid project: not sourced here.'
author: TahaGHZ
---

## Problem

ONEM’s national gross-production series reports that combined technical and commercial electricity network losses rose from 11.4% in 2010 to 21.1% in 2024, with a peak of 21.7% in 2022 (SRC-TG-222). This measures total network losses; it does not directly measure electricity theft or the quantity produced but unbilled. The World Bank reported total losses of 12% in 2010 and 21% in 2021 (SRC-TG-224). For 2023, ONEM reports 20.0% on its gross-production series (SRC-TG-222), while the World Bank reports 18.4% using energy injected as the denominator (SRC-TG-105). These are distinct series and cannot be treated as a directly comparable pair. The World Bank documentation defines injected supply as net STEG generation plus imports and IPP output, and sales as sold quantities plus recovered fraud and pro-rata amounts; it does not reconcile the 2023 result with ONEM’s series (SRC-TG-105).

For 2024, ONEM says transmission losses did not exceed 2.23% and distribution losses were in the 7–9% range, citing STEG’s 2024 activity report (SRC-TG-222). ONEM also says the largest part of losses comes from electricity diversion and that the practice continues despite the TND 2,000 fine under Government Decree 2018-59 (SRC-TG-222). These are reported component figures and attribution, not a separately measured national theft time series. The STEG report was not independently inspected, and the cited component measures do not establish the technical/non-technical split over time or prove that non-technical losses drove the increase since 2010.

Two press reports in 2026 relay statements of about 19%: the parliamentary finance committee chair describes losses during transmission and distribution as a share of electricity produced (SRC-TG-230), while a report citing an unnamed informed official gives about 19% unaccounted production, comprising 12% technical losses and about 7% illegal consumption (SRC-TG-231). These are tier C statements with no disclosed calculation method and are not comparable official observations against ONEM’s series. The World Bank’s 15% target for 2028 is a programme target, not an observed value (SRC-TG-105).

## Root causes

The cited sources identify plausible contributors to high losses, but do not quantify each cause’s contribution to the increase over time:

- **Commercial losses, mainly fraud.** The World Bank lists commercial losses, mainly fraud, among the causes of the 2023 loss indicator (SRC-TG-105). ONEM says electricity diversion accounts for the largest part of losses and says the practice continues despite a TND 2,000 fine under Government Decree 2018-59 (SRC-TG-222). A tier C press report says STEG identified 18,000 theft cases in 2023 and estimates 80 million TND of losses; its accompanying “200 gigawatts” quantity is dimensionally inconsistent with an energy amount (SRC-TG-232). These sources do not provide a verified theft-volume time series.
- **AMI availability.** The World Bank lists lack of advanced metering infrastructure as one cause (SRC-TG-105). Installed coverage is not established in this finding; an AFD smart-grid project is a lead for follow-up, not evidence that there is no AMI.
- **Network assets and maintenance.** The World Bank identifies under-spending on operation and maintenance and ageing network assets among the causes (SRC-TG-105). The World Bank also describes STEG’s financial distress and cites high network losses among its causes; this does not establish that financial distress caused the loss trend (SRC-TG-105).

Losses and non-payment are distinct. Non-payment concerns invoices already billed but unpaid; the World Bank reports that public customers’ non-payment was 50% in the cited 2023 context (SRC-TG-224). This is separate from electricity not billed because of network loss or illegal consumption.

## Evidence

- **ONEM total loss series:** Figure 33 reports 2010 11.4%, 2011 13.7%, 2012 15.2%, 2013 14.7%, 2014 14.8%, 2015 16.1%, 2016 15.8%, 2017 17.4%, 2018 17.1%, 2019 16.6%, 2020 17.4%, 2021 21.1%, 2022 21.7%, 2023 20.0%, and 2024 21.1% (SRC-TG-222). The largest one-year increase shown is 2020–2021, +3.7 percentage points.
- **World Bank total-loss statements:** 12% in 2010 and 21% in 2021 in the ELMED project document (SRC-TG-224). The TEREG programme document reports 18.4% in 2023 and defines overall T&D losses using energy injected and electricity sales (SRC-TG-105). ONEM reports 20.0% for 2023 on its gross-production series (SRC-TG-222). The available documents do not reconcile these 2023 calculations; do not attribute the difference to a specific numerator or denominator effect.
- **ONEM’s reported 2024 components:** transmission losses did not exceed 2.23%, and distribution losses were in the range 7–9%; ONEM attributes the largest part to diversion. ONEM cites STEG’s 2024 activity report for the component figures, which was not independently obtained (SRC-TG-222).
- **Separate tier C 2026 statements:** the parliamentary finance committee chair gives 19% of electricity produced lost in transmission and distribution (SRC-TG-230). An anonymous source relayed through Mosaïque FM gives about 19% unaccounted, split into 12% technical and about 7% illegal consumption (SRC-TG-231). Methods and denominators are not disclosed; these do not validate a 2026 observation in the ONEM series.
- **Theft cases and volume claim:** African Manager reports 18,000 detected cases in 2023, an estimate of 80 million TND in losses, and “200 gigawatts” (SRC-TG-232). Gigawatt measures power, not energy. No GWh estimate is derived from this report.
- **Scale reference (derived):** ONEM’s 2023 production figure is 19,314 GWh (SRC-TG-220). One percentage point of that production is about 193 GWh (19,314 × 0.01), as a scale illustration only; it is not an estimate of losses or theft volume.

## Why confidence is what it is

The trend is supported by ONEM’s official series (tier A): its gross-production loss indicator increased from 11.4% in 2010 to 21.1% in 2024. World Bank documents report 12% in 2010 and 21% in 2021, and 18.4% in 2023 on a different injected-energy indicator. The exact level differs by source and described basis: for 2023, ONEM reports 20.0% and the World Bank 18.4%. Their underlying calculations are not reconciled. The technical versus commercial split is the weak point. ONEM's transmission and distribution
figures come second-hand from a STEG report we could not open. The alternative split rests on an
anonymous official quoted in the press. ONEM and the World Bank identify diversion/fraud as important contributors, but neither establishes the share of the historical increase attributable to theft or publishes a comparable theft-volume series. Confidence is medium.

## Links to other sectors

Electricity network losses entail generation that does not reach billed end use. Tunisia’s generation mix and gas imports are covered in FND-TG-101, but the cited sources do not quantify the gas use or import cost attributable to these losses. Links to water and
agriculture: none found.

## Leads for phase 2

- TEREG programme DLI 3, which targets 15% total losses, with AMI, wholesale metering and
  anti-theft measures (World Bank P507304):
  https://documents1.worldbank.org/curated/en/099041025150537909/text/BOSIB-5b68fe2f-7a73-435b-930b-ec670325463c.txt
- Government Decree 2018-59 of 16 January 2018 (fine for electricity theft), cited in SRC-TG-222.
- STEG smart-grid (smart meter) project financed by AFD (not opened):
  https://www.tresor.economie.gouv.fr/Articles/2025/02/28/projet-smart-grid-de-la-steg-finance-par-l-afd-succes-de-la-phase-experimentale-et-lancement-de-la-mise-en-production
- STEG anti-theft inspection campaigns (SRC-TG-232).

## Verification

The national loss series is directly observed. ONEM’s attribution of diversion is identified as the agency’s assessment. The studies’ incompatible theft and technical-loss estimates do not yield a measured national theft fraction.

**Outstanding verification:** The aggregate loss series is supported; the technical/commercial breakdowns use different methods and cannot establish a measured theft share.
