# Verification report: FND-TG-880 and FND-TG-881

Repo root: C:\Users\Taha\AppData\Local\Claude-Data\claude_pzs8sxrjxfjjc\scratch-workspaces\8f66b2fd-0a65-4fc2-be48-1263c790833f\465f3cf6-7d59-4992-8d00-fa1881bab02e\scratch-2026-11-21-6d1e03\.claude\worktrees\p1-agriculture-047b45

No files in the repo were edited. Downloaded sources and text conversions are in C:\Users\Taha\AppData\Local\Temp\claude\84d5bad6dc087fc3\6e966d88-81b3-402c-88d3-7630ed4be8fc\scratchpad\verify-880\ (s880, s881, s882, s883, s886, s888, s700, inm, afd2020).

## What I could and could not open

- Opened and checked line by line: SRC-TG-880 (CCDR exec summary, EN), SRC-TG-881 (CCDR full, FR, inkyfada mirror), SRC-TG-882 (TEM Autumn 2023, FR), SRC-TG-883 (TEM Spring 2024, EN), SRC-TG-886 (PNA impacts study, ONAGRI), SRC-TG-887 (INM climat-c, both pages), SRC-TG-888 (IPCC CCP4), SRC-TG-889 (DOAJ abstract), SRC-TG-700 (GIEWS archive).
- **Could not open: SRC-TG-884 (NDC) or SRC-TG-885 (NC4).** unfccc.int serves an Incapsula bot-check page to curl and WebFetch. The mirrors I tried were blocked by Cloudflare or failed the TLS handshake, and I did not try to get around bot detection. Every claim that rests only on 884 or 885 is therefore "could not verify". Where SRC-TG-886 or the CCDR carries the same figure, I note that.

## Key findings

1. **The claim that the CCDR's "AFD 2020" source cannot be traced is wrong.** The CCDR bibliography (p. 78) lists "Agence française de développement. 2020. 'Impacts des effets du changement climatique sur la sécurité alimentaire'" with an ONAGRI URL: http://www.onagri.nat.tn/uploads/Etudes/4a.%20Impacts%20des%20effets%20du%20CC%20-%20securite%20alimentaire.pdf. That URL downloads today (13.3 MB, HTTP 200). It is the same "Avril 2021, Version finale, Livrable 3/5" as SRC-TG-886: the first 5,404 text lines are identical, and only a workshop-report annex is added. TEM Autumn 2023 Box 1, footnote a, names the same title. Other CCDR figures come from this study too: the 28% unmet water demand by 2050 is PNA Table 30 (72% coverage), and the 366 m³ per capita figure is in the PNA. The source is therefore identified. What is true is that the CCDR's crop-yield numbers do not match this document's tables. Either an earlier 2020 draft was served at that URL, or the CCDR transcribed the figures wrongly.
2. **"The final 2021 study states yield losses only for 2100" is wrong.** PNA Table 9 (p. 48) gives 2050 rainfed yield changes. Under RCP 8.5 at 2050: durum -9.0%, soft wheat -13.0%, barley -11.2%. Under RCP 4.5 at 2050: -14.1%, -16.6%, -13.7%. Table 10 (olive oil yield) gives RCP 8.5 2050 -32% and 2100 -61%; RCP 4.5 -17% and -26%. The CCDR's 2050 RCP 8.5 figures (soft wheat -35%, barley -41%) are about three times the study's 2050 values. This makes the record's point stronger, but the sentence must be corrected.
3. **Olive at 2100 under RCP 8.5: the study is internally inconsistent.** The text (p. 11 and p. 61) says "autour de 66%", while Table 10 gives -61% (663 to 257 kg/ha). The record and SRC-TG-886 quote only the text value of about -66%.
4. **The NDC olive figure of -32% matches the study.** PNA Table 10 gives olive yield -32% under RCP 8.5 at 2050. If the NDC's footnote 14 ("RCP 8.5 à l'horizon 2050", as quoted in SRC-TG-884) applies to that sentence, the NDC olive figure is correctly dated. The record only says it "carries no horizon".
5. **The cereal misdating claim holds on the study side.** PNA Table 18 gives a total of -14% at 2050 and -38% at 2100 (RCP 8.5). The p. 102 text says the fall approaches 40% "en 2100 pour le RCP8.5". I could not confirm the NDC and NC4 wording ("almost 40% by 2050") because UNFCCC was blocked.
6. **The CCDR mirror is faithful.** The inkyfada PDF carries the World Bank copyright page and the "Novembre 2023" title page, with no added media content. Where it overlaps with the official English executive summary (SRC-TG-880), the figures are the same: 3.4% of GDP in 2030, 6.4% in 2050, TND 10.4 billion, agricultural value added -15% by 2030 and -29% by 2050, and a 28% water gap. Tier B is correct. It would still be better to cite an official World Bank URL for the French text if one can be found.

## Claim table

| Record | Claim | Result | What the source says |
|---|---|---|---|
| 880 | Temperature +1.6/+1.9°C at 2050 and +2.0/+3.9°C at 2100 vs 1981-2010 (SRC-887) | Confirmed | INM temperature page, exact wording |
| 880 | Rainfall -6%/-9% at 2050 and -9%/-18% at 2100; north most affected (SRC-887) | Confirmed | INM precipitation page: -14 mm, -22 mm, -23 mm, -45 mm; "régions humides et subhumides au Nord" |
| 880 | Root cause 1 cites SRC-886 for +1.6 to +1.9°C | Partly wrong | SRC-886 p. 23 gives +1.5°C (RCP 4.5) and +1.9°C (RCP 8.5) at 2050, and +1.9°C and +3.9°C at 2100. INM gives 1.6 and 2.0 |
| 880 | CCDR worst case: -1 to -14% rainfall by 2050, -18 to -27% by 2100 (SRC-881) | Confirmed | Figure 10 caption, p. 4; footnote 21 defines the worst case as RCP 8.5 |
| 880 | Dry years: 52% (10 of 19) and 79% (15 of 19), 2031-2050 (SRC-881) | Confirmed | p. 9; "dry year" is undefined, and the record correctly reads the figures as frequencies |
| 880 | Consecutive dry days +9.3/+17.1 and heatwave days +32/+39 (SRC-885) | Could not verify | UNFCCC blocked. Not found in SRC-886, which refers to its "Rapport 1" for climate extremes |
| 880 | Agricultural value added -15% by 2030 and -29% by 2050, RCP 8.5, past-trend baseline (SRC-880) | Confirmed | Exec summary p. vi; also in the French Résumé |
| 880 | Production -29.1%/-33.1%, TND 4.0-4.6 billion, 2.8-3.2% of GDP (SRC-881) | Confirmed, but the year is inferred | p. 25. The sentence itself gives no horizon; 2050 comes from the paragraph's opening "d'ici à 2050" (water losses) |
| 880 | "The Autumn 2023 monitor repeats this" (SRC-882) | Partly wrong | TEM Box 1 repeats 29.1-33.1%, but gives a 4.1-4.6% fall in real GDP, not 2.8-3.2%. It also states olive production could fall 69% "d'ici 2050" |
| 880 | NDC: agriculture's share of GDP -5 to -10% by 2030 (SRC-884) | Could not verify | UNFCCC blocked; not found in SRC-886 |
| 880 | Cereal production -21%/-16% (RCP 4.5) and -14%/-38% (RCP 8.5) (SRC-886) | Confirmed | Table 18, p. 102 |
| 880 | Olive oil with variable area -23%/-28% and -35%/-70%; reference 207 kt (SRC-886) | Confirmed | Table 22, p. 105 |
| 880 | Suitable area at 2100 (RCP 8.5): cereals -16% (-31 to +4), olives -14% (-27 to +7), pastoral -19% (-36 to +1) (SRC-885) | Confirmed via SRC-886 and the CCDR; 885 itself not opened | PNA exec summary p. 11 and pp. 52, 64, 74; CCDR p. 24 footnote 92 for olives |
| 880 | Rangelands meet 8-10% of feed needs by 2050 vs 16% in 2020 (SRC-885) | Could not verify | Found in neither SRC-886 nor the CCDR |
| 880 | CCDR: at least 30% of agricultural jobs lost by 2050, oases; cites "Ministère de l'Environnement 2021" (SRC-881) | Confirmed | p. 24, footnote 93; that citation has no bibliography entry |
| 880 | NC4 job figures of 30% and at least 20% (SRC-885) | Could not verify | Neither figure appears anywhere in the PNA impacts study (full text searched), although the NC4 reportedly cites it |
| 880 | NDC/NC4 put the near-40% cereal fall at 2050 when the study gives 2100 | Study side confirmed; NDC/NC4 text not verified | PNA p. 102: "près de 40% en 2100 pour le RCP8.5"; at 2050 RCP 8.5 the figure is -14% |
| 880 | NDC olive -32% "carries no horizon" | Incomplete | Equals PNA Table 10, RCP 8.5 2050 yield (-32%) |
| 880 | CCDR olive -69%, soft wheat -35%, barley -41% by 2050 (RCP 8.5); RCP 4.5 figures -67/-42/-54; cites AFD 2020 | Confirmed as quoted | p. 24, footnotes 89-90. The olive sentence carries no horizon; "d'ici 2050" belongs to the wheat and barley sentence |
| 880 | "AFD 2020 deliverable not found, so the CCDR numbers cannot be traced" | Wrong | The CCDR bibliography gives the ONAGRI URL, which serves the same April 2021 deliverable as SRC-886 (see finding 1) |
| 880 | "Final 2021 study states yield losses only for 2100" | Wrong | Table 9 and Table 10 give 2050 values (see finding 2) |
| 880 | Study olive yield at 2100 under RCP 8.5 "about -66%" | Partly right | Text says about 66%; Table 10 says -61% |
| 880 | NC4 swaps the -14 mm and -22 mm scenario labels | NC4 not verified; correct allocation confirmed | SRC-886 p. 23 and INM: -14 mm is RCP 4.5, -22 mm is RCP 8.5 |
| 880 | IPCC: elasticity 0.79; crops non-viable in Tunisia beyond 2°C with less irrigation water (SRC-888) | Confirmed | Table CCP4.1, p. 2245. The non-viability sentence sits in the vegetables row, so "some crops" should read "some vegetable crops" |
| 880 | Demand exceeds supply by 28% by 2050 (RCP 8.5); energy demand from desalination and pumping (SRC-880) | Confirmed | Exec summary pp. ii and iv |
| 880 | RCP 8.5 "overly pessimistic" (SRC-880, footnote 2) | Confirmed | Footnote 2, p. iv |
| 880 | 90% of arable land rainfed; irrigated land gives 36% of value added (SRC-881) | Confirmed | p. 8 |
| 880 | Model counts (12 and 18), horizons 2036-2065 and 2071-2100, ±15%, no technical progress (SRC-886) | Confirmed | pp. 22-23 and 102-103. Note that p. 23 also writes "2036-2064" |
| 881 | Agricultural value added -11% in 2023; GDP growth 0.4%, or 1.8% with 2022 agricultural growth (SRC-883) | Confirmed | TEM Spring 2024, p. 1 |
| 881 | Agricultural value added -9% in H1 2023; first-half value added -11.2% from 2019 to 2023 (SRC-882) | Confirmed | TEM Autumn 2023, pp. 1-2 |
| 881 | Cereals -61% vs 2022, just over 22% of the 2019 level, OdC sales data (SRC-883) | Confirmed | p. 1, footnote 1 |
| 881 | CCDR forecast: cereals from 750,000 to 250,000 t; April 2023 night-time water cuts and irrigation ban (SRC-881) | Confirmed | p. 7 |
| 881 | GIEWS: 302,000 t (Nov 2023), 520,000 t (May 2024), 1.5 Mt in 2024, 1.7 Mt in 2025 (+18%); irrigated wheat under 15% of wheat area; seed shortfall; imports 4.7 Mt (SRC-700) | Confirmed | Briefs of 29 Nov 2023, 30 May 2024, 26 Mar 2025 and 18 Feb 2026 |
| 881 | Irrigation restrictions from March 2023 (SRC-882, SRC-883) | Confirmed | Both monitors |
| 881 | Unemployment 15.2% (Q4 2022) to 16.4% (Q4 2023) (SRC-883) | Confirmed | p. 2 |
| 881 | Agricultural insurance 0.42% of premiums (2021); TND 345 million in losses, 40% borne by the state, via Atlas Magazine (SRC-881) | Confirmed | p. 11, footnotes 61-62 |
| 881 | Drought length: sixth year (882), fourth year (883), four years since 2019 (CCDR) | Confirmed | TEM Spring 2024 is itself inconsistent: "4th consecutive year" in one sentence, "dry conditions … over the previous 4 years" in another. GIEWS (May 2024) also says four consecutive years |
| 881 | Observed +2.1°C dated 1978-2012 (p. 19) and 1951-2010 (p. 129); rainfall trend contradictions; 2016-2018 drought (SRC-885) | Could not verify | UNFCCC blocked |
| 881 | Mohamed et al. 2023: no significant rainfall trend at 16 stations; warming of 0.03°C/yr (SRC-889) | Confirmed | DOAJ abstract: 9 non-significant decreases and 7 non-significant increases |
| 881 | 0.03°C/yr is "roughly half the rate implied by 2.1°C over 1978-2012" | Arithmetic correct, framing incomplete | 0.03 × 62 years ≈ 1.9°C, consistent with 2.1°C over 1951-2010. The conflict exists only with the 1978-2012 dating |
| 881 | Data gap: 2019 GIEWS brief extract not in the record | Can be closed | The archive's 31 May 2019 brief forecasts a bumper crop of almost 2.2 Mt, over 40% above average |

Independent check of the main figures:
- **FND-880:** the PNA crop modelling (SRC-886) is the only independent check on the CCDR value-added figure. It agrees on direction (cereals -14% to -21% at 2050), but the metrics differ.
- **FND-881:** GIEWS agrees on direction with the -11% value-added figure (2023 cereals 70-80% below average). INS national accounts were not opened.

## Fixes needed

**FND-TG-880**
1. Evidence bullet "Crop yields in the CCDR: cannot be traced". Rewrite it. The CCDR cites AFD 2020 with an ONAGRI URL, and that URL serves the April 2021 final deliverable (SRC-TG-886). The CCDR's 2050 wheat and barley yield figures (-35%, -41%) do not match that document. Its Table 9 gives -13.0% and -11.2% at 2050 under RCP 8.5, and -33.2% and -31.5% at 2100. Delete "The final 2021 study states yield losses only for 2100".
2. Same bullet, olive. Give both values from the study: Table 10 says -61% and the text says about 66% at 2100 under RCP 8.5; at 2050 under RCP 8.5 the yield change is -32%.
3. `data_gaps`. Replace "The 'AFD 2020' deliverable cited by the CCDR … was not found" with "The CCDR's yield figures do not match the deliverable its bibliography links to (identical to SRC-TG-886); no earlier 2020 draft was found."
4. Evidence: "The NDC's olive yield figure (-32%) carries no horizon". Add that it equals PNA Table 10 at RCP 8.5, 2050, so this NDC figure is consistent with the study.
5. Evidence: "The World Bank's Autumn 2023 monitor repeats this (SRC-TG-882)". Qualify it: the monitor gives a 4.1-4.6% fall in real GDP rather than 2.8-3.2% of GDP, and dates the olive -69% to 2050 as a production fall.
6. `root_causes[3]` (the institutional "evidence problem"). Remove it from `root_causes`. The record itself says it is not a cause of the losses; keep it in the body and in `data_gaps`.
7. `root_causes[0]`. Either cite SRC-TG-887 only, or state that SRC-TG-886 gives +1.5°C (RCP 4.5, 2050) and +1.9°C (RCP 4.5, 2100).
8. `projection.source`. It lists only SRC-TG-886, but `scenario` and `method` also describe the CCDR. The template has one field, so either name SRC-TG-886 as the primary source and say so in `method`, or move the CCDR figures out of the projection block.
9. Indicator "Projected agricultural production … (partial equilibrium)": mark the year 2050 as inferred from the paragraph context.
10. IPCC sentence: change "some crops non-viable" to "some vegetable crops non-viable".
11. Before in-review, someone with UNFCCC access must check the SRC-884 and SRC-885 extracts:
    - the "almost 40% by 2050" sentence;
    - the "-5 to -10%" share of GDP;
    - the swapped mm labels;
    - the 9.3/17.1 consecutive dry days and 32/39 heatwave days;
    - the 8-10% rangeland figure;
    - the 20% and 30% job figures.
12. SRC-TG-881 Notes (first bullet) say the AFD 2020 deliverable "was not found". Correct this as in fix 1. SRC-TG-886 Notes should add that the CCDR's bibliography URL serves this same document.

**FND-TG-881**
1. Root cause on observed warming, and the Root causes paragraph. Make clear that the abstract's 0.03°C/yr (about 1.9°C over 62 years) is consistent with the NC4's 1951-2010 dating of 2.1°C and conflicts only with the 1978-2012 dating.
2. Evidence on drought length. Add that the Spring 2024 monitor contradicts itself ("4th consecutive year" vs "previous 4 years"), and that GIEWS (May 2024) also says four consecutive years.
3. `data_gaps`. Close or reword the 2019 GIEWS gap: the 31 May 2019 brief is in the archive and forecasts about 2.2 Mt. Add its extract to SRC-TG-700; SRC-TG-700 is shared, so check who owns it.
4. Root cause "Thin risk-financing". This explains who bears the losses, not why output fell. Either reword it as a cause of the fiscal and household impact, or move it to the Links or Evidence section.
5. The NC4-only claims must be checked against the source before in-review:
    - +2.1°C dated 1978-2012 (p. 19) and 1951-2010 (p. 129);
    - the rainfall-trend contradiction (pp. 19 and 130);
    - the 2016-2018 drought and groundwater compensation (p. 165).

## Taxonomy and template

- Both FND records use valid values for `sectors`, `theme` (drought-climate), `timeframe`, `geography`, root-cause `type`, `severity`, `trend` and `confidence`, and the field names match templates/finding.md.
- FND-881 correctly has no `projection` block.
- The SRC records use valid `type` and `tier` values. Tier A for IPCC and the INM dataset, and tier B for the World Bank, MARHP/AFD, NDC and NC4 documents, are all appropriate.
- All `related` IDs exist (700, 701, 702, 720, 742, 920).

## Confidence

- **FND-880 at medium is justified.** The direction is robust, there are effectively two modelling exercises, and the crop numbers are quoted inconsistently in the policy documents.
- **FND-881 at medium is justified.** The core 2023 damage is solid at tier B, while drought length and long-term trends are contested.

## Ready for in-review?

- **FND-TG-880: not ready.** Two central factual statements are wrong: that the AFD 2020 source cannot be traced, and that the study gives yield losses only for 2100. The institutional root cause should go, and the NDC and NC4 extracts are not yet verified.
- **FND-TG-881: not ready yet, but close.** Every claim from World Bank, GIEWS, CCDR and the journal abstract checked out. Before in-review it needs minor fixes 1-4 and a check of the NC4 claims by someone with access to UNFCCC.
