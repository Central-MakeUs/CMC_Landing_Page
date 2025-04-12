import { StaticImage } from 'gatsby-plugin-image'
import { forwardRef, useEffect, useState } from 'react'

import { ApplyButton, Br } from '@/components'
import { RecruitDate, RecruitMent, RecruitStatusEnum } from '@/constants'

import * as css from './recruit-card.module.scss'

export const RecruitCard = forwardRef<HTMLDivElement>((props, ref) => {
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
    <div className={css.container}>
      <div className={css.card}>
        <StaticImage src="./images/card.png" alt="card" className={css.card_img} />
        <div className={css.card_text}>
          <h2 className={css.card_h}>
            <span>{recruitStatus === 'Recruiting' && '🔈'}CMC 17th </span>
            {RecruitMent[recruitStatus].title}
          </h2>
          <p className={css.card_p}>{RecruitMent[recruitStatus].description}</p>
        </div>
      </div>

      <ApplyButton className={css.button}>
        {RecruitMent[recruitStatus].buttonText}
        <StaticImage src="./images/button-sign.png" alt="click" className={css.button_icon} />
      </ApplyButton>
    </div>
  )
})
