'use client'

import type { KeyboardEvent } from 'react'
import { useId, useRef, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'

import roleClient from '@/assets/images/role-client.webp'
import roleDesigner from '@/assets/images/role-designer.webp'
import roleFullStack from '@/assets/images/role-full-stack.webp'
import rolePm from '@/assets/images/role-pm.webp'
import roleServer from '@/assets/images/role-server.webp'
import type { RecruitRole, RecruitRoleId } from '@/constants/recruit'
import { cn } from '@/utils/cn'

import RoleChips from './RoleChips'

const ROLE_IMAGES: Record<RecruitRoleId, StaticImageData> = {
  pm: rolePm,
  designer: roleDesigner,
  client: roleClient,
  server: roleServer,
  'full-stack': roleFullStack,
}

const tabClassName =
  'relative shrink-0 cursor-pointer overflow-hidden rounded-[7px] px-4 py-2.5 text-lg leading-6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:aspect-176/180 lg:flex-1 lg:rounded-xl lg:p-0 lg:text-2xl lg:leading-7.5'

interface RoleTabsProps {
  roles: readonly RecruitRole[]
}

export default function RoleTabs({ roles }: RoleTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const idPrefix = useId()

  // 탭 목록 표준 키보드 조작: ←/→로 이동, Home/End로 처음과 끝
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = roles.length - 1
    const next = {
      ArrowRight: activeIndex === last ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? last : activeIndex - 1,
      Home: 0,
      End: last,
    }[event.key]
    if (next === undefined) return

    event.preventDefault()
    setActiveIndex(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="-mx-5 lg:mx-0">
      <div className="[scrollbar-width:none] overflow-x-auto px-5 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
        <div
          role="tablist"
          aria-label="모집 직군"
          onKeyDown={handleKeyDown}
          className="flex w-max gap-3 lg:w-full lg:gap-5"
        >
          {roles.map(({ id, label }, index) => {
            const active = index === activeIndex

            return (
              <button
                key={id}
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                type="button"
                role="tab"
                id={`${idPrefix}-tab-${id}`}
                aria-selected={active}
                aria-controls={`${idPrefix}-panel-${id}`}
                tabIndex={active ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                className={cn(tabClassName, active ? 'bg-navy-500 text-white' : 'bg-gray-75 text-gray-575')}
              >
                <span className="absolute top-[-16%] right-[27%] hidden h-[79%] w-[89%] lg:block">
                  <Image
                    className={cn('object-cover', !active && 'opacity-50')}
                    src={ROLE_IMAGES[id]}
                    alt=""
                    fill
                    sizes="156px"
                  />
                </span>
                <span className="lg:absolute lg:inset-x-0 lg:bottom-[18%] lg:text-center">{label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {roles.map(({ id, title, summary, description, keywords, frameworks, tracks }, index) => (
        <div
          key={id}
          role="tabpanel"
          id={`${idPrefix}-panel-${id}`}
          aria-labelledby={`${idPrefix}-tab-${id}`}
          hidden={index !== activeIndex}
          className="mx-5 mt-6 flex flex-col justify-between gap-8 rounded-xl bg-blue-50 px-5 py-6 text-navy-900 lg:mx-0 lg:p-8"
        >
          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-wrap items-end gap-x-2.5">
                <h3 className="text-2xl leading-7.5 font-semibold lg:text-[26px]">{title}</h3>
                {tracks ? (
                  <p className="text-sm leading-6.5 font-medium text-gray-750 lg:text-base">
                    {tracks.map((track) => track.name).join(', ')}
                  </p>
                ) : null}
              </div>
              <p className="text-sm leading-6.5 font-bold lg:text-lg">{summary}</p>
              <p className="text-sm leading-6.5 font-medium whitespace-pre-line lg:text-lg">{description}</p>
            </div>

            {tracks ? (
              <ul className="flex flex-col gap-6">
                {tracks.map((track) => (
                  <li key={track.name} className="flex flex-col gap-2">
                    <h4 className="ms-6.75 list-item list-disc text-base leading-6.5 font-bold lg:text-lg">
                      {track.name}
                    </h4>
                    <div className="flex flex-col gap-3 px-6">
                      <p className="text-sm leading-6.5 font-medium lg:text-lg">{track.description}</p>
                      {track.frameworks ? <RoleChips label="Framework" items={track.frameworks} /> : null}
                      {track.keywords ? <RoleChips label="Keyword" items={track.keywords} hash /> : null}
                    </div>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {keywords ? <RoleChips label="Keyword" items={keywords} hash /> : null}
          {frameworks ? <RoleChips label="Framework" items={frameworks} /> : null}
        </div>
      ))}
    </div>
  )
}
