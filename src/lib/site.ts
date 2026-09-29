export const SITE_URL = 'https://cmc.neordinary.com'
export const SITE_NAME = 'CMC'
export const SITE_DESCRIPTION = '우리만의 룰을 세워 세상을 바꾸는 조직, CMC'
export const INSTAGRAM_URL = 'https://www.instagram.com/cmc__official/'
// TODO: CMC 카카오톡 채널 주소로 교체
export const KAKAO_CHANNEL_URL = ''

// 최종 OG 이미지가 나오면 파일과 URL을 함께 교체한다.
export const OG_IMAGE = { url: '/opengraph-image', width: 1200, height: 630, alt: SITE_NAME }

// 기존 홈페이지와 URL 경로를 맞춘다. sitemap과 내부 링크도 이 값을 사용한다.
export const ROUTES = {
  home: '/',
  project: '/project',
  recruit: '/recruit',
  apply: '/apply',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]
