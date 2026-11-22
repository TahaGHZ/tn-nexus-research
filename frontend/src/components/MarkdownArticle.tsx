import React from 'react';
import { Link } from 'react-router-dom';
import type { SourceRecord } from '../types/research';
import { safeExternalUrl } from './ResearchFormatting';

interface MarkdownArticleProps {
  content: string;
  sourcesById: Map<string, SourceRecord>;
  verifiedFindingIds: Set<string>;
  onSelectSource: (src: SourceRecord) => void;
}

/**
 * Safe, pure-React Markdown renderer (zero dangerouslySetInnerHTML).
 * Transforms inline SRC-XX-NNN references into interactive source drawer buttons,
 * FND-XX-NNN references into direct links to verified findings, and validates http(s) URLs.
 */
export function MarkdownArticle({
  content,
  sourcesById,
  verifiedFindingIds,
  onSelectSource,
}: MarkdownArticleProps) {
  const renderInline = (text: string, keyPrefix: string): React.ReactNode[] => {
    // Tokenize bold, italic, code, markdown links, bare URLs, SRC IDs, FND IDs
    const tokenRegex =
      /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\(https?:\/\/[^\s)]+\)|https?:\/\/[^\s)>,;]+|\bSRC-[A-Z]+-\d+\b|\bFND-[A-Z]+-\d+\b|\b(?:SOL|PRP|RUN)-[A-Z]+-\d+\b)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let i = 0;

    while ((match = tokenRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      const token = match[0];
      const key = `${keyPrefix}-${i++}`;

      if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(
          <strong key={key} className="font-semibold text-slate-950">
            {renderInline(token.slice(2, -2), `${key}-b`)}
          </strong>
        );
      } else if (token.startsWith('*') && token.endsWith('*')) {
        parts.push(
          <em key={key} className="italic text-slate-800">
            {token.slice(1, -1)}
          </em>
        );
      } else if (token.startsWith('`') && token.endsWith('`')) {
        parts.push(
          <code
            key={key}
            className="rounded bg-stone-200/80 px-1.5 py-0.5 font-mono text-[0.85em] text-slate-900"
          >
            {token.slice(1, -1)}
          </code>
        );
      } else if (token.startsWith('[')) {
        const m = token.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
        const href = m ? safeExternalUrl(m[2]) : null;
        if (m && href) {
          parts.push(
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-900"
            >
              {m[1]}
            </a>
          );
        } else {
          parts.push(token);
        }
      } else if (token.startsWith('http://') || token.startsWith('https://')) {
        const cleaned = token.replace(/[.,;]+$/, '');
        const trailing = token.slice(cleaned.length);
        const href = safeExternalUrl(cleaned);
        if (href) {
          parts.push(
            <React.Fragment key={key}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all font-medium text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-900"
              >
                {cleaned}
              </a>
              {trailing}
            </React.Fragment>
          );
        } else {
          parts.push(token);
        }
      } else if (token.startsWith('SRC-')) {
        const srcRecord = sourcesById.get(token);
        if (srcRecord) {
          parts.push(
            <button
              key={key}
              type="button"
              onClick={() => onSelectSource(srcRecord)}
              title={`Inspect ${srcRecord.id}: ${srcRecord.title}`}
              className="mx-0.5 inline-flex items-center rounded bg-emerald-50 px-1.5 py-0.5 font-mono text-[11px] font-medium text-emerald-800 ring-1 ring-emerald-200 transition hover:bg-emerald-100 hover:text-emerald-950"
            >
              {token}
            </button>
          );
        } else {
          parts.push(
            <span
              key={key}
              className="mx-0.5 rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[11px] text-stone-600"
            >
              {token}
            </span>
          );
        }
      } else if (token.startsWith('FND-')) {
        if (verifiedFindingIds.has(token)) {
          parts.push(
            <Link
              key={key}
              to={`/blog/${token}`}
              className="mx-0.5 inline-flex items-center rounded bg-sky-50 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-sky-800 ring-1 ring-sky-200 transition hover:bg-sky-100 hover:text-sky-950"
            >
              {token}
            </Link>
          );
        } else {
          parts.push(
            <span
              key={key}
              title="This finding is currently in draft and pending verification"
              className="mx-0.5 inline-flex items-center rounded bg-stone-100 px-1.5 py-0.5 font-mono text-[11px] text-stone-500"
            >
              {token}
            </span>
          );
        }
      } else if (/^(SOL|PRP|RUN)-/.test(token)) {
        const route = token.startsWith('SOL') ? 'solutions' : token.startsWith('PRP') ? 'rnd' : 'runs';
        parts.push(
          <Link
            key={key}
            to={`/${route}/${token}`}
            className="mx-0.5 inline-flex items-center rounded bg-amber-50 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-amber-900 ring-1 ring-amber-200 transition hover:bg-amber-100"
          >
            {token}
          </Link>
        );
      } else {
        parts.push(token);
      }

      lastIndex = match.index + token.length;
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    return parts;
  };

  // Parse blocks: paragraphs, unordered lists, ordered lists, blockquotes
  const lines = content.split(/\r?\n/);
  const elements: React.ReactNode[] = [];
  let idx = 0;

  while (idx < lines.length) {
    const line = lines[idx];

    if (!line.trim()) {
      idx++;
      continue;
    }

    // Unordered list
    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (idx < lines.length && (/^\s*[-*]\s+/.test(lines[idx]) || /^\s{2,}\S/.test(lines[idx]))) {
        if (/^\s*[-*]\s+/.test(lines[idx])) {
          items.push(lines[idx].replace(/^\s*[-*]\s+/, '').trim());
        } else if (items.length > 0) {
          items[items.length - 1] += ' ' + lines[idx].trim();
        }
        idx++;
      }
      elements.push(
        <ul key={`ul-${idx}`} className="my-4 space-y-2.5 pl-5 list-disc marker:text-emerald-600">
          {items.map((item, j) => (
            <li key={j} className="text-[15.5px] leading-relaxed text-slate-700">
              {renderInline(item, `ul-${idx}-${j}`)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (idx < lines.length && (/^\s*\d+\.\s+/.test(lines[idx]) || /^\s{2,}\S/.test(lines[idx]))) {
        if (/^\s*\d+\.\s+/.test(lines[idx])) {
          items.push(lines[idx].replace(/^\s*\d+\.\s+/, '').trim());
        } else if (items.length > 0) {
          items[items.length - 1] += ' ' + lines[idx].trim();
        }
        idx++;
      }
      elements.push(
        <ol key={`ol-${idx}`} className="my-4 space-y-3 pl-5 list-decimal marker:font-semibold marker:text-slate-900">
          {items.map((item, j) => (
            <li key={j} className="text-[15.5px] leading-relaxed text-slate-700">
              {renderInline(item, `ol-${idx}-${j}`)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Blockquote
    if (line.trim().startsWith('>')) {
      const qLines: string[] = [];
      while (idx < lines.length && lines[idx].trim().startsWith('>')) {
        qLines.push(lines[idx].trim().replace(/^>\s?/, ''));
        idx++;
      }
      elements.push(
        <blockquote
          key={`bq-${idx}`}
          className="my-4 rounded-r-xl border-l-4 border-sky-500 bg-sky-50/60 px-4 py-3 text-[15px] italic leading-relaxed text-slate-800"
        >
          {renderInline(qLines.join(' '), `bq-${idx}`)}
        </blockquote>
      );
      continue;
    }

    // Table: a header row, a |---| separator row, then body rows
    if (line.trim().startsWith('|') && idx + 1 < lines.length && /^\s*\|?\s*:?-{2,}/.test(lines[idx + 1])) {
      const splitRow = (row: string) =>
        row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
      const header = splitRow(line);
      idx += 2;
      const rows: string[][] = [];
      while (idx < lines.length && lines[idx].trim().startsWith('|')) {
        rows.push(splitRow(lines[idx]));
        idx++;
      }
      elements.push(
        <div key={`tbl-${idx}`} className="my-4 overflow-x-auto rounded-xl border border-stone-200">
          <table className="w-full border-collapse text-left text-[13.5px]">
            <thead className="bg-stone-100/80">
              <tr>
                {header.map((h, j) => (
                  <th key={j} className="px-3 py-2 font-semibold text-slate-900">
                    {renderInline(h, `th-${idx}-${j}`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-stone-200/80">
                  {r.map((c, j) => (
                    <td key={j} className="px-3 py-2 align-top text-slate-700">
                      {renderInline(c, `td-${idx}-${i}-${j}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Sub-heading ###
    if (line.trim().startsWith('### ')) {
      elements.push(
        <h4
          key={`h4-${idx}`}
          className="mt-6 mb-2 font-display text-base font-bold text-slate-900"
        >
          {line.trim().replace(/^###\s+/, '')}
        </h4>
      );
      idx++;
      continue;
    }

    // Paragraph (join consecutive plain lines)
    const pLines: string[] = [];
    while (
      idx < lines.length &&
      lines[idx].trim() &&
      !/^\s*[-*]\s+/.test(lines[idx]) &&
      !/^\s*\d+\.\s+/.test(lines[idx]) &&
      !lines[idx].trim().startsWith('>') &&
      !lines[idx].trim().startsWith('|') &&
      !lines[idx].trim().startsWith('### ')
    ) {
      pLines.push(lines[idx].trim());
      idx++;
    }
    elements.push(
      <p key={`p-${idx}`} className="my-3.5 text-[15.5px] leading-[1.78] text-slate-700">
        {renderInline(pLines.join(' '), `p-${idx}`)}
      </p>
    );
  }

  return <div>{elements}</div>;
}
