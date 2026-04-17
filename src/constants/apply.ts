/** 모집 마감 날짜 (KST) */
export const APPLY_DEADLINE = new Date('2025-10-29T00:00:00+09:00')

export const isApplyEnded = () => Date.now() >= APPLY_DEADLINE.getTime()

export const APPLY_DATA = {
  title: 'Join to CMC',
  getButtonHref: (isEnded: boolean) =>
    isEnded
      ? 'https://docs.google.com/forms/d/e/1FAIpQLScFd4ILrh_tHyg7N5bkc-A4uLxI9CRseSs9ziEWWSmRy48WXw/viewform?usp=header'
      : 'https://forms.gle/6uMPJyquobwUkTcu5',
  countdown: {
    days: 'DAYS',
    hours: 'HOURS',
    minutes: 'MIN',
    seconds: 'SEC',
  },
}
