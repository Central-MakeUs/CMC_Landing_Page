import { useEffect, useRef, useState } from 'react'
import { useMotionTemplate, useScroll, useTransform } from 'motion/react'

const ASTERISK_WIDTH = 308
const SYMBOL_INITIAL_X = -700

export function useHomeRecruitAnimation(scrollContainerRef: React.RefObject<HTMLDivElement | null>) {
  const sectionRef = useRef<HTMLElement>(null)
  const [vpWidth, setVpWidth] = useState(1440)

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

  const asteriskX = useTransform(scrollYProgress, [0, 0.5], [0, vpWidth - ASTERISK_WIDTH])

  const titleClipRight = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const titleClipPath = useMotionTemplate`inset(0 ${titleClipRight}% 0 0)`

  const symbolX = useTransform(scrollYProgress, [0.5, 0.82], [SYMBOL_INITIAL_X, 0])
  const symbolOpacity = useTransform(scrollYProgress, [0.82, 1.0], [0, 1])

  const buttonOpacity = useTransform(scrollYProgress, [0.95, 1.0], [0, 1])

  const countdownOpacity = useTransform(scrollYProgress, [0.95, 1.0], [0, 1])
  const countdownY = useTransform(scrollYProgress, [0.95, 1.0], [24, 0])

  return {
    sectionRef,
    asteriskX,
    titleClipPath,
    symbolX,
    symbolOpacity,
    buttonOpacity,
    countdownOpacity,
    countdownY,
  }
}
