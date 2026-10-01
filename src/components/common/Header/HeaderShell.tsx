'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

import { type HeaderTheme, useHeaderTheme } from '@/hooks/useHeaderTheme'
import { ROUTES } from '@/lib/site'

/**
 * 최상단 섹션이 어두운 페이지 목록
 * - 나머지 페이지는 밝은 배경에서 시작한다
 */
const DARK_TOP_ROUTES: readonly string[] = [ROUTES.home, ROUTES.recruit, ROUTES.project]

type HeaderShellProps = Readonly<{
  children: ReactNode
}>

/**
 * <header> 태그와 테마 속성만 담당한다.
 * - 색은 자식들이 `header-light:` variant로 바꾼다.
 * - 로고·메뉴·버튼은 children으로 받아 서버 컴포넌트로 유지한다.
 */
export default function HeaderShell({ children }: HeaderShellProps) {
  const pathname = usePathname()
  const fallback: HeaderTheme = DARK_TOP_ROUTES.includes(pathname) ? 'dark' : 'light'
  const theme = useHeaderTheme(fallback)

  return (
    <header
      data-header-theme={theme}
      className="fixed inset-x-0 top-0 z-30 h-12 bg-blue-400 px-5 md:h-15 md:bg-transparent md:px-15.5"
    >
      {children}
    </header>
  )
}
