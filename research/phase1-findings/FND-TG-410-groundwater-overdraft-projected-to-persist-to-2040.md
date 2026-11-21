---
id: FND-TG-410
title: Even the national water strategy's own target scenario keeps aquifers overdrawn until the 2040s, and earlier projections of the groundwater resource have already proved unreliable
status: draft
sectors: [water, agriculture]
theme: groundwater
timeframe: predicted
period: horizon 2050
geography: [national]
severity: high
trend: unknown
confidence: low
root_causes:
  - cause: "Irrigation demand drawn largely from groundwater exceeds renewable groundwater (2,190 Mm3); the strategy scenario only closes the gap by cutting irrigation demand by about 26% and adding treated wastewater and desalination"
    type: economic
    legacy_decision: true
    sources: [SRC-TG-503]
  - cause: "Drivers of current overdraft (illicit drilling, weak enforcement, free shallow drilling to 50 m) remain in place; see FND-TG-400 and FND-TG-401"
    type: institutional
    legacy_decision: true
    sources: [SRC-TG-402, SRC-TG-406]
indicators:
  - name: Aquifer exploitation rate, strategy scenario
    value: 139
    unit: "% (overdraft 865 Mm3 on 2,190 Mm3 renewable groundwater)"
    year: 2020
    geography: national
    source: SRC-TG-503
  - name: Aquifer exploitation rate, strategy scenario
    value: 115
    unit: "% (overdraft 334 Mm3)"
    year: 2030
    geography: national
    source: SRC-TG-503
  - name: Aquifer exploitation rate, strategy scenario
    value: 106
    unit: "% (overdraft 142 Mm3)"
    year: 2040
    geography: national
    source: SRC-TG-503
  - name: Aquifer exploitation rate, strategy scenario
    value: 99
    unit: "% (surplus 28 Mm3)"
    year: 2050
    geography: national
    source: SRC-TG-503
  - name: Projected exploitable groundwater potential (EAU 21, 1998)
    value: "1,970 (1996), 1,620 (2020), 1,550 (2030)"
    unit: Mm3/yr
    year: 2030
    geography: national
    source: SRC-TG-404
  - name: Groundwater resource actually used by DGRE (shallow 770 in 2020 + deep 1,422 in 2016)
    value: 2192
    unit: Mm3/yr
    year: 2020
    geography: national
    source: SRC-TG-403
projection:
  horizon: "2020-2050 (2030, 2035, 2040, 2050 milestones)"
  scenario: "EAU 2050 'Eau et développement durable' normative scenario: strategy fully implemented, irrigation demand stabilised and reduced from 3,382 to 2,502 Mm3, reuse and desalination expanded; RCP4.5 climate from 2040. Not a business-as-usual projection."
  method: "Hydro-economic supply-demand model (MHE) of the EAU 2050 study (MARHP/BPEH, STUDI International/GKW), synthesis table"
  source: SRC-TG-503
stakeholders: ["Ministry of Agriculture (BPEH, DGRE and DGGREE)", irrigating farmers, SONEDE, Parliament]
related: [FND-TG-400, FND-TG-401, FND-TG-500, FND-TG-501, FND-TG-502]
sources: [SRC-TG-503, SRC-TG-504, SRC-TG-404, SRC-TG-402, SRC-TG-403, SRC-TG-406, SRC-TG-409]
data_gaps:
  - "No business-as-usual (no-strategy) projection of groundwater exploitation or water-table decline was found for Tunisia or for Kairouan, Sidi Bouzid, Kasserine or Cap Bon."
  - "No projection of when specific central aquifers become uneconomic or too saline to pump was found."
  - "EAU 2050 full study (diagnostic and scenario volumes) not opened; only the synthesis, via SRC-TG-503 created by another agent."
  - "The EAU 21 (1998) strategy document was not opened; its projection is quoted second-hand in SRC-TG-404."
  - "Ncibi et al. (2026) Sidi Bouzid North MODFLOW scenarios (anthropogenic vs climate) seen only as an abstract; not usable."
author: TahaGHZ
---

## Problem

The 2050 national water strategy (EAU 2050) starts from an aquifer exploitation rate of 139% in 2020: 865 Mm3 a year drawn beyond 2,190 Mm3 of renewable groundwater (SRC-TG-503). Its target scenario lowers the rate to 115% in 2030, 108% in 2035 and 106% in 2040, and reaches balance (99%) only in 2050 (SRC-TG-503). This path is normative. It assumes the strategy is fully executed, including a cut in irrigation demand from 3,382 to 2,502 Mm3 and large volumes of treated wastewater and desalinated water (SRC-TG-503). Under the government's own best case, aquifers therefore stay overdrawn for at least another two decades. Each year of overdraft lowers water tables further in the central hotspots documented in FND-TG-400 and FND-TG-401.

## Root causes

The projection does not model a new cause. It carries forward the existing gap between irrigation demand and renewable groundwater (SRC-TG-503), and the drivers documented in FND-TG-400 (illicit drilling, weak enforcement, free solar pumping) and FND-TG-401 (free drilling to 50 m under Article 9, SRC-TG-406). Nothing in the opened sources shows these drivers changing. A new water code has been pending since at least 2017 (SRC-TG-402), and a bill to regularise unauthorised deep wells was under discussion in 2026 (SRC-TG-409, tier C).

## Evidence

- EAU 2050 synthesis table: exploitation rate 139% (2020), 126% (2025), 115% (2030), 108% (2035), 106% (2040), 99% (2050). The overdraft balance is -865, -567, -334, -186, -142 and +28 Mm3 (SRC-TG-503).
- The renewable groundwater figure in EAU 2050 (2,190 Mm3) matches the sum of the DGRE shallow resource (770 Mm3, 2020, SRC-TG-403) and deep resource (1,422 Mm3, 2016, SRC-TG-402).
- **Disagreement on the 2020 starting point.** EAU 2050's 139% implies about 3,055 Mm3 of groundwater withdrawals. The DGRE-based indicators give 914 Mm3 shallow and, for deep aquifers, 1,381 Mm3 authorised plus 541 Mm3 illicit, or 1,922 Mm3 (SRC-TG-403). That is about 2,836 Mm3 in total, or roughly 129% of 2,190 Mm3. This is our calculation; the reference years differ slightly (2020 for shallow, about 2021 for deep). Both values are kept.
- **Scope.** The Eau 2050 figure is national and includes the South's aquifers, where 60% of deep-aquifer exploitation takes place (SRC-TG-402). It does not show the path for the central hotspots. The 139% indicator is also carried by FND-TG-501, which covers the overall supply-demand balance; this finding covers only the groundwater path.
- **Earlier projections proved unreliable.** The EAU 21 strategy (1998), as quoted in the 2008 national study, projected exploitable groundwater falling from 1,970 Mm3 (1996) to 1,620 Mm3 in 2020 and 1,550 Mm3 in 2030 (shallow 620 and deep 1,000 Mm3 in 2020) because of overexploitation (SRC-TG-404). DGRE's 2016-2020 resource figures are higher, at 770 + 1,422 Mm3 (SRC-TG-402, SRC-TG-403). The resource estimate went up through prospecting and re-evaluation, not down. Any projection framed as an exploitation rate depends heavily on how the denominator is revised.
- **The denominator itself is projected to shrink.** EAU 2050 holds renewable groundwater constant at 2,190 Mm3 to 2050. Climate studies cited in FND-TG-500 project lower recharge. The AFD/PNA study has renewable groundwater going from 1,620 Mm3 (official) to 1,069 Mm3 (RCP4.5) or 1,150 Mm3 (RCP8.5) by 2050, and in its text from 1,524 to about 1,000 Mm3 (SRC-TG-504). The two studies also disagree on today's base: 1,524 or 1,620 Mm3 in the AFD/PNA study against 2,190 Mm3 in EAU 2050. The gap is about the size of the non-renewable share of deep aquifers (about 47% of 1,422 Mm3, SRC-TG-402), but neither source explains it. If recharge falls, the same withdrawals give higher exploitation rates than the EAU 2050 path. FND-TG-500 covers resource decline in general.

## Why confidence is what it is

Low. The only forward-looking groundwater figures come from a normative strategy scenario (tier B synthesis, via SRC-TG-503), not from a business-as-usual projection or an aquifer model. Its 2020 starting value disagrees by about 10 points with the DGRE-based figure. The older EAU 21 projection is quoted second-hand and was not borne out. What is fairly robust is the direction: even the official target path keeps aquifers above 100% until the 2040s.

## Links to other sectors

- **Agriculture:** the scenario closes the groundwater gap mainly by cutting irrigation demand by about 26% between 2020 and 2050 (SRC-TG-503). Whether irrigated agriculture can shrink its water use by that much is outside this finding (see the irrigation-efficiency work in block 525-549).
- **Energy:** the scenario depends on desalination rising from 18 to 265 Mm3 (SRC-TG-503), which adds electricity demand. This is not quantified here.

## Leads for phase 2

- EAU 2050 strategy and action plan (SRC-TG-503).
- New Water Code and draft law no. 18/026 on regularising unauthorised deep wells (SRC-TG-402, SRC-TG-409).
- Artificial recharge with treated wastewater (SRC-TG-402, SRC-TG-503).
