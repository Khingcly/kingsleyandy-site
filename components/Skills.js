import { skills } from '@/lib/content';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/motion/Reveal';

export default function Skills() {
  return (
    <section id="skills" className="bg-slatebg py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading eyebrow={skills.eyebrow} heading={skills.heading} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, i) => (
            <Reveal key={group.name} index={i} className="hairline-card rounded-2xl p-6">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-slate-700 bg-slatebg rounded-md px-2.5 py-1 border border-hairline"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
