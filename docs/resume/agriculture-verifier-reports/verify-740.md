## Source verification: FND-TG-740, FND-TG-741, FND-TG-742 and SRC-TG-740 to 747

**Bottom line:** FND-TG-740 and FND-TG-741 can go to `in-review` once the small fixes below are made. FND-TG-742 is not ready: three changes alter how its claims read and must be made first. I edited no files.

### How I checked
- I downloaded every source to `C:\Users\Taha\AppData\Local\Temp\claude\84d5bad6dc087fc3\6e966d88-81b3-402c-88d3-7630ed4be8fc\scratchpad\verify-740\d7NN\` (one folder per source) and converted each with `pdftotext -layout`.
- **SRC-TG-744 (OTE):** the live URL refused the connection three times (curl error 35). I checked it against the Wayback Machine copy (`web.archive.org/web/2024id_/<url>`): 31 pages, dated December 2020, by Vernin with Helali.
- **Decrees 85-1104 and 85-1109:** confirmed only as cited inside SRC-TG-747. The JORT texts were not opened.

### Results table

| Record | Claim | Result | What the source says |
|---|---|---|---|
| SRC-740 | All extracts (5,240 ha in 1976; 7,000 ha in 1994-96; 32,700 ha in 2020; 8,315 / 10,485 ha legal; 85% and 80.7%; 540 / 2,073 / 1,434 ha per year; 9,678 boreholes; 3,750 ha; 2,358 panels; 500 ha PDES; 24.70 m; over 5 g/l; 751 / 1,645 / 7,991 ha; "chose not to act"; AFA July 2021; subsidies put on hold) | Confirmed, verbatim | Matches the PDF. One section label is wrong: the "reduced water availability" and "drainage problems" sentences are in **3.3.2, Actors' discourse** (what CRDA staff said in interviews), not 3.3.1. Metadata (authors, DOI 10.30682/nm2205f) is correct. |
| SRC-741 | All extracts (more than 250 varieties; 1970s value chain; 85.7%; 10,500 / 32,700 ha; 25-60 days; 14.5%; 84% / 86%; 75%; abandonment; soft varieties; 86% / 57% protocol) | Confirmed | Verbatim, including the two-column passages the author rebuilt. |
| SRC-742 | Tableau 17 (1977 to 2002 palm counts and shares) | Confirmed | All six rows match the PDF exactly. |
| SRC-742 | Tableau 10, rebuilt rows 2005-06, 2017-18, 2018-19 | Confirmed | I rebuilt the garbled columns by sum-check; every row from 2011-12 to 2018-19 now adds up, and the three rows quoted are correct. |
| SRC-742 | 56,654 ha; 36,560 ha; more than 38,000 ha; 9,000-10,000 wells; 7,600 ha in 1992; 4,085 ha (Hajji); 2,500 ha Rjim Maatoug; 72.3% = 2,777,408 of 3,841,485; 300 cultivars; 73% / 82%; policy quotes; bayoud; 15%; Rjim Maatoug (1984, office created 1989, 1.5 ha per beneficiary, 12,000 of 250,000 t); colonial drilling; Japanese-loan channels; Mohdeth; AOC; PMF/FEM; 441.4 / 468.4 MDT; statistics stopped in 2018 | Confirmed | All verbatim. |
| SRC-742 | English gloss: "more than 500,000" common-variety palms added | Accurate to the text, but the text contradicts its own table | The FAO prose says more than 500,000 in 26 years. Its Tableau 17 gives +402,886 over 25 years. FND-740 correctly uses about 400,000. |
| SRC-743 | 57,385 ha / Kebili 38,000 ha; 3.9 M productive palms (74.8%); 2.66 M Deglet Nour (68.2%); Alig 0.44 M; 18,590 / 37,387 / 677 ha; 716.6 MTND; 119.8 kt; 9.9% / 15.7% / 44.4% / 12.1%; effort 50.0% (2011) and 36.1% (2021) | Confirmed | The order of the four percentages is right: 9.9% is the growth rate of export value, 15.7% the share of food exports, 44.4% the average export effort, 12.1% the world market share. Two consistency checks pass: 119.8 kt × 5.98 TND/kg ≈ 716 MTND, and 119.8 / 331.5 kt = 36.1%. Caveat: 32.4% and 65.1% are as printed, but they divide 2018 survey areas by the 2022 total of 57,385 ha. On the survey's own total of 56,654 ha they are 32.8% and 66.0%, which matches FAO's 33% / 66%. |
| SRC-744 | 80% of exports (no footnote); 94% of young plantations (footnote 44, MEDD 2015); 60%; Kebili market structure; PDES uprooting; more than twice the price; 150 other varieties; GIFruits floor prices | Confirmed (Wayback copy) | Verbatim. The report also says Kebili produced 74.73% of national Deglet Nour in 2016. That is a useful cross-check against FAO's 82% for 2018, but it is not used in the records. |
| SRC-745 | 52 plots; layers less frequent; water as the key factor; fertility loss worsened by saline water; 100-150 palms per ha | Confirmed | Verbatim. The note's "38 farmers" was not found by search; it could not be verified. |
| SRC-746 | "Close to 250"; "severe genetic erosion"; 21 genotypes from 11 oases | Confirmed | Verbatim. |
| SRC-747 | 1985 ban zone; about 80%; decrees 85-1104 and 85-1109; solar since 2015; 2022 workshop; meters and selling surplus to STEG; September 2024 | Confirmed | Verbatim. The same page also says enforcement was tried (seizing drilling rigs, prosecutions) but was short-lived and had very weak effect, leading in practice to laisser-faire. |
| FND-740 | Deglet Nour share 44.9% (1977), 61.3% (2002), 68.2% / 72.3% (2018) | Confirmed | |
| FND-740 | 85.7% of exports in 2022/23 | Confirmed as relayed | Comes from ONAGRI 2023 via SRC-741; flagged as a data gap. |
| FND-740 | 94% of young plantations; 75% of planned trees; 716.6 MTND; 15.7%; 36.1%; 82%; 14.5%; 12.1% | Confirmed | FAO also gives 15.7% and 9.9%. |
| FND-740 | Rjim Maatoug facts (1984, PDES 1980-1992, 1989 office, 2,500 ha, 1.5 ha, 12,000 t ≈ 5%) | Confirmed | |
| FND-740 | "The gap [441.4 vs 716.6 MTND] is unexplained" | Should be reworded | FAO is inconsistent with itself: on p. 26 it pairs 468.4 MDT with 15.2% of food exports, beside olive oil at 1,545 MDT = 33%, which implies dates ≈ 710 MDT. ONAGRI's figure holds together; FAO's 441/468 does not. |
| FND-740 | Root cause 4: "Most common (soft) varieties are perishable…" | Overgeneralised | Dagher speaks of soft varieties only. FAO (SRC-742) says a large share of common varieties are soft, which is not "most". |
| FND-740 | "15% common-variety rule" | Partly right | FAO calls it an extension-service recommendation in one place and a protocol requirement in another. |
| FND-740 | *Oligonychus afrasiaticus* | Confirmed | In the SRC-741 and SRC-742 PDFs, though not in the SRC extracts. |
| FND-740 | Bayoud = *Fusarium oxysporum* f. sp. *albedinis* | Could not verify | No cited source contains this name. It appears to come from memory. |
| FND-740 | Energy link (diesel, cold-store grid connections, solar since 2014) | Confirmed | SRC-740. |
| FND-741 | 5,240 ha; 7,600 ha; 4,085 ha; 7,000 ha; 32,700 ha; 10,485 ha; 36,560 ha; 38,000 ha; 37,387 ha (65.1%); 85%; 80%; 9,678; 3,750 ha; 2,500 ha | Confirmed | 10,485 ha is an upper bound in the source ("did not exceed"). |
| FND-741 | Growth rates, borehole series, 7,991 ha (76.9%) and 751 ha in Douz, 2,358 panels, Smida 24.7 m, over 5 g/l, Blidette, policy response, 9,000-10,000 wells | Confirmed | |
| FND-741 | "real growth is closer to two and a half times since the mid-1990s" | Wrong | (10,485 + 32,700) / (8,315 + 7,000) = 43,185 / 15,315 = **2.8 times**. It also mixes 2018 legal area with 2020 extension area. |
| FND-741 | Confidence section: "FAO report independently shows the same fivefold growth" | Wrong | Mekki's figures do not show fivefold growth, and the Problem section itself argues that fivefold overstates it. |
| FND-741 | Root cause 1: "the state did not enforce the ban" | Overstated | SRC-747 says enforcement was tried but was brief and ineffective. Mekki reports a continuing decline in surveillance (Kassah 1996). |
| FND-741 | "From the 1990s surveillance and sanctions declined" | Partly right | The decline was reported in 1996; the source gives no start date. |
| FND-741 | Root cause 1: "Rjim Maatoug and about 500 ha under the PDES" | Sources conflict | FAO places Rjim Maatoug (2,500 ha) inside the PDES. Mekki's interviewees say the PDES created only 500 ha. The conflict should be noted, not merged into one statement. |
| FND-741 / FND-742 | "extensions led to reduced water availability… drainage problems" stated as fact | Attribution missing | This is what CRDA staff said in interviews (section 3.3.2). |
| FND-742 | 10,485 ha; 25-60 days; 14.5%; 86% in 2030; 32.4% | Confirmed | 32.4% carries the denominator caveat noted under SRC-743. |
| FND-742 | Title, Problem and projection: "Deglet Nour income… negative by 2030" | Scope missing | Dagher's Figure 5 and its text cover **traditional-oasis plots without access to a borehole**. In the sample, 19% of traditional-oasis farmers have their own borehole. |
| FND-742 | Projection block (horizon 2030; labour costs keep rising 14.5% a year in real terms; other costs and prices follow inflation; constant 2022 TND; 123 farmers; no water, climate or pest modelling) | Confirmed | Accurate apart from the borehole scope above. |
| FND-742 | Common varieties "already more profitable… in 2022 when stress is accounted for" | Imprecise | The source says this for the 2021-2022 survey years, under mite and water stress. "When stress is accounted for" is not the source's wording. |
| FND-742 | Root cause 4 (water user association management) and the replanting barrier | Confirmed in the PDF | Neither supporting sentence is in the SRC-741 extracts (discussion, and section 4.5). |
| FND-742 | Abandoned plots | Confirmed | SRC-741 notes it was observed in 2023. SRC-747 also says some family farmers abandon old-oasis land. |
| All three | `related` ids (FND-TG-740, 741, 742, 781, 802, 860, 880, 920) | Confirmed | All exist in `research/phase1-findings/`. |
| All three | Taxonomy and template fields | Confirmed | Theme, sectors, geography, timeframe and root-cause types are valid. `projection` appears only in FND-742. Parse risk: `year` mixes integers, ranges ("2015-2022", "2022/2023") and free text ("c. 2015 (MEDD monograph relayed)"); `value: "25-60"` is a string. |
| SRC tiers | 740, 741, 745, 746 = A (peer-reviewed); 743 = A (ONAGRI official statistics); 742, 744, 747 = B (FAO consultant report, NGO report, research policy brief) | Confirmed | |

### Independent check on the main figure (Kebili extension area)
WMC/TAP, 20 Feb 2023, quoting the head of the water department at CRDA Kebili: about 40,000 ha of oases in Kebili, of which 10,500 ha are public irrigated areas and nearly 30,000 ha are private holdings built around more than 8,000 unauthorised wells. Source: https://www.webmanagercenter.com/2023/02/20/502089/la-surexploitation-de-la-nappe-phreatique-de-kebili-un-defi-pour-lagriculture-locale/

This broadly supports 32,700 ha of extensions, 10,485–10,500 ha of legal oases and the 9,678 borehole count. It is tier C and comes from the CRDA, the same office Mekki draws on, so it corroborates but is not fully independent. The other spatial study I found (Ferchichi et al. 2024, Cahiers Agricultures) is by the same research team.

### Fixes needed

**FND-TG-742 (blocking)**
1. In `title`, the Problem section, the 86% indicator name and `projection.scenario`, limit the negative-income result to traditional-oasis plots without an individual borehole (Dagher, Figure 5).
2. In root cause 1 and the Root causes and Links sections, attribute "extensions led to reduced water availability" and "drainage problems" to interviewed CRDA staff (SRC-740, section 3.3.2).
3. In SRC-TG-741, add extracts for the water user association difficulties (discussion) and the replanting barrier (section 4.5), which root cause 4 and the Root causes section rely on. Correct the "3.3.1" label in SRC-TG-740 to 3.3.2 for those sentences.

**FND-TG-742 (non-blocking)**
4. Change "when stress is accounted for" to "in the 2021-2022 survey years (mite and water stress)".
5. Root cause 3 is typed `behavioural`, which does not fit. Fragmentation comes from inheritance splitting (SRC-745), and Mekki links falling fertility to biodiversity loss. Retype as institutional/technical, or split it.
6. Root cause 1 cites "water turns stretch to 25-60 days", which is a symptom. Restate the cause as aquifer drawdown plus decaying collective networks.
7. Optionally add SRC-TG-747 as a second source on abandonment, and add the 32.4% denominator caveat.

**FND-TG-741**
8. Problem section: change "closer to two and a half times" to "about 2.8 times (2018 legal plus 2020 extensions against 1996)".
9. Confidence section: replace "the same fivefold growth" with a statement that FAO independently shows strong growth (7,600 ha in 1992, 15,960 ha in 2001, 36,560 ha in 2018). The 2001 figure also supports the mid-1990s reconstruction. Add the WMC/TAP 2023 CRDA figure as tier C corroboration.
10. Root cause 1 and the Root causes section: change "did not enforce" to "enforcement (rig seizures, prosecutions) was short-lived and ineffective (SRC-747), and surveillance kept declining (SRC-740)". Change "From the 1990s" to "by the mid-1990s a decline was reported".
11. Root cause 1: note the PDES conflict (500 ha in Mekki versus Rjim Maatoug as a PDES project in FAO) instead of combining the two.
12. Water-effects sentence in Evidence: attribute to CRDA interviews, as in fix 2.

**FND-TG-740**
13. Remove *Fusarium oxysporum* f. sp. *albedinis* or source it.
14. Root cause 4: change "Most common (soft) varieties" to "A large share of common varieties are soft dates", citing SRC-742 as well as SRC-741.
15. Evidence: replace "the gap is unexplained" with a note that FAO's figure is inconsistent with itself (15.2% share against olive oil's 1,545 MDT = 33% implies about 710 MDT), so ONAGRI's 716.6 MTND is the reliable value.
16. Optional: describe the 15% as "an extension recommendation and planting-protocol requirement".

**SRC records**
17. SRC-TG-742 gloss: note that the "more than 500,000" in the text contradicts Tableau 17 (+402,886).
18. SRC-TG-743 notes: add the 32.4% / 65.1% denominator caveat.
19. SRC-TG-744 notes: record that the live URL was unreachable on 2026-11-21 and that the text was checked against the Wayback copy.
20. SRC-TG-745 notes: "38 farmers" could not be found in the text; confirm it or remove it.

**All records:** consider normalising `year` values to integers or "YYYY-YYYY" ranges, and moving the free-text qualifiers into `name`.

### Readiness for `status: in-review`
- **FND-TG-740: ready after the minor fixes** (13 to 15). Every figure matches its source, and medium confidence is justified.
- **FND-TG-741: ready after the minor fixes** (8 to 12). Every indicator is confirmed, the main figure is corroborated by CRDA via WMC/TAP, and medium confidence is justified. Fixes 8 and 9 correct a wrong number and a wrong statement in the prose.
- **FND-TG-742: not ready** until fixes 1 to 3 are made. Low confidence is justified, and the projection block is otherwise supported.

### Files
- Records: `C:\Users\Taha\AppData\Local\Claude-Data\claude_pzs8sxrjxfjjc\scratch-workspaces\8f66b2fd-0a65-4fc2-be48-1263c790833f\465f3cf6-7d59-4992-8d00-fa1881bab02e\scratch-2026-11-21-6d1e03\.claude\worktrees\p1-agriculture-047b45\research\phase1-findings\FND-TG-740-deglet-nour-monoculture.md`, `…\FND-TG-741-kebili-unauthorised-oasis-extensions.md`, `…\FND-TG-742-kebili-traditional-oases-viability.md`
- Sources: `…\research\sources\SRC-TG-740-*.md` to `SRC-TG-747-*.md`
- Downloaded copies for re-checking: `C:\Users\Taha\AppData\Local\Temp\claude\84d5bad6dc087fc3\6e966d88-81b3-402c-88d3-7630ed4be8fc\scratchpad\verify-740\d740\` to `d747\`, each holding `doc.pdf` and `doc.txt`; the FAO text is also at `d742\u.txt`.
