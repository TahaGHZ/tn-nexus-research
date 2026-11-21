## Verification report: FND-TG-700, FND-TG-701, FND-TG-702 and SRC-TG-700 to SRC-TG-711

No files were edited.

### How I checked
- I downloaded every source PDF myself into `C:\Users\Taha\AppData\Local\Temp\claude\84d5bad6dc087fc3\6e966d88-81b3-402c-88d3-7630ed4be8fc\scratchpad\verify-700\` (one subfolder per source) and converted each with `pdftotext -enc UTF-8`. I then matched every `>` extract in the SRC records against that text with a script.
- I re-queried the UN Comtrade and World Bank WDI APIs, and read the OpenAlex abstracts for SRC-708 and SRC-709.
- **Verbatim result:**
  - All extracts in SRC-700, 701, 703, 704, 705, 707, 708, 709 and 711 match their sources.
  - SRC-706 (ITES) and SRC-710 (World Bank 2014) also match. The script flagged some lines only because of line-break hyphens, footnote markers ("tobacco3", "60 percent 3since") or an em dash written as "--". I read those passages by eye, including ITES PDF p.54 and footnote 94 on p.108.
  - SRC-711 is correct: the 43/35 TND/q prices sit under the heading of décret 2012-754 (2011 harvest), not under the unrelated decree on the same scan.

### Claim table

| Record | Claim | Result | What the source actually says |
|---|---|---|---|
| 700 | Soft wheat dependence 93.1%, 2021 | Confirmed | ONAGRI p.10: "coefficient de dépendance étrangère du blé tendre était de 93,1". Equation 15 defines it as (imports − exports) / national consumption × 100. |
| 700 | Durum 35%, barley 75.6%, 2021 | Confirmed | ONAGRI pp.9 and 11. |
| 700 | Soft wheat 95% (World Bank, from OC), year 2024 | Confirmed, year label wrong | Footnote under Table 2 (Table 2 is sourced to the OC): "Tunisia is 95 percent dependent on imports". No reference year is given; 2024 is only the document date. |
| 700 | ITES 80% soft wheat, about 60% all cereals | Confirmed | PDF p.53: 60% average, 40% durum, 80% soft wheat, 50% barley. |
| 700 | ITES 2035: 57/84/41/51, ten-year average held constant | Confirmed | p.121 (text) and p.108 table, footnote 94: "Maintien de la moyenne des dix dernières années", citing OTE 2023. |
| 700 | GIEWS "about 60% of domestic annual needs", 2025 | Confirmed | Feb 2026 brief. The context is wheat ("above-average domestic wheat production harvested in 2025"), so comparing it with USDA's wheat-only 45% is like-for-like. |
| 700 | 1,318 / 2,950 kt, about 45% | Confirmed | USDA TS2026-0004, Table 4. 44.7% by calculation. |
| 700 | Common wheat 14 kt (2023); 32-70 kha common vs 514-550 kha durum | Confirmed | USDA Tables 1 and 2. MY 26/27 values are forecasts. |
| 700 | Consumption 1,221.7 kt; 101.6 kg vs 84.9 kg (INS 2015) | Confirmed | ONAGRI p.10. |
| 700 | Comtrade HS100199 1,587.2 kt (2024); HS10 1,579.3 M USD (2023); other years | Confirmed, with one small error | API re-query matches 2021, 2023 and 2024 exactly. For 2022 the API now returns HS1001 netWgt 1,890,072,251 kg and HS100119 577.3 kt, not 1,891.3 kt and 578.5 kt. The quoted "raw example" (1891272251) does not match. |
| 700 | HS100199 "essentially soft (bread) wheat" (SRC-702 note) | Could not verify, likely overstated | ITES p.66 lists imported feed wheat ("blé fourrager"). 2021 HS100199 imports (1,324 kt) exceed ONAGRI's total soft wheat consumption (1,222 kt). |
| 700 | GIEWS 4.7 Mt (Nov 2023) and 4.0 Mt (May 2024); "more than half"; "even in good years" | Confirmed | GIEWS briefs of 29 Nov 2023 and 30 May 2024. |
| 700 | Import prices 231→416 USD/t (soft), 327→665 USD/t (durum); Ukraine about 40%, Russia 7%; Russia+Ukraine about half (Jul 2023-May 2024) | Confirmed | GIEWS briefs of Jul 2022, Nov 2023 and May 2024. |
| 700 | 3 Mt goal incl. 1.7 Mt durum; about 2% consumption growth; 2.95 / 3.0 Mt | Confirmed | USDA 2024 and 2026 reports. |
| 700 | Bread waste 5-8%; 900,000 baguettes a day | Confirmed | USDA 2024; World Bank PAD5602 Box 1. |
| 700 | Soft wheat −25%, durum +27% over 2010-2018 | Confirmed | ITES PDF p.54. |
| 700 | Soft wheat competitive only on irrigated land or in the north/north-west, and temporarily in 2008 | Confirmed | World Bank 2014, pp.261-262. Analysis dates from 2000-2008. |
| 700 | RC2 "demand grows with population" | Could not verify | USDA gives only "an average growth trend of roughly two percent". No population link is sourced. |
| 700 | Irrigated wheat <15%; water USD 0.07/m3, 32% of cost, 120,000 ha | Confirmed | GIEWS Nov 2023; USDA 2026. |
| 701 | 302 kt (almost 80% below average) and 520 kt (70% below 5-year average) | Confirmed | GIEWS Nov 2023 and May 2024. |
| 701 | 442+90 kt (2023); 1,230+460 kt (2022); 952 seeded / 437 harvested (earlier 634) | Confirmed | USDA 2026 and 2024. |
| 701 | WDI 612,415 t (2023); yield 1,300.5 kg/ha; area 470,897 ha; range 894 (1994) to 1,947 (2019); production 0.55 Mt (2002) to 2.9 Mt (1996) | Confirmed | WDI API re-queried. |
| 701 | Mean and CV: 1,246 kg/ha, 16.8% (1990s); 1,473 kg/ha, 19.1% (2015-24) | Confirmed | Recomputed. These are sample CVs; population CVs are 16.0% and 18.1%. |
| 701 | OC collection 293.4 / 756.4 / 1,284.7 kt; GIEWS 225.6 vs 700 kt | Confirmed | PAD5602 Table 1; GIEWS Nov 2023. |
| 701 | Four consecutive drought years, heat, seed shortage, switch to barley | Confirmed | PAD5602 para 8; GIEWS May 2024; USDA 2024. |
| 701 | 18 q/ha (2010-18), "slight downward trend", 10% irrigated | Confirmed with a nuance | ITES p.54. The 10% is "issue des cultures pluviales (seulement 10% en irrigué)", which refers to production, not area. |
| 701 | RC1 "85-90% of cereal area rainfed" | Wrong as stated (derived) | GIEWS gives <15% of wheat area irrigated. ITES's 10% is a share of production. Neither gives cereal area. |
| 701 | Tunisia ranked 120 of 191; low yields linked to climate, land, inputs, practices | Confirmed verbatim, weak source | ONAGRI p.25 is a signed analysis article (the SRC itself says so) and the ranking is unsourced there. It should not count as tier A statistics. |
| 701 | "Low dams ... are symptoms" | Could not verify | No source on dams is cited. |
| 701 | 2025 harvest 1.7 Mt, 18% above average, April-May rain; April rain lifts yields 10-20% | Confirmed | GIEWS Feb 2026; USDA 2026. |
| 701 | SRC-708: +4 °C, −37% rain, yield gap 45-55% under RCP 8.5, north-west unsuited | Confirmed against the abstract, slight overreach | The abstract gives +4 °C and −37% "in comparison with the base line" by end of century, without tying them to RCP 8.5. The 45-55% yield gap is explicitly RCP 8.5. Abstract-only reading is flagged in the record. |
| 701 | SRC-709: no clear decline, model sensitivity | Confirmed | OpenAlex abstract is verbatim. |
| 702 | 6,625 owed / 2,543 received (38%); debt 6,343 M TND (83% BNA); 2023 balance −900 M TND, unaudited | Confirmed | PAD5602 para 10. |
| 702 | 1,300 / 1,000 / 800 TND/t (2023); +60.9 / 64.2 / 60.7%; 3% and 14% below OC import cost (Feb 2024); "below import-parity" | Confirmed | GIEWS Nov 2023; PAD5602 Box 1 and footnote 3. |
| 702 | OC created 1962 (decree-law 62-10); CGC 1970 (World Bank) vs 1971 (ITES) | Confirmed | PAD5602 Box 1; JORT visa; ITES p.32. |
| 702 | 43 / 35 TND/q, "2011 decree" | Confirmed, wording wrong | It is décret 2012-754 of 2 July 2012, fixing prices for the 2011 harvest. |
| 702 | Food subsidies 1.5% of GDP (2009), over 3% (2012); cereals a third of market price support; skewed to large farms; inadequate quality bonuses | Confirmed | World Bank 2014, pp.263-269. |
| 702 | 43.3% of "gros pain" subsidy to poorest two quintiles (2022); INS 9.2% (2010) | Confirmed | PAD5602 footnote 17; ITES p.33. |
| 702 | 1983-84 riots; "dirigiste" policy; 1986 structural adjustment; human-consumption cereals kept subsidies | Confirmed | PAD5602 footnote 15; ITES pp.27-33. |
| 702 | RC2 "reform repeatedly postponed since the 1984 bread riots" | Could not verify as phrased | GIEWS says only "implementation has been postponed so far". ITES describes post-1986 adjustments. "Repeatedly since 1984" is the author's synthesis. |
| 702 | OC share of physical collection 32% (2005) → 2% (2012) | Confirmed verbatim, contradicted | The same SRC-703 says the OC "currently accounts for 40-60 percent of wheat production and 10-40 percent of barley". PAD5602 shows the OC collected 1,284.7 kt in 2019. ITES itself says private and SMSA collectors handle only about 63% of production. Reconciliation needed. |
| 702 | Barley imports opened April 2023; OC monopoly on wheat imports | Confirmed | PAD5602 Box 1; USDA 2026. |
| 702 | Phase 2 leads (PS-7, digital tracking, 7% extraction rate, bakery inventory Dec 2023, US$576M) | Confirmed in source text | PAD5602 Table 3 and footnote 16. Some are not quoted in SRC-705's extracts; acceptable for leads. |

### Independent check of the main figure (soft wheat dependence)
- **FTDES study** (Mahjoub and Belghith), reported in La Presse de Tunisie on 21 Aug 2023 (https://www.lapresse.tn/?p=165912), gives "plus de 85,3% pour le blé tendre" and 33% for durum, with no year. This is press reporting of an NGO study: tier C as cited, and the FTDES report itself was not opened. It confirms the order of magnitude and is close to ONAGRI's 35% for durum.
- **Own cross-check** from Comtrade HS100199 imports against USDA/Ministry common wheat production: 2021 about 92%, 2022 about 87%, 2023 about 99%, 2024 about 93%. Caveats: calendar years against marketing years, stocks and exports ignored, and HS100199 may include feed wheat.
- **Not useful:** the OTE 2023 "89%" figure found in press covers all cereal sales, not soft wheat.
- **Verdict:** the 80-95% soft wheat dependence range holds.

### Tiers
- USDA GAIN (B), World Bank PAD and 2014 chapter (B), GIEWS (B), ITES (B), Comtrade and WDI (A): correct.
- SRC-708 and SRC-709: tier A is fine, but only abstracts were read. FND-701 says so; keep that flag.
- SRC-701 (tier A): correct for the INS/OC/DGPA balance-sheet article. Claims from the signed p.25-26 article (120/191 rank, "almost 50%", Tanchum "75%") should be described as secondary analysis.
- SRC-711: `type: official-statistics` is a poor fit for a decree. The template has no legal-text type; tier A is fine. Either add a note or ask Taha to add the type to the template.

### Taxonomy and template
All frontmatter field names match `templates/finding.md`. Values for sectors, theme, timeframe, geography, root-cause type, severity, trend and confidence are all valid.
- Several indicator `value` fields hold composite strings, such as "442 + 90 = 532" and "6,625 due / 2,543 received (38%)". These will parse poorly; split them into separate numeric indicators.
- `geography: north-west` in FND-701 rests only on the abstract-only SRC-708/709 and on stakeholders. No indicator is north-west.

### Concrete fixes
1. **FND-TG-700, indicator "Soft wheat import dependence (World Bank, from OC)":** change `year: 2024` to something like "not stated (document dated March 2024)".
2. **FND-TG-700, Problem paragraph,** "Wheat imports are about 1.9-2.0 million t a year (calendar 2021-2023). Of this, 1.2-1.6 million t is non-durum": for 2021-2023 the range is 1.18-1.32 Mt. The 1.59 Mt figure is 2024. Separate the years.
3. **FND-TG-700, RC1:** reword so the cause is "Tunisia has no comparative advantage in soft wheat outside irrigated and northern rainfed land (SRC-TG-710, 2000-2008 analysis)". "Soft wheat is barely grown" restates the symptom; keep the area figures as evidence. Note the 2014 vintage.
4. **FND-TG-700, RC2:** drop "grows with population" or source it. USDA supports only "about 2% a year".
5. **SRC-TG-702 and FND-TG-700:** correct the 2022 HS1001 weight to 1,890.1 kt and HS100119 to 577.3 kt, or note a revision, and fix the raw example. Replace "essentially soft (bread) wheat" with a caveat that HS100199 may include feed wheat (ITES p.66 lists blé fourrager imports). 2021 imports exceeding ONAGRI consumption is a sign of this.
6. **FND-TG-700:** optionally add the FTDES 85.3% (tier C via press) and the Comtrade/USDA cross-check as corroboration.
7. **FND-TG-701, RC1:** replace "About 85-90% of cereal area is rainfed" with "Over 85% of wheat area is rainfed (GIEWS); ITES says only 10% of cereal production is irrigated". Apply the same correction in the Problem paragraph ("ITES puts irrigated cereals at only 10%" should say 10% of production).
8. **FND-TG-701, Root causes:** delete "Low dams" or source it.
9. **FND-TG-701, RC3 (low yields):** low yields are a co-symptom, not a cause of volatility or collapse. It also rests on the ONAGRI opinion article. Move it to Evidence or recast it as a cause that is actually sourced.
10. **FND-TG-701, Evidence "Future":** attach "RCP 8.5" only to the 45-55% yield gap. The abstract gives +4 °C and −37% against baseline by end of century without naming the scenario.
11. **FND-TG-701, geography:** either justify `north-west` with a sourced indicator or reduce it to `[national]`.
12. **FND-TG-702, RC3 ("CGC pays the Office des Céréales late and only partly"):** the body's Fiscal bullet says "The CGC's arrears to the OC are a symptom". Remove it from root_causes, or replace it with the cause the body names: subsidy needs rise with world prices and bad harvests while budget transfers do not keep pace (SRC-705, SRC-700).
13. **FND-TG-702, RC2:** change "reform repeatedly postponed since the 1984 bread riots" to what the sources say. The World Bank cites the 1983-84 riots as the reason bread prices are sensitive; GIEWS says reform "has been postponed so far".
14. **FND-TG-702, indicator "OC share of physical collection" and Collection bullet:** add the contradicting evidence: USDA 2024 says the OC accounts for 40-60% of wheat production and 10-40% of barley, and PAD5602 shows 1,284.7 kt collected in 2019. State that ITES's 2% is the OC's own physical collection, with collectors working on its account. Do not present it as the current market share.
15. **FND-TG-702, Evidence "The 2011 decree":** change to "Decree 2012-754 (prices for the 2011 harvest)".
16. **FND-TG-702, Collection bullet:** remove the process wording "The brief described the OC as having a collection monopoly."
17. **FND-TG-702, Problem:** add SRC-TG-705 to "The World Bank links OC's financing gap to its trouble securing imports" (para 10, "very difficult for OC to access additional financing ... for grain imports").
18. **SRC-TG-701, Notes:** say that p.25-26 claims are secondary analysis (tier B weight), and adjust FND-701's reliance on them.
19. **Composite indicator values** (FND-701 production, area and collection; FND-702 arrears and prices): split into separate numeric indicators.

### Readiness for `status: in-review`
- **FND-TG-700: not yet.** No number is wrong and confidence `high` is justified for soft wheat dependence above 80%. It needs fixes 1-5, all small.
- **FND-TG-701: not yet.** No figure is wrong and confidence `medium` is fine, but it has an unsourced claim ("low dams"), a derived 85-90% cereal-area figure the sources do not give, a symptom listed as a root cause (low yields, from an opinion article), and a north-west tag without support. Fixes 7-11.
- **FND-TG-702: not yet.** All figures check out, but a root cause contradicts the record's own body (fix 12), one cause is phrased beyond its sources (fix 13), and the OC collection indicator is contradicted by another cited source without reconciliation (fix 14). Confidence `medium` is appropriate once these are fixed.

Sources used for the independent check:
- [La Presse de Tunisie, FTDES article](https://www.lapresse.tn/?p=165912)
- [webmanagercenter (OTE 89% all-cereal figure)](https://www.webmanagercenter.com/2024/06/03/525723/tunisie-vers-une-politique-agricole-de-souverainete-alimentaire/)
- [Milling MEA country focus](https://millingmea.com/country-focus-tunisia-balancing-cereal-recovery-with-structural-import-dependence/)

Files:
- Records: `C:\Users\Taha\AppData\Local\Claude-Data\claude_pzs8sxrjxfjjc\scratch-workspaces\8f66b2fd-0a65-4fc2-be48-1263c790833f\465f3cf6-7d59-4992-8d00-fa1881bab02e\scratch-2026-11-21-6d1e03\.claude\worktrees\p1-agriculture-047b45\research\phase1-findings\` (FND-TG-700, 701, 702) and `...\research\sources\` (SRC-TG-700 to 711)
- Downloaded sources and extracted text: `C:\Users\Taha\AppData\Local\Temp\claude\84d5bad6dc087fc3\6e966d88-81b3-402c-88d3-7630ed4be8fc\scratchpad\verify-700\`
- API outputs: `C:\Users\Taha\AppData\Local\Temp\claude\84d5bad6dc087fc3\6e966d88-81b3-402c-88d3-7630ed4be8fc\scratchpad\verify-700\api\`
