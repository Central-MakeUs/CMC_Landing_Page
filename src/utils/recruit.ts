import { APPLY_DEADLINE, APPLY_START, RECRUIT_CTA, type RecruitPhase } from '@/constants/recruit'

export const getRecruitPhase = (now: number): RecruitPhase => {
  if (now < APPLY_START.getTime()) return 'BEFORE'
  if (now < APPLY_DEADLINE.getTime()) return 'OPEN'
  return 'CLOSED'
}

export const getRecruitCta = (now: number) => RECRUIT_CTA[getRecruitPhase(now)]

/** 서버 컴포넌트에서만 쓴다. 정적 페이지는 HTML을 만든 순간(배포, 1시간마다 재생성)의 단계가 들어간다. */
export const getCurrentRecruitPhase = () => getRecruitPhase(Date.now())
