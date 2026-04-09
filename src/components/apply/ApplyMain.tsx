import Image from 'next/image'
import { Button1, CountdownCard } from '@/components/common'
import { RECRUIT_GENERATION, RECRUIT_TARGET_DATE } from '@/constants/recruit'
import { RECRUIT_SECTION_DATA } from '@/constants/home/recruitSection'
import { useCountdown } from '@/hooks/useCountdown'
import { cn } from '@/utils/cn'

const IS_RECRUIT_ENDED = Date.now() >= RECRUIT_TARGET_DATE.getTime()

export default function ApplyMain() {
  const { buttonHref, countdown } = RECRUIT_SECTION_DATA
  const timeLeft = useCountdown()
  const buttonLabel = IS_RECRUIT_ENDED ? '다음 기수 알림받기' : `CMC ${RECRUIT_GENERATION}기 지원하기`
  const buttonClassName =
    'shadow-[0px_12px_51px_0px_rgba(255,255,255,0.42)] bg-[linear-gradient(152deg,var(--primary-light-03)_0%,var(--primary-light-05)_100%)] text-white'

  return (
    <main>
      <section
        className={cn(
          'relative flex min-h-dvh flex-col items-center overflow-hidden px-5 pb-20',
          'pt-[153px] md:pt-[140px]',
          'bg-cover bg-center bg-no-repeat',
          "[background-image:image-set(url('/images/apply-bg-mobile.webp')_type('image/webp'),url('/images/apply-bg-mobile.png')_type('image/png'))]",
          "md:bg-[image-set(url('/images/apply-bg.webp')_type('image/webp'),url('/images/apply-bg.png')_type('image/png'))]",
        )}
        aria-label="CMC 지원하기"
      >
        <div className="relative z-10 flex w-full max-w-[320px] flex-col items-center gap-[30px] md:max-w-[594px]">
          <Image
            src="/images/apply-cmc-logo-text.svg"
            alt="CMC"
            width={268}
            height={135}
            className="w-[268px] md:w-full md:max-w-[382px]"
          />
          <p className="w-full text-center text-[16px] font-normal leading-[1.5em] tracking-[-0.32px] text-black md:text-[20px] md:leading-[1.4em] md:tracking-[-0.4px]">
            <span className="md:hidden">
              CMC는
              <br />
              <span className="font-semibold text-primary-light-04">실력있는</span>{" '기획자, 디자이너, 개발자'들이"}
              <br />
              <span className="font-semibold text-primary-light-04">3개월</span> 동안 함께{' '}
              <span className="font-semibold text-primary-light-04">수익 창출</span>을 위한
              <br />
              <span className="font-semibold text-primary-light-04">MVP 프로덕트</span>를 제작하는{' '}
              <span className="font-semibold text-primary-light-04">IT 커뮤니티</span> 입니다.
            </span>
            <span className="hidden md:inline">
              CMC는 <span className="font-semibold text-primary-light-04">실력있는</span>{" '기획자, 디자이너, 개발자'들이 "}<span className="font-semibold text-primary-light-04">3개월</span> 동안 함께{' '}
              <span className="font-semibold text-primary-light-04">수익 창출</span>을 위한{' '}
              <span className="font-semibold text-primary-light-04">MVP 프로덕트</span>를 제작하는{' '}
              <span className="font-semibold text-primary-light-04">IT 커뮤니티</span> 입니다.
            </span>
          </p>
        </div>

        <div
          className="relative z-10 mt-[70px] flex w-full max-w-[320px] flex-col items-center gap-[28px] md:max-w-[1038px]"
          aria-live="polite"
          aria-label="모집 마감까지 남은 시간"
        >
          <div className="font-line-seed rounded-[12px_0px_23px_0px] border border-gray-300 bg-gray-900 px-6 py-2 text-[14px] font-bold leading-[1.324em] tracking-[-0.28px] text-white md:text-[20px] md:tracking-[-0.4px]">
            {RECRUIT_GENERATION}기 모집 마감까지
          </div>

          <div className="grid w-full grid-cols-2 gap-x-[18px] gap-y-[16px] md:flex md:gap-[18px]">
            <CountdownCard label={countdown.days} value={timeLeft.days} variant="light" />
            <CountdownCard label={countdown.hours} value={timeLeft.hours} variant="light" />
            <CountdownCard label={countdown.minutes} value={timeLeft.minutes} variant="light" />
            <CountdownCard label={countdown.seconds} value={timeLeft.seconds} variant="light" />
          </div>

          <Button1
            onClick={() => window.open(buttonHref, '_blank')}
            className={buttonClassName}
            iconClassName="size-8 md:size-[66px]"
            textClassName="text-[20px] tracking-[-0.6px] md:text-[42px] md:tracking-[-1.26px]"
          >
            {buttonLabel}
          </Button1>
        </div>
      </section>
    </main>
  )
}
