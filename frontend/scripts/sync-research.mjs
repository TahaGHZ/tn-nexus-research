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
const solutionsDir = path.join(repoRoot, 'research', 'phase2-solutions');
const expertsDir = path.join(repoRoot, 'research', 'experts');
const phasesFile = path.join(repoRoot, 'PHASES.md');

const dataOutDir = path.join(frontendRoot, 'src', 'data');
const publicFindingsDir = path.join(frontendRoot, 'public', 'data', 'findings');
const publicSolutionsDir = path.join(frontendRoot, 'public', 'data', 'solutions');

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

// Experts who have not agreed to be named are replaced by their record ID in published text.
const nameRedactions = [];
if (fs.existsSync(expertsDir)) {
  for (const file of fs.readdirSync(expertsDir).filter((f) => f.endsWith('.md'))) {
    const { frontmatter } = parseMarkdownFile(path.join(expertsDir, file));
    const consent = String(frontmatter.consent_to_be_named || 'ask-first').trim();
    if (consent !== 'yes' && frontmatter.name && !/withheld/i.test(String(frontmatter.name))) {
      nameRedactions.push({ name: String(frontmatter.name), label: 'name withheld' });
    }
  }
}
function redactNames(value) {
  if (typeof value === 'string') {
    let out = value;
    for (const { name, label } of nameRedactions) out = out.split(name).join(label);
    return out;
  }
  if (Array.isArray(value)) return value.map(redactNames);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, redactNames(v)]));
  }
  return value;
}

// A source shared privately (no public URL, or extracts marked confidential) is published by
// title, publisher and tier only: its extracts and notes stay in the repository.
function isConfidentialSource(frontmatter, extracts) {
  const url = String(frontmatter.url || '').trim().toLowerCase();
  return url.startsWith('none') || /^\s*confidential/im.test(extracts);
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
    confidential: false,
  };
  if (isConfidentialSource(frontmatter, srcObj.extracts)) {
    srcObj.confidential = true;
    srcObj.url = '';
    srcObj.extracts = '';
    srcObj.notes = 'Shared privately with the team. Extracts are kept in the repository and not published.';
  }
  sourcesMap.set(srcObj.id, redactNames(srcObj));
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
    // Documented links to other published findings (drafts and unknown ids are dropped)
    related: f.related.filter((id) => verifiedById.has(id) && id !== f.id),
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

// 3. Load phase 2 solution audits. All non-rejected records are published, drafts included,
// because phase 2 is new; every page shows the record's status so a draft is never mistaken
// for a checked audit.
const SCORE_KEYS = [
  'root_cause_coverage',
  'evidence_quality',
  'adoption',
  'side_effects',
  'cost_accessibility',
];
const SOLUTION_IMAGE_RULES = [
  [/desalin/i, 'drinking-water', 0],
  [/wastewater|reuse/i, 'wastewater-reuse', 0],
  [/storm|rain/i, 'water-governance', 0],
  [/drip|irrigation-equipment|water-saving|pneei/i, 'irrigation', 1],
  [/pump/i, 'irrigation', 0],
  [/decree|renewable|solar/i, 'renewables', 0],
  [/air condition|vrv|vrf|cooling/i, 'grid', 0],
];
function pickSolutionImage(sol) {
  const key = `${sol.name} ${sol.slug}`;
  for (const [re, theme, i] of SOLUTION_IMAGE_RULES) {
    if (re.test(key)) return PHOTO_LIBRARY[theme][i % PHOTO_LIBRARY[theme].length];
  }
  return SECTOR_FALLBACK_PHOTOS[sol.mainSector] || PHOTO_LIBRARY['legacy-policy'][0];
}
// Record numbers follow LANES.md: 100-399 energy, 400-699 water, 700-999 agriculture.
function laneOf(id) {
  const n = parseInt(String(id).match(/(\d+)\s*$/)?.[1] || '0', 10);
  return n < 400 ? 'energy' : n < 700 ? 'water' : 'agriculture';
}
const asList = (v) => (Array.isArray(v) ? v : []);
const asText = (v) => (v === undefined || v === null ? '' : String(v));

const allSolutions = [];
const solutionsByFinding = new Map();
const solutionFiles = fs.existsSync(solutionsDir)
  ? fs.readdirSync(solutionsDir).filter((f) => /^SOL-.*\.md$/.test(f)).sort()
  : [];
const verdictCounts = {
  solves: 0,
  'partially-solves': 0,
  superficial: 0,
  counterproductive: 0,
  unverifiable: 0,
};
let solutionDraftCount = 0;

for (const file of solutionFiles) {
  const { frontmatter: fm, body } = parseMarkdownFile(path.join(solutionsDir, file));
  const status = asText(fm.status || 'draft').trim();
  if (status === 'rejected') continue;
  const sections = parseSections(body);
  const whatSec = sections.find((s) => s.heading.toLowerCase().startsWith('what it is'));
  const scores = {};
  for (const k of SCORE_KEYS) {
    const v = Number(fm.scores?.[k]);
    scores[k] = fm.scores?.[k] === undefined || !Number.isFinite(v) ? null : v;
  }
  const scoreValues = Object.values(scores).filter((v) => v !== null);
  const outstanding = body.match(/\*\*Outstanding verification:\*\*\s*([\s\S]*?)(?=\n## |$)/);

  const sol = {
    id: asText(fm.id || file.replace(/\.md$/, '')),
    slug: file.replace(/\.md$/, ''),
    name: asText(fm.name),
    status,
    type: asText(fm.type),
    owner: asText(fm.owner),
    mainSector: laneOf(fm.id),
    targets: asList(fm.targets).map(String),
    creates: asList(fm.creates).map(String),
    statusInTunisia: asText(fm.status_in_tunisia),
    verdict: asText(fm.verdict || 'unverifiable'),
    scores,
    scoreTotal: scoreValues.reduce((a, b) => a + b, 0),
    scoreMax: SCORE_KEYS.length * 3,
    claims: asList(fm.claims).map((c) => ({
      claim: asText(c?.claim),
      evidence: asText(c?.evidence),
      verified: asText(c?.verified),
    })),
    greenwashingFlags: asList(fm.greenwashing_flags).map(String),
    limits: asList(fm.limits).map(String),
    blockers: asList(fm.blockers).map((b) => ({
      blocker: asText(b?.blocker),
      type: asText(b?.type),
      source: asText(b?.source),
    })),
    criticisms: asList(fm.criticisms).map((c) => ({
      criticism: asText(c?.criticism),
      from: asText(c?.from),
      source: asText(c?.source),
      assessment: asText(c?.assessment),
    })),
    tradeOffs: asList(fm.trade_offs).map((t) => ({
      effect: asText(t?.effect),
      on: asText(t?.on),
      horizon: asText(t?.horizon),
      source: asText(t?.source),
    })),
    gapLeft: asText(fm.gap_left),
    conflictOfInterest: asText(fm.conflict_of_interest),
    sources: asList(fm.sources).map(String),
    author: asText(fm.author || 'TahaGHZ'),
    outstanding: outstanding ? outstanding[1].trim() : '',
    excerpt: cleanExcerpt(whatSec?.content || body, 220),
    readTimeMinutes: Math.max(2, Math.round(body.split(/\s+/).filter(Boolean).length / 210)),
    sections,
  };
  sol.image = pickSolutionImage(sol);

  // Every SRC id the record relies on: frontmatter list, structured fields and body text.
  const cited = new Set(sol.sources);
  const structured = JSON.stringify([sol.claims, sol.blockers, sol.criticisms, sol.tradeOffs]);
  for (const m of structured.matchAll(/\bSRC-[A-Z]+-\d+\b/g)) cited.add(m[0]);
  for (const sec of sol.sections) {
    for (const m of sec.content.matchAll(/\bSRC-[A-Z]+-\d+\b/g)) cited.add(m[0]);
  }
  sol.citedSourceIds = Array.from(cited).filter((s) => sourcesMap.has(s)).sort();
  sol.tierMix = { A: 0, B: 0, C: 0 };
  for (const s of sol.citedSourceIds) {
    const tier = sourcesMap.get(s).tier;
    if (sol.tierMix[tier] !== undefined) sol.tierMix[tier]++;
  }

  if (verdictCounts[sol.verdict] !== undefined) verdictCounts[sol.verdict]++;
  if (status === 'draft') solutionDraftCount++;
  for (const fid of sol.targets) {
    if (!solutionsByFinding.has(fid)) solutionsByFinding.set(fid, []);
    solutionsByFinding.get(fid).push({ id: sol.id, name: sol.name, verdict: sol.verdict, status });
  }
  allSolutions.push(redactNames(sol));
}

const findingRef = (fid) => {
  const target = verifiedById.get(fid);
  return target
    ? { id: fid, title: target.title, mainSector: target.mainSector, verified: true }
    : { id: fid, verified: false };
};

fs.mkdirSync(publicSolutionsDir, { recursive: true });
for (const existing of fs.readdirSync(publicSolutionsDir)) {
  if (existing.endsWith('.json')) fs.unlinkSync(path.join(publicSolutionsDir, existing));
}
for (const sol of allSolutions) {
  const payload = {
    ...sol,
    targetItems: sol.targets.map(findingRef),
    createsItems: sol.creates.map(findingRef),
    resolvedSources: sol.citedSourceIds.map((s) => sourcesMap.get(s)),
  };
  fs.writeFileSync(path.join(publicSolutionsDir, `${sol.id}.json`), JSON.stringify(payload), 'utf8');
}

const solutionsIndex = allSolutions.map(
  ({ sections, claims, limits, blockers, criticisms, tradeOffs, ...rest }) => ({
    ...rest,
    claimCount: claims.length,
    blockerCount: blockers.length,
    criticismCount: criticisms.length,
    tradeOffCount: tradeOffs.length,
  })
);

// 4. Phase 3 R&D proposals (PRP records) and recorded agent runs (RUN records).
const proposalsDir = path.join(repoRoot, 'research', 'phase3-proposals');
const runsDir = path.join(repoRoot, 'research', 'agent-runs');
const publicProposalsDir = path.join(frontendRoot, 'public', 'data', 'proposals');
const publicRunsDir = path.join(frontendRoot, 'public', 'data', 'runs');

function resetDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
  for (const existing of fs.readdirSync(dir)) {
    if (existing.endsWith('.json')) fs.unlinkSync(path.join(dir, existing));
  }
}
function citedIds(text, prefix) {
  const re = new RegExp(`\\b${prefix}-[A-Z]+-\\d+\\b`, 'g');
  return Array.from(new Set(String(text).match(re) || [])).sort();
}
const solutionById = new Map(allSolutions.map((s) => [s.id, s]));
const solutionRef = (sid) => {
  const s = solutionById.get(sid);
  return s ? { id: sid, name: s.name, verdict: s.verdict, status: s.status } : { id: sid, name: '', verdict: '', status: '' };
};

const allProposals = [];
const proposalFiles = fs.existsSync(proposalsDir)
  ? fs.readdirSync(proposalsDir).filter((f) => /^PRP-.*\.md$/.test(f)).sort()
  : [];
for (const file of proposalFiles) {
  const raw = fs.readFileSync(path.join(proposalsDir, file), 'utf8');
  const { frontmatter: fm, body } = parseMarkdownFile(path.join(proposalsDir, file));
  const status = asText(fm.status || 'draft');
  if (status === 'refuted') continue;
  const sections = parseSections(body);
  const questionSec = sections.find((s) => s.heading.toLowerCase().includes('question'));
  const options = asList(fm.options).map((o) => {
    const scores = {};
    for (const k of ['fixes_cause', 'speed', 'effect_10y', 'side_effects', 'cost_fairness', 'evidence']) {
      const v = Number(o?.[k]);
      scores[k] = Number.isFinite(v) ? v : null;
    }
    const computed = Object.values(scores).reduce((a, b) => a + (b || 0), 0);
    return { name: asText(o?.name), scores, total: Number(o?.total) || computed, note: asText(o?.note) };
  });
  options.sort((a, b) => b.total - a.total);
  const prp = {
    id: asText(fm.id || file.replace(/\.md$/, '')),
    slug: file.replace(/\.md$/, ''),
    title: asText(fm.title),
    status,
    type: asText(fm.type),
    caseName: asText(fm.case),
    question: asText(fm.question),
    sectors: asList(fm.sectors).map(String),
    mainSector: laneOf(fm.id),
    geography: asList(fm.geography).map(String),
    addresses: asList(fm.addresses).map(String),
    buildsOn: asList(fm.builds_on).map(String),
    run: asText(fm.run),
    hypothesis: asText(fm.hypothesis),
    guardrails: asList(fm.guardrails).map((g) => ({ id: asText(g?.id), name: asText(g?.name), applied: asText(g?.applied) })),
    options,
    plan: asList(fm.plan).map((p) => ({
      phase: asText(p?.phase),
      action: asText(p?.action),
      owner: asText(p?.owner),
      measure: asText(p?.measure),
    })),
    dataNeeded: asList(fm.data_needed).map((d) => ({ item: asText(d?.item), holder: asText(d?.holder) })),
    rescoreTriggers: asList(fm.rescore_triggers).map(String),
    assumptions: asList(fm.assumptions).map(String),
    validationPath: {
      reviewer: asText(fm.validation_path?.reviewer),
      pilot: asText(fm.validation_path?.pilot),
      roughCost: asText(fm.validation_path?.rough_cost),
    },
    contributors: asList(fm.contributors).map(String),
    author: asText(fm.author || 'TahaGHZ'),
    excerpt: cleanExcerpt(asText(fm.hypothesis) || questionSec?.content || body, 220),
    sections,
  };
  prp.image = pickSolutionImage({ name: `${prp.title} ${prp.caseName}`, slug: prp.slug, mainSector: prp.mainSector });
  prp.citedSourceIds = Array.from(new Set([...asList(fm.sources).map(String), ...citedIds(raw, 'SRC')]))
    .filter((s) => sourcesMap.has(s))
    .sort();
  allProposals.push(redactNames(prp));
}

const allRuns = [];
const runFiles = fs.existsSync(runsDir) ? fs.readdirSync(runsDir).filter((f) => /^RUN-.*\.md$/.test(f)).sort() : [];
const STEP_HEADING = /^##\s*\[(\d+)\]\s*(user|agent|tool)\b(.*)$/;
for (const file of runFiles) {
  const { frontmatter: fm, body } = parseMarkdownFile(path.join(runsDir, file));
  const steps = [];
  let current = null;
  for (const line of body.split(/\r?\n/)) {
    const m = line.match(STEP_HEADING);
    if (m) {
      if (current) steps.push(current);
      const attrs = {};
      for (const part of m[3].split('|')) {
        const kv = part.match(/^\s*(\w+)\s*:\s*(.+?)\s*$/);
        if (kv) attrs[kv[1].toLowerCase()] = kv[2];
      }
      current = {
        n: Number(m[1]),
        role: m[2],
        mode: attrs.mode || (m[2] === 'user' ? '' : 'gateway'),
        sector: attrs.sector || 'nexus',
        action: attrs.action || '',
        lines: [],
      };
    } else if (current) {
      current.lines.push(line);
    }
  }
  if (current) steps.push(current);
  const run = {
    id: asText(fm.id || file.replace(/\.md$/, '')),
    slug: file.replace(/\.md$/, ''),
    title: asText(fm.title),
    status: asText(fm.status || 'simulated'),
    simulatedNote: asText(fm.simulated_note),
    askedBy: asText(fm.asked_by),
    question: asText(fm.question),
    date: asText(fm.date).slice(0, 10),
    modes: asList(fm.modes).map(String),
    sectors: asList(fm.sectors).map(String),
    findingsUsed: asList(fm.findings_used).map(String),
    solutionsUsed: asList(fm.solutions_used).map(String),
    proposalsOut: asList(fm.proposals_out).map(String),
    author: asText(fm.author || 'TahaGHZ'),
    steps: steps.map(({ lines, ...s }) => ({ ...s, content: lines.join('\n').trim() })),
  };
  run.stepCount = run.steps.length;
  run.citedSourceIds = Array.from(
    new Set([...asList(fm.sources_used).map(String), ...citedIds(body, 'SRC')])
  ).filter((s) => sourcesMap.has(s)).sort();
  allRuns.push(redactNames(run));
}

resetDir(publicProposalsDir);
for (const prp of allProposals) {
  const payload = {
    ...prp,
    addressItems: prp.addresses.map(findingRef),
    buildsOnItems: prp.buildsOn.map(solutionRef),
    resolvedSources: prp.citedSourceIds.map((s) => sourcesMap.get(s)),
  };
  fs.writeFileSync(path.join(publicProposalsDir, `${prp.id}.json`), JSON.stringify(payload), 'utf8');
}
resetDir(publicRunsDir);
for (const run of allRuns) {
  const payload = {
    ...run,
    findingItems: run.findingsUsed.map(findingRef),
    solutionItems: run.solutionsUsed.map(solutionRef),
    resolvedSources: run.citedSourceIds.map((s) => sourcesMap.get(s)),
  };
  fs.writeFileSync(path.join(publicRunsDir, `${run.id}.json`), JSON.stringify(payload), 'utf8');
}
const proposalsIndex = allProposals.map(({ sections, guardrails, plan, dataNeeded, ...rest }) => ({
  ...rest,
  topOption: rest.options[0] || null,
  optionCount: rest.options.length,
  planStepCount: plan.length,
  options: undefined,
}));
const runsIndex = allRuns.map(({ steps, ...rest }) => ({ ...rest }));

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
    auditedSolutions: solutionsByFinding.get(f.id) || [],
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
    solutionCount: allSolutions.length,
    proposalCount: allProposals.length,
    runCount: allRuns.length,
    solutionDraftCount,
    verdictCounts,
  },
  phases: parsePhases(),
  themes: Array.from(themeSet).sort(),
  findings: findingsIndex,
  solutions: solutionsIndex,
  proposals: proposalsIndex,
  runs: runsIndex,
};

fs.writeFileSync(
  path.join(dataOutDir, 'research-index.json'),
  JSON.stringify(indexPayload, null, 2),
  'utf8'
);

console.log(
  `[sync-research] Synced ${verifiedCount} verified findings (${inReviewCount} in-review, ${peerValidatedCount} validated; ${draftCount} drafts excluded), ${allSolutions.length} solution audits (${solutionDraftCount} draft), ${allProposals.length} R&D proposals, ${allRuns.length} agent runs and ${sourcesMap.size} sources.`
);
