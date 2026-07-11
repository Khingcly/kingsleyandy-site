import { ImageResponse } from 'next/og';
import { hero, site } from '@/lib/content';

export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#05070D',
          backgroundImage:
            'radial-gradient(ellipse at 50% 46%, rgba(56,189,248,0.12) 0%, rgba(5,7,13,0.6) 60%, rgba(5,7,13,0.96) 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#38BDF8',
            marginBottom: 28,
          }}
        >
          No Visibility · Unreliable · Too Late
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 56,
            fontWeight: 500,
            color: '#E2E8F0',
            lineHeight: 1.2,
            maxWidth: 980,
          }}
        >
          {hero.headline}
        </div>
        <div style={{ display: 'flex', fontSize: 24, color: '#64748B', marginTop: 36 }}>
          {site.name} — {site.title}
        </div>
      </div>
    ),
    { ...size }
  );
}
