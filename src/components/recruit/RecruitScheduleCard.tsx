import Link from 'next/link'

import { JOURNEY_ROWS, SESSION_ROWS } from '@/constants/recruit/scheduleSection'
import { cn } from '@/utils/cn'

/** Figma 3266:3752 / Graphic/gradient-symbol */
const CTA_GRADIENT = 'linear-gradient(163deg, #c1caff 0%, #6b81ff 100%)'

function ScheduleRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full flex-nowrap items-center justify-between gap-x-4 border-b border-primary-light-01 py-[calc(var(--rw,1px)*18)]">
      <span className="shrink-0 font-semibold tracking-[-0.02em] text-gray-600 text-[calc(var(--rw,1px)*30)] leading-[calc(var(--rw,1px)*40)]">
        {label}
      </span>
      <span className="shrink-0 text-right font-semibold tracking-[-0.02em] text-gray-900 whitespace-nowrap text-[calc(var(--rw,1px)*30)] leading-[calc(var(--rw,1px)*40)]">
        {value}
      </span>
    </div>
  )
}

function RecruitApplyCta({ className }: { className?: string }) {
  return (
    <Link
      href="/#apply"
      className={cn(
        'inline-flex items-center justify-center gap-[calc(var(--rw,1px)*20)] rounded-[99px]',
        'px-[calc(var(--rw,1px)*32)] py-[calc(var(--rw,1px)*16)]',
        'text-center font-semibold text-white tracking-[-0.02em]',
        'text-[calc(var(--rw,1px)*24)] leading-[calc(var(--rw,1px)*34)]',
        className,
      )}
      style={{ backgroundImage: CTA_GRADIENT }}
    >
      CMC 19기 지원하러 가기
      <span className="relative shrink-0 size-[calc(var(--rw,1px)*32)]" aria-hidden>
        <svg
          className="absolute left-[calc(var(--rw,1px)*2)] top-[calc(var(--rw,1px)*5)] h-[calc(var(--rw,1px)*18)] w-[calc(var(--rw,1px)*28)]"
          viewBox="0 0 28 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9h26M18 1l8 8-8 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  )
}

type RecruitScheduleCardProps = {
  className?: string
}

/** Figma 3266:3784 — glass schedule card */
export default function RecruitScheduleCard({ className }: RecruitScheduleCardProps) {
  return (
    <section
      className={cn(
        'flex w-full max-w-[calc(var(--rw,1px)*1000)] flex-col',
        'gap-[calc(var(--rw,1px)*120)] rounded-[calc(var(--rw,1px)*40)]',
        'px-[calc(var(--rw,1px)*100)] py-[calc(var(--rw,1px)*160)]',
        'bg-white/60 backdrop-blur-[18px]',
        className,
      )}
    >
      <div className="flex w-full flex-col items-center gap-5">
        <h2 className="w-full text-center font-bold tracking-[-0.02em] text-primary-light-05 text-[calc(var(--rw,1px)*40)] leading-[calc(var(--rw,1px)*50)]">
          CMC 합류 여정
        </h2>
        <div className="flex w-full flex-col">
          {JOURNEY_ROWS.map((row) => (
            <ScheduleRow key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
        <RecruitApplyCta />
      </div>

      <div className="flex w-full flex-col items-center gap-5">
        <h2 className="w-full text-center font-bold tracking-[-0.02em] text-primary-light-05 text-[calc(var(--rw,1px)*40)] leading-[calc(var(--rw,1px)*50)]">
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
