import { notFound } from 'next/navigation';
import { caseStudies, site } from '@/lib/content';
import CaseStudyPage from '@/components/CaseStudyPage';

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

function getCaseStudy(slug) {
  return caseStudies.find((cs) => cs.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};

  return {
    title: cs.title,
    description: cs.oneLiner,
    alternates: {
      canonical: `${site.url}/work/${cs.slug}`,
    },
    openGraph: {
      title: `${cs.title} — ${site.name}`,
      description: cs.oneLiner,
      url: `${site.url}/work/${cs.slug}`,
      type: 'article',
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return <CaseStudyPage cs={cs} />;
}
