export type Sector = 'water' | 'energy' | 'agriculture';
export type Timeframe = 'past' | 'current' | 'predicted';
export type Severity = 'low' | 'medium' | 'high' | 'critical';
export type Trend = 'worsening' | 'stable' | 'improving' | 'unknown';
export type Confidence = 'low' | 'medium' | 'high';
export type RecordStatus = 'draft' | 'in-review' | 'validated' | 'rejected';
export type SourceTier = 'A' | 'B' | 'C';
export type TrustLevel = 'strong' | 'solid' | 'mixed' | 'weak';

export interface TierMix {
  A: number;
  B: number;
  C: number;
}

export interface CuratedImage {
  url: string;
  alt: string;
  credit: string;
}

export interface Indicator {
  name: string;
  value: string;
  unit: string;
  year: string;
  geography: string;
  source: string;
}

export interface RootCause {
  cause: string;
  type: string;
  legacyDecision: boolean;
  sources: string[];
}

export interface Projection {
  horizon: string;
  scenario: string;
  method: string;
  source: string;
}

export interface MarkdownSection {
  heading: string;
  content: string;
}

export interface SourceRecord {
  id: string;
  title: string;
  publisher: string;
  year: string | number | null;
  type: string;
  tier: SourceTier;
  url: string;
  accessed: string;
  language: string;
  addedBy: string;
  extracts: string;
  notes: string;
  /** True when the source was shared privately: its URL and extracts are withheld from the site. */
  confidential?: boolean;
}

export interface RelatedFindingItem {
  id: string;
  verified: boolean;
  title?: string;
  mainSector?: Sector;
  theme?: string;
  severity?: Severity;
  timeframe?: Timeframe;
}

export interface FindingSummary {
  id: string;
  slug: string;
  title: string;
  status: RecordStatus;
  sectors: Sector[];
  mainSector: Sector;
  theme: string;
  timeframe: Timeframe;
  period: string;
  geography: string[];
  severity: Severity;
  trend: Trend;
  confidence: Confidence;
  excerpt: string;
  readTimeMinutes: number;
  indicatorCount: number;
  sourceCount: number;
  citedSourceCount: number;
  tierMix: TierMix;
  trust: TrustLevel;
  trustReasons: string[];
  dataGapCount: number;
  topIndicator: Indicator | null;
  stakeholders: string[];
  hasProjection: boolean;
  isCrossSector: boolean;
  image: CuratedImage;
  author: string;
}

export interface FindingDetail extends Omit<FindingSummary, 'indicatorCount' | 'sourceCount' | 'topIndicator' | 'hasProjection' | 'isCrossSector'> {
  rootCauses: RootCause[];
  indicators: Indicator[];
  projection: Projection | null;
  related: string[];
  sources: string[];
  dataGaps: string[];
  sections: MarkdownSection[];
  resolvedSources: SourceRecord[];
  relatedItems: RelatedFindingItem[];
  /** Phase 2 solution audits whose `targets` include this finding. */
  auditedSolutions?: SolutionRef[];
}

// ---------- Phase 2: solution audits (SOL records) ----------

export type Verdict =
  | 'solves'
  | 'partially-solves'
  | 'superficial'
  | 'counterproductive'
  | 'unverifiable';

export type ScoreKey =
  | 'root_cause_coverage'
  | 'evidence_quality'
  | 'adoption'
  | 'side_effects'
  | 'cost_accessibility';

export interface SolutionRef {
  id: string;
  name: string;
  verdict: Verdict;
  status: RecordStatus;
}

export interface SolutionClaim {
  claim: string;
  evidence: string;
  verified: string;
}

export interface SolutionBlocker {
  blocker: string;
  type: string;
  source: string;
}

export interface SolutionCriticism {
  criticism: string;
  from: string;
  source: string;
  assessment: string;
}

export interface SolutionTradeOff {
  effect: string;
  on: string;
  horizon: string;
  source: string;
}

export interface FindingRef {
  id: string;
  verified: boolean;
  title?: string;
  mainSector?: Sector;
}

export interface SolutionSummary {
  id: string;
  slug: string;
  name: string;
  status: RecordStatus;
  type: string;
  owner: string;
  mainSector: Sector;
  targets: string[];
  creates: string[];
  statusInTunisia: string;
  verdict: Verdict;
  scores: Record<ScoreKey, number | null>;
  scoreTotal: number;
  scoreMax: number;
  greenwashingFlags: string[];
  gapLeft: string;
  conflictOfInterest: string;
  sources: string[];
  author: string;
  outstanding: string;
  excerpt: string;
  readTimeMinutes: number;
  image: CuratedImage;
  citedSourceIds: string[];
  tierMix: TierMix;
  claimCount: number;
  blockerCount: number;
  criticismCount: number;
  tradeOffCount: number;
}

export interface SolutionDetail
  extends Omit<SolutionSummary, 'claimCount' | 'blockerCount' | 'criticismCount' | 'tradeOffCount'> {
  claims: SolutionClaim[];
  limits: string[];
  blockers: SolutionBlocker[];
  criticisms: SolutionCriticism[];
  tradeOffs: SolutionTradeOff[];
  sections: MarkdownSection[];
  targetItems: FindingRef[];
  createsItems: FindingRef[];
  resolvedSources: SourceRecord[];
}


export interface PhaseInfo {
  number: number;
  name: string;
  state: 'UNLOCKED' | 'LOCKED';
}

export interface SiteStats {
  totalFindingsInRepo: number;
  verifiedFindings: number;
  inReviewFindings: number;
  peerValidatedFindings: number;
  draftFindings: number;
  totalSources: number;
  sourceTiers: { A: number; B: number; C: number };
  sectorCounts: { water: number; energy: number; agriculture: number };
  timeframeCounts: { past: number; current: number; predicted: number };
  themeCount: number;
  trustCounts: Record<TrustLevel, number>;
  confidenceCounts: Record<Confidence, number>;
  severityCounts: Record<Severity, number>;
  trendCounts: Record<Trend, number>;
  totalIndicators: number;
  totalDataGaps: number;
  projectionCount: number;
  nexusCount: number;
  citedSources: number;
  solutionCount: number;
  solutionDraftCount: number;
  verdictCounts: Record<Verdict, number>;
}

export interface ResearchIndex {
  generatedAt: string;
  stats: SiteStats;
  phases: PhaseInfo[];
  themes: string[];
  findings: FindingSummary[];
  solutions: SolutionSummary[];
}
