/** 모집 마감 날짜 (KST) */
export const APPLY_DEADLINE = new Date('2025-10-29T00:00:00+09:00')

export const isApplyEnded = () => Date.now() >= APPLY_DEADLINE.getTime()

export const APPLY_DATA = {
  title: 'Join to CMC',
  getButtonHref: (isEnded: boolean) =>
    isEnded ? 'https://forms.gle/2sqqazVFLNV7MYan7' : 'https://forms.gle/6uMPJyquobwUkTcu5',
  countdown: {
    days: 'DAYS',
    hours: 'HOURS',
    minutes: 'MIN',
    seconds: 'SEC',
  },
}
