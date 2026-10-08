'use client'

import { useEffect, useRef } from 'react'

const DURATION = 1500

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3
}

interface StatCountProps {
  value: string
  className?: string
}

/** 화면에 들어오면 0부터 value까지 숫자를 올린다. 서버 HTML과 동작 줄이기에서는 최종값을 그대로 보여준다. */
export default function StatCount({ value, className }: StatCountProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    const target = Number(value)
    if (!element || !Number.isFinite(target) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    // 카드는 data-reveal로 숨겨져 있어 0으로 바꿔도 깜빡이지 않는다.
    element.textContent = '0'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        let start: number | undefined
        const tick = (now: number) => {
          start ??= now
          const progress = Math.min((now - start) / DURATION, 1)
          element.textContent = String(Math.round(easeOutCubic(progress) * target))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      element.textContent = value
    }
  }, [value])

  return (
    <strong ref={ref} className={className}>
      {value}
    </strong>
  )
}
