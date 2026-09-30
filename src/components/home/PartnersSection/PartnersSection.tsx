import gridge from '@/assets/images/partner-gridge.webp'
import softSquared from '@/assets/images/partner-soft-squared.webp'
import computerScienceSenior from '@/assets/images/partner-computer-science-senior.webp'
import neordinary from '@/assets/images/partner-neordinary.webp'
import { SectionHeading } from '@/components/common/SectionHeading'

import PartnerCard from './PartnerCard'

const PARTNERS = [
  { name: 'GRIDGE', image: gridge },
  { name: 'Soft Squared', image: softSquared },
  { name: '컴공선배', image: computerScienceSenior },
  { name: 'Ne(o)rdinary', image: neordinary },
]

export default function PartnersSection() {
  return (
    <section
      data-header-theme="light"
      id="partners"
      aria-labelledby="partners-title"
      className="bg-gray-50 px-5 py-25 xl:px-20 xl:py-40"
    >
      <div className="mx-auto flex w-full max-w-300 flex-col items-start gap-12">
        <SectionHeading
          id="partners-title"
          eyebrow="CMC Partners"
          className="gap-3 lg:gap-4"
          titleClassName="tracking-[-0.02em] text-gray-925 lg:leading-[51.2px]"
          title="CMC의 여정에 함께하는 파트너"
        />

        {/* 2열 → md: 4열(140px) → lg: 4열(220px) */}
        <ul className="grid w-full grid-cols-[repeat(2,max-content)] justify-center gap-5 md:grid-cols-[repeat(4,max-content)] lg:gap-6.5">
          {PARTNERS.map((partner) => (
            <PartnerCard key={partner.name} {...partner} />
          ))}
        </ul>
      </div>
    </section>
  )
}
