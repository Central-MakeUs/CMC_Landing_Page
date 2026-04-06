'use client'

import { useMemo, useState } from 'react'

import Tabs from '@/components/common/Tabs'
import { cn } from '@/utils/cn'
import { motion } from 'motion/react'

import ProjectCard from './ProjectCard'
import ProjectTitle from './ProjectTitle'
import {
  PROJECT_TAB_ITEMS,
  PROJECTS,
  type ProjectTabId,
  projectCoverSrc,
} from './projectData'

export default function ProjectMain() {
  const [activeTab, setActiveTab] = useState<ProjectTabId>('all')

  const filtered = useMemo(() => {
    if (activeTab === 'all') {
      return PROJECTS
    }
    return PROJECTS.filter((p) => p.cohort === activeTab)
  }, [activeTab])

  return (
    <main
      className={cn(
        'relative w-full overflow-x-hidden',
        'min-h-[calc(100vw*1109/1440)]',
        'bg-cover bg-top bg-no-repeat',
        "[background-image:image-set(url('/images/project-bg.webp')_type('image/webp'),url('/images/project-bg.png')_type('image/png'))]",
      )}
    >
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
                key={p.id}
                title={p.title}
                cohortLabel={`${p.cohort}기`}
                description={p.description}
                coverSrc={projectCoverSrc(p.cover)}
                topWhite={p.topWhite}
                playStoreUrl={p.playStoreUrl}
                appStoreUrl={p.appStoreUrl}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
