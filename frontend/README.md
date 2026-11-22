# Nexus TN frontend

A static React site that publishes the research records in this repository: the phase 1
findings, the phase 2 solution audits, the phase 3 R&D proposals and the recorded agent runs. There is no backend. A sync script reads the
Markdown records in `../research/`, writes JSON, and Vite bundles it.

## Run it

Requires Node 18 or later. From this folder:

```bash
npm install
npm run dev       # sync the research records, then start the dev server
npm run build     # sync, type-check and build into dist/
npm run preview   # serve dist/ on http://localhost:4173
npm run sync      # only regenerate the data files
```

Run `npm run sync` (or `dev`/`build`, which call it) after any change under `research/` or
`PHASES.md`. The generated files are committed, so the site also builds where `../research/`
is absent; the script then keeps the existing data.

## How data flows

```
research/phase1-findings/*.md  ┐
research/phase2-solutions/*.md ├─ scripts/sync-research.mjs ─┬─ src/data/research-index.json    (bundled)
research/phase3-proposals/*.md │                             ├─ public/data/findings/<id>.json  (fetched per page)
research/agent-runs/*.md       │                             ├─ public/data/solutions/<id>.json
research/sources/*.md          │                             ├─ public/data/proposals/<id>.json
research/experts/*.md          │                             └─ public/data/runs/<id>.json
PHASES.md                      ┘
```

What the sync publishes, and what it holds back:

- **Findings:** only records at `in-review` or `validated`. Drafts are counted but not published.
- **Solution audits:** every record except `rejected`, drafts included, because phase 2 is new.
  Every list card and detail page shows the status and an "outstanding verification" banner,
  so a draft is never presented as a checked audit.
- **R&D proposals:** every record except `refuted`, with its status shown.
- **Agent runs:** every run file. The body is split into steps on headings of the form
  `## [NN] role | mode: … | sector: … | action: …` (see `docs/agent-runs.md`). A run marked
  `simulated` carries a banner saying it was reconstructed, not executed live.
- **Confidential sources:** a source whose `url` is `none…` or whose extracts start with
  "Confidential" is published by title, publisher and tier only. Its URL, extracts and notes
  stay in the repository.
- **Expert names:** an expert in `research/experts/` whose `consent_to_be_named` is not `yes`
  has their name replaced by "name withheld" everywhere in the published data.
- **Trust class** (findings only): derived from the record's declared confidence and the tier
  mix of the sources it cites. The rules are in `classifyTrust` in the sync script.

## Routes

The site uses hash routing (`/#/...`) so it works from any static host or a file path.

| Route | Page | Shows |
|---|---|---|
| `/` | `HomePage` | Landing page: the general problem and the platform, the 2026 numbers with sources, the failure chain, why single fixes move the problem, the three strengths, how it works, the Kerker case study as a highlight, and voices from the field, ending with a call to contribute |
| `/blog` | `BlogPage` | Published findings; filters in the URL (`?q=`, `?sector=`, `?timeframe=`) |
| `/blog/:id` | `FindingDetailPage` | One finding: indicators, root causes, sections, sources, audited solutions |
| `/solutions` | `SolutionsPage` | Phase 2 audits; filter by verdict and lane |
| `/solutions/:id` | `SolutionDetailPage` | One audit: verdict, scores, claims, blockers, criticisms, trade-offs, sources |
| `/rnd` | `ProposalsPage` | Phase 3 R&D proposals |
| `/rnd/:id` | `ProposalDetailPage` | One proposal: question, hypothesis, scored options, phased plan, guardrails, data still needed, re-score triggers |
| `/runs` | `RunsPage` | Recorded agent runs |
| `/runs/:id` | `RunReplayPage` | One run, either step by step (one click per step, agent replies stream in) or as the full conversation, with the mascot reacting to each step |

## Files

### Configuration

| File | Purpose |
|---|---|
| `package.json` | Scripts and dependencies (React 19, React Router 7, Tailwind 4, Vite 6, lucide-react icons, js-yaml for the sync) |
| `vite.config.ts` | Vite with React and Tailwind plugins; relative `base` for static hosting; CORS origins and allowed hosts for the ngrok tunnel |
| `tsconfig.json` | TypeScript settings for `src/` |
| `index.html` | Page shell, fonts and meta description |
| `src/config.ts` | Site settings: `GITHUB_URL`, used by the navbar icon and the landing page's Contribute button |
| `.gitignore` | Ignores `node_modules/`, `dist/`, Vite cache and `*.tsbuildinfo` |

### Data pipeline

| File | Purpose |
|---|---|
| `scripts/sync-research.mjs` | Parses the YAML frontmatter and `##` sections of every finding, solution, source and expert record; applies the publication rules above; assigns photos by theme; writes the index and the per-record JSON files |
| `src/data/research-index.json` | Generated. Site stats, phase states, theme list, and a summary of every published finding and solution. Bundled into the app |
| `public/data/findings/*.json` | Generated. Full finding records with their resolved sources, related findings and audited solutions. Fetched by `FindingDetailPage` |
| `public/data/solutions/*.json` | Generated. Full solution audits with resolved sources and the findings they target or worsen. Fetched by `SolutionDetailPage` |

Do not edit generated files by hand; change the records in `research/` and re-run the sync.

### Application

| File | Purpose |
|---|---|
| `src/main.tsx` | Mounts `App` into `#root` |
| `src/App.tsx` | Loads the research index, renders the navbar and footer, and declares the routes |
| `src/index.css` | Tailwind import, font families and base styles |
| `src/types/research.ts` | TypeScript types for every JSON shape the sync writes: findings, sources, solutions, stats |

### Pages (`src/pages/`)

| File | Purpose |
|---|---|
| `HomePage.tsx` | The landing page: general hook and platform pitch, numbers, chain, moving fixes, three strengths, how it works (five steps, each linking to its section), the Kerker case study highlight (loads the PRP-TG-400 scorecard), voices from the field, why a platform, and the conclusion with a call to contribute. Every figure shows its source id |
| `BlogPage.tsx` | Searchable, filterable grid of published findings |
| `FindingDetailPage.tsx` | Full finding: indicators, projection, root causes, Markdown sections with clickable citations, source list, related findings, and the solution audits that target it |
| `SolutionsPage.tsx` | Phase 2 overview: verdict counts with their meaning, a draft warning, filters and the grid of audits |
| `SolutionDetailPage.tsx` | Full audit: verdict and score strip, draft banner, claims with verification state, limits, blockers, criticisms, trade-offs, gap left, the Markdown narrative, disclosure, greenwashing flags, targeted findings and sources |
| `ProposalsPage.tsx` | Grid of R&D proposals with their top-scored option |
| `ProposalDetailPage.tsx` | Full proposal: the question and hypothesis, the options table coloured by score, the plan in now / next / later / always columns, how each guardrail was applied, the Markdown narrative, data still needed, re-score triggers, how to test it, linked findings, audits, run and sources |
| `RunsPage.tsx` | List of agent runs |
| `RunReplayPage.tsx` | Two views, switched at the top. **Step by step**: nothing plays on its own; each click on **Next step** reveals one more step, and an agent reply streams in as it appears (a second click finishes it at once). **Full conversation**: every step at once, rendered. The mascot waves for the person's messages, scans for tool steps, and for agent replies plays the move of the step's sector (rain for water, charge for energy, bloom for agriculture, a random move otherwise) |

### Components (`src/components/`)

| File | Purpose |
|---|---|
| `Navbar.tsx` | Sticky header with links to overview, findings, solution audits, R&D and agent runs, a GitHub icon (its link is `GITHUB_URL` in `src/config.ts`), plus a mobile menu |
| `Footer.tsx` | Sector and module links with live counts |
| `FindingCard.tsx` | Card for one finding in the blog grid |
| `SolutionCard.tsx` | Card for one solution audit: verdict, status, compact score bars, source tier mix |
| `MarkdownArticle.tsx` | Safe Markdown renderer (no raw HTML): paragraphs, lists, quotes, `###` headings and pipe tables. Turns `SRC-…` ids into source buttons and `FND-…`, `SOL-…`, `PRP-…` and `RUN-…` ids into links |
| `SourceModal.tsx` | Drawer showing one source: tier, publisher, extracts and notes, with a link out when a public URL exists |
| `ResearchFormatting.tsx` | Shared labels and colours for sectors, severity, timeframe, confidence, trend, status, trust and source tiers, plus `TierMixBar` and formatting helpers |
| `SolutionFormatting.tsx` | Labels and colours for audit verdicts, the five score dimensions, claim verification and criticism assessment, plus `ScoreBars` |
| `PixelGolem.tsx` | Animated pixel-art mascot with several animation modes |

## Adding a new record type

Follow the pattern of solutions, proposals and runs:

1. In `scripts/sync-research.mjs`, read the folder, write `public/data/<type>/<id>.json`, and
   add a summary array to the index.
2. Add the types to `src/types/research.ts`.
3. Add a list page and a detail page, and their routes in `src/App.tsx`.
4. Add a link in the navbar and footer, and a section on the landing page if it belongs in the pitch.
