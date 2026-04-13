import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform } from 'motion/react'

const STAR_SIZE = 100
const BP1 = 150
const BP2 = 300
const BP3 = 450
const BP4 = 600

export interface ScrollVisibility {
  star: boolean
  weCMC: boolean
  gp1: boolean
  text1: boolean
  gp2: boolean
  text2: boolean
  cards: boolean
}

export function useHomeScrollAnimation(scrollContainerRef: React.RefObject<HTMLDivElement | null>) {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibility, setVisibility] = useState<ScrollVisibility>({
    star: false,
    weCMC: false,
    gp1: false,
    text1: false,
    gp2: false,
    text2: false,
    cards: false,
  })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainerRef,
    offset: ['start start', 'end end'],
  })

  // 연속 보간이 필요한 값은 MotionValue 유지
  const lineHeight = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1.0], [0, BP1, BP2, BP3, BP4])
  const starY = useTransform(lineHeight, (h) => Math.max(0, h - STAR_SIZE / 2))
  const weCMCY = useTransform(lineHeight, (h) => {
    if (typeof window === 'undefined') return 0
    return Math.min(h + STAR_SIZE / 2 + 24, window.innerHeight * 0.75)
  })

  // opacity는 boolean threshold로 대체 → CSS transition이 담당
  useEffect(() => {
    return scrollYProgress.on('change', (p) => {
      setVisibility({
        star: p > 0.037,
        weCMC: p > 0.1 && p < 0.5,
        gp1: p > 0.45 && p < 0.75,
        text1: p > 0.5 && p < 0.75,
        gp2: p > 0.7,
        text2: p > 0.75,
        cards: p > 0.85,
      })
    })
  }, [scrollYProgress])

  return {
    sectionRef,
    lineHeight,
    starY,
    weCMCY,
    visibility,
  }
}
