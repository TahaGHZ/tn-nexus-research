import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CircleHelp, Lock, PlayCircle, RefreshCw, ShieldCheck } from 'lucide-react';
import { MarkdownArticle } from '../components/MarkdownArticle';
import { SourceModal } from '../components/SourceModal';
import { SECTOR_META, TIER_META } from '../components/ResearchFormatting';
import { VERDICT_META } from '../components/SolutionFormatting';
import type { OptionScoreKey, ProposalDetail, ResearchIndex, SourceRecord } from '../types/research';

interface ProposalDetailPageProps {
  indexData: ResearchIndex;
}

const OPTION_COLUMNS: Array<{ key: OptionScoreKey; label: string }> = [
  { key: 'fixes_cause', label: 'Fixes the cause' },
  { key: 'speed', label: 'Speed' },
  { key: 'effect_10y', label: '10-year effect' },
  { key: 'side_effects', label: 'Side effects (5 = none)' },
  { key: 'cost_fairness', label: 'Cost & fairness' },
  { key: 'evidence', label: 'Evidence' },
];

const PHASES: Array<{ id: string; label: string; tone: string }> = [
  { id: 'now', label: 'Now · weeks', tone: 'border-emerald-300 bg-emerald-50' },
  { id: 'next', label: 'Next · months', tone: 'border-sky-300 bg-sky-50' },
  { id: 'later', label: 'Later · years', tone: 'border-amber-300 bg-amber-50' },
  { id: 'always', label: 'Always', tone: 'border-stone-300 bg-stone-50' },
];

// Body sections that the structured blocks above already show.
const SKIP_SECTIONS = new Set(['options and scores', 'recommended plan']);

function scoreTone(v: number | null) {
  if (v === null) return 'bg-stone-100 text-stone-400';
  if (v >= 4) return 'bg-emerald-100 text-emerald-900';
  if (v === 3) return 'bg-sky-100 text-sky-900';
  if (v === 2) return 'bg-amber-100 text-amber-900';
  return 'bg-rose-100 text-rose-900';
}

/** Phase 3 detail page for one PRP record, loaded from public/data/proposals/<id>.json. */
export function ProposalDetailPage({ indexData }: ProposalDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const [prp, setPrp] = useState<ProposalDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedSource, setSelectedSource] = useState<SourceRecord | null>(null);
  const verifiedIds = useMemo(() => new Set(indexData.findings.map((f) => f.id)), [indexData.findings]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setPrp(null);
    setError(null);
    if (!id || !/^PRP-[A-Z]+-\d+$/.test(id)) {
      setError('Invalid proposal identifier.');
      return;
    }
    let cancelled = false;
    fetch(`./data/proposals/${id}.json`)
      .then((r) => {
        if (!r.ok) throw new Error('Proposal not found.');
        return r.json() as Promise<ProposalDetail>;
      })
      .then((p) => !cancelled && setPrp(p))
      .catch((e: unknown) => !cancelled && setError(e instanceof Error ? e.message : 'Unable to load proposal.'));
    return () => {
      cancelled = true;
    };
  }, [id]);

  const sourcesById = useMemo(() => {
    const m = new Map<string, SourceRecord>();
    for (const s of prp?.resolvedSources || []) m.set(s.id, s);
    return m;
  }, [prp]);

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center text-sm text-stone-600">
        {error}{' '}
        <Link to="/rnd" className="font-semibold text-emerald-800">
          Back to R&amp;D
        </Link>
      </div>
    );
  }
  if (!prp) {
    return <div className="mx-auto h-96 max-w-5xl animate-pulse rounded-3xl bg-stone-200 px-4 py-16" />;
  }

  const sector = SECTOR_META[prp.mainSector] || SECTOR_META.water;
  const md = (content: string) => (
    <MarkdownArticle
      content={content}
      sourcesById={sourcesById}
      verifiedFindingIds={verifiedIds}
      onSelectSource={setSelectedSource}
    />
  );

  return (
    <article className="pb-16">
      <div className="relative h-72 w-full overflow-hidden bg-slate-900">
        <img src={prp.image.url} alt={prp.image.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-end px-4 pb-8 sm:px-6 lg:px-8">
          <Link to="/rnd" className="mb-4 inline-flex w-fit items-center gap-1.5 text-xs text-stone-200 hover:text-white">
            <ArrowLeft className="h-3.5 w-3.5" /> All R&amp;D proposals
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-semibold text-emerald-300">{prp.id}</span>
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${sector.badge}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${sector.dot}`} />
              {sector.label}
            </span>
            <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] text-white">{prp.caseName}</span>
            <span className="rounded-full bg-white/15 px-2.5 py-0.5 font-mono text-[11px] text-white">{prp.status}</span>
          </div>
          <h1 className="mt-3 max-w-4xl font-display text-2xl font-bold leading-tight text-white sm:text-3xl">{prp.title}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-stone-500">The question</p>
              <p className="mt-2 font-display text-lg font-semibold text-slate-900">“{prp.question}”</p>
              {prp.hypothesis && (
                <>
                  <p className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-wider text-stone-500">Hypothesis</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{prp.hypothesis}</p>
                </>
              )}
            </div>

            <Block title="Options scored against the guardrails">
              <div className="overflow-x-auto rounded-xl border border-stone-200">
                <table className="w-full border-collapse text-left text-[13px]">
                  <thead className="bg-stone-100/80">
                    <tr>
                      <th className="px-3 py-2 font-semibold text-slate-900">Option</th>
                      <th className="px-2 py-2 text-center font-semibold text-slate-900">Total /30</th>
                      {OPTION_COLUMNS.map((c) => (
                        <th key={c.key} className="px-2 py-2 text-center text-[11px] font-semibold text-slate-700">
                          {c.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {prp.options.map((o, i) => (
                      <tr key={o.name} className={`border-t border-stone-200/80 ${i === 0 ? 'bg-emerald-50/50' : ''}`}>
                        <td className="px-3 py-2 align-top">
                          <span className="font-medium text-slate-900">{o.name}</span>
                          {o.note && <p className="mt-0.5 text-[11px] leading-snug text-stone-500">{o.note}</p>}
                        </td>
                        <td className="px-2 py-2 text-center font-mono text-sm font-bold text-slate-900">{o.total}</td>
                        {OPTION_COLUMNS.map((c) => (
                          <td key={c.key} className="px-2 py-2 text-center">
                            <span className={`inline-block min-w-7 rounded-md px-1.5 py-0.5 font-mono text-xs font-semibold ${scoreTone(o.scores[c.key])}`}>
                              {o.scores[c.key] ?? '–'}
                            </span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-stone-500">
                Scores run from 1 (poor) to 5 (good). They are a first assessment for operators and experts to challenge.
              </p>
            </Block>

            <Block title="Recommended plan">
              <div className="grid gap-3 sm:grid-cols-2">
                {PHASES.filter((ph) => prp.plan.some((s) => s.phase === ph.id)).map((ph) => (
                  <div key={ph.id} className={`rounded-xl border p-4 ${ph.tone}`}>
                    <p className="font-mono text-xs font-bold uppercase tracking-wide text-slate-700">{ph.label}</p>
                    <ul className="mt-2 space-y-3">
                      {prp.plan
                        .filter((s) => s.phase === ph.id)
                        .map((s, i) => (
                          <li key={i} className="text-sm">
                            <p className="font-medium text-slate-900">{s.action}</p>
                            <p className="mt-0.5 text-xs text-stone-600">
                              Owner: {s.owner || '–'} · Measure: {s.measure || '–'}
                            </p>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Block>

            {prp.guardrails.length > 0 && (
              <Block title="How the guardrails shaped it">
                <div className="grid gap-3 sm:grid-cols-2">
                  {prp.guardrails.map((g) => (
                    <div key={g.id} className="rounded-xl border border-stone-200 p-3.5">
                      <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                        <ShieldCheck className="h-4 w-4 text-emerald-700" />
                        <span className="font-mono text-xs text-emerald-800">{g.id}</span> {g.name}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{g.applied}</p>
                    </div>
                  ))}
                </div>
              </Block>
            )}

            {prp.sections
              .filter((s) => s.content && !SKIP_SECTIONS.has(s.heading.toLowerCase()))
              .map((s) => (
                <section key={s.heading}>
                  <h2 className="font-display text-xl font-bold text-slate-950">{s.heading}</h2>
                  <div className="mt-2">{md(s.content)}</div>
                </section>
              ))}
          </div>

          <aside className="space-y-6 lg:col-span-4">
            {prp.run && (
              <Link
                to={`/runs/${prp.run}`}
                className="flex items-center justify-between rounded-2xl bg-slate-950 p-5 text-white transition hover:bg-slate-800"
              >
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-sky-300">Produced by</span>
                  <span className="font-semibold">Agent run {prp.run}</span>
                </span>
                <PlayCircle className="h-6 w-6 text-sky-300" />
              </Link>
            )}

            {prp.dataNeeded.length > 0 && (
              <Side title="Data still needed">
                <ul className="space-y-2">
                  {prp.dataNeeded.map((d, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <CircleHelp className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                      <span>
                        {d.item} <span className="text-stone-500">· {d.holder}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Side>
            )}

            {prp.rescoreTriggers.length > 0 && (
              <Side title="What would change the ranking">
                <ul className="space-y-2">
                  {prp.rescoreTriggers.map((t, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-700">
                      <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Side>
            )}

            {(prp.validationPath.reviewer || prp.validationPath.pilot) && (
              <Side title="How to test it">
                <dl className="space-y-2 text-sm">
                  {prp.validationPath.reviewer && <Row label="Reviewer" value={prp.validationPath.reviewer} />}
                  {prp.validationPath.pilot && <Row label="Pilot" value={prp.validationPath.pilot} />}
                  {prp.validationPath.roughCost && <Row label="Rough cost" value={prp.validationPath.roughCost} />}
                </dl>
              </Side>
            )}

            <Side title="Findings it addresses">
              <div className="space-y-2">
                {prp.addressItems.map((f) =>
                  f.verified ? (
                    <Link key={f.id} to={`/blog/${f.id}`} className="group block rounded-xl border border-stone-200 p-3 hover:border-emerald-300">
                      <span className="flex items-center justify-between font-mono text-xs font-semibold text-emerald-800">
                        {f.id} <ArrowUpRight className="h-3.5 w-3.5 text-stone-400" />
                      </span>
                      <span className="mt-1 line-clamp-2 text-xs text-slate-900">{f.title}</span>
                    </Link>
                  ) : (
                    <p key={f.id} className="rounded-xl border border-dashed border-stone-200 px-3 py-2 text-xs text-stone-500">
                      <span className="font-mono">{f.id}</span> · not published
                    </p>
                  )
                )}
              </div>
            </Side>

            {prp.buildsOnItems.length > 0 && (
              <Side title="Solution audits it builds on">
                <div className="space-y-2">
                  {prp.buildsOnItems.map((s) => (
                    <Link key={s.id} to={`/solutions/${s.id}`} className="block rounded-xl border border-stone-200 p-3 hover:border-amber-300">
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-semibold text-amber-900">{s.id}</span>
                        {VERDICT_META[s.verdict] && (
                          <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${VERDICT_META[s.verdict].badge}`}>
                            {VERDICT_META[s.verdict].label}
                          </span>
                        )}
                      </span>
                      <span className="mt-1 line-clamp-2 text-xs text-slate-900">{s.name}</span>
                    </Link>
                  ))}
                </div>
              </Side>
            )}

            {prp.contributors.length > 0 && (
              <Side title="Contributors">
                <ul className="space-y-1 text-sm text-slate-700">
                  {prp.contributors.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </Side>
            )}

            <Side title={`Sources (${prp.resolvedSources.length})`}>
              <div className="space-y-1.5">
                {prp.resolvedSources.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedSource(s)}
                    className="flex w-full items-start gap-2 rounded-lg border border-stone-200/80 p-2.5 text-left hover:border-emerald-300"
                  >
                    <span className={`shrink-0 rounded border px-1.5 py-0.5 font-mono text-[10px] font-bold ${TIER_META[s.tier]?.className || ''}`}>
                      {s.tier}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] font-semibold text-emerald-800">
                        {s.id}
                        {s.confidential && <Lock className="ml-1 inline h-3 w-3 text-stone-500" />}
                      </span>
                      <span className="line-clamp-2 text-xs text-slate-800">{s.title}</span>
                    </span>
                  </button>
                ))}
              </div>
            </Side>
          </aside>
        </div>
      </div>
      <SourceModal source={selectedSource} onClose={() => setSelectedSource(null)} />
    </article>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
      <h2 className="font-display text-lg font-bold text-slate-950">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Side({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
      <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-500">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-stone-500">{label}</dt>
      <dd className="text-slate-800">{value}</dd>
    </div>
  );
}
