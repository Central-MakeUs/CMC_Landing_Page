'use client'

import { useLenis } from 'lenis/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/utils/cn'

import HeroVideo from './HeroVideo'

type HeroSequenceProps = Readonly<{
  title: ReactNode
  cta: ReactNode
}>

/** 트랙패드 관성 입력이 끝났다고 판단하는 정지 시간 */
const WHEEL_QUIET = 200
/** 첫 휠 뒤 슬로건이 자리 잡을 때까지 스크롤을 유지하는 최소 시간 */
const MIN_LOCK = 600

export default function HeroSequence({ title, cta }: HeroSequenceProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const isRevealedRef = useRef(false)
  const releaseScrollRef = useRef<() => void>(() => {})
  const lenis = useLenis()
  const prefersReducedMotion = usePrefersReducedMotion()

  const revealContent = useCallback(() => {
    isRevealedRef.current = true
    setIsRevealed(true)
  }, [])

  const handlePlaybackComplete = useCallback(() => {
    revealContent()
    releaseScrollRef.current()
  }, [revealContent])

  // 첫 wheel은 슬로건을 보여주는 데 쓰고, 관성 입력이 끝난 뒤 Lenis를 재개한다.
  // 터치·키보드·스크롤바 입력은 잠금이 고장처럼 느껴지지 않도록 즉시 해제한다.
  useEffect(() => {
    if (!lenis || prefersReducedMotion || isRevealedRef.current) return
    if (window.scrollY > 0 || !window.matchMedia('(min-width: 768px)').matches) return

    let firstWheelAt = 0
    let timer = 0

    function release() {
      window.clearTimeout(timer)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', release)
      window.removeEventListener('touchstart', release)
      releaseScrollRef.current = () => {}
      lenis?.start()
    }

    function handleWheel() {
      revealContent()
      firstWheelAt ||= performance.now()
      const elapsed = performance.now() - firstWheelAt
      window.clearTimeout(timer)
      timer = window.setTimeout(release, Math.max(WHEEL_QUIET, MIN_LOCK - elapsed))
    }

    lenis.stop()
    releaseScrollRef.current = release
    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('scroll', release, { passive: true })
    window.addEventListener('touchstart', release, { passive: true })
    return release
  }, [lenis, prefersReducedMotion, revealContent])

  useEffect(() => {
    // 브라우저가 복원한 스크롤 위치는 마운트 다음 프레임에서 확인한다.
    const frame = window.requestAnimationFrame(() => {
      if (window.scrollY > 0) revealContent()
    })

    window.addEventListener('scroll', revealContent, { once: true, passive: true })
    window.addEventListener('touchmove', revealContent, { once: true, passive: true })
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', revealContent)
      window.removeEventListener('touchmove', revealContent)
    }
  }, [revealContent])

  return (
    <>
      <HeroVideo onPlaybackComplete={handlePlaybackComplete} />

      <div
        className={cn(
          'absolute inset-0 hidden bg-black opacity-0 md:block',
          isRevealed && 'opacity-50 motion-safe:animate-[hero-overlay-in_1100ms_cubic-bezier(0.22,1,0.36,1)_both]',
        )}
      />

      <div className="absolute inset-x-0 top-[33.4%] z-10 flex flex-col items-center px-5 text-center text-white">
        <div data-hero-revealed={isRevealed || undefined} className={cn('opacity-0', isRevealed && 'opacity-100')}>
          {title}
        </div>

        <div
          aria-hidden={!isRevealed}
          inert={!isRevealed}
          className={cn(
            'mt-8 hidden opacity-0 md:mt-12 md:block',
            isRevealed
              ? 'pointer-events-auto opacity-100 motion-safe:animate-[hero-cta-in_700ms_cubic-bezier(0.22,1,0.36,1)_1000ms_both]'
              : 'pointer-events-none',
          )}
        >
          {cta}
        </div>
      </div>
    </>
  )
}
