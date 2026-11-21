import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ArrowUpRight,
  FileCheck2,
  Filter,
  LayoutGrid,
  List,
  Search,
  SlidersHorizontal,
  X,
} from 'lucide-react';
import { FindingCard } from '../components/FindingCard';
import {
  CONFIDENCE_META,
  SECTOR_META,
  SEVERITY_META,
  TIMEFRAME_META,
  formatTheme,
} from '../components/ResearchFormatting';
import type { Confidence, ResearchIndex, Sector, Severity, Timeframe } from '../types/research';

interface BlogPageProps {
  data: ResearchIndex;
}

type SectorFilter = 'all' | Sector | 'nexus';
type SortOption = 'id' | 'severity' | 'indicators' | 'sources';

const SEVERITY_RANK: Record<Severity, number> = {
  critical: 4,
  high: 3,
  medium: 2,
  low: 1,
};

export function BlogPage({ data }: BlogPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('id');

  const query = searchParams.get('q') || '';
  const sectorFilter = (searchParams.get('sector') as SectorFilter) || 'all';
  const timeframeFilter = (searchParams.get('timeframe') as Timeframe | 'all') || 'all';
  const severityFilter = (searchParams.get('severity') as Severity | 'all') || 'all';
  const confidenceFilter = (searchParams.get('confidence') as Confidence | 'all') || 'all';
  const themeFilter = searchParams.get('theme') || 'all';

  const updateParam = (key: string, value: string) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === 'all') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next, { replace: true });
  };

  const clearAllFilters = () => {
    setSearchParams({}, { replace: true });
  };

  const crossSectorCount = useMemo(
    () => data.findings.filter((f) => f.isCrossSector).length,
    [data.findings]
  );

  const filteredFindings = useMemo(() => {
    const q = query.trim().toLowerCase();

    const matched = data.findings.filter((f) => {
      if (sectorFilter === 'nexus' && !f.isCrossSector) return false;
      if (
        sectorFilter !== 'all' &&
        sectorFilter !== 'nexus' &&
        f.mainSector !== sectorFilter &&
        !f.sectors.includes(sectorFilter)
      ) {
        return false;
      }
      if (timeframeFilter !== 'all' && f.timeframe !== timeframeFilter) return false;
      if (severityFilter !== 'all' && f.severity !== severityFilter) return false;
      if (confidenceFilter !== 'all' && f.confidence !== confidenceFilter) return false;
      if (themeFilter !== 'all' && f.theme !== themeFilter) return false;

      if (q) {
        const haystack = [
          f.id,
          f.title,
          f.excerpt,
          f.theme,
          f.period,
          ...f.sectors,
          ...f.geography,
          ...f.stakeholders,
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    return [...matched].sort((a, b) => {
      if (sortBy === 'severity') {
        const diff = (SEVERITY_RANK[b.severity] || 0) - (SEVERITY_RANK[a.severity] || 0);
        if (diff !== 0) return diff;
      } else if (sortBy === 'indicators') {
        const diff = b.indicatorCount - a.indicatorCount;
        if (diff !== 0) return diff;
      } else if (sortBy === 'sources') {
        const diff = b.sourceCount - a.sourceCount;
        if (diff !== 0) return diff;
      }
      return a.id.localeCompare(b.id);
    });
  }, [
    data.findings,
    query,
    sectorFilter,
    timeframeFilter,
    severityFilter,
    confidenceFilter,
    themeFilter,
    sortBy,
  ]);

  const hasActiveFilters =
    Boolean(query) ||
    sectorFilter !== 'all' ||
    timeframeFilter !== 'all' ||
    severityFilter !== 'all' ||
    confidenceFilter !== 'all' ||
    themeFilter !== 'all';

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-xs sm:p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 font-mono text-xs font-semibold text-teal-800">
              <FileCheck2 className="h-3.5 w-3.5" />
              Verified Findings Blog · {data.stats.verifiedFindings} Published Records
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Tunisia Nexus Research Archive
            </h1>
            <p className="mt-2.5 text-sm leading-relaxed text-stone-600 sm:text-base">
              Every article below is parsed directly from the repository’s verified Markdown
              findings (<code className="rounded bg-stone-100 px-1.5 py-0.5 text-xs">in-review</code>{' '}
              and <code className="rounded bg-stone-100 px-1.5 py-0.5 text-xs">validated</code>).{' '}
              <span className="text-stone-500">
                {data.stats.draftFindings} unverified draft findings are excluded until they pass
                source verification.
              </span>
            </p>
          </div>

          {/* Search input */}
          <div className="w-full lg:w-80">
            <label htmlFor="finding-search" className="sr-only">
              Search verified findings
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                id="finding-search"
                type="search"
                value={query}
                onChange={(e) => updateParam('q', e.target.value)}
                placeholder="Search ID, topic, governorate..."
                className="w-full rounded-xl border border-stone-300 bg-[#FAF8F4] py-2.5 pr-9 pl-10 text-sm text-slate-900 placeholder:text-stone-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => updateParam('q', '')}
                  className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded p-1 text-stone-400 hover:text-slate-800"
                  aria-label="Clear search"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sector Tabs */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-stone-100 pt-5">
          {(
            [
              { key: 'all', label: 'All Sectors', count: data.stats.verifiedFindings },
              { key: 'water', label: 'Water', count: data.stats.sectorCounts.water },
              { key: 'energy', label: 'Energy', count: data.stats.sectorCounts.energy },
              {
                key: 'agriculture',
                label: 'Agriculture',
                count: data.stats.sectorCounts.agriculture,
              },
              { key: 'nexus', label: 'Cross-Sector Nexus', count: crossSectorCount },
            ] as const
          ).map((tab) => {
            const active = sectorFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => updateParam('sector', tab.key)}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition ${
                  active
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'bg-stone-100 text-slate-700 hover:bg-stone-200/80'
                }`}
              >
                {tab.label}
                <span
                  className={`rounded-full px-1.5 py-0.5 font-mono text-[11px] ${
                    active ? 'bg-white/15 text-emerald-300' : 'bg-white text-stone-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Secondary filters row */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500">
              <Filter className="h-3.5 w-3.5" />
              Filters:
            </span>

            <select
              aria-label="Filter by timeframe"
              value={timeframeFilter}
              onChange={(e) => updateParam('timeframe', e.target.value)}
              className="rounded-lg border border-stone-200 bg-[#FAF8F4] px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:border-emerald-500 focus:outline-none"
            >
              <option value="all">All Timeframes</option>
              <option value="past">Past Legacy ({data.stats.timeframeCounts.past})</option>
              <option value="current">Current ({data.stats.timeframeCounts.current})</option>
              <option value="predicted">Projected ({data.stats.timeframeCounts.predicted})</option>
            </select>

            <select
              aria-label="Filter by theme"
              value={themeFilter}
              onChange={(e) => updateParam('theme', e.target.value)}
              className="rounded-lg border border-stone-200 bg-[#FAF8F4] px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:border-emerald-500 focus:outline-none"
            >
              <option value="all">All Themes ({data.themes.length})</option>
              {data.themes.map((t) => (
                <option key={t} value={t}>
                  {formatTheme(t)}
                </option>
              ))}
            </select>

            <select
              aria-label="Filter by severity"
              value={severityFilter}
              onChange={(e) => updateParam('severity', e.target.value)}
              className="rounded-lg border border-stone-200 bg-[#FAF8F4] px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:border-emerald-500 focus:outline-none"
            >
              <option value="all">All Severities</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

            <select
              aria-label="Filter by confidence"
              value={confidenceFilter}
              onChange={(e) => updateParam('confidence', e.target.value)}
              className="rounded-lg border border-stone-200 bg-[#FAF8F4] px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:border-emerald-500 focus:outline-none"
            >
              <option value="all">All Confidence</option>
              <option value="high">High confidence</option>
              <option value="medium">Medium confidence</option>
              <option value="low">Low confidence</option>
            </select>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-50"
              >
                <X className="h-3.5 w-3.5" />
                Reset
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 text-xs text-stone-500">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <select
                aria-label="Sort findings"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-lg border border-stone-200 bg-[#FAF8F4] px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:border-emerald-500 focus:outline-none"
              >
                <option value="id">Sort: Record ID</option>
                <option value="severity">Sort: Highest Severity</option>
                <option value="indicators">Sort: Most Indicators</option>
                <option value="sources">Sort: Most Sources</option>
              </select>
            </div>

            <div className="inline-flex rounded-lg border border-stone-200 bg-[#FAF8F4] p-0.5">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`rounded-md p-1.5 transition ${
                  viewMode === 'grid'
                    ? 'bg-white text-slate-950 shadow-2xs'
                    : 'text-stone-500 hover:text-slate-900'
                }`}
                aria-label="Card grid view"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`rounded-md p-1.5 transition ${
                  viewMode === 'list'
                    ? 'bg-white text-slate-950 shadow-2xs'
                    : 'text-stone-500 hover:text-slate-900'
                }`}
                aria-label="Compact list view"
              >
                <List className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mt-6 flex items-center justify-between text-xs text-stone-500">
        <span>
          Showing <strong className="font-semibold text-slate-900">{filteredFindings.length}</strong>{' '}
          of {data.stats.verifiedFindings} verified findings
        </span>
      </div>

      {/* Results */}
      {filteredFindings.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-16 text-center">
          <p className="font-display text-lg font-bold text-slate-900">
            No verified findings match those filters
          </p>
          <p className="mt-1.5 text-sm text-stone-500">
            Try widening the sector, theme, or search query.
          </p>
          <button
            type="button"
            onClick={clearAllFilters}
            className="mt-4 rounded-xl bg-slate-950 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            Reset all filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredFindings.map((finding) => (
            <FindingCard key={finding.id} finding={finding} />
          ))}
        </div>
      ) : (
        <div className="mt-5 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xs">
          <div className="divide-y divide-stone-100">
            {filteredFindings.map((f) => {
              const sec = SECTOR_META[f.mainSector] || SECTOR_META.water;
              const sev = SEVERITY_META[f.severity] || SEVERITY_META.medium;
              const tf = TIMEFRAME_META[f.timeframe] || TIMEFRAME_META.current;
              const conf = CONFIDENCE_META[f.confidence] || CONFIDENCE_META.medium;
              return (
                <Link
                  key={f.id}
                  to={`/blog/${f.id}`}
                  className="group flex flex-col gap-3 px-5 py-4 transition hover:bg-stone-50 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-[11px]">
                      <span className="font-mono font-semibold text-emerald-800">{f.id}</span>
                      <span className={`rounded-full border px-2 py-0.5 font-medium ${sec.badge}`}>
                        {sec.label}
                      </span>
                      <span className="text-stone-500">{formatTheme(f.theme)}</span>
                      <span className={`rounded-full border px-2 py-0.5 ${tf.className}`}>
                        {tf.label}
                      </span>
                      <span className={`rounded-full border px-2 py-0.5 ${sev.className}`}>
                        {sev.label}
                      </span>
                    </div>
                    <h3 className="mt-1.5 font-display text-base font-bold text-slate-950 group-hover:text-emerald-800">
                      {f.title}
                    </h3>
                  </div>
                  <div className="flex shrink-0 items-center gap-3 text-xs text-stone-500">
                    <span className={`rounded-full border px-2 py-0.5 text-[11px] ${conf.className}`}>
                      {f.confidence}
                    </span>
                    <span className="font-mono">{f.indicatorCount} ind</span>
                    <span className="font-mono text-emerald-700">{f.sourceCount} SRC</span>
                    <ArrowUpRight className="h-4 w-4 text-stone-400 group-hover:text-slate-900" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
