import { useEffect, useState } from 'react'
import { calcTimeLeft, type TimeLeft } from '@/utils/time'

export function useCountdown(): TimeLeft {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return timeLeft
}
