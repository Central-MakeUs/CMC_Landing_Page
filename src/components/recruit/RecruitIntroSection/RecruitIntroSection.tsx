import { SectionHeading } from '@/components/common/SectionHeading'

export default function RecruitIntroSection() {
  // TODO: md:pt-30은 헤더(60px)에 가리는 만큼 임시로 늘린 값. 태블릿 breakpoint를 정할 때 같이 조정
  return (
    <section
      data-header-theme="dark"
      aria-labelledby="recruit-title"
      className="flex items-center justify-center bg-linear-to-b/srgb from-blue-400 to-blue-300 px-5 py-25 text-center md:pt-40 lg:py-50"
    >
      <div className="flex flex-col items-center gap-1.5 lg:gap-2.5">
        <SectionHeading
          as="h1"
          id="recruit-title"
          align="center"
          titleClassName="leading-7"
          title={'아이디어를 실제 서비스로 만드는\n여정에 함께하세요'}
        />
        <p className="text-sm leading-6 font-medium text-gray-750 lg:text-2xl lg:leading-[33.6px]">
          3개월 동안 팀과 함께 수익형 앱의 가능성을 검증하고
          <br className="lg:hidden" />
          실제 출시까지 완주해보세요
        </p>
      </div>
    </section>
  )
}
