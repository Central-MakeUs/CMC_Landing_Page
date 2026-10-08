/** 'YYYY-MM-DD'. 한국 시간 기준 날짜 */
export type IsoDate = `${number}-${number}-${number}`

const weekdayFormat = new Intl.DateTimeFormat('ko-KR', { weekday: 'short', timeZone: 'Asia/Seoul' })
const ordinalRules = new Intl.PluralRules('en-US', { type: 'ordinal' })
const ORDINAL_SUFFIX: Record<Intl.LDMLPluralRule, string> = {
  zero: 'th',
  one: 'st',
  two: 'nd',
  few: 'rd',
  many: 'th',
  other: 'th',
}

/** 그날 0시 (한국 시간) */
export const toKstDate = (date: IsoDate) => new Date(`${date}T00:00:00+09:00`)

/** 그날 24시, 즉 다음 날 0시 (한국 시간) */
export const toKstEndOfDay = (date: IsoDate) => new Date(toKstDate(date).getTime() + 86_400_000)

const weekday = (date: IsoDate) => weekdayFormat.format(toKstDate(date))

/** '2026-11-14' → '2026.11.14' */
export const formatDate = (date: IsoDate) => date.split('-').join('.')

/** '2026-10-12' → '2026.10.12 (월)' */
export const formatDateWithWeekday = (date: IsoDate) => `${formatDate(date)} (${weekday(date)})`

/** '2026-11-22' → '11.22' */
export const formatMonthDay = (date: IsoDate) => date.slice(5).replace('-', '.')

/** '2026-10-13' → '10.13 (화)' */
export const formatMonthDayWithWeekday = (date: IsoDate) => `${formatMonthDay(date)} (${weekday(date)})`

/** 0 → '0th Week', 1 → '1st Week', 11 → '11th Week' */
export const formatWeek = (week: number) => `${week}${ORDINAL_SUFFIX[ordinalRules.select(week)]} Week`

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
