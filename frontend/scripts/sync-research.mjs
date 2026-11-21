import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(frontendRoot, '..');

const findingsDir = path.join(repoRoot, 'research', 'phase1-findings');
const sourcesDir = path.join(repoRoot, 'research', 'sources');
const phasesFile = path.join(repoRoot, 'PHASES.md');

const dataOutDir = path.join(frontendRoot, 'src', 'data');
const publicFindingsDir = path.join(frontendRoot, 'public', 'data', 'findings');

if (!fs.existsSync(findingsDir) || !fs.existsSync(sourcesDir)) {
  console.log('[sync-research] ../research not found; using pre-synced data files.');
  process.exit(0);
}

// Curated, HTTP-200 verified Pexels photography mapped by theme & sector
const PHOTO_LIBRARY = {
  // Water themes
  'groundwater': [
    {
      url: 'https://images.pexels.com/photos/14869819/pexels-photo-14869819.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Arid dry terrain and depleted water channel',
      credit: 'jd garrett / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/28447118/pexels-photo-28447118.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Arid southern landscape in Tataouine, Tunisia',
      credit: 'Mahmoud Yahyaoui / Pexels',
    },
  ],
  'surface-water': [
    {
      url: 'https://images.pexels.com/photos/10615217/pexels-photo-10615217.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Water dam and reservoir storage basin',
      credit: 'Quang Nguyen Vinh / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/13760476/pexels-photo-13760476.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Dam infrastructure bordering agricultural land',
      credit: 'Quang Nguyen Vinh / Pexels',
    },
  ],
  'drinking-water': [
    {
      url: 'https://images.pexels.com/photos/32502650/pexels-photo-32502650.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Water distribution pipes and utility valves',
      credit: 'adib aqil / Pexels',
    },
  ],
  'irrigation': [
    {
      url: 'https://images.pexels.com/photos/11678439/pexels-photo-11678439.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Irrigation canal supplying agricultural fields',
      credit: 'Mark Stebnicki / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/31454647/pexels-photo-31454647.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Aerial view of irrigation canal and farmland plots',
      credit: 'Kashif Shah / Pexels',
    },
  ],
  'wastewater-reuse': [
    {
      url: 'https://images.pexels.com/photos/35627363/pexels-photo-35627363.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Aerial view of wastewater treatment basins',
      credit: 'Giant Asparagus / Pexels',
    },
  ],
  'water-quality': [
    {
      url: 'https://images.pexels.com/photos/35627363/pexels-photo-35627363.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Water treatment and salinity monitoring infrastructure',
      credit: 'Giant Asparagus / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/14869819/pexels-photo-14869819.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Dry basin showing mineral and salinity stress',
      credit: 'jd garrett / Pexels',
    },
  ],
  'water-governance': [
    {
      url: 'https://images.pexels.com/photos/13760476/pexels-photo-13760476.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Water management dam and canal network',
      credit: 'Quang Nguyen Vinh / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/32502650/pexels-photo-32502650.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Public water utility pipelines and valves',
      credit: 'adib aqil / Pexels',
    },
  ],

  // Energy themes
  'electricity-mix': [
    {
      url: 'https://images.pexels.com/photos/15345341/pexels-photo-15345341.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Thermal power station and high-voltage transmission lines',
      credit: 'Shuaizhi Tian / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/38835689/pexels-photo-38835689.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Natural gas energy infrastructure in arid landscape',
      credit: 'Phil Evenden / Pexels',
    },
  ],
  'energy-imports': [
    {
      url: 'https://images.pexels.com/photos/38835689/pexels-photo-38835689.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Natural gas production and flare infrastructure',
      credit: 'Phil Evenden / Pexels',
    },
  ],
  'energy-subsidies': [
    {
      url: 'https://images.pexels.com/photos/15345341/pexels-photo-15345341.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'National power grid and generation infrastructure',
      credit: 'Shuaizhi Tian / Pexels',
    },
  ],
  'renewables': [
    {
      url: 'https://images.pexels.com/photos/37684096/pexels-photo-37684096.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Solar power station in North African desert landscape',
      credit: 'pierre matile / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/35741218/pexels-photo-35741218.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Wind turbines and solar panels on Mediterranean hillside',
      credit: 'Reinhard Bruckner / Pexels',
    },
  ],
  'grid': [
    {
      url: 'https://images.pexels.com/photos/16928001/pexels-photo-16928001.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'High-voltage electricity transmission tower',
      credit: 'Necip Duman / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/32502650/pexels-photo-32502650.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Water pumping and energy utility infrastructure',
      credit: 'adib aqil / Pexels',
    },
  ],
  'industrial-efficiency': [
    {
      url: 'https://images.pexels.com/photos/13990607/pexels-photo-13990607.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Heavy industrial plant and emissions stacks',
      credit: 'Daniel Trylski / Pexels',
    },
  ],
  'transport-energy': [
    {
      url: 'https://images.pexels.com/photos/394797/pexels-photo-394797.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Highway transport corridor at dusk',
      credit: 'Marcus Wöckel / Pexels',
    },
  ],

  // Agriculture themes
  'cereals': [
    {
      url: 'https://images.pexels.com/photos/7825037/pexels-photo-7825037.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Golden wheat field ready for cereal harvest',
      credit: 'André Ulysses De Salis / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/29793801/pexels-photo-29793801.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Expansive rainfed cereal farmland',
      credit: 'Jan van der Wolf / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/11817009/pexels-photo-11817009.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Sunset over golden wheat ears',
      credit: 'Tamhasip Khan / Pexels',
    },
  ],
  'olives': [
    {
      url: 'https://images.pexels.com/photos/28697751/pexels-photo-28697751.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Green olives growing in Jendouba, Tunisia',
      credit: 'Mahmoud Yahyaoui / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/15119252/pexels-photo-15119252.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Mediterranean olive tree branches in sunlight',
      credit: 'Vladimir Gladkov / Pexels',
    },
  ],
  'livestock-feed': [
    {
      url: 'https://images.pexels.com/photos/28704685/pexels-photo-28704685.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Shepherd tending sheep flock in Jendouba, Tunisia',
      credit: 'Mahmoud Yahyaoui / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/35755878/pexels-photo-35755878.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Sheep grazing on pasture in Tunisia',
      credit: 'Mahmoud Yahyaoui / Pexels',
    },
  ],
  'land-structure': [
    {
      url: 'https://images.pexels.com/photos/31454647/pexels-photo-31454647.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Fragmented agricultural land parcels from above',
      credit: 'Kashif Shah / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/28697747/pexels-photo-28697747.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Agricultural landscape in Jendouba, Tunisia',
      credit: 'Mahmoud Yahyaoui / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/35644773/pexels-photo-35644773.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Tunisian agricultural heritage landscape and palms',
      credit: 'Elijah Cobb / Pexels',
    },
  ],
  'soil': [
    {
      url: 'https://images.pexels.com/photos/28447118/pexels-photo-28447118.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Eroded arid slopes in Tataouine, Tunisia',
      credit: 'Mahmoud Yahyaoui / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/13296840/pexels-photo-13296840.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Arid steppe landscape in Douiret, Tunisia',
      credit: 'Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/14869819/pexels-photo-14869819.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Dry degraded soil in arid basin',
      credit: 'jd garrett / Pexels',
    },
  ],
  'inputs': [
    {
      url: 'https://images.pexels.com/photos/17606801/pexels-photo-17606801.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Intensive greenhouse horticulture in arid climate',
      credit: 'Thắng-Nhật Trần / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/29793801/pexels-photo-29793801.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Cultivated cereal fields requiring seed and fertiliser inputs',
      credit: 'Jan van der Wolf / Pexels',
    },
  ],
  'crop-choices': [
    {
      url: 'https://images.pexels.com/photos/38114844/pexels-photo-38114844.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Date palm oasis in Tamerza, Tunisia',
      credit: "Narli's Journey Book / Pexels",
    },
    {
      url: 'https://images.pexels.com/photos/17606801/pexels-photo-17606801.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Greenhouse vegetable production in dryland region',
      credit: 'Thắng-Nhật Trần / Pexels',
    },
  ],
  'drought-climate': [
    {
      url: 'https://images.pexels.com/photos/13296840/pexels-photo-13296840.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Arid climate terrain in southern Tunisia',
      credit: 'Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/14869819/pexels-photo-14869819.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Dry river and canal bed during severe drought',
      credit: 'jd garrett / Pexels',
    },
  ],
  'food-loss': [
    {
      url: 'https://images.pexels.com/photos/36444996/pexels-photo-36444996.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Freshly baked bread loaves in traditional oven',
      credit: 'Yasin Onuş / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/11817009/pexels-photo-11817009.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Harvested cereal grain field at sunset',
      credit: 'Tamhasip Khan / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/28010165/pexels-photo-28010165.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Traditional North African bread production',
      credit: 'Eslam Mohammed Abdelmaksoud / Pexels',
    },
  ],
  'legacy-policy': [
    {
      url: 'https://images.pexels.com/photos/35644773/pexels-photo-35644773.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Historical landscape and palm groves in Tunisia',
      credit: 'Elijah Cobb / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/10615217/pexels-photo-10615217.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Large hydraulic dam infrastructure',
      credit: 'Quang Nguyen Vinh / Pexels',
    },
    {
      url: 'https://images.pexels.com/photos/38114844/pexels-photo-38114844.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Tunisian canyon oasis in Tamerza',
      credit: "Narli's Journey Book / Pexels",
    },
  ],
};

const SECTOR_FALLBACK_PHOTOS = {
  water: PHOTO_LIBRARY['surface-water'][0],
  energy: PHOTO_LIBRARY['renewables'][0],
  agriculture: PHOTO_LIBRARY['olives'][0],
};

function pickImage(finding) {
  const numMatch = String(finding.id || '').match(/(\d+)/);
  const num = numMatch ? parseInt(numMatch[1], 10) : 0;

  // Special case: oasis / dates findings get the real Tamerza Tunisia oasis photo
  const titleLower = String(finding.title || '').toLowerCase();
  if (titleLower.includes('oasis') || titleLower.includes('date') || titleLower.includes('kebili')) {
    return {
      url: 'https://images.pexels.com/photos/38114844/pexels-photo-38114844.jpeg?auto=compress&cs=tinysrgb&w=1200',
      alt: 'Palm oasis in Tamerza, Tunisia',
      credit: "Narli's Journey Book / Pexels",
    };
  }
  if (titleLower.includes('wind') || titleLower.includes('eolien')) {
    return PHOTO_LIBRARY['renewables'][1];
  }
  if (titleLower.includes('desalination') || titleLower.includes('sonede')) {
    return PHOTO_LIBRARY['drinking-water'][0];
  }

  const pool = PHOTO_LIBRARY[finding.theme];
  if (pool && pool.length > 0) {
    return pool[num % pool.length];
  }
  return SECTOR_FALLBACK_PHOTOS[finding.mainSector] || PHOTO_LIBRARY['legacy-policy'][0];
}

function parseMarkdownFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`Missing YAML frontmatter in ${filePath}`);
  }
  const frontmatter = yaml.load(match[1]) || {};
  const body = match[2].trim();
  return { frontmatter, body };
}

function parseSections(body) {
  const sections = [];
  const lines = body.split(/\r?\n/);
  let currentHeading = null;
  let buffer = [];

  for (const line of lines) {
    const h2 = line.match(/^##\s+(.+?)\s*$/);
    if (h2) {
      if (currentHeading !== null) {
        sections.push({ heading: currentHeading, content: buffer.join('\n').trim() });
      }
      currentHeading = h2[1];
      buffer = [];
    } else {
      buffer.push(line);
    }
  }
  if (currentHeading !== null) {
    sections.push({ heading: currentHeading, content: buffer.join('\n').trim() });
  }
  return sections;
}

function cleanExcerpt(text, maxLen = 220) {
  if (!text) return '';
  const cleaned = text
    .replace(/\((?:[^()]*SRC-[A-Z]+-\d+[^()]*)\)/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,;:])/g, '$1')
    .trim();
  if (cleaned.length <= maxLen) return cleaned;
  const cut = cleaned.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 120 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:\s]+$/, '') + '…';
}

function parsePhases() {
  if (!fs.existsSync(phasesFile)) {
    return [
      { number: 1, name: 'Findings', state: 'UNLOCKED' },
      { number: 2, name: 'Validation', state: 'LOCKED' },
      { number: 3, name: 'R&D', state: 'LOCKED' },
    ];
  }
  const content = fs.readFileSync(phasesFile, 'utf8');
  const phases = [];
  for (const line of content.split(/\r?\n/)) {
    const m = line.match(/^\|\s*(\d+)\.\s*([^|]+?)\s*\|\s*(UNLOCKED|LOCKED)\s*\|/);
    if (m) {
      phases.push({ number: Number(m[1]), name: m[2].trim(), state: m[3].trim() });
    }
  }
  return phases;
}

// 1. Load all sources
const sourcesMap = new Map();
const sourceFiles = fs.readdirSync(sourcesDir).filter((f) => f.endsWith('.md')).sort();
const tierCounts = { A: 0, B: 0, C: 0 };

for (const file of sourceFiles) {
  const fullPath = path.join(sourcesDir, file);
  const { frontmatter, body } = parseMarkdownFile(fullPath);
  const sections = parseSections(body);
  const extractsSection = sections.find((s) => s.heading.toLowerCase().includes('extract'));
  const notesSection = sections.find((s) => s.heading.toLowerCase().includes('note'));
  const tier = String(frontmatter.tier || 'B').trim().toUpperCase();
  if (tierCounts[tier] !== undefined) tierCounts[tier]++;

  const srcObj = {
    id: String(frontmatter.id || file.replace(/\.md$/, '')),
    title: String(frontmatter.title || ''),
    publisher: String(frontmatter.publisher || ''),
    year: frontmatter.year ?? null,
    type: String(frontmatter.type || ''),
    tier,
    url: String(frontmatter.url || ''),
    accessed: frontmatter.accessed ? String(frontmatter.accessed).slice(0, 10) : '',
    language: String(frontmatter.language || 'en'),
    addedBy: String(frontmatter.added_by || ''),
    extracts: extractsSection?.content || '',
    notes: notesSection?.content || '',
  };
  sourcesMap.set(srcObj.id, srcObj);
}

// Every SRC id a finding relies on: frontmatter, indicators, root causes, projection, inline body.
function collectCitedSourceIds(f) {
  const ids = new Set(f.sources);
  for (const ind of f.indicators) if (ind.source) ids.add(ind.source);
  for (const rc of f.rootCauses) for (const s of rc.sources) ids.add(s);
  if (f.projection?.source) ids.add(f.projection.source);
  for (const sec of f.sections) {
    for (const m of sec.content.matchAll(/\bSRC-[A-Z]+-\d+\b/g)) ids.add(m[0]);
  }
  return ids;
}

// Trust classification. Deterministic and derived only from record metadata:
//   - the confidence the record itself declares (frontmatter `confidence`)
//   - the tier mix of the SRC records it cites (A official/peer-reviewed, B institutional, C press)
// Levels, from most to least trustworthy:
//   strong  confidence is not low, >= 4 sources, >= 80% tier A/B and >= 40% tier A
//   solid   confidence is not low, >= 70% tier A/B and at least one tier A source
//   mixed   confidence is not low, but leans on press material or has no tier A source
//   weak    record declares low confidence, or half or more of its sources are tier C
function classifyTrust(finding, tierMix, sourceTotal) {
  const { A, B, C } = tierMix;
  const reasons = [];
  const share = (n) => (sourceTotal ? n / sourceTotal : 0);
  const ab = share(A + B);
  const a = share(A);
  const lowConfidence = finding.confidence === 'low';

  reasons.push(`${sourceTotal} cited sources: ${A} tier A, ${B} tier B, ${C} tier C`);
  reasons.push(`Record declares ${finding.confidence} confidence`);

  let level;
  if (lowConfidence || share(C) >= 0.5 || sourceTotal === 0) {
    level = 'weak';
    if (lowConfidence) reasons.push('Author flagged low confidence');
    if (share(C) >= 0.5) reasons.push('Half or more of the sources are press or secondary material');
    if (sourceTotal === 0) reasons.push('No resolvable source records');
  } else if (sourceTotal >= 4 && ab >= 0.8 && a >= 0.4) {
    level = 'strong';
    reasons.push(`${Math.round(a * 100)}% of sources are official statistics or peer-reviewed`);
  } else if (ab >= 0.7 && A >= 1) {
    level = 'solid';
    reasons.push(`${Math.round(ab * 100)}% of sources are tier A or B`);
  } else {
    level = 'mixed';
    if (A === 0) reasons.push('No tier A (official or peer-reviewed) source');
    if (share(C) > 0.3) reasons.push(`${Math.round(share(C) * 100)}% of sources are press or secondary material`);
  }
  if (finding.dataGaps.length) {
    reasons.push(`${finding.dataGaps.length} open data gaps are listed in the record`);
  }
  return { level, reasons };
}

// 2. Load all findings
const findingFiles = fs.readdirSync(findingsDir).filter((f) => f.endsWith('.md')).sort();
const allFindings = [];
let draftCount = 0;
let verifiedCount = 0;
let peerValidatedCount = 0;
let inReviewCount = 0;

for (const file of findingFiles) {
  const fullPath = path.join(findingsDir, file);
  const { frontmatter, body } = parseMarkdownFile(fullPath);
  const status = String(frontmatter.status || 'draft').trim();
  const sectors = Array.isArray(frontmatter.sectors)
    ? frontmatter.sectors.map((s) => String(s).trim())
    : [];
  const mainSector = sectors[0] || 'water';
  const sections = parseSections(body);
  const problemSec = sections.find((s) => s.heading.toLowerCase() === 'problem');
  const wordCount = body.split(/\s+/).filter(Boolean).length;

  const finding = {
    id: String(frontmatter.id || file.replace(/\.md$/, '')),
    slug: file.replace(/\.md$/, ''),
    title: String(frontmatter.title || ''),
    status,
    sectors,
    mainSector,
    theme: String(frontmatter.theme || ''),
    timeframe: String(frontmatter.timeframe || 'current'),
    period: frontmatter.period ? String(frontmatter.period) : '',
    geography: Array.isArray(frontmatter.geography)
      ? frontmatter.geography.map((g) => String(g))
      : [],
    severity: String(frontmatter.severity || 'medium'),
    trend: String(frontmatter.trend || 'unknown'),
    confidence: String(frontmatter.confidence || 'medium'),
    rootCauses: Array.isArray(frontmatter.root_causes)
      ? frontmatter.root_causes.map((rc) => ({
          cause: String(rc?.cause || ''),
          type: String(rc?.type || 'policy'),
          legacyDecision: Boolean(rc?.legacy_decision),
          sources: Array.isArray(rc?.sources) ? rc.sources.map(String) : [],
        }))
      : [],
    indicators: Array.isArray(frontmatter.indicators)
      ? frontmatter.indicators.map((ind) => ({
          name: String(ind?.name || ''),
          value: ind?.value !== undefined && ind?.value !== null ? String(ind.value) : '',
          unit: ind?.unit ? String(ind.unit) : '',
          year: ind?.year !== undefined && ind?.year !== null ? String(ind.year) : '',
          geography: ind?.geography ? String(ind.geography) : '',
          source: ind?.source ? String(ind.source) : '',
        }))
      : [],
    projection: frontmatter.projection
      ? {
          horizon: frontmatter.projection.horizon ? String(frontmatter.projection.horizon) : '',
          scenario: frontmatter.projection.scenario ? String(frontmatter.projection.scenario) : '',
          method: frontmatter.projection.method ? String(frontmatter.projection.method) : '',
          source: frontmatter.projection.source ? String(frontmatter.projection.source) : '',
        }
      : null,
    stakeholders: Array.isArray(frontmatter.stakeholders)
      ? frontmatter.stakeholders.map(String)
      : [],
    related: Array.isArray(frontmatter.related) ? frontmatter.related.map(String) : [],
    sources: Array.isArray(frontmatter.sources) ? frontmatter.sources.map(String) : [],
    dataGaps: Array.isArray(frontmatter.data_gaps) ? frontmatter.data_gaps.map(String) : [],
    author: String(frontmatter.author || 'TahaGHZ'),
    excerpt: cleanExcerpt(problemSec?.content || body, 220),
    readTimeMinutes: Math.max(2, Math.round(wordCount / 210)),
    sections,
  };

  finding.image = pickImage(finding);

  const tierMix = { A: 0, B: 0, C: 0 };
  let resolvedCount = 0;
  for (const srcId of collectCitedSourceIds(finding)) {
    const src = sourcesMap.get(srcId);
    if (!src) continue;
    resolvedCount++;
    if (tierMix[src.tier] !== undefined) tierMix[src.tier]++;
  }
  const trust = classifyTrust(finding, tierMix, resolvedCount);
  finding.tierMix = tierMix;
  finding.trust = trust.level;
  finding.trustReasons = trust.reasons;
  finding.dataGapCount = finding.dataGaps.length;
  finding.citedSourceCount = resolvedCount;

  if (status === 'in-review' || status === 'validated') {
    verifiedCount++;
    if (status === 'validated') peerValidatedCount++;
    else inReviewCount++;
    allFindings.push(finding);
  } else if (status === 'draft') {
    draftCount++;
  }
}

// Lookup map for verified findings (so related links know if target is published)
const verifiedById = new Map(allFindings.map((f) => [f.id, f]));

// Build lightweight index
const sectorCounts = { water: 0, energy: 0, agriculture: 0 };
const timeframeCounts = { past: 0, current: 0, predicted: 0 };
const themeSet = new Set();
const trustCounts = { strong: 0, solid: 0, mixed: 0, weak: 0 };
const confidenceCounts = { high: 0, medium: 0, low: 0 };
const severityCounts = { critical: 0, high: 0, medium: 0, low: 0 };
const trendCounts = { worsening: 0, stable: 0, improving: 0, unknown: 0 };
let totalIndicators = 0;
let totalDataGaps = 0;
let projectionCount = 0;
let nexusCount = 0;
const citedSourceIdsAll = new Set();

const findingsIndex = allFindings.map((f) => {
  if (sectorCounts[f.mainSector] !== undefined) sectorCounts[f.mainSector]++;
  if (timeframeCounts[f.timeframe] !== undefined) timeframeCounts[f.timeframe]++;
  if (f.theme) themeSet.add(f.theme);
  if (trustCounts[f.trust] !== undefined) trustCounts[f.trust]++;
  if (confidenceCounts[f.confidence] !== undefined) confidenceCounts[f.confidence]++;
  if (severityCounts[f.severity] !== undefined) severityCounts[f.severity]++;
  if (trendCounts[f.trend] !== undefined) trendCounts[f.trend]++;
  totalIndicators += f.indicators.length;
  totalDataGaps += f.dataGaps.length;
  if (f.projection) projectionCount++;
  if (f.sectors.length > 1) nexusCount++;
  for (const id of collectCitedSourceIds(f)) if (sourcesMap.has(id)) citedSourceIdsAll.add(id);

  // Pick a crisp headline indicator for card display
  const topIndicator =
    f.indicators.find((ind) => ind.value && ind.value.length <= 16) || f.indicators[0] || null;

  return {
    id: f.id,
    slug: f.slug,
    title: f.title,
    status: f.status,
    sectors: f.sectors,
    mainSector: f.mainSector,
    theme: f.theme,
    timeframe: f.timeframe,
    period: f.period,
    geography: f.geography,
    severity: f.severity,
    trend: f.trend,
    confidence: f.confidence,
    excerpt: f.excerpt,
    readTimeMinutes: f.readTimeMinutes,
    indicatorCount: f.indicators.length,
    sourceCount: f.sources.length,
    citedSourceCount: f.citedSourceCount,
    tierMix: f.tierMix,
    trust: f.trust,
    trustReasons: f.trustReasons,
    dataGapCount: f.dataGapCount,
    topIndicator,
    stakeholders: f.stakeholders,
    hasProjection: Boolean(f.projection),
    isCrossSector: f.sectors.length > 1,
    image: f.image,
    author: f.author,
  };
});

// Ensure output directories exist
fs.mkdirSync(dataOutDir, { recursive: true });
fs.mkdirSync(publicFindingsDir, { recursive: true });

// Clean stale public finding files
for (const existing of fs.readdirSync(publicFindingsDir)) {
  if (existing.endsWith('.json')) {
    fs.unlinkSync(path.join(publicFindingsDir, existing));
  }
}

// Write per-finding detail files
for (const f of allFindings) {
  const citedSourceIds = collectCitedSourceIds(f);

  const resolvedSources = [];
  for (const srcId of Array.from(citedSourceIds).sort()) {
    const found = sourcesMap.get(srcId);
    if (found) resolvedSources.push(found);
  }

  const relatedVerified = f.related
    .map((relId) => {
      const target = verifiedById.get(relId);
      if (!target) return { id: relId, verified: false };
      return {
        id: target.id,
        title: target.title,
        mainSector: target.mainSector,
        theme: target.theme,
        severity: target.severity,
        timeframe: target.timeframe,
        verified: true,
      };
    });

  const detailPayload = {
    ...f,
    resolvedSources,
    relatedItems: relatedVerified,
  };

  fs.writeFileSync(
    path.join(publicFindingsDir, `${f.id}.json`),
    JSON.stringify(detailPayload),
    'utf8'
  );
}

const indexPayload = {
  generatedAt: new Date().toISOString(),
  stats: {
    totalFindingsInRepo: findingFiles.length,
    verifiedFindings: verifiedCount,
    inReviewFindings: inReviewCount,
    peerValidatedFindings: peerValidatedCount,
    draftFindings: draftCount,
    totalSources: sourcesMap.size,
    sourceTiers: tierCounts,
    sectorCounts,
    timeframeCounts,
    themeCount: themeSet.size,
    trustCounts,
    confidenceCounts,
    severityCounts,
    trendCounts,
    totalIndicators,
    totalDataGaps,
    projectionCount,
    nexusCount,
    citedSources: citedSourceIdsAll.size,
  },
  phases: parsePhases(),
  themes: Array.from(themeSet).sort(),
  findings: findingsIndex,
};

fs.writeFileSync(
  path.join(dataOutDir, 'research-index.json'),
  JSON.stringify(indexPayload, null, 2),
  'utf8'
);

console.log(
  `[sync-research] Synced ${verifiedCount} verified findings (${inReviewCount} in-review, ${peerValidatedCount} validated; ${draftCount} drafts excluded) and ${sourcesMap.size} sources.`
);
