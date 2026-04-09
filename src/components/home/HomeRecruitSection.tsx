import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button1, CountdownCard } from '@/components/common'

import { RECRUIT_SECTION_DATA } from '@/constants/home/recruitSection'
import { useHomeRecruitAnimation } from '@/hooks/home/useHomeRecruitAnimation'
import { useCountdown } from '@/hooks/useCountdown'

function SheenButton({
  href,
  iconClassName,
  textClassName,
}: {
  href: string
  iconClassName: string
  textClassName: string
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="relative inline-flex overflow-hidden rounded-[100px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Button1 onClick={() => window.open(href, '_blank')} iconClassName={iconClassName} textClassName={textClassName}>
        CMC 19기 신청하기
      </Button1>
      <AnimatePresence>
        {hovered && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 w-[45%] bg-linear-to-r from-transparent via-white/25 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '350%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default function HomeRecruitSection({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>
}) {
  const { title, buttonHref, countdown } = RECRUIT_SECTION_DATA
  const timeLeft = useCountdown()

  const {
    sectionRef,
    asteriskX,
    mobileAsteriskX,
    titleClipPath,
    symbolX,
    symbolOpacity,
    buttonOpacity,
    countdownOpacity,
    countdownY,
  } = useHomeRecruitAnimation(scrollContainerRef)

  return (
    <section ref={sectionRef} className="h-[300vh]" aria-label="CMC 모집 섹션">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* ── Mobile layout ── */}
        <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center gap-6 px-5">
          {/* Glow - decorative */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home-recruit-glow.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-[-56px] bottom-0 w-[320px] h-[320px]"
          />

          {/* Asterisk - x 애니메이션 유지 (글씨 나타나는 효과와 연동) */}
          {/* <motion.img
            src="/images/home-recruit-asterisk.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-80 left-0 w-[80px] h-[80px]"
            style={{ x: mobileAsteriskX }}
          /> */}

          <div className="flex items-center gap-4 w-full mb-10">
            <motion.img
              src="/images/home-recruit-symbol.svg"
              alt="CMC symbol"
              className="h-[6vw] w-[14vw]"
              style={{ x: symbolX, opacity: symbolOpacity }}
            />
            <motion.div style={{ opacity: buttonOpacity }}>
              <SheenButton href={buttonHref} iconClassName="size-8" textClassName="text-[18px] tracking-[-0.48px]" />
            </motion.div>
          </div>

          {/* Title */}
          <motion.h1
            className="font-yapari text-white text-center leading-none tracking-[-2px] w-full"
            style={{
              fontSize: '12vw',
              clipPath: titleClipPath,
            }}
          >
            {title}
          </motion.h1>

          {/* Symbol + Button */}

          {/* Countdown - grid-cols-2 */}
          <motion.div
            className="grid grid-cols-2 gap-3 w-full"
            style={{ opacity: countdownOpacity, y: countdownY }}
            aria-live="polite"
            aria-label="모집 마감까지 남은 시간"
          >
            <CountdownCard label={countdown.days} value={timeLeft.days} />
            <CountdownCard label={countdown.hours} value={timeLeft.hours} />
            <CountdownCard label={countdown.minutes} value={timeLeft.minutes} />
            <CountdownCard label={countdown.seconds} value={timeLeft.seconds} />
          </motion.div>
        </div>

        {/* ── Desktop layout ── */}
        <div className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2" style={{ height: '550px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home-recruit-glow.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{ left: '-56px', top: '262px', width: '513px', height: '513px' }}
          />

          <motion.img
            src="/images/home-recruit-asterisk.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{
              top: '73px',
              left: 0,
              width: '308px',
              height: '308px',
              x: asteriskX,
              zIndex: 10,
            }}
          />

          <motion.h1
            className="font-yapari absolute whitespace-nowrap text-white leading-none tracking-[-4px]"
            style={{
              top: '173px',
              fontSize: '10vw',
              paddingLeft: '5.3vw',
              clipPath: titleClipPath,
            }}
          >
            {title}
          </motion.h1>

          <motion.img
            src="/images/home-recruit-symbol.svg"
            alt="CMC symbol"
            className="absolute"
            style={{
              left: '-23px',
              top: '0px',
              width: '281px',
              height: '115px',
              x: symbolX,
              opacity: symbolOpacity,
            }}
          />

          <motion.div className="absolute" style={{ left: '306px', top: '13px', opacity: buttonOpacity }}>
            <SheenButton href={buttonHref} iconClassName="size-[66px]" textClassName="text-[28px] tracking-[-0.8px]" />
          </motion.div>

          <motion.div
            className="absolute"
            style={{
              top: '390px',
              left: 'calc(50% - 519px)',
              width: '1038px',
              opacity: countdownOpacity,
              y: countdownY,
            }}
            aria-live="polite"
            aria-label="모집 마감까지 남은 시간"
          >
            <div className="flex gap-[18px]">
              <CountdownCard label={countdown.days} value={timeLeft.days} />
              <CountdownCard label={countdown.hours} value={timeLeft.hours} />
              <CountdownCard label={countdown.minutes} value={timeLeft.minutes} />
              <CountdownCard label={countdown.seconds} value={timeLeft.seconds} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
