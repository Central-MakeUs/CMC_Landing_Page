import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { JOURNEYS } from '@/constants/journeys'

import JourneyTabs from './JourneyTabs'

export default function JourneySection() {
  return (
    <section
      data-header-theme="light"
      id="journey"
      aria-labelledby="journey-title"
      className="bg-white px-5 py-25 xl:py-30"
    >
      <div className="mx-auto flex w-full max-w-300 flex-col items-start">
        <SectionEyebrow>Why CMC</SectionEyebrow>

        <h2
          id="journey-title"
          className="pt-2 text-xl leading-8 font-bold text-gray-950 lg:text-[32px] lg:leading-13.5"
        >
          만들고, 검증하고, 출시하는
          <br />
          CMC의 여정
        </h2>

        <JourneyTabs journeys={JOURNEYS} />
      </div>
    </section>
  )
}
