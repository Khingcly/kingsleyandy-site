'use client';

import { useMemo, useRef } from 'react';
import { useInView } from 'framer-motion';
import { ingestion } from '@/lib/content';
import { buildIngestLines } from '@/lib/fragments';

export default function Ingestion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.22 });
  const lines = useMemo(buildIngestLines, []);

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        background: 'linear-gradient(#05070D, #0B1220)',
        padding: 'clamp(80px,14vw,160px) clamp(20px,6vw,80px)',
        overflow: 'hidden',
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 56,
          alignItems: 'center',
        }}
        className="ingest-grid"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            opacity: isInView ? 1 : 0,
            transition: 'opacity 1.1s ease',
          }}
        >
          <svg viewBox="0 0 240 240" width={260} height={260} style={{ maxWidth: '100%' }}>
            {lines.map((ln) => (
              <line
                key={ln.key}
                x1={ln.x1}
                y1={ln.y1}
                x2={120}
                y2={120}
                stroke="#2563EB"
                strokeWidth={1.3}
                strokeLinecap="round"
                strokeDasharray={ln.len}
                strokeDashoffset={isInView ? 0 : ln.len}
                style={{
                  transition: `stroke-dashoffset 1.4s cubic-bezier(.16,1,.3,1) ${ln.delay}s`,
                  opacity: 0.55,
                }}
              />
            ))}
            <circle
              cx={120}
              cy={120}
              r={5}
              fill="#38BDF8"
              style={{ opacity: isInView ? 1 : 0, transition: 'opacity 0.6s ease 0.9s' }}
            />
            <circle
              cx={120}
              cy={120}
              r={11}
              fill="none"
              stroke="#38BDF8"
              strokeWidth={1}
              style={{ opacity: isInView ? 1 : 0, transition: 'opacity 0.6s ease 1.1s' }}
            />
          </svg>
        </div>

        <div
          style={{
            textAlign: 'center',
            maxWidth: 680,
            margin: '0 auto',
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0px)' : 'translateY(16px)',
            transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-ibm-plex-mono), monospace',
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#38BDF8',
              marginBottom: 18,
            }}
          >
            {ingestion.step}
          </div>
          <h2
            style={{
              margin: '0 0 22px',
              fontFamily: 'var(--font-bricolage), sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(24px,4vw,38px)',
              lineHeight: 1.25,
              color: '#F1F5F9',
            }}
          >
            {ingestion.heading}
          </h2>
          {ingestion.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                margin: i === ingestion.paragraphs.length - 1 ? 0 : '0 0 16px',
                fontSize: 16,
                lineHeight: 1.75,
                color: '#94A3B8',
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
