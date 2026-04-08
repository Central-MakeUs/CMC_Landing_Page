import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button1, CountdownCard } from '@/components/common'
import { RECRUIT_TARGET_DATE } from '@/constants/recruit'
import { RECRUIT_SECTION_DATA } from '@/constants/home/recruitSection'

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

function calcTimeLeft(): TimeLeft {
  const diff = RECRUIT_TARGET_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  }
}

export default function ApplyMain() {
  const { buttonHref, countdown } = RECRUIT_SECTION_DATA
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <main>
      <section
        className="relative flex min-h-dvh flex-col items-center overflow-hidden bg-[linear-gradient(163deg,var(--primary-light-01)_0%,var(--primary-light-03)_100%)] px-5 pb-20 pt-[140px]"
        aria-label="CMC 지원하기"
      >
        <Image
          src="/images/apply-bg.png"
          alt=""
          aria-hidden="true"
          fill
          className="pointer-events-none object-cover"
          priority
        />
        <div className="relative z-10 flex w-full max-w-[594px] flex-col items-center gap-[30px]">
          <Image
            src="/images/apply-cmc-logo-text.svg"
            alt="CMC"
            width={382}
            height={193}
            className="w-full max-w-[382px]"
          />
          <p className="w-full text-center text-[20px] font-normal leading-[1.4em] tracking-[-0.4px] text-black">
            CMC는 <span className="font-semibold text-primary-light-04">실력있는</span> &apos;기획자, 디자이너,
            개발자&apos;들이 <span className="font-semibold text-primary-light-04">3개월</span> 동안 함께
            <br />
            <span className="font-semibold text-primary-light-04">수익 창출</span>을 위한{' '}
            <span className="font-semibold text-primary-light-04">MVP 프로덕트</span>를 제작하는{' '}
            <span className="font-semibold text-primary-light-04">IT 커뮤니티</span> 입니다.
          </p>
        </div>

        <div
          className="relative z-10 mt-[60px] flex w-full max-w-[1038px] flex-col items-center gap-[28px]"
          aria-live="polite"
          aria-label="모집 마감까지 남은 시간"
        >
          <div className="font-line-seed rounded-[12px_0px_23px_0px] border border-gray-300 bg-gray-900 px-6 py-2 text-[20px] font-bold leading-[1.324em] tracking-[-0.4px] text-white">
            19기 모집 마감까지
          </div>

          <div className="flex w-full gap-[18px]">
            <CountdownCard label={countdown.days} value={timeLeft.days} variant="light" />
            <CountdownCard label={countdown.hours} value={timeLeft.hours} variant="light" />
            <CountdownCard label={countdown.minutes} value={timeLeft.minutes} variant="light" />
            <CountdownCard label={countdown.seconds} value={timeLeft.seconds} variant="light" />
          </div>

          <Button1
            onClick={() => window.open(buttonHref, '_blank')}
            className="shadow-[0px_12px_51px_0px_rgba(255,255,255,0.42)] bg-[linear-gradient(152deg,var(--primary-light-03)_0%,var(--primary-light-05)_100%)] text-white"
          />
        </div>
      </section>
    </main>
  )
}
