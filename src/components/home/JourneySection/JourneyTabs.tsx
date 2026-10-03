'use client'

import Image from 'next/image'
import { useId, useState } from 'react'

import type { Journey } from '@/constants/journeys'

import JourneyItem from './JourneyItem'

interface JourneyTabsProps {
  journeys: readonly Journey[]
}

// 선택된 항목에 맞춰 사진과 설명을 바꾼다.
// TODO: 전환 방식(클릭, hover, 자동 순환)이 확정되면 setActiveIndex를 호출하는 곳만 수정
export default function JourneyTabs({ journeys }: JourneyTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const idPrefix = useId()
  const active = journeys[activeIndex]

  return (
    <div data-reveal className="flex w-full flex-col items-start gap-6 pt-8 lg:flex-row lg:gap-10 xl:pt-12">
      {/* lg부터 사진은 목록을 뺀 남은 너비를 채운다.*/}
      <div className="relative aspect-320/208 w-full overflow-hidden rounded bg-black/5 lg:w-auto lg:min-w-0 lg:flex-1 xl:rounded-lg">
        {active.image ? (
          <Image
            src={active.image}
            alt={active.imageAlt ?? ''}
            fill
            sizes="(min-width: 1280px) 780px, (min-width: 1024px) calc(100vw - 400px), calc(100vw - 40px)"
            className="object-cover"
          />
        ) : null}
      </div>

      <ul className="flex w-full flex-col items-start gap-5 lg:w-80 lg:shrink-0 xl:w-95 xl:gap-8">
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
