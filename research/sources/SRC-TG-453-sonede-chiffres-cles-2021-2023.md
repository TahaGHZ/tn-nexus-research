---
id: SRC-TG-453
title: "Chiffres clés SONEDE (2021-2023)"
publisher: Société Nationale d'Exploitation et de Distribution des Eaux (SONEDE)
year: 2024
type: official-statistics
tier: A
url: https://www.sonede.com.tn/a-propos/chiffres-cles-sonede/
accessed: 2026-11-21
language: fr
added_by: TahaGHZ
---

## Extracts

The page shows one chart per indicator. Each chart's data is embedded in the page as a base64-encoded JSON `source` array, decoded below exactly as served (chart title, then year/value rows).

> Volume produit (Million m³): 2021 779.9 | 2022 806.4 | 2023 773.3
> Volume distribué (Million m³): 2021 679.5 | 2022 683.7 | 2023 667.9
> Volume consommé (Million m³): 2021 511.8 | 2022 522.3 | 2023 516.0
> Taux de rendement du réseau d'adduction (%): 2021 88.5 | 2022 85.9 | 2023 86.8
> Taux de rendement du réseau de distribution (%): 2021 76.3 | 2022 76.8 | 2023 77.7
> Longueur du réseau d'adduction (Km): 2021 10095 | 2022 10214 | 2023 10305
> Longueur du réseau de distribution (Km): 2021 47219 | 2022 47787 | 2023 48241
> Nombre de casses réparées: 2021 22753 | 2022 22978 | 2023 22191
> Nombre de fuites réparées: 2021 214670 | 2022 220266 | 2023 209090
> Nombre de casses et fuites réparées par Km de réseaux: 2021 4.1 | 2022 4.2 | 2023 4.0
> Investissement (Million DT): 2022 427.5 | 2023 718.5
> Consommation spécifique énergie (KWH/m³): 2022 0.685 | 2023 0.725
> Nombre d'abonnés (Million abonnés): 2021 3.122 | 2022 3.182 | 2023 3.257
> Consommation spécifique - Domestique branché (Litre/Jour/Habitant): 2021 104.6 | 2022 103.7 | 2023 101.4
> Taux de desserte rural - SONEDE (%): 2021 53.7 | 2022 54.1 | 2023 54.6
> Taux de desserte urbain - SONEDE (%): 2021 100 | 2022 100 | 2023 100
> Taux de branchement des ménages - Milieu rural (%): 2021 50.1 | 2022 50.6 | 2023 51.1

English gloss: SONEDE produced 773.3 million m3 in 2023, distributed 667.9 Mm3 and recorded 516.0 Mm3 consumed. Transmission ("adduction") efficiency was 86.8% and distribution efficiency 77.7% in 2023. It repaired 22,191 pipe breaks and 209,090 leaks in 2023, about 4 per km of network. Investment was 427.5 MDT in 2022 and 718.5 MDT in 2023. Specific energy use was 0.685 kWh/m3 in 2022 and 0.725 kWh/m3 in 2023. SONEDE serves 54.6% of the rural population, and 51.1% of rural households have an individual SONEDE connection (2023).

Page text below the charts:

> Pour plus d'informations, veuillez consulter le rapport de synthèse des statistiques de l'année 2023 à partir du lien suivant : Rapport de synthèse des statistiques de l'année 2023

English gloss: For more information, see the 2023 statistics synthesis report (link).

## Notes

- Opened via: curl, plus decoding of the embedded chart data (base64 JSON in the `aysChartOptions` variables of the page HTML); saw: full page.
- The linked "rapport de synthèse des statistiques 2023" (https://www.sonede.com.tn/rapport_synthese2023/) returned "Accès refusé · 403" to curl, so the full report was not read.
- The page does not define "volume consommé" (it is not necessarily the billed volume) or how "rendement" is computed. The 2023 ratio consumed/produced (516.0/773.3 = 66.7%) is close to the product of the two efficiencies (0.868 × 0.777 = 67.4%). This is a derived calculation, not a SONEDE figure.
- "Casses réparées" counts repairs, which may differ from the "nombre de casses" in older ministry reports. Compare across sources only as an indication.
- The page is undated. Year 2024 is the year of the latest data release (2023 data); the footer reads "2024 ©".
