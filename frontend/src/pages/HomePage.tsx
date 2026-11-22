import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bot,
  BookOpen,
  CircleHelp,
  Droplets,
  FlaskConical,
  GraduationCap,
  Landmark,
  ListOrdered,
  Network,
  PlayCircle,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
  Sprout,
  Timer,
  Users,
  X,
  Zap,
} from 'lucide-react';
import { GOLEM_ANIMATIONS, PixelGolem, type GolemAnimation, type GolemMode } from '../components/PixelGolem';
import { EvidenceDashboard } from '../components/EvidenceDashboard';
import { InvestigationGraph } from '../components/InvestigationGraph';
import type { ProposalDetail, ResearchIndex } from '../types/research';

interface HomePageProps {
  data: ResearchIndex;
}

const KERKER_RUN = 'RUN-TG-001';
const KERKER_PRP = 'PRP-TG-400';

// Facts shown next to the mascot; each links to the verified finding it comes from.
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

// Energy dependence = 100% minus ONEM's energy independence rate (royalty counted).
const DEPENDENCE: Array<{ label: string; value: number; source: string }> = [
  { label: '2021', value: 48, source: 'SRC-TG-133' },
  { label: '2024', value: 59, source: 'SRC-TG-221' },
  { label: '2025', value: 65, source: 'SRC-TG-221' },
  { label: 'Jan–Sep 2026', value: 68, source: 'SRC-TG-100' },
];

const CHAIN: Array<{ icon: typeof Zap; title: string; text: string; link: string; tone: string }> = [
  {
    icon: Zap,
    title: 'The grid fails',
    text: 'Summer peaks outgrow generation; STEG sheds load and heat damages equipment.',
    link: 'FND-TG-220',
    tone: 'border-amber-300 bg-amber-50 text-amber-900',
  },
  {
    icon: Network,
    title: 'The pumps stop',
    text: 'SONEDE is STEG’s biggest customer: every grid failure becomes a water failure.',
    link: 'FND-TG-270',
    tone: 'border-sky-300 bg-sky-50 text-sky-900',
  },
  {
    icon: Droplets,
    title: 'The taps run dry',
    text: 'Reservoirs stop filling; restarting a station takes hours after power returns.',
    link: 'FND-TG-451',
    tone: 'border-sky-300 bg-sky-50 text-sky-900',
  },
  {
    icon: Sprout,
    title: 'The farms lose irrigation',
    text: 'Wells stop; farmers switch to diesel or unmetered solar pumps, and the aquifers pay.',
    link: 'FND-TG-400',
    tone: 'border-emerald-300 bg-emerald-50 text-emerald-900',
  },
];

const MOVING_FIXES: Array<{ fix: string; moves: string; audit: string }> = [
  { fix: 'Solar pumps on farms', moves: 'Free pumping drains the aquifers faster', audit: 'SOL-TG-110' },
  { fix: 'Seawater desalination', moves: 'Adds a new gas-fired load to the same weak grid', audit: 'SOL-TG-420' },
  { fix: 'Drip irrigation subsidies', moves: 'Saved water irrigates new land instead', audit: 'SOL-TG-700' },
  { fix: 'Solar plants on farmland', moves: 'Energy gained, farmland lost', audit: 'SOL-TG-120' },
];

const GUARDRAILS = [
  'Weigh each fix today and in ten years',
  'Count rebound effects',
  'Check who pays',
  'Never just move the problem',
  'Test causes, not correlations',
  'Show contested numbers as contested',
  'Humans decide',
];

const KERKER_STEPS: Array<{ icon: typeof Zap; title: string; text: string }> = [
  {
    icon: ShieldCheck,
    title: 'Collect and rate',
    text: 'SONEDE notices, STEG statements, official statistics, research and citizen reports, each with a trust rating.',
  },
  {
    icon: Timer,
    title: 'Rebuild the timeline',
    text: 'First surprise: both cuts began outside the 13h–17h air-conditioning peak. More plants alone may not have saved those taps.',
  },
  {
    icon: Network,
    title: 'Map the factors',
    text: 'The real weak point: one station feeding two governorates, with no protected power and no water buffer.',
  },
  {
    icon: ListOrdered,
    title: 'Score the options',
    text: 'Eight options against the guardrails. Diesel and unlimited solar pumps come last: they move the problem.',
  },
  {
    icon: CircleHelp,
    title: 'Say what it does not know',
    text: 'And who holds that data: SONEDE, STEG, farmers. Researchers refine the plan before decision makers see it.',
  },
];

export function HomePage({ data }: HomePageProps) {
  const { stats, findings } = data;
  const [golemMode, setGolemMode] = useState<GolemMode>('nexus');
  const [golemAnim, setGolemAnim] = useState<GolemAnimation>('auto');
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [kerker, setKerker] = useState<ProposalDetail | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`./data/proposals/${KERKER_PRP}.json`)
      .then((r) => (r.ok ? (r.json() as Promise<ProposalDetail>) : null))
      .then((p) => !cancelled && setKerker(p))
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSelectAnimation = (id: GolemAnimation) => {
    const entry = GOLEM_ANIMATIONS.find((a) => a.id === id);
    const nextMode = entry?.mode ?? 'nexus';
    setGolemAnim(id);
    setGolemMode(nextMode);
    if (nextMode !== 'nexus') {
      const match = GOLEM_QUOTES.findIndex((q) => q.sector === nextMode);
      if (match >= 0) setQuoteIdx(match);
    }
  };
  const activeQuote = GOLEM_QUOTES[quoteIdx % GOLEM_QUOTES.length];

  const options = kerker?.options || [];
  const firstPhase = kerker?.plan.filter((s) => s.phase === 'now') || [];

  return (
    <div>
      {/* 1. THE HOOK */}
      <section className="border-b border-stone-200 bg-[#FAF8F4]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3.5 py-1.5 font-mono text-xs font-semibold text-white">
                <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
                24 August 2026, 10:00
              </p>
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.2rem] lg:leading-[1.08]">
                Nobody in El Jem turned off their tap.
                <span className="block text-sky-700">A power cut did it for them.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
                A cut at the Kerker pumping station left parts of Mahdia and Sfax without water from
                10:00 to 20:00. A month earlier, the same station: from Sunday 22:00 to Monday
                afternoon.{' '}
                <span className="font-mono text-xs text-stone-500">SRC-TG-685 · SRC-TG-686</span>
              </p>
              <p className="mt-4 max-w-xl text-base font-semibold text-slate-900 sm:text-lg">
                Every fix tried so far pushed the problem somewhere else. So we asked: how do you solve a
                problem that keeps moving?
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to={`/runs/${KERKER_RUN}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <PlayCircle className="h-4 w-4" />
                  Watch the agent solve Kerker
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3.5 text-sm font-medium text-slate-800 transition hover:border-stone-500"
                >
                  <BookOpen className="h-4 w-4" />
                  {stats.verifiedFindings} verified findings
                </Link>
              </div>
            </div>

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
                  <span className="font-mono text-[10px] text-sky-700 group-hover:underline">Read finding →</span>
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
                    onSurge={() => setQuoteIdx((i) => (i + 1) % GOLEM_QUOTES.length)}
                  />
                )}
              </InvestigationGraph>

              <div className="mx-auto mt-4 flex max-w-[520px] flex-wrap items-center justify-center gap-1.5">
                {GOLEM_ANIMATIONS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectAnimation(item.id)}
                    aria-pressed={golemAnim === item.id}
                    className={`rounded-lg border px-2.5 py-1 font-mono text-[11px] transition ${
                      golemAnim === item.id
                        ? 'border-slate-950 bg-slate-950 text-white'
                        : 'border-stone-300 bg-white text-slate-700 hover:border-stone-500'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE NUMBERS */}
      <section className="bg-[#0B1320] py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-sky-300">Summer 2026</p>
          <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">A grid at its limit, a country buying its energy</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Stat
              value="5,089 MW"
              label="Record peak demand, January–September 2026 (official)."
              note="Up to ~6,000 MW was reported in July, but awaits official validation. Contested figures stay marked."
              cite="FND-TG-220 · SRC-TG-228"
              link="/blog/FND-TG-220"
            />
            <Stat
              value="−87%"
              label="STEG investment in power generation, 2021–2025 against 2016–2020."
              note="TND 1.95 billion fell to TND 248 million (Observatoire tunisien de l’économie)."
              cite="SRC-TG-228"
            />
            <Stat
              value="10 h"
              label="Without water in Mahdia and Sfax on 24 August, after one power cut at Kerker."
              note="The same station had stopped a month earlier, from Sunday night to Monday afternoon."
              cite="SRC-TG-685 · SRC-TG-686"
              link={`/rnd/${KERKER_PRP}`}
            />
            <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
              <p className="font-display text-3xl font-bold text-amber-300">68%</p>
              <p className="mt-1 text-sm text-slate-200">Energy dependence, January–September 2026, and still climbing.</p>
              <div className="mt-4 flex h-20 items-end gap-2">
                {DEPENDENCE.map((d) => (
                  <div key={d.label} className="flex flex-1 flex-col items-center gap-1">
                    <span className="font-mono text-[10px] text-slate-300">{d.value}%</span>
                    <div className="w-full rounded-t bg-amber-400/80" style={{ height: `${(d.value - 30) * 1.4}px` }} />
                    <span className="text-center font-mono text-[9px] leading-tight text-slate-400">{d.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 font-mono text-[10px] text-slate-500">ONEM energy balances · SRC-TG-133 · SRC-TG-221 · SRC-TG-100</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CHAIN */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle kicker="The chain" title="One power cut, four failures" />
        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {CHAIN.map((c, i) => (
            <div key={c.title} className="relative">
              <Link to={`/blog/${c.link}`} className={`block h-full rounded-2xl border p-5 transition hover:shadow-md ${c.tone}`}>
                <c.icon className="h-6 w-6" />
                <p className="mt-3 font-display text-lg font-bold">{c.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed opacity-90">{c.text}</p>
                <p className="mt-3 font-mono text-[11px] font-semibold opacity-80">{c.link} →</p>
              </Link>
              {i < CHAIN.length - 1 && (
                <ArrowRight className="absolute top-1/2 -right-3 z-10 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-white text-slate-500 md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY ONE FIX CANNOT HOLD */}
      <section className="border-y border-stone-200 bg-white/70 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            kicker="Why one fix cannot hold"
            title="Every fix we audited pushed the problem somewhere else"
            text="We audited the solutions Tunisia already tried. None of them fixes its root cause, and several move the problem into another sector."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MOVING_FIXES.map((m) => (
              <Link
                key={m.audit}
                to={`/solutions/${m.audit}`}
                className="group rounded-2xl border border-stone-200 bg-white p-5 transition hover:border-amber-300 hover:shadow-md"
              >
                <p className="font-display text-base font-bold text-slate-950">{m.fix}</p>
                <p className="mt-2 flex items-start gap-2 text-sm text-stone-600">
                  <RefreshCw className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  {m.moves}
                </p>
                <p className="mt-3 font-mono text-[11px] font-semibold text-amber-800 group-hover:underline">
                  Audit {m.audit} →
                </p>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center font-display text-xl font-semibold text-slate-900">
            So the question became: how do you solve a problem that keeps moving?
          </p>
        </div>
      </section>

      {/* 5. OUR ANSWER: THREE STRENGTHS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Our answer"
          title="Nexus: an open platform that finds solutions like a research team, faster and cheaper"
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Strength
            icon={ShieldCheck}
            tone="text-emerald-700 bg-emerald-50"
            title="Verified data"
            text="It collects official, research, press and citizen sources, rates each one for trust, and turns them into findings where every number has a source."
          >
            <div className="grid grid-cols-3 gap-2 text-center">
              <Mini n={stats.verifiedFindings} label="findings" />
              <Mini n={stats.citedSources} label="sources" />
              <Mini n={stats.totalIndicators} label="data points" />
            </div>
            <Link to="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:underline">
              Browse the findings <ArrowRight className="h-4 w-4" />
            </Link>
          </Strength>

          <Strength
            icon={GraduationCap}
            tone="text-sky-700 bg-sky-50"
            title="An AI analyst with an economist’s rules"
            text="It follows seven guardrails reviewed by a doctor in economics. Researchers then test and improve every suggestion."
          >
            <ol className="space-y-1.5 text-sm text-slate-700">
              {GUARDRAILS.map((g, i) => (
                <li key={g} className="flex gap-2">
                  <span className="font-mono text-xs font-semibold text-sky-700">G{i + 1}</span>
                  {g}
                </li>
              ))}
            </ol>
            <Link to="/solutions" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-800 hover:underline">
              See {stats.solutionCount} solution audits <ArrowRight className="h-4 w-4" />
            </Link>
          </Strength>

          <Strength
            icon={Users}
            tone="text-amber-700 bg-amber-50"
            title="Open and shared"
            text="Researchers, companies, decision makers and citizens work on the same case. Knowledge stays public, and each case makes the next one easier."
          >
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><GraduationCap className="h-4 w-4 text-amber-700" /> Researchers get sourced data</li>
              <li className="flex gap-2"><Users className="h-4 w-4 text-amber-700" /> Citizens report what they see</li>
              <li className="flex gap-2"><Landmark className="h-4 w-4 text-amber-700" /> Decision makers get a plan they can trust</li>
              <li className="flex gap-2"><Bot className="h-4 w-4 text-amber-700" /> Every run is recorded and replayable</li>
            </ul>
            <Link to="/runs" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-800 hover:underline">
              Replay an agent run <ArrowRight className="h-4 w-4" />
            </Link>
          </Strength>
        </div>
      </section>

      {/* 6. KERKER INSIDE THE APP */}
      <section className="bg-[#0B1320] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-300">Inside the app</p>
          <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">We ran Kerker through it</h2>

          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {KERKER_STEPS.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-slate-400">0{i + 1}</span>
                  <s.icon className="h-4 w-4 text-emerald-300" />
                </div>
                <p className="mt-2 font-semibold">{s.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">{s.text}</p>
              </div>
            ))}
          </div>

          {options.length > 0 && (
            <div className="mt-8 grid gap-6 lg:grid-cols-12">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 lg:col-span-7">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                  The scorecard · {options.length} options, out of 30
                </p>
                <ul className="mt-4 space-y-2.5">
                  {options.map((o, i) => (
                    <li key={o.name}>
                      <div className="flex items-center justify-between gap-3 text-sm">
                        <span className={i === 0 ? 'font-semibold text-white' : 'text-slate-300'}>{o.name}</span>
                        <span className="font-mono text-xs text-slate-300">{o.total}</span>
                      </div>
                      <div className="mt-1 h-1.5 rounded-full bg-slate-800">
                        <div
                          className={`h-full rounded-full ${i === 0 ? 'bg-emerald-400' : i >= options.length - 2 ? 'bg-rose-400' : 'bg-sky-400'}`}
                          style={{ width: `${(o.total / 30) * 100}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5 lg:col-span-5">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    First, at almost no cost
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-100">
                    {firstPhase.map((s) => (
                      <li key={s.action} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                        {s.action}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs leading-relaxed text-slate-400">
                    Scores are a first assessment for SONEDE, STEG and our experts to challenge.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    to={`/runs/${KERKER_RUN}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-stone-100"
                  >
                    <PlayCircle className="h-4 w-4" /> Replay the run
                  </Link>
                  <Link
                    to={`/rnd/${KERKER_PRP}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-500 px-4 py-2.5 text-sm font-semibold text-white hover:border-white"
                  >
                    <FlaskConical className="h-4 w-4" /> Full R&amp;D plan
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. VOICES FROM THE FIELD */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Voices from the field"
          title="We did not build this from articles alone"
          text="We asked people inside the problem. What they told us shaped the platform."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Voice
            icon={Zap}
            role="Engineer at a solar panel company"
            points={[
              'Rooftop solar connected to the grid shuts down when the grid does.',
              'Every project hits the same walls: connection delays, taxes and financing.',
              'A shared platform would save months on each project.',
            ]}
          />
          <Voice
            icon={Sparkles}
            role="Maher Mahmoudi, engineer at STC (energy and air conditioning)"
            points={[
              'Central air conditioning that cools only occupied rooms, runs on a schedule, and can cap its own power during the grid’s peak hours is already sold in Tunisia.',
              'He pointed us to these systems as examples of solutions that exist; our audit shows why they have not changed the national peak.',
            ]}
            link={{ to: '/solutions/SOL-TG-100', label: 'Our audit of central air conditioning' }}
          />
        </div>
        <p className="mt-8 text-center font-display text-xl font-semibold text-slate-900">
          The problem isn’t a lack of solutions. It’s that they never reach the people who need them.
        </p>
      </section>

      {/* 8. WHY THIS KIND OF SOLUTION */}
      <section className="border-y border-stone-200 bg-[#F3EFE7] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle kicker="Why a platform" title="We could have built one more app. We chose not to." />
          <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-12">
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {['One more solar app', 'One more outage predictor'].map((t) => (
                <div key={t} className="relative rounded-2xl border border-stone-300 bg-white/70 p-6 text-stone-400">
                  <X className="absolute top-4 right-4 h-6 w-6 text-rose-400" />
                  <p className="font-display text-lg font-bold line-through decoration-rose-400 decoration-2">{t}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-stone-200 bg-white p-5 text-sm leading-relaxed text-slate-700 sm:col-span-2">
                <p>
                  <strong>First,</strong> those solutions already exist, and they fail for reasons that have
                  nothing to do with technology: rules, money, heat, aquifers, habits.
                </p>
                <p className="mt-2">
                  <strong>Second,</strong> a fixed answer to one problem does not change the bigger picture.
                  Next summer will be hotter, prices will change, new problems will appear.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-2xl bg-slate-950 p-6 text-white lg:col-span-5">
              <Scale className="h-7 w-7 text-emerald-300" />
              <p className="mt-3 font-display text-2xl font-bold">A platform that keeps finding solutions</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                It gives researchers data, lets citizens report problems, gives decision makers a plan they
                can trust, and helps Tunisians understand the problem from within. Every plan is re-scored
                when the facts change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. THE EVIDENCE BEHIND IT */}
      <EvidenceDashboard data={data} />

      {/* 10. CONCLUSION */}
      <section className="bg-[#0B1320] py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Droplets className="mx-auto h-8 w-8 text-sky-300" />
          <p className="mt-4 font-display text-2xl font-bold leading-snug sm:text-3xl">
            Kerker was ten hours without water. Next summer, it will be another station, another town.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            We don’t bring one more fix. We bring a way to find the right fix, every time: verified data, an
            AI guided by an economist’s rules, and a whole country contributing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to={`/runs/${KERKER_RUN}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 hover:bg-stone-100"
            >
              <PlayCircle className="h-4 w-4" /> Watch the Kerker run
            </Link>
            <Link
              to="/rnd"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-500 px-6 py-3.5 text-sm font-semibold text-white hover:border-white"
            >
              <FlaskConical className="h-4 w-4" /> R&amp;D proposals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-700">{kicker}</p>
      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
      {text && <p className="mt-3 text-base leading-relaxed text-stone-600">{text}</p>}
    </div>
  );
}

function Stat({
  value,
  label,
  note,
  cite,
  link,
}: {
  value: string;
  label: string;
  note: string;
  cite: string;
  link?: string;
}) {
  const body = (
    <>
      <p className="font-display text-3xl font-bold text-sky-300">{value}</p>
      <p className="mt-1 text-sm text-slate-200">{label}</p>
      <p className="mt-3 text-xs leading-relaxed text-slate-400">{note}</p>
      <p className="mt-3 font-mono text-[10px] text-slate-500">{cite}</p>
    </>
  );
  return link ? (
    <Link to={link} className="block rounded-2xl border border-slate-700 bg-slate-900/70 p-5 transition hover:border-sky-400">
      {body}
    </Link>
  ) : (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5">{body}</div>
  );
}

function Strength({
  icon: Icon,
  tone,
  title,
  text,
  children,
}: {
  icon: typeof Zap;
  tone: string;
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-3xl border border-stone-200 bg-white p-6 shadow-xs">
      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${tone}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">{text}</p>
      <div className="mt-5 flex flex-1 flex-col justify-end border-t border-stone-100 pt-4">{children}</div>
    </div>
  );
}

function Mini({ n, label }: { n: number; label: string }) {
  return (
    <div className="rounded-xl bg-stone-50 py-2">
      <div className="font-display text-xl font-bold text-slate-900">{n}</div>
      <div className="text-[10px] text-stone-500">{label}</div>
    </div>
  );
}

function Voice({
  icon: Icon,
  role,
  points,
  link,
}: {
  icon: typeof Zap;
  role: string;
  points: string[];
  link?: { to: string; label: string };
}) {
  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xs">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-emerald-300">
          <Icon className="h-5 w-5" />
        </div>
        <p className="font-semibold text-slate-950">{role}</p>
      </div>
      <ul className="mt-4 space-y-2.5">
        {points.map((p) => (
          <li key={p} className="flex gap-2 text-sm leading-relaxed text-slate-700">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            {p}
          </li>
        ))}
      </ul>
      {link && (
        <Link to={link.to} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 hover:underline">
          {link.label} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
