import { work } from '@/lib/content';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/motion/Reveal';
import WorkCard from '@/components/WorkCard';

export default function WorkGrid() {
  return (
    <section id="work" className="bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading eyebrow={work.eyebrow} heading={work.heading} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {work.caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} index={i} className="h-full">
              <WorkCard cs={cs} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
