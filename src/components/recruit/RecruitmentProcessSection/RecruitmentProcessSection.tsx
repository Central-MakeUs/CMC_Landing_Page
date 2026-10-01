import { SectionHeading } from '@/components/common/SectionHeading'
import { RECRUITMENT_STEPS } from '@/constants/recruit'
import { formatDateWithWeekday, formatMonthDayWithWeekday } from '@/utils/date'

export default function RecruitmentProcessSection() {
  return (
    <section
      data-header-theme="light"
      id="process"
      aria-labelledby="process-title"
      className="bg-white px-5 py-25 xl:px-10 xl:py-30"
    >
      <div className="mx-auto flex w-full max-w-300 flex-col gap-8 xl:grid xl:grid-cols-[1fr_692px] xl:gap-6">
        <SectionHeading id="process-title" eyebrow="Recruitment Process" title="모집 일정" className="xl:gap-0" />

        <ol className="grid grid-cols-2 gap-2 md:grid-cols-4 xl:mt-5">
          {RECRUITMENT_STEPS.map(({ title, start, end, note }) => (
            <li key={title} className="flex flex-col rounded-lg bg-gray-75 p-3.5 text-gray-800 xl:p-4">
              <h3 className="border-b border-gray-150 pb-2.5 text-lg leading-8 font-medium tracking-[-0.48px] xl:text-xl">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-[22.4px] font-semibold tracking-[-0.34px] xl:text-base">
                <time dateTime={start} className="block">
                  {formatDateWithWeekday(start)}
                </time>
                {end ? (
                  <time dateTime={end} className="block">
                    -{formatMonthDayWithWeekday(end)}
                  </time>
                ) : null}
              </p>
              {note ? (
                <p className="mt-0.75 text-xs leading-[19.2px] tracking-[-0.29px] text-gray-350 xl:text-sm">({note})</p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
