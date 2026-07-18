'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { dashboard, caseStudies } from '@/lib/content';
import CountUp from '@/components/motion/CountUp';

function CaseCard({ cs, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.22 });

  return (
    <Link
      ref={ref}
      href={`/work/${cs.slug}`}
      className="case-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: 14,
        padding: 26,
        textAlign: 'left',
        boxShadow: '0 1px 2px rgba(15,23,42,0.04)',
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0px)' : 'translateY(18px)',
        transitionProperty: 'opacity, transform',
        transitionDuration: '0.7s',
        transitionDelay: `${(index * 0.08).toFixed(2)}s`,
        transitionTimingFunction: 'ease',
      }}
    >
      {cs.image && (
        <div
          style={{
            position: 'relative',
            width: 'calc(100% + 52px)',
            margin: '-26px -26px 0',
            aspectRatio: '16 / 10',
            borderRadius: '14px 14px 0 0',
            overflow: 'hidden',
          }}
        >
          <Image
            src={cs.image}
            alt={cs.imageAlt}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, 380px"
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <div
        style={{
          fontFamily: 'var(--font-ibm-plex-mono), monospace',
          fontSize: 11.5,
          color: '#64748B',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        {cs.stack.map((tech) => (
          <span
            key={tech}
            style={{
              background: '#F1F5F9',
              border: '1px solid #E2E8F0',
              padding: '3px 8px',
              borderRadius: 5,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div>
        <div
          style={{
            fontFamily: 'var(--font-bricolage), sans-serif',
            fontWeight: 600,
            fontSize: 19,
            color: '#0F172A',
            marginBottom: 8,
            lineHeight: 1.3,
          }}
        >
          {cs.title}
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: '#475569' }}>{cs.oneLiner}</div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(90px,1fr))',
          gap: 12,
          paddingTop: 12,
          borderTop: '1px solid #E2E8F0',
        }}
      >
        {cs.kpis.map((kpi) => (
          <div key={kpi.label}>
            <div
              style={{
                fontFamily: 'var(--font-ibm-plex-mono), monospace',
                fontWeight: 600,
                fontSize: 19,
                color: '#2563EB',
              }}
            >
              {kpi.display ? (
                kpi.display
              ) : (
                <CountUp value={kpi.target} suffix={kpi.suffix ?? ''} decimals={kpi.decimals} />
              )}
            </div>
            <div
              style={{
                fontSize: 10.5,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#94A3B8',
                marginTop: 2,
              }}
            >
              {kpi.label}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 13,
          fontWeight: 600,
          color: '#2563EB',
          marginTop: 'auto',
        }}
      >
        View case study <span className="cs-arrow">→</span>
      </div>
    </Link>
  );
}

export default function Dashboard() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.22 });

  return (
    <section
      id="work"
      style={{
        position: 'relative',
        background: 'linear-gradient(#1E293B 0%, #F8FAFC 14%, #F8FAFC 100%)',
        padding: 'clamp(60px,10vw,90px) clamp(20px,6vw,80px) clamp(80px,10vw,120px)',
      }}
    >
      <div
        ref={headingRef}
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          textAlign: 'center',
          opacity: headingInView ? 1 : 0,
          transform: headingInView ? 'translateY(0px)' : 'translateY(16px)',
          transition: 'opacity 0.9s ease, transform 0.9s ease',
          marginBottom: 56,
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
          {dashboard.step}
        </div>
        <h2
          style={{
            margin: '0 0 16px',
            fontFamily: 'var(--font-bricolage), sans-serif',
            fontWeight: 500,
            fontSize: 'clamp(24px,4vw,38px)',
            lineHeight: 1.25,
            color: '#0F172A',
          }}
        >
          {dashboard.heading}
        </h2>
        <p style={{ margin: '0 auto', maxWidth: 600, fontSize: 16, lineHeight: 1.75, color: '#475569' }}>
          {dashboard.subhead}
        </p>
      </div>

      <div
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: 24,
        }}
      >
        {caseStudies.map((cs, i) => (
          <CaseCard key={cs.slug} cs={cs} index={i} />
        ))}
      </div>
    </section>
  );
}
