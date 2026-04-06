import Link from 'next/link'

import { JOURNEY_ROWS, SESSION_ROWS } from '@/constants/recruit/scheduleSection'
import { cn } from '@/utils/cn'
import Button2 from '@/components/common/Button2'

function ScheduleRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full flex-nowrap items-center justify-between gap-x-4 border-b border-primary-light-01 py-[clamp(0px,calc(var(--rw,1px)*18),18px)]">
      <span className="shrink-0 font-semibold tracking-[-0.02em] text-gray-600 text-[clamp(0px,calc(var(--rw,1px)*30),30px)] leading-[clamp(0px,calc(var(--rw,1px)*40),40px)]">
        {label}
      </span>
      <span className="shrink-0 text-right font-semibold tracking-[-0.02em] text-gray-900 whitespace-nowrap text-[clamp(0px,calc(var(--rw,1px)*30),30px)] leading-[clamp(0px,calc(var(--rw,1px)*40),40px)]">
        {value}
      </span>
    </div>
  )
}

type RecruitScheduleCardProps = {
  className?: string
}

export default function RecruitScheduleCard({ className }: RecruitScheduleCardProps) {
  return (
    <section
      className={cn(
        'flex w-full max-w-[clamp(0px,calc(var(--rw,1px)*1000),1000px)] flex-col',
        'gap-[clamp(0px,calc(var(--rw,1px)*120),120px)] rounded-[clamp(0px,calc(var(--rw,1px)*40),40px)]',
        'px-[clamp(0px,calc(var(--rw,1px)*100),100px)] py-[clamp(0px,calc(var(--rw,1px)*160),160px)]',
        'bg-white/60 backdrop-blur-[18px]',
        className,
      )}
    >
      <div className="flex w-full flex-col items-center gap-5">
        <h2 className="w-full text-center font-bold tracking-[-0.02em] text-primary-light-05 text-[clamp(0px,calc(var(--rw,1px)*40),40px)] leading-[clamp(0px,calc(var(--rw,1px)*50),50px)]">
          CMC 합류 여정
        </h2>
        <div className="flex w-full flex-col">
          {JOURNEY_ROWS.map((row) => (
            <ScheduleRow key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
        <Link href="/#apply">
          <Button2
            color="blue"
            className="gap-[clamp(0px,calc(var(--rw,1px)*20),20px)] px-[clamp(0px,calc(var(--rw,1px)*32),32px)] py-[clamp(0px,calc(var(--rw,1px)*16),16px)] text-[clamp(0px,calc(var(--rw,1px)*24),24px)]"
          >
            CMC 19기 지원하러 가기
          </Button2>
        </Link>
      </div>

      <div className="flex w-full flex-col items-center gap-5">
        <h2 className="w-full text-center font-bold tracking-[-0.02em] text-primary-light-05 text-[clamp(0px,calc(var(--rw,1px)*40),40px)] leading-[clamp(0px,calc(var(--rw,1px)*50),50px)]">
          CMC 정기 세션
        </h2>
        <div className="flex w-full flex-col">
          {SESSION_ROWS.map((row) => (
            <ScheduleRow key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
      </div>
    </section>
  )
}
