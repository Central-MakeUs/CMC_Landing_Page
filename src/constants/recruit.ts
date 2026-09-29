/** 모집 기수 */
export const GENERATION = 20

export const APPLY_LABEL = `${GENERATION}기 지원하기`

// TODO: 모집 마감 일시가 확정되면 실제 남은 시간 계산으로 교체 (지금은 고정된 미리보기 값)
export const RECRUIT_COUNTDOWN_PREVIEW = [
  { label: 'DAYS', value: '12' },
  { label: 'HOURS', value: '04' },
  { label: 'MIN', value: '32' },
  { label: 'SEC', value: '01' },
] as const
