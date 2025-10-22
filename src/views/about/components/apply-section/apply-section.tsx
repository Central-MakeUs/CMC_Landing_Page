import { useEffect, useState } from 'react'

import { ApplyButton, Br, Section } from '@/components'
import { AboutRecruitButton, RecruitDate, RecruitStatusEnum } from '@/constants'

import * as css from './apply-section.module.scss'

export const ApplySection = () => {
  const [recruitStatus, setRecruitStatus] = useState<RecruitStatusEnum>(RecruitStatusEnum.BEFORE_RECRUITING)

  const getCurrentRecruitStatus = (): RecruitStatusEnum => {
    const now = new Date()

    if (now < RecruitDate.startDate) {
      return RecruitStatusEnum.BEFORE_RECRUITING
    }
    if (now >= RecruitDate.startDate && now <= RecruitDate.endDate) {
      return RecruitStatusEnum.RECRUITING
    }
    return RecruitStatusEnum.AFTER_RECRUITING
  }

  useEffect(() => {
    // 컴포넌트가 마운트될 때 현재 상태 확인
    const currentStatus = getCurrentRecruitStatus()
    setRecruitStatus(currentStatus)
  }, [])

  const buttonInfo = AboutRecruitButton[recruitStatus]

  return (
    <Section>
      <Section.Head title="CMC와 함께 도전하세요" />
      <p className={css.alert}>{buttonInfo.description}</p>
      <ApplyButton className={css.button}>
        {buttonInfo.buttonText}
        <div className={css.button_effect} />
      </ApplyButton>
    </Section>
  )
}
