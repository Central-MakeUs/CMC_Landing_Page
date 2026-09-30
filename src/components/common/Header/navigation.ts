import { ROUTES, type RoutePath } from '@/lib/site'

export interface NavigationItem {
  href: RoutePath
  label: string
}

export interface MobileNavigationItem extends NavigationItem {
  /** 페이지 안 섹션으로 이동할 때의 id */
  hash?: string
}

/** 데스크톱 메뉴 목록 */
export const NAVIGATION: readonly NavigationItem[] = [
  { href: ROUTES.home, label: 'Home' },
  { href: ROUTES.recruit, label: 'Recruit' },
  { href: ROUTES.project, label: 'Project' },
]

/** 모바일 메뉴 목록. 시안이 데스크톱과 달라서 분리
 * TODO: 의도하신 건지 확인 필요
 */
export const MOBILE_NAVIGATION: readonly MobileNavigationItem[] = [
  { href: ROUTES.project, label: '프로젝트' },
  { href: ROUTES.recruit, label: '모집안내' },
  { href: ROUTES.recruit, hash: 'faq', label: 'FAQ' },
]

/** 현재 경로가 메뉴 항목에 해당하는지. 홈은 정확히 '/'일 때만 활성이다. */
export const isActivePath = (pathname: string, href: RoutePath) =>
  pathname === href || (href !== ROUTES.home && pathname.startsWith(`${href}/`))
