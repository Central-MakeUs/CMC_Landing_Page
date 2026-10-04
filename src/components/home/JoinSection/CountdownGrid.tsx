'use client'

import { APPLY_DEADLINE, APPLY_START, GENERATION, type RecruitPhase } from '@/constants/recruit'
import useNow from '@/hooks/useNow'
import useRecruitPhase from '@/hooks/useRecruitPhase'
import { getTimeLeft } from '@/utils/date'

import CountdownCard from './CountdownCard'

const pad = (value: number) => String(value).padStart(2, '0')

/*
 * 서류접수 카운트다운
 * - 접수 시작 전에는 시작까지, 접수 중에는 마감까지 남은 시간을 보여준다.
 * - 접수 마감 후에는 0일 0시 0분 0초를 유지한다.
 * - 문구는 서버가 넘긴 단계로 바로 보여주고, 숫자는 첫 렌더에서 현재 시각을 모르니 '--'로 둔다.
 */
export default function CountdownGrid({ initialPhase }: { initialPhase: RecruitPhase }) {
  const now = useNow()
  const phase = useRecruitPhase(initialPhase)
  const caption =
    phase === 'BEFORE'
      ? `${GENERATION}기 지원 시작까지`
      : phase === 'CLOSED'
        ? `${GENERATION}기 모집이 마감되었어요`
        : `${GENERATION}기 지원 마감까지`
  const timeLeft = now === null ? null : getTimeLeft(phase === 'BEFORE' ? APPLY_START : APPLY_DEADLINE, now)

  const units = [
    { label: 'DAYS', value: timeLeft?.days },
    { label: 'HOURS', value: timeLeft?.hours },
    { label: 'MIN', value: timeLeft?.minutes },
    { label: 'SEC', value: timeLeft?.seconds },
  ]

  // TODO: 모바일 카운트다운 최대 너비(max-w-130) 적용 여부 팀 논의 후 결정
  return (
    <div className="flex w-full flex-col items-center gap-4 md:max-w-223.5">
      <div className="flex w-full flex-col items-center gap-9.5">
        <p className="text-lg leading-6 font-semibold text-blue-50 md:text-2xl">{caption}</p>
        <dl className="grid w-full grid-cols-2 gap-4.5 md:grid-cols-4" aria-label={caption}>
          {units.map(({ label, value }) => (
            <CountdownCard key={label} label={label} value={value === undefined ? '--' : pad(value)} />
          ))}
        </dl>
      </div>
    </div>
  )
}
