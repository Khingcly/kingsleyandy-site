import { contact } from '@/lib/content';
import SectionHeading from '@/components/SectionHeading';
import HeroGlow from '@/components/motion/HeroGlow';
import StatusDot from '@/components/StatusDot';
import MagneticButton from '@/components/motion/MagneticButton';
import Reveal from '@/components/motion/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 sm:py-32">
      <HeroGlow />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading eyebrow={contact.eyebrow} heading={contact.heading} dark />

        <Reveal index={0} className="mt-6 max-w-xl">
          <p className="text-lg text-slate-300 leading-relaxed">{contact.subhead}</p>
        </Reveal>

        <Reveal index={1} className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
          <StatusDot />
          <span className="font-mono text-xs text-slate-300">
            Open to opportunities — UK · UAE · Canada · remote or relocation
          </span>
        </Reveal>

        <Reveal index={2} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton
            href={`mailto:${contact.email}`}
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 font-medium text-white hover:bg-accent-hover transition-colors"
          >
            {contact.email}
          </MagneticButton>
          <MagneticButton
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 font-medium text-white hover:border-accent-cyan hover:text-accent-cyan transition-colors"
          >
            LinkedIn
          </MagneticButton>
          <MagneticButton
            href={contact.cvHref}
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 font-medium text-white hover:border-accent-cyan hover:text-accent-cyan transition-colors"
          >
            Download CV
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
