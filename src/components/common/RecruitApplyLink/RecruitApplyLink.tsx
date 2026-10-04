'use client'

import type { ComponentProps } from 'react'

import { RECRUIT_CTA, type RecruitPhase } from '@/constants/recruit'
import useRecruitPhase from '@/hooks/useRecruitPhase'
import { ROUTES } from '@/lib/site'

interface RecruitApplyLinkProps extends Omit<ComponentProps<'a'>, 'href'> {
  initialPhase: RecruitPhase
  labelPrefix?: string
}

export default function RecruitApplyLink({ initialPhase, labelPrefix, children, ...props }: RecruitApplyLinkProps) {
  const phase = useRecruitPhase(initialPhase)

  return (
    <a {...props} href={ROUTES.apply} target="_blank" rel="noopener noreferrer">
      {labelPrefix}
      {RECRUIT_CTA[phase].label}
      {children}
      <span className="sr-only">(새 창)</span>
    </a>
  )
}
