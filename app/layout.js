import { Bricolage_Grotesque, Public_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { site, hero } from '@/lib/content';
import MotionProvider from '@/components/motion/MotionProvider';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bricolage',
  display: 'swap',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-public-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: hero.headline,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: ['/opengraph-image'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: hero.headline,
    description: site.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${publicSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-body antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
