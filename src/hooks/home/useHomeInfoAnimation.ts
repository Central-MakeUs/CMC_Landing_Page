import { useCallback, useEffect, useRef, useState } from 'react'
import { useScroll } from 'motion/react'

import { INFO_TAB_LABELS, type HomeInfoTab } from '@/constants/home/infoSection'

const TAB_KEYS = Object.keys(INFO_TAB_LABELS) as HomeInfoTab[]
const TAB_COUNT = TAB_KEYS.length

export function useHomeInfoAnimation(scrollContainerRef: React.RefObject<HTMLDivElement | null>) {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState<HomeInfoTab>(TAB_KEYS[0])
  const [isMobile, setIsMobile] = useState(false)

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

  // Tab click → mobile: direct switch / desktop: scroll to segment
  const scrollToTab = useCallback(
    (tab: HomeInfoTab) => {
      if (window.innerWidth < 768) {
        setActiveTab(tab)
        return
      }
      const section = sectionRef.current
      const container = scrollContainerRef.current
      if (!section || !container) return
      const tabIndex = TAB_KEYS.indexOf(tab)
      const segmentHeight = section.offsetHeight / TAB_COUNT
      container.scrollTo({ top: section.offsetTop + tabIndex * segmentHeight, behavior: 'smooth' })
    },
    [scrollContainerRef],
  )

  return { sectionRef, activeTab, scrollToTab }
}
