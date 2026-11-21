---
id: SRC-TG-900
title: "UN SDG Global Database, indicator 12.3.1(b) Food Waste Index, Tunisia (series AG_FOOD_WST_PC and AG_FOOD_WST)"
publisher: United Nations Statistics Division (data from UNEP Food Waste Index Reports 2021 and 2024)
year: 2024
type: dataset
tier: A
url: https://unstats.un.org/sdgapi/v1/sdg/Indicator/Data?indicator=12.3.1&areaCode=788&pageSize=200
accessed: 2026-11-21
language: en
added_by: TahaGHZ
---

## Extracts

API response for geoAreaCode 788 (Tunisia), 16 records. Fields copied as returned (value, footnotes, attributes.Nature, dimensions, source):

> AG_FOOD_WST_PC "Food waste per capita (KG)" 2019 | Food Waste Sector HHS | 88.33755 | footnotes ["Very Low Confidence"] | Nature E | source "Food Waste Index Report 2021"
> AG_FOOD_WST_PC 2019 | RTL | 15.17993 | ["Very Low Confidence"] | Food Waste Index Report 2021
> AG_FOOD_WST_PC 2019 | OOHC | 26.83439 | ["Very Low Confidence"] | Food Waste Index Report 2021
> AG_FOOD_WST_PC 2019 | ALL | 130.35187 | ["Very Low Confidence"] | Food Waste Index Report 2021
> AG_FOOD_WST_PC 2022 | HHS | 171.72145 | ["Medium Confidence"] | Nature E | Food Waste Index Report 2024
> AG_FOOD_WST_PC 2022 | RTL | 9.68092 | ["Very Low Confidence"] | Food Waste Index Report 2024
> AG_FOOD_WST_PC 2022 | OOHC | 31.14722 | ["Very Low Confidence"] | Food Waste Index Report 2024
> AG_FOOD_WST_PC 2022 | ALL | 212.54959 | ["Medium Confidence"] | Food Waste Index Report 2024
> AG_FOOD_WST "Food waste (Tonnes)" 2019 | HHS | 1064406.915 | ["Very Low Confidence"] | Food Waste Index Report 2021
> AG_FOOD_WST 2019 | ALL | 1570650.634 | ["Very Low Confidence"] | Food Waste Index Report 2021
> AG_FOOD_WST 2022 | HHS | 2121810.3 | ["Medium Confidence"] | Food Waste Index Report 2024
> AG_FOOD_WST 2022 | ALL | 2626287.596 | ["Medium Confidence"] | Food Waste Index Report 2024

Attribute codes from the same API (Series/AG_FOOD_WST_PC/Attributes): Nature "E" = "Estimated data".

English gloss: Sectors are HHS = households, RTL = retail, OOHC = out-of-home consumption (food service). Household food waste in Tunisia is estimated at 88 kg per person (2019, Food Waste Index 2021, very low confidence) and 172 kg per person (2022, Food Waste Index 2024, medium confidence), i.e. 1.06 and 2.12 million tonnes.

Search for indicator 12.3.1(a) Food Loss Index (series AG_FLS_PCT) for Tunisia returned totalElements 0.

## Notes

- Food waste here includes inedible parts (bones, peels), per the UNEP definition. It is not comparable with "edible bread thrown away" figures.
- The 2019 and 2022 values come from two editions with different methods and confidence classes. The jump from 88 to 172 kg is not a trend. The change from "Very Low" to "Medium" confidence suggests the 2024 edition used at least one measured data point for Tunisia or a nearby country, but the UNEP report PDF itself (wedocs.unep.org) was behind a Cloudflare challenge and could not be opened to check which study.
- No Food Loss Index (12.3.1a) value exists for Tunisia in the database.
