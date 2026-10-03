import { SectionHeading } from '@/components/common/SectionHeading'
import { SESSION_SCHEDULE } from '@/constants/recruit'
import { cn } from '@/utils/cn'
import { formatDate, formatMonthDay, formatWeek } from '@/utils/date'

export default function SessionScheduleSection() {
  return (
    <section
      data-header-theme="light"
      id="schedule"
      aria-labelledby="schedule-title"
      className="bg-white px-5 py-25 xl:px-10 xl:py-30"
    >
      <div className="mx-auto flex w-full max-w-300 flex-col gap-8 xl:grid xl:grid-cols-[1fr_692px] xl:gap-6">
        <SectionHeading id="schedule-title" eyebrow="Calendar" title="정규 세션 일정" className="xl:gap-0" />

        <ol className="flex flex-col gap-4 md:grid md:grid-flow-col md:grid-cols-2 md:grid-rows-6 md:gap-x-2 md:gap-y-8 xl:mt-5">
          {SESSION_SCHEDULE.map(({ week, title, start, end }, index) => (
            <li key={start} className="flex flex-col gap-1">
              <p
                className={cn(
                  'text-base leading-8 font-medium tracking-[-0.48px] xl:text-xl',
                  index === 0 ? 'text-blue-600' : 'text-gray-950',
                )}
              >
                {formatWeek(week)} / {title}
              </p>
              <p className="text-[13px] leading-[25.6px] tracking-[-0.38px] text-gray-350 xl:text-base">
                <time dateTime={start}>{formatDate(start)}</time>
                {end ? (
                  <>
                    {' - '}
                    <time dateTime={end}>{formatMonthDay(end)}</time>
                  </>
                ) : null}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
