'use client'

import { useLenis } from 'lenis/react'
import Link from 'next/link'
import type { MouseEvent } from 'react'

import { CmcLogo } from '@/components/common/CmcLogo'
import useCurrentPathname from '@/hooks/useCurrentPathname'
import { ROUTES } from '@/lib/site'

/** 다른 페이지에서는 홈으로 이동하고, 홈에서 누르면 최상단으로 스크롤 */
export default function HeaderLogoLink() {
  const pathname = useCurrentPathname()
  const lenis = useLenis()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== ROUTES.home) return

    // 같은 페이지로의 이동이라 Next.js 내비게이션을 막는다
    event.preventDefault()
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (lenis) {
      lenis.scrollTo(0, { immediate: prefersReducedMotion })
    } else {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    }
  }

  return (
    <Link
      href={ROUTES.home}
      onClick={handleClick}
      aria-label="CMC 홈"
      className="text-blue-50 md:header-light:text-gray-900"
    >
      <CmcLogo className="size-6 md:size-7.5" />
    </Link>
  )
}
