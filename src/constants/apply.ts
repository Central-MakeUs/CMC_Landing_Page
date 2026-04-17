/** 모집 마감 날짜 (KST) */
export const APPLY_DEADLINE = new Date('2026-04-25T00:00:00+09:00')

export const isApplyEnded = () => Date.now() >= APPLY_DEADLINE.getTime()

export const APPLY_DATA = {
  title: 'Join to CMC',
  getButtonHref: (isEnded: boolean) =>
    isEnded
      ? 'https://docs.google.com/forms/d/e/1FAIpQLSdujjhpMlmTp-T-wtREZwiymSCA7xoO0Z_J1CnaXx3edssI-Q/viewform'
      : 'https://docs.google.com/forms/d/e/1FAIpQLSdUv7yki5QZsDsElhTx-3em48Li_a89g4OWLP3jMNGm53ibWg/viewform?usp=dialog',
  countdown: {
    days: 'DAYS',
    hours: 'HOURS',
    minutes: 'MIN',
    seconds: 'SEC',
  },
}
