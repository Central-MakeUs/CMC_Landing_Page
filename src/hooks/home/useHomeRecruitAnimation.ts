import { useEffect, useRef, useState } from 'react'
import { useMotionTemplate, useScroll, useTransform } from 'motion/react'

const ASTERISK_WIDTH = 308
const MOBILE_ASTERISK_WIDTH = 80
const SYMBOL_INITIAL_X = -700

export interface RecruitVisibility {
  symbol: boolean
  button: boolean
  countdown: boolean
}

export function useHomeRecruitAnimation(scrollContainerRef: React.RefObject<HTMLDivElement | null>) {
  const sectionRef = useRef<HTMLElement>(null)
  const [vpWidth, setVpWidth] = useState(1440)
  const [visibility, setVisibility] = useState<RecruitVisibility>({
    symbol: false,
    button: false,
    countdown: false,
  })

  useEffect(() => {
    const update = () => setVpWidth(window.innerWidth)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainerRef,
    offset: ['start start', 'end end'],
  })

  // 연속 보간이 필요한 값은 MotionValue 유지
  const asteriskX = useTransform(scrollYProgress, [0, 0.5], [0, vpWidth - ASTERISK_WIDTH])
  const mobileAsteriskX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-MOBILE_ASTERISK_WIDTH, vpWidth - MOBILE_ASTERISK_WIDTH],
  )

  const titleClipRight = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const titleClipPath = useMotionTemplate`inset(0 ${titleClipRight}% 0 0)`

  const symbolX = useTransform(scrollYProgress, [0.5, 0.82], [SYMBOL_INITIAL_X, 0])
  const countdownY = useTransform(scrollYProgress, [0.95, 1.0], [24, 0])

  // opacity는 boolean threshold로 대체 → CSS transition이 담당
  useEffect(() => {
    return scrollYProgress.on('change', (p) => {
      setVisibility({
        symbol: p >= 0.82,
        button: p >= 0.95,
        countdown: p >= 0.95,
      })
    })
  }, [scrollYProgress])

  return {
    sectionRef,
    asteriskX,
    mobileAsteriskX,
    titleClipPath,
    symbolX,
    countdownY,
    visibility,
  }
}
