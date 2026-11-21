import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FindingSummary, Sector, Severity } from '../types/research';
import { SECTOR_META, TRUST_META } from './ResearchFormatting';

/**
 * A live map of the research: one dot per published finding, one line per documented link
 * between findings. A trace hops along the links of one sector, then returns to the Golem
 * and re-targets a different sector, so the picture shows breadth instead of a single thread.
 * Everything is drawn from research-index.json, nothing is invented.
 */

const VIEW = 480;
const CX = VIEW / 2;
const CY = VIEW / 2;
const KEEP_OUT_HALF = 120; // square around the Golem that no node may enter
const SECTORS: Sector[] = ['water', 'energy', 'agriculture'];

const SECTOR_COLOR: Record<Sector, string> = {
  water: '#0284C7',
  energy: '#D97706',
  agriculture: '#059669',
};

// Where each sector's cluster is pulled to (screen angles, y points down).
const ANCHOR_ANGLE: Record<Sector, number> = {
  water: (215 * Math.PI) / 180,
  energy: (325 * Math.PI) / 180,
  agriculture: Math.PI / 2,
};

const SEVERITY_RADIUS: Record<Severity, number> = {
  critical: 7,
  high: 5.5,
  medium: 4.5,
  low: 3.5,
};

interface GNode {
  id: string;
  index: number;
  sector: Sector;
  ring?: Sector;
  hollow: boolean;
  r: number;
  x: number;
  y: number;
  phase: number;
  title: string;
  theme: string;
  trust: FindingSummary['trust'];
}

interface Layout {
  nodes: GNode[];
  edges: Array<[number, number]>;
  adj: number[][];
  bySector: Record<Sector, number[]>;
  sectorTotals: Record<Sector, number>;
  edgeLookup: Map<number, number>;
  byId: Map<string, GNode>;
}

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const edgeKey = (a: number, b: number) => Math.min(a, b) * 10000 + Math.max(a, b);

function computeLayout(findings: FindingSummary[]): Layout {
  const rand = mulberry32(11);
  const idIndex = new Map(findings.map((f, i) => [f.id, i] as const));

  const anchors = {} as Record<Sector, { x: number; y: number }>;
  for (const s of SECTORS) {
    anchors[s] = {
      x: CX + Math.cos(ANCHOR_ANGLE[s]) * 172,
      y: CY + Math.sin(ANCHOR_ANGLE[s]) * 172,
    };
  }

  const nodes: GNode[] = findings.map((f, i) => ({
    id: f.id,
    index: i,
    sector: f.mainSector,
    ring: f.sectors.find((s) => s !== f.mainSector),
    hollow: f.trust === 'weak',
    r: SEVERITY_RADIUS[f.severity] ?? 4.5,
    x: anchors[f.mainSector].x + (rand() - 0.5) * 90,
    y: anchors[f.mainSector].y + (rand() - 0.5) * 90,
    phase: rand() * Math.PI * 2,
    title: f.title,
    theme: f.theme,
    trust: f.trust,
  }));

  const edges: Array<[number, number]> = [];
  const edgeLookup = new Map<number, number>();
  findings.forEach((f, i) => {
    for (const rid of f.related) {
      const j = idIndex.get(rid);
      if (j === undefined || j === i) continue;
      const key = edgeKey(i, j);
      if (edgeLookup.has(key)) continue;
      edgeLookup.set(key, edges.length);
      edges.push([Math.min(i, j), Math.max(i, j)]);
    }
  });

  const adj: number[][] = nodes.map(() => []);
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }

  // Small force simulation: repulsion, link springs, a pull to the sector anchor.
  const n = nodes.length;
  const vx = new Float64Array(n);
  const vy = new Float64Array(n);
  const ITER = 420;
  for (let iter = 0; iter < ITER; iter++) {
    const alpha = 1 - iter / ITER;
    const fx = new Float64Array(n);
    const fy = new Float64Array(n);

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d2 = dx * dx + dy * dy + 0.01;
        if (d2 > 8100) continue;
        const d = Math.sqrt(d2);
        const push = Math.min(4, 1500 / d2);
        fx[i] += (dx / d) * push;
        fy[i] += (dy / d) * push;
        fx[j] -= (dx / d) * push;
        fy[j] -= (dy / d) * push;
      }
    }
    for (const [a, b] of edges) {
      const dx = nodes[b].x - nodes[a].x;
      const dy = nodes[b].y - nodes[a].y;
      const d = Math.sqrt(dx * dx + dy * dy) + 0.01;
      const pull = (d - 30) * 0.05;
      fx[a] += (dx / d) * pull;
      fy[a] += (dy / d) * pull;
      fx[b] -= (dx / d) * pull;
      fy[b] -= (dy / d) * pull;
    }
    for (let i = 0; i < n; i++) {
      const anchor = anchors[nodes[i].sector];
      fx[i] += (anchor.x - nodes[i].x) * 0.012;
      fy[i] += (anchor.y - nodes[i].y) * 0.012;
      vx[i] = (vx[i] + fx[i]) * 0.6;
      vy[i] = (vy[i] + fy[i]) * 0.6;
      nodes[i].x += vx[i] * Math.max(0.15, alpha);
      nodes[i].y += vy[i] * Math.max(0.15, alpha);

      const dx = nodes[i].x - CX;
      const dy = nodes[i].y - CY;
      if (Math.abs(dx) < KEEP_OUT_HALF && Math.abs(dy) < KEEP_OUT_HALF) {
        const penX = KEEP_OUT_HALF - Math.abs(dx);
        const penY = KEEP_OUT_HALF - Math.abs(dy);
        if (penX < penY) nodes[i].x += (dx >= 0 ? 1 : -1) * penX;
        else nodes[i].y += (dy >= 0 ? 1 : -1) * penY;
      }
      nodes[i].x = Math.min(VIEW - 16, Math.max(16, nodes[i].x));
      nodes[i].y = Math.min(VIEW - 16, Math.max(16, nodes[i].y));
    }
  }

  const bySector: Record<Sector, number[]> = { water: [], energy: [], agriculture: [] };
  nodes.forEach((node) => bySector[node.sector].push(node.index));

  return {
    nodes,
    edges,
    adj,
    bySector,
    sectorTotals: {
      water: bySector.water.length,
      energy: bySector.energy.length,
      agriculture: bySector.agriculture.length,
    },
    edgeLookup,
    byId: new Map(nodes.map((node) => [node.id, node] as const)),
  };
}

interface Progress {
  counts: Record<Sector, number>;
  active: Sector | null;
  current: string | null;
  total: number;
}

const EMPTY_PROGRESS: Progress = {
  counts: { water: 0, energy: 0, agriculture: 0 },
  active: null,
  current: null,
  total: 0,
};

interface InvestigationGraphProps {
  findings: FindingSummary[];
  themeCount: number;
  /** Rendered at the centre of the graph; receives a pixel size that fits the container. */
  children: (golemSize: number) => ReactNode;
}

export function InvestigationGraph({ findings, themeCount, children }: InvestigationGraphProps) {
  const navigate = useNavigate();
  const layout = useMemo(() => computeLayout(findings), [findings]);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(480);
  const [hover, setHover] = useState<string | null>(null);
  const [progress, setProgress] = useState<Progress>(EMPTY_PROGRESS);

  const hoverRef = useRef<string | null>(null);
  const nodeEls = useRef<Array<SVGGElement | null>>([]);
  const ringEls = useRef<Array<SVGCircleElement | null>>([]);
  const baseEdgeEls = useRef<Array<SVGLineElement | null>>([]);
  const hotEdgeEls = useRef<Array<SVGLineElement | null>>([]);
  const pulseEl = useRef<SVGCircleElement | null>(null);
  const beamEl = useRef<SVGLineElement | null>(null);

  hoverRef.current = hover;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 36px multiples keep the pixel art crisp.
  const golemSize = width >= 430 ? 216 : width >= 320 ? 144 : 108;

  // Animation loop: node drift, the traced path, the pulse and the beam from the Golem.
  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const { nodes, edges, adj, bySector, edgeLookup } = layout;
    const n = nodes.length;
    if (!n) return;

    const px = new Float64Array(n);
    const py = new Float64Array(n);
    const visitedAt = new Float64Array(n).fill(-1);
    const usedAt = new Float64Array(edges.length).fill(-1);
    let clearAt = -1;

    const rotate = () => {
      const k = Math.floor(Math.random() * SECTORS.length);
      return [...SECTORS.slice(k), ...SECTORS.slice(0, k)];
    };

    type SegKind = 'fromHub' | 'hop' | 'toHub' | 'rest';
    interface Seg {
      kind: SegKind;
      from: number;
      to: number;
      edge: number;
      start: number;
      dur: number;
    }

    let order = rotate();
    let leg = -1;
    let visited = new Set<number>();
    let counts: Record<Sector, number> = { water: 0, energy: 0, agriculture: 0 };
    let cur = -1;
    let hopsLeft = 0;
    let seg: Seg = { kind: 'rest', from: -1, to: -1, edge: -1, start: 0, dur: 0 };

    const emit = (active: Sector | null, current: number) =>
      setProgress({
        counts: { ...counts },
        active,
        current: current >= 0 ? nodes[current].id : null,
        total: visited.size,
      });

    const visit = (i: number, at: number) => {
      visited.add(i);
      visitedAt[i] = at;
      counts[nodes[i].sector] += 1;
      emit(nodes[i].sector, i);
    };

    const startLeg = (at: number) => {
      leg++;
      if (leg >= SECTORS.length) {
        clearAt = at;
        seg = { kind: 'rest', from: -1, to: -1, edge: -1, start: at, dur: 1800 };
        emit(null, -1);
        return;
      }
      const pool = bySector[order[leg]];
      const connected = pool.filter((i) => adj[i].length >= 2);
      const list = connected.length ? connected : pool;
      const to = list[Math.floor(Math.random() * list.length)];
      hopsLeft = 3 + Math.floor(Math.random() * 3);
      seg = { kind: 'fromHub', from: -1, to, edge: -1, start: at, dur: 850 };
    };

    const proceed = (at: number) => {
      if (hopsLeft > 0) {
        const options = adj[cur].filter((j) => !visited.has(j));
        if (options.length) {
          const to = options[Math.floor(Math.random() * options.length)];
          const edge = edgeLookup.get(edgeKey(cur, to)) ?? -1;
          if (edge >= 0) usedAt[edge] = at;
          seg = { kind: 'hop', from: cur, to, edge, start: at, dur: 640 };
          return;
        }
      }
      seg = { kind: 'toHub', from: cur, to: -1, edge: -1, start: at, dur: 700 };
    };

    const onArrive = (at: number) => {
      switch (seg.kind) {
        case 'fromHub':
          cur = seg.to;
          visit(cur, at);
          proceed(at);
          break;
        case 'hop':
          cur = seg.to;
          hopsLeft--;
          visit(cur, at);
          proceed(at);
          break;
        case 'toHub':
          startLeg(at);
          break;
        case 'rest':
          visited = new Set();
          counts = { water: 0, energy: 0, agriculture: 0 };
          visitedAt.fill(-1);
          usedAt.fill(-1);
          clearAt = -1;
          leg = -1;
          order = rotate();
          startLeg(at);
          break;
      }
    };

    const ease = (u: number) => (u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2);
    const persist = (at: number) => (clearAt < 0 ? 1 : Math.max(0, 1 - (at - clearAt) / 1200));

    let raf = 0;
    let started = false;

    const frame = (now: number) => {
      if (!started) {
        started = true;
        startLeg(now);
      }
      if (now > seg.start + seg.dur + 1500) seg.start = now - seg.dur; // tab was hidden
      for (let guard = 0; guard < 6 && now >= seg.start + seg.dur; guard++) {
        onArrive(seg.start + seg.dur);
      }

      for (let i = 0; i < n; i++) {
        px[i] = nodes[i].x + Math.sin(now / 1700 + nodes[i].phase) * 2.2;
        py[i] = nodes[i].y + Math.cos(now / 2100 + nodes[i].phase * 1.3) * 2.2;
      }

      // Pulse and beam
      const u = seg.dur ? Math.min(1, Math.max(0, (now - seg.start) / seg.dur)) : 1;
      const e = ease(u);
      let pulseX = CX;
      let pulseY = CY;
      let pulseOpacity = 0;
      let beamOpacity = 0;
      let color = '#64748B';
      if (seg.kind === 'fromHub') {
        pulseX = CX + (px[seg.to] - CX) * e;
        pulseY = CY + (py[seg.to] - CY) * e;
        pulseOpacity = 1;
        beamOpacity = 0.85;
        color = SECTOR_COLOR[nodes[seg.to].sector];
      } else if (seg.kind === 'hop') {
        pulseX = px[seg.from] + (px[seg.to] - px[seg.from]) * e;
        pulseY = py[seg.from] + (py[seg.to] - py[seg.from]) * e;
        pulseOpacity = 1;
        beamOpacity = 0.22;
        color = SECTOR_COLOR[nodes[seg.to].sector];
      } else if (seg.kind === 'toHub') {
        pulseX = px[seg.from] + (CX - px[seg.from]) * e;
        pulseY = py[seg.from] + (CY - py[seg.from]) * e;
        pulseOpacity = 1;
        beamOpacity = 0.85;
        color = SECTOR_COLOR[nodes[seg.from].sector];
      }
      const pulse = pulseEl.current;
      if (pulse) {
        pulse.setAttribute('cx', pulseX.toFixed(1));
        pulse.setAttribute('cy', pulseY.toFixed(1));
        pulse.setAttribute('stroke', color);
        pulse.style.opacity = String(pulseOpacity);
      }
      const beam = beamEl.current;
      if (beam) {
        beam.setAttribute('x2', pulseX.toFixed(1));
        beam.setAttribute('y2', pulseY.toFixed(1));
        beam.setAttribute('stroke', color);
        beam.style.opacity = String(beamOpacity);
      }

      // Edges
      const keep = persist(now);
      for (let k = 0; k < edges.length; k++) {
        const [a, b] = edges[k];
        const base = baseEdgeEls.current[k];
        if (base) {
          base.setAttribute('x1', px[a].toFixed(1));
          base.setAttribute('y1', py[a].toFixed(1));
          base.setAttribute('x2', px[b].toFixed(1));
          base.setAttribute('y2', py[b].toFixed(1));
        }
        const hot = hotEdgeEls.current[k];
        if (hot) {
          if (usedAt[k] >= 0) {
            const fresh = Math.max(0, 1 - (now - usedAt[k]) / 700);
            hot.setAttribute('x1', px[a].toFixed(1));
            hot.setAttribute('y1', py[a].toFixed(1));
            hot.setAttribute('x2', px[b].toFixed(1));
            hot.setAttribute('y2', py[b].toFixed(1));
            hot.style.opacity = String(Math.min(1, (0.55 + 0.45 * fresh) * keep));
          } else {
            hot.style.opacity = '0';
          }
        }
      }

      // Nodes
      const hovered = hoverRef.current;
      for (let i = 0; i < n; i++) {
        const g = nodeEls.current[i];
        if (!g) continue;
        const flash = visitedAt[i] >= 0 ? Math.max(0, 1 - (now - visitedAt[i]) / 700) : 0;
        const scale = 1 + 0.5 * flash + (hovered === nodes[i].id ? 0.35 : 0);
        g.setAttribute('transform', `translate(${px[i].toFixed(1)} ${py[i].toFixed(1)}) scale(${scale.toFixed(2)})`);
        const ring = ringEls.current[i];
        if (ring) {
          const seen = visitedAt[i] >= 0 ? keep : 0;
          ring.style.opacity = String(Math.min(1, 0.7 * seen + 0.3 * flash));
        }
      }

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [layout]);

  // Static SVG content. Memoised so hover and progress updates do not rebuild 200+ elements.
  const edgeLayer = useMemo(
    () => (
      <>
        <g>
          {layout.edges.map(([a, b], k) => (
            <line
              key={`b${k}`}
              ref={(el) => {
                baseEdgeEls.current[k] = el;
              }}
              x1={layout.nodes[a].x}
              y1={layout.nodes[a].y}
              x2={layout.nodes[b].x}
              y2={layout.nodes[b].y}
              stroke="#CBD5E1"
              strokeWidth={1}
            />
          ))}
        </g>
        <g>
          {layout.edges.map(([a, b], k) => (
            <line
              key={`h${k}`}
              ref={(el) => {
                hotEdgeEls.current[k] = el;
              }}
              x1={layout.nodes[a].x}
              y1={layout.nodes[a].y}
              x2={layout.nodes[b].x}
              y2={layout.nodes[b].y}
              stroke={SECTOR_COLOR[layout.nodes[a].sector]}
              strokeWidth={2.2}
              strokeLinecap="round"
              style={{ opacity: 0 }}
            />
          ))}
        </g>
      </>
    ),
    [layout]
  );

  const nodeLayer = useMemo(
    () => (
      <g>
        {layout.nodes.map((node) => {
          const color = SECTOR_COLOR[node.sector];
          return (
            <g
              key={node.id}
              ref={(el) => {
                nodeEls.current[node.index] = el;
              }}
              transform={`translate(${node.x} ${node.y})`}
              role="link"
              tabIndex={0}
              aria-label={`${node.id}: ${node.title}`}
              className="cursor-pointer outline-none"
              onMouseEnter={() => setHover(node.id)}
              onMouseLeave={() => setHover((h) => (h === node.id ? null : h))}
              onFocus={() => setHover(node.id)}
              onBlur={() => setHover((h) => (h === node.id ? null : h))}
              onClick={() => navigate(`/blog/${node.id}`)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') navigate(`/blog/${node.id}`);
              }}
            >
              <circle
                ref={(el) => {
                  ringEls.current[node.index] = el;
                }}
                r={node.r + 4.5}
                fill="none"
                stroke={color}
                strokeWidth={1.6}
                style={{ opacity: 0 }}
              />
              {node.ring && (
                <circle
                  r={node.r + 2.2}
                  fill="none"
                  stroke={SECTOR_COLOR[node.ring]}
                  strokeWidth={1.4}
                />
              )}
              <circle
                r={node.r}
                fill={node.hollow ? '#FAF8F4' : color}
                stroke={color}
                strokeWidth={node.hollow ? 1.8 : 0}
              />
              <circle r={Math.max(12, node.r + 6)} fill="transparent" />
            </g>
          );
        })}
      </g>
    ),
    [layout, navigate]
  );

  const hovered = hover ? layout.byId.get(hover) : undefined;
  const current = progress.current ? layout.byId.get(progress.current) : undefined;
  const totalLinks = layout.edges.length;

  return (
    <div>
      <div ref={wrapRef} className="relative mx-auto aspect-square w-full max-w-[520px]">
        <svg
          viewBox={`0 0 ${VIEW} ${VIEW}`}
          className="absolute inset-0 h-full w-full"
          role="group"
          aria-label="Map of published findings and the documented links between them"
        >
          {edgeLayer}
          <line
            ref={beamEl}
            x1={CX}
            y1={CY}
            x2={CX}
            y2={CY}
            strokeWidth={1.4}
            strokeDasharray="3 4"
            style={{ opacity: 0 }}
          />
          {nodeLayer}
          <circle
            ref={pulseEl}
            cx={CX}
            cy={CY}
            r={5}
            fill="#FFFFFF"
            strokeWidth={2.5}
            style={{ opacity: 0 }}
            pointerEvents="none"
          />
        </svg>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="pointer-events-auto">{children(golemSize)}</div>
        </div>

        {hovered && (
          <div
            className="pointer-events-none absolute z-10 w-60 -translate-x-1/2 -translate-y-full rounded-lg border border-stone-300 bg-white p-2.5 text-left shadow-md"
            style={{
              left: `${Math.min(80, Math.max(20, (hovered.x / VIEW) * 100))}%`,
              top: `${(hovered.y / VIEW) * 100}%`,
              marginTop: -10,
            }}
          >
            <div className="flex items-center justify-between gap-2 font-mono text-[10px] font-semibold">
              <span style={{ color: SECTOR_COLOR[hovered.sector] }}>{hovered.id}</span>
              <span className="text-stone-500">{TRUST_META[hovered.trust].label}</span>
            </div>
            <p className="mt-1 line-clamp-3 text-xs leading-snug text-slate-800">{hovered.title}</p>
            <p className="mt-1 text-[10px] text-stone-500">Click to open</p>
          </div>
        )}
      </div>

      <div className="mx-auto mt-3 max-w-[520px] rounded-xl border border-stone-200 bg-white p-3.5">
        <div className="flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-wider text-stone-500">
          <span>Live investigation trace</span>
          <span className="text-slate-900">{progress.total} findings followed</span>
        </div>

        <div className="mt-2.5 grid grid-cols-3 gap-2">
          {SECTORS.map((sector) => {
            const active = progress.active === sector;
            return (
              <div
                key={sector}
                className={`rounded-lg border px-2.5 py-1.5 transition-colors ${
                  active ? 'border-slate-950 bg-stone-50' : 'border-stone-200'
                }`}
              >
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-800">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: SECTOR_COLOR[sector] }}
                  />
                  {SECTOR_META[sector].label}
                </div>
                <div className="font-mono text-xs text-slate-950">
                  {progress.counts[sector]}
                  <span className="text-stone-400"> / {layout.sectorTotals[sector]}</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-2.5 min-h-[2rem] text-xs leading-snug text-slate-700">
          {current ? (
            <>
              <span className="font-mono font-semibold" style={{ color: SECTOR_COLOR[current.sector] }}>
                {current.id}
              </span>{' '}
              {current.title.length > 92 ? `${current.title.slice(0, 92)}…` : current.title}
            </>
          ) : (
            'Returning to the Golem to pick the next sector…'
          )}
        </p>

        <p className="mt-2 border-t border-stone-100 pt-2 text-[11px] leading-snug text-stone-500">
          {layout.nodes.length} findings, {totalLinks} documented links, {themeCount} themes. The trace
          follows links inside one sector, then the Golem re-targets another, so no single finding
          sets the story. Hollow dot: treat with caution. Outer ring: also touches another sector.
        </p>
      </div>
    </div>
  );
}
