/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A0E27',
        offwhite: '#F8FAFC',
        slatebg: '#F1F5F9',
        ink: '#0F172A',
        hairline: '#E2E8F0',
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1E40AF',
          indigo: '#4F46E5',
          cyan: '#0EA5E9',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(60% 50% at 50% 30%, rgba(79,70,229,0.35) 0%, rgba(37,99,235,0.2) 35%, rgba(14,165,233,0.08) 60%, rgba(10,14,39,0) 80%)',
        'gradient-text': 'linear-gradient(90deg, #4F46E5 0%, #2563EB 55%, #0EA5E9 100%)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(-4%, -2%) scale(1)' },
          '50%': { transform: 'translate(4%, 3%) scale(1.08)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(1.3)' },
        },
      },
      animation: {
        drift: 'drift 14s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
