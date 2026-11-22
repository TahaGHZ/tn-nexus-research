import { Link } from 'react-router-dom';
import { ArrowUpRight, FlaskConical, ListChecks, PlayCircle } from 'lucide-react';
import { SECTOR_META } from '../components/ResearchFormatting';
import type { ResearchIndex } from '../types/research';

interface ProposalsPageProps {
  data: ResearchIndex;
}

/** Phase 3 list: every published PRP record. */
export function ProposalsPage({ data }: ProposalsPageProps) {
  const { proposals } = data;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 shadow-xs sm:p-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-xs font-semibold text-emerald-800">
          <FlaskConical className="h-3.5 w-3.5" />
          Phase 3 · R&amp;D
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">R&amp;D Proposals</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600 sm:text-base">
          Each proposal starts from a real case, rebuilds what happened, maps the causes, scores
          every option against seven guardrails reviewed by an economist, and ends with a phased plan,
          an owner and a measure for each step. Scores are a first assessment for operators and
          experts to challenge; people decide.
        </p>
      </div>

      {proposals.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-stone-300 p-10 text-center text-sm text-stone-500">
          No proposals published yet.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {proposals.map((p) => {
            const sector = SECTOR_META[p.mainSector] || SECTOR_META.water;
            return (
              <Link
                key={p.id}
                to={`/rnd/${p.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xs transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img src={p.image.url} alt={p.image.alt} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-slate-950/55" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${sector.badge}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${sector.dot}`} />
                      {sector.label}
                    </span>
                    <span className="rounded-full bg-slate-950/70 px-2.5 py-0.5 font-mono text-[10px] text-stone-200">
                      {p.status}
                    </span>
                  </div>
                  <div className="absolute right-3 bottom-3 left-3">
                    <span className="font-mono text-[11px] font-semibold text-emerald-300">{p.id}</span>
                    <p className="text-xs text-stone-200">{p.caseName}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold leading-snug text-slate-950 group-hover:text-emerald-800">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone-600">{p.excerpt}</p>
                  {p.topOption && (
                    <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-3 text-sm">
                      <span className="font-mono text-[11px] font-semibold uppercase text-emerald-800">Top option</span>
                      <p className="mt-1 font-medium text-slate-900">
                        {p.topOption.name}{' '}
                        <span className="font-mono text-emerald-800">{p.topOption.total}/30</span>
                      </p>
                    </div>
                  )}
                  <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3 text-xs text-stone-500">
                    <span className="inline-flex items-center gap-3">
                      <span className="inline-flex items-center gap-1">
                        <ListChecks className="h-3.5 w-3.5" /> {p.optionCount} options · {p.planStepCount} plan steps
                      </span>
                      {p.run && (
                        <span className="inline-flex items-center gap-1 text-sky-700">
                          <PlayCircle className="h-3.5 w-3.5" /> {p.run}
                        </span>
                      )}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-stone-400 group-hover:text-slate-900" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
