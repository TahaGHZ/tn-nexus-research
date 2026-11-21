---
id: FND-<initials>-<nnn>
title:
status: draft            # draft | in-review | validated | rejected
sectors: []              # main sector first (it decides the lane), then any others: water, energy, agriculture
theme:                   # from docs/taxonomy.md
timeframe:               # past | current | predicted
period:                  # e.g. 1990-2024, or horizon 2050 for predicted
geography: []
severity:                # low | medium | high | critical
trend:                   # worsening | stable | improving | unknown
confidence:              # low | medium | high
root_causes:
  - cause:
    type:                # policy | technical | economic | behavioural | climatic | institutional
    legacy_decision:     # true if it traces to a past choice; describe it in the body
    sources: []
indicators:
  - name:
    value:
    unit:
    year:
    geography:
    source:              # SRC id
projection:              # predicted findings only, otherwise delete
  horizon:
  scenario:
  method:
  source:
stakeholders: []         # who is affected, who decides
related: []              # other FND ids
sources: []              # all SRC ids used
data_gaps: []            # what we looked for and could not source
author:                  # GitHub username
---

## Problem

Three to six sentences. What is happening, where, since when, and how big it is.

## Root causes

How we got here. Separate the symptom from the cause, and name past decisions explicitly.

## Evidence

The data behind the indicators, with source ids inline, e.g. (SRC-12-01).

## Why confidence is what it is

What is solid, what is contested, what rests on a single or weak source.

## Links to other sectors

How this problem feeds into or depends on another sector, with sources. Write "none found"
if none.

## Leads for phase 2

Solutions seen in passing while researching. Names and links only; do not evaluate them here.
