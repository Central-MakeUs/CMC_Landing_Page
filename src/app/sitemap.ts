import type { MetadataRoute } from 'next'

import { ROUTES, SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  // 실제 콘텐츠 수정일을 관리하기 전까지 배포 시각을 lastModified로 제공하지 않는다.
  return (
    Object.values(ROUTES)
      // /apply는 페이지 없이 이동만 하는 경로라 sitemap에서 제외
      .filter((path) => path !== ROUTES.apply)
      .map((path) => ({
        url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
      }))
  )
}
