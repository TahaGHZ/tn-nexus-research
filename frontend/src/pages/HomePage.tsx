import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Droplets,
  Lock,
  Sparkles,
  Sprout,
  Unlock,
  Zap,
} from 'lucide-react';
import {
  GOLEM_ANIMATIONS,
  PixelGolem,
  type GolemAnimation,
  type GolemMode,
} from '../components/PixelGolem';
import { EvidenceDashboard } from '../components/EvidenceDashboard';
import { InvestigationGraph } from '../components/InvestigationGraph';
import { FindingCard } from '../components/FindingCard';
import { SECTOR_META } from '../components/ResearchFormatting';
import { NEXUS_MODULES } from '../modules/registry';
import type { FindingSummary, ResearchIndex, Sector } from '../types/research';

interface HomePageProps {
  data: ResearchIndex;
}

const FEATURED_IDS = [
  'FND-TG-400',
  'FND-TG-101',
  'FND-TG-700',
  'FND-TG-425',
  'FND-TG-192',
  'FND-TG-880',
];

const GOLEM_QUOTES: Array<{ id: string; sector: GolemMode; text: string }> = [
  {
    id: 'FND-TG-400',
    sector: 'water',
    text: 'Cap Bon deep aquifers hit 195% exploitation; illicit boreholes draw ~28% of deep withdrawals.',
  },
  {
    id: 'FND-TG-101',
    sector: 'energy',
    text: '91.3% of Tunisia’s electricity runs on natural gas — mostly Algerian purchases and transit royalty.',
  },
  {
    id: 'FND-TG-700',
    sector: 'agriculture',
    text: 'Tunisia imports 80–95% of its soft bread wheat even in good harvest years.',
  },
  {
    id: 'FND-TG-425',
    sector: 'water',
    text: 'Successive low-inflow years drew Tunisia’s national dam reserves down to critical levels.',
  },
  {
    id: 'FND-TG-880',
    sector: 'agriculture',
    text: 'Climate projections show steep rainfed yield declines across cereals and olives toward 2050.',
  },
];

export function HomePage({ data }: HomePageProps) {
  const { stats, phases, findings } = data;
  const [golemMode, setGolemMode] = useState<GolemMode>('nexus');
  const [golemAnim, setGolemAnim] = useState<GolemAnimation>('auto');
  const [quoteIdx, setQuoteIdx] = useState(0);

  const handleSelectAnimation = (id: GolemAnimation) => {
    const entry = GOLEM_ANIMATIONS.find((a) => a.id === id);
    const nextMode = entry?.mode ?? 'nexus';
    setGolemAnim(id);
    setGolemMode(nextMode);
    // Sector moves show a fact from the matching sector.
    if (nextMode !== 'nexus') {
      const match = GOLEM_QUOTES.findIndex((q) => q.sector === nextMode);
      if (match >= 0) setQuoteIdx(match);
    }
  };

  const findingById = new Map<string, FindingSummary>(findings.map((f) => [f.id, f]));
  const featuredFindings = FEATURED_IDS.map((id) => findingById.get(id)).filter(
    (f): f is FindingSummary => Boolean(f)
  );
  const displayFeatured =
    featuredFindings.length >= 6 ? featuredFindings : findings.slice(0, 6);

  const activeQuote = GOLEM_QUOTES[quoteIdx % GOLEM_QUOTES.length];

  const handleGolemSurge = () => {
    const next = (quoteIdx + 1) % GOLEM_QUOTES.length;
    setQuoteIdx(next);
  };

  const sectorCards: Array<{
    key: Sector;
    count: number;
    icon: typeof Droplets;
    stat: string;
    statLabel: string;
  }> = [
    {
      key: 'water',
      count: stats.sectorCounts.water,
      icon: Droplets,
      stat: '134%',
      statLabel: 'National deep-aquifer draw rate (2020)',
    },
    {
      key: 'energy',
      count: stats.sectorCounts.energy,
      icon: Zap,
      stat: '91.3%',
      statLabel: 'Electricity generated from natural gas',
    },
    {
      key: 'agriculture',
      count: stats.sectorCounts.agriculture,
      icon: Sprout,
      stat: '93.1%',
      statLabel: 'Soft bread-wheat foreign dependence',
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="border-b border-stone-200 bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left copy */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3.5 py-1.5 text-xs font-medium text-emerald-800">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Phase 1 Active · {stats.verifiedFindings} Source-Verified Findings Published
              </div>

              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.3rem] lg:leading-[1.08]">
                Mapping Tunisia’s{' '}
                <span className="text-emerald-700">Water, Energy &amp; Agriculture</span> Nexus.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
                <strong className="font-semibold text-slate-950">Nexus TN</strong> is an open,
                evidence-first research engine. It does not chase one headline number. It follows
                documented links between findings across all three sectors, and every finding is
                independently source-verified before it enters the blog.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <BookOpen className="h-4 w-4" />
                  Browse {stats.verifiedFindings} Verified Findings
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/modules"
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3.5 text-sm font-medium text-slate-800 transition hover:border-stone-500"
                >
                  Platform Roadmap
                </Link>
              </div>

              {/* Headline numbers, counted from the repository at build time */}
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-stone-200 pt-6 sm:grid-cols-4">
                {[
                  { value: stats.verifiedFindings, label: 'Verified findings', tone: 'text-emerald-700' },
                  { value: stats.totalIndicators, label: 'Sourced data points', tone: 'text-sky-700' },
                  { value: stats.citedSources, label: 'Sources cited', tone: 'text-slate-950' },
                  {
                    value: stats.trustCounts.strong + stats.trustCounts.solid,
                    label: 'Rated strong or solid',
                    tone: 'text-amber-600',
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <dd className={`font-display text-4xl font-bold leading-none ${item.tone}`}>
                      {item.value}
                    </dd>
                    <dt className="mt-2 text-xs font-medium text-stone-600">{item.label}</dt>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right: the research graph with the Golem at its centre */}
            <div className="lg:col-span-6">
              <Link
                to={`/blog/${activeQuote.id}`}
                className="group mx-auto mb-3 block max-w-[520px] rounded-xl border border-stone-200 bg-white px-4 py-3 text-xs leading-relaxed text-slate-700 transition hover:border-emerald-400"
              >
                <div className="mb-1 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-emerald-700">
                    <Sparkles className="h-3 w-3" />
                    {activeQuote.id}
                  </span>
                  <span className="font-mono text-[10px] text-sky-700 group-hover:underline">
                    Read finding →
                  </span>
                </div>
                <p>“{activeQuote.text}”</p>
              </Link>

              <InvestigationGraph findings={findings} themeCount={stats.themeCount}>
                {(golemSize) => (
                  <PixelGolem
                    size={golemSize}
                    mode={golemMode}
                    animation={golemAnim}
                    interactive
                    onSurge={handleGolemSurge}
                  />
                )}
              </InvestigationGraph>

              {/* Animation switcher: each move also sets the gem colour */}
              <div className="mx-auto mt-4 flex max-w-[520px] flex-wrap items-center justify-center gap-1.5">
                {GOLEM_ANIMATIONS.map((item) => {
                  const active = golemAnim === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectAnimation(item.id)}
                      aria-pressed={active}
                      className={`rounded-lg border px-2.5 py-1 font-mono text-[11px] transition ${
                        active
                          ? 'border-slate-950 bg-slate-950 text-white'
                          : 'border-stone-300 bg-white text-slate-700 hover:border-stone-500'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE AT A GLANCE: global stats and trust classification */}
      <EvidenceDashboard data={data} />

      {/* THREE SECTORS OF THE NEXUS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Three Interlocking Lanes
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-slate-950">
              Explore by Sector
            </h2>
          </div>
          <p className="max-w-md text-sm text-stone-600">
            In Tunisia, water scarcity, natural-gas power dependence, and rainfed agriculture feed
            directly into each other.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {sectorCards.map(({ key, count, icon: Icon, stat, statLabel }) => {
            const meta = SECTOR_META[key];
            return (
              <Link
                key={key}
                to={`/blog?sector=${key}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xs transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={meta.heroPhoto}
                    alt={meta.heroAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/55" />
                  <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    <Icon className="h-3.5 w-3.5 text-emerald-400" />
                    {meta.label}
                  </div>
                  <div className="absolute right-4 bottom-3.5 left-4 flex items-end justify-between">
                    <div>
                      <div className="font-display text-2xl font-bold text-white">{stat}</div>
                      <div className="text-[11px] text-slate-200">{statLabel}</div>
                    </div>
                    <span className="rounded-lg bg-white/15 px-2.5 py-1 font-mono text-xs font-semibold text-white backdrop-blur-sm">
                      {count} verified
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <p className="text-sm leading-relaxed text-stone-600">{meta.summary}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950 group-hover:text-emerald-700">
                    Open {meta.label} findings
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED VERIFIED FINDINGS */}
      <section className="border-y border-stone-200/80 bg-white/70 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-700">
                From the Verified Findings Blog
              </span>
              <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-slate-950">
                Highlighted Research Dossiers
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950"
            >
              View all {stats.verifiedFindings} verified findings
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayFeatured.map((finding) => (
              <FindingCard key={finding.id} finding={finding} />
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH PIPELINE & SOURCE RIGOR */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-700">
              How the Engine Works
            </span>
            <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-slate-950">
              Three Phases. Zero Unsourced Numbers.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              Nexus TN separates diagnosing problems from auditing solutions and designing new R&amp;D.
              Only findings that pass independent claim-by-claim source verification appear in the
              public blog — currently{' '}
              <strong className="text-slate-900">
                {stats.verifiedFindings} of {stats.totalFindingsInRepo}
              </strong>{' '}
              phase 1 records ({stats.draftFindings} drafts remain in verification).
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {phases.map((phase) => {
              const unlocked = phase.state === 'UNLOCKED';
              const copy: Record<number, { question: string; output: string }> = {
                1: {
                  question: 'What are the real past, current & predicted problems backed by data?',
                  output: 'FND + SRC records',
                },
                2: {
                  question: 'Do existing laws, subsidies & programmes solve the root cause?',
                  output: 'SOL validation audits',
                },
                3: {
                  question: 'What gap remains, and what new R&D path should experts test?',
                  output: 'PRP field proposals',
                },
              };
              const info = copy[phase.number] || { question: '', output: '' };
              return (
                <div
                  key={phase.number}
                  className={`flex flex-col justify-between rounded-2xl border p-5 ${
                    unlocked
                      ? 'border-emerald-300 bg-emerald-50'
                      : 'border-stone-200 bg-stone-50/70 text-stone-500'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-slate-500">
                        PHASE 0{phase.number}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold ${
                          unlocked
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-stone-200 text-stone-600'
                        }`}
                      >
                        {unlocked ? (
                          <Unlock className="h-3 w-3" />
                        ) : (
                          <Lock className="h-3 w-3" />
                        )}
                        {phase.state}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold text-slate-950">
                      {phase.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">{info.question}</p>
                  </div>
                  <div className="mt-6 border-t border-stone-200/80 pt-3 font-mono text-xs text-slate-700">
                    Output: <strong>{info.output}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UPCOMING MODULES ROADMAP */}
      <section className="border-t border-stone-200 bg-[#F3EFE7] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-600">
                Modular Architecture
              </span>
              <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-slate-950">
                Growing Beyond the Blog
              </h2>
            </div>
            <Link
              to="/modules"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-emerald-800"
            >
              Inspect full module plan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {NEXUS_MODULES.map((mod) => {
              const isLive = mod.status === 'live';
              return (
                <div
                  key={mod.id}
                  className={`flex flex-col justify-between rounded-2xl border p-5 ${
                    isLive
                      ? 'border-emerald-300 bg-white shadow-sm'
                      : 'border-stone-200/90 bg-white/75'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold ${
                          mod.status === 'live'
                            ? 'bg-emerald-100 text-emerald-800'
                            : mod.status === 'upcoming'
                              ? 'bg-sky-100 text-sky-800'
                              : 'bg-stone-200 text-stone-600'
                        }`}
                      >
                        {isLive && <CheckCircle2 className="h-3 w-3" />}
                        {mod.phaseLabel}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold text-slate-950">
                      {mod.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-stone-600">{mod.description}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-stone-100">
                    {mod.route ? (
                      <Link
                        to={mod.route}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:text-emerald-950"
                      >
                        Open module
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <Link
                        to="/modules"
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-stone-500 hover:text-slate-800"
                      >
                        View blueprint →
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
