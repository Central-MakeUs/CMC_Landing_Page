import { RECRUIT_COUNTDOWN_PREVIEW } from '@/constants/recruit'

import CountdownCard from './CountdownCard'

// TODO: 모집 마감 일시가 확정되면 1초마다 남은 시간을 계산하는 클라이언트 컴포넌트로 교체
export default function CountdownGrid() {
  // TODO: 모바일 카운트다운 최대 너비(max-w-130) 적용 여부 팀 논의 후 결정
  return (
    <dl className="grid w-full grid-cols-2 gap-4.5 md:max-w-223.5 md:grid-cols-4" aria-label="모집 마감까지 남은 시간">
      {RECRUIT_COUNTDOWN_PREVIEW.map(({ label, value }) => (
        <CountdownCard key={label} label={label} value={value} />
      ))}
    </dl>
  )
}
