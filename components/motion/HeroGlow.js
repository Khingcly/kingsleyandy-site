'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function HeroGlow() {
  const glowRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    function handleMouseMove(e) {
      if (!glowRef.current) return;
      const { innerWidth, innerHeight } = window;
      const relX = (e.clientX / innerWidth - 0.5) * 2;
      const relY = (e.clientY / innerHeight - 0.5) * 2;
      glowRef.current.style.setProperty('--parallax-x', `${relX * 16}px`);
      glowRef.current.style.setProperty('--parallax-y', `${relY * 12}px`);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        ref={glowRef}
        className="absolute inset-0 bg-hero-glow motion-safe:animate-drift"
        style={{
          transform: 'translate(var(--parallax-x, 0), var(--parallax-y, 0))',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  );
}
