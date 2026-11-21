import { useEffect, useRef } from 'react';

export type GolemMode = 'nexus' | 'water' | 'agriculture' | 'energy';

/**
 * - auto:   breathes and blinks, and every few seconds plays a random move (wave, scan or stomp)
 * - idle:   breathing and blinking only (used for small logos)
 * - wave:   raises the right arm and waves
 * - stomp:  crouches, jumps and slams the ground, kicking up dust
 * - scan:   sweeps its head and runs a scanner beam down its body
 * - charge: shakes with the arms raised while lightning arcs over the head (energy)
 * - rain:   catches falling rain and splashes at its feet (water)
 * - bloom:  grows a flower from its head and shoulders (agriculture)
 */
export type GolemAnimation = 'auto' | 'idle' | 'wave' | 'stomp' | 'scan' | 'charge' | 'rain' | 'bloom';

export const GOLEM_ANIMATIONS: Array<{
  id: GolemAnimation;
  label: string;
  mode: GolemMode;
}> = [
  { id: 'auto', label: 'Auto', mode: 'nexus' },
  { id: 'wave', label: 'Wave', mode: 'nexus' },
  { id: 'stomp', label: 'Stomp', mode: 'nexus' },
  { id: 'scan', label: 'Scan', mode: 'nexus' },
  { id: 'rain', label: 'Rain · Water', mode: 'water' },
  { id: 'charge', label: 'Charge · Energy', mode: 'energy' },
  { id: 'bloom', label: 'Bloom · Agriculture', mode: 'agriculture' },
];

interface PixelGolemProps {
  size?: number;
  mode?: GolemMode;
  animation?: GolemAnimation;
  interactive?: boolean;
  onSurge?: () => void;
  className?: string;
}

type ParticleKind = 'green' | 'blue' | 'spark' | 'dust' | 'drop' | 'splash' | 'yellow';

interface Particle {
  x: number;
  y: number;
  vy: number;
  vx: number;
  gravity: number;
  life: number;
  maxLife: number;
  kind: ParticleKind;
}

interface Pose {
  bodyY: number;
  headX: number;
  headY: number;
  lArmX: number;
  lArmY: number;
  rArmX: number;
  rArmY: number;
  legsY: number;
  shakeX: number;
  shakeY: number;
}

type MoveName = Exclude<GolemAnimation, 'auto'>;

const GRID = 36;
const MAX_PARTICLES = 90;

const PARTICLE_RGB: Record<ParticleKind, string> = {
  green: '52, 211, 153',
  blue: '56, 189, 248',
  spark: '240, 253, 250',
  dust: '148, 163, 184',
  drop: '56, 189, 248',
  splash: '186, 230, 253',
  yellow: '254, 240, 138',
};

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

function px(ctx: CanvasRenderingContext2D, x: number, y: number, scale: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(Math.round(x) * scale, Math.round(y) * scale, scale, scale);
}

/** Integer line between two logical pixels. */
function plotLine(
  ctx: CanvasRenderingContext2D,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  scale: number,
  color: string
) {
  let x = Math.round(x0);
  let y = Math.round(y0);
  const tx = Math.round(x1);
  const ty = Math.round(y1);
  const dx = Math.abs(tx - x);
  const dy = -Math.abs(ty - y);
  const sx = x < tx ? 1 : -1;
  const sy = y < ty ? 1 : -1;
  let err = dx + dy;
  for (let guard = 0; guard < 200; guard++) {
    px(ctx, x, y, scale, color);
    if (x === tx && y === ty) break;
    const e2 = 2 * err;
    if (e2 >= dy) {
      err += dy;
      x += sx;
    }
    if (e2 <= dx) {
      err += dx;
      y += sy;
    }
  }
}

type BoltPath = Array<[number, number]>;

/** Two jagged lightning paths that rise from each hand and meet above the head. */
function makeBolts(lHandY: number, rHandY: number): BoltPath[] {
  const jitter = () => Math.round((Math.random() - 0.5) * 3);
  const left: BoltPath = [
    [6, lHandY],
    [4 + jitter(), 10 + jitter()],
    [7 + jitter(), 5 + jitter()],
    [12 + jitter(), 2 + jitter()],
    [17, 1],
  ];
  const right: BoltPath = [
    [29, rHandY],
    [31 + jitter(), 10 + jitter()],
    [28 + jitter(), 5 + jitter()],
    [23 + jitter(), 2 + jitter()],
    [18, 1],
  ];
  return [left, right];
}

const SECONDARY_MOVES: MoveName[] = ['wave', 'scan', 'stomp'];

export function PixelGolem({
  size = 288,
  mode = 'nexus',
  animation = 'idle',
  interactive = true,
  onSurge,
  className = '',
}: PixelGolemProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Props the animation loop reads each frame without restarting.
  const modeRef = useRef<GolemMode>(mode);
  const animationRef = useRef<GolemAnimation>(animation);
  const animStartRef = useRef<number>(0);
  const surgeUntilRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const directorRef = useRef<{ move: MoveName; start: number; until: number }>({
    move: 'idle',
    start: 0,
    until: 0,
  });
  const landedRef = useRef<string>('');
  const boltsRef = useRef<{ at: number; paths: BoltPath[] }>({ at: 0, paths: [] });
  const onSurgeRef = useRef(onSurge);

  modeRef.current = mode;
  animationRef.current = animation;
  onSurgeRef.current = onSurge;

  useEffect(() => {
    animStartRef.current = performance.now();
    particlesRef.current = [];
    landedRef.current = '';
  }, [animation]);

  const triggerSurge = () => {
    surgeUntilRef.current = performance.now() + 950;
    const burst: Particle[] = [];
    for (let i = 0; i < 16; i++) {
      const angle = (Math.PI * 2 * i) / 16 + (Math.random() - 0.5) * 0.3;
      const speed = 0.12 + Math.random() * 0.14;
      burst.push({
        x: 18 + (Math.random() - 0.5) * 8,
        y: 17 + (Math.random() - 0.5) * 6,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.08,
        gravity: 0,
        life: 0,
        maxLife: 24 + Math.random() * 18,
        kind: i % 3 === 0 ? 'spark' : i % 2 === 0 ? 'green' : 'blue',
      });
    }
    particlesRef.current = [...particlesRef.current, ...burst].slice(-MAX_PARTICLES);
    onSurgeRef.current?.();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const scale = Math.max(1, Math.floor(size / GRID));
    const pixelDim = GRID * scale;
    canvas.width = pixelDim;
    canvas.height = pixelDim;
    ctx.imageSmoothingEnabled = false;

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    let rafId = 0;
    let frame = 0;

    const spawn = (p: Omit<Particle, 'life' | 'gravity'> & { gravity?: number }) => {
      if (particlesRef.current.length >= MAX_PARTICLES) return;
      particlesRef.current.push({ gravity: 0, life: 0, ...p });
    };

    const render = (now: number) => {
      frame++;
      ctx.clearRect(0, 0, pixelDim, pixelDim);

      const mode = modeRef.current;
      const isSurging = now < surgeUntilRef.current;
      const t = now * 0.001;

      // Resolve which move is playing and how long it has been playing.
      let move: MoveName;
      let moveStart: number;
      const requested = animationRef.current;
      if (requested === 'auto') {
        const dir = directorRef.current;
        if (dir.until === 0) {
          dir.move = 'idle';
          dir.start = now;
          dir.until = now + 2500;
        } else if (now >= dir.until) {
          if (dir.move === 'idle') {
            const pick = SECONDARY_MOVES[Math.floor(Math.random() * SECONDARY_MOVES.length)];
            dir.move = pick;
            dir.start = now;
            dir.until = now + (pick === 'stomp' ? 1700 : 2600);
          } else {
            dir.move = 'idle';
            dir.start = now;
            dir.until = now + 4500 + Math.random() * 3000;
          }
        }
        move = dir.move;
        moveStart = dir.start;
      } else {
        move = requested;
        moveStart = animStartRef.current;
      }
      const a = Math.max(0, (now - moveStart) * 0.001);

      // Base breathing pose (pixel-snapped), then per-move overrides.
      const breathPhase = Math.sin(t * 2.4);
      const breathY = breathPhase > 0.35 ? -1 : 0;
      const pose: Pose = {
        bodyY: isSurging ? -1 : breathY,
        headX: 0,
        headY: 0,
        lArmX: 0,
        lArmY: isSurging ? -2 : Math.sin(t * 2.4 + 0.6) > 0.4 ? -1 : 0,
        rArmX: 0,
        rArmY: isSurging ? -2 : Math.sin(t * 2.4 + 1.4) > 0.4 ? -1 : 0,
        legsY: 0,
        shakeX: 0,
        shakeY: 0,
      };

      let blink = !isSurging && t % 3.8 > 3.64;
      const overrides: Record<string, string> = {};
      let boostGreen = mode === 'agriculture' || isSurging;
      let boostBlue = mode === 'water' || mode === 'energy' || isSurging;

      if (move === 'wave') {
        const beat = Math.floor(a * 7) % 2 === 0;
        pose.rArmY = beat ? -4 : -5;
        pose.rArmX = beat ? 0 : 1;
        pose.headX = 1;
      } else if (move === 'stomp') {
        const cycleLen = 1.6;
        const c = a % cycleLen;
        const cycleKey = `${Math.round(moveStart)}|${Math.floor(a / cycleLen)}`;
        if (c < 0.35) {
          // crouch
          pose.bodyY = 1;
          pose.lArmY = 1;
          pose.rArmY = 1;
        } else if (c < 0.75) {
          // jump
          pose.bodyY = -3;
          pose.legsY = -2;
          pose.lArmY = -4;
          pose.rArmY = -4;
        } else if (c < 0.95) {
          // slam
          pose.bodyY = 1;
          pose.lArmY = 1;
          pose.rArmY = 1;
          pose.shakeY = Math.floor(now / 45) % 2 === 0 ? 1 : -1;
          if (landedRef.current !== cycleKey) {
            landedRef.current = cycleKey;
            for (let i = 0; i < 14; i++) {
              const dir = i % 2 === 0 ? -1 : 1;
              spawn({
                x: 18 + dir * (6 + Math.random() * 7),
                y: 31 + Math.random() * 1.5,
                vx: dir * (0.1 + Math.random() * 0.22),
                vy: -(0.05 + Math.random() * 0.12),
                gravity: 0.006,
                maxLife: 22 + Math.random() * 14,
                kind: 'dust',
              });
            }
          }
        }
      } else if (move === 'scan') {
        pose.headX = [-1, 0, 1, 0][Math.floor(a * 1.6) % 4];
        overrides.Y = '#22D3EE';
        overrides.y = '#FFFFFF';
      } else if (move === 'charge') {
        const j = Math.floor(now / 70) % 3;
        pose.shakeX = j === 0 ? -1 : j === 1 ? 1 : 0;
        pose.lArmY = -3;
        pose.rArmY = -3;
        pose.headY = -1;
        const flick = Math.floor(now / 90) % 2 === 0;
        overrides.b = flick ? '#FACC15' : '#EAB308';
        overrides.C = '#FDE047';
        overrides.c = flick ? '#FFFFFF' : '#FEF9C3';
        overrides.B = '#A16207';
        overrides.Y = '#FDE047';
        overrides.y = '#FFFFFF';
        boostBlue = false;
      } else if (move === 'rain') {
        pose.lArmX = -1;
        pose.rArmX = 1;
        pose.lArmY = -1;
        pose.rArmY = -1;
        boostBlue = true;
        overrides.Y = '#7DD3FC';
        overrides.y = '#FFFFFF';
      } else if (move === 'bloom') {
        pose.lArmX = -1;
        pose.rArmX = 1;
        boostGreen = true;
        overrides.Y = '#34D399';
        overrides.y = '#ECFDF5';
      }

      // Mode-specific eye glow when no move already set one.
      if (isSurging) {
        overrides.Y = '#7DD3FC';
        overrides.y = '#FFFFFF';
        blink = false;
      } else if (move === 'idle' || move === 'wave' || move === 'stomp') {
        if (mode === 'agriculture') {
          overrides.Y = '#34D399';
          overrides.y = '#ECFDF5';
        } else if (mode === 'energy') {
          overrides.Y = '#38BDF8';
          overrides.y = '#FEF08A';
        }
      }

      // Animated gem luminance pulse (skipped while charge owns the blue gem colours)
      const pulseG = 0.5 + 0.5 * Math.sin(t * (isSurging ? 12 : 3.2));
      const pulseB = 0.5 + 0.5 * Math.sin(t * (isSurging ? 12 : 3.2) + 1.5);

      if (boostGreen || pulseG > 0.68) {
        overrides.g = '#22C55E';
        overrides.E = '#6EE7B7';
        overrides.e = '#ECFDF5';
      } else if (pulseG < 0.25) {
        overrides.g = '#059669';
        overrides.E = '#10B981';
      }

      if (move !== 'charge') {
        if (boostBlue || pulseB > 0.68) {
          overrides.b = '#38BDF8';
          overrides.C = '#7DD3FC';
          overrides.c = '#F0F9FF';
        } else if (pulseB < 0.25) {
          overrides.b = '#0284C7';
          overrides.C = '#0EA5E9';
        }
      }

      // ---- Draw the golem (shaken as one unit) ----
      ctx.save();
      ctx.translate(pose.shakeX * scale, pose.shakeY * scale);

      drawSprite(ctx, LEGS_SPRITE, 0, pose.legsY, scale, overrides, false);
      drawSprite(ctx, TORSO_SPRITE, 0, pose.bodyY, scale, overrides, false);
      drawSprite(ctx, LEFT_ARM_SPRITE, pose.lArmX, pose.lArmY, scale, overrides, false);
      drawSprite(ctx, RIGHT_ARM_SPRITE, pose.rArmX, pose.rArmY, scale, overrides, false);
      drawSprite(
        ctx,
        HEAD_SPRITE,
        pose.headX,
        pose.bodyY + pose.headY,
        scale,
        overrides,
        blink
      );

      // Scanner beam: only tints pixels the golem already covers.
      if (move === 'scan') {
        const sweep = (a * 12) % 30;
        const sy = Math.round(5 + sweep);
        ctx.globalCompositeOperation = 'source-atop';
        ctx.fillStyle = 'rgba(165, 243, 252, 0.95)';
        ctx.fillRect(0, sy * scale, pixelDim, scale);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.45)';
        ctx.fillRect(0, (sy - 1) * scale, pixelDim, scale);
        ctx.fillRect(0, (sy + 1) * scale, pixelDim, scale);
        ctx.globalCompositeOperation = 'source-over';
      }

      // Lightning arcs from both hands over the head.
      if (move === 'charge') {
        if (now - boltsRef.current.at > 90) {
          boltsRef.current = {
            at: now,
            paths: makeBolts(15 + pose.lArmY + 3, 15 + pose.rArmY + 3),
          };
        }
        for (const path of boltsRef.current.paths) {
          for (let i = 0; i < path.length - 1; i++) {
            plotLine(ctx, path[i][0], path[i][1], path[i + 1][0], path[i + 1][1], scale, '#FDE047');
          }
        }
        for (const path of boltsRef.current.paths) {
          for (let i = 0; i < path.length - 1; i += 2) {
            px(ctx, path[i + 1][0], path[i + 1][1], scale, '#FFFFFF');
          }
        }
        if (frame % 6 === 0) {
          spawn({
            x: 10 + Math.random() * 16,
            y: 1 + Math.random() * 4,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.3) * 0.2,
            maxLife: 10 + Math.random() * 8,
            kind: 'yellow',
          });
        }
      }

      // Flower growing from the crown and both shoulders.
      if (move === 'bloom') {
        const stage = Math.min(5, Math.floor(((a % 7) / 7) * 7));
        const crownY = pose.bodyY + pose.headY;
        const stem = '#16A34A';
        const leaf = '#4ADE80';
        if (stage >= 1) px(ctx, 17, 5 + crownY, scale, stem);
        if (stage >= 2) px(ctx, 17, 4 + crownY, scale, stem);
        if (stage >= 3) {
          px(ctx, 17, 3 + crownY, scale, stem);
          px(ctx, 16, 4 + crownY, scale, leaf);
        }
        if (stage >= 4) {
          px(ctx, 17, 2 + crownY, scale, stem);
          px(ctx, 18, 3 + crownY, scale, leaf);
        }
        if (stage >= 5) {
          const petal = '#F9FAFB';
          px(ctx, 16, 1 + crownY, scale, petal);
          px(ctx, 18, 1 + crownY, scale, petal);
          px(ctx, 17, 0 + crownY, scale, petal);
          px(ctx, 17, 1 + crownY, scale, '#FACC15');
        }
        // shoulder sprouts
        const lx = 6 + pose.lArmX;
        const rx = 29 + pose.rArmX;
        if (stage >= 2) {
          px(ctx, lx, 9 + pose.lArmY, scale, stem);
          px(ctx, rx, 9 + pose.rArmY, scale, stem);
        }
        if (stage >= 3) {
          px(ctx, lx, 8 + pose.lArmY, scale, stem);
          px(ctx, rx, 8 + pose.rArmY, scale, stem);
        }
        if (stage >= 4) {
          px(ctx, lx + 1, 8 + pose.lArmY, scale, leaf);
          px(ctx, rx - 1, 8 + pose.rArmY, scale, leaf);
        }
        if (stage >= 5) {
          px(ctx, lx, 7 + pose.lArmY, scale, '#F472B6');
          px(ctx, rx, 7 + pose.rArmY, scale, '#F472B6');
        }
        if (frame % 14 === 0) {
          spawn({
            x: 6 + Math.random() * 24,
            y: 20 + Math.random() * 10,
            vx: (Math.random() - 0.5) * 0.05,
            vy: -(0.05 + Math.random() * 0.07),
            maxLife: 45 + Math.random() * 30,
            kind: 'green',
          });
        }
      }

      // Rain falling, puddle ripple at the feet.
      if (move === 'rain') {
        if (frame % 3 === 0) {
          spawn({
            x: 2 + Math.random() * 32,
            y: 0,
            vx: 0,
            vy: 0.45 + Math.random() * 0.12,
            maxLife: 200,
            kind: 'drop',
          });
        }
        const ripple = Math.floor(a * 3) % 3;
        ctx.fillStyle = 'rgba(125, 211, 252, 0.45)';
        ctx.fillRect((11 - ripple) * scale, 33 * scale, (14 + ripple * 2) * scale, scale);
      }

      // Traveling crystal sparkle glint across chest & shoulder gems
      const sparkleStep = Math.floor(t * 6) % 18;
      const glintPixels: Array<[number, number, string]> = [
        [6, 11 + pose.lArmY, '#ECFDF5'],
        [29, 11 + pose.rArmY, '#F0F9FF'],
        [16, 16 + pose.bodyY, '#ECFDF5'],
        [19, 16 + pose.bodyY, '#F0F9FF'],
        [17, 17 + pose.bodyY, '#FFFFFF'],
        [18, 17 + pose.bodyY, '#FFFFFF'],
      ];
      if (sparkleStep < glintPixels.length) {
        const [gx, gy, col] = glintPixels[sparkleStep];
        px(ctx, gx, gy, scale, col);
      }

      // Ground shadow drawn behind the sprites; shrinks while the golem is in the air.
      const airborne = pose.legsY < 0;
      const shadowInset = airborne ? 3 : pose.bodyY < 0 ? 1 : 0;
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = 'rgba(2, 6, 23, 0.25)';
      ctx.fillRect((11 + shadowInset) * scale, 33 * scale, (14 - shadowInset * 2) * scale, scale);
      ctx.fillStyle = 'rgba(2, 6, 23, 0.45)';
      ctx.fillRect((9 + shadowInset) * scale, 32 * scale, (18 - shadowInset * 2) * scale, scale);
      ctx.globalCompositeOperation = 'source-over';

      ctx.restore();

      // Ambient pixel motes for the calm moves.
      if (
        (move === 'idle' || move === 'wave' || move === 'scan') &&
        frame % (isSurging ? 4 : 18) === 0 &&
        particlesRef.current.length < 28
      ) {
        const fromLeft = Math.random() > 0.5;
        const kind: ParticleKind =
          mode === 'agriculture' ? 'green' : mode === 'water' ? 'blue' : fromLeft ? 'green' : 'blue';
        spawn({
          x: fromLeft ? 5 + Math.random() * 11 : 20 + Math.random() * 11,
          y: 12 + Math.random() * 10,
          vx: (Math.random() - 0.5) * 0.04,
          vy: -(0.05 + Math.random() * 0.06),
          maxLife: 45 + Math.random() * 35,
          kind,
        });
      }

      // Update & draw particles snapped to the logical pixel grid.
      const alive: Particle[] = [];
      const born: Particle[] = [];
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.life++;

        if (p.kind === 'drop' && p.y >= 32.5) {
          for (let i = 0; i < 2; i++) {
            born.push({
              x: p.x,
              y: 32,
              vx: (i === 0 ? -1 : 1) * (0.06 + Math.random() * 0.1),
              vy: -(0.1 + Math.random() * 0.12),
              gravity: 0.02,
              life: 0,
              maxLife: 10 + Math.random() * 6,
              kind: 'splash',
            });
          }
          continue;
        }

        if (p.life < p.maxLife && p.y > -1 && p.y < GRID && p.x > 0 && p.x < GRID - 1) {
          alive.push(p);
          const alpha = Math.min(1, (1 - p.life / p.maxLife) * 1.3);
          ctx.fillStyle = `rgba(${PARTICLE_RGB[p.kind]}, ${(p.kind === 'drop' ? 0.9 : alpha).toFixed(2)})`;
          ctx.fillRect(Math.round(p.x) * scale, Math.round(p.y) * scale, scale, p.kind === 'drop' ? scale * 2 : scale);
        }
      }
      particlesRef.current = [...alive, ...born].slice(-MAX_PARTICLES);

      if (!reducedMotion) rafId = requestAnimationFrame(render);
    };

    if (reducedMotion) {
      // One calm frame, no loop.
      render(performance.now());
    } else {
      rafId = requestAnimationFrame(render);
    }
    return () => cancelAnimationFrame(rafId);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      onClick={interactive ? triggerSurge : undefined}
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
