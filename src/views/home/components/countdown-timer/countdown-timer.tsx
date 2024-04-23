import clsx from 'clsx'
import { useCallback, useEffect, useState } from 'react'

import { ApplyButton } from '@/components'
import { RecruitDate, RecruitStatus, RecruitStatusEnum } from '@/constants'

import * as css from './countdown-timer.module.scss'

export const CountdownTimer = () => {
  const [recruitStatus, setRecruitStatus] = useState<RecruitStatusEnum>(RecruitStatusEnum.BEFORE_RECRUITING)
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const { startDate, endDate } = RecruitDate

    const updateTimer = () => {
      const now = new Date()
      let difference = 0

      if (now.getTime() < startDate.getTime()) {
        difference = startDate.getTime() - now.getTime()
        setRecruitStatus(RecruitStatusEnum.BEFORE_RECRUITING)
      } else if (now.getTime() <= endDate.getTime()) {
        difference = endDate.getTime() - now.getTime()
        setRecruitStatus(RecruitStatusEnum.RECRUITING)
      } else {
        difference = 0
        setRecruitStatus(RecruitStatusEnum.AFTER_RECRUITING)
      }

      let timeLeft = { hours: 0, minutes: 0, seconds: 0 }

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference / (1000 * 60)) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        timeLeft = { hours, minutes, seconds }
      }

      setTimeLeft(timeLeft)
    }

    // 타이머 초기 업데이트
    updateTimer()

    // 1초마다 타이머 업데이트
    const intervalId = setInterval(updateTimer, 1000)

    return () => clearInterval(intervalId)
  }, [])

  const formatTime = useCallback((time: number) => {
    return time < 10 ? `0${time}` : time
  }, [])

  return (
    <div className={css.timer}>
      <p className={css.timer_title}>{RecruitStatus[recruitStatus].title}</p>
      <p
        className={clsx(css.timer_time, {
          [css.timer_time_inactive]: recruitStatus === RecruitStatusEnum.AFTER_RECRUITING,
        })}
      >
        {`${formatTime(timeLeft.hours)} : ${formatTime(timeLeft.minutes)} : ${formatTime(timeLeft.seconds)}`}
      </p>
      <ApplyButton href={RecruitStatus[recruitStatus].link}>{RecruitStatus[recruitStatus].buttonText}</ApplyButton>
    </div>
  )
}
