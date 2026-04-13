import { useCallback, useEffect, useRef, useState } from 'react'
import { useScroll } from 'motion/react'

import { INFO_TAB_LABELS, type HomeInfoTab } from '@/constants/home/infoSection'

const TAB_KEYS = Object.keys(INFO_TAB_LABELS) as HomeInfoTab[]
const TAB_COUNT = TAB_KEYS.length
const AUTOPLAY_INTERVAL = 3000

export function useHomeInfoAnimation(scrollContainerRef: React.RefObject<HTMLDivElement | null>) {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState<HomeInfoTab>(TAB_KEYS[0])
  const [isMobile, setIsMobile] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Detect mobile after mount
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainerRef,
    offset: ['start start', 'end end'],
  })

  // Desktop: scroll position → active tab
  useEffect(() => {
    if (isMobile) return
    return scrollYProgress.on('change', (progress) => {
      const index = Math.min(Math.floor(progress * TAB_COUNT), TAB_COUNT - 1)
      setActiveTab(TAB_KEYS[index])
    })
  }, [scrollYProgress, isMobile])

  // Mobile: autoplay
  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const i = TAB_KEYS.indexOf(prev)
        return TAB_KEYS[(i + 1) % TAB_COUNT]
      })
    }, AUTOPLAY_INTERVAL)
  }, [])

  useEffect(() => {
    if (!isMobile) return
    startAutoplay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isMobile, startAutoplay])

  // Tab click → mobile: direct switch + autoplay reset / desktop: scroll to segment
  const scrollToTab = useCallback(
    (tab: HomeInfoTab) => {
      if (window.innerWidth < 768) {
        setActiveTab(tab)
        startAutoplay()
        return
      }
      const section = sectionRef.current
      const container = scrollContainerRef.current
      if (!section || !container) return
      const tabIndex = TAB_KEYS.indexOf(tab)
      const segmentHeight = section.offsetHeight / TAB_COUNT
      container.scrollTo({ top: section.offsetTop + tabIndex * segmentHeight, behavior: 'smooth' })
    },
    [scrollContainerRef, startAutoplay],
  )

  return { sectionRef, activeTab, scrollToTab }
}
