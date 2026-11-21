---
id: FND-TG-100
title: Tunisia locked its power system into gas in the 1990s and 2000s, when Algerian transit royalty gas and new domestic fields gave it a gas supply base
status: in-review
sectors: [energy]
theme: electricity-mix
timeframe: past
period: 1983-2015
geography: [national]
severity: high
trend: unknown
confidence: medium
root_causes:
  - cause: The power sector switched from oil to natural gas in the first half of the 1990s and did not keep a second fuel at scale. The gas share rose from about half of generation in 1992-1993 to 85% in 1995 and about 97% by 2003-2005 (dataset). The only opened evidence of an explicit decision is tier C. A 2007 press article reports that all oil-fired stations were due to be converted to gas and all future thermal plants were to be gas-fired.
    type: policy
    legacy_decision: true
    sources: [SRC-TG-102, SRC-TG-110]
  - cause: Gas had a supply base. The authors of SRC-TG-107 attribute the choice of gas to "economic and geographical reasons". Tunisia received a share of the Algerian gas crossing its territory to Italy as an in-kind royalty instead of transit fees, and that share grew when the pipeline was expanded. Domestic gas (Miskar) was sold to STEG at international prices, so the economic case rested on the royalty, not on cheap domestic gas.
    type: economic
    legacy_decision: true
    sources: [SRC-TG-107, SRC-TG-108]
  - cause: Lock-in by asset choice. Once STEG committed new capacity to gas turbines and combined cycles and planned to convert its oil units, every later expansion reused the same fuel infrastructure. Later efficiency gains came from replacing gas units with better gas units (combined cycles), not from changing fuel.
    type: technical
    legacy_decision: true
    sources: [SRC-TG-110, SRC-TG-106, SRC-TG-101]
  - cause: Under Law 96-27 (1996), the main private concession was the 471 MW gas-fired combined-cycle plant at Radès (2002). A 27 MW concession at El Bibane (SEEB, 2003-2010) was also granted; SRC-TG-106 is internally inconsistent on the count. Private entry added gas capacity, not diversity.
    type: institutional
    legacy_decision: true
    sources: [SRC-TG-106, SRC-TG-104]
indicators:
  - name: Share of natural gas in electricity production
    value: 53.6
    unit: "%"
    year: 1992
    geography: national
    source: SRC-TG-102
  - name: Share of natural gas in electricity production
    value: 50.2
    unit: "%"
    year: 1993
    geography: national
    source: SRC-TG-102
  - name: Share of oil in electricity production
    value: 48.8
    unit: "%"
    year: 1993
    geography: national
    source: SRC-TG-102
  - name: Share of natural gas in electricity production
    value: 84.8
    unit: "%"
    year: 1995
    geography: national
    source: SRC-TG-102
  - name: Share of natural gas in electricity production
    value: 97.4
    unit: "%"
    year: 2003
    geography: national
    source: SRC-TG-102
  - name: Royalty ("fiscal") gas received from the Algeria-Italy pipeline
    value: 1210
    unit: ktoe
    year: 2000
    geography: national
    source: SRC-TG-107
  - name: Royalty ("fiscal") gas received from the Algeria-Italy pipeline
    value: 317
    unit: ktoe
    year: 2015
    geography: national
    source: SRC-TG-107
  - name: Natural gas share of installed generating capacity as stated in IRENA text (inconsistent with IRENA's own Table 2, whose 2018 rows give about 93%)
    value: 94.5
    unit: "%"
    year: 2018
    geography: national
    source: SRC-TG-106
  - name: Royalty rate on Algerian gas crossing Tunisia, before the 2019 renewal (one secondary source, no data year given)
    value: 5.625
    unit: "%"
    year:
    geography: national
    source: SRC-TG-107
  - name: Royalty rate under the convention renewed from 1 September 2019 (press, tier C)
    value: 5.25
    unit: "%"
    year: 2019
    geography: national
    source: SRC-TG-111
stakeholders: [STEG, Ministry of Industry Mines and Energy, ETAP, Sonatrach, Carthage Power Company, British Gas / Shell (Miskar operator), electricity consumers]
related: [FND-TG-101, FND-TG-102]
sources: [SRC-TG-100, SRC-TG-101, SRC-TG-102, SRC-TG-104, SRC-TG-106, SRC-TG-107, SRC-TG-108, SRC-TG-109, SRC-TG-110, SRC-TG-111]
data_gaps:
  - Electricity mix before 1990, and the effect of the Transmed pipeline's 1983 opening on it. The WDI series (SRC-TG-102) starts in 1990, and its 1990-1991 values look swapped between gas and oil.
  - The Miskar field's production start year, the date of its STEG supply contract, and Miskar's and Hasdrubal's share of supply over time. A MEED article from 2007 (SRC-TG-110) says only "developed in the 1990s". The OGJ and Offshore articles and World Bank project P005657 were not opened.
  - The primary text of the 1977 Tunisia-Algeria transit agreement and of the 2019 renewal, with the royalty rates. 5.625% (before 2019) comes only from a secondary working paper (SRC-TG-107) and 5.25% (from 2019) only from press (SRC-TG-111). No JORT or legislation.tn text was opened.
  - Official documents (STEG generation expansion plans of the 1980s-2000s) that record why gas was chosen and coal or oil options were not pursued. The only decision evidence opened is tier C (SRC-TG-110). No source opened discusses coal.
  - The pre-2002 split of the fleet between steam units converted to gas and new turbines.
  - A consistent installed-capacity figure for 2018. IRENA gives 6,147 MW and 94.5% gas in its text, but the rows of its own Table 2 sum to 5,147 MW, with 4,774 MW of gas units (about 93%) (SRC-TG-106).
  - What happened to the Radès IPP after its 20-year PPA (2002-2022). The ONEM 2026 table (SRC-TG-100) has no gas-fired IPP row; the reason was not sourced.
  - Not independently reopened: the 2018 capacity table values (5,147 MW total; 4,774 MW of gas units; about 93%). IRENA's Table 2 is garbled in text extraction and the columns could not be assigned reliably (SRC-TG-106).
  - Pages that could not be opened. IEA Tunisia electricity page (https://www.iea.org/countries/tunisia/electricity) returned HTTP 403. STEG history page (https://www.steg.com.tn/fr/institutionnel/historique.html) and STEG gas page (https://www.steg.com.tn/en/institutionnel/gaz.html) returned 404. AfDB electricity sector diagnostic (https://www.afdb.org/sites/default/files/2021/11/22/tunisia.pdf) was blocked by a bot check. UNEP energy profile (https://wedocs.unep.org/bitstream/handle/20.500.11822/20592/Energy_profile_Tunisia.pdf?sequence=1) returned an HTML page, not the PDF. The UW-Madison library copy of the USGS 1992 Minerals Yearbook returned only navigation text.
author: TahaGHZ
---

## Problem

From the early 1990s, Tunisia built almost all of its electricity generation on one fuel, natural
gas. In 1992-1993 oil and gas still shared generation: gas supplied 53.6% and 50.2%, and oil 45.4%
and 48.8% (SRC-TG-102). Gas reached 84.8% in 1995 and about 97% in 2003-2005, and has not fallen
below 88.7% since (SRC-TG-102). By 2018 the fleet was almost entirely gas-fired: combined-cycle,
open-cycle and steam units, plus the gas IPP, with only about 300 MW of hydro and wind
(SRC-TG-106). IRENA's text puts gas at 94.5% of capacity; its own table implies about 93%. This is
the legacy decision (taxonomy idea `legacy-policy`) behind the present dependence in FND-TG-101.
The choice was made while gas came from inside Tunisia or as a royalty in kind. Both sources have
since shrunk.

## Root causes

The symptom is a single-fuel power system. The causes are past choices:

1. **The switch to gas, with no second fuel kept.** The dataset shows the shift happening in
   1992-1995 (SRC-TG-102). The only opened document that states an intention is a 2007 trade-press
   article (SRC-TG-110, tier C). It reports that all oil-fired stations were due to be converted to
   gas and all future thermal plants were to be gas-fired. It also notes that Tunisia produced
   almost no gas before Miskar. No official planning document was found.
2. **Royalty gas gave part of the supply base.** The TransMed pipeline from Algeria to Italy crosses
   Tunisia. It was built in 1978-1983 and expanded in 1991-1994 (SRC-TG-108). Instead of transit
   fees, Tunisia receives gas in kind (SRC-TG-108). One secondary source gives the rate as 5.625%
   of the gas exported, with no data year (SRC-TG-107). Press reports give 5.25% under the
   convention renewed for ten years from 1 September 2019 (SRC-TG-111, tier C). The authors of
   SRC-TG-107 attribute the choice of gas to "economic and geographical reasons". They say the
   pipeline expansion "allowed the growth of the Tunisian quota" and met rising demand. Royalty gas
   rose from 592 ktoe in 1990 to 1,210 ktoe in 2000 (SRC-TG-107). The oil-to-gas switch (1992-1995,
   SRC-TG-102) coincides with the 1991-1994 expansion, but no source opened states the link.
3. **Domestic gas came at import parity.** Miskar, the most productive field, supplies STEG under a
   long-term contract "at international market values and in hard currency" (SRC-TG-108). In 2007
   it was almost 80% of Tunisian gas output (SRC-TG-110, tier C). Domestic gas widened the supply
   base but gave no price advantage. Calling the gas "cheap" would be an inference not supported by
   the sources; what they support is that domestic gas widened the supply base.
4. **Asset lock-in.** Once the oil units were due to be converted and new capacity was built as gas turbines,
   each expansion reused the same fuel chain (SRC-TG-110, SRC-TG-106). Later efficiency gains came
   from combined cycles replacing older gas units (SRC-TG-101), not from fuel change.
5. **Private entry that added gas.** Law 96-27 (April 1996) ended STEG's generation monopoly,
   which had run from 1962 (SRC-TG-106). It allowed only state-tendered concessions. The main
   concession was the 471 MW gas-fired combined-cycle plant at Radès, opened in 2002
   (SRC-TG-106). IRENA also describes a second concession, the 27 MW SEEB plant at El Bibane,
   commissioned in 2003 and shut down in 2010, although the same paragraph says only one
   concession was granted (SRC-TG-106). The Radès plant supplied 25% of electricity in 2012
   (SRC-TG-107). A World Bank chart shows the IPP at 19% of generation (SRC-TG-104; the chart
   gives no data year).

The decision largely played out before 2015. Royalty gas fell from 1,210 ktoe (2000) to 317 ktoe
(2015) as Algerian exports to Europe declined (SRC-TG-107). Domestic gas output declined after 2010
and by 2015 equalled Algerian imports (SRC-TG-107). The gas-based power system was left facing
purchased, oil-indexed imports (see FND-TG-101).

## Evidence

- Gas share of generation: 53.6% (1992), 50.2% (1993), 74.8% (1994), 84.8% (1995), 87.6% (2000),
  97.4% (2003), 95.9% (2010), 91.5% (2015) (SRC-TG-102). The dataset also gives 63.7% (1990) and
  35.5% (1991), but these look swapped with the oil series (35.5% and 62.7%), so they are not used
  as indicators.
- Oil share of generation: 45.4% (1992), 48.8% (1993), 14.7% (1995), 11.6% (2000), 0.9% (2003),
  with a return to 10.6% in 2007 and 4.6% in 2015 (SRC-TG-102). STEG's own report (tier C) shows
  heavy fuel oil at 5.9% of its production in 2015 and almost zero in 2016 (SRC-TG-109). Oil plays
  a backup role, not that of a second fuel.
- Royalty gas: 592 ktoe (1990), 1,210 (2000), 1,164 (2005), 785 (2010), 317 (2015) (SRC-TG-107).
- In 2015, 74% of gas consumption went to electricity (SRC-TG-107).
- In 2007, power demand was growing about 7% a year (SRC-TG-110, tier C).
- Capacity at the end of 2018: IRENA's text gives 6,147 MW with 94.5% gas. The 2018 rows of its own
  Table 2 sum to 5,147 MW, with 4,774 MW of gas units (steam 660, combined cycle 1,612, open cycle
  2,004, IPP 498), about 93% (SRC-TG-106, our arithmetic). The two values are recorded; neither is
  chosen.

## Why confidence is what it is

Medium. The outcome, gas taking over generation in 1992-1995 and staying above about 88%, rests on
an IEA-derived dataset (SRC-TG-102). It agrees with ONEM's statement that gas has oscillated between
92% and 97% (SRC-TG-101). The early-1990s values look noisy, and 1990 and 1991 appear swapped
between the gas and oil series. The causal story rests on tier B sources: an EU-funded working
paper (SRC-TG-107), an advocacy NGO report (SRC-TG-108) and IRENA for the IPP law (SRC-TG-106).
The explicit decision to convert to gas is documented only in tier C press (SRC-TG-110). No primary
document opened (treaty, STEG planning document) states why gas was chosen or why coal or oil were
not kept. Miskar's start date is unsourced. The two royalty rates come from one secondary source
and one press source. The sources disagree on the Radès IPP share: 25% in 2012 (SRC-TG-107)
against 19% in a World Bank chart with no data year (SRC-TG-104). The years differ or are unknown, so both may be correct.

## Links to other sectors

None found for the past period in the sources opened. The current dependence links to water and
agriculture through electricity use (see FND-TG-101).

## Leads for phase 2

- Law No. 96-27 of 1 April 1996 on independent power production, and Decree No. 96-1125 of 20 June 1996 (cited in SRC-TG-106): https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2021/Jun/IRENA_RRA_Tunisia-2021.pdf
- Law No. 2015-12 on renewable electricity, amended by Law 2019-47 (cited in SRC-TG-106).
- ANME energy efficiency programmes since 1985 (SRC-TG-106, SRC-TG-107): http://www.anme.nat.tn
- Renewed TransMed transit convention from 1 September 2019 (SRC-TG-111): https://www.webdo.tn/fr/actualite/national/gaz-algerien-exporte-vers-litalie-500-md-par-an-pour-la-tunisie/149322/

## Verification

**Independent review, 21 November 2026:** pass after corrections. Originals checked: World Bank WDI series EG.ELC.NGAS.ZS and EG.ELC.PETR.ZS (SRC-TG-102, rows 1992-2005, 2010, 2015); MEDRESET working paper, p. 7, Table 5 (SRC-TG-107); IRENA RRA Tunisia 2021, section 2.3 and the Law 96-27 passage (SRC-TG-106); Rosa Luxemburg Stiftung report, TransMed and Miskar sections (SRC-TG-108); MEED, 12 October 2007 (SRC-TG-110); webdo article on the 2019 convention (SRC-TG-111); ONEM Bilan energetique 2023, Electricite section (SRC-TG-101). Corrections made: title and root cause 2 reworded to the source's own attribution ("economic and geographical reasons") instead of "looked secure"; root cause 5 and the Radès paragraph now record the second 27 MW SEEB concession that IRENA also describes; the IPP share "18-19% around 2018-2019" corrected to 19%, chart year not stated (SRC-TG-104); the 2018 capacity table added to data_gaps as not independently reopened. One reviewer objection was not confirmed (see below). Independent teammate sign-off is outstanding; reviewer and author share the TahaGHZ identity, so the record is not validated.

Objection not confirmed: the reviewer said the 5.9% (2015) in SRC-TG-109 belongs to gasoil. In the STEG 2016 report (production table, evolution column -100% against 873.1 GWh in 2015 and 0.4 GWh in 2016) the 5.9% belongs to heavy fuel oil, so the evidence bullet is unchanged.
