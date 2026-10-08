'use client'

import { useEffect, useState } from 'react'

/**
 * 헤더 뒤 배경의 밝기
 */
export type HeaderTheme = 'light' | 'dark'

/** 섹션이 자기 배경을 알려주는 HTML 속성
 * - ex) `<section data-header-theme="light">`*/
export const HEADER_THEME_ATTRIBUTE = 'data-header-theme'

/** 데스크톱 헤더(60px)의 세로 중앙
 * - 이 선을 지나는 섹션이 헤더 뒤의 배경 */
const PROBE_Y = 30

const isHeaderTheme = (value: string | null): value is HeaderTheme => value === 'light' || value === 'dark'

/**
 * 스크롤 위치에 따라 헤더 뒤에 있는 섹션의 테마를 반환하는 훅
 * - `fallback`: 서버 렌더링과 첫 페인트 및 테마를 선언하지 않은 영역에서 사용
 */
export function useHeaderTheme(fallback: HeaderTheme): HeaderTheme {
  const [theme, setTheme] = useState<HeaderTheme>(fallback)

  useEffect(() => {
    let frame = 0

    const resolve = () => {
      frame = 0
      let matched: HeaderTheme | null = null

      // 현재 섹션 확인
      document.querySelectorAll<HTMLElement>(`[${HEADER_THEME_ATTRIBUTE}]:not(header)`).forEach((section) => {
        const { top, bottom } = section.getBoundingClientRect()
        if (top > PROBE_Y || bottom <= PROBE_Y) return

        const value = section.getAttribute(HEADER_THEME_ATTRIBUTE)
        if (isHeaderTheme(value)) matched = value
      })

      setTheme(matched ?? fallback)
    }

    // 스크롤 이벤트가 여러 번 와도 한 프레임에 한 번만 계산
    const schedule = () => {
      if (frame) return
      frame = window.requestAnimationFrame(resolve)
    }

    resolve() // 처음 화면이 나타났을 때 테마 계산
    window.addEventListener('scroll', schedule, { passive: true }) // 스크롤 시 재계산
    window.addEventListener('resize', schedule) // 화면 크기 변경 시 재계산

    return () => {
      if (frame) window.cancelAnimationFrame(frame) // 예약된 프레임 취소
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [fallback])

  return theme
}
