import { SectionHeading } from '@/components/common/SectionHeading'
import { CHALLENGER_VALUES } from '@/constants/recruit'

export default function ChallengerSection() {
  return (
    <section
      data-header-theme="light"
      id="challenger"
      aria-labelledby="challenger-title"
      className="bg-white px-5 py-25 xl:px-20 xl:py-40"
    >
      <div className="mx-auto flex w-full max-w-275 flex-col gap-15 xl:gap-20">
        <SectionHeading
          id="challenger-title"
          eyebrow="CMC Challenger"
          align="center"
          title={'CMC에서는\n다음과 같은 챌린저를 찾습니다'}
        />

        <ul className="grid gap-5 md:grid-cols-3 xl:gap-10">
          {CHALLENGER_VALUES.map(({ title, description }) => (
            <li
              key={title}
              className="flex flex-col rounded-[10px] bg-linear-176/srgb from-navy-600 from-8% to-navy-700 to-94% px-5 py-4.5 text-white xl:gap-2 xl:rounded-xl xl:bg-linear-to-b/srgb xl:from-0% xl:to-100% xl:p-10"
            >
              <h3 className="text-lg leading-[38.4px] font-bold xl:text-2xl">{title}</h3>
              <p className="text-sm leading-6 whitespace-pre-line xl:text-base">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
