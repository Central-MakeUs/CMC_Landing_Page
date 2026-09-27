import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/lib/site'

// Vercel Preview에는 검색 노출을 막는 noindex 헤더가 자동으로 붙는다.
// https://vercel.com/docs/headers/response-headers#x-robots-tag
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
