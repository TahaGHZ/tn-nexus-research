import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Calendar,
  Clock,
  Compass,
  ExternalLink,
  FileCheck2,
  GitBranch,
  History,
  MapPin,
  ShieldAlert,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { MarkdownArticle } from '../components/MarkdownArticle';
import { SourceModal } from '../components/SourceModal';
import {
  CONFIDENCE_META,
  SECTOR_META,
  SEVERITY_META,
  STATUS_META,
  TIER_META,
  TRUST_META,
  TierMixBar,
  TIMEFRAME_META,
  TREND_META,
  formatGeography,
  formatTheme,
  safeExternalUrl,
} from '../components/ResearchFormatting';
import type { FindingDetail, ResearchIndex, SourceRecord } from '../types/research';

interface FindingDetailPageProps {
  indexData: ResearchIndex;
}

export function FindingDetailPage({ indexData }: FindingDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const [finding, setFinding] = useState<FindingDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSource, setSelectedSource] = useState<SourceRecord | null>(null);
  const [showAllIndicators, setShowAllIndicators] = useState(false);

  const verifiedIds = useMemo(
    () => new Set(indexData.findings.map((f) => f.id)),
    [indexData.findings]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    if (!id) return;

    let cancelled = false;
    setLoading(true);
    setError(null);
    setShowAllIndicators(false);

    // Strictly validate finding ID pattern to prevent malformed path fetches
    if (!/^FND-[A-Z]+-\d+$/.test(id)) {
      setError('Invalid finding identifier.');
      setLoading(false);
      return;
    }

    fetch(`./data/findings/${id}.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Finding not found or not yet verified.');
        return res.json() as Promise<FindingDetail>;
      })
      .then((payload) => {
        if (!cancelled) {
          setFinding(payload);
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unable to load finding.');
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  const sourcesById = useMemo(() => {
    const map = new Map<string, SourceRecord>();
    if (finding) {
      for (const s of finding.resolvedSources) {
        map.set(s.id, s);
      }
    }
    return map;
  }, [finding]);

  if (loading) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-6">
          <div className="h-6 w-40 rounded bg-stone-200" />
          <div className="h-72 rounded-3xl bg-stone-200" />
          <div className="h-10 w-3/4 rounded bg-stone-200" />
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="h-28 rounded-2xl bg-stone-200" />
            <div className="h-28 rounded-2xl bg-stone-200" />
            <div className="h-28 rounded-2xl bg-stone-200" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !finding) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <div className="rounded-3xl border border-stone-200 bg-white p-10 shadow-xs">
          <AlertTriangle className="mx-auto h-10 w-10 text-amber-500" />
          <h1 className="mt-4 font-display text-2xl font-bold text-slate-950">
            Finding Not Available
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            {error || 'This finding either does not exist or is still in draft verification.'}
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Verified Findings
          </Link>
        </div>
      </div>
    );
  }

  const mainSector = SECTOR_META[finding.mainSector] || SECTOR_META.water;
  const severity = SEVERITY_META[finding.severity] || SEVERITY_META.medium;
  const timeframe = TIMEFRAME_META[finding.timeframe] || TIMEFRAME_META.current;
  const confidence = CONFIDENCE_META[finding.confidence] || CONFIDENCE_META.medium;
  const trend = TREND_META[finding.trend] || TREND_META.unknown;
  const status = STATUS_META[finding.status] || STATUS_META['in-review'];
  const trust = TRUST_META[finding.trust] || TRUST_META.mixed;

  const visibleIndicators = showAllIndicators
    ? finding.indicators
    : finding.indicators.slice(0, 6);

  return (
    <article className="pb-20">
      {/* Top breadcrumb bar */}
      <div className="border-b border-stone-200 bg-white/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 transition hover:text-slate-950"
          >
            <ArrowLeft className="h-4 w-4" />
            Verified Findings
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-emerald-800">{finding.id}</span>
            <span
              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${status.className}`}
            >
              <FileCheck2 className="h-3 w-3" />
              {status.label}
            </span>
          </div>
        </div>
      </div>

      {/* Article Hero */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
          <div className="relative h-64 w-full bg-slate-900 sm:h-80">
            <img
              src={finding.image.url}
              alt={finding.image.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/70" />

            <div className="absolute right-6 bottom-6 left-6 sm:right-8 sm:bottom-8 sm:left-8">
              <div className="flex flex-wrap items-center gap-2">
                {finding.sectors.map((secKey, idx) => {
                  const s = SECTOR_META[secKey] || SECTOR_META.water;
                  return (
                    <Link
                      key={secKey}
                      to={`/blog?sector=${secKey}`}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm ${s.badge}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                      {s.label}
                      {idx === 0 && finding.sectors.length > 1 ? ' (Primary)' : ''}
                    </Link>
                  );
                })}
                <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                  {formatTheme(finding.theme)}
                </span>
                <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${timeframe.className}`}>
                  {timeframe.label}
                </span>
              </div>

              <h1 className="mt-3 max-w-4xl font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                {finding.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <span className="font-mono font-semibold text-emerald-300">{finding.id}</span>
                {finding.period && (
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    Period: {finding.period}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {finding.readTimeMinutes} min read
                </span>
                <span className="inline-flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" />
                  {finding.resolvedSources.length} cited sources
                </span>
                <span className="ml-auto hidden text-[11px] text-slate-400 sm:inline">
                  Photo: {finding.image.credit}
                </span>
              </div>
            </div>
          </div>

          {/* Metadata assessment strip */}
          <div className="grid grid-cols-2 divide-y divide-stone-100 border-t border-stone-200 bg-[#FAF8F4]/70 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            <div className="px-5 py-3.5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-stone-500">
                Severity
              </div>
              <div className="mt-1">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${severity.className}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${severity.dot}`} />
                  {severity.label}
                </span>
              </div>
            </div>
            <div className="px-5 py-3.5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-stone-500">
                Trend
              </div>
              <div className="mt-1">
                <span
                  className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${trend.className}`}
                >
                  <span>{trend.symbol}</span>
                  {trend.label}
                </span>
              </div>
            </div>
            <div className="px-5 py-3.5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-stone-500">
                Evidence Confidence
              </div>
              <div className="mt-1">
                <span
                  className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${confidence.className}`}
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {confidence.label}
                </span>
              </div>
            </div>
            <div className="px-5 py-3.5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-stone-500">
                Primary Lane
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-slate-900">
                <span className={`h-2 w-2 rounded-full ${mainSector.dot}`} />
                {mainSector.label} · Author: {finding.author}
              </div>
            </div>
          </div>
        </div>

        {/* Trust assessment */}
        <section className="mt-6 rounded-2xl border border-stone-200 bg-white p-6">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-stone-500">
                How far can you trust this finding?
              </div>
              <div
                className={`mt-2 inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 font-display text-xl font-bold ${trust.badge}`}
              >
                <ShieldCheck className="h-5 w-5" />
                {trust.label}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-800">{trust.advice}</p>
              <Link
                to={`/blog?trust=${finding.trust}`}
                className="mt-3 inline-block text-xs font-semibold text-emerald-800 hover:underline"
              >
                See all “{trust.label}” findings →
              </Link>
            </div>
            <div className="md:col-span-7">
              <div className="font-mono text-[10px] uppercase tracking-wider text-stone-500">
                Why it is rated this way
              </div>
              <TierMixBar mix={finding.tierMix} className="mt-2" />
              <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                {finding.trustReasons.map((reason) => (
                  <li key={reason} className="flex gap-2">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${trust.dot}`} />
                    {reason}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-stone-500">Rule: {trust.rule}</p>
            </div>
          </div>
        </section>

        {/* Main 2-column layout */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Primary Article Column */}
          <div className="space-y-8 lg:col-span-8">
            {/* Key Indicators Section */}
            {finding.indicators.length > 0 && (
              <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-sky-600" />
                    <h2 className="font-display text-lg font-bold text-slate-950">
                      Verified Key Indicators ({finding.indicators.length})
                    </h2>
                  </div>
                  <span className="font-mono text-[11px] text-stone-500">
                    Click any SRC chip to inspect original extract
                  </span>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {visibleIndicators.map((ind, idx) => {
                    const srcObj = ind.source ? sourcesById.get(ind.source) : undefined;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col justify-between rounded-xl border border-stone-200/80 bg-[#FAF8F4]/70 p-4"
                      >
                        <div>
                          <div className="text-xs font-medium leading-snug text-stone-600">
                            {ind.name}
                          </div>
                          <div className="mt-1.5 flex items-baseline gap-1.5">
                            <span className="font-display text-2xl font-bold tracking-tight text-slate-950">
                              {ind.value}
                              {ind.unit === '%' ? '%' : ''}
                            </span>
                            {ind.unit && ind.unit !== '%' && (
                              <span className="text-xs text-stone-600">{ind.unit}</span>
                            )}
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-stone-200/70 pt-2.5 text-[11px] text-stone-500">
                          <span>
                            {ind.year ? `${ind.year}` : ''}
                            {ind.year && ind.geography ? ' · ' : ''}
                            {ind.geography ? formatGeography(ind.geography) : ''}
                          </span>
                          {srcObj ? (
                            <button
                              type="button"
                              onClick={() => setSelectedSource(srcObj)}
                              className="rounded bg-emerald-50 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-800 ring-1 ring-emerald-200 hover:bg-emerald-100"
                            >
                              {ind.source}
                            </button>
                          ) : ind.source ? (
                            <span className="font-mono text-[10px] text-stone-500">
                              {ind.source}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {finding.indicators.length > 6 && (
                  <button
                    type="button"
                    onClick={() => setShowAllIndicators((v) => !v)}
                    className="mt-4 w-full rounded-xl border border-stone-200 bg-stone-50 py-2 text-xs font-semibold text-slate-700 transition hover:bg-stone-100"
                  >
                    {showAllIndicators
                      ? 'Show fewer indicators'
                      : `Show all ${finding.indicators.length} indicators`}
                  </button>
                )}
              </section>
            )}

            {/* Projection Block (if predicted finding) */}
            {finding.projection && (
              <section className="rounded-2xl border border-violet-200 bg-violet-50/70 p-6">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-violet-800">
                  <Compass className="h-4 w-4" />
                  Projection Model &amp; Horizon
                </div>
                <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
                  {finding.projection.horizon && (
                    <div>
                      <dt className="text-xs font-medium text-violet-700">Horizon</dt>
                      <dd className="mt-0.5 font-semibold text-slate-900">
                        {finding.projection.horizon}
                      </dd>
                    </div>
                  )}
                  {finding.projection.scenario && (
                    <div>
                      <dt className="text-xs font-medium text-violet-700">Scenario</dt>
                      <dd className="mt-0.5 text-slate-800">{finding.projection.scenario}</dd>
                    </div>
                  )}
                  {finding.projection.method && (
                    <div className="sm:col-span-2">
                      <dt className="text-xs font-medium text-violet-700">Methodology</dt>
                      <dd className="mt-0.5 text-slate-800">{finding.projection.method}</dd>
                    </div>
                  )}
                </dl>
              </section>
            )}

            {/* Full Markdown Article Sections */}
            <div className="space-y-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-xs sm:p-8">
              {finding.sections.map((section) => {
                const anchor = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                return (
                  <section
                    key={section.heading}
                    id={anchor}
                    className="scroll-mt-24 border-b border-stone-100 pb-6 last:border-b-0 last:pb-0"
                  >
                    <h2 className="font-display text-xl font-bold tracking-tight text-slate-950">
                      {section.heading}
                    </h2>
                    <div className="mt-2">
                      <MarkdownArticle
                        content={section.content}
                        sourcesById={sourcesById}
                        verifiedFindingIds={verifiedIds}
                        onSelectSource={setSelectedSource}
                      />
                    </div>
                  </section>
                );
              })}
            </div>

            {/* Structured Root Causes */}
            {finding.rootCauses.length > 0 && (
              <section
                id="structured-root-causes"
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <GitBranch className="h-5 w-5 text-emerald-700" />
                  <h2 className="font-display text-lg font-bold text-slate-950">
                    Structured Root Cause Taxonomy
                  </h2>
                </div>
                <div className="mt-4 space-y-3">
                  {finding.rootCauses.map((rc, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-stone-200/80 bg-[#FAF8F4]/70 p-4"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-slate-900 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase text-white">
                          {rc.type}
                        </span>
                        {rc.legacyDecision && (
                          <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 px-2 py-0.5 font-mono text-[10px] font-semibold text-amber-900">
                            <History className="h-3 w-3" />
                            Legacy decision
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-800">{rc.cause}</p>
                      {rc.sources.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {rc.sources.map((srcId) => {
                            const sObj = sourcesById.get(srcId);
                            return sObj ? (
                              <button
                                key={srcId}
                                type="button"
                                onClick={() => setSelectedSource(sObj)}
                                className="rounded bg-emerald-50 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-800 ring-1 ring-emerald-200 hover:bg-emerald-100"
                              >
                                {srcId}
                              </button>
                            ) : (
                              <span
                                key={srcId}
                                className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[10px] text-stone-600"
                              >
                                {srcId}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Cited Sources Library */}
            <section
              id="sources-library"
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  <h2 className="font-display text-lg font-bold text-slate-950">
                    Cited Primary &amp; Secondary Sources ({finding.resolvedSources.length})
                  </h2>
                </div>
                <span className="text-xs text-stone-500">
                  Click any source to view exact untranslated extracts
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                {finding.resolvedSources.map((src) => {
                  const tier = TIER_META[src.tier] || TIER_META.B;
                  const href = safeExternalUrl(src.url);
                  return (
                    <div
                      key={src.id}
                      className="flex flex-col justify-between gap-3 rounded-xl border border-stone-200/80 bg-[#FAF8F4]/60 p-4 transition hover:border-emerald-300 hover:bg-white sm:flex-row sm:items-center"
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedSource(src)}
                        className="min-w-0 flex-1 text-left"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-emerald-800">
                            {src.id}
                          </span>
                          <span
                            className={`rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold ${tier.className}`}
                          >
                            {tier.short}
                          </span>
                          {src.year && (
                            <span className="font-mono text-[11px] text-stone-500">{src.year}</span>
                          )}
                          {src.language && (
                            <span className="rounded bg-stone-200/70 px-1.5 py-0.5 font-mono text-[10px] uppercase text-stone-700">
                              {src.language}
                            </span>
                          )}
                        </div>
                        <div className="mt-1 font-medium text-slate-900 hover:text-emerald-800">
                          {src.title}
                        </div>
                        {src.publisher && (
                          <div className="mt-0.5 text-xs text-stone-500">{src.publisher}</div>
                        )}
                      </button>

                      <div className="flex shrink-0 items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedSource(src)}
                          className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 transition hover:bg-stone-100"
                        >
                          Extracts
                        </button>
                        {href && (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-slate-700"
                          >
                            URL
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Data Gaps Transparency Box */}
            {finding.dataGaps.length > 0 && (
              <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="h-5 w-5 text-amber-700" />
                  <h2 className="font-display text-lg font-bold text-slate-950">
                    Documented Data Gaps ({finding.dataGaps.length})
                  </h2>
                </div>
                <p className="mt-1 text-xs text-amber-900/80">
                  In Nexus TN, unsourced figures are never invented — every missing or inaccessible
                  dataset is logged transparently here.
                </p>
                <ul className="mt-3 space-y-2 pl-5 list-disc text-sm leading-relaxed text-slate-800 marker:text-amber-600">
                  {finding.dataGaps.map((gap, i) => (
                    <li key={i}>{gap}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6 lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* On this page */}
              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-500">
                  In This Dossier
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {finding.sections.map((s) => {
                    const anchor = s.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    return (
                      <li key={s.heading}>
                        <a
                          href={`#${anchor}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="text-stone-600 transition hover:text-emerald-800"
                        >
                          {s.heading}
                        </a>
                      </li>
                    );
                  })}
                  <li>
                    <a
                      href="#sources-library"
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById('sources-library')
                          ?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="font-medium text-emerald-700 hover:text-emerald-900"
                    >
                      Cited Sources ({finding.resolvedSources.length})
                    </a>
                  </li>
                </ul>
              </div>

              {/* Geography */}
              {finding.geography.length > 0 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-stone-500">
                    <MapPin className="h-3.5 w-3.5 text-sky-600" />
                    Geography Covered
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {finding.geography.map((g) => (
                      <Link
                        key={g}
                        to={`/blog?q=${encodeURIComponent(g)}`}
                        className="rounded-lg border border-stone-200 bg-[#FAF8F4] px-2.5 py-1 text-xs font-medium text-slate-800 transition hover:border-sky-300 hover:bg-sky-50"
                      >
                        {formatGeography(g)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Stakeholders */}
              {finding.stakeholders.length > 0 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-stone-500">
                    <Users className="h-3.5 w-3.5 text-emerald-600" />
                    Stakeholders &amp; Institutions
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {finding.stakeholders.map((st) => (
                      <span
                        key={st}
                        className="rounded-lg bg-stone-100 px-2.5 py-1 text-xs text-slate-700"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Findings */}
              {finding.relatedItems.length > 0 && (
                <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-xs">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Related Findings
                  </h3>
                  <div className="mt-3 space-y-2.5">
                    {finding.relatedItems.map((rel) =>
                      rel.verified ? (
                        <Link
                          key={rel.id}
                          to={`/blog/${rel.id}`}
                          className="group block rounded-xl border border-stone-200/80 bg-[#FAF8F4]/70 p-3 transition hover:border-emerald-300 hover:bg-emerald-50/40"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs font-semibold text-emerald-800">
                              {rel.id}
                            </span>
                            <ArrowUpRight className="h-3.5 w-3.5 text-stone-400 group-hover:text-emerald-800" />
                          </div>
                          <p className="mt-1 line-clamp-2 text-xs font-medium leading-snug text-slate-900">
                            {rel.title}
                          </p>
                        </Link>
                      ) : (
                        <div
                          key={rel.id}
                          className="rounded-xl border border-dashed border-stone-200 bg-stone-50 px-3 py-2.5 text-xs text-stone-500"
                        >
                          <span className="font-mono font-semibold">{rel.id}</span> · Pending source
                          verification (draft)
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Interactive Source Drawer */}
      <SourceModal source={selectedSource} onClose={() => setSelectedSource(null)} />
    </article>
  );
}
