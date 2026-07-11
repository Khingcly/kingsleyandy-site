import { site, work } from '@/lib/content';

export const dynamic = 'force-static';

export default function sitemap() {
  const routes = [
    {
      url: site.url,
      lastModified: new Date(),
      priority: 1,
    },
    ...work.caseStudies.map((cs) => ({
      url: `${site.url}/case-studies/${cs.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];

  return routes;
}
