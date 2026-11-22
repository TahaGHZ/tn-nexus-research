import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  Ban,
  FileCheck2,
  Flag,
  GitBranch,
  Lock,
  MessageSquareWarning,
  Scale,
  Target,
} from 'lucide-react';
import { MarkdownArticle } from '../components/MarkdownArticle';
import { SourceModal } from '../components/SourceModal';
import { SECTOR_META, STATUS_META, TIER_META, TierMixBar } from '../components/ResearchFormatting';
import {
  ASSESSMENT_META,
  ScoreBars,
  VERDICT_META,
  VERIFIED_META,
  formatLabel,
} from '../components/SolutionFormatting';
import type { FindingRef, ResearchIndex, SolutionDetail, SourceRecord } from '../types/research';

interface SolutionDetailPageProps {
  indexData: ResearchIndex;
}

// Sections already rendered from structured frontmatter are not repeated from the body.
const STRUCTURED_HEADINGS = new Set(['verification']);

/** Phase 2 detail page for one SOL record, loaded from public/data/solutions/<id>.json. */
export function SolutionDetailPage({ indexData }: SolutionDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const [solution, setSolution] = useState<SolutionDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedSource, setSelectedSource] = useState<SourceRecord | null>(null);

  const verifiedIds = useMemo(
    () => new Set(indexData.findings.map((f) => f.id)),
    [indexData.findings]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setSolution(null);
    setError(null);
    if (!id || !/^SOL-[A-Z]+-\d+$/.test(id)) {
      setError('Invalid solution identifier.');
      return;
    }
    let cancelled = false;
    fetch(`./data/solutions/${id}.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Solution audit not found.');
        return res.json() as Promise<SolutionDetail>;
      })
      .then((payload) => !cancelled && setSolution(payload))
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Unable to load audit.');
      });
    return () => {
      cancelled = true;
    };
  }, [id]);

  const sourcesById = useMemo(() => {
    const map = new Map<string, SourceRecord>();
    for (const s of solution?.resolvedSources || []) map.set(s.id, s);
    return map;
  }, [solution]);

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-sm text-stone-600">{error}</p>
        <Link to="/solutions" className="mt-4 inline-block text-sm font-semibold text-emerald-800">
          Back to solution audits
        </Link>
      </div>
    );
  }

  if (!solution) {
    return (
      <div className="mx-auto max-w-5xl animate-pulse space-y-6 px-4 py-16">
        <div className="h-6 w-40 rounded bg-stone-200" />
        <div className="h-64 rounded-3xl bg-stone-200" />
      </div>
    );
  }

  const verdict = VERDICT_META[solution.verdict] || VERDICT_META.unverifiable;
  const sector = SECTOR_META[solution.mainSector] || SECTOR_META.water;
  const status = STATUS_META[solution.status] || STATUS_META.draft;
  const hasConflict = solution.conflictOfInterest && !/^none\b/i.test(solution.conflictOfInterest);

  // Renders "SRC-TG-123" style ids as buttons that open the source drawer.
  const SrcRefs = ({ text }: { text: string }) => {
    const ids = text.match(/\bSRC-[A-Z]+-\d+\b/g) || [];
    if (ids.length === 0) {
      return <span className="font-mono text-[11px] text-stone-400">{text || 'no source'}</span>;
    }
    return (
      <span className="inline-flex flex-wrap gap-1">
        {ids.map((sid) => {
          const src = sourcesById.get(sid);
          return src ? (
            <button
              key={sid}
              type="button"
              onClick={() => setSelectedSource(src)}
              className="rounded border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-800 hover:bg-emerald-100"
            >
              {sid}
            </button>
          ) : (
            <span key={sid} className="font-mono text-[11px] text-stone-400">
              {sid}
            </span>
          );
        })}
      </span>
    );
  };

  const bodySections = solution.sections.filter(
    (s) => s.content && !STRUCTURED_HEADINGS.has(s.heading.toLowerCase())
  );

  return (
    <article className="pb-16">
      {/* Hero */}
      <div className="relative h-72 w-full overflow-hidden bg-slate-900 sm:h-80">
        <img src={solution.image.url} alt={solution.image.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-end px-4 pb-8 sm:px-6 lg:px-8">
          <Link
            to="/solutions"
            className="mb-4 inline-flex w-fit items-center gap-1.5 text-xs font-medium text-stone-200 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All solution audits
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-semibold text-emerald-300">{solution.id}</span>
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${sector.badge}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${sector.dot}`} />
              {sector.label}
            </span>
            <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-medium text-white">
              {formatLabel(solution.type)} · {formatLabel(solution.statusInTunisia || 'unknown')} in Tunisia
            </span>
          </div>
          <h1 className="mt-3 max-w-4xl font-display text-2xl font-bold leading-tight text-white sm:text-4xl">
            {solution.name}
          </h1>
          <p className="mt-2 text-sm text-stone-300">Owner: {solution.owner || 'not stated'}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Verdict strip */}
        <div className="-mt-6 relative z-10 flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-md sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-bold ${verdict.badge}`}>
              <Scale className="h-4 w-4" />
              {verdict.label}
            </span>
            <p className="text-sm text-stone-600">{verdict.meaning}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold text-slate-900">
              {solution.scoreTotal}/{solution.scoreMax}
            </span>
            <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${status.className}`}>
              <FileCheck2 className="h-3.5 w-3.5" />
              {solution.status === 'draft' ? 'Draft audit' : status.label}
            </span>
          </div>
        </div>

        {solution.status === 'draft' && (
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>
              <strong>Draft audit.</strong> This record has not yet passed the independent source check.
              Its verdict is a direction, not a settled result.
              {solution.outstanding && <> Still to check: {solution.outstanding}</>}
            </p>
          </div>
        )}

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            {/* Claims */}
            {solution.claims.length > 0 && (
              <Panel title="What it claims, and whether that holds" icon={<Flag className="h-4 w-4" />}>
                <div className="space-y-3">
                  {solution.claims.map((c, i) => {
                    const v = VERIFIED_META[c.verified] || VERIFIED_META.no;
                    return (
                      <div key={i} className="rounded-xl border border-stone-200 bg-[#FAF8F4]/70 p-4">
                        <p className="text-sm leading-relaxed text-slate-900">{c.claim}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${v.className}`}>
                            {v.label}
                          </span>
                          <SrcRefs text={c.evidence} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Panel>
            )}

            {/* Limits and blockers */}
            {(solution.limits.length > 0 || solution.blockers.length > 0) && (
              <Panel title="Limits and blockers" icon={<Ban className="h-4 w-4" />}>
                {solution.limits.length > 0 && (
                  <ul className="space-y-2">
                    {solution.limits.map((l, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-800">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                        {l}
                      </li>
                    ))}
                  </ul>
                )}
                {solution.blockers.length > 0 && (
                  <div className="mt-4 space-y-2.5">
                    {solution.blockers.map((b, i) => (
                      <div key={i} className="rounded-xl border border-stone-200 p-3.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-slate-900 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-white">
                            {b.type || 'blocker'}
                          </span>
                          <SrcRefs text={b.source} />
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate-800">{b.blocker}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Panel>
            )}

            {/* Criticisms */}
            {solution.criticisms.length > 0 && (
              <Panel title="Criticisms" icon={<MessageSquareWarning className="h-4 w-4" />}>
                <div className="space-y-2.5">
                  {solution.criticisms.map((c, i) => (
                    <div key={i} className="rounded-xl border border-stone-200 p-3.5">
                      <p className="text-sm leading-relaxed text-slate-800">{c.criticism}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-stone-500">
                        <span>From: {c.from || 'not stated'}</span>
                        {c.assessment && (
                          <span className={`rounded-full border px-2 py-0.5 text-[11px] font-semibold ${ASSESSMENT_META[c.assessment] || ASSESSMENT_META.unsupported}`}>
                            {formatLabel(c.assessment)}
                          </span>
                        )}
                        <SrcRefs text={c.source} />
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            )}

            {/* Trade-offs */}
            {solution.tradeOffs.length > 0 && (
              <Panel title="Trade-offs for other sectors" icon={<GitBranch className="h-4 w-4" />}>
                <div className="space-y-2.5">
                  {solution.tradeOffs.map((t, i) => (
                    <div key={i} className="rounded-xl border border-stone-200 p-3.5">
                      <p className="text-sm leading-relaxed text-slate-800">{t.effect}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-stone-500">
                        <span>On: {t.on || 'not stated'}</span>
                        {t.horizon && (
                          <span className="rounded-full bg-stone-100 px-2 py-0.5 font-mono text-[10px]">
                            {t.horizon}
                          </span>
                        )}
                        <SrcRefs text={t.source} />
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            )}

            {solution.gapLeft && (
              <Panel title="Gap left even if it works" icon={<Target className="h-4 w-4" />}>
                <p className="text-sm leading-relaxed text-slate-800">{solution.gapLeft}</p>
              </Panel>
            )}

            {/* Full audit narrative from the Markdown body */}
            {bodySections.map((sec) => (
              <section key={sec.heading}>
                <h2 className="font-display text-xl font-bold text-slate-950">{sec.heading}</h2>
                <div className="mt-3">
                  <MarkdownArticle
                    content={sec.content}
                    sourcesById={sourcesById}
                    verifiedFindingIds={verifiedIds}
                    onSelectSource={setSelectedSource}
                  />
                </div>
              </section>
            ))}
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <SideCard title="Audit scores">
              <ScoreBars scores={solution.scores} />
            </SideCard>

            {hasConflict && (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <h3 className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-rose-800">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  Conflict of interest
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-rose-900">{solution.conflictOfInterest}</p>
              </div>
            )}

            {solution.greenwashingFlags.length > 0 && (
              <SideCard title="Greenwashing flags">
                <ul className="space-y-2">
                  {solution.greenwashingFlags.map((g, i) => (
                    <li key={i} className="text-sm leading-relaxed text-slate-800">
                      {g}
                    </li>
                  ))}
                </ul>
              </SideCard>
            )}

            <SideCard title="Findings it targets">
              <FindingLinks items={solution.targetItems} />
            </SideCard>

            {solution.createsItems.length > 0 && (
              <SideCard title="Findings it worsens">
                <FindingLinks items={solution.createsItems} />
              </SideCard>
            )}

            <SideCard title={`Sources (${solution.resolvedSources.length})`}>
              <TierMixBar mix={solution.tierMix} />
              <div className="mt-3 space-y-1.5">
                {solution.resolvedSources.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedSource(s)}
                    className="flex w-full items-start gap-2 rounded-lg border border-stone-200/80 p-2.5 text-left transition hover:border-emerald-300 hover:bg-emerald-50/40"
                  >
                    <span className={`shrink-0 rounded border px-1.5 py-0.5 font-mono text-[10px] font-bold ${TIER_META[s.tier]?.className || ''}`}>
                      {s.tier}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] font-semibold text-emerald-800">
                        {s.id}
                        {s.confidential && (
                          <Lock className="ml-1 inline h-3 w-3 text-stone-500" aria-label="confidential" />
                        )}
                      </span>
                      <span className="line-clamp-2 text-xs text-slate-800">{s.title}</span>
                    </span>
                  </button>
                ))}
              </div>
            </SideCard>
          </aside>
        </div>
      </div>

      <SourceModal source={selectedSource} onClose={() => setSelectedSource(null)} />
    </article>
  );
}

function Panel({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
      <h2 className="flex items-center gap-2 font-display text-lg font-bold text-slate-950">
        <span className="text-emerald-700">{icon}</span>
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function SideCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-500">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function FindingLinks({ items }: { items: FindingRef[] }) {
  return (
    <div className="space-y-2">
      {items.map((f) =>
        f.verified ? (
          <Link
            key={f.id}
            to={`/blog/${f.id}`}
            className="group block rounded-xl border border-stone-200/80 bg-[#FAF8F4]/70 p-3 transition hover:border-emerald-300 hover:bg-emerald-50/40"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-emerald-800">{f.id}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-stone-400 group-hover:text-emerald-800" />
            </div>
            <p className="mt-1 line-clamp-2 text-xs font-medium leading-snug text-slate-900">{f.title}</p>
          </Link>
        ) : (
          <div
            key={f.id}
            className="rounded-xl border border-dashed border-stone-200 bg-stone-50 px-3 py-2.5 text-xs text-stone-500"
          >
            <span className="font-mono font-semibold">{f.id}</span> · draft finding, not published
          </div>
        )
      )}
    </div>
  );
}
