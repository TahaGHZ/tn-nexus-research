---
id: FND-TG-860
title: "Dates are the export crop that ships Tunisia's scarce blue water abroad: exports grew about sixfold from 2000 to 2022 on a crop with the highest blue water footprint and low value per m3"
status: draft
sectors: [agriculture, water]
theme: crop-choices
timeframe: current
period: 1981-2023
geography: [national, south-west, kebili]
severity: high
trend: worsening
confidence: medium
root_causes:
  - cause: "State investment in water mobilisation, generous on-farm irrigation incentives and supported irrigation water prices made irrigated expansion profitable without pricing the scarcity of the water used"
    type: policy
    legacy_decision: true
    sources: [SRC-TG-864]
  - cause: "Government-built groundwater infrastructure in the south, followed by tolerated private palm extensions from the 2000s, expanded the irrigated date area beyond planned oases"
    type: institutional
    legacy_decision: true
    sources: [SRC-TG-740, SRC-TG-864]
  - cause: "Export earnings from dates (and olive oil) are a main justification for irrigated agriculture, while blue water scarcity does not show up as a factor in the country's virtual water trade"
    type: economic
    legacy_decision: false
    sources: [SRC-TG-860, SRC-TG-864]
indicators:
  - name: Blue water footprint of dates (average 1981-2010)
    value: 5000
    unit: m3 per tonne (total 5,600; green 650)
    year: 1981-2010
    geography: national
    source: SRC-TG-860
  - name: Blue water footprint of tomatoes (average 1981-2010), for comparison
    value: 180
    unit: m3 per tonne (total 320)
    year: 1981-2010
    geography: national
    source: SRC-TG-860
  - name: Economic blue water productivity of dates
    value: 0.11
    unit: US$ per m3 (tomatoes 1.13, potatoes 0.97)
    year: 1981-2010 average
    geography: national
    source: SRC-TG-860
  - name: Irrigation water demand of date palms
    value: 15000-20000
    unit: m3 per ha per year (national average for irrigated land about 4,500)
    year: circa 2015
    geography: southern oases
    source: SRC-TG-864
  - name: Date export quantity
    value: 130307
    unit: tonnes (22,411 in 2000; 84,282 in 2010; 129,929 in 2023)
    year: 2022
    geography: national
    source: SRC-TG-863
  - name: Date production
    value: 369000
    unit: tonnes (105,000 in 2000)
    year: 2022
    geography: national
    source: SRC-TG-862
  - name: Share of date production exported (our calculation, 130,307 / 369,000, both official FAOSTAT figures)
    value: 35
    unit: percent
    year: 2022
    geography: national
    source: SRC-TG-862
  - name: Date export effort (exports / production), official ONAGRI series
    value: 36.1
    unit: percent (50.0 in 2011; 2011-2021 average 44.4; an NGO report gives 60, SRC-TG-744)
    year: 2021
    geography: national
    source: SRC-TG-743
  - name: Date palm area, national (DGPA via ONAGRI)
    value: 57385
    unit: ha (FAOSTAT imputes 77,404 ha for the same year, SRC-TG-862)
    year: 2022
    geography: national
    source: SRC-TG-743
  - name: Date area harvested (FAOSTAT)
    value: 80123
    unit: ha (31,610 in 2000, official; 2010-2023 values imputed by FAO and higher than the ministry figure)
    year: 2023
    geography: national
    source: SRC-TG-862
  - name: Date export value
    value: 256.7
    unit: million US$
    year: 2023
    geography: national
    source: SRC-TG-863
  - name: Virtual water exported through dates
    value: 283.6
    unit: million m3 (for 97,800 t exported)
    year: 2013
    geography: national
    source: SRC-TG-861
  - name: Share of exported virtual water that is blue
    value: ">80"
    unit: percent
    year: 2013
    geography: national
    source: SRC-TG-861
stakeholders: [date farmers and khammès in the southern oases (Kebili), date exporters and packers, Ministry of Agriculture (DGEDA, CRDA Kebili), GIFruits, irrigators sharing the southern aquifers]
related: [FND-TG-740, FND-TG-741, FND-TG-742, FND-TG-861]
sources: [SRC-TG-860, SRC-TG-861, SRC-TG-862, SRC-TG-863, SRC-TG-864, SRC-TG-866, SRC-TG-740, SRC-TG-743, SRC-TG-744]
data_gaps:
  - "Blue water footprint of dates after 2010: the only per-tonne value opened (SRC-TG-860) averages 1981-2010; the 2013 survey-based value implied by SRC-TG-861 (about 2,900 m3/t total) is much lower. No current estimate found."
  - "Blue virtual water exported through dates for a recent year: no published figure found after 2013. Applying the 1981-2010 footprint (5,000 m3/t blue) to 2022 exports (130,307 t) would give about 650 million m3, but this mixes periods and is not a published estimate; the 2013 published value is 283.6 million m3 (total)."
  - "Irrigated olive area and the blue water exported through olive oil today: SRC-TG-860 gives 39% irrigated olive production for 1981-2010; no recent figure was opened."
  - "Export incentives specific to dates (FOPRODEX transport support, investment code advantages for export agriculture): found only in press reports, not in an official text, so not used."
  - "Farm income per m3 for date farms versus alternative crops in the southern oases: not found beyond the national water productivity averages."
  - "Crop-level projection of date area, exports or embedded water under water constraints: none found. The forward-looking sources are a sector-level CGE model (SRC-TG-866) and the farm income projection for Kebili traditional oases in sibling record FND-TG-742; neither projects export volumes."
author: TahaGHZ
---

## Problem

Tunisia's agricultural exports are dominated by olive oil and dates (olives and dates together were 45% of agricultural export value in 2010) (SRC-TG-860). Of these, dates are the export crop that depends most on blue water: they are fully irrigated, have the highest blue water footprint per tonne of the six main crops studied (about 5,000 m3/t, against 180 m3/t for tomatoes), and are grown only in the south, the most water-scarce part of the country (SRC-TG-860). Date palms need 15,000 to 20,000 m3/ha per year, three to four times the national average for irrigated land (SRC-TG-864). Date exports rose from 22,411 t in 2000 to 130,307 t in 2022, about 35% of national production (our calculation from SRC-TG-862 and SRC-TG-863), and production rose from 105,000 t to 369,000 t over the same years (SRC-TG-862). The official ONAGRI export effort is similar, 36.1% in 2021, down from 50% in 2011 (SRC-TG-743). Tunisia is a net virtual water importer overall because of cereal imports (SRC-TG-860, SRC-TG-861). Both peer-reviewed studies agree that dates carry large volumes of blue water. They disagree on the rest of the basket: one finds exported virtual water over 80% blue (SRC-TG-861), the other finds the dominant export, olive oil, mostly green water (SRC-TG-860).

## Root causes

The symptom is a growing volume of irrigation water leaving the country embedded in dates. The causes are policy choices about irrigation, not trade policy alone.

- **Past decision: supply-side irrigation policy.** From 1956 to 2015 the state raised water mobilisation from 8% to 90% of resources, multiplied boreholes by 11, and extended irrigable land from about 65,000 ha to over 496,000 ha, backed by "very generous" on-farm incentives and supported irrigation water prices (SRC-TG-864). Exports from irrigated agriculture are described by the national agricultural studies centre as "one of the major justifications" for irrigated agriculture (SRC-TG-864).
- **Past decision: groundwater infrastructure and tolerated extensions in the south.** The government developed groundwater infrastructure to revive and create oases, and private extensions grew from the 2000s even though individual drilling outside traditional oases was not allowed (SRC-TG-740). The sibling records FND-TG-741 (unauthorised extensions) and FND-TG-740 (Deglet Nour monoculture) cover these in detail; this record does not repeat them.
- **Trade does not respond to water scarcity.** Over 1981-2010, blue water scarcity did not explain net virtual water trade for any of the six main crops; for dates, each extra 1,000 ha of irrigated land raised net virtual water export by 5.6 Mm3 (SRC-TG-860). The authors note that the reason a water-scarce country keeps expanding a blue-water-intensive export crop lies outside their variables, such as agricultural policies, the value of water and international prices (SRC-TG-860).
- **Low value per m3.** Dates return about US$0.11 per m3 of blue water, against US$1.13 for tomatoes and US$0.97 for potatoes (1981-2010 averages) (SRC-TG-860). The national studies centre likewise reports weak economic water value in the southern oases because of the trend toward date palm monoculture (SRC-TG-864).

## Evidence

- Water footprints, 1981-2010 average: dates 650 m3/t green, 5,000 blue, 5,600 total; olives 7,100 green, 420 blue, 7,500 total; tomatoes 140 green, 180 blue, 320 total (SRC-TG-860, Table 5).
- The export of olive oil, dates, wheat and tomatoes made up 72% of crop-related virtual water export over 1996-2005, 68% for olive oil alone (SRC-TG-860).
- In 2013, exports of 145,900 t of olive oil and 97,800 t of dates carried 1,079.6 and 283.6 million m3 of virtual water; more than 80% of exported virtual water was blue (SRC-TG-861).
- Dates: production 105,000 t (2000), 174,000 t (2010), 369,000 t (2022) (official FAOSTAT figures); harvested area 31,610 ha (2000, official) and 80,123 ha (2023, imputed by FAO) (SRC-TG-862). **Area sources disagree:** the ministry figure relayed by ONAGRI is 57,385 ha in 2022, of which 38,000 ha in Kebili (SRC-TG-743), against 77,404 ha imputed by FAOSTAT for 2022 (SRC-TG-862). The ministry figure is preferred for the level; both are recorded.
- **Export share sources disagree:** our FAOSTAT calculation gives 35% in 2022; ONAGRI gives 36.1% in 2021 and a 2011-2021 average of 44.4% (SRC-TG-743); an NGO report gives 60% (SRC-TG-744). Exports 22,411 t (2000), 84,282 t (2010), 130,307 t (2022), 129,929 t (2023); export value US$38.6 million (2000) and US$256.7 million (2023) (SRC-TG-863).
- **Sources disagree on the water content of the export basket.** SRC-TG-860 finds olives mostly green water (7,100 green against 420 blue m3/t). SRC-TG-861 calls olive oil the most water-demanding commodity at 7 m3/kg "due to the need of blue water for its processing". For dates, the 2013 figure in SRC-TG-861 implies about 2,900 m3 per exported tonne, while SRC-TG-860 gives 5,600 m3/t. The two studies use different methods (AquaCrop modelling against farm surveys) and different years. Both values are recorded here; neither is preferred.
- Projection: a sector-level CGE model (conference paper, not peer-reviewed) projects agricultural output 7.39% to 19.87% lower by 2050 under 5-14% less water availability, and lower agricultural exports. It names dates, olive oil, tomatoes and citrus as the main export products and cites yield declines of 2% per year for tomatoes and dates over 2021-2050 (SRC-TG-866). It does not project the crop mix, so this record stays `current`.

## Why confidence is what it is

Medium. The direction of the finding is solid. Two peer-reviewed studies (SRC-TG-860, SRC-TG-861) agree that dates are blue-water intensive, and official FAOSTAT and ONAGRI figures show the export growth (SRC-TG-862, SRC-TG-863, SRC-TG-743). Confidence is not high because:
- the studies disagree on whether the export basket as a whole is mostly blue water (olive oil is the swing item);
- the per-tonne water content of dates differs by about a factor of two between the two studies;
- the only footprint series ends in 2010;
- FAO imputes the date area after 2010, and its figure is about a third above the ministry's;
- the export share is our own calculation from FAOSTAT.

The policy causes rest on a tier B national report (SRC-TG-864) and a peer-reviewed study of Kebili (SRC-TG-740). No official text on export incentives for dates was opened.

## Links to other sectors

- **Water:** dates draw on the southern aquifers. SRC-TG-864 describes intensive use of "near-fossil" water and illegal extensions in Kebili. Aquifer overdraft itself belongs to the water lane; this record covers only the crop and export choice.
- **Energy:** borehole pumping in the oases uses energy, but no figure was opened for this topic (none sourced).

## Leads for phase 2

- Crop water allocation by virtual water content and bioclimatic zone, as proposed in SRC-TG-861 and SRC-TG-864 ("import water-intensive products, export low-water high-value ones").
- Programme national d'économie d'eau en irrigation (PNEEI), evaluated by SCET Tunisie 2016 (cited in SRC-TG-864).
- Water use efficiency scenarios (network rehabilitation, irrigation modernisation, less water-intensive varieties) modelled in SRC-TG-866.
- FOPRODEX export transport support (Fonds de promotion des exportations), seen in press only.
- Higher charges for blue water in export value chains, suggested in SRC-TG-861.
