---
id: SRC-TG-533
title: "World Development Indicators: Annual freshwater withdrawals, total (ER.H2O.FWTL.K3) and agriculture share (ER.H2O.FWAG.ZS), Tunisia"
publisher: World Bank (data from FAO AQUASTAT)
year: 2026
type: dataset
tier: A
url: https://api.worldbank.org/v2/country/TUN/indicator/ER.H2O.FWAG.ZS?format=json&per_page=80
accessed: 2026-11-21
language: en
added_by: TahaGHZ
---

## Extracts

API response, indicator "Annual freshwater withdrawals, agriculture (% of total freshwater withdrawal)", Tunisia (selected years, values as returned):

> 1990 88.71544715
> 2000 82.00757576
> 2011 80
> 2017 74.41924779
> 2019 76.3762304
> 2020 75.54217539
> 2021 75.54217539
> 2022 75.54217539

API response, indicator "Annual freshwater withdrawals, total (billion cubic meters)", https://api.worldbank.org/v2/country/TUN/indicator/ER.H2O.FWTL.K3?format=json&per_page=80 (selected years):

> 1990 3.067
> 2000 2.6
> 2011 3.217
> 2017 3.526
> 2019 3.793
> 2020 3.864
> 2021 3.864
> 2022 3.864

## Notes

- Opened via: curl of the World Bank API (JSON); saw: full series 1975-2022 (total) and 1990-2022 (agriculture share).
- Most years are interpolated between AQUASTAT survey years (e.g. 2001-2010 and 2012-2016 rise in equal steps; 2020-2022 are identical). Only the years listed above look like anchor values, and even these are not confirmed as survey years; AQUASTAT metadata were not opened.
- Derived agricultural withdrawals (total × share), computed here, not printed in the source: 1990 about 2.72, 2000 about 2.13, 2011 about 2.57, 2017 about 2.62, 2020 about 2.92 billion m3. The 1990 value is far above the ministry's own 1990 agricultural demand of 1,386 Mm3 (SRC-TG-430), so definitions or methods differ across years.
