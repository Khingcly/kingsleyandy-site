'use client';

import { useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

function format(n, decimals) {
  return decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString();
}

export default function CountUp({ value, prefix = '', suffix = '', decimals = 0, display, className }) {
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(wrapRef, { once: true, margin: '-80px' });
  const shouldReduceMotion = useReducedMotion();

  // Rendered up front so the real number is in the markup for no-JS/SEO/crawlers;
  // the effect below animates from 0 up to it as a progressive enhancement.
  const finalText = display ?? `${prefix}${format(value, decimals)}${suffix}`;

  useEffect(() => {
    if (!isInView || !textRef.current || display || shouldReduceMotion) return;

    const duration = 1100;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = value * ease(progress);
      textRef.current.textContent = `${prefix}${format(current, decimals)}${suffix}`;
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        textRef.current.textContent = finalText;
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, prefix, suffix, decimals, display, shouldReduceMotion, finalText]);

  return (
    <span ref={wrapRef} className={className}>
      <span ref={textRef}>{finalText}</span>
    </span>
  );
}
