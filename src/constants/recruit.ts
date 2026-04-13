/** 현재 모집 기수 */
export const RECRUIT_GENERATION = 19

/** 모집 마감 카운트다운 타겟 날짜 (KST) */
export const RECRUIT_TARGET_DATE = new Date('2026-05-01T00:00:00+09:00')

export const JOURNEY_ROWS: { label: string; value: string }[] = [
  { label: '접수 기간', value: '2026.04.18 ~ 2026.04.24' },
  { label: '서류 전형', value: '2026.04.27' },
  { label: 'CMC 핏 인터뷰', value: '2026.05.02 ~ 2026.05.03' },
  { label: 'CMC 합류 안내', value: '2026.05.05' },
]

export const SESSION_ROWS: { label: string; value: string }[] = [
  { label: 'OT', value: '2026.05.09' },
  { label: '해커톤', value: '2026.05.16 ~ 2026.05.17' },
  { label: '네트워킹 데이', value: '2026.05.23' },
  { label: '최종 팀 빌딩', value: '2026.06.20' },
  { label: '1차 모각작', value: '2026.07.18' },
  { label: '2차 모각작', value: '2026.08.08' },
  { label: '런칭데이', value: '2026.08.22' },
  { label: '데모데이', value: '2026.08.29' },
  { label: '종무식', value: '2026.09.05' },
]
