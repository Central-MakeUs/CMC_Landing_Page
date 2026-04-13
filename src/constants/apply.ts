/** 모집 마감 날짜 (KST) */
export const APPLY_DEADLINE = new Date('2026-05-01T00:00:00+09:00')

export const APPLY_DATA = {
  title: 'Join to CMC',
  getButtonHref: (isEnded: boolean) =>
    isEnded ? 'https://forms.gle/2sqqazVFLNV7MYan7' : 'https://forms.gle/HL54afqxkvTN5QiB8',
  countdown: {
    days: 'DAYS',
    hours: 'HOURS',
    minutes: 'MIN',
    seconds: 'SEC',
  },
}
