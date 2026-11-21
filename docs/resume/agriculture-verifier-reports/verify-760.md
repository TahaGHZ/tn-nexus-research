# Verification report: FND-TG-760, FND-TG-761, FND-TG-762

Verifier: source-verifier. No repo files were edited. Sources downloaded to
C:\Users\Taha\AppData\Local\Temp\claude\84d5bad6dc087fc3\6e966d88-81b3-402c-88d3-7630ed4be8fc\scratchpad\verify-760\ (one subfolder per source; PSD CSV in psd\, Comtrade JSON in comtrade\).

Overall: almost every number matches its source. Extracts are verbatim. The one exception is SRC-TG-761, where the table layout was rebuilt; the values are still correct. The USDA PSD rows match the 2026-11-10 file row for row. I could not open one source: SRC-TG-885 (the UNFCCC PDF sits behind Incapsula bot protection, and I did not try to get round it). So the 16% and 8-10% rangeland-share indicators in FND-TG-762 are unverified. The fixes below are mostly wording and sourcing gaps, plus two discrepancies the records do not mention yet.

## 1. Claim table

### FND-TG-760 (imported feed)

| Claim | Result | What the source actually says |
|---|---|---|
| Maize production 0, MY 2024/25 (SRC-763) | Confirmed | PSD: Corn, TS, 2024, Production 0.0000 (1000 MT) |
| Maize imports 1,033 kt MY 2024/25; feed use 1,050 | Confirmed | PSD: Imports 1033, Feed Dom. Consumption 1050 |
| Maize imports 1,327 kt MY 2025/26 | Confirmed | PSD (update 2026-11): Imports 1327, Production 0 |
| Maize imports 730 kt MY 2000/01; 1,117 kt MY 2015/16 | Confirmed | PSD 730 (2000), 1117 (2015) |
| Maize imports 1,006 / 1,213 / 889 kt MY 2019-21 | Confirmed | PSD 1006, 1213, 889 |
| Soybeans: no production, imports 507 kt MY 2024/25; 60% Brazil, 36% US (SRC-764) | Confirmed | GAIN TS2026-0002, Table 1: Production 0, MY Imports 507; "Tunisia does not produce soybeans"; "60% from Brazil, 36% from the U.S." |
| "507 thousand t of soybeans for crushing" (Problem) | Wrong (imprecise) | Same table: Crush 447 and Feed Waste Dom. Cons. 75 (full-fat or expeller direct feed). Not all imports are crushed. |
| Soybean meal imports 158 kt MY 2024/25 | Confirmed | Table 2: MY Imports 158 |
| 70% of soybean meal to poultry and eggs | Confirmed | "70 percent of soybean meals are destined for the poultry and egg sectors" |
| Barley MY 2023/24: production 90, use 965, imports 774 kt | Confirmed | PSD 2023: Production 90, Domestic Consumption 965 (Feed 885), Imports 774 |
| Barley seeded 332, harvested 108 thousand ha, MY 23/24 (SRC-704) | Confirmed | GAIN TS2026-0004, Table 1: "Barley, Seeded 510 430 332..." and "Barley, Harvested 279 300 108..." |
| Barley MY 2024/25 imports 519, feed 700 (PSD) vs 620 / 800 (GAIN) | Confirmed | PSD 2024: Imports 519, Feed 700. GAIN Table 5: 620 / 800. The revision is described correctly. |
| Barley MY 2019-21 imports 778 / 988 / 888 | Confirmed | PSD rows |
| Barley MY 2025/26 production 660, imports 600 | Confirmed | PSD 2025: Production 660, Imports 600 |
| Barley "mainly in feedlots ... when and where rangelands are stressed" | Confirmed | GAIN TS2026-0004, verbatim |
| Barley imports liberalised | Confirmed | "Unlike wheat, barley imports are liberalized ..." |
| Feed import value +75% 2021 vs 2019; soybean meal +85%, barley +64%; dinar devaluation (SRC-706) | Confirmed (caveat kept) | ITES PDF p.66, verbatim, "soit 75% contre 26%" |
| Import price rises 2021: maize 48%, barley 30%, soya 18% | Confirmed | ITES p.66 |
| Concentrate prices +35% in 2022 vs 2019 | Confirmed | ITES p.66 |
| 2022 barley import fall "caused" a temporary feed shortage and light shortages for a few weeks | Partly wrong (overstated) | ITES pp.69-70: barley import falls explain the shortage "en partie" (partly). ITES also says "L'opportunisme des intermédiaires et la spéculation de certains commerçants semblent avoir accentué cette crise temporaire". The FND drops both points. |
| Feed demand doubles by 2035 (SOLIDAR and WFP 2020) | Confirmed (second-hand, flagged) | ITES p.55, verbatim |
| Barley dependence about 50%; 51% in the 2035 trend scenario | Confirmed | ITES p.53 "50% pour l'orge"; trend scenario on PDF p.116. SRC-706 cites p.121, so the page number is off. |
| Early-1990s guaranteed concentrate supply "surtout par importations" (SRC-760) | Confirmed | Sraïri et al. 2007, p.254, verbatim |
| Feed subsidies 49 M TND (1989) down to 4 M TND (1992-93) (SRC-921) | Confirmed | ASAL II ICR, para. 28 |
| Ministry: drought cut roughage, more compound feed; feed prices capped with Ministry of Commerce (SRC-766) | Confirmed | WMC/TAP 3 Aug 2026, verbatim |
| Soybean demand rising with protein demand (SRC-764) | Confirmed | Report highlights |

### FND-TG-761 (dairy)

| Claim | Result | What the source actually says |
|---|---|---|
| Fresh milk production 1,230 kt in 2025; -1.5%/yr 2016-2025 (SRC-761) | Confirmed | ONAGRI fiche, July 2026, p.1. The CAGR recomputes to -1.49%. |
| Peak 1,462 kt in 2021 (chart); "about 16%" fall to 2025 | Confirmed | p.4 chart labels 1408 ... 1462 ... 1230. 1230/1462 = -15.9%. |
| Chart series 2016-2025 | Confirmed (read from chart) | 1408 1424 1310 1352 1392 1462 1330 1224 1248 1230 |
| Herd 360,000 UF in 2024, -2.5%/yr 2015-2024; 59% Holstein (211k), 41% local (149k) | Confirmed | p.1 table |
| No census since 2019 | Confirmed | p.3, "NB : Le recensement n'a pas été réalisé depuis 2019." |
| Yield 5,749 kg in 2024; 6,279 in 2015 | Confirmed | p.1 table and p.4 chart. The -1.0%/yr CAGR checks out. |
| Milk price 1,340 millimes, last revised November 2022; 736 in January 2015; full path | Confirmed | p.1 and p.5 chart: 736 766 890 945 1040 1140 1340 1340 |
| Cow with calf 7,056 TND, +9.5%/yr | Confirmed | p.1 |
| Dairy imports 29.4 kt and 292.1 M TND in 2025; value +21.1%/yr; exports 9.3 kt and 58.7 M TND; balance -233.4 M TND; penetration 2.3% | Confirmed | p.1-2; 58.7 - 292.1 = -233.4 |
| UTAP cost 1.85 TND/l vs 1.34 TND, loss 500 millimes (SRC-765, tier C) | Confirmed | Business News, 26 May 2023, verbatim |
| Ministry: 945 to 1,340 millimes "entre août 2020 et février 2023", three revisions; collection premium 115 millimes; six councils 2020-2024 | Confirmed | WMC/TAP, verbatim |
| Ministry: "déséquilibre durable entre les coûts de production et les prix de vente"; fragmented sector, small herds | Confirmed | WMC/TAP, verbatim |
| 1983 collection premium of 20%; early-1990s measures; 400 to 730 M litres 1990-98; 2001-02 drought decline; "hors-sol" units in oases and urban belts (SRC-760) | Confirmed | Sraïri 2007, pp.254 and 256, verbatim |
| Milk 140 / 400 / 870 M litres (1970, 1990, 2000) | Confirmed | Tableau 6. The row-label shift is real: the 6 value rows map to labels 2-7, and the farm/consumer price ratio 0.054/0.084 = 64.3% proves it. |
| Milk nominal protection 55.8% (1995) to 3.6% (2000) | Confirmed | Tableau 7. Note it rose to 62.2% in 1996 first. |
| ASAL committed to align milk prices with world prices and liberalise milk imports (SRC-921) | Confirmed | Exec. summary, para. iii |
| Milk >50% of market price support; collection premia about 40% of input subsidies 2008-09 (SRC-710) | Confirmed | WB ch.9, pp.265-266 |
| Some poultry and dairy farmers partly or fully abandoned production (SRC-706) | Confirmed, context missing | ITES p.66. The context is the Covid-19 shock, citing an IACE/UTAP 2021 survey. |
| 2022 feed shortage affected milk availability; light shortages for a few weeks | Confirmed | ITES pp.69-70 (same "en partie" caveat as in FND-760) |

### FND-TG-762 (rangelands)

| Claim | Result | What the source actually says |
|---|---|---|
| Rangeland 6.1 M ha (2005) to 5.5 M ha (2012) (SRC-767) | Confirmed | ICARDA workshop report 2017, p.1, verbatim |
| 5.5 M ha, 87% arid or desert (SRC-768) | Confirmed | ICARDA brief 2019, p.1 |
| Degradation cost 49.8 TND/ha/yr = 224 M TND/yr = 21.1% of value (SRC-767) | Confirmed, but a conflict is not recorded | Workshop p.1, verbatim. The brief (SRC-768), which the FND treats as the same underlying source, says "The corresponding losses are estimated at 74 million TND - or 18 percent of the economic value" (Croitoru and Daly 2015). The two figures disagree, and neither record says so. |
| Indicator year "2015 study (Croitoru and Daly)" for the 224 M TND | Could not verify attribution | SRC-767 names no study. Croitoru and Daly appears only in SRC-768, attached to the 1,062 M TND and 74 M TND figures. The 600,000 ha sentence in the brief has no footnote. |
| Brief: 600,000 ha lost "at about 34,000 ha per year" (not used) | Confirmed (internal error noted correctly) | Brief p.1 |
| Feed share 80% (1980) to 20% (today) (SRC-769, tier C) | Confirmed | ICARDA web article dated 2022-12-14, verbatim. Tier C and low confidence are applied correctly. |
| Feed share 16% (2020), projected 8-10% by 2050 (SRC-885) | Could not verify | UNFCCC URL returns an Incapsula bot-check page. WebFetch got an empty body. A web search found no mirror. |
| Sheep 5,179k and goats 1,246k breeding females in 2024, estimates (SRC-762) | Confirmed | ONAGRI red-meat fiche p.1; footnote "1 Estimation." covers the herd section |
| Workshop lists "politiques inadéquates de sauvegarde du cheptel durant les années de sécheresse", clearing, tenure, top-down administration (SRC-767) | Confirmed | Verbatim |
| Financing is "subventions liees a l'elevage et surtout orientees vers les intrants" | Confirmed | Workshop report, financing section |
| 33% of pastoral land under the forest code | Confirmed | Workshop presentations section |
| Forage is about 18% of rangeland economic value | Confirmed | Workshop, regulation point 6 |
| Dismantling of the Bedouin-led grazing system (SRC-769) | Confirmed | Verbatim ("gdel or Hima") |
| IFPRI: relief "probably accelerated rangeland degradation"; animals stay on range with trucked feed and water (SRC-770) | Confirmed | Hazell et al. 2001, p.21, verbatim. The paper covers MENA generally; the FND says so. |
| 1988-89 programme 74 M TND avoided 119.7 M TND of losses; sheep numbers "rose consistently" in early-1990s droughts | Confirmed | p.20 |
| 1994: 500,000 t of subsidised concentrate in Tunisia | Confirmed | p.21. The conflict with SRC-921 para. 59 is recorded correctly. |
| Barley procurement prices drove rangeland ploughing; cultivation as a way to claim land rights | Confirmed, but regional | p.21. The land-rights motive is stated only for "some countries" and the paper then gives a Syrian example. The root-cause line does not show that this is not Tunisia-specific. |
| 1990 rangeland strategy; three-year grazing ban with compensation; Tataouine 41,850 ha; "costly feed alternatives" (SRC-768) | Confirmed | Brief pp.1-2 |
| Feed subsidies peaked at 49 M TND in 1989 (SRC-921) | Confirmed | Para. 28 |

## 2. Independent cross-checks

- Maize and soy import volumes. I used UN Comtrade (Tunisia as reporter, calendar years, public preview API; tier A dataset, independent of USDA):
  - Maize (HS 1005): 994 kt in 2021, 975 kt in 2023. The 2024 quantity is missing; the value was USD 252 M.
  - Soybeans (HS 1201): 544 kt in 2021, 533 kt in 2023, 343 kt in 2024.
  - Soybean meal (HS 2304): 75 kt in 2021, 100 kt in 2023, 122 kt in 2024.
  - Barley (HS 1003): 1,009 kt in 2021, 1,430 kt in 2023, 745 kt in 2024.

  This confirms the order of magnitude: about 0.9 to 1.0 Mt of maize and about 0.5 Mt of soybeans a year. Calendar years differ from USDA market years. The 2024 soybean figure (343 kt) is well below USDA's MY 2024/25 figure of 507 kt, and 2023 barley (1.43 Mt) is higher than any single USDA marketing year. Both gaps are worth noting in the record. ITES Tableau 6 (INS data, end of September) also gives barley imports falling from 770.9 kt to 558.9 kt (-27.5%) between January-September 2021 and January-September 2022. That supports the 2022 barley-import fall.
- Milk and herd decline. Business News, 24 Sept 2026 (tier C; already listed as an unopened lead in FND-761), quotes the OEP: "le cheptel bovin national a reculé de 20%", a herd now of "environ 330.000" female units (target 363,000), and a 2030 milk target of about 1.4 Mt. UTAP puts the average yield at "environ 3.580 litres" per cow. This supports the herd decline: 330k is below ONAGRI's 360k for 2024. It contradicts ONAGRI's 5,749 kg yield, which backs the FND's own finding that herd, yield and production do not reconcile. 3,580 l times about 350k cows gives about 1.25 Mt, which matches production.
- Rangeland feed share. A web search shows a CIHEAM/INRAT paper giving rangelands at about 10-20% of the sheep ration (ressources.ciheam.org/ressources/om/pdf/a97/00801445.pdf), and an OCL 2017 article giving about 17% of national herd needs. I saw both only as search snippets; the OCL fetch returned 403. They point the same way as 16-20%, but I did not verify them.

## 3. Tiers, root causes, frontmatter

- Tiers are correct for every source: 760/761/762/763 A; 704/706/764/767/768/770/885/921/710 B; 765/766/769 C.
- Frontmatter is valid against docs/taxonomy.md and the template. Theme livestock-feed is a real value. Geography values are valid, and so are sectors, cause types, severity, trend and confidence. The FNDs correctly have no projection block (timeframe current). Non-numeric indicator values ("double", "8-10") will cause trouble for the engine parser. They are also projections sitting inside current findings.
- Root causes are mostly real causes with sources, kept apart from symptoms. Exceptions:
  - FND-760, cause 3 (feed priced in foreign currency) is a transmission mechanism, not a root cause. It is acceptable but thin.
  - FND-760, cause 1 is sourced only to SRC-760, which covers dairy concentrates. The poultry maize and soy side has no source in that cause. SRC-921 para. 28 covers it: "Corn and soybean meal benefit poultry raisers and also dairy operations, mostly on larger scale farms". That sentence is not yet extracted.
  - FND-761, cause 5 (fragmented small herds) rests only on tier C (ministry via press).
  - FND-762, cause 5 (larger livestock numbers) partly restates the effect of cause 1. It is sourced to SRC-769 (tier C) and to SRC-770, which is about MENA generally.
  - FND-762, cause 1: SRC-921 para. 28 gives Tunisia-specific support that IFPRI does not. It says barley was given "to small livestock farmers during drought years with the intention of maintaining herd sizes" and used to compensate pastoralists during rangeland rest. That sentence is not yet extracted.

## 4. Concrete fixes

1. **FND-TG-760, Problem paragraph.** Replace "507 thousand t of soybeans for crushing" with "507 thousand t of soybeans (447 thousand t crushed, about 75 thousand t fed directly as full-fat or expeller meal)". Source: SRC-764 Table 1.
2. **FND-TG-760, Problem paragraph, and FND-TG-761, Evidence.** Change "a fall in barley imports caused a temporary feed shortage" to "partly caused". Add that ITES also blames intermediaries' speculation for making the shortage worse. Add that extract to SRC-TG-706 (PDF p.70).
3. **FND-TG-760, root cause 1.** Add SRC-TG-921 to its sources. Add the para. 28 sentences to SRC-TG-921 (barley use; corn and soybean meal benefiting poultry and dairy).
4. **FND-TG-760, data_gaps.** Replace the "FAOSTAT unreachable" item with the UN Comtrade cross-check figures from section 2. Create a SRC record for the Comtrade query, or reuse SRC-TG-824 if it already covers HS 1005/1201/2304/1003 for Tunisia. Record that Comtrade 2024 soybeans (343 kt) differ from USDA.
5. **FND-TG-760, indicator "Projected livestock feed demand, 2035".** It holds a non-numeric "double" and is a projection inside a current finding. Either move it into the body, or set value 2 with unit "multiple of current (base year not stated)".
6. **SRC-TG-706, Notes and Extracts.** The barley 51% trend-scenario passage is on PDF p.116 (printed p.114), not p.121. I could not find the footnote-94 text by search.
7. **FND-TG-761, sentence on some farmers abandoning production.** Say that the context is the Covid-19 input-price shock (IACE/UTAP 2021 survey).
8. **FND-TG-761, data_gaps and Leads.** Business News of 24 Sept 2026 (OEP: herd down 20% to about 330k UF; UTAP: about 3,580 l per cow) can now be opened and cited. Add it as a tier C SRC. Use it in the herd-yield reconciliation paragraph as outside evidence that ONAGRI's 5,749 kg yield is likely not an all-herd average. The national herd rebuilding programme is also named in SRC-TG-766 ("programme national de reconstitution du cheptel"), so that lead can cite SRC-766 rather than "not opened".
9. **FND-TG-761, root cause 5.** Mark it as tier C only, or merge it into another cause.
10. **FND-TG-762, Evidence (degradation cost).** Record the conflict: SRC-767 gives 224 M TND/yr (21.1%), while SRC-768 gives losses of 74 M TND (18%), both apparently from Croitoru and Daly (2015). Add the 74 M TND sentence to SRC-TG-768's extracts. Change the indicator year label: SRC-767 does not name Croitoru and Daly, so either say "cited 2017, underlying study not named" or cite SRC-768 for the attribution.
11. **FND-TG-762, root cause 2.** Mark the land-rights motive as regional ("in some countries", per IFPRI), not observed in Tunisia. Keep only "clearing for cropping" as the Tunisia-specific part (SRC-767).
12. **FND-TG-762, root cause 1.** Add the SRC-TG-921 para. 28 Tunisia-specific sentence on barley to maintain herd sizes (after adding the extract to SRC-921).
13. **FND-TG-762, SRC-885 indicators (16% in 2020; 8-10% by 2050).** Someone with browser access must re-confirm these from the UNFCCC PDF; the verifier could not open it. Until then, the claim "two sources, one of them official" is unverified.
14. **FND-TG-762, indicator value "8-10".** Split it into numeric bounds or keep it in the body, so the engine can parse it.

## 5. Readiness for status: in-review

- **FND-TG-760: not ready.** All numbers check out. Fixes 1-3 are needed first (one wrong sentence, one overstated causal claim, one cause missing a source). Fixes 4-5 are quick.
- **FND-TG-761: ready after minor fixes.** All figures were confirmed against tier A sources. Fixes 2, 7 and 9 are wording and flagging. Fix 8 strengthens the record but does not block.
- **FND-TG-762: not ready.** SRC-TG-885 (two indicators and part of the confidence argument) could not be opened. The 224 vs 74 M TND conflict on degradation cost is not recorded (fix 10). Fix 11 is also needed.
