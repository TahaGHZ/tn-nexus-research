---
id: FND-TG-502
title: Sea-level rise will aggravate seawater intrusion that pumping already causes in Tunisia's coastal aquifers; official projections of the 2050 loss (50% vs 75%) disagree and are unsupported by a published method
status: draft
sectors: [water, agriculture]
theme: water-quality
timeframe: predicted
period: observed 2006-2021, horizon 2050
geography: [national, north-east, centre-east, nabeul]
severity: high
trend: worsening
confidence: medium
root_causes:
  - cause: Groundwater pumping above recharge, largely for irrigation and with many illegal boreholes, lowers water tables below sea level and reverses the hydraulic gradient (the existing driver)
    type: behavioural
    legacy_decision: true
    sources: [SRC-TG-482, SRC-TG-511]
  - cause: Sea-level rise of 30-50 cm by 2050 is expected to accelerate intrusion into already overexploited coastal aquifers
    type: climatic
    legacy_decision: false
    sources: [SRC-TG-504, SRC-TG-508]
  - cause: Reduced recharge under lower rainfall weakens freshwater outflow to the sea
    type: climatic
    legacy_decision: false
    sources: [SRC-TG-504]
indicators:
  - name: Piezometric level in Korba coastal aquifer depressions
    value: about -12
    unit: m relative to sea level
    year: 2006
    geography: nabeul (Korba, Cap Bon)
    source: SRC-TG-511
  - name: Authorised vs illegal groundwater boreholes
    value: 14117 authorised / 20350 illegal
    unit: boreholes
    year: 2021
    geography: national
    source: SRC-TG-482
  - name: Share of groundwater resources above 1.5 g/L salinity
    value: up to 85
    unit: "%"
    year: not stated (reported in 2023 CCDR)
    geography: national
    source: SRC-TG-482
  - name: Projected sea-level rise
    value: 30-50
    unit: cm
    year: 2050
    geography: national coast
    source: SRC-TG-508
  - name: Projected loss of coastal aquifer resources (AFD/PNA, repeated by CCDR)
    value: about 50
    unit: "% of resources"
    year: 2050 (RCP4.5 per CCDR footnote 83)
    geography: national coast
    source: SRC-TG-504
  - name: Projected loss of coastal shallow-aquifer resources (updated NDC)
    value: about 75 (about 220 Mm3/year)
    unit: "% of resources"
    year: 2050, RCP8.5
    geography: national coast
    source: SRC-TG-508
  - name: Share of Tunisian coastline classed vulnerable to very highly vulnerable
    value: 44
    unit: "%"
    year: 2021 (assessment)
    geography: national coast
    source: SRC-TG-508
  - name: Coastline length affected by sea-level rise
    value: 24 (SSP2/SSP3) / 15 (SSP1)
    unit: "% of coastline length"
    year: 2050
    geography: national coast
    source: SRC-TG-482
projection:
  horizon: 2050
  scenario: RCP4.5 (AFD/PNA, about 50% loss); RCP8.5 (NDC, about 75% loss); sea-level rise 30-50 cm
  method: Expert assessment in the PNA preparatory study and NDC vulnerability analysis; neither published document gives a model, aquifer list or method for the coastal-aquifer loss figure
  source: SRC-TG-504
stakeholders: ["farmers irrigating from coastal shallow aquifers in Cap Bon and the Sahel", MARHP, DGRE, CRDA Nabeul, SONEDE, "APAL, the coastal protection agency"]
related: [FND-TG-500, FND-TG-501, FND-TG-400, FND-TG-401]
sources: [SRC-TG-503, SRC-TG-504, SRC-TG-482, SRC-TG-508, SRC-TG-511]
data_gaps:
  - Inventory of which coastal aquifers make up the "ressources phréatiques littorales" and their total volume (about 293 Mm3/yr is implied by 220 Mm3 = 75%, but not stated)
  - Method behind the 50% (AFD) and 75% (NDC) coastal-aquifer loss estimates; no hydrogeological model is cited in either document
  - Peer-reviewed model projection of seawater intrusion under sea-level rise for any Tunisian aquifer (Korba, Sahel, Sfax, Djeffara); none opened
  - Recent (post-2015) salinity and piezometric monitoring data for Korba and other coastal aquifers from DGRE annual reports; not opened
  - Source and year of the CCDR claim that up to 85% of groundwater exceeds 1.5 g/L (no footnote in the extracted text)
  - IPCC AR6 regional sea-level projections for the Tunisian coast; not opened
author: TahaGHZ
---

## Problem

Coastal shallow aquifers supply much of the eastern littoral (SRC-TG-508). In parts of them, seawater is already entering because farmers pump more than recharge. In the Korba aquifer of Cap Bon, water tables were about 12 m below sea level in 2006, and chloride and ion-exchange evidence confirmed seawater intrusion (SRC-TG-511). Nationally, the World Bank reports 20,350 illegal boreholes against 14,117 authorised ones in 2021, and up to 85% of groundwater resources above 1.5 g/L salinity (SRC-TG-482).

Sea level is projected to rise 30-50 cm by 2050 (SRC-TG-504, SRC-TG-508). The PNA preparatory study estimates that coastal aquifers could lose about 50% of their resources by 2050 (SRC-TG-504). The updated NDC puts the loss at about 75%, roughly 220 Mm3 per year, under RCP8.5 (SRC-TG-508).

## Root causes

**Symptom vs cause.** Salty wells are the symptom. The cause is a reversed hydraulic gradient: freshwater heads falling below sea level.

1. **Human-made, existing (legacy practice).** Intensive private pumping for irrigation lowered the water table below sea level and drew the saltwater wedge inland (SRC-TG-511). Groundwater supplies 84% of irrigation water (SRC-TG-504), and illegal boreholes outnumber authorised ones (SRC-TG-482). The legacy decision is the historical policy focus on dams rather than aquifers, which the Eau 2050 synthesis names explicitly (SRC-TG-503). Overexploitation of inland aquifers in the north and centre is covered in FND-TG-400 (record block 400-424) and is not detailed here.
2. **Climatic, predicted.** Sea-level rise raises the seaward head. The AFD study says overexploited coastal aquifers "will undergo an acceleration of seawater intrusion" (SRC-TG-504).
3. **Climatic, predicted.** Recharge is projected to fall at the same rate as runoff, -29% to -34% by 2050 (SRC-TG-504; see FND-TG-500), which reduces freshwater pressure at the coast.

The evidence therefore does not support framing this as mainly a sea-level-rise problem. At Korba, intrusion was already documented in 2006 and attributed to pumping, not to the sea (SRC-TG-511). Sea-level rise is an aggravating factor on top of it.

## Evidence

- **Observed (Korba, 2006).** Piezometric depressions with "negative piezometric levels on the order of –12 m". High-salinity zones at Diar El Hajjej, Garaet Sassi and Takelsa-Korba are explained by seawater intrusion (SRC-TG-511).
- **Observed (national).** There were 14,117 authorised and 20,350 illegal boreholes in 2021. Extraction reaches up to 400% of resources in some regions. Up to 85% of groundwater resources are above 1.5 g/L (SRC-TG-482).
- **Projected sea level.** 30-50 cm by 2050 (SRC-TG-504, SRC-TG-508). The CCDR notes sea-level rise is similar across SSPs to 2050 and diverges only towards 2100. It projects 24% of coastline length (SSP2/SSP3) or 15% (SSP1) affected by 2050 (SRC-TG-482).
- **Projected coastal-aquifer loss, two values.**
  - About 50% by 2050, with "beaucoup plus" by 2100 (AFD/PNA, SRC-TG-504). The CCDR repeats this value and says only RCP4.5 information is available for it (footnote 83, SRC-TG-482).
  - About 75% (about 220 Mm3/yr) by 2050 under RCP8.5 (updated NDC, SRC-TG-508).
  The two figures differ in scenario and probably in method. Neither document gives the underlying model, so they cannot be reconciled here.
- **Coastal vulnerability.** 44% of Tunisian coasts are classed vulnerable to very highly vulnerable (SRC-TG-508).

## Why confidence is what it is

- **Solid.** That intrusion already happens and is pumping-driven is shown in a tier-A peer-reviewed field study, though only for Korba in 2006 (SRC-TG-511). The national illegal-borehole count comes from a tier-B World Bank report (SRC-TG-482).
- **Weak.** The 2050 loss percentages (50% vs 75%) come from two tier-B government and donor documents without published methods. They differ by half. No peer-reviewed intrusion model under sea-level rise for a Tunisian aquifer was opened.
- **Imprecise.** The "85% above 1.5 g/L" figure is unsourced in the extracted CCDR text.
- Hence `medium` for the direction and `low` for the magnitude. The overall record is set to `medium`.

## Links to other sectors

- **Agriculture.** At Korba (Cap Bon), the coastal aquifer is pumped by farmers for intensive agriculture (SRC-TG-511). The CCDR notes coastal erosion and sea-level rise threaten irrigated agriculture through field salinisation and flooding of low wetlands (SRC-TG-482, printed page 9). Saline irrigation water then becomes a soil-salinisation pathway (agriculture lane, theme `soil`).
- **Energy.** Replacing lost coastal groundwater with brackish or seawater desalination raises the energy cost of supply (SRC-TG-482). Desalination plans are covered by the lane's record block 575-599.

## Leads for phase 2

- Managed aquifer recharge with treated wastewater ("Recharge des nappes par les eaux usées traitées" line in the Eau 2050 balance, SRC-TG-503)
- Regularisation and control of illegal boreholes
- Integrated coastal zone management (named in the CCDR coastal chapter): https://www.worldbank.org/en/country/tunisia/publication/tunisia-country-climate-and-development-report
- Updated NDC, "Programme de préservation et reconquête de la qualité des ressources en eaux" (adaptation measure list, SRC-TG-508)
- GALDIT vulnerability mapping applied to Korba (MDPI Water 2022, 14(7):1177; not opened): https://www.mdpi.com/2073-4441/14/7/1177
