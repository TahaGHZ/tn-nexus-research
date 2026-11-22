export interface NexusModule {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  status: 'live' | 'upcoming' | 'locked';
  route?: string;
  /** Stat shown on the launch button; defaults to the verified findings count. */
  countKey?: 'verifiedFindings' | 'solutionCount' | 'proposalCount' | 'runCount';
  phaseLabel: string;
  accent: 'emerald' | 'sky' | 'amber' | 'slate';
  highlights: string[];
}

/**
 * Central Nexus TN module registry.
 * Adding upcoming modules (Agent Recorded Sessions, Trusted Vendors & Products, etc.)
 * only requires wiring their routes and flipping status to 'live'.
 */
export const NEXUS_MODULES: NexusModule[] = [
  {
    id: 'verified-findings',
    name: 'Verified Findings Blog',
    shortName: 'Findings',
    tagline: 'Source-audited evidence across Tunisia’s water, energy & agriculture nexus',
    description:
      'Every finding record that has passed the source-verifier audit, rendered with structured indicators, inline primary source extracts, root-cause chains, and transparent data gaps.',
    status: 'live',
    route: '/blog',
    phaseLabel: 'Phase 1 · Live',
    accent: 'emerald',
    highlights: [
      'Auto-synced directly from repository Markdown & YAML records',
      'Interactive inline SRC citations with verbatim French, Arabic & English extracts',
      'Cross-sector links across groundwater, grid power, cereals, olives & climate',
    ],
  },
  {
    id: 'agent-sessions',
    name: 'Agent Recorded Sessions',
    shortName: 'Agent Runs',
    tagline: 'Replay how the gateway agent answers a real question',
    description:
      'Step-by-step replays of the gateway agent: the clarifying questions it asks, the findings it searches, the solution audits it reads and the R&D plan it writes, with every claim linked to its record.',
    status: 'live',
    route: '/runs',
    countKey: 'runCount',
    phaseLabel: 'Live',
    accent: 'sky',
    highlights: [
      'Three modes behind one gateway: findings, solutions and R&D',
      'Every message cites FND, SOL, SRC and PRP records you can open',
      'Simulated runs are labelled as such',
    ],
  },
  {
    id: 'trusted-vendors',
    name: 'Trusted Vendors & Products',
    shortName: 'Trusted Vendors',
    tagline: 'Vetted Tunisian hardware, agri-tech, solar & water-efficiency providers',
    description:
      'A curated directory of local and regional suppliers, products, and field-proven technologies audited against real Phase 1 root causes — with conflict-of-interest disclosures.',
    status: 'upcoming',
    phaseLabel: 'Next Module · Planned',
    accent: 'amber',
    highlights: [
      'Smart irrigation, desalination, solar PV, cold-chain & metering providers',
      'Mapped directly to verified FND problem IDs and regional constraints',
      'Transparent conflict-of-interest and field-performance checks',
    ],
  },
  {
    id: 'solution-audits',
    name: 'Solution Audits',
    shortName: 'Solution Audits',
    tagline: 'Do existing products, laws and programmes fix the root cause?',
    description:
      'Phase 2 SOL records: existing solutions scored against the root causes in the verified findings, with their limits, blockers, criticisms, trade-offs for other sectors and conflicts of interest.',
    status: 'live',
    route: '/solutions',
    countKey: 'solutionCount',
    phaseLabel: 'Phase 2 · Live',
    accent: 'amber',
    highlights: [
      'Verdict per solution: solves, partially solves, superficial, counterproductive or unverifiable',
      'Five 0-3 scores, from root-cause coverage to side effects on water, energy and farming',
      'Suggestions from our expert network audited like everything else',
    ],
  },
  {
    id: 'rd-proposals',
    name: 'R&D Proposals',
    shortName: 'R&D',
    tagline: 'From a real case to a phased, scored plan',
    description:
      'Phase 3 PRP records: the case rebuilt as a timeline, its causes mapped, every option scored against seven economist-reviewed guardrails, and a phased plan with an owner and a measure for each step.',
    status: 'live',
    route: '/rnd',
    countKey: 'proposalCount',
    phaseLabel: 'Phase 3 · Live',
    accent: 'emerald',
    highlights: [
      'Options scored on cause, speed, 10-year effect, side effects, cost and fairness, evidence',
      'Guardrails: static vs dynamic effects, rebound, who pays, do not move the problem, causation, honest data, humans decide',
      'States what it does not know and who holds the data',
    ],
  },
];
