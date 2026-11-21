# Resume: energy lane, phase 1 (paused 2026-11-21)

Lane: energy, owner Taha (`TahaGHZ`, initials `TG`), record numbers 100-399. All work was
paused on Taha's instruction. Every running agent was stopped mid-task, and every file was
committed as it stood on disk. Nothing was deleted or tidied.

## State by topic

FND and SRC records are numbered independently inside each block. In other words,
FND-TG-130 and SRC-TG-130 can both exist.

### 100-129: gas dependence of the power mix. Verified.

FND-TG-100 (past), FND-TG-101 (current) and FND-TG-102 (predicted) are `in-review`. Their
sources are SRC-TG-100 to 111.

- The source-verifier passed all three after two rounds.
- Free numbers in this block: FND 103-129, SRC 112-129.

### 130-159: energy imports and security of supply. Written, verification interrupted.

FND-TG-130 (past), FND-TG-131 (current) and FND-TG-132 (predicted) are `draft`. Their
sources are SRC-TG-130 to 141. They also use extract blocks appended to SRC-TG-100, 103
and 221.

- **Verifier:** stopped early, at SRC-TG-130. No result yet, so rerun source-verifier from
  scratch.
- **Points the verifier was asked to check:**
  - FND-TG-130 concludes that Article 13 of the 2014 Constitution was *not* the main cause
    of the production collapse.
  - Its main-cause evidence is tier C: a minister's statement reported by the press.
  - FND-TG-132 overlaps FND-TG-102, since both use the projection of a 95% energy deficit by
    2035. Decide whether FND-TG-132 stands as a distinct finding; its distinct content is
    the empty exploration pipeline and the expired Zarat permit.
  - The Sonatrach-STEG contract renewal to 2027 rests on tier C only.
- **Known data gaps:** Sonatrach contract and price terms; the Transmed agreement's term;
  where crude oil and product imports come from.

### 160-189: energy subsidies and STEG finances. Verifier flags partly applied.

FND-TG-160 (past), FND-TG-161 (current) and FND-TG-162 (predicted) are `draft`. Their
sources are SRC-TG-160 to 173, plus an appended block in SRC-TG-105.

The fixer was stopped mid-way. It had just created SRC-TG-172 (World Bank policy note
82712-TN) and SRC-TG-173 (Webdo, 17 Oct 2023, PLF 2024). Neither may yet be cited in the
findings. Check each flag below against the files before re-verifying.

**FND-TG-160 flags:**
1. "Who decides": the Ministry of Industry decree benchmark (IMF CR 16/138, p.54) belongs
   to the 2013-15 SBA and to the January 2014 formula, not the 2016 one. Also fix the
   matching data gap about a JORT text.
2. Add the IMF CR 16/138 Table 4a/4b figure: 2013 gross energy subsidies of 4,434 MDT,
   which is 5.9% of GDP.
   - State that the 4.7% figure is a November 2013 forecast whose composition is ambiguous.
   - World Bank 82712-TN gives 3.3% direct plus 1.4% to producers.
3. Root cause 4 restates a symptom: reframe it or drop it.
4. In SRC-TG-162, the "just over 6%" extract is on PDF p.16, not p.15.

**FND-TG-161 flags:**
1. The same decree misattribution as FND-TG-160, flag 1.
2. Label the 974.1 MDT state guarantees to STEG as tier C.
3. Add a caveat: the 2024 "paid" amounts (7,086 / 4,019 / 3,067) equal the PLF 2024
   allocations, so they may be booked appropriations rather than cash actually paid.
4. SRC-TG-171: change the type to `institutional-report`. Remove it from `sources` if it
   is not cited.
5. Move "(2.5% of GDP)" out of the `unit` field.

**FND-TG-162 flags:**
1. Wrong title. With the reform programme, losses are 2.3-3.1 bn TND a year; without it,
   3.4-3.7 bn.
2. Add the extract for 11,846 vs 9,772 MDT to SRC-TG-170, or cite SRC-TG-167 for the
   11,846 alone.
3. Root cause 1 is a model assumption: restate it as the government's choice not to raise
   tariffs (PAD paras 3 and 11). Root cause 3 is a symptom: reframe it or drop it.

### 190-219: renewables deployment. Written, verification interrupted.

FND-TG-190 (past, wind stuck at 245 MW), FND-TG-191 (current) and FND-TG-192 (predicted)
are `draft`. Their sources are SRC-TG-190 to 199. They also use appended blocks in
SRC-TG-105, 106 and 226.

- **Verifier:** stopped early, while checking Solar Plan figures 9-10 (PDF p.15). Rerun it.
- **Weak spots:**
  - The causes of the fall in wind output are tier C only.
  - The 2030 target is stated five different ways across documents.
  - Law 2019-47 and Decree 2016-1123 were not opened (ESMAP returned 403).
  - SRC-TG-191 (a law) uses `type: official-statistics`, because the template has no type
    for laws.

### 220-249: grid peaks, outages, losses and ELMED. Verifier flags applied, not yet re-verified.

FND-TG-220 (current), FND-TG-221 (current) and FND-TG-222 (predicted) are `draft`. Their
sources are SRC-TG-220 to 234, plus appended blocks in SRC-TG-100 and 105.

Every flag from the first verification has been applied:
- SAIDI indicator added;
- titles and root causes reworded;
- the World Bank loss definition added;
- the ELMED "disagreement" reframed as two different metrics;
- the Med-TSO Summer Outlook 2026 (SRC-TG-234) and the MP's 1,500 MW figure (SRC-TG-233)
  added;
- packed indicators split.

Next step: re-verify only the changed claims. Known issues:
- FND-TG-222 uses the geography value "Tunisia and Italy", which is not in the taxonomy.
- The 2030 loss-of-load figures in the Med-TSO mid-term study contradict each other, and
  this is unresolved.
- The 2023 and 2026 load shedding is press-reported only.

### 250-269: issue-led, from load shedding to air conditioning (buildings-cooling). Partially researched.

No FND records were written. Sources written:
- SRC-TG-250 and 251: LBNL air-conditioner market and cost-benefit studies, 2023, tier B.
- SRC-TG-252 and 253: INS 2024 census flash notes on households and dwellings, tier A.

The agent was stopped while moving on to the regulatory and press sources.

Still to open:
- the thermal regulation texts for buildings (2008-2009 arrêtés);
- the energy labelling decree for air conditioners;
- ANME studies;
- ONEM or STEG seasonal load data.

Planned findings: a current finding (air conditioning driving the summer peak) and a
predicted one (cooling demand under heatwaves).

### 270-289: issue-led, electricity used to supply water. Partially researched.

No FND records were written. Sources written:
- SRC-TG-270 to 273: SONEDE key figures and the Djerba, Zarat and Sfax desalination plants.
- SRC-TG-274 and 275: JICA preparatory survey for the Sfax plant, 2015.
- SRC-TG-276: Eau 2050 strategy synthesis.
- SRC-TG-277: KfW ex-post evaluation, 2023.
- SRC-TG-278: RVO, 2025.
- SRC-TG-279 to 281: tier C press.

Still to do: write the FND records. Planned are a current finding (SONEDE, ONAS and
irrigation electricity use and cost) and a predicted one (desalination expansion to 2050).

Before writing, check the water lane's records (TG-400 to 699 on `origin/main`) for
desalination and pumping, so as not to duplicate them. Reuse their SRC records by URL. Keep
the findings energy-framed, and do not use the `nexus` theme.

### 290-309: issue-led, heavy industry energy use. Partially researched.

No FND records were written. Sources written:
- SRC-TG-290: ANME/GIZ national energy-efficiency strategy, 2014.
- SRC-TG-291: Decree 2010-144, sanctions under the energy management law.
- SRC-TG-292 to 294: World Bank CBAM exposure note, ACER CHEST index, Regulation (EU)
  2023/956.

Still to open:
- the petcoke authorisation for cement plants (around 2013-14);
- GCT energy data;
- statistics on how many energy audits were carried out;
- ONEM industrial consumption.

Planned findings: a past or current finding on weak enforcement of the audit regime, and a
predicted one on CBAM exposure of cement and fertiliser exports.

### 310-329: issue-led, fuel shortages, the STIR refinery and smuggling. Partially researched.

No FND records were written. Sources written:
- SRC-TG-310: World Bank WPS 6731, informal trade at land borders.
- SRC-TG-311: World Bank Tunisia Economic Monitor, spring 2023, on energy subsidies.

The agent was about to write SRC-TG-312 to 315; their content is unknown.

Still to open:
- STIR refinery capacity and utilisation;
- ONEM data on petroleum product imports;
- the transport share of final consumption;
- car fleet statistics.

Do not repeat the fuel subsidy and price freeze material (FND-TG-161) or the import deficit
material (FND-TG-131).

### 330-399: unused, kept in reserve.

## Leads not yet followed

These came out of the investigators' reports:
- Sonatrach gas contract and pricing.
- STEG's least-cost 10-year plan and the abandoned Skhira combined-cycle plant (abandoned
  2018 per a tier C source).
- The LNG terminal and the Zarat field.
- Transmed royalty decline as Algeria builds routes that bypass Tunisia.
- Cooling water for gas plants.
- Output lost by gas plants in hot weather.
- Water pumping exposed to load shedding: high- and medium-voltage pumping and sanitation is
  12% of consumption, agriculture 9%.
- Circular arrears between the state, STEG, STIR and public administrations.
- LPG subsidies and LPG smuggling.
- Land for solar against farmland (Decree-law 2022-68).
- Solar pumping for irrigation.
- The bill creating an electricity regulator.
- Green hydrogen plans.
- The NDC 3.0 target of at least 50% renewables by 2035: unverified, because the UNFCCC PDF
  returned HTML.

## Method notes

- **Fetching PDFs:** download with curl and extract with PyMuPDF. WebFetch sometimes
  wrongly calls PDFs scanned. IMF blocks curl, so use WebFetch for IMF documents. When a
  text layer is scrambled (Ministry of Finance PDFs), render the page and read the image.
- **What verifiers catch:** numbers nearly always match their sources. Records fail on
  root causes that restate symptoms, tier C claims in titles, mislabelled indicators, and
  several values packed into one indicator field (a parser risk). Brief investigators on
  these points up front.
- **Indicator format:** one plain number in `value`, a 4-digit `year`, no commentary in
  `unit`.
- **Shared source records:** SRC-TG-100, 103, 105, 106, 221 and 226 carry extract blocks
  added by several agents. Edit them only by appending or by targeted replacement.
- **Committing:** agents edit tracked files while you commit, which blocks `git rebase`.
  Add and commit immediately before the rebase, in a retry loop.
- **Template friction:**
  - The source template has no type for laws.
  - There is no frontmatter field for disagreeing values, so they go in the body and as
    separate indicators.
  - Geography values cannot express an international link such as ELMED.
- **Method change from Taha:** start from concrete issues and work outward, and use the
  taxonomy only as a coverage check afterwards.
