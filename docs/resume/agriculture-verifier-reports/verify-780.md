# Source verification: FND-TG-780, FND-TG-781, FND-TG-782 (and SRC-TG-780 to SRC-TG-794)

No record was edited. Downloads and text extracts are in `C:\Users\Taha\AppData\Local\Temp\claude\84d5bad6dc087fc3\6e966d88-81b3-402c-88d3-7630ed4be8fc\scratchpad\verify-780\` (one subfolder per source).

## How each source was checked
- **SRC-780 (ESEA 2004-05), SRC-781 (FAO/CIHEAM), SRC-782 (FTDES), SRC-787 (Vico), SRC-794 (law 2016-71):** downloaded with curl, converted with pdftotext, and every extract grepped. All verbatim.
- **SRC-786 (Gana & Taleb):** HAL, shs.hal.science and Cairn are blocked (Anubis / 403). I got the full PDF from a Wayback snapshot (`web.archive.org/web/2id_/https://halshs.archives-ouvertes.fr/halshs-02432762/document`). All extracts are verbatim.
- **SRC-785 (Elloumi 2013):** OpenEdition blocks curl. Checked through WebFetch, which returns fragments only; all figures match.
- **SRC-788 to SRC-793 (press):** curl plus grep on the exact strings. All extracts verbatim.
- **SRC-783 (law 64-28) and SRC-784 (law 95-21):** no clean copy was reachable. legislation.tn returned 503 or no connection, iort.gov.tn returned an empty shell, and searches found no clean text. The extracts match the FAOLEX OCR, with character errors corrected in a plausible way. Result: "matches OCR; clean copy not reachable", not "verbatim confirmed".
- **Law 2016-69, which amends 64-28:** a clean text PDF exists on FAOLEX, contrary to what the records say: https://faolex.fao.org/docs/pdf/tun226341.pdf (JORT n° 79, 27 September 2016, pp. 3027-3030). I read it in full. It changes FND-781 materially (see below).

## Verification table

| Record | Claim | Result | What the source actually says |
|---|---|---|---|
| 780 | Farms 326k / 471k / 516k (1961-62, 1994-95, 2004-05) | Confirmed | ESEA table "Evolution du nombre d'exploitations": 326 / 471 / 516 thousand. |
| 780 | Average size 16 / 11.2 / 10.2 ha; UAA 5,206 / 5,295 / 5,271 thousand ha; 1.2 / 0.6 / 0.5 ha per inhabitant | Confirmed | Same table. |
| 780 | Under 5 ha: 133k (41%), 251k (53%), 281k (54%) | Confirmed | Size table. |
| 780 | UAA share under 5 ha: 6 / 9 / 11%; 100 ha and more: 29 / 25 / 22% | Confirmed | UAA-by-size table: 318 / 471 / 556 thousand ha and 1,499 / 1,301 / 1,127 thousand ha. |
| 780 | Under 10 ha = 75% of farms and 25% of area; over 50 ha = 3% and 34% | Confirmed | "Principaux résultats" prose. |
| 780 | Heads aged 60+: 21 / 37 / 43%; their area 24 / 40 / 46%; under 40: 33 / 21 / 13% | Confirmed | Age table and prose. The prose says "plus de 60 ans", the table "60 ans et plus". |
| 780 | 84% of heads have at most primary schooling | Confirmed | Ch. 2. |
| 780 | Parcels per farm 2 (1994) to 1.8 (2004); 55% single parcel; 69% of farms under 5 ha single parcel | Confirmed | Parcel section. |
| 780 | Direct operation 81.5 / 91.0 / 94.8% of parcels; renting 7.5 / 2.5 / 2.2%; inheritance the main source of ownership | Confirmed | Tenure table and prose. |
| 780 | Ministry attributes the fall in size mainly to inheritance; collective-land settlement and state-land restructuring drive farm numbers | Confirmed | Verbatim in Ch. 1. |
| 780 | Legal persons 493 units, 364,500 ha (6.8%) vs 482,000 ha (9%) in 1994 | Confirmed | Verbatim. |
| 780 | 26% invested 2000-04; 22.8% of heads under 5 ha vs 61% of 100 ha+ | Confirmed | Prose. The table's percentage column is row-shifted and gives 60.6% for 100 ha+. |
| 780 | Credit: 87.5 / 6.3 / 6.2%; investment-credit application 5.2% vs 18.4%; refusals 41.6% and 67.6%; large farms 93.8% and 80.6% satisfied; reasons 28% / 27% | Confirmed (values); year could not be verified | Values verbatim. The credit chapter states no reference period. The survey's reference campaign is 2003-04, but FAO/CIHEAM (SRC-781, p. 36) dates the same 6.3% to "1999-2004". The 2003-2004 year on the credit indicators is an inference. |
| 780 | Irrigated share of cultivated area 16% (under 5 ha) vs 6.4% (100 ha+) | Confirmed | Ch. 8. |
| 780 | FTDES gives about 470,000 ha under 5 ha "in 2005", which is the 1994-95 value | Confirmed | FTDES p. 20 says 470,000 ha; ESEA gives 471 (1994-95) and 556 (2004-05). |
| 780 | FTDES: about 83,000 ha irrigated on farms under 5 ha, about 1/4 of national irrigated area | Confirmed | FTDES p. 20. |
| 780 | FAO/CIHEAM: inheritance and attachment to land are "le facteur déterminant"; land policy (habous, half of 3 Mha of collective land, state land, consolidation); habous fell from 1 Mha to about 80,000 ha | Confirmed | FAO printed pp. 32-33 (PDF footers read 33 and 34). |
| 780 | FAO/CIHEAM "concentration foncière de plus en plus visible"; investor rush, Sidi Bouzid, no national data | Confirmed | Summary and p. 33. |
| 780 | First general agricultural census "started in 2026" / "began in 2026" | Wrong (overstated) | WMC 14 October 2026: Tunisia "projette de réaliser" the census in 2026-27. Reference season 2025-26, fieldwork the following season, launch date to be announced on 30 October 2026. It is planned, not shown as started. |
| 780 | Independent check of the main figures | Confirmed (not independent data) | Elloumi 2008, Réseau FAR conference paper (https://www.reseau-far.com/fileadmin/user_upload/compte-rendu/tunis/14%20Elloumi.pdf), citing the same ministry surveys: 516,000 farms (2004); 54% under 5 ha vs 41% in 1961; 16 ha to 10 ha; 60+ heads 21 / 37 / 43% holding 24 / 40 / 46%; 84% primary schooling. It differs on the 1961 count (236,471, against 326,000 in ESEA) and 1994 (473,000, against 471,000). It re-cites the same survey, so it confirms the transcription only. No independent measurement exists before the census. |
| 781 | Law 64-28 art. 1: collective land insaisissable, inaliénable, imprescriptible | Matches OCR; still in force as amended | The 2016 law did not repeal art. 1; its art. 4 only replaced the words "retenue" with "saisie" and "groupement" with "collectivité". Art. 1 is subject to the derogations in art. 5 and following. |
| 781 | Art. 5: no sale or mgharsa without the minister's authorisation; mortgage only to official agricultural lenders with joint ministerial approval | Matches OCR (1964 text), but repealed in 2016 | Law 2016-69 art. 1 repealed and replaced arts 2, 5, 6, 7, 8, 10, 15, 16 and the first paragraph of art. 17. New art. 5: alienation, mogharsa, contribution to company capital and lease need the management council's prior agreement and the regional supervisory council's approval. Collective land "peuvent être hypothéquées au profit des banques et des établissements financiers en vue d'investissement, de mise en valeur ou d'équipement". New art. 16: private attribution to members. The law's art. 6: management councils must finish attribution within five years of publication (to about September 2021), after which files go to the Land Court for registration. The record's root cause #1 describes the 1964 to 2016 regime as if it applied today. |
| 781 | Art. 6: management council; lands meant to become cooperatives | Matches OCR (1964 text); replaced 2016 | New art. 6 has elected management councils that "procèdent directement à l'attribution à titre privé". |
| 781 | 50% of land potential registered; nearly 1/3 of farms without title; about 60% of titles frozen; three ministries | Confirmed as quoted (second-hand) | FAO p. 33, citing "Banque Mondiale, 2006" and Gharbi 1998. The bibliography identifies the World Bank document as "Tunisie : Examen de la politique agricole" (2006). One search did not find it online. |
| 781 | Half of 3 Mha of collective land in centre and south settled | Confirmed (FAO statement, undated) | FAO p. 32. |
| 781 | "Bonne majorité" of farmers without title (FAO); "la plupart" (FTDES); banks require collateral | Confirmed | FAO p. 36 also ties fear of debt to low and volatile income and climate risk. FTDES p. 25-26. |
| 781 | July 2026 draft decree-law: Land Court special powers; individual, transferable, bankable titles in the South | Confirmed (tier C) | La Presse / AllAfrica, 14 July 2026: aim is "trancher définitivement les litiges de propriété collective et ... convertir ces réserves foncières en titres fonciers individuels cessibles et bancables". The article does not mention law 2016-69 or its deadline. The same article also reports a census of 52,000 state properties (11,000 recorded), which is unrelated to the collective-land figure. |
| 781 | Law 2016-71 art. 5 frees only non-agricultural real estate | Confirmed | JORT n° 82, 7 October 2016, p. 3083 (now verified on the page). A grep for "agricol / foncier / terres" finds no other land clause. |
| 781 | Data gap: "no FAOLEX PDF found" for law 2016-69 | Wrong | Clean text PDF at faolex.fao.org/docs/pdf/tun226341.pdf. |
| 782 | 1964 nationalisation (law 64-5, 12 May 1964, JORT p. 575) | Confirmed | FAO p. 29 and footnote 2. |
| 782 | About 800,000 ha, about 10% of farmland; 600,000 ha colonial + 160,000 ha habous; the 1964 law itself about 300,000 ha | Confirmed | Elloumi ¶3, 12, 41, 44 (¶44 refers to the end of "tunisification" in the 1960s). Gana & Taleb: 800,000 ha "en majorité dans les régions les plus fertiles du nord". |
| 782 | Cooperatives 1964-69 grouping farmers under 40 ha; large farmers' opposition; stopped September 1969; cooperatives kept on state land | Confirmed | Gana & Taleb (Wayback copy); FAO p. 29 ("septembre 1969"). |
| 782 | 143,000 ha "management transferred" to the private sector 1981-95 | Confirmed with nuance | Elloumi ¶62: "cédés au secteur privé sous différentes formes", mainly SMVDA leases and cooperative usufruct (1984 law). Sales were still legal before 1995. |
| 782 | End-2001: SMVDA 145,000 ha (226 companies), technicians 50,000 ha (600 lots), young farmers 15,000 ha (1,850 lots), 210,000 ha to restructure | Confirmed | Elloumi ¶65. |
| 782 | More than 12,000 ha to relatives of the deposed president; OTD 150,000 ha; more than 100 farms attacked, damage over 30 MTND, 30,000 ha recovered | Confirmed | Elloumi ¶66, footnote 18, ¶71, ¶73 (the 30,000 ha was recovered for breach of the cahier des charges, per the minister in *Le Maghreb* 2012). |
| 782 | More than a hundred farms occupied after 14 January 2011; several tens of thousands of ha | Confirmed | Gana & Taleb. |
| 782 | "Lessees did not meet hiring and investment commitments" (root cause, stated as fact) | Wrong framing | Gana & Taleb report this as the view of local young people (occupiers), relayed by state-domain officials ("pour qui les engagements ... n'ont pas été tenus"). It is a reported grievance, not an established fact. |
| 782 | Law 2016-08 of 22 February 2016; 33 SMVDA / 22,377 ha (2012); 178 SMVDA / 73,446 ha (2016); 20,330 ha occupied (2016); 43 SMVDA / 32,154 ha re-awarded; 42 lots / 406.55 ha after the 9 February 2017 circular; Jemna association March 2012 | Confirmed | Gana & Taleb, verbatim. The HAL author spelling is "Maouen Taleb"; the SRC title field says "Marouen". |
| 782 | Vico: Jemna nationalised 1964; STIL then SMVDA; association set up right after 14 January; 2016 stop order, frozen accounts, 49/51 offer refused; September 2017 agreement; land stays state property; relies on journalism | Confirmed | Vico 2021, verbatim. |
| 782 | Law 95-21 arts 1, 2, 3, 10, 11, 15, 17, 18 | Matches OCR; clean copy not reachable | Consistent with OCR. In art. 17 the OCR reads "dul 9 mai 1970"; art. 33 confirms 19 May 1970. Art. 33 also **repeals** law 70-25 and the 1948 decree, which the FND does not mention. Law 96-48 (replaced art. 16 and art. 27, per FAOLEX search snippet) does not touch the quoted articles. Law 98-11 not checked. |
| 782 | 500,000 ha (310k structured / 190k unstructured) and full breakdown (2024) | Confirmed (tier C, no source stated) | La Presse, 16 October 2024, unsigned, verbatim. |
| 782 | 500,000 ha; 38% under lease; 24 farms of more than 11,000 ha to sociétés communautaires (2026) | Confirmed (tier C) | La Presse, 7 November 2026, minister Wajdi Hedhili at a CNRD-ARP committee meeting. |
| 782 | More than 50,000 unregularised operators (2022) | Confirmed (tier C) | L'Economiste Maghrébin, 6 July 2022, minister Rekik. |
| 782 | At most 15% of decree-1870/2015 files settled in ten years (sponsors' claim); proposal n° 32 of 2025 | Confirmed (tier C) | AllAfrica / La Presse, 27 February 2026. Law 95-21 is mentioned as a question of compatibility raised by deputies. |
| 782 | "much of it among the most fertile in the north" applied to today's 500,000 ha | Wrong attribution | SRC-786 says this of the 800,000 ha recovered in 1964, not of today's estate. |

## Tier checks
- SRC-780 (A, official statistics), SRC-785, SRC-786 (A, peer-reviewed) and SRC-781, SRC-782 (B) are correct.
- SRC-787 is A as peer-reviewed, but by its own account it rests mainly on journalism. The FND already says so.
- SRC-788 to SRC-793 are C and correct.
- SRC-783, SRC-784 and SRC-794 are legislation filed as `official-statistics`, tier A. Defensible, but `docs/taxonomy.md` and `templates/source.md` should gain a `legislation` type.

## Concrete fixes needed

**FND-TG-780**
1. `data_gaps[0]`: delete the orphan fragment "(reference campaign 2003-04)." after "...before the 2026 launch." Also replace "The first general agricultural census started in 2026" with "is planned for 2026-2027 (reference season 2025-26; launch date not yet announced in the source)". Make the same correction in the Problem paragraph ("the first agricultural census only began in 2026"), and in "before the 2026 launch".
2. `root_causes[2]` (thin rental market): the record itself says this is "our reading, not a conclusion stated in the source". Either find a source that names the rental market as a cause, or move it to the body as a hypothesis. As written, it restates a tenure statistic as a cause.
3. Credit indicators (three rows, `year: 2003-2004`): add a note that the credit chapter states no period, and that FAO/CIHEAM dates the same 6.3% to 1999-2004. Alternatively use `year: "2004-05 survey (period not stated)"`.
4. Optional: add Elloumi 2008 (FAR) as a corroborating secondary source, noting its 1961 count (236,471) differs from ESEA's 326,000.

**FND-TG-781**
1. Title, Problem, `root_causes[0]` and the "Legal status" bullet: the inalienability and mortgage regime described is the 1964 text. Law 2016-69 replaced art. 5:
   - collective land can now be sold, leased, put into company capital or mortgaged to banks and financial institutions, with management-council and regional-council approval;
   - private attribution to members became the rule (new art. 16), with a five-year deadline, about September 2021, after which files go to the Land Court.
   Recast root cause #1 as a legacy cause (1964-2016) and add the current constraint: slow or incomplete attribution and registration under the 2016 procedure. That this is why a 2026 decree-law is being drafted is an inference; SRC-792 does not mention the 2016 law. Say "as amended in 2016; later amendments not checked".
2. Create a new SRC record for law 2016-69 (FAOLEX tun226341.pdf, JORT n° 79, 27 September 2016, pp. 3027-3030) with the new art. 5, 6 and 16 extracts and law art. 6, and cite it.
3. `data_gaps[2]` ("could not be opened ... no FAOLEX PDF found"): wrong; remove it once the source is added. In SRC-TG-783 Notes, replace "whose text we could not open" accordingly and add the original JORT reference (6 June 1964, pp. 664-666, per FAOLEX).
4. Indicator "Collective land ... settled": `geography: centre and south` is not a taxonomy value; use `[centre-west, south-east, south-west]` or `national`. `value: "half of 3 million"` should be numeric: 1,500,000 ha settled of about 3,000,000.
5. Confidence `low` is right. The SRC-783 note on OCR should state "matches OCR; no clean copy found (legislation.tn unreachable)".

**FND-TG-782**
1. `root_causes[4]` ("Lessees did not meet hiring and investment commitments", behavioural): reword as a grievance reported by occupiers via state-domain officials (SRC-786), not a fact. Body item 4 likewise.
2. Problem: "much of it among the most fertile in the north (SRC-TG-786)": SRC-786 says this of the 800,000 ha recovered in 1964. Reword, for example "the estate built from 1964 lay mostly in the fertile north".
3. Confidence: the title and first paragraph lead with figures resting only on tier C press (500,000 ha, 38%, 50,000 unregularised, 15%). Under CLAUDE.md, a claim resting only on tier C is confidence low. Either set `confidence: low`, or retitle around the well-sourced legacy history and present the current figures as low-confidence, with the tier stated in the title or problem text. The body already flags the tier.
4. Disagreements paragraph: add that law 95-21 art. 33 repealed law 70-25 (and the 1948 decree), while art. 17 uses them as the basis for regularisation sales. The lead "Law 70-25 ... not opened" can stay.
5. Indicator "State land management transferred to the private sector": Elloumi says "cédés ... sous différentes formes" (mainly SMVDA leases and cooperative usufruct; sales were still possible before 1995). Rename to "State land transferred to private operators (mainly leases)".
6. SRC-TG-786: update `url` or Notes to record that HAL is bot-blocked and give the Wayback copy used. Fix the author spelling (HAL: "Maouen Taleb").
7. SRC-TG-784 Notes: record that the text matches the OCR but no clean copy was found, and that law 98-11 is unchecked.

## Readiness for `status: in-review`
- **FND-TG-780: not yet.** Close after fixes 1-3, which are small: the garbled and overstated census statement, the unsourced rental-market root cause, and the credit-period ambiguity. All figures are otherwise confirmed against the tier A survey.
- **FND-TG-781: not ready.** Its central legal root cause describes a regime replaced in 2016, and the amending law (which the record says could not be found) is openly available. It needs a new SRC record and a rewrite of the title, problem and root cause #1.
- **FND-TG-782: not yet.** The figures check out, including all Gana & Taleb figures via Wayback, but fixes 1-3 are needed: the root-cause framing, the misattributed "fertile north" claim, and confidence against tier-C-only headline figures. Fixes 4-7 are minor.
