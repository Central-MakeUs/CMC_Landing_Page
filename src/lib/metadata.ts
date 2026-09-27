import type { Metadata } from 'next'

import { OG_IMAGE, type RoutePath, SITE_NAME } from './site'

interface PageMetadataOptions {
  title: string
  description: string
  path: RoutePath
}

/** 페이지마다 canonical, OG, Twitter 설정을 같은 형식으로 만든다. */
export const createPageMetadata = ({ title, description, path }: PageMetadataOptions): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: SITE_NAME,
    url: path,
    title: `${title} | ${SITE_NAME}`,
    description,
    // openGraph는 부모 설정과 병합되지 않으므로 이미지도 명시한다.
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [OG_IMAGE],
  },
})
