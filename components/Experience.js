import { experience } from '@/lib/content';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/motion/Reveal';

export default function Experience() {
  return (
    <section id="experience" className="bg-slatebg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading eyebrow={experience.eyebrow} heading={experience.heading} />

        <div className="mt-12 divide-y divide-hairline border-y border-hairline">
          {experience.items.map((exp, i) => (
            <Reveal key={exp.org} index={i}>
              <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-baseline py-8">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {exp.role} <span className="text-accent">· {exp.org}</span>
                  </h3>
                  <p className="mt-2 text-slate-600 max-w-2xl">{exp.description}</p>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 sm:text-right whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
