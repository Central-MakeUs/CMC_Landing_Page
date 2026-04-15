import { useInViewOnce } from '@/hooks/useInViewOnce'

import { STAT_SECTION_DATA } from '@/constants/home/statSection'
import { useCountUp } from '@/hooks/home/useCountUp'

const COUNT_UP_DURATION = 1500

function parseStatValue(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([^0-9]*)(\d+)([^0-9]*)$/)
  if (!match) return { prefix: '', number: 0, suffix: value }
  return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] }
}

type StatItem = (typeof STAT_SECTION_DATA)[0]

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.5)
  const { prefix, number, suffix } = parseStatValue(stat.value)
  const count = useCountUp(number, COUNT_UP_DURATION, inView)

  return (
    <div
      ref={ref}
      className={`rounded-4xl bg-gray-900 shadow-[inset_4px_8px_16px_0_rgba(255,255,255,0.45)] p-8 flex flex-col justify-between gap-4 w-full ${inView ? '[animation:fade-in-up_0.6s_ease-out_both]' : 'opacity-0'}`}
      style={inView ? { animationDelay: `${index * 0.12}s` } : undefined}
    >
      <p className="text-white text-base md:text-xl">
        {stat.title.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <p className="text-end text-primary-light-02 font-bold text-[24px] md:text-[40px] leading-[36px] md:leading-[64px] tracking-[-0.48px] md:tracking-[-0.8px]">
        {prefix}
        {count}
        {suffix}
      </p>
    </div>
  )
}

export default function HomeStatSection() {
  const { ref: headingRef, inView: headingInView } = useInViewOnce<HTMLHeadingElement>(0.6)

  return (
    <section className="py-50 w-full bg-linear-to-b via-black from-black to-gray-900 flex flex-col items-center">
      <h1
        ref={headingRef}
        className={`text-white text-center md:text-[48px] text-[24px] font-semibold md:leading-[64px] leading-[36px] tracking-[-0.48px] md:tracking-[-1.6px] mb-16 ${headingInView ? '[animation:fade-in-up_0.7s_ease-out_both]' : 'opacity-0'}`}
      >
        수익형 앱 런칭 동아리
        <br />
        CMC로 여러분을 초대합니다.
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1040px] px-4">
        {STAT_SECTION_DATA.map((stat, index) => (
          <StatCard key={stat.title} stat={stat} index={index} />
        ))}
      </div>
    </section>
  )
}
