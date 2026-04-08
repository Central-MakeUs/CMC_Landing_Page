import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button1 } from '@/components/common'
import { RECRUIT_SECTION_DATA, RECRUIT_TARGET_DATE } from '@/constants/home/recruitSection'
import { useHomeRecruitAnimation } from '@/hooks/home/useHomeRecruitAnimation'

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

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function CountdownCard({ label, value }: { label: string; value: number }) {
  const display = pad(value)
  return (
    <div className="relative flex flex-1 flex-col items-center gap-3 overflow-hidden rounded-[32px] px-8 pb-7 pt-9 text-center">
      <div aria-hidden="true" className="absolute inset-0 rounded-[32px] bg-black" />
      <div className="absolute inset-0 rounded-[32px] shadow-[inset_4px_8px_20px_0px_rgba(255,255,255,0.3)]" />
      <p className="relative text-[20px] font-medium leading-normal tracking-[-0.4px] text-white/60">{label}</p>
      <div className="relative h-[90px] w-full overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.p
            key={display}
            className="absolute inset-x-0 text-center text-[60px] font-bold leading-normal tracking-[-1.2px] text-primary-light-02"
            initial={{ y: -32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 32, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {display}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}

function SheenButton({ href }: { href: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="relative inline-flex overflow-hidden rounded-[100px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Button1 onClick={() => window.open(href, '_blank')} />
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
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const { sectionRef, asteriskX, titleClipPath, symbolX, symbolOpacity, buttonOpacity, countdownOpacity, countdownY } =
    useHomeRecruitAnimation(scrollContainerRef)

  return (
    <section ref={sectionRef} className="h-[300vh]" aria-label="CMC 모집 섹션">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home-recruit-glow.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{ left: '-56px', top: '329px', width: '513px', height: '513px' }}
        />

        <motion.img
          src="/images/home-recruit-asterisk.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{
            top: '140px',
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
            top: '240px',
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
            top: '67px',
            width: '281px',
            height: '115px',
            x: symbolX,
            opacity: symbolOpacity,
          }}
        />

        <motion.div className="absolute" style={{ left: '306px', top: '80px', opacity: buttonOpacity }}>
          <SheenButton href={buttonHref} />
        </motion.div>

        <motion.div
          className="absolute"
          style={{
            top: '457px',
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
    </section>
  )
}
