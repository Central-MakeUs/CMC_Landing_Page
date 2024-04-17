import { useEffect, useState } from 'react'

import * as css from './countdown-timer.module.scss'

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2024-04-24T00:00:00') // 목표 날짜 설정

    const updateTimer = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

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

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time
  }

  return (
    <p className={css.time}>
      {`${formatTime(timeLeft.hours)} : ${formatTime(timeLeft.minutes)} : ${formatTime(timeLeft.seconds)}`}
    </p>
  )
}
