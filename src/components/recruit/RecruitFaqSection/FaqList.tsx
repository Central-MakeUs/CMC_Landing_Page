'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'

interface FaqListProps {
  children: ReactNode
  className?: string
}

/** 답변을 바꿔 열어도 아래 내용이 출렁이지 않도록, 지금까지 가장 컸던 높이 밑으로 줄어들지 않게 한다. 너비가 바뀌면 다시 잰다. */
export default function FaqList({ children, className }: FaqListProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let width = 0
    let maxHeight = 0

    const observer = new ResizeObserver(() => {
      const currentWidth = element.getBoundingClientRect().width

      if (currentWidth !== width) {
        width = currentWidth
        maxHeight = 0
        element.style.minHeight = ''
      }

      maxHeight = Math.max(maxHeight, element.getBoundingClientRect().height)
      element.style.minHeight = `${maxHeight}px`
    })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
