---
id: SOL-TG-400
name: On-site storm-water retention, infiltration and reuse with geocellular tanks (ACO StormBrixx), as proposed by STC
status: draft
type: product
owner: ACO (manufacturer, plastic geocellular tanks); proposed for Tunisia by STC, its exclusive Tunisian distributor
targets: [FND-TG-451, FND-TG-410]
status_in_tunisia: proposed
claims:
  - claim: StormBrixx SD is a patented plastic geocellular system for storm-water attenuation and infiltration with a 97% void ratio
    evidence: SRC-TG-641
    verified: partial
  - claim: A 2,000 m2 asphalt site needs about 90 m3 of storage (2,000 x 0.9 x 0.05 m), so about 93 m3 of StormBrixx SD
    evidence: SRC-TG-341
    verified: partial
  - claim: The stored water can feed garden irrigation in summer (pump outside STC's range)
    evidence: none
    verified: no
  - claim: On sandy soil an unlined tank allows infiltration and groundwater recharge
    evidence: SRC-TG-643
    verified: partial
  - claim: Most Tunisian cities have no separate storm-water network, so rain and sewage share the same pipes
    evidence: SRC-TG-341
    verified: no
  - claim: Tunisian rules require rainwater collection tanks in new buildings and encourage alternative storm-water techniques
    evidence: SRC-TG-640
    verified: partial
scores:
  root_cause_coverage: 1
  evidence_quality: 1
  adoption: 0
  side_effects: 2
  cost_accessibility: 1
greenwashing_flags:
  - "self-certified: 97% void ratio, 50/60-year design life and 'recyclable' come from the manufacturer's own datasheet (SRC-TG-641)"
  - "unverifiable claim: water-supply benefit is stated with assumed values and no measured Tunisian case (SRC-TG-341)"
  - "impact shifted elsewhere: the product is a flood-attenuation tool presented here as a water-supply and recharge answer; no source gives a yield, and the infiltration option moves road and roof pollutants towards groundwater (SRC-TG-643)"
verdict: superficial
limits:
  - "Yield is bounded by rainfall: about 600, 300 and 150 mm a year in the north, centre and south (SRC-TG-642). Most of it falls in a few intense events and long droughts recur, so a tank sized for one big storm stays empty for most of the year and overflows in the biggest events."
  - "Stored water is not drinking water. It can serve only non-potable uses, with a separate network and yearly laboratory control for roof water (SRC-TG-640, pp. 17-18). Run-off from asphalt is dirtier than roof water."
  - "Storage only makes sense if the water is then used (SRC-TG-640, p. 36). In winter, when the tank fills, irrigation demand is low; summer demand has to be met from water stored for months."
  - "Infiltration depends on soil and on the water being clean. Metals and hydrocarbons accumulate in infiltration systems and travel from 5-10 cm to over 1 m depending on the device (SRC-TG-643, abstract). Which Tunisian soils and aquifers are suitable is not documented in what we opened."
blockers:
  - blocker: "Decree 2018-171, Article 8, as summarised by ANME, covers use of water from inaccessible building roofs. We found no text covering reuse of run-off from asphalt or car parks, which is the vendor's example. The decree text was not opened."
    type: legal
    source: SRC-TG-640
  - blocker: "Water is cheap: ANME puts an annual household bill at about 64 TND and calls rainwater collection 'economiquement non rentable', so private users have little reason to pay for storage."
    type: economic
    source: SRC-TG-640
  - blocker: "On-site infiltration and retention are recommendations to municipalities (urban plans, building permits), not obligations. Stormwater networks sit with communes, and flood-protection works are excluded from their duty."
    type: institutional
    source: SRC-TG-640
  - blocker: "No Tunisian price, installer base or design standard for geocellular tanks was found; the datasheet is a New Zealand version."
    type: market
    source: SRC-TG-641
  - blocker: "The pump for reuse is outside STC's product range, so the supply use is incomplete as proposed."
    type: technical
    source: SRC-TG-341
criticisms:
  - criticism: "The proposal is a vendor's: written by an STC employee to match STC products to Tunisian problems, with assumed values, press-sourced problem figures and no measured saving or installed case."
    from: our own review of SRC-TG-341 (STC is the exclusive distributor of ACO)
    source: SRC-TG-341
    assessment: supported
  - criticism: "Stored storm water is not a water source: storing it only makes sense if it is then used, and the incentive for private users is too weak."
    from: ANME guide (Tunisian national agency, guide to municipalities)
    source: SRC-TG-640
    assessment: supported
  - criticism: "Infiltrating urban run-off can carry metals and hydrocarbons into soil and potentially groundwater; results are mixed and site-dependent."
    from: Tedoldi et al. 2016 (peer-reviewed review, mostly temperate-climate sites)
    source: SRC-TG-643
    assessment: partly-supported
  - criticism: "Rainwater, even from roofs, is often contaminated; chlorination does not remove heavy metals, and owners seldom test it."
    from: ANME guide
    source: SRC-TG-640
    assessment: supported
trade_offs:
  - effect: "Runs against the cheaper traditional option: the majel (underground cistern) costs 13,000-15,000 TND for 20 m3 in masonry and under 4,000 TND in plastic (about 650-750 and under 200 TND per m3 of storage, our calculation). No StormBrixx price was found, so no like-for-like comparison is possible."
    on: households and municipalities
    horizon: short-term
    source: SRC-TG-640
  - effect: "Infiltration may add urban pollutants to soil and groundwater. This is a risk shown for soil-based systems elsewhere, not measured in Tunisia."
    on: water (groundwater quality)
    horizon: long-term
    source: SRC-TG-643
  - effect: "Plastic (polypropylene) tanks bury a material with a stated 50-60 year life; end-of-life handling and the recycled share are not documented. Electricity for the reuse pump adds a small energy load, not quantified."
    on: energy, environment
    horizon: long-term
    source: SRC-TG-641
  - effect: "Climate trend: rainfall is projected to fall by 6-9% by 2050 (AFD) or more, with more extreme events (NDC), which favours flood attenuation over supply."
    on: water
    horizon: long-term
    source: SRC-TG-504
creates: []
gap_left: "Both targets, regional supply capacity and network losses behind the 2023 rationing (FND-TG-451) and the groundwater overdraft of 865 Mm3 a year (FND-TG-410), stay untouched. Urban flooding itself, the problem this product best fits, has no finding yet."
conflict_of_interest: "Proposed by expert EXP-TG-001 (Maher Mahmoudi), a Technical Sales Engineer at STC, the exclusive Tunisian distributor of ACO (SRC-TG-341). STC would profit from sales of StormBrixx. His proposal is treated as vendor material (tier C); the checks below use sources that do not come from STC or ACO, apart from the manufacturer datasheet used for product specifications only."
sources: [SRC-TG-341, SRC-TG-640, SRC-TG-641, SRC-TG-642, SRC-TG-643, SRC-TG-503, SRC-TG-504, SRC-TG-508]
author: TahaGHZ
---

## What it is

ACO StormBrixx is a patented, injection-moulded polypropylene crate system that is buried to form a tank holding 95-97% water by volume. It is used to hold run-off from roofs and paved areas and release it slowly (attenuation), to let it soak into the ground (infiltration), or to store it for reuse (SRC-TG-641). STC proposes it for Tunisian sites in "Scenario B" of its use-case paper: a worked example holds the run-off of 2,000 m2 of asphalt in about 93 m3 of tanks, with summer irrigation through a pump, or an unlined tank for infiltration on sandy soil (SRC-TG-341). The paper is confidential and must not be published without EXP-TG-001's agreement.

Status in Tunisia: proposed. SRC-TG-341 gives no installed case and we found none.

## What it claims, and what the evidence shows

- **Product specification (97% void ratio, patented, polypropylene).** Repeated in the manufacturer's New Zealand datasheet (SRC-TG-641). That is the same owner, so it is the claim restated, not verification. Partial.
- **The 90 m3 / 93 m3 example.** The arithmetic holds (2,000 x 0.9 x 0.05 = 90 m3; 90 / 0.97 = about 93 m3), but the 50 mm design storm is assumed. The ANME guide suggests holding 5 to 15 mm per m2 on a plot (SRC-TG-640, p. 36). A 50 mm storm is a large event; the guide does not call for it. Partial.
- **Annual water captured.** The vendor gives no annual figure. As an upper bound, our calculation, 2,000 m2 x 0.9 runoff factor on the FAO regional rainfall of 600, 300 and 150 mm (SRC-TG-642) gives at most about 1,080, 540 and 270 m3 a year (north, centre, south). This is before first-flush loss, overflow when the tank is full and losses in use. The real figure depends on the number and size of events, which no source we opened gives. Evaporation from a buried tank is small, but stored water can degrade, as the ANME guide describes for cisterns (SRC-TG-640, pp. 10, 17-18). Evidence: none for the supply claim; not verified.
- **Scale against our findings.** To offset the 865 Mm3 groundwater overdraft in 2020 (SRC-TG-503, via FND-TG-410) at the northern maximum above, about 800,000 such sites would be needed (our calculation). The overdraft is not caused by lack of storage but by withdrawals above renewable supply (FND-TG-410).
- **Infiltration and recharge.** The review of infiltration systems finds metals and hydrocarbons accumulate in the soil, mostly in the top 10-30 cm, with contrary cases (SRC-TG-643). A buried tank discharges below that top layer, so the filtering role of the surface soil is lost; this is our inference, not tested in the review. Partial.
- **No separate storm-water network.** SRC-TG-341 attributes this to a press article (AllAfrica), not opened. ANME says communes lack equipment against flood risk and that interventions do not solve flooding (SRC-TG-640, p. 13). Not verified as stated.

## Audit

**root_cause_coverage: 1.** FND-TG-451 lists regional supply capacity, project delays, drought and network efficiency as causes; FND-TG-410 lists withdrawals above renewable recharge, illicit drilling and free drilling. Site-scale storage touches none of these. It could marginally reduce the draw of one site on SONEDE water for irrigation and, if infiltrated and clean, add a little local recharge. Its natural target, run-off and flooding, is outside our findings.

**evidence_quality: 1.** The only sources on the product are the manufacturer's datasheet and an STC employee's paper with assumed values. Independent evidence exists only for general principles (ANME on cisterns and retention; Tedoldi on infiltration). No measured Tunisian result.

**adoption: 0.** Status is proposed; we found no installation in Tunisia and no price list. Majels, by contrast, are widespread (about 150,000 in Sfax, SRC-TG-640, p. 10), so the user need exists but is served by a different technology.

**side_effects: 2.** No documented harm; the main risk is pollutant transfer to groundwater when infiltration is used, and plastic end-of-life. Both are risks, not observations in Tunisia.

**cost_accessibility: 1.** No StormBrixx price was found, so cost per m3 cannot be given. The comparison point is the plastic majel cistern at under 200 TND per m3 of storage (our calculation from SRC-TG-640, p. 15). Tank, excavation, geotextile, pump and yearly lab tests for roof water add to cost; with low water tariffs ANME judges collection unprofitable. Score is low-confidence.

## Limits and blockers

- **Climate.** Tunisian rain is concentrated in few events, with long droughts (SRC-TG-640, p. 6; SRC-TG-642). Storage sized for flood peaks serves supply poorly. Rainfall is expected to fall by 6-9% by 2050 (SRC-TG-504) or 10-30% (SRC-TG-508, source unspecified) while extreme events become more frequent, which favours the flood-protection use.
- **Law.** Decree 2018-171 (19 February 2018), as summarised in SRC-TG-640 (pp. 17-19): Article 3 requires new civil buildings and larger projects to include a rainwater tank backed by a feasibility study approved by the agriculture ministry; Article 8 allows roof water for non-drinking uses through a separate network; Article 9 requires annual laboratory tests. So Tunisian law already requires roof-water tanks in new buildings, which makes the product a possible way to comply, but nothing we found names geocellular tanks or covers run-off from asphalt. Infiltration is only recommended (SRC-TG-640, p. 39). **The decree text was not opened.**
- **Institutions.** Communes manage storm-water networks (Code des collectivités locales, Article 240) except flood-protection works (SRC-TG-640, p. 14). A parcel-scale product needs municipal rules to create demand.
- **Technical.** Soil type, depth to groundwater and pollutant load decide whether infiltration is safe; the vendor gives none of these for Tunisia.

## Criticisms

See `criticisms` in the frontmatter. The two best-supported are that the proposal is vendor-authored with assumed values (supported) and that stored run-off is only worth it if reused, which private users have little incentive to do (supported by ANME). The pollutant criticism is general: it comes from a review of temperate sites and says infiltration often retains pollutants in the top soil, so it is partly supported for Tunisia.

## Trade-offs and consequences

- **Water:** possible groundwater-quality risk if untreated run-off is infiltrated (long-term, a risk argued from SRC-TG-643, not seen in Tunisia).
- **Agriculture:** small irrigation reuse for gardens; no effect on irrigated agriculture, the main groundwater user (FND-TG-410).
- **Energy:** a reuse pump adds electricity use; not quantified.
- **Materials:** polypropylene tank with stated 50-60 year life; end-of-life not documented.
- **Urban flooding is not in our findings.** This product probably matters most for run-off and flood attenuation, a problem our phase 1 does not cover (ANME describes floods in several cities, SRC-TG-640, p. 6). It is a gap for phase 1 to research. Nothing here is linked under `creates`.

## Verdict and gap

**superficial** for the targets we have. It does not act on the root causes of FND-TG-451 or FND-TG-410, and the supply benefit is unquantified. This is not a failed product: as flood attenuation it may be sound, but no finding covers that problem and no source we opened tests it in Tunisia. For phase 3: compare on-site tanks with majels and open basins (cost per m3 stored and per m3 used), test the roof-water route that Decree 2018-171 already mandates, and combine retention with managed aquifer recharge only where soils and run-off quality are checked. Phase 1 should add a finding on urban flooding and storm-water losses.

## Verification

**Outstanding verification:** open the text of Decree 2018-171 (Articles 3, 6, 7, 8, 9) and Decree 2016-1125 and check how ANME paraphrases them, including whether run-off from paved areas is covered; find a StormBrixx or equivalent price in Tunisia and a cost per m3 stored for open basins and SuDS; find Tunisian rain-event statistics (events per year, intensity) and soil infiltration suitability; open the full text of Tedoldi et al. 2016; check the AllAfrica claim on combined sewers and the ONAS rule on storm water in sewers; confirm the ACO datasheet table values from an official ACO page; ask EXP-TG-001 for any Tunisian installed case.
