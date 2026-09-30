'use client'

import { APPLY_DEADLINE, APPLY_START } from '@/constants/recruit'
import useNow from '@/hooks/useNow'
import { getTimeLeft } from '@/utils/date'

import CountdownCard from './CountdownCard'

const pad = (value: number) => String(value).padStart(2, '0')

/*
 * 서류접수 카운트다운
 * - 접수 시작 전에는 시작까지, 그 뒤로는 마감까지 남은 시간을 보여준다.
 * - 첫 렌더에서는 현재 시각을 모르니 '--'로 둔다.
 * TODO: 마감 후 화면은 시안이 나오면 반영
 */
export default function CountdownGrid() {
  const now = useNow()
  const isBeforeStart = now !== null && now < APPLY_START.getTime()
  const caption = isBeforeStart ? '서류접수 시작까지' : '서류접수 마감까지'
  const timeLeft = now === null ? null : getTimeLeft(isBeforeStart ? APPLY_START : APPLY_DEADLINE, now)

  const units = [
    { label: 'DAYS', value: timeLeft?.days },
    { label: 'HOURS', value: timeLeft?.hours },
    { label: 'MIN', value: timeLeft?.minutes },
    { label: 'SEC', value: timeLeft?.seconds },
  ]

  // TODO: 모바일 카운트다운 최대 너비(max-w-130) 적용 여부 팀 논의 후 결정
  return (
    <div className="flex w-full flex-col items-center gap-4 md:max-w-223.5">
      {/* TODO: 시안에 없는 안내 문구라 임시로 넣었다. min-h는 문구가 늦게 들어와도 아래가 밀리지 않게 한다. */}
      <p className="min-h-6 text-base leading-6 font-semibold text-gray-200">{now === null ? null : caption}</p>
      <dl className="grid w-full grid-cols-2 gap-4.5 md:grid-cols-4" aria-label={`${caption} 남은 시간`}>
        {units.map(({ label, value }) => (
          <CountdownCard key={label} label={label} value={value === undefined ? '--' : pad(value)} />
        ))}
      </dl>
    </div>
  )
}
