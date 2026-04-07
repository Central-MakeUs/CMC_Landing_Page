import { useRef } from 'react'
import { useScroll, useTransform } from 'motion/react'

const STAR_SIZE = 100
const BP1 = 150
const BP2 = 300
const BP3 = 450
const BP4 = 600

export function useHomeScrollAnimation(scrollContainerRef: React.RefObject<HTMLDivElement | null>) {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainerRef,
    offset: ['start start', 'end end'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1.0], [0, BP1, BP2, BP3, BP4])

  const starY = useTransform(lineHeight, (h) => Math.max(0, h - STAR_SIZE / 2))
  const starOpacity = useTransform(lineHeight, [0, BP1 * 0.15], [0, 1])

  const weCMCY = useTransform(lineHeight, (h) => {
    if (typeof window === 'undefined') return 0
    return Math.min(h + STAR_SIZE / 2 + 24, window.innerHeight * 0.75)
  })
  const weCMCOpacity = useTransform(lineHeight, [BP1 * 0.4, BP1, BP2 * 0.85, BP2], [0, 1, 1, 0])

  const gp1Opacity = useTransform(lineHeight, [BP2 * 0.9, BP2, BP3 * 0.85, BP3], [0, 1, 1, 0])
  const text1Opacity = useTransform(lineHeight, [BP2, BP2 * 1.1, BP3 * 0.85, BP3], [0, 1, 1, 0])

  const gp2Opacity = useTransform(lineHeight, [BP3 * 0.9, BP3, BP4 * 0.85, BP4], [0, 1, 1, 1])
  const text2Opacity = useTransform(lineHeight, [BP3, BP3 * 1.07, BP4 * 0.85, BP4], [0, 1, 1, 1])

  return {
    sectionRef,
    lineHeight,
    starY,
    starOpacity,
    weCMCY,
    weCMCOpacity,
    gp1Opacity,
    text1Opacity,
    gp2Opacity,
    text2Opacity,
  }
}
