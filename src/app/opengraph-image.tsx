import { ImageResponse } from 'next/og'

// 디자인 확정 전까지 사용하는 임시 OG 이미지다.
// 최종본이 나오면 이 파일을 지우고 1200×630 PNG로 교체한다.
// ImageResponse는 Tailwind를 지원하지 않아 인라인 스타일을 사용한다.
export const alt = 'CMC'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

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
        background: '#0d0f14',
        color: '#ffffff',
      }}
    >
      <div style={{ fontSize: 200, fontWeight: 700, letterSpacing: -6 }}>CMC</div>
      <div style={{ fontSize: 36, color: '#a3b1ff', marginTop: 12 }}>cmc.neordinary.com</div>
    </div>,
    size,
  )
}
