// next.config.ts에서도 import하는 파일이라 '@/' 대신 상대 경로를 쓴다. ('@/'를 쓰면 빌드가 실패한다)
import { type IsoDate, toKstDate, toKstEndOfDay } from '../utils/date'

/** 모집 기수 */
export const GENERATION = 20

export const APPLY_LABEL = `${GENERATION}기 지원하기`

/**
 * 지원서(네이버 폼) 주소
 * - /apply로 들어오면 이 주소로 이동
 * - 비어 있으면 모집 안내(/recruit)로 이동
 */
// TODO: 네이버 폼 주소가 확정되면 입력
export const APPLY_FORM_URL: string | null = null

export interface RecruitmentStep {
  title: string
  start: IsoDate
  end?: IsoDate
  note?: string
}

export const APPLICATION_STEP = {
  title: '서류접수',
  start: '2026-10-12',
  end: '2026-10-13',
  note: '자정 전까지 제출',
} as const satisfies RecruitmentStep

/** 서류접수 시작: 첫날 0시 */
// TODO: 시작 시각 확인
export const APPLY_START = toKstDate(APPLICATION_STEP.start)

/** 서류접수 마감: 마지막 날 24시(다음 날 0시) */
// TODO: 마감 시각 확인
export const APPLY_DEADLINE = toKstEndOfDay(APPLICATION_STEP.end)
