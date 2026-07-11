'use client';

import { useEffect, useMemo, useState } from 'react';
import { hero } from '@/lib/content';
import { buildFragments } from '@/lib/fragments';

export default function HeroChaos() {
  const [mounted, setMounted] = useState(false);
  const { frags, chartFragments, tableFragments } = useMemo(buildFragments, []);

  useEffect(() => {
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  return (
    <div
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        background: '#05070D',
        overflow: 'hidden',
      }}
    >
      <div
        className="grain"
        style={{
          position: 'absolute',
          inset: '-10%',
          opacity: 0.05,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 0.5px, transparent 0.5px)',
          backgroundSize: '3px 3px',
          animation: 'grainShift 6s linear infinite alternate',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 46%, rgba(5,7,13,0.15) 0%, rgba(5,7,13,0.75) 62%, rgba(5,7,13,0.96) 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {frags.map((f) => (
          <div key={f.key} className="frag" style={f.style}>
            {f.content}
          </div>
        ))}

        {chartFragments.map((c) => (
          <svg
            key={c.key}
            className="frag"
            style={c.style}
            viewBox="0 0 100 40"
            width={c.w}
            height={c.h}
          >
            <polyline
              points={c.points}
              fill="none"
              stroke={c.stroke}
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        ))}

        {tableFragments.map((t) => (
          <div key={t.key} className="frag" style={t.style}>
            <div style={{ display: 'flex', gap: 1, marginBottom: 1 }}>
              <span style={cellStyle} />
              <span style={cellStyle} />
              <span style={cellStyle} />
            </div>
            <div style={{ display: 'flex', gap: 1, marginBottom: 1 }}>
              <span style={cellStyle} />
              <span style={cellDimStyle} />
              <span style={cellStyle} />
            </div>
            <div style={{ display: 'flex', gap: 1 }}>
              <span style={cellDimStyle} />
              <span style={cellStyle} />
              <span style={cellStyle} />
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 3,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 24,
          gap: 22,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-ibm-plex-mono), monospace',
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#475569',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0px)' : 'translateY(10px)',
            transition: 'opacity 1.4s ease, transform 1.4s ease',
          }}
        >
          {hero.tag}
        </div>

        <h1
          style={{
            margin: 0,
            maxWidth: 820,
            fontFamily: 'var(--font-bricolage), sans-serif',
            fontWeight: 500,
            fontSize: 'clamp(28px,5.4vw,58px)',
            lineHeight: 1.18,
            letterSpacing: '-0.01em',
            color: '#E2E8F0',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0px)' : 'translateY(14px)',
            transition:
              'opacity 1.6s cubic-bezier(.16,1,.3,1) 0.3s, transform 1.6s cubic-bezier(.16,1,.3,1) 0.3s',
          }}
        >
          {hero.headline}
        </h1>

        <a
          href="#about"
          style={{
            fontFamily: 'var(--font-ibm-plex-mono), monospace',
            fontSize: 12.5,
            letterSpacing: '0.05em',
            color: '#64748B',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            marginTop: 18,
            opacity: mounted ? 1 : 0,
            transition: 'opacity 1.4s ease 1.4s, color 0.2s ease',
            cursor: 'pointer',
          }}
        >
          <span>{hero.scrollCue}</span>
          <span
            className="bob-arrow"
            style={{ animation: 'bob 1.8s ease-in-out infinite', color: '#38BDF8', fontSize: 16 }}
          >
            ↓
          </span>
        </a>
      </div>

      <a
        href="#work"
        style={{
          position: 'absolute',
          bottom: 22,
          right: 22,
          zIndex: 4,
          fontFamily: 'var(--font-ibm-plex-mono), monospace',
          fontSize: 11.5,
          letterSpacing: '0.04em',
          color: '#64748B',
          padding: '8px 12px',
          border: '1px solid #1E293B',
          borderRadius: 999,
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1.2s ease 2.4s, color 0.2s ease, border-color 0.2s ease',
        }}
      >
        {hero.skipLabel}
      </a>
    </div>
  );
}

const cellStyle = {
  width: 14,
  height: 6,
  background: '#334155',
  opacity: 0.5,
  display: 'inline-block',
};

const cellDimStyle = {
  width: 14,
  height: 6,
  background: '#1E293B',
  opacity: 0.5,
  display: 'inline-block',
};
