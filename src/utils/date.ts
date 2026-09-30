/** 'YYYY-MM-DD'. 한국 시간 기준 날짜 */
export type IsoDate = `${number}-${number}-${number}`

/** 그날 0시 (한국 시간) */
export const toKstDate = (date: IsoDate) => new Date(`${date}T00:00:00+09:00`)

/** 그날 24시, 즉 다음 날 0시 (한국 시간) */
export const toKstEndOfDay = (date: IsoDate) => new Date(toKstDate(date).getTime() + 86_400_000)

export interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

/** deadline까지 남은 시간. 지나면 모두 0 */
export const getTimeLeft = (deadline: Date, now: number): TimeLeft => {
  // 내림하면 마감 1초 전에 이미 0이 된다.
  const total = Math.max(0, Math.ceil((deadline.getTime() - now) / 1000))

  return {
    days: Math.floor(total / 86_400),
    hours: Math.floor(total / 3_600) % 24,
    minutes: Math.floor(total / 60) % 60,
    seconds: total % 60,
  }
}
