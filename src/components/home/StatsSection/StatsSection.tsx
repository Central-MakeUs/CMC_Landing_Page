import { STATS } from '@/constants/stats'
import { cn } from '@/utils/cn'

const mutedTextClassName = 'text-sm leading-[25.6px] tracking-[-0.384px] text-gray-300 lg:text-base'

// 칸 사이 세로 구분선
const dividerClassName =
  'md:before:absolute md:before:top-1/2 md:before:left-0 md:before:hidden md:before:h-30 md:before:w-0.5 md:before:-translate-y-1/2 md:before:bg-[radial-gradient(70.71%_70.71%_at_50%_50%,var(--gray-700)_0%,var(--gray-800)_100%)] md:even:before:block lg:not-first:before:block'

export default function StatsSection() {
  return (
    <section
      data-header-theme="dark"
      id="stats"
      aria-labelledby="stats-title"
      className="bg-navy-975 px-5 py-25 text-white lg:py-50"
    >
      <div className="mx-auto flex w-full max-w-300 flex-col items-center gap-8">
        <h2
          id="stats-title"
          className="text-center text-xl leading-8 font-bold tracking-[0.5px] lg:text-[32px] lg:leading-[50.4px]"
        >
          수많은 아이디어를 출시하며 만들어온
          <br className="lg:hidden" /> CMC의 기록
        </h2>

        <div className="flex w-full flex-col gap-10 lg:gap-15">
          <dl className="grid md:grid-cols-2 lg:grid-cols-4">
            {STATS.map(({ label, value, unit }) => (
              <div
                key={label}
                className={cn(
                  'relative flex flex-col items-start gap-2 px-6 py-4.5 lg:gap-4 lg:px-8 lg:py-10 xl:px-15',
                  dividerClassName,
                )}
              >
                <dt className={mutedTextClassName}>{label}</dt>
                <dd className="flex items-center gap-1 font-numeric text-white">
                  <strong className="text-[52px] leading-18 font-extrabold lg:text-[60px]">{value}</strong>
                  <span className="text-sm leading-[19.6px] font-semibold">{unit}</span>
                </dd>
              </div>
            ))}
          </dl>

          <p className={cn('text-center', mutedTextClassName)}>CMC는 수료 이후 외주 연계를 지원합니다.</p>
        </div>
      </div>
    </section>
  )
}
