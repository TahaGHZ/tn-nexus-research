import { Link, NavLink } from 'react-router-dom';
import { BookOpen, Compass, Layers, Menu, Scale, X } from 'lucide-react';
import { useState } from 'react';
import { PixelGolem } from './PixelGolem';

interface NavbarProps {
  verifiedCount: number;
  solutionCount: number;
}

export function Navbar({ verifiedCount, solutionCount }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-slate-900 text-white shadow-xs'
        : 'text-slate-700 hover:bg-stone-200/70 hover:text-slate-950'
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/90 bg-[#FAF8F4]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 ring-1 ring-emerald-400/30 transition-all group-hover:ring-sky-400/60">
            <PixelGolem size={36} interactive={false} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight text-slate-950">
              NEXUS <span className="text-emerald-700">TN</span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-stone-500">
              Water · Energy · Agri
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1.5 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            <Compass className="h-4 w-4" />
            Overview
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            <BookOpen className="h-4 w-4" />
            Verified Findings
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-mono text-[11px] font-semibold text-emerald-800">
              {verifiedCount}
            </span>
          </NavLink>
          <NavLink to="/solutions" className={navLinkClass}>
            <Scale className="h-4 w-4" />
            Solution Audits
            <span className="rounded-full bg-amber-100 px-2 py-0.5 font-mono text-[11px] font-semibold text-amber-800">
              {solutionCount}
            </span>
          </NavLink>
          <NavLink to="/modules" className={navLinkClass}>
            <Layers className="h-4 w-4" />
            Modules
            <span className="rounded-full bg-sky-100 px-1.5 py-0.5 font-mono text-[10px] font-medium text-sky-800">
              Roadmap
            </span>
          </NavLink>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Read Findings
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-stone-200/70 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="border-t border-stone-200 bg-[#FAF8F4] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1.5">
            <NavLink to="/" end className={navLinkClass} onClick={() => setMobileOpen(false)}>
              <Compass className="h-4 w-4" />
              Overview
            </NavLink>
            <NavLink to="/blog" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              <BookOpen className="h-4 w-4" />
              Verified Findings ({verifiedCount})
            </NavLink>
            <NavLink to="/solutions" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              <Scale className="h-4 w-4" />
              Solution Audits ({solutionCount})
            </NavLink>
            <NavLink to="/modules" className={navLinkClass} onClick={() => setMobileOpen(false)}>
              <Layers className="h-4 w-4" />
              Platform Modules
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
