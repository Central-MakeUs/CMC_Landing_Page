import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'

import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'
import { ScrollReveal } from '@/components/common/ScrollReveal'
import { SmoothScroll } from '@/components/common/SmoothScroll'
import { INSTAGRAM_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site'

import 'lenis/dist/lenis.css'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: SITE_NAME,
    url: '/',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: { card: 'summary_large_image', title: SITE_NAME, description: SITE_DESCRIPTION },
  // TODO: Search Console / 네이버 서치어드바이저 등록 후 인증 값 추가
  // verification: { google: '', other: { 'naver-site-verification': '' } },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

// 모집 단계가 바뀌어도 재배포 없이 최대 1시간 안에 CTA 문구가 반영되도록 HTML을 다시 만든다.
export const revalidate = 3600

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    // TODO: 리브랜딩 로고가 확정되면 PNG 또는 WebP 경로로 교체
    logo: `${SITE_URL}/favicon.ico`,
    description: SITE_DESCRIPTION,
    sameAs: [INSTAGRAM_URL],
  },
]

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ko">
      <head>
        {/* 한글 전체 폰트를 받지 않도록 Pretendard dynamic subset을 사용한다. */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          precedence="default"
        />
      </head>
      <body className={`${poppins.variable} flex min-h-dvh flex-col antialiased`}>
        {/* JSON-LD 문자열이 HTML로 해석되지 않도록 '<'를 이스케이프한다. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
        <ScrollReveal />
      </body>
    </html>
  )
}
