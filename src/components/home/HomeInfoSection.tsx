import Image from 'next/image'
import { useState } from 'react'

import { INFO_TAB_LABELS, type HomeInfoTab } from '@/constants/home/infoSection'
import HomeInfoTabButton from './HomeInfoTabButton'
import { HomeInfoTabContent } from './HomeInfoTabContent'

export default function HomeInfoSection() {
  const [selectedTab, setSelectedTab] = useState<HomeInfoTab>(INFO_TAB_LABELS.Plan)
  return (
    <section className="py-40 w-full bg-black w-full relative">
      <div className="max-w-[1040px] mx-auto">
        <Image src="/images/home-info-badge.svg" alt="home info badge" width={216} height={44} />
        <h1 className="text-white text-start text-[40px] font-bold leading-[60px] tracking-[-0.8px] mt-6">
          각 분야의 전문가 5명이 하나의 팀을 이뤄
          <br />
          3개월 동안 프로덕트를 제작해요.
        </h1>
        <h1 className="text-gray-200 text-start text-[24px] leading-[34px] tracking-[-0.48px] mt-4">
          PM & Planner (1명) / Designer (1명) / Native - iOS, Android, Flutter (2명) / Server (1명)
        </h1>
        <div className="mt-16 flex gap-10 w-full z-[1]">
          <div className="flex flex-col gap-3">
            {Object.keys(INFO_TAB_LABELS).map((key) => (
              <HomeInfoTabButton
                key={key}
                tab={key as HomeInfoTab}
                setTab={setSelectedTab}
                isActive={key === selectedTab}
              />
            ))}
          </div>
          <HomeInfoTabContent tab={selectedTab} />
        </div>
      </div>
    </section>
  )
}
