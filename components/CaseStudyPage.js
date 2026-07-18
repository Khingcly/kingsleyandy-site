'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { site, contact } from '@/lib/content';
import CountUp from '@/components/motion/CountUp';

function RevealSection({ label, text, badges }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0px)' : 'translateY(16px)',
        transition: 'opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-ibm-plex-mono), monospace',
          fontSize: 11,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#2563EB',
          marginBottom: 16,
        }}
      >
        {label}
      </div>
      <p style={{ margin: badges ? '0 0 24px' : 0, fontSize: 18, lineHeight: 1.75, color: '#1E293B' }}>
        {text}
      </p>
      {badges && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {badges.map((kpi) => (
            <span
              key={kpi.label}
              style={{
                fontFamily: 'var(--font-ibm-plex-mono), monospace',
                fontSize: 12.5,
                color: '#1E3A8A',
                background: '#DBEAFE',
                padding: '6px 12px',
                borderRadius: 999,
              }}
            >
              {kpi.display ?? `${kpi.target}${kpi.suffix ?? ''}`} · {kpi.label}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}

export default function CaseStudyPage({ cs }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <header
        style={{
          position: 'relative',
          background: 'linear-gradient(#0B1220, #111827 55%, #1E293B)',
          color: '#F1F5F9',
          padding: '24px clamp(20px,6vw,64px) clamp(56px,9vw,88px)',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 'clamp(40px,8vw,72px)',
              fontFamily: 'var(--font-ibm-plex-mono), monospace',
              fontSize: 12.5,
            }}
          >
            <Link href="/#work" className="nav-link" style={{ color: '#94A3B8', display: 'flex', alignItems: 'center', gap: 8 }}>
              ← Back to the work
            </Link>
            <Link href="/" className="nav-link" style={{ color: '#94A3B8' }}>
              {site.name}
            </Link>
          </div>

          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0px)' : 'translateY(14px)',
              transition: 'opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-ibm-plex-mono), monospace',
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#38BDF8',
                marginBottom: 16,
              }}
            >
              Case Study · {cs.num} of 5
            </div>
            <h1
              style={{
                margin: '0 0 18px',
                fontFamily: 'var(--font-bricolage), sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(28px,5vw,46px)',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
              }}
            >
              {cs.title}
            </h1>
            <p style={{ margin: 0, maxWidth: 640, fontSize: 16.5, lineHeight: 1.7, color: '#CBD5E1' }}>
              {cs.oneLiner}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
              marginTop: 'clamp(36px,6vw,52px)',
              borderTop: '1px solid rgba(148,163,184,0.2)',
              borderBottom: '1px solid rgba(148,163,184,0.2)',
              opacity: mounted ? 1 : 0,
              transition: 'opacity 0.9s ease 0.1s',
            }}
          >
            <div style={{ padding: '18px 20px 18px 0', borderRight: '1px solid rgba(148,163,184,0.2)' }}>
              <div style={metaLabelStyle}>Client</div>
              <div style={{ fontSize: 14, color: '#E2E8F0' }}>{cs.client}</div>
            </div>
            <div style={{ padding: '18px 20px', borderRight: '1px solid rgba(148,163,184,0.2)' }}>
              <div style={metaLabelStyle}>Role</div>
              <div style={{ fontSize: 14, color: '#E2E8F0' }}>{cs.role}</div>
            </div>
            <div style={{ padding: '18px 0 18px 20px' }}>
              <div style={metaLabelStyle}>Stack</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {cs.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: 12,
                      color: '#CBD5E1',
                      background: 'rgba(148,163,184,0.12)',
                      padding: '3px 8px',
                      borderRadius: 5,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
              gap: 1,
              marginTop: 32,
              background: 'rgba(148,163,184,0.15)',
              border: '1px solid rgba(148,163,184,0.15)',
              borderRadius: 12,
              overflow: 'hidden',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0px)' : 'translateY(14px)',
              transition:
                'opacity 0.9s cubic-bezier(.16,1,.3,1) 0.1s, transform 0.9s cubic-bezier(.16,1,.3,1) 0.1s',
            }}
          >
            {cs.kpis.map((kpi) => (
              <div key={kpi.label} style={{ background: 'rgba(15,23,42,0.6)', padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-ibm-plex-mono), monospace', fontWeight: 600, fontSize: 22, color: '#F1F5F9' }}>
                  {kpi.display ? (
                    kpi.display
                  ) : (
                    <CountUp value={kpi.target} suffix={kpi.suffix ?? ''} decimals={kpi.decimals} />
                  )}
                </div>
                <div style={{ fontSize: 10.5, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#94A3B8', marginTop: 6 }}>
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main style={{ background: '#F8FAFC', padding: 'clamp(64px,10vw,110px) clamp(20px,6vw,64px)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(56px,8vw,88px)' }}>
          <RevealSection label="Problem" text={cs.problem} />
          <RevealSection label="Approach" text={cs.approach} />
          <RevealSection label="Outcome" text={cs.outcome} badges={cs.kpis} />
        </div>
      </main>

      <footer style={{ background: '#F1F5F9', padding: 'clamp(48px,8vw,80px) clamp(20px,6vw,64px)', borderTop: '1px solid #E2E8F0' }}>
        <div
          style={{
            maxWidth: 720,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-ibm-plex-mono), monospace',
                fontSize: 12,
                color: '#334155',
                marginBottom: 10,
              }}
            >
              <span
                className="pulse-dot"
                style={{ width: 7, height: 7, borderRadius: '50%', background: '#2563EB', animation: 'pulseContact 2.2s infinite' }}
              />
              {contact.status}
            </div>
            <div style={{ fontFamily: 'var(--font-bricolage), sans-serif', fontWeight: 500, fontSize: 20, color: '#0F172A' }}>
              {contact.footerHeading}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link
              href="/#work"
              className="footer-ghost"
              style={{
                background: '#fff',
                border: '1px solid #E2E8F0',
                color: '#1E293B',
                padding: '12px 20px',
                borderRadius: 8,
                fontSize: 13.5,
                fontWeight: 600,
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
            >
              All case studies
            </Link>
            <a
              href={contact.cvHref}
              download
              className="footer-ghost"
              style={{
                background: '#fff',
                border: '1px solid #E2E8F0',
                color: '#1E293B',
                padding: '12px 20px',
                borderRadius: 8,
                fontSize: 13.5,
                fontWeight: 600,
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
            >
              Download CV
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="mini-cta"
              style={{
                background: '#2563EB',
                color: '#fff',
                padding: '12px 20px',
                borderRadius: 8,
                fontSize: 13.5,
                fontWeight: 600,
                transition: 'background-color 0.2s ease',
              }}
            >
              {contact.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const metaLabelStyle = {
  fontFamily: 'var(--font-ibm-plex-mono), monospace',
  fontSize: 10.5,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#64748B',
  marginBottom: 6,
};
