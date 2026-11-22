import { Link } from 'react-router-dom';
import { ArrowUpRight, Bot, MessagesSquare } from 'lucide-react';
import { PixelGolem } from '../components/PixelGolem';
import type { ResearchIndex } from '../types/research';

interface RunsPageProps {
  data: ResearchIndex;
}

/** List of recorded (or simulated) gateway agent runs. */
export function RunsPage({ data }: RunsPageProps) {
  const { runs } = data;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-[#0B1320] p-8 text-white sm:p-10">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/15 px-3 py-1 font-mono text-xs font-semibold text-sky-300">
              <Bot className="h-3.5 w-3.5" />
              Agent Runs
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">Recorded Agent Runs</h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Replay how the gateway agent answers a real question: it asks what it needs to know,
              searches the verified findings, reads the solution audits, and runs the R&amp;D method to
              a phased plan, saying what it does not know and who holds the data.
            </p>
          </div>
          <div className="flex justify-center md:col-span-4 md:justify-end">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4">
              <PixelGolem size={150} mode="nexus" animation="auto" interactive />
            </div>
          </div>
        </div>
      </div>

      {runs.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-stone-300 p-10 text-center text-sm text-stone-500">
          No runs recorded yet.
        </p>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {runs.map((r) => (
            <Link
              key={r.id}
              to={`/runs/${r.id}`}
              className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-xs transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold text-sky-800">{r.id}</span>
                <span className="rounded-full bg-sky-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase text-sky-800 ring-1 ring-sky-200">
                  {r.status}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-slate-950 group-hover:text-sky-800">
                {r.title}
              </h3>
              <p className="mt-2 text-sm italic leading-relaxed text-stone-600">“{r.question}”</p>
              <p className="mt-1 text-xs text-stone-500">Asked by {r.askedBy}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {r.modes.map((m) => (
                  <span key={m} className="rounded-full bg-stone-100 px-2 py-0.5 font-mono text-[10px] text-stone-700">
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3 text-xs text-stone-500">
                <span className="inline-flex items-center gap-1">
                  <MessagesSquare className="h-3.5 w-3.5" /> {r.stepCount} steps · {r.findingsUsed.length} findings ·{' '}
                  {r.solutionsUsed.length} audits
                </span>
                <ArrowUpRight className="h-4 w-4 text-stone-400 group-hover:text-slate-900" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
