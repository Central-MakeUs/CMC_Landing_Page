import Image from 'next/image'

import { INFO_TAB_LABELS, type HomeInfoTab } from '@/constants/home/infoSection'
import { useHomeInfoAnimation } from '@/hooks/home/useHomeInfoAnimation'
import HomeInfoTabButton from './HomeInfoTabButton'
import { HomeInfoTabContent } from './HomeInfoTabContent'

const TAB_KEYS = Object.keys(INFO_TAB_LABELS) as HomeInfoTab[]

export default function HomeInfoSection({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>
}) {
  const { sectionRef, activeTab, scrollToTab } = useHomeInfoAnimation(scrollContainerRef)

  return (
    <section
      ref={sectionRef}
      className="md:h-[400vh] w-full bg-linear-to-br from-black via-black to-gray-900 py-header md:px-0 px-5  "
    >
      <div className="md:sticky md:top-0 md:h-[100dvh] w-full flex items-center md:py-40 py-10">
        <div className="max-w-[1040px] w-full mx-auto">
          <Image src="/images/home-info-badge.svg" alt="home info badge" width={216} height={44} />
          <h1 className="text-white text-start md:text-[40px] text-[24px] font-bold md:leading-[60px] leading-[36px] tracking-[-0.48px] md:tracking-[-0.8px] mt-4">
            각 분야의 전문가 5명이
            <br className="block md:hidden" /> 하나의 팀을 이뤄 <br />
            3개월 동안 프로덕트를 제작해요.
          </h1>
          <h1 className="text-gray-200 text-start md:text-[24px] text-[16px] md:leading-[34px] leading-[24px] md:tracking-[-0.48px] tracking-[-0.32px] mt-2">
            PM (1명) / Designer (1명) /<br className="md:hidden block" /> Native - iOS, Android, Flutter (2명) / Server
            (1명)
          </h1>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 w-full mt-10">
            <div className="flex flex-row overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-2 md:flex-col md:gap-3 md:shrink-0">
              {TAB_KEYS.map((key) => (
                <HomeInfoTabButton key={key} tab={key} setTab={scrollToTab} isActive={key === activeTab} />
              ))}
            </div>

            <div className="flex-1 md:w-auto md:min-w-0">
              <div key={activeTab} className="flex w-full h-full animate-[tab-fade-in_0.25s_ease-out_both]">
                <HomeInfoTabContent tab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
