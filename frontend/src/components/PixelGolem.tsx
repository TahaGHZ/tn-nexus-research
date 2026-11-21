import { useEffect, useRef, useState } from 'react';

export type GolemMode = 'nexus' | 'water' | 'agriculture' | 'energy';

interface PixelGolemProps {
  size?: number;
  mode?: GolemMode;
  interactive?: boolean;
  onSurge?: () => void;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  vy: number;
  vx: number;
  life: number;
  maxLife: number;
  kind: 'green' | 'blue' | 'spark';
}

// Color legend for our 36x36 articulated pixel-art Golem
const BASE_PALETTE: Record<string, string> = {
  o: '#0B1220', // deep obsidian outline
  d: '#1E293B', // stone deep shadow
  s: '#334155', // stone dark mid
  m: '#4E5F76', // stone body
  l: '#7C8FA6', // stone warm highlight
  h: '#B4C1D0', // stone top bevel edge
  v: '#1F4B3B', // ancient moss crevice
  // Green gem ramp (Agriculture / Earth)
  G: '#047857', // emerald dark facet
  g: '#10B981', // emerald core
  E: '#34D399', // emerald bright
  e: '#A7F3D0', // emerald specular glint
  // Blue gem ramp (Water / Energy)
  B: '#0369A1', // sapphire dark facet
  b: '#0EA5E9', // sapphire core
  C: '#38BDF8', // cyan bright
  c: '#BAE6FD', // cyan specular glint
  // Eyes
  Y: '#38BDF8', // eye base
  y: '#E0F2FE', // eye core highlight
};

// Legs (anchored, rows y=25..31)
const LEGS_SPRITE: { y: number; x: number; rows: string[] } = {
  y: 25,
  x: 11,
  rows: [
    'oommmoodoommmoo',
    'omllsoodoollmmo',
    'omsssoodoosssmo',
    'odddooddooddddo',
    'ommlooddoolmmmo',
    'ommmsoodoosmmmo',
    'ooooooooooooooo',
  ],
};

// Torso + Dual-Crystal Nexus Heart (rows y=13..25)
const TORSO_SPRITE: { y: number; x: number; rows: string[] } = {
  y: 13,
  x: 10,
  rows: [
    '..oooooooooooo..',
    '.ohllmmmmmmllho.',
    'ohlmmGggggBmmlho',
    'ommvGeEegCcBbmmo',
    'ommmGgEeCcBbmmmo',
    'ommmGGgECbBBmmmo',
    'osmmvGggBBbmmmso',
    'osmmmmooommmmmso',
    '.osmmmsddsmmmso.',
    '.odsssmmmmsssdo.',
    '..odssddddssdo..',
    '...oooooooooo...',
  ],
};

// Head + Dual Brow Crest Gems + Eyes (rows y=5..13)
const HEAD_SPRITE: { y: number; x: number; rows: string[] } = {
  y: 5,
  x: 12,
  rows: [
    '..oo....oo..',
    '.oEgooooBCo.',
    '.ogGhhhhCbo.',
    'oohllmmllhoo',
    'omlYYmmYYlmo',
    'ommyYmmYymmo',
    'osmmvmmvmmso',
    '.odssmmssdo.',
    '..oooooooo..',
  ],
};

// Left Arm (Emerald-dominant crystal pauldron + Sapphire gauntlet gem)
const LEFT_ARM_SPRITE: { y: number; x: number; rows: string[] } = {
  y: 10,
  x: 3,
  rows: [
    '..ooo....',
    '.oEeGo...',
    'oEegGgo..',
    'oGggGGho.',
    'ooGmmlhho',
    '.omllmmso',
    '.ommssddo',
    'oommmoooo',
    'omlBbmmmo',
    'omBCcmms.',
    'osBBbmmo.',
    '.oddddo..',
    '..oooo...',
  ],
};

// Right Arm (Sapphire-dominant crystal pauldron + Emerald gauntlet gem)
const RIGHT_ARM_SPRITE: { y: number; x: number; rows: string[] } = {
  y: 10,
  x: 24,
  rows: [
    '....ooo..',
    '...oBcCo.',
    '..oBbCcCo',
    '.ohBBbbCo',
    'ohhlmmBoo',
    'osmmllmo.',
    'oddssmmmo',
    'oooommmoo',
    'ommmGgmlo',
    '.smmEeGmo',
    '.ommGGgso',
    '..oddddo.',
    '...oooo..',
  ],
};

function drawSprite(
  ctx: CanvasRenderingContext2D,
  sprite: { x: number; y: number; rows: string[] },
  dx: number,
  dy: number,
  scale: number,
  colorOverrides: Record<string, string>,
  blink: boolean
) {
  for (let r = 0; r < sprite.rows.length; r++) {
    const row = sprite.rows[r];
    for (let c = 0; c < row.length; c++) {
      const ch = row[c];
      if (ch === '.') continue;
      let fill = colorOverrides[ch] || BASE_PALETTE[ch];
      if (blink && (ch === 'Y' || ch === 'y')) {
        fill = '#1E293B';
      }
      if (!fill) continue;
      ctx.fillStyle = fill;
      ctx.fillRect((sprite.x + c + dx) * scale, (sprite.y + r + dy) * scale, scale, scale);
    }
  }
}

export function PixelGolem({
  size = 288,
  mode = 'nexus',
  interactive = true,
  onSurge,
  className = '',
}: PixelGolemProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const surgeUntilRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const [hovered, setHovered] = useState(false);

  const triggerSurge = () => {
    const now = performance.now();
    surgeUntilRef.current = now + 950;
    // Burst green and blue pixel sparkles from core & shoulders
    const burst: Particle[] = [];
    for (let i = 0; i < 16; i++) {
      const angle = (Math.PI * 2 * i) / 16 + (Math.random() - 0.5) * 0.3;
      const speed = 0.12 + Math.random() * 0.14;
      burst.push({
        x: 18 + (Math.random() - 0.5) * 8,
        y: 17 + (Math.random() - 0.5) * 6,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.08,
        life: 0,
        maxLife: 24 + Math.random() * 18,
        kind: i % 3 === 0 ? 'spark' : i % 2 === 0 ? 'green' : 'blue',
      });
    }
    particlesRef.current = [...particlesRef.current, ...burst].slice(-36);
    onSurge?.();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const GRID = 36;
    const scale = Math.max(1, Math.floor(size / GRID));
    const pixelDim = GRID * scale;
    canvas.width = pixelDim;
    canvas.height = pixelDim;
    ctx.imageSmoothingEnabled = false;

    let rafId = 0;
    let frame = 0;

    const render = (now: number) => {
      frame++;
      ctx.clearRect(0, 0, pixelDim, pixelDim);

      const isSurging = now < surgeUntilRef.current;
      const t = now * 0.001;

      // Pixel-snapped breathing & arm rhythm
      const breathPhase = Math.sin(t * 2.4);
      const bobY = isSurging ? -1 : breathPhase > 0.35 ? -1 : 0;
      const leftArmY = isSurging ? -2 : Math.sin(t * 2.4 + 0.6) > 0.4 ? -1 : 0;
      const rightArmY = isSurging ? -2 : Math.sin(t * 2.4 + 1.4) > 0.4 ? -1 : 0;

      // Natural eye blink every ~3.8 seconds
      const blinkCycle = t % 3.8;
      const blink = !isSurging && blinkCycle > 3.64;

      // Animated gem luminance pulse + mode emphasis
      const pulseG = 0.5 + 0.5 * Math.sin(t * (isSurging ? 12 : 3.2));
      const pulseB = 0.5 + 0.5 * Math.sin(t * (isSurging ? 12 : 3.2) + 1.5);

      const boostGreen = mode === 'agriculture' || isSurging;
      const boostBlue = mode === 'water' || mode === 'energy' || isSurging;

      const overrides: Record<string, string> = {};

      // Green gem crystal shimmer
      if (boostGreen || pulseG > 0.68) {
        overrides.g = '#22C55E';
        overrides.E = '#6EE7B7';
        overrides.e = '#ECFDF5';
      } else if (pulseG < 0.25) {
        overrides.g = '#059669';
        overrides.E = '#10B981';
      }

      // Blue gem crystal shimmer
      if (boostBlue || pulseB > 0.68) {
        overrides.b = '#38BDF8';
        overrides.C = '#7DD3FC';
        overrides.c = '#F0F9FF';
      } else if (pulseB < 0.25) {
        overrides.b = '#0284C7';
        overrides.C = '#0EA5E9';
      }

      // Mode-specific eye glow
      if (isSurging) {
        overrides.Y = '#7DD3FC';
        overrides.y = '#FFFFFF';
      } else if (mode === 'agriculture') {
        overrides.Y = '#34D399';
        overrides.y = '#ECFDF5';
      } else if (mode === 'energy') {
        overrides.Y = '#38BDF8';
        overrides.y = '#FEF08A';
      }

      // Subtle ambient radial glow behind crystal core (pixelated stepped circles)
      const auraAlpha = isSurging ? 0.28 : hovered ? 0.2 : 0.14;
      const cx = 18 * scale;
      const cy = (18 + bobY) * scale;
      const gradG = ctx.createRadialGradient(cx - 3 * scale, cy, scale, cx - 3 * scale, cy, 13 * scale);
      gradG.addColorStop(0, `rgba(16, 185, 129, ${boostGreen ? auraAlpha * 1.5 : auraAlpha})`);
      gradG.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = gradG;
      ctx.fillRect(0, 0, pixelDim, pixelDim);

      const gradB = ctx.createRadialGradient(cx + 3 * scale, cy, scale, cx + 3 * scale, cy, 13 * scale);
      gradB.addColorStop(0, `rgba(14, 165, 233, ${boostBlue ? auraAlpha * 1.5 : auraAlpha})`);
      gradB.addColorStop(1, 'rgba(14, 165, 233, 0)');
      ctx.fillStyle = gradB;
      ctx.fillRect(0, 0, pixelDim, pixelDim);

      // Ground shadow (shrinks 1px on inhale)
      const shadowInset = bobY < 0 ? 1 : 0;
      ctx.fillStyle = 'rgba(2, 6, 23, 0.45)';
      ctx.fillRect((9 + shadowInset) * scale, 32 * scale, (18 - shadowInset * 2) * scale, scale);
      ctx.fillStyle = 'rgba(2, 6, 23, 0.25)';
      ctx.fillRect((11 + shadowInset) * scale, 33 * scale, (14 - shadowInset * 2) * scale, scale);

      // Draw articulated golem layers
      drawSprite(ctx, LEGS_SPRITE, 0, 0, scale, overrides, false);
      drawSprite(ctx, TORSO_SPRITE, 0, bobY, scale, overrides, false);
      drawSprite(ctx, LEFT_ARM_SPRITE, 0, leftArmY, scale, overrides, false);
      drawSprite(ctx, RIGHT_ARM_SPRITE, 0, rightArmY, scale, overrides, false);
      drawSprite(ctx, HEAD_SPRITE, 0, bobY, scale, overrides, blink);

      // Traveling crystal sparkle glint across chest & shoulder gems
      const sparkleStep = Math.floor(t * 6) % 18;
      const glintPixels: Array<[number, number, string]> = [
        [6, 11 + leftArmY, '#ECFDF5'],
        [29, 11 + rightArmY, '#F0F9FF'],
        [16, 16 + bobY, '#ECFDF5'],
        [19, 16 + bobY, '#F0F9FF'],
        [17, 17 + bobY, '#FFFFFF'],
        [18, 17 + bobY, '#FFFFFF'],
      ];
      if (sparkleStep < glintPixels.length) {
        const [gx, gy, col] = glintPixels[sparkleStep];
        ctx.fillStyle = col;
        ctx.fillRect(gx * scale, gy * scale, scale, scale);
      }

      // Spawn gentle ambient pixel motes
      if (frame % (isSurging ? 4 : 18) === 0 && particlesRef.current.length < 28) {
        const fromLeft = Math.random() > 0.5;
        const kind =
          mode === 'agriculture'
            ? 'green'
            : mode === 'water'
              ? 'blue'
              : fromLeft
                ? 'green'
                : 'blue';
        particlesRef.current.push({
          x: fromLeft ? 5 + Math.random() * 11 : 20 + Math.random() * 11,
          y: 12 + Math.random() * 10,
          vx: (Math.random() - 0.5) * 0.04,
          vy: -(0.05 + Math.random() * 0.06),
          life: 0,
          maxLife: 45 + Math.random() * 35,
          kind,
        });
      }

      // Update & draw pixel particles snapped to logical pixel grid
      const alive: Particle[] = [];
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        if (p.life < p.maxLife && p.y > 1 && p.x > 0 && p.x < GRID - 1) {
          alive.push(p);
          const alpha = Math.min(1, (1 - p.life / p.maxLife) * 1.3);
          const px = Math.round(p.x) * scale;
          const py = Math.round(p.y) * scale;
          if (p.kind === 'green') {
            ctx.fillStyle = `rgba(52, 211, 153, ${alpha.toFixed(2)})`;
          } else if (p.kind === 'blue') {
            ctx.fillStyle = `rgba(56, 189, 248, ${alpha.toFixed(2)})`;
          } else {
            ctx.fillStyle = `rgba(240, 253, 250, ${alpha.toFixed(2)})`;
          }
          ctx.fillRect(px, py, scale, scale);
        }
      }
      particlesRef.current = alive;

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [size, mode, hovered]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      onClick={interactive ? triggerSurge : undefined}
      onMouseEnter={interactive ? () => setHovered(true) : undefined}
      onMouseLeave={interactive ? () => setHovered(false) : undefined}
      role={interactive ? 'button' : 'img'}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                triggerSurge();
              }
            }
          : undefined
      }
      aria-label="Nexus TN animated pixel-art Golem guardian with glowing green and blue gems"
      title={interactive ? 'Click the Nexus Golem for a crystal surge' : 'Nexus TN Golem'}
      className={`pixelated block select-none ${
        interactive ? 'cursor-pointer transition-transform duration-150 hover:scale-[1.03] active:scale-[0.98]' : ''
      } ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
