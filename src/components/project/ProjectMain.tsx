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

  const filtered = useMemo(() => {
    if (activeTab === 'all') {
      return PROJECTS
    }
    return PROJECTS.filter((p) => p.year === activeTab)
  }, [activeTab])

  return (
    <main className="relative w-full overflow-hidden">
      <div
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 w-full',
          'aspect-1440/1109',
          'bg-cover bg-top bg-no-repeat',
          "[background-image:image-set(url('/images/project-bg.webp')_type('image/webp'),url('/images/project-bg.png')_type('image/png'))]",
        )}
      />
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-6 pb-32 md:px-[200px] [--rw:calc(100vw/1440)]">
        <motion.div
          className="flex w-full max-w-[1040px] flex-col items-center pt-[200px] md:pt-[240px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <ProjectTitle />
        </motion.div>

        <motion.div
          className="mt-6 flex w-full max-w-[1040px] flex-col items-center gap-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          <Tabs
            items={PROJECT_TAB_ITEMS}
            active={activeTab}
            onChange={setActiveTab}
            aria-label="기수 필터"
            className="mx-auto w-fit justify-center"
          />

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard
                key={p.name}
                name={p.name}
                year={p.year}
                rank={p.rank}
                description={p.description}
                logo={p.logo}
                playStoreUrl={p.link.android}
                appStoreUrl={p.link.ios}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
