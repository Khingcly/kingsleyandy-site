// Deterministic pseudo-random scattered "data chaos" fragments for the hero.
// Ported faithfully from the source design so layout never reshuffles between renders.

function rand(seed) {
  const x = Math.sin(seed * 999.7) * 10000;
  return x - Math.floor(x);
}

// Push a point out of the center safe zone so the tag/headline stay legible.
function keepClear(x, y) {
  const xLo = 22,
    xHi = 78,
    yLo = 18,
    yHi = 78;
  if (x > xLo && x < xHi && y > yLo && y < yHi) {
    const distLeft = x - xLo,
      distRight = xHi - x,
      distTop = y - yLo,
      distBottom = yHi - y;
    const min = Math.min(distLeft, distRight, distTop, distBottom);
    if (min === distLeft) x = xLo - (x - xLo) - 4;
    else if (min === distRight) x = xHi + (xHi - x) + 4;
    else if (min === distTop) y = yLo - (y - yLo) - 4;
    else y = yHi + (y - yHi) + 4;
  }
  return [Math.max(2, Math.min(96, x)), Math.max(2, Math.min(96, y))];
}

// Business-reporting anxiety, not code jargon — only a few marked technical for texture.
const POOL = [
  { t: 'Revenue?', mono: false },
  { t: 'Q3 vs Q3?', mono: true },
  { t: 'which number?', mono: false },
  { t: 'two sources, two answers', mono: true },
  { t: 'MRR ≠ MRR', mono: true },
  { t: 'churn = ?', mono: true },
  { t: 'last updated: ?', mono: true },
  { t: 'the numbers look off', mono: false },
  { t: 'who owns this?', mono: false },
  { t: 'can we trust this?', mono: false },
  { t: "that's not what finance said", mono: false },
  { t: 'Report_v7_final_FINAL', mono: true },
  { t: 'Dashboard (old)', mono: true },
  { t: 'Copy of Copy', mono: true },
  { t: 'manual export', mono: true },
  { t: 'pending review', mono: true },
  { t: 'stale data', mono: true },
  { t: 'board meeting Monday', mono: false },
  { t: 'no single source of truth', mono: false },
  { t: 'flying blind', mono: false },
  { t: 'missed target', mono: false },
  { t: 'gut feeling', mono: false },
  { t: '#REF!', mono: true },
  { t: 'NULL', mono: true },
  { t: 'Sheet3', mono: true },
];

export function buildFragments() {
  const frags = [];
  for (let i = 0; i < POOL.length; i++) {
    const item = POOL[i];
    const r1 = rand(i + 1);
    const r2 = rand(i + 51);
    const r3 = rand(i + 101);
    const r4 = rand(i + 151);
    const r5 = rand(i + 201);
    let x = 4 + r1 * 92;
    let y = 4 + r2 * 92;
    [x, y] = keepClear(x, y);
    const isLong = item.t.length > 15;
    const rot = isLong ? -9 + r3 * 18 : -22 + r3 * 44;
    const size = isLong ? 10 + r4 * 3 : 13 + r4 * 11;
    const dur = 10 + r5 * 10;
    const delay = -r1 * dur;
    const dx = (r3 - 0.5) * 60;
    const dy = (r4 - 0.5) * 40;
    const opLo = 0.14 + r5 * 0.12;
    const opHi = opLo + 0.16 + r2 * 0.14;

    frags.push({
      key: `f${i}`,
      content: item.t,
      mono: item.mono,
      isLong,
      style: {
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        fontFamily: item.mono ? 'var(--font-ibm-plex-mono), monospace' : 'var(--font-bricolage), sans-serif',
        fontSize: `${size}px`,
        fontWeight: item.mono ? 500 : 600,
        color: '#94A3B8',
        '--r0': `${rot}deg`,
        '--r1': `${rot + (r1 - 0.5) * 10}deg`,
        '--dx': `${dx}px`,
        '--dy': `${dy}px`,
        '--op-lo': opLo,
        '--op-hi': opHi,
        opacity: opLo,
        animation: `drift1 ${dur}s ease-in-out ${delay}s infinite, flicker ${5 + r1 * 6}s ease-in-out ${delay}s infinite`,
        whiteSpace: isLong ? 'normal' : 'nowrap',
        maxWidth: isLong ? 180 : undefined,
        lineHeight: isLong ? 1.3 : undefined,
        textAlign: isLong ? 'center' : undefined,
        userSelect: 'none',
      },
    });
  }

  const chartFragments = [];
  const strokes = ['#475569', '#5B7794', '#3B4B63'];
  for (let i = 0; i < 6; i++) {
    const r1 = rand(i + 301);
    const r2 = rand(i + 331);
    const r3 = rand(i + 361);
    let x = 6 + r1 * 88;
    let y = 6 + r2 * 88;
    [x, y] = keepClear(x, y);
    const rot = -18 + r3 * 36;
    const w = 60 + r1 * 50;
    const h = w * 0.4;
    const dur = 12 + r2 * 10;
    const delay = -r3 * dur;
    let pts = '';
    for (let p = 0; p <= 5; p++) {
      const px = (p / 5) * 100;
      const py = 20 + (rand(i * 10 + p) - 0.5) * 32;
      pts += `${px},${py} `;
    }
    chartFragments.push({
      key: `c${i}`,
      w,
      h,
      points: pts.trim(),
      stroke: strokes[i % strokes.length],
      style: {
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        '--r0': `${rot}deg`,
        '--r1': `${rot + 8}deg`,
        '--dx': `${(r1 - 0.5) * 50}px`,
        '--dy': `${(r2 - 0.5) * 30}px`,
        '--op-lo': 0.16,
        '--op-hi': 0.32,
        opacity: 0.18,
        animation: `drift1 ${dur}s ease-in-out ${delay}s infinite, flicker ${8 + r1 * 5}s ease-in-out ${delay}s infinite`,
      },
    });
  }

  const tableFragments = [];
  for (let i = 0; i < 4; i++) {
    const r1 = rand(i + 501);
    const r2 = rand(i + 531);
    const r3 = rand(i + 561);
    let x = 8 + r1 * 84;
    let y = 8 + r2 * 84;
    [x, y] = keepClear(x, y);
    const rot = -14 + r3 * 28;
    const dur = 14 + r1 * 8;
    const delay = -r2 * dur;
    tableFragments.push({
      key: `t${i}`,
      style: {
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        '--r0': `${rot}deg`,
        '--r1': `${rot - 6}deg`,
        '--dx': `${(r1 - 0.5) * 40}px`,
        '--dy': `${(r3 - 0.5) * 26}px`,
        '--op-lo': 0.2,
        '--op-hi': 0.38,
        opacity: 0.22,
        animation: `drift1 ${dur}s ease-in-out ${delay}s infinite`,
      },
    });
  }

  return { frags, chartFragments, tableFragments };
}

export function buildIngestLines() {
  const lines = [];
  const n = 9;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const r = 108;
    const x1 = 120 + Math.cos(a) * r;
    const y1 = 120 + Math.sin(a) * r;
    const len = Math.hypot(x1 - 120, y1 - 120);
    lines.push({ key: `l${i}`, x1, y1, len: len.toFixed(1), delay: (i * 0.06).toFixed(2) });
  }
  return lines;
}
