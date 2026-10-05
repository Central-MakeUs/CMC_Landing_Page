import { SectionHeading } from '@/components/common/SectionHeading'
import { RECRUIT_FAQ } from '@/constants/recruit'

import FaqList from './FaqList'
import FaqToggleIcon from './FaqToggleIcon'

export default function RecruitFaqSection() {
  return (
    <section
      data-header-theme="light"
      id="faq"
      aria-labelledby="faq-title"
      className="bg-gray-75 px-5 py-25 xl:px-10 xl:py-30"
    >
      <div className="mx-auto flex w-full max-w-300 flex-col gap-8 xl:grid xl:grid-cols-[1fr_692px] xl:gap-6">
        <SectionHeading id="faq-title" eyebrow="Answer from CMC" title="FAQ" className="xl:gap-0" />

        <FaqList className="xl:mt-5">
          {RECRUIT_FAQ.map(({ id, question, answer }, index) => (
            <details
              key={id}
              name="recruit-faq"
              open={index === 0}
              // 페이지가 준비되기 전에 사용자가 열고 닫아도 경고하지 않는다.
              suppressHydrationWarning
              className="group details-slide border-b border-gray-125 transition-colors duration-300 open:bg-gray-110 motion-reduce:transition-none"
            >
              <summary className="flex min-h-14.5 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 xl:min-h-15.5 [&::-webkit-details-marker]:hidden">
                <h3 className="flex-1 text-base leading-8 font-medium tracking-[-0.48px] text-gray-800 xl:text-xl">
                  Q. {question}
                </h3>
                <span className="flex size-5 shrink-0 items-center justify-center">
                  <FaqToggleIcon className="text-gray-760 transition-[rotate,color] duration-300 group-open:rotate-45 group-open:text-gray-575 motion-reduce:transition-none" />
                </span>
              </summary>
              <p className="px-4 py-4 text-base leading-[25.6px] tracking-[-0.38px] text-gray-755">{answer}</p>
            </details>
          ))}
        </FaqList>
      </div>
    </section>
  )
}
