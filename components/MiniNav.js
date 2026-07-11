'use client';

import { useEffect, useState } from 'react';
import { contact, site } from '@/lib/content';

export default function MiniNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.65);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 18,
        left: '50%',
        transform: `translateX(-50%) translateY(${visible ? '0px' : '-12px'})`,
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        background: 'rgba(15,23,42,0.85)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(148,163,184,0.25)',
        borderRadius: 999,
        padding: 6,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <a
        href="#top"
        className="nav-link"
        style={{
          fontFamily: 'var(--font-ibm-plex-mono), monospace',
          fontSize: 11.5,
          color: '#94A3B8',
          padding: '7px 12px',
          borderRadius: 999,
        }}
      >
        {site.name}
      </a>
      <a
        href="#work"
        className="nav-link"
        style={{
          fontFamily: 'var(--font-ibm-plex-mono), monospace',
          fontSize: 11.5,
          color: '#CBD5E1',
          padding: '7px 12px',
          borderRadius: 999,
        }}
      >
        The Work
      </a>
      <a
        href="#contact"
        className="nav-link"
        style={{
          fontFamily: 'var(--font-ibm-plex-mono), monospace',
          fontSize: 11.5,
          color: '#CBD5E1',
          padding: '7px 12px',
          borderRadius: 999,
        }}
      >
        Contact
      </a>
      <a
        href={contact.cvHref}
        className="mini-cta"
        style={{
          fontFamily: 'var(--font-ibm-plex-mono), monospace',
          fontSize: 11.5,
          color: '#fff',
          background: '#2563EB',
          padding: '7px 14px',
          borderRadius: 999,
          fontWeight: 600,
          transition: 'background-color 0.2s ease',
        }}
      >
        CV
      </a>
    </div>
  );
}
