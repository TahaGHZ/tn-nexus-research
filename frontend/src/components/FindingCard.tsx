import { Link } from 'react-router-dom';
import { ArrowUpRight, BarChart3, Clock, FileCheck2, Link2 } from 'lucide-react';
import type { FindingSummary } from '../types/research';
import {
  CONFIDENCE_META,
  SECTOR_META,
  SEVERITY_META,
  STATUS_META,
  TIMEFRAME_META,
  formatTheme,
} from './ResearchFormatting';

interface FindingCardProps {
  finding: FindingSummary;
}

export function FindingCard({ finding }: FindingCardProps) {
  const mainSector = SECTOR_META[finding.mainSector] || SECTOR_META.water;
  const severity = SEVERITY_META[finding.severity] || SEVERITY_META.medium;
  const timeframe = TIMEFRAME_META[finding.timeframe] || TIMEFRAME_META.current;
  const confidence = CONFIDENCE_META[finding.confidence] || CONFIDENCE_META.medium;
  const status = STATUS_META[finding.status] || STATUS_META['in-review'];

  return (
    <Link
      to={`/blog/${finding.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg"
    >
      {/* Image header */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        <img
          src={finding.image.url}
          alt={finding.image.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/15" />

        {/* Top pills */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold backdrop-blur-sm ${mainSector.badge}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${mainSector.dot}`} />
              {mainSector.label}
            </span>
            {finding.isCrossSector && (
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/75 px-2 py-0.5 font-mono text-[10px] font-medium text-emerald-300 backdrop-blur-sm">
                <Link2 className="h-3 w-3" />
                +{finding.sectors.length - 1} nexus
              </span>
            )}
          </div>
          <span
            className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold backdrop-blur-sm ${timeframe.className}`}
          >
            {timeframe.label}
          </span>
        </div>

        {/* Bottom overlay: ID + headline indicator */}
        <div className="absolute right-3 bottom-3 left-3 flex items-end justify-between gap-2">
          <div>
            <span className="font-mono text-[11px] font-semibold tracking-wide text-emerald-300">
              {finding.id}
            </span>
            <p className="text-[11px] text-stone-200/90">{formatTheme(finding.theme)}</p>
          </div>
          {finding.topIndicator && (
            <div className="max-w-[58%] rounded-lg bg-slate-950/80 px-2.5 py-1.5 text-right ring-1 ring-white/15 backdrop-blur-sm">
              <div className="truncate font-display text-sm font-bold leading-tight text-white">
                {finding.topIndicator.value}
                {finding.topIndicator.unit === '%' ? '%' : ''}
              </div>
              <div className="truncate text-[10px] text-slate-300">
                {finding.topIndicator.unit !== '%' ? finding.topIndicator.unit : finding.topIndicator.name}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-[11px]">
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-medium ${status.className}`}
          >
            <FileCheck2 className="h-3 w-3" />
            {status.label}
          </span>
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-medium ${severity.className}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${severity.dot}`} />
            {severity.label}
          </span>
          {finding.period && (
            <span className="font-mono text-[11px] text-stone-500">{finding.period}</span>
          )}
        </div>

        <h3 className="mt-3 line-clamp-3 font-display text-[17px] font-bold leading-snug text-slate-950 transition-colors group-hover:text-emerald-800">
          {finding.title}
        </h3>

        <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-stone-600">
          {finding.excerpt}
        </p>

        {/* Footer metadata */}
        <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3.5 text-xs text-stone-500">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1" title="Structured indicators">
              <BarChart3 className="h-3.5 w-3.5 text-sky-600" />
              <span className="font-mono">{finding.indicatorCount}</span>
            </span>
            <span className="inline-flex items-center gap-1" title="Cited primary sources">
              <span className="font-mono font-semibold text-emerald-700">
                {finding.sourceCount} SRC
              </span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-stone-400" />
              {finding.readTimeMinutes}m
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className={`hidden rounded-full border px-2 py-0.5 text-[10px] font-medium sm:inline-block ${confidence.className}`}
            >
              {finding.confidence}
            </span>
            <ArrowUpRight className="h-4 w-4 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-900" />
          </div>
        </div>
      </div>
    </Link>
  );
}
