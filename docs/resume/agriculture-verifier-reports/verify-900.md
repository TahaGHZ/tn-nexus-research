# Source verification: FND-TG-900, FND-TG-901, FND-TG-902

No files in the repo were edited. Every source URL was opened myself: the PDFs were downloaded with curl and converted with pdftotext (SRC-TG-901, 902, 903, 904, 705); the press HTML pages were downloaded with curl (SRC-TG-906 to 910); for SRC-TG-900 I called the live UN SDG API; for SRC-TG-905 I read the Crossref abstract. Working copies are in `C:\Users\Taha\AppData\Local\Temp\claude\84d5bad6dc087fc3\6e966d88-81b3-402c-88d3-7630ed4be8fc\scratchpad\verify-900\`.

## Summary

- **All SRC extracts are verbatim.** Every quoted extract in SRC-TG-900 to 910 and the cited passage of SRC-TG-705 matches its source word for word, including the Arabic text in SRC-TG-907. Values, units, years and geography match.
- **All tiers are correct.** Press is C, institutional reports are B, the peer-reviewed paper and the UN dataset are A.
- **One real error.** FND-TG-902, SRC-TG-902 and SRC-TG-908 all say a press figure conflicts with the FAO milk report. It does not. The FAO report itself gives 2.28% (Bizerte) and 1.81% (Mahdia) for collection centres (text p. 31, Tableau 12) and 2.10% / 0.84% for transport (p. 30, figure 20). Added together these give exactly the "Collecte" row of Tableau 13: 4.38% and 2.65%.
- **One overclaim.** The FND-TG-900 title calls the subsidy "the main structural driver". The record's own household evidence, and an independent peer-reviewed survey, cut against that.

## Verification table

| Record | Claim | Result | What the source actually says |
|---|---|---|---|
| 900 | 900,000 loaves/day, 102,000 t/yr, 100 MTND/yr, INC 2014 estimate (SRC-906) | Confirmed | "en 2014 ... 900 000 pains jetés quotidiennement pour un coût évalué à 300 000 dinars, soit l'équivalent de 102 mille tonnes et de 100 millions de dinars par an" |
| 900 | 113,000 t/yr; 42 kg per household per year (SRC-906, 907, 908) | Confirmed | 906: "42 kg pour un total de 113 mille tonnes par an" (attributed to "enquêtes récentes"); 907 (Arabic): 113,000 t, 2.7 million households. 42 x 2.7 M = 113,400 t, so the figures agree |
| 900 | 15.7% of bread bought (SRC-906, 907) | Confirmed | 907 says 15.7% of total bread purchases. The 906 French wording ("accaparent la part du lion ... 15,7% et 10,2%") is ambiguous on its own; 907 settles the meaning |
| 900 | 16% of bread bought; 18% of food spending; INC study published 2019 (SRC-903, footnote 11) | Confirmed | Verbatim in the World Bank Bulletin, Été 2022, p. 18, footnote 11 |
| 900 | 5% of food spending, 17 TND per household per month (SRC-906) | Confirmed | "17 dinars, soit 5% des dépenses alimentaires" (surveys of May-June 2016) |
| 900 | 572 MTND, INC via TAP, 2018 (SRC-907) | Confirmed | 5% of food spending = 572 million dinars, article of 20 Nov 2018 |
| 900 | Above 570 MTND, Minister of Trade (SRC-909) | Confirmed | "pertes excédant 570 millions de dinars" (13 Dec 2018) |
| 900 | 400 MTND bread-flour subsidy (SRC-906); 450 MTND bread subsidy in 2017 (SRC-907) | Confirmed | 906 gives no year: "400 millions ... à l'année la farine de pain". 907: 450 MTND "سنة 2017" (in 2017) |
| 900 | 73% say price does not push over-buying; 56% rate quality average or poor; 1-2% know the subsidy | Confirmed | 73%; 43% average + 13% poor = 56%; 2% know the subsidy on gros pain, 1% on the baguette |
| 900 | Over-buying 87.9%, over-cooking 87.3%, unplanned purchases 84% | Confirmed | Verbatim in SRC-906 |
| 900 | UNEP household food waste: 88 kg (2019, very low confidence), 172 kg and 2,121,810 t (2022, medium confidence) (SRC-900) | Confirmed | Live API: HHS 88.33755 / 171.72145 kg per capita, 2,121,810.3 t; Nature "E" (estimated); no AG_FLS_PCT (food loss index) value for Tunisia |
| 900 | Compensation since 1945, CGC since 1970, bread price unchanged since 2008, symbolic cut in Jan 2011 (SRC-903) | Confirmed | p. 17-18, verbatim |
| 900 | World record wheat consumption; bread fed to livestock; processors produce more to get more subsidy; "overconsumption ... leakages and waste" (SRC-903) | Confirmed | p. 18, plus the English executive summary |
| 900 | Bakeries buy flour at a negative price and get subsidised water, electricity and labour (SRC-903) | Confirmed | Encadré, p. 20 |
| 900 | Food subsidies 730 to 2,569 MD (2010-2020); cereals over three quarters in 2020 (SRC-903) | Confirmed | Verbatim |
| 900 | WB 2024 project paper names "wastage of 900,000 baguettes daily" (SRC-705) | Confirmed | Box 1 (iii), verbatim |
| 900 | Products sold below cost "incite au gaspillage" (SRC-901) | Confirmed | SWOT, p. 61-62. The extract in SRC-901 is cut off mid-sentence. The full sentence ends "ou les prix dérisoires au niveau consommateur", which supports root cause 1 directly |
| 900 | Cereal subsidy 887 MD (2011) and 1,286 MD (2016) (SRC-901, Tableau 11) | Confirmed | 887.397 and 1286.323 |
| 900 | Over 80% of soft wheat imported (SRC-901, 907) | Confirmed | Both say so. Note that SRC-705 gives 95% |
| 900 | Root cause 2 "subsidy paid on volume ..." cites SRC-901 | Could not verify for SRC-901 | The volume incentive is in SRC-903 only. I found no matching statement in SRC-901 |
| 900 | "68% of household waste is organic and only 5% is recycled" (SRC-907) | Partly | The 907 Arabic says 5% *of it* (the organic waste) is recycled; SRC-908 says the country recycles 5%. The wording is loose |
| 900 | "Bread is the most wasted food in every INC figure" | Mostly confirmed | True for waste rates. In the Ramadan figures (shares of respondents), cooked dishes (66.6%) rank above bread (46%) |
| 900 | Title: subsidy is "the main structural driver named by the evidence" | Overstated | WB and FAO name it as a driver, but 73% of INC respondents deny a price effect. The independent survey (below) found "no direct correlation between perceived price and waste" |
| 901 | Farm-level losses 4.6% (Bizerte) to 7.3% (Siliana); collection 0.38% / 0.24% (SRC-908) | Confirmed | Verbatim |
| 901 | Post-harvest losses 3.6% to 5.4% (SRC-909) | Confirmed | Verbatim |
| 901 | 832 / 578 TND per cereal farmer (SRC-908) | Confirmed | 832.193 DT and 577.803 DT |
| 901 | 60% of machines over 25 years old; 100 MD a year; 10% loss given only as an example (SRC-901) | Confirmed | p. 70-71. Correctly described as all farm machinery and as a hypothetical example |
| 901 | Collection is 40-50% of the harvest; farm storage untrained; open air / Australian silos / plastic sacks; OC does not pay millers for storage; privatisation looks like sub-contracting; lack of coordination in Bizerte and Siliana; "peu de données existent" (SRC-901) | Confirmed | All verbatim |
| 901 | Collectors also have weak incentives to invest in storage (root cause 3) | Partly | The source says this of millers only. For collectors it is our inference |
| 901 | First-ever loss estimate; plan to add loss measurement to MARHP surveys (SRC-904) | Confirmed | Annex results list and para 144 |
| 901 | Aeration hours -25%, 2041-2070, "vs 1970-1997" (SRC-905) | Confirmed with a caveat | The abstract gives the 25% cut against the "historical" period. 1970-1997 is named only for the insect results |
| 902 | 9.1% / 6.5% summary; 21.13 MTND; 201 million litres of water (SRC-902) | Confirmed | Résumé, p. xi |
| 902 | Tableau 13 stage rates 1.96/4.38/3.50 (Bizerte) and 0.73/2.65/3.50 (Mahdia); totals 9.84 / 6.88; litres lost 9.75 / 10.35; value 9.85 / 11.28 | Confirmed | Tableau 13 |
| 902 | 20.1 million litres; 729 / 1,220 TND per farmer (SRC-902) | Confirmed | Tableau 16. The 1,220 TND figure needs a caveat: see fixes |
| 902 | Cooling on 3.7% (Mahdia) and 16.3% (Bizerte) of farms; 400 farmers surveyed July-October 2017; dairies report 3% refused + 0.5% lost | Confirmed | p. 24, Tableau 5 source note, p. 36-37 |
| 902 | 10 L of water per L of milk, unreferenced | Confirmed | Tableau 14 gives only "Standard international"; 97.5 + 103.5 = 201 |
| 902 | Press 2.28% conflicts with the report's 4.38% (data_gaps, Evidence; SRC-902 and SRC-908 notes) | Wrong | Report p. 31-32 / Tableau 12: collection centres 2.28% (Bizerte) and 1.81% (Mahdia). p. 30: transporters 2.10% and 0.84%. 2.10 + 2.28 = 4.38 and 0.84 + 1.81 = 2.65. There is no discrepancy |
| 902 | Quality bonuses "paid at collection" (Leads; SRC-902 calls them "collection-centre quality bonuses") | Wrong attribution | p. 37: the Vitalait dairy (Mahdia) pays these bonuses. The quoted amounts (germ count 0.010 / 0.005 TND, loyalty 0.010 TND) are the ones paid "Pour les éleveurs" (to farmers); collection centres get a separate, lower scale |
| 902 | Root causes: cooling, refusals, seasonal glut | Partly | All three are sourced. "Refusals" restates the loss mechanism. Farmers' stated causes are not reflected: antibiotic residues (33 farmers) and high lactation (24) in Bizerte; lack of financing (59 farmers, the top cause) in Mahdia (Tableaux 6-7) |

## Independent source on the main figure (bread waste volume and share)

Bouledroua D., Debbabi H., ... Doggui D., Sfayhi D. (2025). "Understanding Bread Consumption and Waste Patterns in Algeria and Tunisia". *North African Journal of Food and Nutrition Research* 9(20):193-218, doi:10.51745/najfnr.9.19.193-218. Peer reviewed, so tier A. PDF: https://najfnr.com/home/article/download/730/405/5598

- **It repeats the main figure but does not confirm it independently.** It cites "INC (2025)" for about 113,000 t a year, about 16% of household bread *expenditure* and 5% of food spending. One co-author works at the INC, so this is the INC figure again, not new data. It does mean the 113,000 t / 16% / 5% figures are no longer tier-C-only.
- **Its own data cut against both the size and the subsidy link.** It ran an online convenience survey of 320 Tunisians (Sept-Dec 2023). It calls bread wastage "limited"; 5.8% of Tunisian respondents consistently discard stored bread. Asked what drives waste, 61.5% named misjudging the quantity, 14.1% government subsidies, 12.8% bread quality and 2.6% over-production. It found "no direct correlation between perceived price and waste".

## Fixes needed

### FND-TG-900 (`research/phase1-findings/FND-TG-900-household-waste-subsidised-bread.md`)

1. **Title.** Change "the universal cereal price subsidy is the main structural driver named by the evidence" to something like "the universal cereal price subsidy is named by the World Bank and FAO as a driver, though household surveys find little direct price effect".
2. **Confidence and the tier-C rule.**
   - Add the NAJFNR 2025 paper as a new SRC (tier A). Cite it for 113,000 t, about 16% and 5%, and in "Evidence that complicates the subsidy explanation" (no price-waste correlation; 14.1% of respondents name subsidies).
   - Keep `confidence: medium` only on that basis. The headline 16% then rests on tier B (SRC-903) plus tier A.
   - In "Why confidence is what it is", state which claims still rest only on tier C: 102,000 t, 42 kg per household, 570-572 MTND, 400 and 450 MTND.
   - If the new source is not added, the 113,000 t and 15.7% indicators rest on tier C only and the record should go to `confidence: low`.
3. **Root cause 2.** Remove SRC-TG-901 from `sources`, or cite a specific SRC-901 passage. Only SRC-TG-903 states the volume incentive.
4. **Root cause 3.** "Ramadan peaks" is when waste happens, not why. Move it to the Problem or Evidence section.
5. **Root cause 1.** Optionally extend the SRC-TG-901 extract to its full sentence ("... ou les prix dérisoires au niveau consommateur").
6. **Links to other sectors, Water.** Replace "none found". SRC-TG-903 says bakeries' water is also subsidised, so subsidised water goes into wasted bread, the same link as energy (not quantified).
7. **Waste management.** Change "only 5% is recycled" to "only 5% of it is recycled (SRC-TG-907)", or say the two sources word it differently.
8. **Indicator `year` fields.** Make them consistent. The 572 and 570 MTND indicators carry the 2018 publication year, while 113,000 t carries the 2016 survey year. Either use the survey year (2016 for INC figures) or name the convention.
9. **"Bread is the most wasted food in every INC figure".** Qualify it as "by waste rate". The Ramadan ranking (shares of respondents) puts cooked dishes first.
10. **Soft wheat imports.** Optionally note that SRC-TG-705 gives 95%, against "over 80%" here.

### FND-TG-901 (`research/phase1-findings/FND-TG-901-cereal-harvest-storage-losses.md`)

1. **Aeration indicator `unit`.** Change "% vs 1970-1997" to "% vs historical period (abstract; 1970-1997 is the stated baseline for the insect results)".
2. **Root cause 3.** Say that the weak storage incentive is stated for millers only; for collectors it is our inference.
3. **Optional.** In "Evidence", add that the two press articles may differ by stage scope: the same press coverage of the milk study turned out to report sub-stages of one table.

### FND-TG-902 (`research/phase1-findings/FND-TG-902-milk-chain-losses-cold-chain.md`)

1. **Third `data_gaps` entry ("Press reports ... 2.28% ... against 4.38%").** Delete it.
2. **Evidence paragraph.** Replace "a Bizerte collection-centre rate of 2.28% (SRC-TG-908), which differs from the report's table" with: the collection stage of 4.38% / 2.65% = transport 2.10% / 0.84% (report p. 30) + collection centres 2.28% / 1.81% (Tableau 12); press SRC-TG-908 reports the collection-centre sub-stage.
3. **"Loss rate at collection" indicator.** Rename it "Loss rate at collection (transport + collection centres)". Optionally add sub-stage indicators.
4. **Root causes.**
   - Reframe root cause 2. The refusal is the loss itself. The causes behind it are milking hygiene, antibiotic residues and fraud (behavioural or technical), plus acceptance standards applied unevenly across seasons (institutional).
   - Add an economic cause: lack of financing, the top cause named by Mahdia farmers (59 farmers, Tableau 7, SRC-TG-902).
   - Optionally note antibiotic residues (33 farmers) and high lactation (24) as the top causes named in Bizerte (Tableau 6).
5. **Caveat on the Mahdia totals.** In Tableau 13 the Mahdia processing base is 180 million litres, more than the governorate's 130 million litres of production. Processing loss (6.30 million litres; 7.56 of the 11.28 MTND) is about 61% of Mahdia's lost volume and includes milk from elsewhere, lost at the dairy rather than on farms. Add this caveat to the 20.1 million litre figure and to the 1,220 TND "per farmer" shortfall.
6. **Leads.** Change "Quality bonuses already paid at collection" to "quality-based payment by the Vitalait dairy (Mahdia) to farmers and to collection centres".

### SRC records (needed so the FND fixes hold)

- **`research/sources/SRC-TG-902-fao-2021-pertes-chaine-lait-tunisie.md`**
  - Notes, third bullet: replace the "press ... 2.28%" discrepancy with the decomposition: transport 2.10% / 0.84% + collection centres 2.28% / 1.81% = 4.38% / 2.65%.
  - Extract heading "p. 37 (collection-centre quality bonuses)": the bonuses quoted are Vitalait's bonuses to farmers ("Pour les éleveurs").
  - Optionally add extracts for Tableau 12 (2.28% / 1.81%), the transport rates (2.10% / 0.84%) and Tableaux 6-7.
- **`research/sources/SRC-TG-908-economiste-maghrebin-2018-pertes-cereales-lait.md`.** Notes, third bullet: same correction. The 2.28% matches the report's collection-centre sub-stage.
- **`research/sources/SRC-TG-901-fao-marhp-2017-filiere-cerealiere-pertes.md`.** Optional: complete the truncated SWOT extract.

## Readiness for `status: in-review`

- **FND-TG-900: not ready.**
  - Fix the overclaiming title.
  - Resolve confidence against the tier-C rule: add the NAJFNR source or drop to `confidence: low`.
  - Correct the root cause 2 citation and the Water link.
  - All figures are otherwise accurately transcribed.
- **FND-TG-901: ready.** Only the two minor wording fixes above. `confidence: low` correctly reflects tier-C-only loss rates.
- **FND-TG-902: not ready yet, but close.**
  - Remove the false press/report discrepancy in the record and in SRC-TG-902 / SRC-TG-908.
  - Reframe the refusal root cause and add the financing cause.
  - Add the Mahdia processing-base caveat.
  - All figures are otherwise correct.
