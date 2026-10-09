import type { Metadata } from 'next'

import { OG_IMAGE, type RoutePath, SITE_NAME } from './site'

interface PageMetadataOptions {
  title: string
  description: string
  path: RoutePath
}

/** 페이지마다 canonical, OG, Twitter 설정을 같은 형식으로 만든다. */
export const createPageMetadata = ({ title, description, path }: PageMetadataOptions): Metadata => {
  const pageTitle = `${title} | ${SITE_NAME}`

  return {
    // 홈과 하위 페이지 모두 같은 제목을 쓰고 부모 template의 중복 적용을 막는다.
    title: { absolute: pageTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'ko_KR',
      siteName: SITE_NAME,
      url: path,
      title: pageTitle,
      description,
      // openGraph는 부모 설정과 병합되지 않으므로 이미지도 명시한다.
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [OG_IMAGE],
    },
  }
}
