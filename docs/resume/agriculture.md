# Agriculture lane: resume notes (phase 1)

Paused on 2026-11-21 on Taha's instruction, mid-verification. Owner Taha (TahaGHZ, initials TG),
lane range 700-999. All record files are on `origin/main` exactly as they were on disk when the
agents were stopped, including partial edits.

## State in one table

33 findings: 7 `in-review`, 26 `draft`. 151 SRC records in the 700-999 range.

| Block | Topic | Findings | State | What is left |
|---|---|---|---|---|
| 700-719 | Cereals | FND-TG-700, 701, 702 | **in-review** (verified, all 19 fixes but one applied) | Nothing. FTDES 85.3% left out (press only). |
| 720-739 | Olives / olive oil | FND-TG-720, 721, 722 | draft, **written, unverified** | Verifier was stopped before reporting. Run `source-verifier` from scratch. |
| 740-759 | Dates and oases | FND-TG-740, 741, 742 | draft, **verified; fixes partly applied** | Fixer stopped while rewriting FND-742. Compare each record to `agriculture-verifier-reports/verify-740.md` fixes 1-20. Fixes 1-3 (FND-742) are blocking. SRC-TG-748 (WMC/TAP 2023 CRDA figure) was added. After fixes: 740 and 741 can go in-review; 742 after fixes 1-3. |
| 760-779 | Livestock and feed | FND-TG-760, 761, 762 | draft, **verified; fixes partly applied** | Fixer stopped while appending extracts to SRC-921/706/768. SRC-TG-771 (Comtrade feed imports) and 772 (Business News 2026) exist, possibly not yet cited. Check `verify-760.md` fixes 1-14. The FND-762 rangeland feed-share figures from SRC-885 (16%, 8-10% by 2050) are unverified: unfccc.int blocks bots. A local copy is in the climate agent's download folder (see below). |
| 780-799 | Land structure and tenure | FND-TG-780, 781, 782 | draft, **verified; no fixes applied** | Apply `verify-780.md`. Blocking for FND-781: its central legal root cause describes the collective-land regime replaced in 2016. The amending law is available online; add it as a new SRC and rewrite the title, problem and root cause 1. FND-782 needs `confidence: low` or a retitle (headline figures are tier C only). FND-780 needs 3 small fixes. |
| 800-819 | Soil degradation | FND-TG-800, 801, 802 | draft, **written, unverified** | Verifier was stopped before reporting. Run `source-verifier` from scratch. SRC-TG-801 is unused (deleted duplicate). |
| 820-839 | Inputs: fertiliser, seed, pesticides | FND-TG-820, 821, 822 | draft, **verified; fixes partly applied** | The fixer had added SRC-TG-836, 837, 838 and edited several SRCs. Check FND-820/821/822 against `verify-820.md`. Key items: the "needs" are 2020-21 planned quantities and the use figures are cereals only; root cause 3 must not cite SRC-921; FND-822 must use FAOSTAT 2024 (4,047 t, 0.83 kg/ha); law 99-42 moves out of root_causes. |
| 840-859 | Farmland lost to urban sprawl, law 83-87 | FND-TG-840, 841 | **in-review** (verified, re-checked after fixes) | Optional: the 1,370 ha indicator's geography contradicts its name. |
| 860-879 | Crop choices / virtual water | FND-TG-860, 861 | **in-review** (verified, fixes applied) | Nothing. SRC-TG-868 (Report 61) was added. |
| 880-899 | Drought and climate projections | FND-TG-880, 881 | draft, **verified; fixes partly applied** | Fixer stopped at the frontmatter stage. Check against `verify-880.md`. FND-880: the "AFD 2020 untraceable" and "yield losses only for 2100" claims are wrong (SRC-886 is the AFD 2020 deliverable, and its Table 9 has 2050 values). NDC and NC4 (SRC-884, 885) extracts are still unverified because unfccc.int blocks bots; grep the local copies. |
| 900-919 | Food loss and waste | FND-TG-900, 901, 902 | draft, **verified; fixes partly applied** | FND-901 passed. It can go in-review once its two small notes are done. The fixer added SRC-TG-911 (Bouledroua 2025) and was editing SRC-902/908 when stopped. Check `verify-900.md`. For FND-902, remove the false 2.28% vs 4.38% discrepancy; 2.28% is a sub-stage. |
| 920-939 | Legacy policy: PASA, price support, farm credit | FND-TG-920, 921, 922 | draft, **verified; fixes probably not applied** | Apply `verify-920.md` section 4. The 1980-85 price ratios are against import-equivalent prices, not the formula. The Finance Law 2014 content must cite SRC-928 (tier C), not SRC-929. Add a Tunisie Numérique 12 Jan 2026 SRC as SRC-TG-933. SRC-TG-923 is unused. |

Verifier reports, copied verbatim: `docs/resume/agriculture-verifier-reports/verify-<block>.md`.
Each has the claim table, the fix list and readiness per record.

## How to resume

1. For each "fixes partly applied" topic, open the verifier report and the record side by side. Apply
   what is missing, then set `in-review` only if every blocking fix is in. Re-check changed figures
   for blocking fixes (742, 880, 881, 781).
2. Run `source-verifier` on olives (720-731, plus olive extracts in SRC-886, 862, 881) and soil
   (800, 802-813, plus soil extracts in SRC-881).
3. Records that cannot be verified stay `draft` with the reason written in the body.
4. Lint: a Python check (PyYAML) of frontmatter, taxonomy values, SRC ids cited in the body vs
   `sources`, and duplicate URLs caught real errors. It is easy to rewrite from the template.
   Sub-agents often drop an SRC id from the `sources:` list when they rewrite it.

## Number blocks used

FND and SRC numbers count independently inside each block. Used: SRC 700-711, 720-731, 740-748,
760-772, 780-794, 800 and 802-813, 820-838, 840-854, 860-868, 880-889, 900-911, 920-922 and
924-932. Free inside blocks: the rest of each block of 20. **940-999 is untouched (reserve).**

## Leads and next issues not yet researched

Started from the investigators' "neighbouring topics" lists. Use the issue-first method (start
from a concrete documented case, trace outward):
- Irrigated intensive olive expansion on groundwater (Sfax, Sidi Bouzid, Kairouan): blue water
  exported in olive oil, the open conflict between Chouchane 2018 and Makhlouf 2017.
- Poultry and eggs: the main users of imported maize and soybean meal, not covered.
- Seed potato import dependence; seed system after the 2023 drought.
- Gabès coastal oasis decline (phosphate industry, urbanisation, water diverted); Gafsa GIAHS oases.
- Agricultural insurance and the missing drought cover (0.42% of premiums; 7% of farmers insured).
- 2026-27 agricultural census results, which will update FND-780 farm structure (last data 2004-05).
- Solar plants on farmland under the 2022 automatic-approval regime (energy link).
- Fruit and vegetable post-harvest and cold-chain losses (no data found yet).
- Pesticide residues and EU RASFF rejections of Tunisian produce.

## Known weak spots

- **No `predicted` finding** for cereals, livestock, inputs, land, food loss or legacy policy. Only
  FND-722 (olives 2050), FND-742 (oases 2030, single study) and FND-880 (agriculture-wide) are
  predicted. FND-920 is the only `past` finding.
- **Tier C only:** state-land figures (FND-782), the 2019-2023 loosening of law 83-87 (FND-841),
  the bread-waste volume (FND-900), cereal loss rates (FND-901), the dairy cost gap (FND-761).
- **Old data:** farm structure 2004-05 (FND-780); the share of farmers with bank credit is about
  2010-12 (FND-922); bread waste 2014-2019.
- **Unreachable sites:** unfccc.int (NDC, NC4) blocks bots. Local copies downloaded with a
  browser User-Agent are in the climate investigator's folder
  `...\scratchpad\dl-drought-climate\`, a session temp folder that will not survive. Re-download
  with `curl -A "Mozilla/5.0 ..."`. ressources.ciheam.org does not resolve. FAOSTAT API needs auth
  (bulk files work). OpenEdition and HAL are bot-blocked (Wayback works).
- **Duplicate sources with the water lane** (same URL, created in parallel): SRC-TG-482 = SRC-TG-881
  (World Bank CCDR, fr), SRC-TG-632 = SRC-TG-747 (CIRAD Mekki 2024 note), SRC-TG-634 =
  SRC-TG-742 (FAO date-sector indicators). Both lanes are Taha's. Merge later and keep one.

## Method and template notes

- The template has no type for **legal texts** or **preprints**. JORT laws are typed
  `official-statistics`, tier A; preprints are `institutional-report` with a note. Consider adding
  `legal-text` and `preprint` to `templates/source.md`.
- Indicator `value` and `year` often end up as strings ("<20", "2015-2022", "not stated"). The
  engine parser needs a rule: numeric value plus qualifier in `name`, year as an integer or "YYYY-YYYY".
- One SRC record per URL shared across topics caused concurrent appends by several agents. Each
  agent added a labelled block, and none was lost. Keep that convention.
- Sub-agent PDF access: WebFetch cannot read compressed PDFs. Use
  `curl -sSL -A "Mozilla/5.0" -o dir/doc.pdf URL`, then `pdftotext -layout`. Arabic PDFs often
  extract garbled.
- The verifiers found real errors in every topic, mostly wording, root causes that restate
  symptoms, and secondary claims stated as fact. Few figures were wrong. Keep the verify step.
