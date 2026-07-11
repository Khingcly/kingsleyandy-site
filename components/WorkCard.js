'use client';

import Link from 'next/link';
import TiltCard from '@/components/motion/TiltCard';

export default function WorkCard({ cs }) {
  return (
    <TiltCard className="group h-full rounded-2xl">
      <Link
        href={`/case-studies/${cs.slug}`}
        className="flex h-full flex-col justify-between rounded-2xl border border-hairline bg-white p-6 sm:p-7 transition-colors duration-300 group-hover:border-accent"
        style={{ transform: 'translateZ(20px)' }}
      >
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {cs.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] uppercase tracking-wide text-slate-500 bg-slatebg rounded-full px-2.5 py-1"
              >
                {s}
              </span>
            ))}
          </div>
          <h3 className="font-display text-xl font-semibold text-ink leading-snug">
            {cs.title}
          </h3>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">{cs.oneLiner}</p>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <dl className="flex flex-wrap gap-x-6 gap-y-2">
            {cs.kpis.slice(0, 2).map((kpi) => (
              <div key={kpi.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wide text-slate-400">
                  {kpi.label}
                </dt>
                <dd className="font-mono text-sm font-semibold text-ink">
                  {kpi.display ?? `${kpi.value}${kpi.suffix ?? ''}`}
                </dd>
              </div>
            ))}
          </dl>
          <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-accent transition-transform duration-300 group-hover:translate-x-1">
            View
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}
