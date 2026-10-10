export const SITE_URL = 'https://cmc.neordinary.com'
export const SITE_NAME = 'CMC'
export const SITE_FULL_NAME = 'Central Makeus Challenge'
export const SITE_DESCRIPTION =
  'CMC는 3개월 안에 아이디어의 시장성을 검증하고 수익형 앱을 개발해 실제 출시까지 완주하는 IT 연합동아리입니다. 활동 소개, 기수별 프로젝트와 모집 안내를 확인하세요.'
export const INSTAGRAM_URL = 'https://www.instagram.com/cmc__official/'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/central-makeus-challenge-cmc/'
export const GA_MEASUREMENT_ID = 'G-F5BRH8W3GQ'

export const OG_IMAGE = {
  url: '/opengraph-image.png',
  width: 1200,
  height: 630,
  alt: 'PICK YOUR POSSIBILITY IN CMC — CMC 20th',
}

// 기존 홈페이지와 URL 경로를 맞춘다. sitemap과 내부 링크도 이 값을 사용한다.
export const ROUTES = {
  home: '/',
  project: '/project',
  recruit: '/recruit',
  // 페이지 없이 지원서 또는 모집 안내로 이동
  apply: '/apply',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]
