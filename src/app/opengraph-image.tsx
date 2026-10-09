import { ImageResponse } from 'next/og'

import { CmcLogo } from '@/components/common/CmcLogo'
import { OG_IMAGE, SITE_FULL_NAME, SITE_NAME, SITE_URL } from '@/lib/site'

// ImageResponse는 Tailwind를 지원하지 않아 인라인 스타일을 사용한다.
export const alt = OG_IMAGE.alt
export const size = { width: OG_IMAGE.width, height: OG_IMAGE.height }
export const contentType = 'image/png'

// globals.css의 기존 white, blue-200, navy-800, navy-975 토큰과 같은 색이다.
// ImageResponse는 CSS 변수와 Tailwind를 해석하지 못하므로 여기에서는 값을 직접 사용한다.
const colors = { white: '#ffffff', blue200: '#c1dbff', navy800: '#082053', navy975: '#000b22' }
const domain = new URL(SITE_URL).host

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(180deg, ${colors.navy800} 0%, ${colors.navy975} 100%)`,
        color: colors.white,
        padding: 80,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
        <CmcLogo width={220} height={211} color={colors.white} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 160, fontWeight: 700, lineHeight: 1.1, letterSpacing: -4 }}>{SITE_NAME}</div>
          <div style={{ fontSize: 32, color: colors.blue200, marginTop: 16 }}>{SITE_FULL_NAME}</div>
        </div>
      </div>
      <div style={{ fontSize: 30, color: colors.blue200, marginTop: 64 }}>{domain}</div>
    </div>,
    size,
  )
}
