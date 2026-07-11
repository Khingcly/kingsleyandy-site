'use client';

import { useEffect, useState } from 'react';
import { nav, site } from '@/lib/content';

export default function Nav({ basePath = '' }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-navy/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 sm:px-8 h-16 flex items-center justify-between">
        <a href={`${basePath}#top`} className="font-display text-white font-semibold tracking-tight">
          {site.name}
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={`${basePath}${item.href}`}
                className="font-mono text-xs uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`${basePath}#contact`}
          className="font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-white/20 text-white hover:border-accent-cyan hover:text-accent-cyan transition-colors"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}
