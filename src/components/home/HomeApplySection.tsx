import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button1, CountdownCard } from '@/components/common'

import { APPLY_DATA } from '@/constants/apply'
import { useHomeApplyAnimation } from '@/hooks/home/useHomeApplyAnimation'
import { useCountdown } from '@/hooks/useCountdown'
import { RECRUIT_GENERATION } from '@/constants/recruit'


function SheenButton({
  href,
  isEnded,
  iconClassName,
  textClassName,
}: {
  href: string
  isEnded: boolean
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
        {isEnded ? `${RECRUIT_GENERATION + 1}기 사전 예약하기` : `CMC ${RECRUIT_GENERATION}기 지원하기`}
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

export default function HomeApplySection({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>
}) {
  const { title, getButtonHref, countdown } = APPLY_DATA
  const { isEnded, ...timeLeft } = useCountdown()
  const buttonHref = getButtonHref(isEnded)

  const { sectionRef, asteriskX, mobileAsteriskX, titleClipPath, symbolX, countdownY, visibility } =
    useHomeApplyAnimation(scrollContainerRef)

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

          <div className="flex items-center gap-4 w-full mb-10">
            {/* x 보간 - motion 유지 / opacity - CSS transition */}
            <motion.img
              src="/images/home-recruit-symbol.svg"
              alt="CMC symbol"
              className={`h-[6vw] w-[14vw] transition-opacity duration-300 ${visibility.symbol ? 'opacity-100' : 'opacity-0'}`}
              style={{ x: symbolX }}
            />
            {/* opacity only - motion 제거, CSS transition */}
            <div className={`transition-opacity duration-300 ${visibility.button ? 'opacity-100' : 'opacity-0'}`}>
              <SheenButton href={buttonHref} isEnded={isEnded} iconClassName="size-8" textClassName="text-[18px] tracking-[-0.48px]" />
            </div>
          </div>

          {/* Title - clipPath 보간 - motion 유지 */}
          <motion.h1
            className="font-yapari text-white text-center leading-none tracking-[-2px] w-full"
            style={{
              fontSize: '12vw',
              clipPath: titleClipPath,
            }}
          >
            {title}
          </motion.h1>

          {/* y 보간 - motion 유지 / opacity - CSS transition */}
          <motion.div
            className={`grid grid-cols-2 gap-3 w-full transition-opacity duration-300 ${visibility.countdown ? 'opacity-100' : 'opacity-0'}`}
            style={{ y: countdownY }}
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

          {/* x 보간 - motion 유지 */}
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

          {/* clipPath 보간 - motion 유지 */}
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

          {/* x 보간 - motion 유지 / opacity - CSS transition */}
          <motion.img
            src="/images/home-recruit-symbol.svg"
            alt="CMC symbol"
            className={`absolute transition-opacity duration-300 ${visibility.symbol ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: '-23px',
              top: '0px',
              width: '281px',
              height: '115px',
              x: symbolX,
            }}
          />

          {/* opacity only - motion 제거, CSS transition */}
          <div
            className={`absolute transition-opacity duration-300 ${visibility.button ? 'opacity-100' : 'opacity-0'}`}
            style={{ left: '306px', top: '13px' }}
          >
            <SheenButton href={buttonHref} isEnded={isEnded} iconClassName="size-[66px]" textClassName="text-[28px] tracking-[-0.8px]" />
          </div>

          {/* y 보간 - motion 유지 / opacity - CSS transition */}
          <motion.div
            className={`absolute transition-opacity duration-300 ${visibility.countdown ? 'opacity-100' : 'opacity-0'}`}
            style={{
              top: '390px',
              left: 'calc(50% - 519px)',
              width: '1038px',
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
