# The gateway

The gateway is the agent a person talks to. You ask it a question about water, energy or
agriculture in Tunisia. It answers from the records in this repo and shows its sources.
Its definition is `.claude/agents/gateway.md`. Start it with `/ask <question>`.

## Three modes

| Mode | Reads | Answers |
|---|---|---|
| Findings | `research/phase1-findings/`, `research/sources/` | What is the problem, and what do the data say? |
| Solutions | `research/phase2-solutions/` | What has been tried, and why does it fall short? |
| R&D | `docs/rnd-method.md`, `research/phase3-proposals/` | What could fill the gap, and who should test it? |

The gateway moves between modes as the question needs. If a fact is missing it says so. It
can hand a new topic to `phase1-investigator`, an unaudited solution to `phase2-validator`,
and an R&D case to `phase3-rnd`. Phase locks in `PHASES.md` and lanes in `LANES.md` still apply.

## How it behaves

- It asks about place, timeframe, and who is asking and what they must decide, when the
  question is vague.
- Every figure cites a record. It never invents a number.
- It says what it does not know and who holds the data.
- It never makes the decision. Proposals are for experts to test (guardrail G7).
- It records each session as a run in `research/agent-runs/` (see `docs/agent-runs.md`).

## Example

**Person:** Why did the water cut out in Mahdia last summer?

**Gateway:** Two quick questions. Do you mean the summer 2026 cuts, and are you asking as a
resident, an official, or a researcher? What decision do you face?

**Person:** Summer 2026. I am a regional councillor. I need to explain it and decide what to
ask the ministry for.

**Gateway (findings):** Here is what the records show. [Facts, each with an FND and SRC id.]
We do not have hourly pumping data for the Mahdia network. SONEDE likely holds it.

**Gateway (solutions):** Two measures were tried. [What each did, and the limits and gaps,
with SOL ids.]

**Gateway (R&D):** I can build a proposal that combines these. It will be a proposal for
experts to test, not a decision. The decision on what to ask the ministry is yours. Shall I
run it?
