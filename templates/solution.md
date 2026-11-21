---
id: SOL-<initials>-<nnn>
name:
status: draft            # draft | in-review | validated | rejected
type:                    # product | law-regulation | policy | programme | practice | research
owner:                   # company, institution or lab behind it
targets: []              # FND ids
status_in_tunisia:       # deployed | pilot | proposed | abandoned | foreign-only
claims:
  - claim:
    evidence:            # SRC id, or none
    verified:            # yes | partial | no
scores:                  # 0 to 3 each, justified in the body
  root_cause_coverage:
  evidence_quality:
  adoption:
  side_effects:          # 3 = none known, 0 = moves or worsens the problem
  cost_accessibility:
greenwashing_flags: []   # e.g. unverifiable claim, vague label, self-certified, impact shifted elsewhere
verdict:                 # solves | partially-solves | superficial | counterproductive | unverifiable
limits: []               # where it stops working even when implemented well
blockers:                # what stops it from being adopted or from working in Tunisia
  - blocker:
    type:                # legal | regulatory | economic | technical | institutional | social | market
    source:
criticisms:              # what others say against it
  - criticism:
    from:                # researcher, institution, affected group, competitor ...
    source:
    assessment:          # supported | partly-supported | unsupported (by the evidence we found)
trade_offs:              # consequences outside the problem it targets
  - effect:
    on:                  # sector or group affected
    horizon:             # short-term | long-term
    source:
creates: []              # FND ids of problems this solution causes or worsens; if none exists yet, describe it in the body
gap_left:                # what remains unsolved even if it works
conflict_of_interest:    # any link between the owner and our team or experts; none if none
sources: []
author:                  # GitHub username
---

## What it is

## What it claims, and what the evidence shows

## Audit

One short paragraph per score.

## Limits and blockers

What it cannot do, and what stands in its way. For legal and regulatory blockers, cite the
text (law, decree, article) and say what it prevents or encourages.

## Criticisms

Each criticism, who makes it, and whether the evidence supports it.

## Trade-offs and consequences

What it costs other sectors or groups, now and in the long term. A solution to one problem
that causes another belongs here, linked under `creates`.

## Verdict and gap

Why this verdict, and what phase 3 could build on or combine it with.
