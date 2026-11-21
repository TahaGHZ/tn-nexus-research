import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import type { ResearchIndex, SourceTier } from '../types/research';
import {
  SECTOR_META,
  SEVERITY_META,
  TIER_META,
  TIMEFRAME_META,
  TREND_META,
  TRUST_META,
  TRUST_ORDER,
} from './ResearchFormatting';

interface EvidenceDashboardProps {
  data: ResearchIndex;
}

function pct(part: number, total: number): number {
  return total ? Math.round((part / total) * 100) : 0;
}

interface Segment {
  key: string;
  label: string;
  value: number;
  barClass: string;
}

/** One horizontal bar split into labelled segments. Counts sit inside the bar. */
function StackBar({ segments, height = 'h-11' }: { segments: Segment[]; height?: string }) {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  return (
    <div className={`flex w-full overflow-hidden rounded-lg ${height}`} role="img">
      {segments
        .filter((s) => s.value > 0)
        .map((s) => (
          <div
            key={s.key}
            className={`flex items-center justify-center font-display text-sm font-bold text-white ${s.barClass}`}
            style={{ width: `${(s.value / total) * 100}%` }}
            title={`${s.label}: ${s.value} (${pct(s.value, total)}%)`}
          >
            {s.value}
          </div>
        ))}
    </div>
  );
}

interface BarRow {
  key: string;
  label: string;
  value: number;
  barClass: string;
  to?: string;
}

/** Ranked horizontal bars with the count and share at the end of each row. */
function BarList({ rows }: { rows: BarRow[] }) {
  const total = rows.reduce((sum, r) => sum + r.value, 0);
  const max = Math.max(1, ...rows.map((r) => r.value));
  return (
    <ul className="space-y-2.5">
      {rows.map((row) => {
        const inner = (
          <>
            <div className="flex items-baseline justify-between gap-2 text-sm">
              <span className="font-medium text-slate-800">{row.label}</span>
              <span className="font-mono text-sm font-bold text-slate-950">
                {row.value}
                <span className="ml-1 text-xs font-normal text-stone-500">
                  {pct(row.value, total)}%
                </span>
              </span>
            </div>
            <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-stone-100">
              <div
                className={`h-full rounded-full ${row.barClass}`}
                style={{ width: `${(row.value / max) * 100}%` }}
              />
            </div>
          </>
        );
        return (
          <li key={row.key}>
            {row.to ? (
              <Link to={row.to} className="block rounded-md hover:bg-stone-50">
                {inner}
              </Link>
            ) : (
              inner
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function EvidenceDashboard({ data }: EvidenceDashboardProps) {
  const { stats } = data;
  const verified = stats.verifiedFindings;
  const tierTotal = stats.sourceTiers.A + stats.sourceTiers.B + stats.sourceTiers.C;
  const trustedCount = stats.trustCounts.strong + stats.trustCounts.solid;

  const bigNumbers = [
    {
      value: verified,
      label: 'Findings published',
      note: `${stats.totalFindingsInRepo} records in repo · ${stats.draftFindings} drafts withheld`,
      tone: 'text-slate-950',
    },
    {
      value: stats.totalIndicators,
      label: 'Sourced data points',
      note: 'Each indicator carries a year, a geography and a source ID',
      tone: 'text-slate-950',
    },
    {
      value: stats.citedSources,
      label: 'Sources cited',
      note: `${stats.totalSources} source records on file`,
      tone: 'text-slate-950',
    },
    {
      value: stats.peerValidatedFindings,
      label: 'Peer-validated',
      note: `All ${verified} are source-verified; none yet checked by a teammate`,
      tone: stats.peerValidatedFindings === 0 ? 'text-amber-600' : 'text-emerald-700',
    },
  ];

  const trustSegments: Segment[] = TRUST_ORDER.map((level) => ({
    key: level,
    label: TRUST_META[level].label,
    value: stats.trustCounts[level],
    barClass: TRUST_META[level].bar,
  }));

  const tierSegments: Segment[] = (['A', 'B', 'C'] as SourceTier[]).map((tier) => ({
    key: tier,
    label: TIER_META[tier].label,
    value: stats.sourceTiers[tier],
    barClass: tier === 'A' ? 'bg-emerald-600' : tier === 'B' ? 'bg-sky-600' : 'bg-amber-500',
  }));

  return (
    <section className="border-b border-stone-200 bg-[#FAF8F4]" aria-labelledby="evidence-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Live from the repository
            </span>
            <h2
              id="evidence-heading"
              className="mt-1 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
            >
              The evidence at a glance
            </h2>
          </div>
          <p className="max-w-md text-sm text-stone-600">
            Every number here is counted from the Markdown records when the site builds. Nothing is
            typed by hand.
          </p>
        </div>

        {/* Big numbers */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bigNumbers.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-stone-200 bg-white p-6"
            >
              <div className={`font-display text-6xl font-bold leading-none ${item.tone}`}>
                {item.value.toLocaleString('en-US')}
              </div>
              <div className="mt-3 text-sm font-semibold text-slate-900">{item.label}</div>
              <div className="mt-1 text-xs leading-relaxed text-stone-500">{item.note}</div>
            </div>
          ))}
        </div>

        {/* Trust classification + source make-up */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 lg:col-span-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-900">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  How trustworthy is each finding?
                </div>
                <p className="mt-2 text-sm text-stone-600">
                  <strong className="text-slate-950">
                    {trustedCount} of {verified}
                  </strong>{' '}
                  findings rest mostly on official statistics, peer-reviewed work and institutional
                  reports. <strong className="text-slate-950">{stats.trustCounts.weak}</strong> are
                  flagged as hypotheses.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <StackBar segments={trustSegments} />
            </div>

            <ul className="mt-5 divide-y divide-stone-100">
              {TRUST_ORDER.map((level) => {
                const meta = TRUST_META[level];
                const count = stats.trustCounts[level];
                return (
                  <li key={level}>
                    <Link
                      to={`/blog?trust=${level}`}
                      className="group flex items-start gap-4 py-3.5 transition hover:bg-stone-50"
                    >
                      <span
                        className={`mt-0.5 inline-flex min-w-[3.25rem] justify-center rounded-md border px-2 py-1 font-display text-lg font-bold leading-none ${meta.badge}`}
                      >
                        {count}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <span className="font-display text-base font-bold text-slate-950">
                            {meta.label}
                          </span>
                          <span className="font-mono text-xs text-stone-500">
                            {pct(count, verified)}% of findings
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm text-slate-700">{meta.advice}</p>
                        <p className="mt-0.5 text-xs text-stone-500">Rule: {meta.rule}</p>
                      </div>
                      <span className="mt-1 hidden items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-slate-950 sm:inline-flex">
                        Browse
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-900">
                What the {tierTotal} sources are made of
              </div>
              <div className="mt-4">
                <StackBar segments={tierSegments} height="h-9" />
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {(['A', 'B', 'C'] as SourceTier[]).map((tier) => (
                  <li key={tier} className="flex items-start justify-between gap-3">
                    <span className="text-slate-800">
                      <strong>{TIER_META[tier].short}</strong>{' '}
                      <span className="text-stone-500">
                        {tier === 'A'
                          ? 'official statistics, laws, peer-reviewed papers'
                          : tier === 'B'
                            ? 'institution, donor and NGO reports'
                            : 'press and company material'}
                      </span>
                    </span>
                    <span className="font-mono font-bold text-slate-950">
                      {pct(stats.sourceTiers[tier], tierTotal)}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-900">
                Declared confidence
              </div>
              <div className="mt-4">
                <StackBar
                  height="h-9"
                  segments={[
                    {
                      key: 'high',
                      label: 'High',
                      value: stats.confidenceCounts.high,
                      barClass: 'bg-emerald-600',
                    },
                    {
                      key: 'medium',
                      label: 'Medium',
                      value: stats.confidenceCounts.medium,
                      barClass: 'bg-amber-500',
                    },
                    {
                      key: 'low',
                      label: 'Low',
                      value: stats.confidenceCounts.low,
                      barClass: 'bg-rose-600',
                    },
                  ]}
                />
              </div>
              <div className="mt-3 flex justify-between font-mono text-xs text-stone-500">
                <span>{stats.confidenceCounts.high} high</span>
                <span>{stats.confidenceCounts.medium} medium</span>
                <span>{stats.confidenceCounts.low} low</span>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-5">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
              <div className="text-sm text-amber-950">
                <strong className="font-display text-lg">{stats.totalDataGaps}</strong> open data
                gaps are listed across the {verified} findings. They mark what we could not source,
                and are never filled with guesses.
              </div>
            </div>
          </div>
        </div>

        {/* Breakdowns */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-slate-900">
              By sector
            </h3>
            <BarList
              rows={(['agriculture', 'water', 'energy'] as const).map((key) => ({
                key,
                label: SECTOR_META[key].label,
                value: stats.sectorCounts[key],
                barClass: SECTOR_META[key].dot,
                to: `/blog?sector=${key}`,
              }))}
            />
            <p className="mt-4 text-xs text-stone-500">
              {stats.nexusCount} findings cross two or more sectors.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-slate-900">
              By severity
            </h3>
            <BarList
              rows={(['critical', 'high', 'medium', 'low'] as const)
                .filter((key) => stats.severityCounts[key] > 0)
                .map((key) => ({
                  key,
                  label: SEVERITY_META[key].label,
                  value: stats.severityCounts[key],
                  barClass: SEVERITY_META[key].dot,
                  to: `/blog?severity=${key}`,
                }))}
            />
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-slate-900">
              By timeframe
            </h3>
            <BarList
              rows={(['current', 'predicted', 'past'] as const).map((key) => ({
                key,
                label: TIMEFRAME_META[key].label,
                value: stats.timeframeCounts[key],
                barClass:
                  key === 'current'
                    ? 'bg-sky-600'
                    : key === 'predicted'
                      ? 'bg-violet-600'
                      : 'bg-stone-500',
                to: `/blog?timeframe=${key}`,
              }))}
            />
            <p className="mt-4 text-xs text-stone-500">
              {stats.projectionCount} findings include a quantified projection.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wider text-slate-900">
              Direction of the problem
            </h3>
            <BarList
              rows={(['worsening', 'stable', 'unknown'] as const).map((key) => ({
                key,
                label: TREND_META[key].label,
                value: stats.trendCounts[key],
                barClass:
                  key === 'worsening'
                    ? 'bg-rose-600'
                    : key === 'stable'
                      ? 'bg-slate-500'
                      : 'bg-stone-400',
              }))}
            />
            <p className="mt-4 text-xs text-stone-500">
              “Unconfirmed” means the sources do not yet give a time series.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
