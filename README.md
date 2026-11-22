# Nexus TN

**An open platform that researches solutions to Tunisia's water, energy and agriculture
crisis, like a research team, but faster and cheaper.**

Open source · Free · and always will be.

- **Live site:** https://tn-nexus-research.vercel.app/
- **Demo film (45 s):** https://claude.ai/artifact/2anDhHaFKFWno9KptTcAJW

## Why

In Tunisia, water, energy and farming fail together. When the grid fails, pumping stations
stop, taps run dry and farms lose their irrigation. Every fix tried so far has pushed the
problem somewhere else: solar pumps drain the aquifers, desalination adds load to the same
weak grid, drip subsidies let farmers irrigate more land. A fixed answer to one problem does
not hold for long. Nexus is built to keep finding the right fix as the situation changes.

## How it works

Every case goes through three phases. Each phase produces structured Markdown records with
YAML frontmatter, and every figure cites a source.

| Phase | Question | Records | Folder |
|---|---|---|---|
| 1. Findings | What are the real problems, past, current and predicted, backed by data? | `FND` findings, `SRC` sources | `research/phase1-findings/`, `research/sources/` |
| 2. Solution audits | Do existing products, laws and programmes act on the root cause? What limits, blocks and criticises them, and what do they cost other sectors? | `SOL` | `research/phase2-solutions/` |
| 3. R&D | Which options could fill the gap? Score them against seven guardrails, turn the best into a phased plan, and name who should test it. | `PRP` | `research/phase3-proposals/` |

A **gateway agent** sits on top: a person asks a question, the agent routes it through the
three phases, says what it does not know and who holds the data, and records the session
as a replayable **agent run** (`research/agent-runs/`).

### The seven guardrails

Reviewed by an environmental economist (`docs/rnd-method.md`):

1. Weigh each solution today and over ten years.
2. Count rebound effects.
3. Check who pays.
4. Never just move the problem.
5. Test causes, not correlations.
6. Show contested numbers as contested.
7. Humans decide: the AI proposes and ranks; experts and decision makers decide.

## What is in it today

| | Count | Status |
|---|---|---|
| Findings | 78 | 65 source-verified, 13 drafts with a named open question |
| Sources | 366 | each with an exact extract in its original language, rated tier A, B or C |
| Solution audits | 7 | all source-verified |
| R&D proposals | 1 | the Kerker case (draft) |
| Agent runs | 1 | the Kerker case, 28 steps |

**Case study, Kerker (summer 2026):** power cuts stopped the Kerker pumping station and left
parts of Mahdia and Sfax without water for ten hours or more. The gateway agent rebuilt the
timeline, found the weak point (one station with no protected power and no water buffer),
scored eight options against the guardrails and produced a phased plan. See
`research/agent-runs/RUN-TG-001-kerker-water-cuts.md` and
`research/phase3-proposals/PRP-TG-400-kerker-phased-resilience-plan.md`.

## The website

`frontend/` is a static React site that publishes the records: findings, solution audits,
R&D proposals and agent-run replays. A sync script reads `research/` at build time; there is
no backend.

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in frontend/dist
```

To host it (for example on Vercel): root directory `frontend`, build command
`npm run build`, output directory `dist`. Details in `frontend/README.md`.

## Contributing research

The team's Claude Code sessions run the pipeline in parallel. Start here:

- **Rules:** `CLAUDE.md`: phase lock, lanes, record IDs, and "every number has a source".
- **Who researches what:** `LANES.md`. Take a free lane by adding your row.
- **Which phases are open:** `PHASES.md`.
- **Commands in Claude Code:**
  - `/research <lane or topic>`: research a topic in your lane, verify it and push.
  - `/status`: phase locks, lanes, coverage and what to do next.
  - `/ask <question>`: put a question to the gateway agent and record the run.
- **Using Codex or another agent:** `AGENTS.md`.
- **On Windows,** run `git config core.longpaths true` in your clone first.

Record statuses: `draft` (written), `in-review` (passed the source check), `validated`
(checked by a teammate other than the author), `rejected` (the evidence did not hold).

## Repository layout

```
CLAUDE.md, AGENTS.md      rules for Claude Code and other agents
LANES.md, PHASES.md       lane ownership and phase locks
.claude/agents/           gateway, phase1-investigator, source-verifier, phase2-validator, phase3-rnd
.claude/commands/         /research, /status, /ask
docs/                     taxonomy, R&D method, gateway, agent-run format, lane handoffs
templates/                one template per record type
research/
  phase1-findings/        FND records
  phase2-solutions/       SOL records
  phase3-proposals/       PRP records
  agent-runs/             RUN records
  sources/                SRC records
  experts/                EXP records
frontend/                 the website
```

## People

- **Team:** Taha Ghazouani (TahaGHZ), Ahmed Guesmi.
- **Voices from the field:** Maher Mahmoudi (STC, energy and air conditioning); an engineer at
  Sastra Solar Energy; an environmental economist who reviewed the guardrails (name withheld
  at his request); a hydraulics engineer and former Regional Commissioner for Agricultural
  Development in Kef, Jendouba and Kasserine.

Built for the Water · Energy · Agriculture hackathon, 21–22 November 2026.
