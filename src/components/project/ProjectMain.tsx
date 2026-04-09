'use client'

import { useMemo, useState } from 'react'

import Tabs from '@/components/common/Tabs'
import { cn } from '@/utils/cn'
import { motion } from 'motion/react'

import ProjectCard from './ProjectCard'
import ProjectTitle from './ProjectTitle'
import { PROJECTS, PROJECT_TAB_ITEMS } from '@/constants/project'

export type ProjectTabId = (typeof PROJECT_TAB_ITEMS)[number]['id']

export default function ProjectMain() {
  const [activeTab, setActiveTab] = useState<ProjectTabId>('all')
  const [visibleCount, setVisibleCount] = useState(5)

  const filtered = useMemo(() => {
    if (activeTab === 'all') {
      return PROJECTS
    }
    return PROJECTS.filter((p) => p.year === activeTab)
  }, [activeTab])

  const handleTabChange = (id: ProjectTabId) => {
    setActiveTab(id)
    setVisibleCount(5)
  }

  return (
    <main className="relative w-full overflow-hidden">
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 w-full',
          'hidden md:block',
          'aspect-1440/1109',
          'bg-cover bg-top bg-no-repeat',
          "[background-image:image-set(url('/images/project-bg.webp')_type('image/webp'),url('/images/project-bg.png')_type('image/png'))]",
        )}
      />
      {/* Mobile background */}
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 w-full',
          'block md:hidden',
          'aspect-720/2668',
          'bg-cover bg-top bg-no-repeat',
          "bg-[image-set(url('/images/project-bg-mobile.webp')_type('image/webp'),url('/images/project-bg-mobile.png')_type('image/png'))]",
        )}
      />
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-5 pb-17 md:pb-32 xl:px-[200px] [--rw:calc((100vw-40px)/320)] md:[--rw:calc(100vw/1440)]">
        <motion.div
          className="flex w-full max-w-[1040px] flex-col items-center pt-[200px] md:pt-[240px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <ProjectTitle className="text-[24px] md:text-[clamp(32px,calc(var(--rw,1px)*48),48px)]" />
        </motion.div>

        <motion.div
          className="mt-6 flex w-full max-w-[1040px] flex-col items-center gap-[26px] md:gap-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <div className="w-full overflow-x-auto md:overflow-x-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <Tabs
              items={PROJECT_TAB_ITEMS}
              active={activeTab}
              onChange={handleTabChange}
              aria-label="기수 필터"
              className="mx-auto w-fit justify-center flex-nowrap gap-1 bg-white/12 md:flex-wrap md:gap-[10px] md:bg-white/4"
            />
          </div>

          <div className="grid w-full grid-cols-1 gap-4 md:grid-5 md:grid-cols-2 lg:grid-cols-3 [--rw:min(calc((100vw-40px)/320),1.25px)] md:[--rw:calc((100vw-60px)/640)] lg:[--rw:calc((100vw-80px)/960)] xl:[--rw:calc((min(100vw,1440px)-440px)/960)]">
            {filtered.map((p, i) => (
              <ProjectCard
                key={p.name}
                name={p.name}
                year={p.year}
                rank={p.rank}
                description={p.description}
                logo={p.logo}
                playStoreUrl={p.link.android}
                appStoreUrl={p.link.ios}
                className={i >= visibleCount ? 'md:block hidden' : undefined}
              />
            ))}
          </div>
          {filtered.length > visibleCount && (
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + 5)}
              className="md:hidden w-full max-w-[400px] rounded-[10px] bg-[#454858] px-[50px] py-4 text-[16px] font-semibold leading-normal text-white hover:opacity-90"
            >
              더보기
            </button>
          )}
        </motion.div>
      </div>
    </main>
  )
}
