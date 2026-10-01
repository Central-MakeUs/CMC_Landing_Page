'use client'

import { useState } from 'react'

import { ProjectCard } from '@/components/common/ProjectCard'
import { PROJECT_GALLERY, PROJECT_TAB_ITEMS } from '@/constants/projectGallery'
import { cn } from '@/utils/cn'

const PAGE_SIZE = 4

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
        <ul id="project-list" className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-[30px]">
          {projects.map((project, index) => (
            <li key={project.id} className={cn(index >= visibleCount && 'hidden lg:block')}>
              <ProjectCard
                {...project}
                image={project.logo}
                generation={Number(project.year)}
                variant="gallery"
                fetchPriority={index === 0 ? 'high' : 'auto'}
                loading={index < PAGE_SIZE ? 'eager' : 'lazy'}
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
