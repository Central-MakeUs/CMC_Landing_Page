import { RECRUIT_TARGET_DATE } from '@/constants/recruit'

export type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

export function calcTimeLeft(): TimeLeft {
  const diff = RECRUIT_TARGET_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  }
}
