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
        ink0: '#05070D',
        ink1: '#0B1220',
        ink2: '#111827',
        ink3: '#1E293B',
        offwhite: '#F8FAFC',
        slatebg: '#F1F5F9',
        hairline: '#E2E8F0',
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1E40AF',
          cyan: '#38BDF8',
          light: '#DBEAFE',
        },
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'sans-serif'],
        body: ['var(--font-public-sans)', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
