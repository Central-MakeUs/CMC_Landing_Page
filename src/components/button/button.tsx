import clsx from 'clsx'
import { AnchorHTMLAttributes, useEffect, useState } from 'react'

import { RecruitDate, RecruitStatus, RecruitStatusEnum } from '@/constants'

import * as css from './button.module.scss'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  availableDisabled?: boolean
}

export const Button = ({ className, availableDisabled = false, children, ...props }: Props) => {
  const [recruitStatus, setRecruitStatus] = useState<RecruitStatusEnum>(RecruitStatusEnum.BEFORE_RECRUITING)

  useEffect(() => {
    const updateRecruitStatus = () => {
      const { startDate, endDate } = RecruitDate
      const now = new Date()

      if (now.getTime() < startDate.getTime()) {
        setRecruitStatus(RecruitStatusEnum.BEFORE_RECRUITING)
      } else if (now.getTime() <= endDate.getTime()) {
        setRecruitStatus(RecruitStatusEnum.RECRUITING)
      } else {
        setRecruitStatus(RecruitStatusEnum.AFTER_RECRUITING)
      }
    }

    updateRecruitStatus()
  }, [])

  return (
    <a
      href={RecruitStatus[recruitStatus].link}
      target="_blank"
      rel="noreferrer"
      className={clsx(
        css.button,
        {
          [css.button_disabled]: availableDisabled && recruitStatus === RecruitStatusEnum.AFTER_RECRUITING,
        },
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
