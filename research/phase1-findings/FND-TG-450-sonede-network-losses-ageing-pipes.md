---
id: FND-TG-450
title: About a third of the water SONEDE produces is not recorded as consumed, because an ageing network is renewed far more slowly than it breaks
status: draft
sectors: [water, energy]
theme: drinking-water
timeframe: current
period: 2004-2023
geography: [national, gabes, tataouine, medenine, gafsa]
severity: high
trend: stable
confidence: high
root_causes:
  - cause: Ageing pipes (grey cast iron, lead connections) inherited by or laid early in SONEDE's life, renewed at about 200 km a year against a network of more than 48,000 km of distribution pipes
    type: technical
    legacy_decision: true
    sources: [SRC-TG-455, SRC-TG-402, SRC-TG-453]
  - cause: Investment in renewal lagged network extension (inferred - SONEDE extends the network every year to meet demand while renewing about 200 km a year)
    type: policy
    legacy_decision: true
    sources: [SRC-TG-402, SRC-TG-455, SRC-TG-467]
  - cause: Commercial losses (unauthorised consumption, faulty meters), on top of physical leaks
    type: institutional
    legacy_decision: false
    sources: [SRC-TG-456, SRC-TG-467]
indicators:
  - name: Volume produced by SONEDE
    value: 773.3
    unit: Mm3
    year: 2023
    geography: national
    source: SRC-TG-453
  - name: Volume consumed (SONEDE)
    value: 516.0
    unit: Mm3
    year: 2023
    geography: national
    source: SRC-TG-453
  - name: Share of produced volume not recorded as consumed (derived, 1 - 516.0/773.3)
    value: 33.3
    unit: "%"
    year: 2023
    geography: national
    source: SRC-TG-453
  - name: Share of produced volume not recorded as consumed (derived, 1 - 472/680.5)
    value: 30.6
    unit: "%"
    year: 2017
    geography: national
    source: SRC-TG-402
  - name: Distribution network efficiency (rendement distribution)
    value: 77.7
    unit: "%"
    year: 2023
    geography: national
    source: SRC-TG-453
  - name: Transmission network efficiency (rendement adduction)
    value: 86.8
    unit: "%"
    year: 2023
    geography: national
    source: SRC-TG-453
  - name: Overall network efficiency (rendement global, official)
    value: 70.3
    unit: "%"
    year: 2017
    geography: national
    source: SRC-TG-402
  - name: Distribution efficiency, Tataouine district
    value: 53.1
    unit: "%"
    year: 2017
    geography: tataouine
    source: SRC-TG-402
  - name: Distribution efficiency, Gabes district
    value: 57.4
    unit: "%"
    year: 2017
    geography: gabes
    source: SRC-TG-402
  - name: Pipe breaks repaired
    value: 22191
    unit: breaks
    year: 2023
    geography: national
    source: SRC-TG-453
  - name: Pipe breaks
    value: 13869
    unit: breaks
    year: 2013
    geography: national
    source: SRC-TG-402
  - name: Pipe breaks
    value: 12364
    unit: breaks
    year: 2004
    geography: national
    source: SRC-TG-455
  - name: Leaks repaired
    value: 209090
    unit: leaks
    year: 2023
    geography: national
    source: SRC-TG-453
  - name: Share of pipes older than 37 years
    value: ">25"
    unit: "%"
    year: 2017
    geography: national
    source: SRC-TG-402
  - name: Network rehabilitation rate
    value: 200
    unit: km/year
    year: 2017
    geography: national
    source: SRC-TG-402
  - name: Recoverable real losses (SONEDE estimate)
    value: 86
    unit: Mm3/year
    year: 2017
    geography: national
    source: SRC-TG-402
stakeholders: [SONEDE, Ministry of Agriculture Water Resources and Fisheries (MARHP), urban and rural subscribers, STEG (pumping electricity), donors financing network rehabilitation (KfW, EBRD)]
related: [FND-TG-451, FND-TG-452, FND-TG-476, FND-TG-426, FND-TG-501]
sources: [SRC-TG-453, SRC-TG-402, SRC-TG-455, SRC-TG-456, SRC-TG-467, SRC-TG-503]
data_gaps:
  - SONEDE's official definition of "rendement global", "rendement distribution" and "volume consommé" (billed or not); the 2023 statistical synthesis report was blocked (HTTP 403).
  - Split of non-revenue water into physical and commercial losses at national level for a stated year from SONEDE itself; RVO gives 24% physical plus 8% unauthorised without a year or source.
  - Official age profile of the network after 2017, and renewal km per year after 2017.
  - A continuous yearly series of overall efficiency 2000-2023 from one source; the 2017 report says efficiency fell "for several consecutive years" before 2015 but gives no numbers.
  - A claim of losses "up to 50%" quoted in La Presse (February 2025) was seen only as a search snippet and is not used.
  - Energy (kWh) embedded in lost water. SONEDE's average kWh/m3 is known (SRC-TG-453), but losses occur at different points in the system, so it was not multiplied out.
author: TahaGHZ
---

## Problem

In 2023 SONEDE produced 773.3 Mm3 of drinking water, distributed 667.9 Mm3, and recorded 516.0 Mm3 consumed (SRC-TG-453). About 257 Mm3, a third of production (33.3%, derived), is therefore lost in transmission, lost in distribution, or used without being recorded. Measured the same way the gap was 30.6% in 2017 (472 of 680.5 Mm3, derived from SRC-TG-402), so it has not narrowed. Distribution efficiency was 77.7% and transmission efficiency 86.8% in 2023 (SRC-TG-453). In 2017 distribution efficiency was as low as 53-64% in the southern districts supplied with desalinated brackish water, water whose treatment the ministry says carries fairly high operating costs (SRC-TG-402).

## Root causes

The symptom is the volume lost. The causes are as follows.

1. **An old network, renewed slowly.** In 2009 the World Bank noted that the assets SONEDE inherited and built in its first years were ageing, especially grey cast-iron mains and lead connections, and needed urgent renewal (SRC-TG-455). In 2017 the ministry reported that more than a quarter of pipes were over 37 years old. At 200 km of rehabilitation a year, it judged that losses and breaks "are unlikely to fall in the long term" (SRC-TG-402). At that pace, renewing the 48,241 km distribution network of 2023 (SRC-TG-453) would take more than two centuries (derived).
2. **Extension ahead of renewal (inferred).** The ministry notes that SONEDE "réalise des extensions de réseau importantes chaque année" to meet demand (SRC-TG-402), while renewal stays at about 200 km a year. Pipe breaks rose from 12,364 in 2004 (SRC-TG-455) to 13,869 in 2013 and 20,375 in 2017 (SRC-TG-402), and SONEDE repaired 22,191 in 2023 (SRC-TG-453). The network kept growing over the same period (transmission plus distribution length went from 58,001 km in 2022 to 58,546 km in 2023, derived from SRC-TG-453). The 2017 report ties the 2017 fall in efficiency directly to the rise in breaks (SRC-TG-402). One expert dates the State's withdrawal from financing water infrastructure to 1995-1996 (SRC-TG-467, tier C, single expert, not corroborated).
3. **Commercial losses.** The Dutch RVO inventory puts physical losses at up to 24% nationally (30% in some regions) plus about 8% unauthorised consumption (SRC-TG-456, no year given). The same expert reports more than 100,000 faulty SONEDE meters (SRC-TG-467, tier C, unverified).

Low tariffs and SONEDE's financial deficit, which limit its capacity to invest, are covered by the tariffs lane (FND-TG-476). They are noted here only as a cause.

## Evidence

- **Volumes, 2021-2023.** Produced 779.9 / 806.4 / 773.3 Mm3; consumed 511.8 / 522.3 / 516.0 Mm3. Distribution efficiency 76.3 / 76.8 / 77.7%; transmission efficiency 88.5 / 85.9 / 86.8% (SRC-TG-453). The product of the two 2023 efficiencies (67.4%) is close to consumed/produced (66.7%), which supports reading the gap as about one third. Both figures are derived.
- **Official overall efficiency.** 70.7% (2015), 71.5% (2016) and 70.3% (2017), "after several consecutive years of decline" before 2015 (SRC-TG-402). Distribution efficiency was 76.3% in 2017, and again 76.3% in 2021 (SRC-TG-402, SRC-TG-453). It was about 76-78% in both 2017 and 2021-2023; no data for 2018-2020 was found.
- **Recoverable volume.** SONEDE estimated in 2017 that recovering real losses would save about 86 Mm3 a year. That is about 20% of water consumed and billed, and more than the capacity of the four seawater desalination plants then under way (SRC-TG-402).
- **Repairs.** 209,090 leaks and 22,191 breaks were repaired in 2023, about 4 per km of network (SRC-TG-453).
- **Regional extremes.** Distribution efficiency in 2017 was 53.1% in Tataouine, 57.4% in Gabès, 63.5% in Médenine and 59% in Gafsa, against 83% in Jendouba (SRC-TG-402). In Gabès, a 2025 stakeholder interview gives 45% of distributed water as not sold (SRC-TG-456, interview note).

**Sources disagree on the loss rate, because each uses a different definition:**

| Loss rate | Definition | Source |
|---|---|---|
| 33.3% (2023, derived) | Production not recorded as consumed | SRC-TG-453 |
| 22.3% (2023) | Distribution loss | SRC-TG-453 |
| 23.7% (2017) | Distribution loss | SRC-TG-402 |
| up to 24% physical plus about 8% unauthorised (undated) | Physical and unauthorised use | SRC-TG-456 |
| 20-25% (2026, expert) | Water injected but not delivered | SRC-TG-467 |

These are not contradictory, but they should not be quoted interchangeably.

## Why confidence is what it is

The volumes and efficiencies come from SONEDE's own published statistics (SRC-TG-453) and the ministry's national water report (SRC-TG-402), both tier A, and they agree. The main uncertainties are three:

- SONEDE does not define its indicators on the page used.
- The 2023 synthesis report could not be opened.
- The physical/commercial split rests on an undated donor report (SRC-TG-456) and a single expert (SRC-TG-467).

Break counts compare "casses" (2004, 2013, 2017) with "casses réparées" (2023), so the long-run trend is indicative. The ageing-network diagnosis is consistent across the World Bank (2009) and the ministry (2017).

## Links to other sectors

- **Energy.** Every lost cubic metre has already been pumped, treated or desalinated. The districts with the worst distribution efficiency are those using desalinated brackish water, whose treatment "accuse des charges d'exploitation assez élevées" (SRC-TG-402). The ministry also compares recoverable losses (86 Mm3) with the capacity of four seawater desalination plants (SRC-TG-402), SONEDE's average specific energy use rose from 0.685 kWh/m3 (2022) to 0.725 kWh/m3 (2023) (SRC-TG-453), so lost water also carries an energy cost (no volume-energy calculation is made here).
- **Agriculture.** Indirect: the water SONEDE loses comes from the same dams and aquifers that irrigation draws on.

## Leads for phase 2

- SONEDE Programme d'Amélioration des Performances (PAP), seven districts: Kairouan, Kasserine, Sidi Bouzid, Gafsa, Gabès, Médenine, Tataouine. https://www.sonede.com.tn/strategie/amelioration-des-performances/
- Ministry recommendation to renew at least 1% of the network a year and reach more than 80% efficiency (SRC-TG-402).
- NRW-reduction programmes financed by KfW and EBRD (listed in SRC-TG-456).
- Smart meters, suggested by the ministry on the model of STEG (SRC-TG-402).
- Eau 2050 strategy, "Rénovation des Réseaux de l'Adduction et de Distribution" (SRC-TG-503 document; the extract for this item is not yet in that record).
