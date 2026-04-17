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
}

// ─── 등장 타이밍 (500vh 구간 기준) ───────────────────────────────────────────
//
//  0.00 ── star 등장
//  0.10 ── [weCMC 페이드인]
//  0.38 ── [weCMC 페이드아웃 시작] → 0.38에서 CSS transition 500ms 동안 완전히 사라짐
//  0.48 ── gap 끝 (약 50vh 여유)
//  0.48 ── [gp1 + text1 동시 페이드인]
//  0.68 ── [gp1 + text1 페이드아웃 시작]
//  0.78 ── gap 끝 (약 50vh 여유)
//  0.78 ── [gp2 + text2 동시 페이드인, 이후 계속 표시]

export function useHomeScrollAnimation(scrollContainerRef: React.RefObject<HTMLDivElement | null>) {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibility, setVisibility] = useState<ScrollVisibility>({
    star: false,
    weCMC: false,
    gp1: false,
    text1: false,
    gp2: false,
    text2: false,
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

  // opacity는 boolean threshold로 대체 → CSS transition(duration-500)이 담당
  useEffect(() => {
    return scrollYProgress.on('change', (p) => {
      setVisibility({
        star: p > 0.037,
        // weCMC: 0.10 ~ 0.38 (이후 gap 0.10 → gp1 시작 0.48)
        weCMC: p > 0.1 && p < 0.38,
        // gp1 + text1: 동시 등장·소멸 / 0.48 ~ 0.68 (이후 gap 0.10 → gp2 시작 0.78)
        gp1: p > 0.48 && p < 0.68,
        text1: p > 0.48 && p < 0.68,
        // gp2 + text2: 동시 등장, 이후 계속 표시
        gp2: p > 0.78,
        text2: p > 0.78,
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
