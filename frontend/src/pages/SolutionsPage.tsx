import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { AlertTriangle, Scale } from 'lucide-react';
import { SolutionCard } from '../components/SolutionCard';
import { VERDICT_META, VERDICT_ORDER } from '../components/SolutionFormatting';
import type { ResearchIndex, Sector, Verdict } from '../types/research';

interface SolutionsPageProps {
  data: ResearchIndex;
}

const SECTOR_FILTERS: Array<{ id: 'all' | Sector; label: string }> = [
  { id: 'all', label: 'All lanes' },
  { id: 'energy', label: 'Energy' },
  { id: 'water', label: 'Water' },
  { id: 'agriculture', label: 'Agriculture' },
];

/** Phase 2 list: every published SOL record, filterable by verdict and lane. */
export function SolutionsPage({ data }: SolutionsPageProps) {
  const [verdict, setVerdict] = useState<'all' | Verdict>('all');
  const [sector, setSector] = useState<'all' | Sector>('all');
  const { solutions, stats } = data;

  const visible = useMemo(
    () =>
      solutions.filter(
        (s) => (verdict === 'all' || s.verdict === verdict) && (sector === 'all' || s.mainSector === sector)
      ),
    [solutions, verdict, sector]
  );

  const phase2 = data.phases.find((p) => p.number === 2);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 shadow-xs sm:p-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 font-mono text-xs font-semibold text-amber-800">
          <Scale className="h-3.5 w-3.5" />
          Phase 2 · {phase2?.state === 'UNLOCKED' ? 'Unlocked' : 'Locked'}
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Solution Audits
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600 sm:text-base">
          Existing products, laws and programmes, checked against the root causes in our verified
          findings. Each audit asks whether the solution acts on the cause, what the independent
          evidence shows, what blocks it, who criticises it, and what it costs the other sectors.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-5">
          {VERDICT_ORDER.map((v) => (
            <div key={v} className="rounded-xl border border-stone-200 bg-[#FAF8F4] p-3">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${VERDICT_META[v].dot}`} />
                <span className="text-xs font-semibold text-slate-800">{VERDICT_META[v].label}</span>
              </div>
              <div className="mt-1 font-display text-2xl font-bold text-slate-950">{stats.verdictCounts[v] ?? 0}</div>
              <p className="mt-1 text-[11px] leading-snug text-stone-500">{VERDICT_META[v].meaning}</p>
            </div>
          ))}
        </div>
      </div>

      {stats.solutionDraftCount > 0 && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            <strong>
              {stats.solutionDraftCount} of {stats.solutionCount} audits are drafts.
            </strong>{' '}
            They have not yet passed the source check that phase 1 findings went through. Read their
            verdicts as directions, and see each audit's outstanding-verification list before quoting it.
          </p>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <FilterButton active={verdict === 'all'} onClick={() => setVerdict('all')}>
            All verdicts ({solutions.length})
          </FilterButton>
          {VERDICT_ORDER.filter((v) => (stats.verdictCounts[v] ?? 0) > 0).map((v) => (
            <FilterButton key={v} active={verdict === v} onClick={() => setVerdict(v)}>
              {VERDICT_META[v].label} ({stats.verdictCounts[v]})
            </FilterButton>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {SECTOR_FILTERS.map((f) => (
            <FilterButton key={f.id} active={sector === f.id} onClick={() => setSector(f.id)}>
              {f.label}
            </FilterButton>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-stone-300 p-10 text-center text-sm text-stone-500">
          No audits match these filters.
        </p>
      ) : (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s) => (
            <SolutionCard key={s.id} solution={s} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
        active
          ? 'border-slate-900 bg-slate-900 text-white'
          : 'border-stone-200 bg-white text-slate-700 hover:border-slate-300'
      }`}
    >
      {children}
    </button>
  );
}
