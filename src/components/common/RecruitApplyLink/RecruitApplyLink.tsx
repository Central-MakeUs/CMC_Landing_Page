'use client'

import type { ComponentProps } from 'react'

import { RECRUIT_CTA, type RecruitPhase } from '@/constants/recruit'
import useRecruitPhase from '@/hooks/useRecruitPhase'
import { ROUTES } from '@/lib/site'

interface RecruitApplyLinkProps extends Omit<ComponentProps<'a'>, 'href'> {
  initialPhase: RecruitPhase
  labelPrefix?: string
  compactLabel?: boolean
}

export default function RecruitApplyLink({
  initialPhase,
  labelPrefix,
  compactLabel = false,
  children,
  ...props
}: RecruitApplyLinkProps) {
  const phase = useRecruitPhase(initialPhase)

  return (
    <a {...props} href={ROUTES.apply} target="_blank" rel="noopener noreferrer">
      {labelPrefix}
      {compactLabel ? RECRUIT_CTA[phase].shortLabel : RECRUIT_CTA[phase].label}
      {children}
      <span className="sr-only">(새 창)</span>
    </a>
  )
}
