import type { MetadataRoute } from 'next'

import { ROUTES, SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return (
    Object.values(ROUTES)
      // /apply는 페이지 없이 이동만 하는 경로라 sitemap에서 제외
      .filter((path) => path !== ROUTES.apply)
      .map((path) => ({
        url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
        lastModified,
      }))
  )
}
