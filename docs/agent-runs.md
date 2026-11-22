# Agent runs

A run is the recorded session between a person and the gateway agent (see `docs/gateway.md`).
It shows how a question was routed, which records were used, and what came out. The website
reads these files, so the format is fixed.

## Where and how

- One file per run: `research/agent-runs/RUN-<initials>-<nnn>-<slug>.md`.
- Copy `templates/agent-run.md`. Keep the field names exactly.
- The slug has at most five words. The next number is the highest already used, plus one.
- Records are written in English.

## Frontmatter

| Field | Meaning |
|---|---|
| `id` | `RUN-TG-001` style |
| `title` | Short title of the session |
| `status` | `recorded` or `simulated` (see below) |
| `simulated_note` | One sentence on how the run was produced. Needed when simulated |
| `asked_by` | Persona, for example "Regional councillor, Mahdia" |
| `question` | The opening question, word for word |
| `date` | Date of the run |
| `modes` | Modes used: `findings`, `solutions`, `rnd` |
| `sectors` | Sectors touched: `water`, `energy`, `agriculture`, `nexus` |
| `findings_used`, `solutions_used`, `sources_used` | Record ids that were opened and cited |
| `proposals_out` | PRP ids produced in the run |
| `step_count` | Number of steps in the body |
| `author` | GitHub username of the human responsible |

## Steps

The body is a list of steps. Each step starts with a level-2 heading in exactly this pattern:

```
## [01] user
## [02] agent | mode: gateway | sector: water
## [03] tool | mode: findings | sector: energy | action: search findings
## [04] agent | mode: findings | sector: water
```

- Number steps from 01, with no gaps.
- Under the heading goes the message or tool output, in Markdown. Cite records inline by ID.
  Tables and lists are allowed.

### Roles

- `user`: the person. Nothing after the role.
- `agent`: the gateway or a sub-agent speaking.
- `tool`: a search, a file read or a call to a sub-agent. It has an `action`.

### Modes

`gateway` (routing, questions, summary), `findings`, `solutions`, `rnd`.

### Sectors

`water`, `energy`, `agriculture`, `nexus` (when the step crosses sectors).

### Actions (tool steps only)

A short verb phrase. The usual ones: `search findings`, `open source`,
`read solution audit`, `build timeline`, `score options`, `write proposal`, `ask expert`.

## Recorded and simulated

- `recorded`: the run was executed live, and the steps are what happened.
- `simulated`: the run was reconstructed afterwards, not executed live. It is built from
  real records and the real method, but the steps were written, not captured. Always say how
  in `simulated_note`. Do not present a simulated run as a live one.

## Rules

- Every figure in a step cites a record id. Never invent a figure.
- Record dead ends and "we do not have this". Do not tidy them away.
- A run does not replace a record. A proposal from a run is a `PRP` record that points
  back with its `run` field.
- Humans decide (guardrail G7). A run never ends with a decision made by the agent.
