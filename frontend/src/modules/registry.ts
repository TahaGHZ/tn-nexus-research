export interface NexusModule {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  status: 'live' | 'upcoming' | 'locked';
  route?: string;
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
    id: 'solution-validation',
    name: 'Solution Audits & R&D Proposals',
    shortName: 'Phase 2 & 3',
    tagline: 'Auditing existing laws & programmes before designing field-ready R&D',
    description:
      'Once Phase 1 teammate validation unlocks Phase 2 and Phase 3 in PHASES.md, SOL and PRP records will automatically populate here alongside expert reviews.',
    status: 'locked',
    phaseLabel: 'Phase 2–3 · Locked',
    accent: 'slate',
    highlights: [
      'Phase 2 SOL audits: do existing laws and subsidies fix the root cause?',
      'Phase 3 PRP proposals: targeted pilots and expert testbeds in Tunisia',
      'Linked expert directory with full disclosure tracking',
    ],
  },
];
