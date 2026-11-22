---
id: PRP-<initials>-<nnn>
title:                    # one sentence, the recommendation
status: draft             # draft | in-review | sent-to-experts | supported | refuted | parked
type:                     # improve | combine | new | transfer
case:                     # short name of the case, e.g. "Kerker pumping station, summer 2026"
question:                 # the question the person asked
sectors: []               # main sector first: water | energy | agriculture | nexus
geography: []
addresses: []             # FND ids
builds_on: []             # SOL ids
run:                      # RUN id of the agent run that produced it, if any
hypothesis:               # if we do X, Y changes by about Z, because ...
guardrails:               # how each of the 7 guardrails shaped this proposal
  - id: G1
    name: Static and dynamic effects
    applied:              # one or two sentences
  - id: G2
    name: Rebound effects
    applied:
  - id: G3
    name: Who pays
    applied:
  - id: G4
    name: Do not move the problem
    applied:
  - id: G5
    name: Correlation and causation
    applied:
  - id: G6
    name: Honest data
    applied:
  - id: G7
    name: Humans stay responsible
    applied:
options:                  # every option considered, scored 1 (poor) to 5 (good)
  - name:
    fixes_cause:
    speed:
    effect_10y:
    side_effects:         # 5 = none
    cost_fairness:
    evidence:
    total:                # sum of the six, out of 30
    note:                 # one sentence
plan:
  - phase: now            # now | next | later | always
    action:
    owner:                # person or institution, never the AI
    measure:
data_needed:
  - item:
    holder:               # who has the data
rescore_triggers: []      # events that would change the ranking
assumptions: []
validation_path:
  reviewer:               # EXP id, lab or institution
  pilot:                  # smallest test that would support or refute it
  rough_cost:
outreach: []              # - {to, date, response}; a human sends it
sources: []               # SRC ids
author:                   # GitHub username
contributors: []          # e.g. "Ahmed (case study, 21 Nov 2026)"
---

## The question

What was asked, and in which case.

## What happened

Timeline: date, event, SRC id.

## Why it happened

Factor map as a list. For each factor: the factor, the evidence (SRC ids), the lever.

## What a quick look would miss

Insights that change which option makes sense. Each ends with what follows from it.

## Options and scores

Table of the options in the frontmatter, ranked by total. Say how each guardrail changed a
score. Scores are a first assessment for operators and experts to challenge.

## Recommended plan

Phases now, next, later, always. Owner and measure for each step.

## What we do not know

Missing data and who holds it. Contested figures shown as contested.

## Why it might fail

## Verification

What was checked, by whom, and what is still open. People decide; this is not a decision.
