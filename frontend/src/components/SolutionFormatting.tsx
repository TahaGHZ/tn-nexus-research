import type { ScoreKey, Verdict } from '../types/research';

/**
 * Display metadata for phase 2 solution audits (SOL records).
 * Verdicts and score keys mirror templates/solution.md in the research repository.
 */
export const VERDICT_ORDER: Verdict[] = [
  'solves',
  'partially-solves',
  'superficial',
  'counterproductive',
  'unverifiable',
];

export const VERDICT_META: Record<
  Verdict,
  { label: string; badge: string; dot: string; meaning: string }
> = {
  solves: {
    label: 'Solves',
    badge: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    dot: 'bg-emerald-500',
    meaning: 'Acts on the root cause, and the evidence shows it working.',
  },
  'partially-solves': {
    label: 'Partially solves',
    badge: 'bg-sky-100 text-sky-900 border-sky-300',
    dot: 'bg-sky-500',
    meaning: 'Helps with part of the problem but leaves a root cause untouched.',
  },
  superficial: {
    label: 'Superficial',
    badge: 'bg-amber-100 text-amber-900 border-amber-300',
    dot: 'bg-amber-500',
    meaning: 'Acts on symptoms or a small slice of the problem, not on its cause.',
  },
  counterproductive: {
    label: 'Counterproductive',
    badge: 'bg-rose-100 text-rose-900 border-rose-300',
    dot: 'bg-rose-500',
    meaning: 'Moves the problem elsewhere or makes the target problem worse.',
  },
  unverifiable: {
    label: 'Unverifiable',
    badge: 'bg-stone-200 text-stone-700 border-stone-300',
    dot: 'bg-stone-500',
    meaning: 'The claims cannot be checked against independent evidence.',
  },
};

export const SCORE_KEYS: ScoreKey[] = [
  'root_cause_coverage',
  'evidence_quality',
  'adoption',
  'side_effects',
  'cost_accessibility',
];

export const SCORE_META: Record<ScoreKey, { label: string; hint: string }> = {
  root_cause_coverage: {
    label: 'Root-cause coverage',
    hint: 'Does it act on the causes documented in the targeted findings?',
  },
  evidence_quality: {
    label: 'Evidence quality',
    hint: 'How strong is the independent evidence that it works?',
  },
  adoption: { label: 'Adoption', hint: 'How widely is it used in Tunisia today?' },
  side_effects: {
    label: 'Side effects',
    hint: '3 means none known; 0 means it moves or worsens the problem.',
  },
  cost_accessibility: {
    label: 'Cost & access',
    hint: 'Can the people who need it afford and obtain it?',
  },
};

export const ASSESSMENT_META: Record<string, string> = {
  supported: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  'partly-supported': 'bg-amber-50 text-amber-800 border-amber-200',
  unsupported: 'bg-stone-100 text-stone-600 border-stone-200',
};

export const VERIFIED_META: Record<string, { label: string; className: string }> = {
  yes: { label: 'Verified', className: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  partial: { label: 'Partly verified', className: 'bg-amber-50 text-amber-800 border-amber-200' },
  no: { label: 'Not verified', className: 'bg-rose-50 text-rose-800 border-rose-200' },
};

export function formatLabel(value: string): string {
  return value
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Five 0-3 bars, one per audit dimension. */
export function ScoreBars({
  scores,
  compact = false,
}: {
  scores: Record<ScoreKey, number | null>;
  compact?: boolean;
}) {
  return (
    <div className={compact ? 'space-y-1.5' : 'space-y-3'}>
      {SCORE_KEYS.map((key) => {
        const value = scores[key];
        const meta = SCORE_META[key];
        return (
          <div key={key} title={meta.hint}>
            <div className="flex items-center justify-between text-xs">
              <span className={compact ? 'text-stone-500' : 'font-medium text-slate-700'}>
                {meta.label}
              </span>
              <span className="font-mono font-semibold text-slate-900">
                {value === null ? '–' : value}/3
              </span>
            </div>
            <div className="mt-1 grid grid-cols-3 gap-1">
              {[1, 2, 3].map((step) => (
                <span
                  key={step}
                  className={`h-1.5 rounded-full ${
                    value !== null && value >= step
                      ? value >= 3
                        ? 'bg-emerald-500'
                        : value === 2
                          ? 'bg-sky-500'
                          : 'bg-amber-500'
                      : 'bg-stone-200'
                  }`}
                />
              ))}
            </div>
            {!compact && <p className="mt-1 text-[11px] leading-snug text-stone-500">{meta.hint}</p>}
          </div>
        );
      })}
    </div>
  );
}
