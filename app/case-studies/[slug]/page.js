import Link from 'next/link';
import { notFound } from 'next/navigation';
import { work, site } from '@/lib/content';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';

const KPI_GRID_COLS = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
};

export function generateStaticParams() {
  return work.caseStudies.map((cs) => ({ slug: cs.slug }));
}

function getCaseStudy(slug) {
  return work.caseStudies.find((cs) => cs.slug === slug);
}

export function generateMetadata({ params }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};

  return {
    title: cs.title,
    description: cs.oneLiner,
    openGraph: {
      title: `${cs.title} — ${site.name}`,
      description: cs.oneLiner,
      url: `${site.url}/case-studies/${cs.slug}`,
      type: 'article',
    },
  };
}

export default function CaseStudyPage({ params }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  const index = work.caseStudies.findIndex((c) => c.slug === cs.slug);
  const prev = work.caseStudies[(index - 1 + work.caseStudies.length) % work.caseStudies.length];
  const next = work.caseStudies[(index + 1) % work.caseStudies.length];

  return (
    <>
      <Nav basePath="/" />
      <main>
        <section id="top" className="bg-navy pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <Reveal index={0}>
              <Link
                href="/#work"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-accent-cyan hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M11 18l-6-6 6-6" />
                </svg>
                Back to selected work
              </Link>
            </Reveal>

            <Reveal index={1}>
              <h1 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                {cs.title}
              </h1>
            </Reveal>

            <Reveal index={2}>
              <p className="mt-5 max-w-2xl text-lg text-slate-300 leading-relaxed">
                {cs.oneLiner}
              </p>
            </Reveal>

            <Reveal index={3} className="mt-8 grid gap-6 sm:grid-cols-3 border-t border-white/10 pt-6">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wide text-slate-500">
                  Client
                </dt>
                <dd className="mt-1 text-sm text-slate-200">{cs.client}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wide text-slate-500">
                  Role
                </dt>
                <dd className="mt-1 text-sm text-slate-200">{cs.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wide text-slate-500">
                  Stack
                </dt>
                <dd className="mt-1 text-sm text-slate-200">{cs.stack.join(' · ')}</dd>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-offwhite py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className={`grid gap-4 ${KPI_GRID_COLS[Math.min(cs.kpis.length, 4)]}`}>
              {cs.kpis.map((kpi, i) => (
                <Reveal
                  key={kpi.label}
                  index={i}
                  className="hairline-card rounded-2xl px-5 py-6 text-center"
                >
                  <div className="font-mono text-2xl sm:text-3xl font-semibold text-accent">
                    {kpi.display ? (
                      kpi.display
                    ) : (
                      <CountUp value={kpi.value} suffix={kpi.suffix ?? ''} />
                    )}
                  </div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-wide text-slate-500">
                    {kpi.label}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slatebg py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-8 space-y-14">
            <Reveal index={0}>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                Problem
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">{cs.problem}</p>
            </Reveal>

            <Reveal index={1}>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                Approach
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">{cs.approach}</p>
            </Reveal>

            <Reveal index={2}>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
                Outcome
              </h2>
              <p className="text-lg leading-relaxed text-slate-700">{cs.outcome}</p>
            </Reveal>
          </div>
        </section>

        <section className="bg-offwhite py-16 sm:py-20 border-t border-hairline">
          <div className="mx-auto max-w-4xl px-6 sm:px-8 flex flex-col sm:flex-row items-stretch gap-4">
            <Link
              href={`/case-studies/${prev.slug}`}
              className="flex-1 rounded-2xl border border-hairline bg-white p-5 hover:border-accent transition-colors"
            >
              <span className="font-mono text-[11px] uppercase tracking-wide text-slate-400">
                Previous
              </span>
              <p className="mt-1 font-display font-semibold text-ink">{prev.title}</p>
            </Link>
            <Link
              href={`/case-studies/${next.slug}`}
              className="flex-1 rounded-2xl border border-hairline bg-white p-5 text-right hover:border-accent transition-colors"
            >
              <span className="font-mono text-[11px] uppercase tracking-wide text-slate-400">
                Next
              </span>
              <p className="mt-1 font-display font-semibold text-ink">{next.title}</p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
