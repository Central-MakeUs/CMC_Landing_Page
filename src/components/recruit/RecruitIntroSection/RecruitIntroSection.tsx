import Image from 'next/image'

import recruitBg from '@/assets/images/recruit-bg.webp'
import { SectionHeading } from '@/components/common/SectionHeading'

export default function RecruitIntroSection() {
  // TODO: 브레이크 포인트 검토 (md:pt-40은 헤더 60px에 가리는 만큼 늘린 값)
  return (
    <section
      data-header-theme="dark"
      aria-labelledby="recruit-title"
      className="relative isolate flex items-center justify-center overflow-hidden bg-linear-to-b/srgb from-blue-400 to-blue-300 px-5 py-25 text-center md:pt-40 lg:py-50"
    >
      {/* 이미지에 30% 투명도가 들어 있어서 그라디언트 위에 그대로 겹친다. */}
      <Image src={recruitBg} alt="" fill sizes="100vw" fetchPriority="high" className="-z-10 object-cover" />
      <div className="flex flex-col items-center gap-1.5 lg:gap-2.5">
        <SectionHeading
          as="h1"
          id="recruit-title"
          align="center"
          titleClassName="leading-7"
          title={'아이디어를 실제 서비스로 만드는\n여정에 함께하세요'}
        />
        <p className="text-sm leading-6 font-medium text-gray-750 lg:text-2xl lg:leading-[33.6px]">
          3개월 동안 팀과 함께 수익형 앱의 가능성을 검증하고 <br className="lg:hidden" />
          실제 출시까지 완주해보세요
        </p>
      </div>
    </section>
  )
}
