import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Bot, ChevronDown, FlaskConical, Info, List, ListOrdered, User, Wrench } from 'lucide-react';
import { MarkdownArticle } from '../components/MarkdownArticle';
import { PixelGolem } from '../components/PixelGolem';
import type { GolemAnimation, GolemMode } from '../components/PixelGolem';
import { SourceModal } from '../components/SourceModal';
import type { ResearchIndex, RunDetail, RunStep, SourceRecord } from '../types/research';

interface RunReplayPageProps {
  indexData: ResearchIndex;
}

const MODE_META: Record<string, { label: string; className: string }> = {
  gateway: { label: 'Gateway', className: 'bg-slate-100 text-slate-700 ring-slate-200' },
  findings: { label: 'Findings', className: 'bg-emerald-50 text-emerald-800 ring-emerald-200' },
  solutions: { label: 'Solutions', className: 'bg-amber-50 text-amber-900 ring-amber-200' },
  rnd: { label: 'R&D', className: 'bg-sky-50 text-sky-800 ring-sky-200' },
};

const SECTOR_ANIMATION: Record<string, GolemAnimation> = {
  water: 'rain',
  energy: 'charge',
  agriculture: 'bloom',
};
const NEXUS_MOVES: GolemAnimation[] = ['scan', 'wave', 'stomp'];

/**
 * The mascot follows the step on screen: it waves for the person's messages, scans for tool
 * steps, and for the agent's messages plays the move of the step's sector (rain for water,
 * charge for energy, bloom for agriculture, a random move for cross-sector steps).
 * In the full-conversation view it plays its own random idle moves.
 */
function golemFor(step: RunStep | undefined, active: boolean): { animation: GolemAnimation; mode: GolemMode } {
  if (!step || !active) return { animation: 'auto', mode: 'nexus' };
  const mode: GolemMode = (['water', 'energy', 'agriculture'] as string[]).includes(step.sector)
    ? (step.sector as GolemMode)
    : 'nexus';
  if (step.role === 'user') return { animation: 'wave', mode: 'nexus' };
  if (step.role === 'tool') return { animation: 'scan', mode };
  return { animation: SECTOR_ANIMATION[step.sector] || NEXUS_MOVES[step.n % NEXUS_MOVES.length], mode };
}

/**
 * Shows one RUN record. Step by step: nothing plays on its own; each click on "Next step"
 * reveals one more step, and an agent message streams in as it appears. Full conversation:
 * every step at once.
 */
export function RunReplayPage({ indexData }: RunReplayPageProps) {
  const { id } = useParams<{ id: string }>();
  const [run, setRun] = useState<RunDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<'step' | 'full'>('step');
  const [shown, setShown] = useState(1); // steps visible in the step-by-step view
  const [typed, setTyped] = useState(0); // characters streamed in the newest agent step
  const [selectedSource, setSelectedSource] = useState<SourceRecord | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const verifiedIds = useMemo(() => new Set(indexData.findings.map((f) => f.id)), [indexData.findings]);

  useEffect(() => {
    setRun(null);
    setError(null);
    setShown(1);
    setTyped(0);
    if (!id || !/^RUN-[A-Z]+-\d+$/.test(id)) {
      setError('Invalid run identifier.');
      return;
    }
    let cancelled = false;
    fetch(`./data/runs/${id}.json`)
      .then((r) => {
        if (!r.ok) throw new Error('Run not found.');
        return r.json() as Promise<RunDetail>;
      })
      .then((r) => !cancelled && setRun(r))
      .catch((e: unknown) => !cancelled && setError(e instanceof Error ? e.message : 'Unable to load run.'));
    return () => {
      cancelled = true;
    };
  }, [id]);

  const sourcesById = useMemo(() => {
    const m = new Map<string, SourceRecord>();
    for (const s of run?.resolvedSources || []) m.set(s.id, s);
    return m;
  }, [run]);

  const total = run?.steps.length || 0;
  const isFull = view === 'full';
  const visible = isFull ? total : Math.min(shown, total);
  const current = run && visible > 0 ? run.steps[visible - 1] : undefined;
  const streaming = !isFull && !!current && current.role === 'agent' && typed < current.content.length;
  const atEnd = visible >= total;

  // Stream the newest agent message once it has been revealed.
  useEffect(() => {
    if (!streaming || !current) return;
    const t = window.setTimeout(() => setTyped((n) => Math.min(current.content.length, n + 10)), 16);
    return () => window.clearTimeout(t);
  }, [streaming, current, typed]);

  // In the step view, keep the newest step in sight.
  useEffect(() => {
    if (!isFull) bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [shown, Math.floor(typed / 300), isFull]);

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center text-sm text-stone-600">
        {error}{' '}
        <Link to="/runs" className="font-semibold text-sky-800">
          Back to runs
        </Link>
      </div>
    );
  }
  if (!run) return <div className="mx-auto h-96 max-w-5xl animate-pulse rounded-3xl bg-stone-200 px-4 py-16" />;

  const next = () => {
    if (streaming && current) {
      setTyped(current.content.length); // finish the message being written
      return;
    }
    if (!atEnd) {
      setShown((n) => n + 1);
      setTyped(0);
    }
  };
  const switchView = (v: 'step' | 'full') => {
    setView(v);
    setShown(1);
    setTyped(0);
  };

  const golem = golemFor(current, !isFull);
  const nextLabel = streaming ? 'Finish this message' : atEnd ? 'End of the conversation' : 'Next step';

  const NextButton = () => (
    <button
      type="button"
      onClick={next}
      disabled={atEnd && !streaming}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-default disabled:bg-stone-300 disabled:text-stone-600"
    >
      <ChevronDown className="h-4 w-4" />
      {nextLabel}
    </button>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link to="/runs" className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-slate-900">
        <ArrowLeft className="h-3.5 w-3.5" /> All agent runs
      </Link>

      <div className="mt-4 grid gap-8 lg:grid-cols-12">
        {/* Mascot and run details */}
        <aside className="lg:col-span-4">
          <div className="space-y-4 lg:sticky lg:top-24">
            <div className="rounded-3xl bg-[#0B1320] p-5 text-white">
              <div className="flex justify-center">
                <PixelGolem size={210} mode={golem.mode} animation={golem.animation} interactive />
              </div>
              <div className="mt-3 text-center font-mono text-xs text-slate-300">
                {isFull
                  ? 'Full conversation'
                  : streaming
                    ? 'Writing…'
                    : current?.role === 'tool'
                      ? `Ran: ${current.action || 'tool'}`
                      : current?.role === 'user'
                        ? 'Question received'
                        : atEnd
                          ? 'Conversation complete'
                          : 'Waiting for you'}
              </div>
              {current && current.role !== 'user' && !isFull && (
                <div className="mt-2 flex justify-center gap-2">
                  <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] ring-1 ${MODE_META[current.mode]?.className || MODE_META.gateway.className}`}>
                    {MODE_META[current.mode]?.label || current.mode}
                  </span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[10px] text-slate-200">{current.sector}</span>
                </div>
              )}
              {!isFull && (
                <>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-700">
                    <div className="h-full bg-sky-400 transition-all" style={{ width: `${(visible / Math.max(total, 1)) * 100}%` }} />
                  </div>
                  <p className="mt-1 text-center font-mono text-[11px] text-slate-400">
                    Step {visible} of {total}
                  </p>
                </>
              )}
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 text-sm shadow-xs">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-stone-500">{run.id}</p>
              <h1 className="mt-1 font-display text-lg font-bold leading-snug text-slate-950">{run.title}</h1>
              <p className="mt-1 text-xs text-stone-500">
                Asked by {run.askedBy} · {run.date}
              </p>
              {run.status === 'simulated' && (
                <p className="mt-3 flex gap-2 rounded-xl border border-sky-200 bg-sky-50 p-3 text-xs leading-relaxed text-sky-900">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span>
                    <strong>Replayed agent session.</strong> {run.simulatedNote}
                  </span>
                </p>
              )}
              {run.proposalsOut.length > 0 && (
                <div className="mt-4 space-y-2">
                  {run.proposalsOut.map((p) => (
                    <Link
                      key={p}
                      to={`/rnd/${p}`}
                      className="flex items-center gap-2 rounded-xl bg-slate-950 px-3 py-2.5 text-xs font-semibold text-white hover:bg-slate-800"
                    >
                      <FlaskConical className="h-4 w-4 text-emerald-300" /> R&amp;D result: {p}
                    </Link>
                  ))}
                </div>
              )}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <Stat n={run.findingsUsed.length} label="findings" />
                <Stat n={run.solutionsUsed.length} label="audits" />
                <Stat n={run.citedSourceIds.length} label="sources" />
              </div>
            </div>
          </div>
        </aside>

        {/* Transcript */}
        <div className="space-y-4 lg:col-span-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex rounded-xl border border-stone-200 bg-white p-1 shadow-xs" role="tablist">
              {(
                [
                  { id: 'step', label: 'Step by step', icon: ListOrdered },
                  { id: 'full', label: 'Full conversation', icon: List },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  role="tab"
                  aria-selected={view === opt.id}
                  onClick={() => switchView(opt.id)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-medium transition ${
                    view === opt.id ? 'bg-slate-950 text-white' : 'text-slate-700 hover:bg-stone-100'
                  }`}
                >
                  <opt.icon className="h-3.5 w-3.5" />
                  {opt.label}
                </button>
              ))}
            </div>
            <span className="font-mono text-xs text-stone-500">{total} steps</span>
          </div>

          {run.steps.slice(0, visible).map((step, i) => {
            const isNewest = i === visible - 1;
            const partial = isNewest && streaming;
            const text = partial ? step.content.slice(0, typed) : step.content;
            const mode = MODE_META[step.mode] || MODE_META.gateway;

            if (step.role === 'user') {
              return (
                <div key={step.n} className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-slate-900 px-4 py-3 text-sm leading-relaxed text-white">
                    <p className="mb-1 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      <User className="h-3 w-3" /> {run.askedBy}
                    </p>
                    <p className="whitespace-pre-wrap">{step.content}</p>
                  </div>
                </div>
              );
            }

            if (step.role === 'tool') {
              return (
                <div key={step.n} className="rounded-2xl border border-dashed border-stone-300 bg-stone-50/80 px-4 py-3">
                  <p className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-stone-600">
                    <Wrench className="h-3.5 w-3.5" />
                    <span className="font-semibold text-slate-800">{step.action || 'tool'}</span>
                    <span className={`rounded-full px-2 py-0.5 ring-1 ${mode.className}`}>{mode.label}</span>
                    <span className="text-stone-400">{step.sector}</span>
                  </p>
                  <div className="mt-1 text-[13px] [&_p]:my-1.5 [&_p]:text-[13.5px]">
                    <MarkdownArticle
                      content={step.content}
                      sourcesById={sourcesById}
                      verifiedFindingIds={verifiedIds}
                      onSelectSource={setSelectedSource}
                    />
                  </div>
                </div>
              );
            }

            return (
              <div key={step.n} className="flex gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B1320] text-emerald-300">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1 rounded-2xl rounded-tl-sm border border-stone-200 bg-white px-4 py-3 shadow-xs">
                  <p className="mb-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-stone-500">
                    Nexus agent
                    <span className={`rounded-full px-2 py-0.5 normal-case ring-1 ${mode.className}`}>{mode.label}</span>
                  </p>
                  {partial ? (
                    <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-slate-700">
                      {text}
                      <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-emerald-500 align-middle" />
                    </p>
                  ) : (
                    <MarkdownArticle
                      content={text}
                      sourcesById={sourcesById}
                      verifiedFindingIds={verifiedIds}
                      onSelectSource={setSelectedSource}
                    />
                  )}
                </div>
              </div>
            );
          })}

          {!isFull && (
            <div className="flex flex-col items-center gap-2 pt-2">
              <NextButton />
              <span className="font-mono text-[11px] text-stone-500">
                Step {visible} of {total}
              </span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      <SourceModal source={selectedSource} onClose={() => setSelectedSource(null)} />
    </div>
  );
}

function Stat({ n, label }: { n: number; label: string }): ReactNode {
  return (
    <div className="rounded-xl bg-stone-50 py-2">
      <div className="font-display text-lg font-bold text-slate-900">{n}</div>
      <div className="text-[10px] text-stone-500">{label}</div>
    </div>
  );
}
