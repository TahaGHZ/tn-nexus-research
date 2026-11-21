---
id: SRC-TG-702
title: "UN Comtrade: Tunisia imports of cereals (HS 10), wheat (HS 1001), durum wheat (HS 100119) and other wheat (HS 100199), 2021-2024"
publisher: United Nations Statistics Division (UN Comtrade)
year: 2026
type: dataset
tier: A
url: https://comtradeapi.un.org/public/v1/preview/C/A/HS?reporterCode=788&period=2023&partnerCode=0&cmdCode=1001&flowCode=M
accessed: 2026-11-21
language: en
added_by: TahaGHZ
---

## Query URLs

The record covers several series. The `url` field is one of them; each figure cited from this record comes from the query listed here.

- HS 1001 (all wheat), 2023: https://comtradeapi.un.org/public/v1/preview/C/A/HS?reporterCode=788&period=2023&partnerCode=0&cmdCode=1001&flowCode=M
- HS 100199 (other wheat), 2024: https://comtradeapi.un.org/public/v1/preview/C/A/HS?reporterCode=788&period=2024&partnerCode=0&cmdCode=100199&flowCode=M
- HS 10 (cereals), 2023: https://comtradeapi.un.org/public/v1/preview/C/A/HS?reporterCode=788&period=2023&partnerCode=0&cmdCode=10&flowCode=M

## Extracts

Query: reporter 788 (Tunisia), partner 0 (World), flow M (imports), annual, calendar year. Values are CIF in US dollars as returned by the public preview API (`primaryValue`, `netWgt` in kg). Rounded by us.

| Year | HS 10 cereals, value | HS 1001 wheat, value / net weight | HS 100119 durum, value / weight | HS 100199 other (soft) wheat, value / weight |
|---|---|---|---|---|
| 2021 | 1,230.9 M USD | 644.6 M USD / 1,890.7 kt | 242.2 M USD / 566.3 kt | 402.4 M USD / 1,324.5 kt |
| 2022 | 1,493.0 M USD | 888.4 M USD / 1,890.1 kt | 348.6 M USD / 577.3 kt | 539.7 M USD / 1,312.7 kt |
| 2023 | 1,579.3 M USD | 792.3 M USD / 2,028.9 kt | 400.7 M USD / 846.4 kt | 391.5 M USD / 1,182.5 kt |
| 2024 | 1,150.8 M USD | 689.3 M USD / weight not reported | 272.2 M USD / 800.6 kt | 417.1 M USD / 1,587.2 kt |

Raw example (2022, HS 1001, re-queried by the verifier): `"primaryValue":888381490.68, "netWgt":1890072251.0, "classificationCode":"H5"`. A first query on the same day returned netWgt 1891272251.0 (and 578.5 kt for HS 100119); the table uses the current values.

## Notes

Calendar-year data; GIEWS and USDA use July/June marketing years, so the volumes are not directly comparable with their balance sheets. 2021-2022 are reported in HS2017 (H5), 2023-2024 in HS2022 (H6). HS 100199 is "wheat other than durum, other than seed". It is mostly soft (bread) wheat, but it may include feed wheat: ITES lists feed wheat ("blé fourrager") among imported livestock feeds (SRC-TG-706, PDF p. 66). 2021 HS 100199 imports (1,324 kt) exceed ONAGRI's total soft wheat consumption for 2021 (1,221.7 kt, SRC-TG-701), which is consistent with some non-bread use or stock changes. Net weight for HS 10 total and for HS 1001 in 2024 was not returned. The public preview endpoint was rate-limited; values were re-queried one at a time.
