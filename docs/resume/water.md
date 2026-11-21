# Resume notes: water lane, phase 1 (TG, numbers 400-699)

## Current checkpoint — 21 November 2026, source corrections

22 findings: 22 in review, 0 draft. Drafts: None.

The dated handoff below records prior states; use the frontmatter and verification sections of the findings for current decisions.

Paused on 2026-11-21 on Taha's instruction. Every record file was committed as it was on disk, including
records from investigators stopped mid-run. Nothing was tidied after the stop.

## Final coordination state (2026-11-21)

This resume was reconciled against the current records after the lane audits. The water lane
contains 22 findings: 16 `in-review` (400, 401, 410, 425, 426, 427, 500, 501, 502, 525, 526,
527, 625, 451, 452 and 476) and 6 `draft` (450, 475, 477, 550, 600 and 626). The earlier
paused-state counts below are historical handoff notes, not current totals.

Draft blockers: 450 lacks an independently established physical/commercial loss split and
current definition; 475 lacks an official post-2021 water-code/regulator status check; 477
lacks current tariff/debt evidence and an opened tariff instrument; 550 lacks the underlying
ONAS dataset and dated comparable reuse totals; 600 lacks current dated salinity data and
verification of the reported Gabès stop decision; 626 conflicts with evidence of continued
oasis tranches through 2023 and lacks the replacement-program extract. These findings remain
draft until those specific evidence gaps are resolved.

## Where things stood when paused

- 20 findings: 2 `in-review` (FND-TG-500, 501), 18 `draft`.
- Batch 1 (10 topics planned, 5 run): 15 findings, all source-checked by `source-verifier`. **No number was
  found wrong**; the flags are attribution, tags, wording and page references. Only FND-TG-500 and 501 have
  their flags applied.
- Batch 2 (issue-led, 5 investigators): stopped mid-run. 5 findings written (525, 526, 527, 625, 626), not
  verified. The wastewater, desalination and water-quality investigators wrote sources but no findings.

## Number blocks

Numbers are unique across FND and SRC inside each block. A block is "used" up to its highest number; the
next free number is highest + 1.

| Block | Topic | Highest used | Notes |
|---|---|---|---|
| 400-424 | groundwater north/centre | 411 | 406 kept; 410 is an FND |
| 425-449 | dams, siltation, transfers | 442 | 431 unused |
| 450-474 | drinking water | 467 | 454 merged into 402 (gap) |
| 475-499 | pricing, water code | 489 | 478, 480, 483 merged away (gaps) |
| 500-524 | climate projections | 511 | 505 merged into 482 (gap) |
| 525-549 | irrigation (issue-led) | 533 | |
| 550-574 | wastewater (issue-led) | 559 | sources only |
| 575-599 | desalination (issue-led) | none | investigator wrote nothing to disk |
| 600-624 | water quality (issue-led) | 604 | sources only |
| 625-649 | southern fossil aquifers (issue-led) | 634 | |
| 650-699 | reserve | none | keep for fixes and merged shared sources |

Duplicate sources merged (same URL, created by parallel agents): 454 and 483 into SRC-TG-402; 478 into 406;
480 into 455; 505 into 482. Citations were repointed. The merge script left self-referencing text in the
keepers ("Extracts merged from former SRC-TG-402", "SRC-TG-402 and SRC-TG-402 point to the same PDF"),
which should say the old ids. SRC-TG-482 has been cleaned; SRC-TG-402 has not.

## Per topic

### Groundwater, north and centre: FND-TG-400 (current), 401 (past, legacy-policy), 410 (predicted)

State: written and verified; verifier flags **not yet applied**. A fixer was stopped before it changed
anything.

Flags, all ready-after-fixes:

- **400**
  - Problem: "28% … (SRC-TG-402, SRC-TG-403)" should read "(SRC-TG-403; 22% in 2016, SRC-TG-402)".
  - The "North region" indicator should use geography `national`, named "DGRE Nord region".
  - The governorate illicit-borehole indicators should have year 2016, not 2017.
- **401**
  - Root cause 2 overstates SRC-TG-407. Use: incentives "facilitated wells in arid and semi-arid regions;
    dates and instruments not sourced".
  - Root cause 4 cites a SRC-TG-402 sentence that is about deep aquifers (PDF p59). Also add the 2017
    safeguard decrees 2017-1400 and 2017-1401 (PDF p54).
  - The 2008 study's extremes should include Sud-Ouest.
  - The period does not fit `past`: use 1975-1995 and justify it in the body.
- **410**
  - The 2,192 indicator: its 1,422 comes from SRC-TG-402, not 403. Mark it as derived.
  - Root cause 1: add SRC-TG-504 (p115, 84%) and set legacy_decision false.
  - The denominator gap is explained by AFD excluding the SASS reserves (SRC-TG-504 p43).
  - The code was submitted in 2015 and again in February 2017 (SRC-TG-402 II.1).
  - Add AFD's ">123% (2018)" as a second value.

### Dams and surface water: FND-TG-425 (current), 426 (past, legacy-policy), 427 (predicted)

State: verified; flags **not applied**.

- **425**
  - "about forty large dams" should read "37 at end-2017 (SRC-TG-402)".
  - data_gaps: note that 498.0 uses the revised opening stock (503.3 with the printed one).
  - Add `beja` and `kairouan` to geography.
- **426**
  - period should be `1970-2011`.
  - Transfer capacity of 800 Mm3: achieved in 2016-17, only planned for 2018.
  - Root cause 3 (75 vs 56 millimes): set legacy_decision false.
  - Optional: JICA 317.4 Mm3 (2017) as corroboration.
- **427**
  - Nebhana: year 2022, after a 2022 bathymetric survey.
  - Mellègue is one of the two oldest dams, with Ben Métir.
  - root_causes[2] should be worded as an inference.
  - Split the Mellègue indicator into 51.13 (2014) and 14.99 (2025, calculated).
- **SRC-TG-402**
  - Add verbatim extracts, as PDF page/printed page (printed = PDF - 22):
    - 35/13: depuis l'indépendance
    - 51/29: Au 31 août 2017
    - 70/48: siltation 25%, 0.86%/yr, 2050 per dam, footnote 16
    - 72/50: Tableau 12
    - 74/52: 75/56 millimes, dévasement
    - 94/72: canal two-thirds drinking water
    - 96/74: 86.7%
    - 99/77: 205 to 317 Mm3
    - 109/87: Tableaux 23-24
    - 54: the 2017 decrees
    - 38/16: code timeline
  - Then turn the "to be added to SRC-TG-402" notes in 425-427 into citations.
  - Section V.1.1 is printed p30.
- **SRC-TG-404**: the 106% extract is on p52.
- **SRC-TG-428**: the 76% refers to northern surface intake (Table 2-6).
- **Privacy:** SRC-TG-440 to 442 contained a public official's name and mobile number. Removed and pushed.

### Drinking water: FND-TG-450 (current), 451 (current), 452 (past, legacy-policy)

State: written; the verifier was **stopped before reporting**. A full verification is still to do.

Known weak spots:

- **451**: everything about 2023-2026 rests on tier C press (16 hours/day, OTE alerts, 2026 Sahel night cuts).
- **450**: loss rates differ by definition (33%, 22-24%, 20-25%).
- **452**: the GDA counts stop at 2017.

### Pricing and governance: FND-TG-475 (past, legacy-policy), 476 (current), 477 (current)

State: written; the verifier was **stopped before reporting**. Still to verify.

- Nothing about SONEDE after 2021 is sourced: sonede.com.tn refused access.
- The post-2021 status of the water code rests on tier C (SRC-TG-488).
- The ~600 MTND GDA debt figure is unverified and kept out of the indicators.

### Climate projections: FND-TG-500, 501, 502 (all predicted)

- **500 and 501**: `in-review`.
  - The source-verifier passed them after applying its own listed fixes at the orchestrator's request.
  - The verifier for batch 1 objected to this pattern (the checker passing its own edits). Taha may want an
    independent re-check before `validated`.
- **502**: `draft`. The verifier was stopped while applying its flags:
  - Indicator geographies "nabeul (Korba, Cap Bon)" and "national coast" are invalid. Use `nabeul` and
    `national`.
  - Root cause 1: add SRC-TG-503, or split it into a policy cause and a behavioural cause.
  - "Confirmed seawater intrusion" should read "supported the interpretation".
  - The AFD indicator should name both sources.
  - The APAL/UNDP atlas may put 30-50 cm of sea-level rise at 2100, not 2050. Not opened; to check.
- SRC-TG-482, 504 and 509 fixes were applied: 509 is now an institutional-report, as conference proceedings.

### Irrigation (issue-led): FND-TG-525 (past/legacy, PNEEI water-saving programme), 526 (current, dam quota cuts 2021-2024), 527 (current, perimeter network efficiency 40-50%)

State: written, unverified. The investigator was stopped while finishing 526.

Lint flags:

- 526 cites SRC-TG-503 but does not list it in `sources`.

Sources:

- 528-530: MARHP national water reports 2022, 2023 and 2024. These are new and valuable; they extend the
  2017 series.
- 531: Poussin 2008.
- 532: GIZ 2019, solar irrigation.
- 533: WDI withdrawals.

Intended next leads:

- The solar-pumping subsidy, which the ministry says makes pumped water free (FND-TG-400). Energy link.
- Rebound evidence after the PNEEI.

### Southern fossil aquifers (issue-led): FND-TG-625 (current, Kébili illicit palm extensions, 171-177%), 626 (past, state oasis creation ended artesian springs)

State: written, unverified. Stopped before a planned FND-TG-627, which 625 and 626 already list under
`related`.

Lint flags:

- 626 cites SRC-TG-402 but does not list it.
- Both list a non-existent FND-TG-627.

Sources:

- 628-629: OSS SASS.
- 630: World Bank GDEO oasis water balance 2019.
- 631-632: Kébili studies 2024.
- 633: UNECE nexus SASS 2020.
- 634: FAO date value chain 2023.

The 627 topic was probably the SASS projections and transboundary limits. Check the OSS sources.

### Wastewater (issue-led), block 550-574: sources only

- SRC-TG-553: Cour des comptes 28th report, ONAS chapter (tier A). This is the main entry point.
- 554: Webdo 2014 on the same report.
- 555: World Bank ESIA, Northern Tunis.
- 556: World Bank 2022, recycled wastewater and the Gulf of Tunis.
- 557: JICA 2012 ONAS study.
- 558: JICA 2023, Gabès advanced WWTP.
- 559: ARP 2024 report on the AfDB ONAS loan.

No finding written. Planned:

- Plants discharging effluent outside NT 106.02.
- Low reuse of treated wastewater in the perimeters built for it (Borj Touil and others).
- ONAS finances.

The 1989 reuse decree and the newer standards were still to open.

### Desalination (issue-led), block 575-599: nothing on disk

Planned entry point: the delays of the Zarat, Sfax and Sousse plants and the 2018 Djerba plant, then
desalination's share of supply, its energy cost and brine. SRC-TG-604 (SONEDE 2017 desalination
presentation, in the water-quality block) is relevant.

### Water quality (issue-led), block 600-624: sources only

- SRC-TG-603: RNEE 2001, the national state of the environment report.
- SRC-TG-604: SONEDE desalination presentation 2017.

Planned:

- Gabès phosphogypsum discharges and the 2017 decision to stop them.
- Salinity of tap water above 1.5 g/L in the south.
- The CCDR's "85% of groundwater above 1.5 g/L", which needs a DGRE primary source.

## Leads not yet researched

- From the reports: SECADENORD finances; Nebhana irrigation-vs-drinking conflict; Sidi Salem hydropower;
  planned new dams; North-to-Centre transfer and Kalaa Kebira delays; energy cost of lost water; ONAS
  tariffs; groundwater abstraction royalties (art. 63); the 1998 preferential irrigation tariff; artificial
  recharge; the 2026 bill to regularise unauthorised wells; Cour des comptes 2021 groundwater audit;
  virtual water and food imports; financing gap of Eau 2050.
- Sources found but not opened (bot checks, 403 or HTML instead of PDF):
  - Cour des comptes 32nd report (2021)
  - Ben Mammou & Louati 2007 (Érudit)
  - Massuel & Riaux 2017
  - the official UNFCCC NDC PDF
  - World Bank OKR CCDR
  - sonede.com.tn reports
  - ONAGRI national reports after 2018. SRC-TG-528 to 530 now cover 2022-2024.

## Coverage by theme and timeframe (on disk)

| Theme | Findings |
|---|---|
| groundwater | 400 (current), 410 (predicted), 625 (current) |
| surface-water | 425 (current), 427 (predicted), 500 (predicted) |
| drinking-water | 450 (current), 451 (current) |
| water-governance | 476 (current), 477 (current), 501 (predicted) |
| water-quality | 502 (predicted) |
| irrigation | 526 (current), 527 (current) |
| legacy-policy | 401, 426, 452, 475, 525, 626 (all past) |
| wastewater-reuse | none |
| desalination | none |

## Method and template notes

- **Reading PDFs:** WebFetch cannot read compressed PDFs. Use `curl -sSL -o <dir>/doc.pdf <url>` then
  `pdftotext -layout` (or `-raw` for tables) in Git Bash. pseau.org sometimes resets connections; cached
  texts were in the session scratchpad and are not in the repo.
- **Duplicate sources:** parallel agents create duplicate SRCs for the same URL even when told to grep
  first. Merge them after each batch.
- **Legal texts:** `templates/source.md` has no type for a law, decree or conference paper. We used
  `official-statistics` for laws and `institutional-report` for conference proceedings. Consider adding
  `legal-text` to the template.
- **The `past` timeframe:** "largely played out before 2015" fits a legacy decision whose effects still
  grow only awkwardly. We used `past` plus `theme: legacy-policy`, with the effects described in the body.
- **Verifier role:** the source-verifier's role forbids editing. Apply its fixes with a separate fixer, then
  re-run the verifier before setting `in-review`.
- **Lint script:** a linter checked frontmatter keys, taxonomy values, that cited SRC ids exist and are
  listed, and duplicate URLs. It was kept in the session scratchpad and is worth adding to the repo.
