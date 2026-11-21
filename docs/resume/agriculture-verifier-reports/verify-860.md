## Verification report: FND-TG-860 and FND-TG-861

**Verdict: neither record is ready for `status: in-review` as written. Both will be ready once the fixes below are made. No new research is needed.**

Almost every number checks out against its source. The blockers are:
- one wrong claim about which FAOSTAT date-area years are imputed;
- one overstated use of the French brief (SRC-TG-865);
- wrong or loose wording about the World Bank data period and the tomato export figures;
- a few root causes that are symptoms rather than causes.

No files were edited.

### How I checked
- **FAOSTAT:** I downloaded the bulk QCL and TCL zips (Africa files, which now include 2024) and pulled the Tunisia rows with my own script.
- **PDFs:** I downloaded every source PDF with curl and read it with pdftotext:
  - SRC-TG-860, 861, 864, 865, 866, 867
  - SRC-TG-710 (World Bank chapter)
  - SRC-TG-743 (ONAGRI)
  - SRC-TG-740 (Mekki), one extract only
- **Not opened:** SRC-TG-744 (OTE). The connection was reset twice.
- **Scratch files:** `C:\Users\Taha\AppData\Local\Temp\claude\84d5bad6dc087fc3\6e966d88-81b3-402c-88d3-7630ed4be8fc\scratchpad\verify-860\` (bulk CSVs plus a `doc.txt` per source). The extraction script is at `C:\Users\Taha\AppData\Local\Temp\claude\84d5bad6dc087fc3\6e966d88-81b3-402c-88d3-7630ed4be8fc\scratchpad\scripts\fao.py`.

### Claim table

| Record | Claim | Result | What the source says |
|---|---|---|---|
| 860 | Dates WF 1981-2010: blue 5,000, green 650, total 5,600 m3/t; tomatoes blue 180, total 320; olives 7,100 / 420 / 7,500 | Confirmed | Chouchane 2018, Table 5 (p.291): same values |
| 860 | Economic blue water productivity: dates 0.11, tomatoes 1.13, potatoes 0.97 US$/m3 | Confirmed | Table 1 (p.288), relayed from Chouchane et al. 2015 |
| 860 | Dates 100% irrigated; olives and dates 45% of agricultural export value in 2010; 72% / 68% of virtual water export 1996-2005 | Confirmed | p.288-290 |
| 860 | Dates have the highest blue WF per tonne; trade not explained by blue water scarcity; 1,000 ha raises date NVW export by 5.6 Mm3; policies, value of water and prices "not included" | Confirmed, verbatim | Abstract, p.292, p.295 |
| 860 | Tunisia is a net virtual water importer because of cereals (SRC-TG-860, SRC-TG-861) | Partly wrong | SRC-TG-861 says this (abstract and conclusion). SRC-TG-860 shows net imports only for its six crops (staples); it makes no country-wide statement |
| 860 | 2013: 145.9 kt olive oil and 97.8 kt dates carried 1,079.6 and 283.6 Mm3; ">80%" of exported virtual water is blue; vegetables about 60% blue | Confirmed, verbatim | Makhlouf 2017, abstract and section 4. FAOSTAT gives 2013 date exports as 105,803 t (A), not 97.8 kt, so the implied ~2,900 m3/t is approximate |
| 860 | Date production 105,000 t (2000), 174,000 (2010), 369,000 (2022) | Confirmed | FAOSTAT QCL, flag A |
| 860 | Date exports 22,411 / 84,282 / 130,307 / 129,929 t; value US$38.6M (2000) and US$256.7M (2023) | Confirmed | FAOSTAT TCL, flag A |
| 860 | Export share 35% (130,307 / 369,000); "about sixfold" | Confirmed (recomputed) | 35.3%; 5.81x |
| 860 | Date area harvested 80,123 ha (2023); 77,404 (2022); 31,610 (2000, A) | Confirmed | FAOSTAT |
| 860 | "2010-2023 values imputed by FAO"; "FAO imputes the date area after 2010" | **Wrong** | Flags are official (A) for 2011 (51,000), 2013 (45,300), 2014 (48,700), 2015 (49,150) and 2016 (61,240). Imputed (I) for 2010, 2012, 2017 and 2019-2024; estimated (E) for 2018 |
| 860 | FAO figure "about a third above" the ministry's | Confirmed | 77,404 / 57,385 = +35% |
| 860 | ONAGRI: 57,385 ha (2022), Kebili 38,000; export effort 36.1% (2021), 50.0% (2011), 2011-21 average 44.4% | Confirmed | ONAGRI sheet and Fig. 11. Label-to-value order re-checked. Cross-check: 119.8 / 331.5 = 36.1% |
| 860 | 15,000-20,000 m3/ha for date palms; national average 4,500 | Confirmed (value) | FAO/CNEA 2018, summary and typology p.139-140 |
| 860 | 1956-2015: mobilisation 8% to 90%, boreholes x11, irrigable area 65,000 to 496,000 ha; "très généreuses" incentives; "justifications majeures" | Confirmed, verbatim | FAO/CNEA Introduction and p.67 |
| 860 | Southern oases: near-fossil water, illicit extensions in Kebili, low water value from date monoculture | Confirmed, verbatim | p.140 |
| 860 | State groundwater infrastructure; drilling outside traditional oases not allowed; extensions from the 2000s | Confirmed, verbatim | Mekki 2022 (SRC-TG-740) |
| 860 | NGO export share of 60% (SRC-TG-744) | Could not verify | OTE PDF unreachable |
| 860 | CGE: output 7.39-19.87% lower by 2050 under 5/10/14% less water; lower agricultural exports; dates and tomatoes -2%/yr | Confirmed, verbatim | ERF paper p.2, 7-10 |
| 861 | Exports 2022: tomatoes 27,264 t, watermelons 18,333 t, oranges 12,638 t, strawberries 688 t, paste 33,416 t; 2023 figures | Confirmed | FAOSTAT TCL, flag A |
| 861 | Shares 2.4% / 4.1% / 3.7% | Confirmed (recomputed) | 2.35%, 4.07%, 3.66% |
| 861 | Title "2-4% exported" | Slightly wrong | Watermelon is 4.1%. All citrus combined is about 1.8%; other citrus exports are negligible, so the citrus claim holds |
| 861 | Production 2022: tomatoes 1.16 Mt, watermelons 450 kt, oranges 345 kt; strawberries about 10 kt, flat and estimated | Confirmed | FAOSTAT |
| 861 | Fresh tomato exports "25,000-27,000 t in 2020-2023" | **Wrong** | 2021 was 24,007 t, so the range is 24,000-27,000 t |
| 861 | Indicator name: paste exports "exceed fresh tomato exports" | **True only for 2022** | 2020: 8,075 t; 2021: 19,523 t; 2023: 8,595 t, all below fresh |
| 861 | WB: distortion "away from Mediterranean products"; 58% / 46% vs 39% / 52%; anti-export bias; continental bias; irrigation subsidies about 18% (2008-09) | Confirmed, verbatim; page numbers correct (printed footers) | World Bank pp.260-269 |
| 861 | "Using 2000-2012 data" | **Imprecise** | The chapter does not state that window. Growth shares are 1990-2010 (Table 9.1); DRC uses 2000/2004/2008; quotas 1998 and 2010-11; subsidies 2008-09 |
| 861 | Quota use: citrus 55% (1998), 62 / 60% of 39,355 t; tomatoes 25%, then 52 / 71% of 18,816 t; olive oil about 20% | Confirmed | p.262-263 and Table 9.2 (p.265) |
| 861 | Domestic demand absorbs >90% of citrus; orchards old, quality "average" | Confirmed | Box 9.2, p.264 |
| 861 | Irrigated agriculture share of agri-food exports 24 / 33 / 29% (1995 / 2010 / 2014); "over 30%"; self-sufficient in fruit and vegetables | Confirmed | FAO/CNEA p.1 and p.67 |
| 861 | "Irrigated area rose from about 65,000 ha..." | Wording wrong | Source says *superficies irrigables* (irrigable area), not irrigated |
| 861 | PNEEI vegetables 1.098 / 1.234 DT/m3; seasonal tomato and summer onion lowest | Confirmed | Table 33, p.73 |
| 861 | Water allocation 2,140 to 2,035 Mm3 and 4,700 to 4,050 m3/ha (2010 to 2030) | Confirmed | FAO/CNEA |
| 861 | Cap Bon: private perimeters with citrus and vegetables "aux dépens" of groundwater; central Tunisia "dynamique" but overdrawn | Confirmed, verbatim | p.139-140 |
| 861 | Cap Bon 16% of output on 4% of farmland; programme from the late 1980s; five dams plus canal; SONEDE withdrawals doubled since 1997; strawberries "principalement destinées à l'exportation" | Confirmed, verbatim | IRMC note p.21-22. The programme also aimed at urban drinking water, which the FND leaves out |
| 861 | MAAF: fruit and vegetables mainly for domestic consumption, except citrus, dates, tomato and olive products; unlimited duty-free tomato access 1 Oct-31 May; olive oil quota 56,700 t | Confirmed, verbatim | Brief p.2 and p.5 |
| 861 | Anti-export bias "confirmed in part by a French government brief" | **Wrong (overstated)** | The brief says nothing about policy bias. It supports only where the produce goes, and it names citrus as an *export exception* |

**Verbatim and page checks.** Values were confirmed everywhere above. I read in full context the extracts for SRC-TG-860, the Makhlouf results section, FAO/CNEA p.1, 67, 73 and 139-140, all World Bank passages, and all IRMC passages. For the SRC-TG-861 abstract and FAO/CNEA pp. xviii, xx and 54, the text matched by search, but I did not check every page number.

### Tiers
- SRC-TG-860 and 861: peer-reviewed, A. Correct.
- SRC-TG-862 and 863: FAOSTAT dataset, A. Correct.
- SRC-TG-743: ONAGRI, A. Correct.
- SRC-TG-864, 865, 867, 710, 744: B. Correct.
- SRC-TG-866: an academic conference working paper, not an institutional report. B is acceptable, but `type: institutional-report` is a stretch.

Both records are rated `confidence: medium`, which is justified.

### Independent source on the main figure
- **Blue water footprint.** Chouchane, Hoekstra, Krol and Mekonnen (2013), *Water footprint of Tunisia from an economic perspective*, Value of Water Report 61 (https://ayhoekstra.nl/pubs/Report61.pdf), Table 4. It uses Mekonnen and Hoekstra's model for 1996-2005: dates 1,030 green, **3,270 blue**, 80 grey, 4,390 total m3/t; tomatoes 50 blue.
  - It confirms that dates are the largest blue-water user per tonne among the main crops, and that dates and olives make up 47% of the crop blue water footprint.
  - It is only **partly independent** (same research group, different model and period).
  - The level is lower than SRC-TG-860's 5,000. With Makhlouf's ~2,900 m3/t total, 5,000 is the top of three estimates.
- **Export share.** ONAGRI (SRC-TG-743) independently confirms the FAOSTAT calculation: 36.1% in 2021, against 34.7% from FAOSTAT for 2021.

### Fixes needed

**FND-TG-860** (`...\research\phase1-findings\FND-TG-860-dates-blue-water-export-basket.md`)
1. **Area flags.**
   - Indicator "Date area harvested (FAOSTAT)", unit: replace "2010-2023 values imputed by FAO" with "official to 2016 (61,240 ha) except 2010 and 2012; imputed or estimated from 2017".
   - Confidence bullet "FAO imputes the date area after 2010": change to "since 2017".
2. **Net-importer sentence** in Problem: cite SRC-TG-861 only, or say SRC-TG-860 shows net imports for staple crops.
3. **Blue water footprint indicator:** state the range of estimates (3,270 blue for 1996-2005 in Report 61; ~2,900 total in 2013 from SRC-TG-861). Add Report 61 as a new SRC record. In the title, change "the highest blue water footprint" to "the highest blue water footprint per tonne among Tunisia's main crops".
4. **Root cause 3.** SRC-TG-864 names irrigated exports in general as the justification, not dates or olive oil. "Scarcity does not show up" is a regression null result, not a cause. Reword to say exports of irrigated produce are an official justification for irrigation, or merge into cause 1. Move the regression finding to Evidence.
5. **Indicator `geography: southern oases`** is not a taxonomy value. Use `south-west`, or the governorates.
6. **Non-numeric values.** `value: ">80"` and `"15000-20000"`, and comparison figures packed into `unit`, may break the parser. Use numeric values and move the comparisons to the body or to separate indicators.
7. **SRC-TG-744 (60%)** is unverified. A verifier still needs to open it.
8. *Optional:* the share indicator cites only SRC-TG-862, but its numerator comes from SRC-TG-863. Name both in the indicator text.

**FND-TG-861** (`...\research\phase1-findings\FND-TG-861-horticulture-domestic-not-export-driven.md`)
1. **Title:** "2-4%" becomes "about 2-4%" or "2.4-4.1%". Replace "2000-2012 agricultural policy" with "agricultural policy as assessed by the World Bank in 2014".
2. **"Using 2000-2012 data"** in root cause 2 and the body: change to "using 1990-2012 data". The World Bank figures span 1990-2010 growth shares, 1998-2011 quotas and the 2000-2008 DRC.
3. **Evidence:** "25,000-27,000 t in 2020-2023" becomes "24,000-27,000 t".
4. **Paste indicator name:** add "in 2022". Note it was below fresh exports in 2020, 2021 and 2023.
5. **"Irrigated area rose"** becomes "irrigable area rose".
6. **Confidence section:** delete "confirmed in part by a French government brief". The brief supports destination only. Acknowledge that it lists citrus as an export exception. Optionally add that orange exports were ~19% of output in 2000 (22,214 / 115,000) and 18% in 2010, against 3.7% in 2022, so the domestic orientation is recent for citrus.
7. **Root cause 1.** The source states an outcome ("permet ... d'être autosuffisante"), not an intent. Reword as "irrigation expansion achieved fruit and vegetable self-sufficiency", or support the intent with another source.
8. **Root cause 2.** "Quotas went partly unused" is a symptom. Keep it in Evidence and leave the protection and support bias as the cause.
9. **Regional pattern:** add that the late-1980s programme also served urban drinking water (IRMC p.21).

**SRC records** (for the author to raise; they are TG records, so the author may fix them)
- **SRC-TG-862 Notes:** "Date area since 2010 is imputed" is wrong, for the same reason as above.
- **SRC-TG-710:** the second copy of the "better-watered" extract is not verbatim (the PDF has "better--watered"). This does not affect FND-TG-860 or 861.
- **SRC-TG-861 Notes:** add that FAOSTAT 2013 date exports were 105,803 t, against 97.8 kt in the paper.

### Readiness
- **FND-TG-860:** not ready as written. Ready once fixes 1-6 are applied and SRC-TG-744 is opened, or the 60% is marked unverified.
- **FND-TG-861:** not ready as written. Ready once fixes 1-8 are applied.
