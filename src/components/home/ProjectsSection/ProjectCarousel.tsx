'use client'

import type { KeyboardEvent } from 'react'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { UseEmblaCarouselType } from 'embla-carousel-react'
import useEmblaCarousel from 'embla-carousel-react'

import chevronLeft from '@/assets/images/carousel-chevron-left.svg'
import chevronRight from '@/assets/images/carousel-chevron-right.svg'
import { PROJECTS } from '@/constants/projects'
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion'
import { ROUTES } from '@/lib/site'
import { cn } from '@/utils/cn'

import ProjectCard from './ProjectCard'

type EmblaApi = NonNullable<UseEmblaCarouselType[1]>

// 이전·다음 버튼은 캐러셀에 마우스를 올리거나 키보드 포커스가 들어왔을 때만 보인다(시안 696:343).
// hover가 없는 기기에서는 누를 방법이 없어지므로 계속 보여준다.
const controlClassName =
  'absolute top-1/2 hidden size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md bg-black/40 transition-opacity duration-200 group-hover:opacity-100 group-has-focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 motion-reduce:transition-none xl:flex [@media(hover:hover)]:opacity-0'

function updateScale(emblaApi: EmblaApi) {
  const engine = emblaApi.internalEngine()
  const scrollProgress = emblaApi.scrollProgress()
  const snaps = emblaApi.scrollSnapList()
  const slideNodes = emblaApi.slideNodes()

  //각 슬라이드 거리 계산
  snaps.forEach((snap, snapIndex) => {
    engine.slideRegistry[snapIndex].forEach((slideIndex) => {
      let diff = snap - scrollProgress

      // loop에서 반대편으로 넘어가 보이는 슬라이드는 한 바퀴만큼 보정
      engine.slideLooper.loopPoints.forEach((loopPoint) => {
        const target = loopPoint.target()
        if (loopPoint.index !== slideIndex || target === 0) return
        diff = target < 0 ? snap - (1 + scrollProgress) : snap + (1 - scrollProgress)
      })

      const offset = Math.max(-2, Math.min(2, diff * snaps.length))
      const distance = Math.abs(offset)
      const node = slideNodes[slideIndex]

      node.style.setProperty('--distance', distance.toFixed(3))
      node.style.setProperty('--z', String(10 - Math.round(distance * 5)))
    })
  })
}

export default function ProjectCarousel() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [selectedSlide, setSelectedSlide] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', loop: true })

  useEffect(() => {
    if (!emblaApi) return

    const updateSelectedSlide = () => setSelectedSlide(emblaApi.selectedScrollSnap())

    updateScale(emblaApi)
    emblaApi.on('select', updateSelectedSlide)
    emblaApi.on('reInit', updateSelectedSlide)
    emblaApi.on('scroll', updateScale)
    emblaApi.on('reInit', updateScale)

    return () => {
      emblaApi.off('select', updateSelectedSlide)
      emblaApi.off('reInit', updateSelectedSlide)
      emblaApi.off('scroll', updateScale)
      emblaApi.off('reInit', updateScale)
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(prefersReducedMotion), [emblaApi, prefersReducedMotion])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(prefersReducedMotion), [emblaApi, prefersReducedMotion])
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index, prefersReducedMotion),
    [emblaApi, prefersReducedMotion],
  )

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      scrollPrev()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      scrollNext()
    }
  }

  return (
    <div className="flex w-full flex-col items-center gap-6 xl:gap-16">
      <div className="group relative -mx-5 w-[calc(100%+40px)] max-w-325.5 select-none xl:mx-0 xl:w-full">
        <div
          id="projects-carousel"
          ref={emblaRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="CMC 프로젝트"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          // 카드 그림자(아래로 16px)가 overflow-hidden에 잘리지 않도록 위아래에 여백을 두고 음수 margin으로 상쇄한다
          className="-my-4 overflow-hidden py-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
        >
          <div className="flex [touch-action:pan-y_pinch-zoom] items-center">
            {PROJECTS.map((project, slideIndex) => (
              <div
                key={project.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${slideIndex + 1} / ${PROJECTS.length}`}
                aria-hidden={slideIndex !== selectedSlide}
                className="relative z-(--z) mr-[calc(var(--gap)_-_var(--card)_*_0.125)] min-w-0 flex-[0_0_var(--card)] [--card:min(100%_-_40px,400px)] [--gap:11px] xl:[--card:495px] xl:[--gap:32px]"
              >
                {/* 가운데에서 한 칸 멀어질 때마다 0.25배씩 작아짐 */}
                <div className="flex origin-center transform-[scale(calc(1-var(--distance,0)*0.25))] items-center justify-center">
                  {/* 드래그로 넘길 때는 Embla가 click을 막아 주므로 페이지가 이동하지 않는다 */}
                  <Link
                    href={ROUTES.project}
                    draggable={false}
                    // aria-hidden인 양옆 슬라이드의 링크는 Tab 순서에서 뺀다
                    tabIndex={slideIndex === selectedSlide ? undefined : -1}
                    className="block w-full rounded-[9px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 xl:rounded-[14px]"
                  >
                    <ProjectCard {...project} active={slideIndex === selectedSlide} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="이전 프로젝트"
          aria-controls="projects-carousel"
          onClick={scrollPrev}
          className={cn(controlClassName, 'left-[calc(50%-266px)]')}
        >
          <Image src={chevronLeft} width={16} height={16} alt="" unoptimized />
        </button>
        <button
          type="button"
          aria-label="다음 프로젝트"
          aria-controls="projects-carousel"
          onClick={scrollNext}
          className={cn(controlClassName, 'right-[calc(50%-266px)]')}
        >
          <Image src={chevronRight} width={16} height={16} alt="" unoptimized />
        </button>
      </div>

      <div role="group" aria-label="프로젝트 슬라이드 선택" className="flex items-center gap-[4.286px] xl:gap-1.5">
        {PROJECTS.map(({ title }, index) => {
          const active = selectedSlide === index

          return (
            <button
              key={title}
              type="button"
              aria-label={`${index + 1}번째 프로젝트 보기`}
              aria-current={active ? 'true' : undefined}
              onClick={() => scrollTo(index)}
              className={cn(
                "relative h-2.5 w-2.5 rounded-full bg-gray-200 after:absolute after:-inset-2 after:content-[''] xl:h-3.5 xl:w-3.5",
                'cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600',
                active && 'w-[22.857px] bg-gray-760 xl:w-8',
              )}
            />
          )
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {PROJECTS[selectedSlide].title} 프로젝트, {selectedSlide + 1} / {PROJECTS.length}
      </p>
    </div>
  )
}
