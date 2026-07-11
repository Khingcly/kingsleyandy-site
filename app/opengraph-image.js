import { ImageResponse } from 'next/og';
import { site } from '@/lib/content';

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
          backgroundColor: '#0A0E27',
          backgroundImage:
            'radial-gradient(60% 60% at 50% 40%, rgba(79,70,229,0.45) 0%, rgba(37,99,235,0.25) 35%, rgba(14,165,233,0.08) 60%, rgba(10,14,39,0) 80%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#0EA5E9',
            marginBottom: 28,
          }}
        >
          Business Intelligence Team Lead // Analytics Engineer
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 600,
            color: '#ffffff',
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          {site.name} builds enterprise reporting platforms leadership trusts.
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#94A3B8', marginTop: 36 }}>
          Open to opportunities — UK · UAE · Canada
        </div>
      </div>
    ),
    { ...size }
  );
}
