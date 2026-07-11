'use client';

import { motion } from 'framer-motion';
import { hero } from '@/lib/content';
import HeroGlow from '@/components/motion/HeroGlow';
import StatusDot from '@/components/StatusDot';
import MagneticButton from '@/components/motion/MagneticButton';
import CountUp from '@/components/motion/CountUp';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <HeroGlow />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-6 sm:px-8"
      >
        <motion.div variants={item} className="flex items-center gap-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-cyan animate-pulse-dot" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
            {hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white max-w-3xl leading-[1.1]"
        >
          {hero.headlinePre}
          <span className="text-gradient">{hero.headlineGradient}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-lg text-slate-300 leading-relaxed">
          {hero.subhead}
        </motion.p>

        <motion.div variants={item} className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
          <StatusDot />
          <span className="font-mono text-xs text-slate-300">{hero.status}</span>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton
            href={hero.ctas.primary.href}
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 font-medium text-white hover:bg-accent-hover transition-colors"
          >
            {hero.ctas.primary.label}
          </MagneticButton>
          <MagneticButton
            href={hero.ctas.secondary.href}
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 font-medium text-white hover:border-accent-cyan hover:text-accent-cyan transition-colors"
          >
            {hero.ctas.secondary.label}
          </MagneticButton>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {hero.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5"
            >
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-white">
                {stat.isText ? (
                  stat.display
                ) : (
                  <CountUp value={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="mt-1 font-mono text-xs text-slate-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
