import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FlaskConical,
  Lock,
  Sparkles,
  Store,
} from 'lucide-react';
import { PixelGolem } from '../components/PixelGolem';
import { NEXUS_MODULES } from '../modules/registry';
import type { ResearchIndex } from '../types/research';

interface ModulesPageProps {
  data: ResearchIndex;
}

const MODULE_ICONS: Record<string, typeof Sparkles> = {
  'verified-findings': Sparkles,
  'agent-sessions': Bot,
  'trusted-vendors': Store,
  'solution-validation': FlaskConical,
};

export function ModulesPage({ data }: ModulesPageProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header banner */}
      <div className="overflow-hidden rounded-3xl bg-[#0B1320] p-8 text-white sm:p-10">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/15 px-3 py-1 font-mono text-xs font-semibold text-sky-300">
              Modular Architecture · Nexus TN
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Platform Modules &amp; Roadmap
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              The Verified Findings Blog is the first live module built on top of this repository’s
              structured Markdown records. Next up: interactive Agent Recorded Sessions and a vetted
              Trusted Vendors &amp; Products directory tied directly to Tunisia’s root causes.
            </p>
          </div>
          <div className="flex justify-center md:col-span-4 md:justify-end">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4">
              <PixelGolem size={168} mode="nexus" animation="auto" interactive />
            </div>
          </div>
        </div>
      </div>

      {/* Module Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {NEXUS_MODULES.map((mod) => {
          const Icon = MODULE_ICONS[mod.id] || Sparkles;
          const isLive = mod.status === 'live';
          const isLocked = mod.status === 'locked';

          return (
            <div
              key={mod.id}
              className={`flex flex-col justify-between rounded-3xl border p-6 sm:p-8 ${
                isLive
                  ? 'border-emerald-300 bg-white shadow-sm'
                  : 'border-stone-200 bg-white/85'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      mod.accent === 'emerald'
                        ? 'bg-emerald-100 text-emerald-800'
                        : mod.accent === 'sky'
                          ? 'bg-sky-100 text-sky-800'
                          : mod.accent === 'amber'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-stone-200 text-stone-700'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-semibold ${
                      isLive
                        ? 'bg-emerald-100 text-emerald-800'
                        : isLocked
                          ? 'bg-stone-200 text-stone-600'
                          : 'bg-sky-100 text-sky-800'
                    }`}
                  >
                    {isLive ? (
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    ) : isLocked ? (
                      <Lock className="h-3.5 w-3.5" />
                    ) : null}
                    {mod.phaseLabel}
                  </span>
                </div>

                <h2 className="mt-5 font-display text-2xl font-bold text-slate-950">{mod.name}</h2>
                <p className="mt-1 text-sm font-medium text-emerald-800">{mod.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{mod.description}</p>

                <ul className="mt-5 space-y-2 border-t border-stone-100 pt-4 text-sm text-slate-700">
                  {mod.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100">
                {mod.route ? (
                  <Link
                    to={mod.route}
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Launch {mod.shortName} ({data.stats.verifiedFindings})
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-stone-50 px-4 py-2 font-mono text-xs text-stone-500">
                    {isLocked
                      ? 'Locked in PHASES.md — awaiting Phase 1 peer validation'
                      : 'Architecture ready in src/modules/registry.ts'}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
