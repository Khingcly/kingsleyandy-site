'use client';

import { useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

export default function CountUp({ value, prefix = '', suffix = '', decimals = 0, display, className }) {
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(wrapRef, { once: true, margin: '-80px' });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || !textRef.current) return;

    const format = (n) =>
      decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString();

    if (display) {
      textRef.current.textContent = display;
      return;
    }

    if (shouldReduceMotion) {
      textRef.current.textContent = `${prefix}${format(value)}${suffix}`;
      return;
    }

    const duration = 1100;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = value * ease(progress);
      textRef.current.textContent = `${prefix}${format(current)}${suffix}`;
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, prefix, suffix, decimals, display, shouldReduceMotion]);

  return (
    <span ref={wrapRef} className={className}>
      <span ref={textRef}>{display ?? `${prefix}0${suffix}`}</span>
    </span>
  );
}
