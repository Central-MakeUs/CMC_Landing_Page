import { DoubleChevronRightIcon } from '@/components/common/DoubleChevronRightIcon'
import { RecruitApplyLink } from '@/components/common/RecruitApplyLink'
import { getCurrentRecruitPhase } from '@/utils/recruit'

import CountdownGrid from './CountdownGrid'

export default function JoinSection() {
  const recruitPhase = getCurrentRecruitPhase()

  return (
    <section
      data-header-theme="dark"
      id="join"
      aria-labelledby="join-title"
      className="bg-[radial-gradient(ellipse_50%_50%_at_center,rgb(255_255_255/2%)_0%,transparent_100%),linear-gradient(180deg,var(--navy-800)_0%,var(--navy-975)_100%)] px-5 py-25 md:px-10 xl:px-30 xl:py-40"
    >
      <div className="mx-auto flex w-full max-w-300 flex-col items-center gap-20">
        <div className="flex flex-col items-center gap-8">
          <h2
            id="join-title"
            className="font-display text-2xl leading-[33.6px] font-semibold whitespace-nowrap text-white md:text-[32px]"
          >
            JOIN TO CMC
          </h2>

          <RecruitApplyLink
            initialPhase={recruitPhase}
            className="flex items-center justify-center gap-4 rounded-full bg-white py-3.5 pr-6 pl-7.5 text-base leading-[22.4px] font-semibold tracking-[-0.336px] text-navy-975 transition-opacity hover:opacity-90 focus-visible:opacity-90 md:py-4 md:text-lg"
          >
            <DoubleChevronRightIcon />
          </RecruitApplyLink>
        </div>

        <CountdownGrid initialPhase={recruitPhase} />
      </div>
    </section>
  )
}
