import { ROUTES, type RoutePath } from '@/lib/site'

export interface NavigationItem {
  href: RoutePath
  label: string
}

/** 데스크톱 메뉴와 모바일 메뉴가 함께 쓰는 목록 */
export const NAVIGATION: readonly NavigationItem[] = [
  { href: ROUTES.home, label: 'Home' },
  { href: ROUTES.recruit, label: 'Recruit' },
  { href: ROUTES.project, label: 'Project' },
]

/** 현재 경로가 메뉴 항목에 해당하는지. 홈은 정확히 '/'일 때만 활성이다. */
export const isActivePath = (pathname: string, href: RoutePath) =>
  pathname === href || (href !== ROUTES.home && pathname.startsWith(`${href}/`))
