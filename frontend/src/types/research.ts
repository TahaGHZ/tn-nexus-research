export type Sector = 'water' | 'energy' | 'agriculture';
export type Timeframe = 'past' | 'current' | 'predicted';
export type Severity = 'low' | 'medium' | 'high' | 'critical';
export type Trend = 'worsening' | 'stable' | 'improving' | 'unknown';
export type Confidence = 'low' | 'medium' | 'high';
export type RecordStatus = 'draft' | 'in-review' | 'validated' | 'rejected';
export type SourceTier = 'A' | 'B' | 'C';

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
}

export interface ResearchIndex {
  generatedAt: string;
  stats: SiteStats;
  phases: PhaseInfo[];
  themes: string[];
  findings: FindingSummary[];
}
