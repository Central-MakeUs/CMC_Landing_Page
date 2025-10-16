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
  const [daysLeft, setDaysLeft] = useState<number | null>(null)

  useEffect(() => {
    const { startDate, endDate } = RecruitDate
    const DAY_MS = 24 * 60 * 60 * 1000

    const updateTimer = () => {
      const now = new Date()
      let difference = 0

      if (now.getTime() < startDate.getTime()) {
        const msToStart = startDate.getTime() - now.getTime()

        // D-2 이상 남았을 때: "D-N" 표기
        if (msToStart >= DAY_MS) {
          setRecruitStatus(RecruitStatusEnum.BEFORE_RECRUITING)
          setDaysLeft(Math.ceil(msToStart / DAY_MS))
          setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
          return
        }

        // D-1 이내: 시:분:초 카운트다운 (start까지)
        setRecruitStatus(RecruitStatusEnum.BEFORE_RECRUITING)
        setDaysLeft(null)
        difference = msToStart
      } else if (now.getTime() <= endDate.getTime()) {
        // 모집 중: 마감(endDate)까지 시:분:초 카운트다운
        difference = endDate.getTime() - now.getTime()
        setRecruitStatus(RecruitStatusEnum.RECRUITING)
        setDaysLeft(null)
      } else {
        // 모집 종료
        difference = 0
        setRecruitStatus(RecruitStatusEnum.AFTER_RECRUITING)
        setDaysLeft(null)
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
        {daysLeft !== null
          ? `D-${daysLeft}`
          : `${formatTime(timeLeft.hours)} : ${formatTime(timeLeft.minutes)} : ${formatTime(timeLeft.seconds)}`}
      </p>
      <ApplyButton href={RecruitStatus[recruitStatus].link} className={css.apply_btn}>
        {RecruitStatus[recruitStatus].buttonText}
      </ApplyButton>
    </div>
  )
}
