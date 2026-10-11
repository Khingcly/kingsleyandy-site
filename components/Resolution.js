'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { resolution, testimonials, contact } from '@/lib/content';

export default function Resolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.22 });

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        background: '#F8FAFC',
        padding: 'clamp(80px,12vw,140px) clamp(20px,6vw,80px)',
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 760,
          margin: '0 auto 80px',
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
            color: '#2563EB',
            marginBottom: 18,
          }}
        >
          {resolution.step}
        </div>
        <h2
          style={{
            margin: '0 0 20px',
            fontFamily: 'var(--font-bricolage), sans-serif',
            fontWeight: 500,
            fontSize: 'clamp(24px,4vw,38px)',
            lineHeight: 1.25,
            color: '#0F172A',
          }}
        >
          {resolution.heading}
        </h2>
        <p style={{ margin: '0 auto', maxWidth: 600, fontSize: 16, lineHeight: 1.75, color: '#475569' }}>
          {resolution.paragraph}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 10,
            marginTop: 32,
          }}
        >
          {resolution.credentials.map((cred) => (
            <span
              key={cred}
              style={{
                fontFamily: 'var(--font-ibm-plex-mono), monospace',
                fontSize: 11.5,
                color: '#334155',
                background: '#F1F5F9',
                border: '1px solid #E2E8F0',
                padding: '7px 12px',
                borderRadius: 999,
              }}
            >
              {cred}
            </span>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: 1080,
          margin: '0 auto 80px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
          gap: 20,
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.source}
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: 14,
              padding: 26,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div style={{ color: '#2563EB', fontSize: 14, letterSpacing: '0.1em' }}>★★★★★</div>
            <div style={{ fontSize: 14.5, lineHeight: 1.65, color: '#1E293B', fontStyle: 'italic' }}>
              &ldquo;{t.quote}&rdquo;
            </div>
            <div style={{ fontFamily: 'var(--font-ibm-plex-mono), monospace', fontSize: 11.5, color: '#64748B' }}>
              {t.source}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          textAlign: 'center',
          background: '#DBEAFE',
          borderRadius: 20,
          padding: 'clamp(36px,6vw,56px) clamp(20px,5vw,48px)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: 'var(--font-ibm-plex-mono), monospace',
            fontSize: 12.5,
            color: '#1E3A8A',
            marginBottom: 20,
          }}
        >
          <span
            className="pulse-dot"
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#2563EB',
              animation: 'pulseContact 2.2s infinite',
            }}
          />
          {contact.status}
        </div>
        <h3
          style={{
            margin: '0 0 24px',
            fontFamily: 'var(--font-bricolage), sans-serif',
            fontWeight: 500,
            fontSize: 'clamp(22px,3.4vw,30px)',
            color: '#0F172A',
          }}
        >
          {contact.heading}
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
          <a
            href={`mailto:${contact.email}`}
            className="mini-cta"
            style={{
              background: '#2563EB',
              color: '#fff',
              padding: '13px 24px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              transition: 'background-color 0.2s ease',
            }}
          >
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn"
            style={{
              background: 'transparent',
              color: '#1E3A8A',
              padding: '13px 24px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              border: '1px solid #93C5FD',
              transition: 'border-color 0.2s ease',
            }}
          >
            LinkedIn
          </a>
          <a
            href={contact.cvHref}
            className="ghost-btn"
            style={{
              background: 'transparent',
              color: '#1E3A8A',
              padding: '13px 24px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              border: '1px solid #93C5FD',
              transition: 'border-color 0.2s ease',
            }}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
