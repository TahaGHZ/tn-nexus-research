---
id: FND-TG-500
title: Climate change is projected to cut Tunisia's renewable surface and groundwater resources by 2050, with national estimates from about -20% to -41% and disputed timing
status: in-review
sectors: [water, agriculture]
theme: surface-water
timeframe: predicted
period: baseline 1961-2022, horizon 2050 (some sources to 2100)
geography: [national, north-west, north-east, siliana]
severity: high
trend: worsening
confidence: medium
root_causes:
  - cause: Lower annual rainfall under warming (projected -6% to -9% nationally by 2050 under RCP4.5/8.5; -10% to -30% in the NDC) drives about two thirds of the projected runoff decline
    type: climatic
    legacy_decision: false
    sources: [SRC-TG-504, SRC-TG-508, SRC-TG-510]
  - cause: Higher temperature and evapotranspiration reduce runoff even at constant rainfall (-7% to -11% by 2050), about one third of the decline
    type: climatic
    legacy_decision: false
    sources: [SRC-TG-504]
  - cause: Population growth on a fixed resource base had already pushed per-capita renewable water below the 500 m3 absolute-scarcity threshold by 1990-91, so the climate-driven decline lands on structural scarcity (a cause of the per-capita scarcity, not of the resource decline itself)
    type: economic
    legacy_decision: false
    sources: [SRC-TG-507, SRC-TG-506]
indicators:
  - name: Renewable internal freshwater resources per capita
    value: 972
    unit: m3/person/year
    year: 1961
    geography: national
    source: SRC-TG-507
  - name: Renewable internal freshwater resources per capita
    value: 504
    unit: m3/person/year
    year: 1990
    geography: national
    source: SRC-TG-507
  - name: Renewable internal freshwater resources per capita
    value: 346
    unit: m3/person/year
    year: 2022
    geography: national
    source: SRC-TG-507
  - name: Mean surface water inflow, official baseline
    value: 2700
    unit: Mm3/year
    year: 1990/91-2015/16
    geography: national
    source: SRC-TG-504
  - name: Hydrologically dry years vs wet years
    value: 11 dry vs 6 wet
    unit: years
    year: 1990/91-2015/16
    geography: national
    source: SRC-TG-504
  - name: Projected change in mean surface inflow, Eau 2050 strategy (2732 to 2186 Mm3)
    value: -20
    unit: "%"
    year: 2040-2050 (climate period 2041-2063), RCP4.5
    geography: national
    source: SRC-TG-503
  - name: Projected change in 1-in-20 dry-year surface inflow, Eau 2050 strategy (851 to 510 Mm3)
    value: -40
    unit: "%"
    year: 2040-2050, RCP4.5
    geography: national
    source: SRC-TG-503
  - name: Projected change in surface inflow, AFD/PNA study (2494 to 1645 Mm3)
    value: -34
    unit: "%"
    year: 2050, RCP4.5
    geography: national
    source: SRC-TG-504
  - name: Projected change in surface inflow, AFD/PNA study (2494 to 1762 Mm3)
    value: -29
    unit: "%"
    year: 2050, RCP8.5
    geography: national
    source: SRC-TG-504
  - name: Projected change in surface water resources, as reported by the World Bank CCDR
    value: -41
    unit: "%"
    year: 2050, RCP4.5
    geography: national
    source: SRC-TG-482
  - name: Projected change in renewable groundwater (1620 to 1069 Mm3)
    value: -34
    unit: "%"
    year: 2050, RCP4.5
    geography: national
    source: SRC-TG-504
  - name: Projected runoff change, CMIP6 composite, Northern Tunisia (11 governorates across the north-west and north-east), average over 2021-2100 (slight change until the 2040s, peak drop -37% in the 2060s)
    value: -21
    unit: "%"
    year: 2021-2100, SSP2-4.5
    geography: north-west
    source: SRC-TG-510
  - name: Projected change in surface quick flow, Siliana watershed
    value: +4.11 (SSP1) / -24.5 (SSP2) / -27.52 (SSP3)
    unit: "%"
    year: 2050
    geography: siliana
    source: SRC-TG-506
  - name: Projected share of dry years
    value: 52 (RCP4.5) / 79 (RCP8.5)
    unit: "% of years"
    year: 2031-2050
    geography: national
    source: SRC-TG-482
projection:
  horizon: 2050 (with 2030 and 2100 points from some sources)
  scenario: RCP4.5 and RCP8.5 (AFD/PNA, Eau 2050, CCDR); SSP2-4.5 (Besbes and Chahed, CMIP6); SSP1/2/3 (Siliana); SRES A2 (Gafrej and Pillet)
  method: "AFD/PNA: national 5 km climate model with empirical water-balance runoff formulas (Tixeront, Turc, Schreiber), recharge assumed to change at the runoff rate. Eau 2050: MARHP hydro-economic model, RCP4.5 2041-2063. Besbes and Chahed: lumped rainfall-runoff model driven by a two-GCM CMIP6 composite selected on 1995-2014 fit"
  source: SRC-TG-504
stakeholders: [MARHP, DGRE, BPEH, SONEDE, irrigators in public irrigated schemes, rainfed cereal farmers in the north, CRDA regional offices]
related: [FND-TG-501, FND-TG-502, FND-TG-425, FND-TG-427, FND-TG-410]
sources: [SRC-TG-503, SRC-TG-504, SRC-TG-482, SRC-TG-506, SRC-TG-507, SRC-TG-508, SRC-TG-509, SRC-TG-510]
data_gaps:
  - MARHP 2022 document behind the 357 to 268 m3/capita projection (cited in SRC-TG-506); not opened, and its numerator definition is unknown
  - IPCC AR6 WGI/WGII regional (Mediterranean / North Africa) precipitation and runoff projections for Tunisia; not opened in this run
  - WRI Aqueduct 4.0 projected water stress and supply change for Tunisia at 2030/2050; dataset not opened (only a secondary citation in SRC-TG-506)
  - FAO AQUASTAT total renewable water resources (including the external Medjerda inflow from Algeria); only the WDI internal series was opened
  - Peer-reviewed national-scale (not northern-only) runoff and recharge projections under CMIP6; none found open
  - Dakhlaoui et al. 2022, Deidda et al. 2013, Terink et al. 2013 cited in SRC-TG-510 were not opened
  - The Eau 2050 full stage-3 report (Modèles prévisionnels offre-demande); only the synthesis was opened
  - "Independent check (source-verifier): Ben Nsir et al. 2022, Water 14(14):2242, doi:10.3390/w14142242, tier A, Lakhmass catchment (126 km2, north-west). The Crossref abstract gives discharge -12.5% (RCP4.5) and -36.6% (RCP8.5) by 2070-2099. This supports a later, smaller RCP4.5 decline than AFD's -34% at 2050. Only the abstract was read and no SRC record was created, so the figure is not used in the body"
author: TahaGHZ
---

## Problem

Tunisia's renewable water resources are projected to shrink by 2050 as rainfall falls and evapotranspiration rises. National estimates for 2050 range from about -20% to -41% of surface water, and sources disagree on whether the main drop comes before or after 2050.

The national strategy Eau 2050 puts mean surface inflow at 2,732 Mm3 today and 2,186 Mm3 under RCP4.5 at the 2040-2050 horizon, about -20%. The 1-in-20 dry-year inflow falls from 851 to 510 Mm3, about -40% (SRC-TG-503). The National Adaptation Plan preparatory study for MARHP/AFD projects national inflows 29-34% below its modelled reference by 2050 and renewable groundwater 29-34% lower (SRC-TG-504). The World Bank CCDR reports -41% for surface water (SRC-TG-482). An older HadCM3 study (horizon 2030) assumed that the small projected rainfall decline would not affect dam inflows. It put the climate effect mainly on evaporation and storage, and the resource loss mainly on overexploited and saline aquifers (SRC-TG-509). The only peer-reviewed CMIP6 study found, for Northern Tunisia, shows slight change until the 2040s and the biggest drop (-37% runoff) in the 2060s (SRC-TG-510).

The baseline is already scarce. Renewable internal freshwater per inhabitant fell from about 972 m3 in 1961 to 504 m3 in 1990 and 346 m3 in 2022 (SRC-TG-507). That decline was driven by population growth, not climate.

## Root causes

**Symptom vs cause.** Low dam storage and dry years are the symptoms. This finding is about the underlying shrinking of the renewable resource itself.

1. **Historical, demographic (past to current).** The WDI series holds the resource at a constant 4.195 billion m3/yr, so the fall from 972 to 346 m3/person over 1961-2022 is entirely population growth (SRC-TG-507). Tunisia crossed the 500 m3/person absolute-scarcity threshold in 1990-91 (504 m3 in 1990). This is a cause of per-capita scarcity, not of the projected shrinking of the resource. It matters because climate change lands on a system already at structural scarcity.
2. **Climatic: less rain (predicted).** The AFD/PNA study projects a 6-9% fall in national annual precipitation by 2050 relative to 1981-2010. Lower rain explains about two thirds of the projected runoff decline (SRC-TG-504). The NDC synthesis gives a wider and more pessimistic range of -10% to -30% by 2050 without naming its source (SRC-TG-508).
3. **Climatic: more evaporation (predicted).** With rainfall held constant, warming alone cuts runoff by 7-11% by 2050, about one third of the decline (SRC-TG-504).
4. **Climatic: variability.** The AFD study argues that heavier but rarer storms are unlikely to refill dams and aquifers, because extreme rainfall may become less frequent and less intense south of the Mediterranean (SRC-TG-504). The CCDR projects dry years rising to 52% (RCP4.5) or 79% (RCP8.5) of years in 2031-2050 (SRC-TG-482).

No single past policy decision causes this finding. Policy decisions shape how the shrinking resource is shared; see FND-TG-501.

## Evidence

**Projected surface-water change by 2050 (or nearest horizon), by source**

| Source | Scenario | Geography | Change |
|---|---|---|---|
| Eau 2050 strategy (SRC-TG-503) | RCP4.5, 2041-2063 | national | mean inflow 2,732 → 2,186 Mm3 (-20%); 1-in-20 dry year 851 → 510 Mm3 (-40%) |
| AFD/PNA, Table 6 (SRC-TG-504) | RCP4.5 | national | 2,494 → 1,645 Mm3 (-34%) |
| AFD/PNA, Table 6 (SRC-TG-504) | RCP8.5 | national | 2,494 → 1,762 Mm3 (-29%) |
| AFD/PNA summary (SRC-TG-504) | all formulas and scenarios | national | -25% to -36% |
| World Bank CCDR (SRC-TG-482) | RCP4.5 | national | -41% (cites AFD 2020) |
| Besbes and Chahed (SRC-TG-510) | SSP2-4.5 CMIP6 | Northern Tunisia | slight change to the 2040s, -37% in the 2060s, -21% on average over 2021-2100 |
| WB NbS note (SRC-TG-506) | SSP1 / SSP2 / SSP3 | Siliana watershed | +4.11% / -24.5% / -27.52% |

**Groundwater.** The AFD/PNA study assumes recharge changes at the same rate as runoff. Renewable groundwater would fall from 1,620 Mm3 (MARHP official) to 1,069 Mm3 (RCP4.5) or 1,150 Mm3 (RCP8.5) by 2050 (Table 8). The study's own text gives a different starting value of 1,524 Mm3 (SRC-TG-504). The CMIP6 study projects a 15% fall in recharge in Northern Tunisia on average over 2021-2100, peaking at -21% in the 2060s (SRC-TG-510). In contrast, Eau 2050 keeps renewable groundwater constant at 2,190 Mm3 to 2050 (SRC-TG-503). The fossil Saharan aquifers are affected by demand only, not by climate (SRC-TG-504).

**Per-capita trajectory.** WDI shows 504 m3 (1990), 390 m3 (2010) and 346 m3 (2022) (SRC-TG-507). Forward projections disagree and use different numerators; see FND-TG-501.

**Disagreements, stated rather than resolved**

- *Magnitude.* Eau 2050 (-20%) is about half the AFD and CCDR figures (-29% to -41%). Part of the difference is about what each source measures:
  - Eau 2050 synthesis table: -20% for mean surface inflow and -6.5% for total conventional resources (4,922 → 4,601 Mm3), because renewable groundwater is held constant (SRC-TG-503).
  - "Mobilisable conventional water" in AFD Table 30: 4,508 Mm3 (2018) → 3,101 Mm3 in the STUDI/Eau 2050 stage-3 balance (-31%), and → 2,912 Mm3 in the PNA RCP8.5 balance (-35%) (SRC-TG-504).
  This mobilisable-water figure explains the CCDR's statement that Eau 2050 projects about -30% (footnote 87, SRC-TG-482) and the AFD's statement that its estimate is within 6% of STUDI-GKW's. The official strategy therefore reports -6.5%, -20% or -31% depending on the variable.
- *Scenario ordering.* In AFD Table 6, RCP4.5 is drier than RCP8.5 at 2050 (-34% vs -29%) (SRC-TG-504). At mid-century the scenario signal is smaller than the spread between models and formulas.
- *Timing.* The peer-reviewed CMIP6 study finds only slight change until the 2040s (SRC-TG-510). Studies that report a large drop already at 2050 rely on RCP-based regional modelling with empirical runoff formulas (SRC-TG-504). Earlier regional-model studies reviewed by Besbes and Chahed give -5% to -17% precipitation around 2040-2070 for the north (SRC-TG-510; secondary citations).
- *CCDR vs its own source.* The CCDR's -41% surface-water figure does not appear in the final April 2021 AFD study it cites, which gives -25% to -36% (SRC-TG-504, SRC-TG-482).

## Why confidence is what it is

- **Solid.** The direction is consistent: every scenario except SSP1 in Siliana projects a decline. The historical per-capita series is a tier-A dataset. The precipitation and evapotranspiration mechanism is explained consistently across sources.
- **Contested.** The size of the 2050 decline ranges from about -20% (Eau 2050 mean inflow) to -41% (CCDR). On timing, the peer-reviewed CMIP6 study puts the main drop after the 2040s. Two of the larger national figures (CCDR and AFD) are one study, not two independent confirmations.
- **Tiers.** Most national projections are tier B (government and donor reports). The only tier-A projection covers Northern Tunisia under one scenario and shows a later, deeper drop.
- **Method limits.** Empirical runoff formulas, and the assumption that recharge follows runoff, are simplifications. Hence `medium`, not `high`.

## Links to other sectors

- **Agriculture.** Irrigated agriculture uses about 80% of resources (SRC-TG-503, SRC-TG-504). A shrinking resource directly cuts the water allocated to public irrigated schemes. In the 2015-2018 drought, quotas were cut to 27% of normal supply (SRC-TG-504). Lower rainfall also reduces green water for rainfed cereals, though less than blue water: -6% vs -21% runoff on average to 2100 (SRC-TG-510).
- **Energy.** Less surface water pushes supply towards desalination. SONEDE's reliance on desalination has already raised its energy costs; it used 0.67 kWh/m3 in 2021 against a European median of 0.51 kWh/m3 (SRC-TG-482).

## Leads for phase 2

- Stratégie Eau 2050 and its action plan (MARHP / STUDI-GKW): https://www.environnement.gov.tn/fileadmin/Bibliotheque/SNTE/Synthese-Eau-2050.pdf
- National Adaptation Plan (PNA) preparatory process, AFD Adapt'Action facility
- Nature-based solutions for watershed recharge (World Bank NbS technical note, Siliana case): https://documents1.worldbank.org/curated/en/099050625144519276/pdf/P180858-8ac899dd-23cf-4e37-a1f6-ae5055c3b78c.pdf
- Assisted infiltration of flood waters downstream of dams (225 Mm3 line in the Eau 2050 balance)
- Water and soil conservation (CES) programmes
- MARHP hydro-economic model (MHE) as a planning tool

## Verification

**Independent review, 21 November 2026:** pass. Originals checked: World Bank WDI series ER.H2O.INTR.PC (1961, 1990, 1991, 2022); AFD/PNA study (SRC-TG-504) section 3.1 hydrology, Table 6 (surface inflow), Table 8 (groundwater), climate section (precipitation -6% to -9%, warming effect 7-11%) and section 3.3 (11 dry vs 6 wet years); Eau 2050 synthesis (SRC-TG-503) balance table, "Scenario Eau et Développement Durable" (inflow 2,732 to 2,186 Mm3; 851 to 510 Mm3; groundwater 2,190 Mm3); CCDR French edition (SRC-TG-482) section 3.1.1 and footnote 82 (-41%, dry-year shares 52% and 79%); Besbes and Chahed (SRC-TG-510) Table 5 and text (-21%, -37%); World Bank NbS note (SRC-TG-506) Siliana section and introduction (500 m3 threshold). The CCDR -41% being absent from the AFD study (which gives 25-36% to 2050) and the fossil-aquifer statement (AFD p. 42-43) were also confirmed in the AFD text. No corrections.

Independent teammate sign-off is outstanding; reviewer and author share the TahaGHZ identity, so the record is not validated.
