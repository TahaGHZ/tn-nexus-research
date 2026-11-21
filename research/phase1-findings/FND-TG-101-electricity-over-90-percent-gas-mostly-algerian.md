---
id: FND-TG-101
title: Over 90% of Tunisian electricity comes from natural gas, and 78% of Tunisia's gas supply is not domestic (mainly Algerian purchases plus royalty gas)
status: in-review
sectors: [energy, water, agriculture]
theme: electricity-mix
timeframe: current
period: 2015-2026
geography: [national]
severity: high
trend: stable
confidence: high
root_causes:
  - cause: Asset lock-in. The installed gas fleet (combined-cycle, open-cycle and dual-fuel steam units, built after the 1990s-2000s choice in FND-TG-100) is the capacity already in place. New capacity still being planned is gas-fired (Skhira combined cycles) for grid stability. So added demand is met by running gas plants harder, not by new fuels.
    type: technical
    legacy_decision: true
    sources: [SRC-TG-104, SRC-TG-106, SRC-TG-100]
  - cause: Domestic gas and royalty gas no longer cover power-sector demand, so most gas is bought from a single supplier (Algeria) at prices partly indexed to oil (Brent) and paid in foreign currency.
    type: economic
    legacy_decision: false
    sources: [SRC-TG-100, SRC-TG-104, SRC-TG-105]
  - cause: Slow renewable additions under a single-buyer model. Generation was opened to private parties only through concessions (Law 96-27) and, from 2015, through renewable regimes in which STEG remains the main buyer. STEG's weak finances have hindered contracting. As a result renewables reached only 8.3% of production by January-September 2026, against a 30% target for 2030. The barriers themselves belong to the renewables topic.
    type: policy
    legacy_decision: false
    sources: [SRC-TG-100, SRC-TG-103, SRC-TG-105, SRC-TG-106]
indicators:
  - name: Share of natural gas in electricity production (including renewable self-production), January-September cumulative
    value: 91.3
    unit: "%"
    year: 2026
    geography: national
    source: SRC-TG-100
  - name: Share of natural gas in electricity production
    value: 93.9
    unit: "%"
    year: 2024
    geography: national
    source: SRC-TG-102
  - name: Share of natural gas in electricity produced
    value: 95
    unit: "%"
    year: 2023
    geography: national
    source: SRC-TG-101
  - name: STEG gas-fired electricity production (full year)
    value: 19183
    unit: GWh
    year: 2025
    geography: national
    source: SRC-TG-100
  - name: National electricity production (full year)
    value: 20533
    unit: GWh
    year: 2025
    geography: national
    source: SRC-TG-100
  - name: Power generation share of total natural gas demand, January-September cumulative
    value: 75
    unit: "%"
    year: 2026
    geography: national
    source: SRC-TG-100
  - name: Algerian gas purchases as share of national gas supply, January-September cumulative
    value: 56
    unit: "%"
    year: 2026
    geography: national
    source: SRC-TG-100
  - name: Royalty gas (forfait fiscal, 531 ktep-pci) as share of national gas supply (3,979 ktep-pci), January-September cumulative (our calculation from p. 21 and p. 24)
    value: 13.3
    unit: "%"
    year: 2026
    geography: national
    source: SRC-TG-100
  - name: Supply not explained by domestic production, royalty or purchases (3,979 - 859 - 531 - 2,240 = 349 ktep-pci), January-September cumulative; plausibly the STEG overdraw of 444 million m3 on royalty gas (inference)
    value: 8.8
    unit: "%"
    year: 2026
    geography: national
    source: SRC-TG-100
  - name: Royalty share as labelled in the ONEM supply chart (includes the unexplained residual), January-September cumulative
    value: 22
    unit: "%"
    year: 2026
    geography: national
    source: SRC-TG-100
  - name: Domestic gas production as share of national gas supply, January-September cumulative
    value: 22
    unit: "%"
    year: 2026
    geography: national
    source: SRC-TG-100
  - name: Electricity purchases (mainly Algeria) as share of local market needs, January-September cumulative
    value: 11
    unit: "%"
    year: 2026
    geography: national
    source: SRC-TG-100
  - name: Electricity imports as share of demand
    value: 12
    unit: "%"
    year: 2023
    geography: national
    source: SRC-TG-105
  - name: Renewable share of electricity production (including self-production), January-September cumulative
    value: 8.3
    unit: "%"
    year: 2026
    geography: national
    source: SRC-TG-100
  - name: Peak electricity demand, highest value to end of September
    value: 5089
    unit: MW
    year: 2026
    geography: national
    source: SRC-TG-100
stakeholders: [STEG, Ministry of Industry Mines and Energy, ONEM, Sonatrach, Sonelgaz, Gecol, Ministry of Finance (subsidy budget), industrial and household consumers, agricultural and water-pumping electricity users]
related: [FND-TG-100, FND-TG-102]
sources: [SRC-TG-100, SRC-TG-101, SRC-TG-102, SRC-TG-103, SRC-TG-104, SRC-TG-105, SRC-TG-106, SRC-TG-109]
data_gaps:
  - A single official full-year series of the gas share of generation for 2015-2025 on one definition. ONEM changed its scope in 2023 (solar IPPs), January 2024 (self-production) and December 2025 (solar concessions), so shares across years are not strictly comparable (SRC-TG-100).
  - The origin split of gas burned for power specifically, as opposed to total national gas supply. ONEM gives supply shares only for the whole economy.
  - Full-year 2025 gas supply shares by origin (Algerian purchases, royalty, domestic). Only January-September 2025 and 2026 were extracted.
  - Whether the gas-fired Radès plant (Carthage Power Company, 471 MW, PPA 2002-2022) is now counted inside STEG production. The ONEM table has no gas IPP row, and its 2015 column does not add up (SRC-TG-100).
  - Gas import price and contract terms with Sonatrach. Out of scope here; see the energy-imports topic.
  - Cooling-water use of gas-fired plants (sea water or fresh water). No source found, so no water link through generation could be stated.
author: TahaGHZ
---

## Problem

Tunisia generates over 90% of its electricity from natural gas. The share was 91.3% for
January-September 2026, counting renewable self-production (SRC-TG-100). It was 93.9% in 2024
(SRC-TG-102) and 95% of electricity produced in 2023 (SRC-TG-101). In full-year 2025, STEG's gas-fired
plants produced 19,183 GWh of 20,533 GWh of national production (SRC-TG-100). Power generation
uses 75% of all gas consumed in the country (SRC-TG-100). That gas is now mostly of Algerian origin.
In January-September 2026, purchases of Algerian gas were 56% of national gas supply and domestic
production 22% (SRC-TG-100). ONEM labels the remaining 22% as royalty gas. Its own resources table,
however, gives the royalty as 531 ktep-pci, about 13% of supply. That leaves about 9% unexplained,
plausibly STEG's recorded overdraw on royalty gas (SRC-TG-100; our arithmetic and inference). On top of this,
11-12% of electricity demand is met by direct electricity imports, mainly from Algeria
(SRC-TG-100, SRC-TG-105). Electricity supply therefore depends on one fuel, and largely on one
foreign supplier.

## Root causes

The symptom is a near single-fuel mix with imported fuel. The causes:

- **Asset lock-in.** The fleet was built for gas in the 1990s and 2000s (FND-TG-100), and the new
  plants planned in 2019 were again gas-fired combined cycles (Skhira 1 and 2, about 500 MW each),
  presented as needed for grid stability (SRC-TG-104). In 2018, 83%
  of generation came from open- and combined-cycle gas turbines and 15% from dual-fuel steam units
  (SRC-TG-104). Combined-cycle plants supplied 78% of production in 2022 (SRC-TG-101) and 66% in
  January-September 2026 (SRC-TG-100). The years and possibly the definitions differ, so this is
  not a measured decline.
- **Gas sources shifted from domestic and royalty to purchased.** When the gas fleet was built,
  royalty and domestic gas supplied much of it (FND-TG-100). Today purchased Algerian gas is the
  largest source (SRC-TG-100). Since July 2015 STEG itself manages the gas purchase contract
  (SRC-TG-100) and gas imports from Algeria (SRC-TG-104). The import price is indexed to oil or
  Brent (SRC-TG-104, SRC-TG-105). Fuel and IPP payments were more than 80% of electricity cost, as
  reported in 2019 (SRC-TG-104). This finding does not cover the decline of domestic production and the trade
  deficit (energy-imports topic) or STEG's finances and subsidies (energy-subsidies topic).
- **Slow diversification under a single buyer.** The 30% renewable target for 2030 dates from the
  2016 strategy (SRC-TG-103, SRC-TG-106). Private generation is possible only by concession or under
  the 2015 renewable regimes, with STEG as the main buyer (SRC-TG-106, SRC-TG-105). The World Bank
  states that STEG's financial situation as the main buyer has hindered progress (SRC-TG-105). Renewables were 4% of generation input in 2023 (SRC-TG-101) and 8.3% of
  production in January-September 2026 (SRC-TG-100). The barriers are covered under the renewables
  topic.

Early signs of change: in January-September 2026, renewable output grew 66% while gas-fired
production still grew 6%, because total production rose 9% (SRC-TG-100). Gas output is not yet
falling in absolute terms.

## Evidence

Gas share of generation, by source and definition. The sources disagree, and the values are
recorded side by side:

| Value | Period | Definition | Source |
|---|---|---|---|
| 91.3% | Jan-Sep 2026 | output, including renewable self-production | SRC-TG-100 (p. 34) |
| about 91% | Jan-Sep 2026 | as stated in text | SRC-TG-100 (p. 28) |
| 93.9% | 2024 | output, IEA data via WDI | SRC-TG-102 |
| 95% | 2023 | electricity produced (ONEM mix) | SRC-TG-101 |
| 92-97% | recent years | range stated by ONEM | SRC-TG-101 |
| 94.4% / "over 95%" | no year stated (published 2025) | World Bank, two values in one document | SRC-TG-105 |
| 96.5% | 2016 | STEG plants only (tier C, company report) | SRC-TG-109 |

The spread comes from scope (STEG only against national, with or without self-production) and
from the year. Every definition puts gas above 90%.

Gas supply by origin, January-September 2026 (SRC-TG-100, p. 24): Algerian purchases 2,240 ktep-pci
(56%), "redevance cédée à la STEG" 22%, domestic 22%, total 3,979 ktep-pci. The source is internally
inconsistent. Its resources table (p. 21) gives domestic production 859, royalty (forfait fiscal)
531 and purchases 2,240 ktep-pci. These sum to 3,630, so about 349 ktep-pci (8.8%) of supply is not
explained. The royalty proper is therefore about 13.3%, not 22%. Pages 21 and 22 record that STEG
drew 444 million m3 more royalty gas than was owed to the State, pending regularisation. That
overdraw is a plausible explanation for the residual, but the source gives no conversion, so this
is our inference. Whatever the label, non-domestic gas is about 78% of supply. The World Bank put
the Algerian share at "more than half" in 2018 (SRC-TG-104).

STEG's share of national production is shown as 81% in a chart of the 2019 World Bank appraisal document, with the Radès IPP at 19%
(SRC-TG-104; the chart gives no data year). It was 97% in mid-2024 (SRC-TG-105) and 92% in January-September 2026, as private
solar grew (SRC-TG-100).

## Why confidence is what it is

High for the core fact that more than 90% of electricity is gas-fired. Official statistics
(SRC-TG-100, SRC-TG-101), an IEA-based dataset (SRC-TG-102) and the World Bank (SRC-TG-104,
SRC-TG-105) agree, even though the exact values differ by definition. The origin split rests on one
monthly provisional bulletin, which is internally inconsistent on the royalty share, and it covers
total gas supply, not power-sector gas only. The 2026 figures cover nine months. The trend is set to
`stable` because the gas share has stayed between about 91% and 96% since 2016 on the available
definitions. The 2026 drop to 91.3% coincides with ONEM's change of scope and may not be a lasting
trend.

## Links to other sectors

- **Water and agriculture depend on this gas-fired electricity.** In January-September 2026, 12%
  of high- and medium-voltage electricity consumption went to "Pompages & ser. Sanitaires" (pumping
  and sanitation services) and 9% to "Agriculture" (SRC-TG-100, p. 36). Sales for agricultural
  pumping ("pompage agricole") rose 5% (SRC-TG-100). Water pumping and farm use therefore draw on
  an electricity supply that is over 90% gas-fired and mostly of Algerian origin. A gas supply or
  price shock reaches them through the electricity they buy. Which utilities sit inside the pumping
  category (e.g. drinking-water or irrigation agencies) is not stated in the source.
- No sourced link was found through power-plant cooling water (see data_gaps).

## Leads for phase 2

- Stratégie énergétique de la Tunisie à l'horizon 2035 (adopted 11 April 2023): https://energiemines.gov.tn/fileadmin/docs-u1/synth%C3%A8se_strat%C3%A9gie_2035.pdf
- Tunisian Solar Plan, 30% renewable electricity by 2030 (SRC-TG-106): https://www.irena.org/-/media/Files/IRENA/Agency/Publication/2021/Jun/IRENA_RRA_Tunisia-2021.pdf
- World Bank TEREG programme (P507304), aiming at 2.8 GW of solar and wind by 2028: https://projects.worldbank.org/en/projects-operations/project-detail/P507304
- World Bank Energy Sector Improvement Project (P168273): https://documents1.worldbank.org/curated/en/296941561687292260/pdf/Tunisia-Energy-Sector-Improvement-Project.pdf
- Skhira 1 and 2 combined-cycle gas plants, about 500 MW each (SRC-TG-104).
- ELMED Tunisia-Italy interconnector (SRC-TG-103, SRC-TG-105).
- Rooftop PV in the residential sector (about 543 MW by September 2026) and on medium and high voltage (150 MW) (SRC-TG-100).

## Verification

**Independent review, 21 November 2026:** pass after corrections. Originals checked: ONEM Conjoncture energetique, September 2026 (SRC-TG-100), pp. 21-24, 28-29, 33-34 and the pie chart on p. 36 (the 12% pumping and 9% agriculture labels were confirmed on the rendered page); World Bank WDI EG.ELC.NGAS.ZS, 2024 (SRC-TG-102); ONEM Bilan energetique 2023, Electricite section (SRC-TG-101); World Bank Energy Sector Improvement Project PAD, p. 2 and p. 4 and the sector chart (SRC-TG-104); World Bank TEREG appraisal document, paragraph 5 (12% electricity imports in 2023) and Challenge sections (SRC-TG-105); STEG Rapport d'activite 2016, production table (SRC-TG-109). Corrections made: the 95% (2023) figure is a share of electricity produced, not of energy input (indicator name, Problem and Evidence table); the STEG and IPP shares changed from 82% and 18% to 81% and 19%, with the chart's missing data year stated (SRC-TG-104); the "metric (input against output)" explanation of the spread removed. Independent teammate sign-off is outstanding; reviewer and author share the TahaGHZ identity, so the record is not validated.

Objections not confirmed: the reviewer could not locate the 12% electricity import share (2023) in SRC-TG-105; it is in the World Bank text, background paragraph on the grid ("electricity imports increased to cover 12 percent of electricity demand in 2023"), so the indicator is kept. The reviewer could not match the 12% and 9% pie labels to slices; on the rendered p. 36 of SRC-TG-100 the tan slice is "Pompages & ser. Sanitaires" (12%) and the magenta slice is "Agriculture" (9%), so the claim is kept.
