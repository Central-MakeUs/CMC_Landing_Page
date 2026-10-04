'use client'

import { useState } from 'react'

import { PROJECT_GALLERY, PROJECT_TAB_ITEMS } from '@/constants/projectGallery'
import { cn } from '@/utils/cn'

import ProjectGalleryCard from './ProjectGalleryCard'

const PAGE_SIZE = 4
// 첫 화면에 보이는 카드 수(웹 3열 × 2행). lazy 이미지는 CSS와 레이아웃 계산을 기다렸다가 받기 시작해서 늦게 뜬다.
const EAGER_COUNT = 6

// 카드가 아래에서 올라오며 50ms 간격으로 차례로 나타난다.
// 지연은 모바일에서 더보기 단위(4장), 웹에서 첫 화면 단위(6장)로 반복한다.
// animation 단축 속성이 animation-delay를 덮어쓰지 않도록 지연은 변수로 넘긴다.
const cardEnterClassName =
  'motion-safe:animate-[project-card-in_800ms_cubic-bezier(0.6,-0.05,0.01,0.99)_var(--enter-delay)_both]'
const ENTER_DELAY = ['[--enter-delay:0ms]', '[--enter-delay:50ms]', '[--enter-delay:100ms]', '[--enter-delay:150ms]']
const ENTER_DELAY_LG = [
  'lg:[--enter-delay:0ms]',
  'lg:[--enter-delay:50ms]',
  'lg:[--enter-delay:100ms]',
  'lg:[--enter-delay:150ms]',
  'lg:[--enter-delay:200ms]',
  'lg:[--enter-delay:250ms]',
]

const focusClassName = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900'

export default function ProjectGallery() {
  const [generation, setGeneration] = useState<string>('all')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const projects = PROJECT_GALLERY.filter(
    (project) => generation === 'all' || project.generation === Number(generation),
  )

  return (
    <div className="flex w-full flex-col items-center gap-8 lg:gap-16">
      <div className="w-full [scrollbar-width:none] overflow-x-auto pl-4.5 md:pl-0 [&::-webkit-scrollbar]:hidden">
        <div
          role="group"
          aria-label="프로젝트 기수 필터"
          className="mx-auto flex w-max items-center gap-1 rounded-[60px] bg-white/20 lg:gap-2"
        >
          {PROJECT_TAB_ITEMS.map((tab) => {
            const selected = generation === tab.id

            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={selected}
                aria-controls="project-list"
                onClick={() => {
                  setGeneration(tab.id)
                  setVisibleCount(PAGE_SIZE)
                }}
                className={cn(
                  'flex shrink-0 cursor-pointer items-center justify-center rounded-[60px] px-4.5 py-2 text-sm leading-[34px] font-medium tracking-[-0.02em] whitespace-nowrap lg:px-6 lg:py-2.5 lg:text-xl',
                  focusClassName,
                  selected ? 'bg-navy-900 text-white' : 'text-navy-900',
                )}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="w-full">
        {/* 기수를 바꾸면 목록을 다시 마운트해 등장 애니메이션을 처음부터 재생한다 */}
        <ul
          key={generation}
          id="project-list"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-[30px]"
        >
          {projects.map((project, index) => (
            <li
              key={project.id}
              className={cn(
                cardEnterClassName,
                ENTER_DELAY[index % ENTER_DELAY.length],
                ENTER_DELAY_LG[index % ENTER_DELAY_LG.length],
                index >= visibleCount && 'hidden lg:block',
              )}
            >
              <ProjectGalleryCard
                title={project.title}
                description={project.description}
                generation={project.generation}
                image={project.logo}
                link={project.link}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                loading={index < EAGER_COUNT ? 'eager' : 'lazy'}
              />
            </li>
          ))}
        </ul>

        {visibleCount < projects.length && (
          <button
            type="button"
            aria-controls="project-list"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className={cn(
              'mt-4 flex h-11.5 w-full cursor-pointer items-center justify-center rounded-[10px] bg-navy-850 text-base leading-6 font-semibold tracking-[-0.02em] text-white lg:hidden',
              focusClassName,
            )}
          >
            더보기
          </button>
        )}

        {projects.length === 0 && (
          <p role="status" className="py-16 text-center text-navy-900">
            아직 등록된 프로젝트가 없습니다.
          </p>
        )}
      </div>
    </div>
  )
}
