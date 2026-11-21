import { useEffect } from 'react';
import { Calendar, ExternalLink, FileText, Globe, ShieldCheck, X } from 'lucide-react';
import type { SourceRecord } from '../types/research';
import { TIER_META, safeExternalUrl } from './ResearchFormatting';

interface SourceModalProps {
  source: SourceRecord | null;
  onClose: () => void;
}

export function SourceModal({ source, onClose }: SourceModalProps) {
  useEffect(() => {
    if (!source) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [source, onClose]);

  if (!source) return null;

  const tierInfo = TIER_META[source.tier] || TIER_META.B;
  const externalHref = safeExternalUrl(source.url);

  const renderLines = (text: string) => {
    const blocks = text.split(/\n{2,}/).filter((b) => b.trim().length > 0);
    return blocks.map((block, idx) => {
      const lines = block.split('\n');
      const isQuote = lines.every((l) => l.trim().startsWith('>'));
      if (isQuote) {
        return (
          <blockquote
            key={idx}
            className="my-3 rounded-r-lg border-l-4 border-emerald-500 bg-stone-50 px-4 py-3 font-mono text-xs leading-relaxed text-slate-800 whitespace-pre-wrap"
          >
            {lines.map((l) => l.replace(/^>\s?/, '')).join('\n')}
          </blockquote>
        );
      }
      if (block.trim().startsWith('English gloss:')) {
        return (
          <p
            key={idx}
            className="my-2 rounded-lg bg-sky-50/70 px-3.5 py-2.5 text-sm leading-relaxed text-sky-950"
          >
            <span className="font-semibold text-sky-900">English gloss: </span>
            {block.trim().replace(/^English gloss:\s*/, '')}
          </p>
        );
      }
      return (
        <p key={idx} className="my-2 text-sm leading-relaxed text-slate-700 whitespace-pre-wrap">
          {block}
        </p>
      );
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-end bg-slate-950/55 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="source-modal-title"
    >
      <div
        className="flex h-full w-full max-w-2xl flex-col bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-stone-200 bg-[#FAF8F4] px-6 py-5">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-slate-900 px-2 py-0.5 font-mono text-xs font-semibold text-white">
                {source.id}
              </span>
              <span
                className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${tierInfo.className}`}
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                {tierInfo.label}
              </span>
            </div>
            <h2
              id="source-modal-title"
              className="mt-2.5 font-display text-lg font-bold leading-snug text-slate-950"
            >
              {source.title || source.id}
            </h2>
            {source.publisher && (
              <p className="mt-1 text-sm text-stone-600">{source.publisher}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-stone-500 transition hover:bg-stone-200 hover:text-slate-900"
            aria-label="Close source drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Metadata bar */}
        <div className="flex flex-wrap items-center gap-4 border-b border-stone-200 bg-white px-6 py-3 text-xs text-stone-600">
          {source.year && (
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-stone-400" />
              Published: <strong className="text-slate-900">{source.year}</strong>
            </span>
          )}
          {source.type && (
            <span className="inline-flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5 text-stone-400" />
              Type: <strong className="text-slate-900">{source.type}</strong>
            </span>
          )}
          {source.language && (
            <span className="inline-flex items-center gap-1.5 uppercase">
              <Globe className="h-3.5 w-3.5 text-stone-400" />
              Lang: <strong className="text-slate-900">{source.language}</strong>
            </span>
          )}
          {source.accessed && (
            <span className="text-stone-500">Checked: {source.accessed}</span>
          )}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {source.extracts && (
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-500">
                Verbatim Extracts &amp; Glosses
              </h3>
              <div className="mt-2">{renderLines(source.extracts)}</div>
            </div>
          )}

          {source.notes && (
            <div className="mt-6 rounded-xl border border-stone-200 bg-stone-50/80 p-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-stone-500">
                Methodological Notes &amp; Caveats
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 whitespace-pre-wrap">
                {source.notes}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-stone-200 bg-[#FAF8F4] px-6 py-4">
          <span className="font-mono text-xs text-stone-500">
            Recorded by {source.addedBy || 'Nexus TN'}
          </span>
          {externalHref ? (
            <a
              href={externalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Open Original Source
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <span className="text-xs text-stone-400">No external URL listed</span>
          )}
        </div>
      </div>
    </div>
  );
}
