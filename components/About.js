import { about, credentials } from '@/lib/content';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/motion/Reveal';

export default function About() {
  return (
    <section id="about" className="bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} index={i}>
                <p className="text-lg leading-relaxed text-slate-700">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal index={2} className="hairline-card rounded-2xl p-6 h-fit">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
              {credentials.eyebrow}
            </h3>
            <ul className="space-y-3">
              {credentials.items.map((cred) => (
                <li key={cred} className="flex gap-3 text-sm text-slate-700 leading-snug">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {cred}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
