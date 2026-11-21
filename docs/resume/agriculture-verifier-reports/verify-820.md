# Verification report: FND-TG-820, FND-TG-821, FND-TG-822

Checked on 2026-11-21. I opened every source URL myself. PDFs were fetched with curl and read with pdftotext. UN Comtrade was queried through the public preview API, the WB WDI through its API, and the FAOSTAT bulk CSVs (Pesticides Use, Fertilizers by Product) were downloaded and grepped. No repo file was edited. Working files are in C:\Users\Taha\AppData\Local\Temp\claude\84d5bad6dc087fc3\6e966d88-81b3-402c-88d3-7630ed4be8fc\scratchpad\verify-820\

Repo checks: PHASES.md has phase 1 UNLOCKED. All IDs are in TG range 700-999. Every related FND file exists (700, 701, 702, 740, 861, 920). No duplicate SRC exists for the FAO cc6217fr URL. Frontmatter field names match templates/. Every theme, timeframe, geography and root-cause type value is in docs/taxonomy.md.

## 1. Claims table

### FND-TG-820 (fertiliser)

| Claim | Result | What the source actually says |
|---|---|---|
| Phosphate rock 7,600 kt in 2010 (SRC-821) | Confirmed | USGS MCS 2012: "Tunisia 7,600 5,000 100,000", in thousand metric tons, with 2011 marked as an estimate. |
| Phosphate rock 3,280 kt in 2024, marketable, estimate (SRC-822) | Confirmed | USGS MCS 2026: "Tunisia 3,280 3,300 2,500,000", marketable rock. Both years carry the "e" (estimate) mark. Caveat: the 2012 edition does not say "marketable", so the 57% fall compares two editions on possibly different bases. |
| DAP production 1,276,660 t (2010), 652,000 t (2012), 428,000 t imputed (2011) (SRC-835) | Confirmed | FAOSTAT RFB: flag A for 2010 and 2012, flag I for 2011. The series ends in 2012. |
| DAP exports 1,148,579 t (2010) and 286,190 t (2023) (SRC-824) | Confirmed | Comtrade: 2010 netWgt 1,148,578,612 kg, US$536.3M (H3). 2023 netWgt 286,190,000 kg, US$182.7M (H6). |
| Anhydrous ammonia imports 153,559 t, US$87.3M, 2023 (SRC-824) | Confirmed | Comtrade 2023 HS 281410 M: netWgt 153,559,161 kg, US$87,252,581. The 2022 figure is 162,383 t, US$167.2M; it supports the cause and the record does not use it. |
| Needs: 200,000 t AN, 90,000 t DAP, 45,000 t TSP; footnote says from a 2021 ministerial communiqué (SRC-820) | Confirmed against the source; the label needs a fix | FAO p.42 text is verbatim. Independent check (WMC/TAP, 2 Sep 2020, citing a ministry document): 200,000 t AN and 90,000 t DAP were the quantities "programmées" (planned for distribution) for the 2020/21 season. So these are planned allocations, and the year is the 2020/21 season, not 2021. |
| 2020-21 use: 153,000 t AN, 71,000 t DAP, 9,000 t TSP (SRC-820) | Confirmed; the record misreads its scope | FAO p.43 says the season is the "campagne céréalière". Figure 25 is titled "quantités d'engrais utilisées en céréaliculture", so this is use on cereals only. The FND sets it against the national all-crop "need", which is not like for like. The figure 25 values are legible in the text extract: AN cereal use was 152-214 kt from 2010-11 to 2020-21, and 157 kt in 2019-20. So 2020-21 was not an unusual drop. |
| Emergency import of 60,000 t AN via GCT, mainly from Russia, 45 MDT, in 2020 (SRC-820) | Confirmed against the source; timing nuance | FAO p.43 is verbatim. Independent check (WMC/TAP, 17 Nov 2021): about 60,000 t was imported "sur trois lots (durant les mois de décembre 2020 et janvier 2021)". This partly explains the calendar-year gap with Comtrade. Even so, Comtrade 2020 + 2021 is only about 15 kt, so the gap stays unresolved. |
| Recorded AN imports: 7,255 t (2020), 8,100 t (2021) (SRC-835) | Confirmed | FAOSTAT: 7,255.19 (flag X) and 8,100.38 (flag A). Comtrade 2020 netWgt is 7,255,194 kg (estimated weight). In 2021 netWgt is 0 and altQty is 8,100,380. The 2023 figure is 5,190 t. |
| Fertiliser use 61.0 kg/ha (2022) and 43.0 (2023); body also gives 47.4 (2010), 62.7 (2021), 46.4 (2024) (SRC-823) | Confirmed | WB API (last updated 2026-11-11) gives exactly these values. The metadata extracts are verbatim; the sourceOrganization string goes on with ", publisher: ..." (trivial). |
| Farm-gate price of AN 500 TND/t, with ex-factory 430 and margins 25/45, December 2020 (SRC-820) | Confirmed | FAO footnote 73, verbatim. |
| Government "toujours intervenu" to keep prices below world prices; prices rose 11% (TSP, DAP) and about 28% (AN) from 2020 to 2021 (SRC-820) | Confirmed | FAO p.44, verbatim. |
| No fertiliser regulating stock (SRC-820) | Confirmed for 2022-23 but out of date | FAO p.61, verbatim. But TAP via allAfrica (3-4 June 2025) reports that a restricted ministerial council decided to accelerate building stocks of AN and DAP for 2025/26 and to keep prices unchanged. The ministry also said in January 2026 that AN "ne peut pas être stocké sur de longues périodes" (SRC-826 page). |
| GCT pre-2011 processing capacity of about 6.5 Mt at four sites; supply fall due to "tensions sociales et blocages" (SRC-820) | Confirmed | FAO footnote 70 and p.43. Caveat: the "blocages" sentence refers to the fall in supply around 2021. The post-2011 link comes from footnote 70. |
| 25% domestic coverage in 2021, "certaines sources" (SRC-820) | Confirmed, and correctly kept out of the indicators | FAO footnote 71. |
| GCT must import sulphur and ammonia; loan bills no. 50 and 51 of 2026 (ITFC Murabaha); Mdhilla 2; below-cost "prix préférentiels" (SRC-825) | Confirmed | WMC article lines are verbatim. Tier C is correctly flagged. |
| AN deficit of about 18,000 t versus the previous season, 10-day delay, more DAP and TSP made available, black market (SRC-826) | Confirmed; attribution nuance | Tunisie Numérique, 29 Jan 2026, verbatim. The black market claim was made by deputies, not by the ministry. The ministry blamed GCT "dysfonctionnements", logistics and hazardous-goods constraints, and panic buying of whole quotas. The ministry also said there are no exports of locally made AN. The FND leaves out these ministry explanations. |
| 1987/88 margins freed; product subsidies removed 1991 (Super 16), 1992 (AN 33), 1993 (DAP); Super 45 keeps a declining subsidy (SRC-921) | Confirmed, with an internal discrepancy | ICR para. 27 is verbatim. The borrower's annex in the same ICR says the subsidies ended in 1992 for Super 16 and AN, 1993 for DAP and 1994 for TSP. So "only Super 45 kept a subsidy" held only until about 1994. |
| DAP exports of 0.23-0.41 Mt a year in 2015 and 2019-2023, "three to four times" the 90,000 t need | Mostly confirmed | FAOSTAT confirms the values. The ratio runs from 2.7x (2021, 242 kt) to 4.5x (2020, 409 kt), not 3-4x. |

### FND-TG-821 (seed)

| Claim | Result | What the source actually says |
|---|---|---|
| Certified cereal seed 30,000 t in 2023 (24,000 durum, 3,800 bread wheat); adoption below 20% nationally and below 30% in irrigated areas; over 80% farm-saved (SRC-827) | Confirmed | Frontiers 2026, Introduction and section 3.3, verbatim. The figures are cited from DGPA 2024. |
| Wheat imports of about 1.6 Mt a year (SRC-827) | Confirmed | Quoted from Thabet et al. 2024 (secondary). |
| Seed system is centralised; territorial actors are marginal (SRC-827) | Confirmed | Abstract, verbatim. |
| Vegetable seed imports US$16.3M / 372.6 t (2023) and US$12.4M / 349.8 t (2013) (SRC-824) | Confirmed | Comtrade HS 120991 M: 2023 netWgt 372,574 kg, US$16,290,349 (H6). 2013 netWgt 349,827 kg, US$12,351,802 (H4). The 2023 export query returns count 0, as stated. |
| Law 99-42: arts. 1, 3, 4, 9, 15 and 50; JORT no. 39, 14 May 1999, p. 706 (SRC-829) | Confirmed | FAOLEX scan with OCR. The page headers read 706, 707 and 708. The extracts match after the OCR fixes the author declares. |
| TIRPAA report 2024: law and decrees (p.3), "appauvrissement de la palette" (p.5), erosion assessment lacks baselines (p.5), Kebili Deglet Nour (p.6), 19B blank (p.13) (SRC-828) | Confirmed | Page numbers match the "Page n of 27" footers. The report is dated 19 November 2024 and the rapporteur is from INRAT. |
| BNG: 25,000 samples since 2007; 7,754 repatriated 2009-2021; 6,000 planned; 200 producers and more than 300 ha; varieties "délaissées au profit des semences commerciales améliorées" (SRC-830) | Confirmed | La Presse, 18 Nov 2026, verbatim. The article also says some local varieties yield less than commercial seed; the FND leaves this out. |

### FND-TG-822 (pesticides)

| Claim | Result | What the source actually says |
|---|---|---|
| 0.65 kg/ha of cropland in 2023; world 2.38, Africa 0.81, Northern Africa 0.82, Europe 1.55 (SRC-831) | Confirmed for 2023, but out of date | The current FAOSTAT bulk file has 2024: Tunisia 0.83 kg/ha (E), world 2.49, Africa 0.83, Northern Africa 0.87, Europe 1.65. In 2024 Tunisia is about a third of the world average and close to the Northern Africa average, not "a quarter". |
| Total use 909 t (1990), 2,175 t (2010), 3,511 t (2019), 3,195 t (2023); fungicides 2,000 t (2023) (SRC-831) | Values confirmed; the "peak in 2019, then eased" reading is wrong | FAOSTAT 2024 shows 4,047 t (E), the highest in the series, with fungicides at 2,533 t. 2019 is not the peak. |
| "No Tunisian value is flagged A" (SRC-831 notes; FND Evidence says "All Tunisian values carry flags E, I or X") | Wrong | 1997 is flagged A (909 t total and the sub-items). Every year from 1998 on is E, I or X. |
| Böll: 4,161.2 t imports in 2022 (down 33%); ANGeD 0.714 kg/ha (2013); 44 HHPs (CABI 2018); FAO 2019 survey of 1,174 farmers (33% PPE, 42% never, 91% untrained, 63% burn packaging, 30% dump waste); decree 94-1744; C184 not ratified; biocontrol studies (SRC-833) | Confirmed | Böll page, verbatim. The page also gives the reasons farmers skip PPE: "high costs (no subsidy scheme), unavailability on the market", which are economic causes. |
| 7 EU MRL exceedances in 20 samples, up to 26 times the limit; chlorpyrifos at 82% (adult) and 312% (child) of ARfD; Sousse, 25-28 April 2017; 73 growers; spraying up to harvest; product failure leads to higher doses (SRC-832) | Confirmed | Toumi et al. 2018 TJPP 13(1):127-143, verbatim. |
| 8.3% of "greenhouse workers / respondents" wear gloves (SRC-832) | Confirmed; the label is imprecise | 8.3% is for farm workers on re-entry. Operators wear gloves 23% of the time during application, and 57 of 73 operators never wear PPE when mixing or loading. The unit should read "percent of farm workers surveyed". |
| Law 92-72: art. 1, and art. 16 (registration ban) (SRC-834) | Confirmed | FAOLEX retyped text; the typos are in the source. Signed "Tunis, le 3 août 1992". |
| TIRPAA lists irrational pesticide use as a threat (SRC-828) | Confirmed | p.5. |

### Independent check on the main figure (fertiliser need against supply)

- WMC/TAP, 2 Sep 2020 (https://www.webmanagercenter.com/2020/09/02/455346/tunisie-vers-limportation-de-60-mille-tonnes-dammonitrate/), citing a ministry document: from 1 April to 12 August 2020, 14,475 t of DAP was supplied out of 90,000 t "programmées" (16%), and 19,325 t of AN out of 200,000 t programmed for 2020/21 (10%). This confirms the 200,000 t and 90,000 t magnitudes. It changes their meaning, though: they are planned season allocations, and the year is 2020/21.
- WMC/TAP, 17 Nov 2021 (https://www.webmanagercenter.com/2021/11/17/475728/reprise-de-lapprovisionnement-en-engrais-aupres-du-groupe-chimique-tunisien/): about 60,000 t of AN was imported in three lots in December 2020 and January 2021. This confirms the FAO import figure and shows it spans two calendar years.
- TAP via allAfrica, June 2025 (https://fr.allafrica.com/stories/202506040175.html): a restricted ministerial council decided to accelerate stock building and keep fertiliser prices unchanged for 2025/26, and adopted the digital app "Engrais". This confirms that administered pricing continues. It qualifies the "no regulating stock" claim.
- All three are tier C press (TAP agency copy). They corroborate the figures; they do not replace them.

## 2. Tier, root cause and confidence checks

- Tiers are correct for source type: USGS, WB WDI, Comtrade and FAOSTAT are A; the Frontiers and TJPP peer-reviewed papers are A; FAO 2023, TIRPAA, Böll and the WB ICR are B; WMC, Tunisie Numérique and La Presse are C. The laws (SRC-829, SRC-834) use type official-statistics and tier A because the template has no legal-text type. The author flags this. It is acceptable, but a `legal-text` type is worth adding to the template or taxonomy.
- FND-820 root causes. Cause 1 (output collapse) and cause 2 (imported feedstock) are sourced causes. Cause 3 has two problems. (a) It cites SRC-TG-921, which documents the opposite: subsidies were removed in 1991-93. (b) It sets `legacy_decision: true`, but no past decision to administer prices below cost is sourced. The only legacy decision sourced is the liberalisation. The "black market" part of cause 3 is a symptom, alleged by deputies and resting only on tier C. It should not sit inside a root cause.
- FND-821 root causes. Cause 1 is supported. Cause 2 (law 99-42) is presented as a cause, but the record itself says its effect is undocumented. So it is a context fact, not an established cause. Cause 3 is supported only by a tier C press quote and a qualitative tier B line, and the Deglet Nour example is a date-palm variety issue, not seed. Medium overall confidence is acceptable because the record limits it to the cereal part and calls the variety part low confidence.
- FND-822 root causes. Cause 1 mostly describes the practice (spraying up to harvest, residues above MRLs), which is close to the symptom. The causal element in the source is product inefficacy leading growers to raise doses, plus not following labels or pre-harvest intervals. Cause 2 is typed behavioural only, but Böll gives cost (no subsidy) and lack of PPE on the market as reasons. Cause 3 is sourced. `confidence: low` is justified.
- Tier-C-only claims are flagged in the body of FND-820 (2025-26 deficit, black market, GCT below-cost sales) and FND-821 (BNG claims). OK.

## 3. Concrete fixes needed

FND-TG-820 (research/phase1-findings/FND-TG-820-fertiliser-shortages-despite-phosphate.md)
1. indicators "Estimated annual need, AN / DAP / TSP": rename to "Programmed (planned) annual quantity" or note "need as stated by the ministry". Change `year` from 2021 to 2020-2021. Add the WMC/TAP 2020 confirmation as a new SRC if you want it as corroboration.
2. indicators "Fertiliser consumption, ... cereal season": rename to "Fertiliser used on cereals". In the Problem section, stop presenting 153,000 t against the 200,000 t national need as a shortfall. Say the series covers cereals only, and that cereal AN use was 152-214 kt a year in 2010-11 to 2020-21 (FAO figure 25), so 2020-21 was not exceptional. Also correct SRC-820's note that figure 25 values are scrambled: they are legible in the -raw extract.
3. indicator "Emergency import of AN": change `year` to "2020-2021 (Dec 2020-Jan 2021)", or say so in the body. This partly explains the gap with Comtrade.
4. root_causes[2]: remove SRC-TG-921 from `sources` and keep it in the body as contrary evidence. Set `legacy_decision: false`, or source a past decision that introduced below-cost pricing. Move "speculation and a black market" out of the cause and into the Problem/symptom text, and note that deputies alleged it (SRC-826).
5. root_causes[2] and Root causes §3: "no regulating stock exists" needs a date ("as of FAO 2023"). Add that a June 2025 ministerial council decided to accelerate stock building and keep prices unchanged (new tier C SRC), and that the ministry says AN cannot be stored long (SRC-826).
6. Body, export-priority paragraph: change "three to four times" to "about 2.7 to 4.5 times". Add the ministry statement that no locally made AN is exported (SRC-826), which narrows the export observation to DAP.
7. Root causes §3: note that the ICR borrower annex dates the end of the TSP subsidy to 1994, so "only Super 45 kept a declining subsidy" holds only until about 1994.
8. Root causes §1: note that the USGS 2010 (MCS 2012) and 2024 (MCS 2026, "marketable") figures come from different editions, and that both 2024 and 2025 are estimates.
9. Optional, Problem: add the ministry's own explanations for 2025-26 (GCT dysfunctions, logistics and hazardous-goods rules, panic buying), so the record does not take only the critics' framing.

SRC-TG-835: in the English gloss, "between 0.23 and 0.41 Mt a year in 2015-2023" is wrong. 2016 was 506,388 t and 2017 was 499,812 t (flag A). Write "0.23-0.41 Mt in 2015 and 2018-2023; about 0.5 Mt in 2016-2017".

SRC-TG-824: the 2023 DAP and ammonia extracts omit classificationCode (H6). This is cosmetic.

FND-TG-821 (research/phase1-findings/FND-TG-821-seed-system-farm-saved-cereals-imported-vegetables.md)
10. root_causes[1] (law 99-42): move it out of `root_causes` into the body as context, or label the cause as unproven, because the record says its effect is not documented.
11. root_causes[2]: drop the Deglet Nour clause (date-palm varieties, not seed) or move it to related FND-TG-740. Flag the rest as resting on tier C plus a qualitative tier B source.
12. indicators with `value: "<20"` and `">80"`: these are strings in a numeric field. If the engine expects numbers, use value 20 with qualifier "below" in the unit, or agree a convention.
13. Optional: the BNG article says some local varieties yield less. Add this for balance.

FND-TG-822 (research/phase1-findings/FND-TG-822-pesticide-misuse-not-volume.md)
14. Title, indicators and Problem: update to the latest FAOSTAT year. 2024 shows 4,047 t (E), 0.83 kg/ha, against world 2.49, Northern Africa 0.87 and Europe 1.65. Fungicides were 2,533 t. Change "a quarter of the world average" to "about a third". Delete "peak of 3,511 t in 2019, then eased". Note that 2024 is the highest value in the series, and that Tunisia's intensity is now close to the Northern Africa average. Update SRC-TG-831 with the 2024 rows.
15. Evidence ("All Tunisian values carry flags E, I or X, not A") and SRC-831 note ("No Tunisian value is flagged A"): correct both. 1997 is flag A; from 1998 on, values are E, I or X.
16. indicator "Greenhouse workers wearing gloves 8.3%": change the unit to "percent of farm workers surveyed (re-entry)". Optionally add that 57 of 73 operators never wear PPE when mixing or loading.
17. root_causes[0]: reword as a cause, not the observed practice. For example: "Product inefficacy (resistance) leads growers to raise doses and frequency, and labels and pre-harvest intervals are not followed" (SRC-832).
18. root_causes[1]: add the economic dimension (PPE cost, no subsidy, not available on the market, per SRC-833), or split it into a second cause typed economic.
19. trend: `unknown` should be revisited. FAOSTAT shows a rising long-run trend in use (909 t in 1990 to 4,047 t in 2024), with flagged estimates.

## 4. Readiness for status: in-review

- FND-TG-820: **Not ready.** All the numbers check out against their sources. Before review it needs: the needs-versus-cereal-use comparison corrected (fixes 1-2), cause 3 corrected (SRC-921 cited as support, legacy flag, black market treated as a cause; fix 4), and the "no stock" claim dated and qualified (fix 5).
- FND-TG-821: **Ready once fix 10 is made** (law 99-42 is not an established cause). Fixes 11-12 are minor. Every figure is confirmed verbatim.
- FND-TG-822: **Not ready.** The headline figures and the "peaked in 2019" trend are out of date against the current FAOSTAT release (fix 14), and the flag-A statement is wrong (fix 15). The rest is confirmed.
