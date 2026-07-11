'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { modeling } from '@/lib/content';

export default function Modeling() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.22 });

  return (
    <section
      id="experience"
      style={{
        position: 'relative',
        background: 'linear-gradient(#0B1220, #1E293B)',
        padding: 'clamp(80px,14vw,160px) clamp(20px,6vw,80px)',
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          textAlign: 'center',
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateY(0px)' : 'translateY(16px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
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
          {modeling.step}
        </div>
        <h2
          style={{
            margin: '0 0 16px',
            fontFamily: 'var(--font-bricolage), sans-serif',
            fontWeight: 500,
            fontSize: 'clamp(24px,4vw,38px)',
            lineHeight: 1.25,
            color: '#F1F5F9',
          }}
        >
          {modeling.heading}
        </h2>
        <p
          style={{
            margin: '0 auto 64px',
            maxWidth: 600,
            fontSize: 16,
            lineHeight: 1.75,
            color: '#94A3B8',
          }}
        >
          {modeling.subhead}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-ibm-plex-mono), monospace',
              fontSize: 13,
              color: '#F1F5F9',
              background: '#111827',
              border: '1px solid #334155',
              padding: '10px 20px',
              borderRadius: 999,
              opacity: isInView ? 1 : 0,
              transition: 'opacity 0.7s ease 0.2s',
            }}
          >
            {modeling.layerLabel}
          </div>
          <div style={{ width: 1, height: 28, background: '#334155' }} />
          <div style={{ position: 'relative', width: '100%', maxWidth: 920 }}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '10%',
                right: '10%',
                height: 1,
                background: '#334155',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: 20,
                paddingTop: 28,
              }}
            >
              {modeling.skillGroups.map((g, i) => (
                <div
                  key={g.name}
                  style={{
                    flex: '1 1 200px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 14,
                    opacity: isInView ? 1 : 0,
                    transition: `opacity 0.8s ease ${(0.05 + i * 0.1).toFixed(2)}s`,
                  }}
                >
                  <div style={{ width: 1, height: 20, background: '#334155' }} />
                  <div
                    style={{
                      width: '100%',
                      background: '#111827',
                      border: '1px solid #334155',
                      borderRadius: 10,
                      padding: '18px 16px',
                      textAlign: 'left',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-ibm-plex-mono), monospace',
                        fontSize: 11,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#38BDF8',
                        marginBottom: 10,
                      }}
                    >
                      {g.name}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {g.tools.map((tool) => (
                        <span
                          key={tool}
                          style={{
                            fontSize: 12,
                            color: '#CBD5E1',
                            background: '#1E293B',
                            border: '1px solid #334155',
                            padding: '4px 9px',
                            borderRadius: 6,
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
