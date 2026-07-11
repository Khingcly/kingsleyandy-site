'use client';

import { motion } from 'framer-motion';

/**
 * Scroll-triggered reveal. `index` staggers siblings (e.g. card grids)
 * without needing a parent variants/stagger container.
 */
export default function Reveal({
  children,
  index = 0,
  y = 24,
  duration = 0.6,
  className,
  as: Component = motion.div,
  ...props
}) {
  const Comp = Component;
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Comp>
  );
}
