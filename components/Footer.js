import { site } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-slate-500">Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
