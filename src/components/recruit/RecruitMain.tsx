import Image from 'next/image'

import RecruitScheduleCard from './RecruitScheduleCard'
import RecruitTitle from './RecruitTitle'

export default function RecruitMain() {
  return (
    <main className="relative w-full overflow-hidden bg-[linear-gradient(163deg,var(--primary-light-01)_-0.51%,var(--primary-light-03)_95.14%)] [--rw:calc(100vw/1440)]">
      {/* Desktop background */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <Image
          src="/images/recruit-bg.webp"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-top"
        />
      </div>
      {/* Mobile background */}
      <div className="pointer-events-none absolute inset-0 -top-16 block md:hidden">
        <Image
          src="/images/recruit-bg-mobile.webp"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-top"
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-[1920px] flex-col md:px-[calc(var(--rw)*200)]">
        <div className="z-20 pt-[157px] text-center md:pt-[calc(var(--rw)*240)] [animation:fade-in-up_0.7s_ease-out_both]">
          <RecruitTitle />
        </div>

        <div className="z-10 flex justify-center px-5 pt-5 pb-[80px] md:px-0 md:pt-[132px] md:pb-[160px] [animation:fade-in-up_0.7s_ease-out_0.4s_both]">
          <RecruitScheduleCard />
        </div>
      </div>
    </main>
  )
}
