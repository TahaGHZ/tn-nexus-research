export interface NexusModule {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  status: 'live' | 'upcoming' | 'locked';
  route?: string;
  /** Stat shown on the launch button; defaults to the verified findings count. */
  countKey?: 'verifiedFindings' | 'solutionCount';
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
    shortName: 'Agent Sessions',
    tagline: 'Replayable transcripts and audit logs from autonomous research runs',
    description:
      'Inspect how parallel research agents investigate a Tunisian policy, query official ONEM/DGRE/ONAGRI statistics, cross-check anomalies, and pass source-verifier reviews.',
    status: 'upcoming',
    phaseLabel: 'Next Module · Planned',
    accent: 'sky',
    highlights: [
      'Step-by-step investigator & source-verifier session recordings',
      'Full provenance trail from raw PDF table extraction to structured YAML',
      'Diffable verifier corrections and confidence rationales',
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
      'Vendor proposals audited like everything else, with conflicts of interest shown',
    ],
  },
  {
    id: 'rd-proposals',
    name: 'R&D Proposals',
    shortName: 'Phase 3',
    tagline: 'Designing field-ready pilots for the gaps the audits leave open',
    description:
      'Once Phase 3 is unlocked in PHASES.md, PRP records will populate here: the gap each proposal fills, its hypothesis, the pilot that would test it and the experts asked to review it.',
    status: 'locked',
    phaseLabel: 'Phase 3 · Locked',
    accent: 'slate',
    highlights: [
      'Proposals built on the gaps and blockers found in Phase 2',
      'A named reviewer, a minimal pilot and a rough cost for each',
      'Linked expert directory with full disclosure tracking',
    ],
  },
];
