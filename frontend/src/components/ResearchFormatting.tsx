import type { Confidence, RecordStatus, Sector, Severity, SourceTier, Timeframe, Trend } from '../types/research';

export const SECTOR_META: Record<
  Sector,
  {
    label: string;
    badge: string;
    softBg: string;
    border: string;
    dot: string;
    text: string;
    gradient: string;
    heroPhoto: string;
    heroAlt: string;
    summary: string;
  }
> = {
  water: {
    label: 'Water',
    badge: 'bg-sky-50 text-sky-800 border-sky-200',
    softBg: 'bg-sky-50/70',
    border: 'border-sky-200',
    dot: 'bg-sky-500',
    text: 'text-sky-700',
    gradient: 'from-sky-500 to-cyan-400',
    heroPhoto:
      'https://images.pexels.com/photos/10615217/pexels-photo-10615217.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroAlt: 'Water dam and reservoir storage basin',
    summary:
      'Deep aquifer overdraft, dam siltation, SONEDE network losses, desalination pressure, and salinisation across coastal and oasis basins.',
  },
  energy: {
    label: 'Energy',
    badge: 'bg-amber-50 text-amber-800 border-amber-200',
    softBg: 'bg-amber-50/70',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
    text: 'text-amber-700',
    gradient: 'from-amber-500 to-yellow-400',
    heroPhoto:
      'https://images.pexels.com/photos/37684096/pexels-photo-37684096.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroAlt: 'Solar power station in North African desert landscape',
    summary:
      'Over 90% natural-gas electricity lock-in, stalled renewable capacity, rising summer AC peaks, STEG deficits, and industrial energy exposure.',
  },
  agriculture: {
    label: 'Agriculture',
    badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    softBg: 'bg-emerald-50/70',
    border: 'border-emerald-200',
    dot: 'bg-emerald-500',
    text: 'text-emerald-700',
    gradient: 'from-emerald-500 to-teal-400',
    heroPhoto:
      'https://images.pexels.com/photos/28697751/pexels-photo-28697751.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroAlt: 'Green olives growing in Jendouba, Tunisia',
    summary:
      'Structural soft-wheat import reliance, rainfed olive and cereal volatility, fragmented land tenure, soil erosion, and post-harvest food losses.',
  },
};

export const SEVERITY_META: Record<Severity, { label: string; className: string; dot: string }> = {
  critical: {
    label: 'Critical',
    className: 'bg-rose-50 text-rose-800 border-rose-200',
    dot: 'bg-rose-500',
  },
  high: {
    label: 'High',
    className: 'bg-orange-50 text-orange-800 border-orange-200',
    dot: 'bg-orange-500',
  },
  medium: {
    label: 'Medium',
    className: 'bg-amber-50 text-amber-800 border-amber-200',
    dot: 'bg-amber-500',
  },
  low: {
    label: 'Low',
    className: 'bg-slate-100 text-slate-700 border-slate-200',
    dot: 'bg-slate-400',
  },
};

export const TIMEFRAME_META: Record<Timeframe, { label: string; className: string }> = {
  past: {
    label: 'Past Legacy',
    className: 'bg-stone-100 text-stone-700 border-stone-200',
  },
  current: {
    label: 'Current',
    className: 'bg-sky-50 text-sky-800 border-sky-200',
  },
  predicted: {
    label: 'Projected',
    className: 'bg-violet-50 text-violet-800 border-violet-200',
  },
};

export const CONFIDENCE_META: Record<Confidence, { label: string; className: string }> = {
  high: {
    label: 'High confidence',
    className: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
  medium: {
    label: 'Medium confidence',
    className: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  low: {
    label: 'Low confidence',
    className: 'bg-rose-50 text-rose-800 border-rose-200',
  },
};

export const TREND_META: Record<Trend, { label: string; symbol: string; className: string }> = {
  worsening: {
    label: 'Worsening',
    symbol: '↗',
    className: 'text-rose-700 bg-rose-50 border-rose-200',
  },
  stable: {
    label: 'Stable',
    symbol: '→',
    className: 'text-slate-700 bg-slate-100 border-slate-200',
  },
  improving: {
    label: 'Improving',
    symbol: '↘',
    className: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  },
  unknown: {
    label: 'Trend unconfirmed',
    symbol: '?',
    className: 'text-stone-600 bg-stone-100 border-stone-200',
  },
};

export const STATUS_META: Record<RecordStatus, { label: string; className: string }> = {
  validated: {
    label: 'Peer-Validated',
    className: 'bg-emerald-100 text-emerald-900 border-emerald-300',
  },
  'in-review': {
    label: 'Source-Verified',
    className: 'bg-teal-50 text-teal-800 border-teal-200',
  },
  draft: {
    label: 'Draft',
    className: 'bg-stone-100 text-stone-600 border-stone-200',
  },
  rejected: {
    label: 'Rejected',
    className: 'bg-rose-100 text-rose-800 border-rose-300',
  },
};

export const TIER_META: Record<SourceTier, { label: string; short: string; className: string }> = {
  A: {
    label: 'Tier A · Official Statistics / Peer-Reviewed',
    short: 'Tier A',
    className: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
  B: {
    label: 'Tier B · Institutional / Donor Report',
    short: 'Tier B',
    className: 'bg-sky-50 text-sky-800 border-sky-200',
  },
  C: {
    label: 'Tier C · Press / Secondary Material',
    short: 'Tier C',
    className: 'bg-amber-50 text-amber-800 border-amber-200',
  },
};

export function formatTheme(theme: string): string {
  if (!theme) return 'General';
  return theme
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function formatGeography(geo: string): string {
  if (!geo) return '';
  return geo
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function safeExternalUrl(raw: string): string | null {
  if (!raw) return null;
  try {
    const parsed = new URL(raw.trim());
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return parsed.toString();
    }
    return null;
  } catch {
    return null;
  }
}
