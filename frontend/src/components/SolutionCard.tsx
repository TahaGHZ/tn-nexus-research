import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowUpRight, FileCheck2, Scale } from 'lucide-react';
import type { SolutionSummary } from '../types/research';
import { SECTOR_META, STATUS_META, TierMixBar } from './ResearchFormatting';
import { ScoreBars, VERDICT_META, formatLabel } from './SolutionFormatting';

interface SolutionCardProps {
  solution: SolutionSummary;
}

/** Card for one phase 2 solution audit on the /solutions list. */
export function SolutionCard({ solution }: SolutionCardProps) {
  const verdict = VERDICT_META[solution.verdict] || VERDICT_META.unverifiable;
  const sector = SECTOR_META[solution.mainSector] || SECTOR_META.water;
  const status = STATUS_META[solution.status] || STATUS_META.draft;

  return (
    <Link
      to={`/solutions/${solution.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg"
    >
      <div className="relative h-40 w-full overflow-hidden bg-slate-900">
        <img
          src={solution.image.url}
          alt={solution.image.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute top-3 right-3 left-3 flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold backdrop-blur-sm ${sector.badge}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${sector.dot}`} />
            {sector.label}
          </span>
          <span className="rounded-full bg-slate-950/75 px-2 py-0.5 font-mono text-[10px] font-medium text-stone-200 backdrop-blur-sm">
            {formatLabel(solution.type)}
          </span>
        </div>
        <div className="absolute right-3 bottom-3 left-3 flex items-end justify-between gap-2">
          <span className="font-mono text-[11px] font-semibold tracking-wide text-emerald-300">
            {solution.id}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold ${verdict.badge}`}
          >
            <Scale className="h-3.5 w-3.5" />
            {verdict.label}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-[11px]">
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-medium ${status.className}`}
          >
            <FileCheck2 className="h-3 w-3" />
            {solution.status === 'draft' ? 'Draft audit' : status.label}
          </span>
          {solution.conflictOfInterest && !/^none\b/i.test(solution.conflictOfInterest) && (
            <span className="inline-flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 px-2 py-0.5 font-medium text-rose-800">
              <AlertTriangle className="h-3 w-3" />
              Conflict of interest
            </span>
          )}
          <span className="font-mono text-stone-500">
            {solution.scoreTotal}/{solution.scoreMax}
          </span>
        </div>

        <h3 className="mt-3 line-clamp-3 font-display text-[17px] font-bold leading-snug text-slate-950 transition-colors group-hover:text-emerald-800">
          {solution.name}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone-600">{solution.excerpt}</p>

        <div className="mt-4 flex-1">
          <ScoreBars scores={solution.scores} compact />
        </div>

        <TierMixBar mix={solution.tierMix} className="mt-4" />

        <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3.5 text-xs text-stone-500">
          <span>
            Targets <span className="font-mono font-semibold text-slate-800">{solution.targets.length}</span>{' '}
            findings · <span className="font-mono font-semibold text-emerald-700">{solution.citedSourceIds.length} SRC</span>
          </span>
          <ArrowUpRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-900" />
        </div>
      </div>
    </Link>
  );
}
