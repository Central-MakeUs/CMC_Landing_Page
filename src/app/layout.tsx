import '@/styles/index.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CMC',
  description:
    'Central MakeUs Challenge는 각 포지션 최고의 전문가들이 모여 수익형 앱을 런칭하며, 최초의 외주 연계형 동아리입니다.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
