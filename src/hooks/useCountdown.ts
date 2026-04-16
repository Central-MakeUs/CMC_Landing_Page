import { useEffect, useState } from 'react'
import { calcTimeLeft, type TimeLeft } from '@/utils/time'
import { isApplyEnded } from '@/constants/apply'

export function useCountdown(): TimeLeft & { isEnded: boolean } {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft)

  useEffect(() => {
    if (isApplyEnded()) return

    const id = setInterval(() => {
      const next = calcTimeLeft()
      setTimeLeft(next)
      if (next.days === 0 && next.hours === 0 && next.minutes === 0 && next.seconds === 0) {
        clearInterval(id)
      }
    }, 1000)

    return () => clearInterval(id)
  }, [])

  const isEnded = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

  return { ...timeLeft, isEnded }
}
