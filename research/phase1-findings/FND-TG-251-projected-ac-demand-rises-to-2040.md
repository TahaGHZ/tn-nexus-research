---
id: FND-TG-251
title: LBNL projects rising AC electricity use through 2040; climate increment unquantified
status: in-review
sectors:
  - energy
theme: buildings-cooling
timeframe: predicted
period: forecast to 2040; climate projection to 2050
geography:
  - national
severity: high
trend: worsening
confidence: medium
root_causes:
  - cause: The modeled increase in AC electricity use follows projected growth in the installed stock, based on historical household ownership
      trends, first purchases, and unit replacement; weather-driven incremental use is not modeled as a future climate scenario.
    type: economic
    legacy_decision: false
    sources:
      - SRC-TG-250
      - SRC-TG-251
indicators:
  - name: BAU AC electricity consumption, approximate chart reading
    value: 3000
    unit: GWh/year
    year: 2030
    geography: national
    source: SRC-TG-251
  - name: BAU AC electricity consumption, approximate chart reading
    value: 4700
    unit: GWh/year
    year: 2040
    geography: national
    source: SRC-TG-251
  - name: AC sales forecast
    value: 600000
    unit: units/year
    year: 2040
    geography: national
    source: SRC-TG-250
  - name: Projected increase in national mean heatwave days, RCP 4.5
    value: 31.9
    unit: days relative to reference period
    year: 2050
    geography: national
    source: SRC-TG-283
  - name: Projected increase in national mean heatwave days, RCP 8.5
    value: 39.1
    unit: days relative to reference period
    year: 2050
    geography: national
    source: SRC-TG-283
projection:
  horizon: 2050
  scenario: LBNL business-as-usual AC electricity forecast ends in 2040; the separate INM RCP4.5 and RCP8.5 heatwave projections are for 2050
    and are not inputs to an integrated climate-demand case
  method: LBNL PAMS stock-turnover and AC-use model with chart-read BAU electricity values; INM national climate scenarios provide context only,
    with the projected 2050 heatwave-day trend reported as not statistically significant
  source: SRC-TG-250, SRC-TG-251, SRC-TG-283
stakeholders:
  - STEG
  - ANME
  - households
  - Ministry of Industry Mines and Energy
related:
  - FND-TG-250
  - FND-TG-222
sources:
  - SRC-TG-250
  - SRC-TG-251
  - SRC-TG-283
data_gaps:
  - The 2030 and 2040 AC electricity values are approximate readings from Figure 4 on PDF page 27 of SRC-TG-251; the figure is a chart rather
    than a tabulated result, so exact values are not reported.
  - The LBNL BAU framework uses a stock-turnover model and climate-related inputs for baseline unit-use estimates, but does not apply future RCP
    climate conditions to project additional AC demand. An integrated climate-conditioned electricity-demand estimate for Tunisia remains unavailable
    in these sources.
  - 'Not independently reopened: the 2050 heatwave-day increases (31.9 and 39.1 days) and the significance caveat (SRC-TG-283). They are
    transcribed in the source record; no local original extract was available in the evidence folder and a direct PDF fetch was blocked.'
author: TahaGHZ
---

## Problem

Lawrence Berkeley National Laboratory's 2023 cost-benefit analysis presents a national business-as-usual (BAU) forecast of air-conditioning electricity consumption through 2040. The approximate chart readings are about 3,000 GWh/year in 2030 and about 4,700 GWh/year in 2040 (SRC-TG-251, Figure 4, PDF p. 27). The report explains that its national estimates include heating consumption from reversible units and ACs used in commercial buildings, so these values should not be read as residential cooling-only use or as a weather-normalized direct series. They are model estimates under a BAU case.

The companion LBNL market assessment estimates AC sales of 238,000 units in 2020, rising to 600,000 units/year by 2040. Its method forecasts household ownership from historical STEG survey growth, includes multiple-unit ownership, estimates first purchases and replacements through a stock-turnover method, and scales household sales to light-commercial use (SRC-TG-250, pp. 16-17). This sales projection is a separate model input, not an electricity-consumption indicator.

Separately, Tunisia's Fourth National Communication presents INM national climate projections for 2050: mean annual temperature rises by 1.6°C under RCP4.5 and 1.9°C under RCP8.5, with stronger warming in summer; it reports an increase in mean national heatwave days of about 31.9 days under RCP4.5 and 39.1 days under RCP8.5 relative to its reference period. The communication says the 2050 heatwave-day trend is not statistically significant (SRC-TG-283). These separate climate projections do not quantify AC use or electricity demand. Together, the sources establish a modeled rising BAU AC load and a plausible climate-related pressure, but they do not establish the size, timing, or statistical confidence of a future climate-driven AC demand increment.

## Root causes

The LBNL modeled BAU increase is associated with projected growth in the AC stock. The companion market assessment uses historical household ownership trends to project ownership to 2040, then derives annual sales from first purchases and replacements and includes light-commercial units (SRC-TG-250). This describes the model's assumptions and mechanism, not proof that any single economic factor caused future demand.

Hotter summers could raise cooling use, but that remains a qualitative inference here. SRC-TG-251 says AC energy use depends on climate conditions and derives baseline unit use using climate data; it does not incorporate future RCP climate projections into the national BAU demand forecast. SRC-TG-283 provides a separate climate scenario without an electricity-demand model.

## Evidence

- SRC-TG-251 is a 2023 LBNL institutional analysis (tier B). Its PDF p. 27 Figure 4 plots the national AC electricity-consumption BAU forecast. The approximate 2030 and 2040 values are chart readings, not stated table values. The figure note says estimates exceed STEG's 500 GWh estimate for 2014 because they include reversible-unit heating and commercial ACs. In the original report, pp. 22-23 explain national results use PAMS stock-turnover analysis and project 2023-2040; the report also describes baseline cooling energy as dependent on climate conditions (p. 12).
- SRC-TG-250 is a 2023 LBNL market assessment (tier B). It documents the 600,000 units/year 2040 sales estimate and describes the ownership-based forecast and first-purchase/replacement calculation. It does not provide a 600,000-unit installed-stock figure.
- SRC-TG-283 is the Republic of Tunisia's Fourth National Communication (tier A), with climate modelling by INM. Its source record gives the RCP values and non-significance caveat, but the underlying publication was not locally available for independent page-level inspection in this review. These figures are kept separate from the LBNL demand model and are not used to estimate AC electricity demand.

## Why confidence is what it is

Medium: the BAU trend is supported by an institutional stock-turnover model and the sales method is documented, but the electricity values are approximate chart readings and the climate increment is unquantified. The INM heatwave figures are reported by an official national communication through an existing source record, but could not be independently rechecked here against the original PDF. No integrated RCP-conditioned AC electricity projection is available in the cited evidence.

## Links to other sectors

Higher cooling demand would contribute to electricity system load and potentially the summer peak (FND-TG-222); the cited projections do not quantify the effect on a future peak.

## Leads for phase 2

- Appliance efficiency standards and labels (SRC-TG-250).

## Verification

The dated equipment model supplies stock and electricity-use projections. Heatwave projections come from separate climate modelling. The finding does not combine their outputs into an unsupported additional power-demand forecast. The 2030 and 2040 values (about 3,000 and 4,700 GWh/year) were checked against the rendered Figure 4 on PDF p. 27 of LBNL (2023); the report gives no numeric BAU series, so they remain approximate chart readings with unquantified precision.

**Independent review, 21 November 2026:** pass after corrections. Checked LBNL Cost-Benefit Analysis for Air Conditioner in Tunisia (SRC-TG-251), PDF p. 27, Figure 4 (chart read: about 1,500 GWh in 2020, 3,000 GWh in 2030, 4,700 GWh in 2040) and Tables 17-18 (savings only, no BAU consumption table); LBNL market assessment (SRC-TG-250), market section (238,000 units sold in 2020, 600,000 units by 2040). Corrections: the unchecked heatwave indicators (SRC-TG-283) are now listed in data_gaps as not independently reopened. Independent teammate sign-off is outstanding; reviewer and author share the TahaGHZ identity, so the record is not validated.
