import { Link } from 'react-router-dom';
import { PixelGolem } from './PixelGolem';
import type { SiteStats } from '../types/research';

interface FooterProps {
  stats: SiteStats;
}

export function Footer({ stats }: FooterProps) {
  return (
    <footer className="border-t border-stone-200 bg-slate-950 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 ring-1 ring-emerald-400/30">
                <PixelGolem size={38} interactive={false} />
              </div>
              <div>
                <div className="font-display text-lg font-bold tracking-tight text-white">
                  NEXUS <span className="text-emerald-400">TN</span>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-slate-400">
                  Tunisia Water · Energy · Agriculture
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              An open, structured research engine documenting Tunisia’s water, energy, and
              agriculture nexus. Every number is traced to an explicit source record with original
              extracts and confidence limits.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              Explore
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <Link to="/blog" className="text-slate-300 transition hover:text-emerald-300">
                  All Verified Findings ({stats.verifiedFindings})
                </Link>
              </li>
              <li>
                <Link
                  to="/blog?sector=water"
                  className="text-slate-300 transition hover:text-sky-300"
                >
                  Water Sector ({stats.sectorCounts.water})
                </Link>
              </li>
              <li>
                <Link
                  to="/blog?sector=energy"
                  className="text-slate-300 transition hover:text-amber-300"
                >
                  Energy Sector ({stats.sectorCounts.energy})
                </Link>
              </li>
              <li>
                <Link
                  to="/blog?sector=agriculture"
                  className="text-slate-300 transition hover:text-emerald-300"
                >
                  Agriculture Sector ({stats.sectorCounts.agriculture})
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              Platform Modules
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li>
                <Link to="/blog" className="text-slate-300 transition hover:text-white">
                  Phase 1: Verified Findings Blog{' '}
                  <span className="ml-1 rounded bg-emerald-500/20 px-1.5 py-0.5 font-mono text-[10px] text-emerald-300">
                    LIVE
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/modules" className="text-slate-400 transition hover:text-white">
                  Agent Recorded Sessions{' '}
                  <span className="ml-1 rounded bg-sky-500/15 px-1.5 py-0.5 font-mono text-[10px] text-sky-300">
                    NEXT
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/modules" className="text-slate-400 transition hover:text-white">
                  Trusted Vendors &amp; Products{' '}
                  <span className="ml-1 rounded bg-amber-500/15 px-1.5 py-0.5 font-mono text-[10px] text-amber-300">
                    NEXT
                  </span>
                </Link>
              </li>
              <li>
<Link to="/solutions" className="text-slate-300 transition hover:text-white">
                  Phase 2: Solution Audits{' '}
                  <span className="ml-1 rounded bg-amber-500/15 px-1.5 py-0.5 font-mono text-[10px] text-amber-300">
                    {stats.solutionCount}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/modules" className="text-slate-400 transition hover:text-white">
                  Phase 3: R&amp;D Proposals{' '}
                  <span className="ml-1 rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                    LOCKED
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            Synced directly from repository Markdown records · {stats.totalSources} source records
            indexed ({stats.sourceTiers.A} Tier A, {stats.sourceTiers.B} Tier B,{' '}
            {stats.sourceTiers.C} Tier C).
          </p>
          <p className="font-mono text-slate-500">Photography via Pexels</p>
        </div>
      </div>
    </footer>
  );
}
