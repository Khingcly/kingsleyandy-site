'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, heading, align = 'left', dark = false }) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <div
        className={`flex items-center gap-3 mb-4 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span
          className={`font-mono text-xs tracking-[0.2em] uppercase ${
            dark ? 'text-accent-cyan' : 'text-accent'
          }`}
        >
          {eyebrow}
        </span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`h-px flex-1 max-w-[60px] origin-left ${
            dark ? 'bg-accent-cyan/60' : 'bg-accent/60'
          }`}
        />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`font-display text-3xl sm:text-4xl font-semibold tracking-tight ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {heading}
      </motion.h2>
    </div>
  );
}
