'use client';

import { useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export default function CountUp({ value, prefix = '', suffix = '', display, className }) {
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(wrapRef, { once: true, margin: '-80px' });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || !textRef.current) return;

    if (display) {
      textRef.current.textContent = display;
      return;
    }

    if (shouldReduceMotion) {
      textRef.current.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
      return;
    }

    const duration = 1200;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.round(value * ease(progress));
      textRef.current.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, prefix, suffix, display, shouldReduceMotion]);

  return (
    <span ref={wrapRef} className={className}>
      <span ref={textRef}>{display ?? `${prefix}0${suffix}`}</span>
    </span>
  );
}
