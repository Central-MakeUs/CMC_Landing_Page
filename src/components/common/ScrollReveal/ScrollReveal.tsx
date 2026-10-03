'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const STAGGER = 120
const ROW_TOLERANCE = 8

/** 화면에 들어온 [data-reveal]에 data-revealed를 붙인다. 같은 줄은 함께, 다음 줄은 STAGGER만큼 늦게 나타난다. */
export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let row = -1
        let rowTop = -Infinity

        entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          .forEach((entry) => {
            const { top } = entry.boundingClientRect
            if (top - rowTop > ROW_TOLERANCE) {
              row += 1
              rowTop = top
            }

            const element = entry.target as HTMLElement
            element.style.setProperty('--reveal-delay', `${row * STAGGER}ms`)
            element.setAttribute('data-revealed', '')
            observer.unobserve(element)
          })
      },
      { rootMargin: '0px 0px -80px 0px' },
    )

    document.querySelectorAll('[data-reveal]:not([data-revealed])').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
