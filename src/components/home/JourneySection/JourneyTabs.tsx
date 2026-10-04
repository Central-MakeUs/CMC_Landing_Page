'use client'

import Image from 'next/image'
import type { FocusEvent, PointerEvent } from 'react'
import { useEffect, useId, useRef, useState } from 'react'

import type { Journey } from '@/constants/journeys'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'
import { cn } from '@/utils/cn'

import JourneyItem from './JourneyItem'

const AUTOPLAY_INTERVAL = 5000

interface JourneyTabsProps {
  journeys: readonly Journey[]
}

export default function JourneyTabs({ journeys }: JourneyTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isKeyboardFocused, setIsKeyboardFocused] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const idPrefix = useId()
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const element = rootRef.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { threshold: 0.3 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // 사용자가 내용을 살피거나 동작 줄이기를 선호하면 자동 전환을 멈춘다.
    if (!isInView || isHovered || isKeyboardFocused || prefersReducedMotion) return

    const timer = window.setTimeout(() => setActiveIndex((index) => (index + 1) % journeys.length), AUTOPLAY_INTERVAL)
    return () => window.clearTimeout(timer)
  }, [activeIndex, isInView, isHovered, isKeyboardFocused, prefersReducedMotion, journeys.length])

  // 목록에 마우스를 올렸을 때만 멈춘다. 터치는 pointerleave가 오지 않을 수 있어 마우스만 본다.
  const handlePointerEnter = (event: PointerEvent) => {
    if (event.pointerType === 'mouse') setIsHovered(true)
  }
  const handlePointerLeave = (event: PointerEvent) => {
    if (event.pointerType === 'mouse') setIsHovered(false)
  }

  // 클릭으로 생긴 포커스에서는 멈추지 않는다. 키보드로 둘러볼 때만 멈춘다.
  const handleFocus = (event: FocusEvent) => setIsKeyboardFocused(event.target.matches(':focus-visible'))
  const handleBlur = (event: FocusEvent) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsKeyboardFocused(false)
  }

  return (
    <div
      data-reveal
      ref={rootRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="flex w-full flex-col items-start gap-6 pt-8 lg:flex-row lg:gap-10 xl:pt-12"
    >
      {/* lg부터 사진은 목록을 뺀 남은 너비를 채운다.*/}
      <div className="relative aspect-320/208 w-full overflow-hidden rounded bg-black/5 lg:w-auto lg:min-w-0 lg:flex-1 xl:rounded-lg">
        {journeys.map(({ title, image, imageAlt }, index) =>
          image ? (
            <Image
              key={title}
              src={image}
              alt={imageAlt ?? ''}
              aria-hidden={index !== activeIndex}
              fill
              sizes="(min-width: 1280px) 780px, (min-width: 1024px) calc(100vw - 400px), calc(100vw - 40px)"
              className={cn(
                'object-cover transition-opacity duration-500 ease-in-out motion-reduce:transition-none',
                index === activeIndex ? 'opacity-100' : 'opacity-0',
              )}
            />
          ) : null,
        )}
      </div>

      <ul
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        className="flex w-full flex-col items-start gap-5 lg:w-80 lg:shrink-0 xl:w-95 xl:gap-8"
      >
        {journeys.map((journey, index) => (
          <JourneyItem
            key={journey.title}
            id={`${idPrefix}-${index}`}
            title={journey.title}
            description={journey.description}
            active={index === activeIndex}
            onSelect={() => setActiveIndex(index)}
          />
        ))}
      </ul>
    </div>
  )
}
