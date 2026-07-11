import { testimonials } from '@/lib/content';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/motion/Reveal';

export default function Testimonials() {
  return (
    <section className="bg-offwhite py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading eyebrow={testimonials.eyebrow} heading={testimonials.heading} />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal
              key={t.source}
              index={i}
              className="hairline-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-accent text-sm mb-4">
                  {'★'.repeat(Math.round(t.rating))}
                  <span className="text-slate-300">
                    {'★'.repeat(5 - Math.round(t.rating))}
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-wide text-slate-500">
                {t.source}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
