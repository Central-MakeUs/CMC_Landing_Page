import { SectionHeading } from '@/components/common/SectionHeading'
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
        <SectionHeading
          id="journey-title"
          eyebrow="Why CMC"
          titleClassName="lg:leading-13.5"
          title={
            <>
              만들고, 검증하고, 출시하는
              <br />
              CMC의 여정
            </>
          }
        />

        <JourneyTabs journeys={JOURNEYS} />
      </div>
    </section>
  )
}
