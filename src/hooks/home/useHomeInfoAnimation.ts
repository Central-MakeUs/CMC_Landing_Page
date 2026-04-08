import { useCallback, useEffect, useRef, useState } from 'react'
import { useScroll } from 'motion/react'

import { INFO_TAB_LABELS, type HomeInfoTab } from '@/constants/home/infoSection'

const TAB_KEYS = Object.keys(INFO_TAB_LABELS) as HomeInfoTab[]
const TAB_COUNT = TAB_KEYS.length

export function useHomeInfoAnimation(scrollContainerRef: React.RefObject<HTMLDivElement | null>) {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState<HomeInfoTab>(TAB_KEYS[0])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: scrollContainerRef,
    offset: ['start start', 'end end'],
  })

  // Scroll position → active tab (0–25% Plan, 25–50% Design, 50–75% Client, 75–100% Server)
  useEffect(() => {
    return scrollYProgress.on('change', (progress) => {
      const index = Math.min(Math.floor(progress * TAB_COUNT), TAB_COUNT - 1)
      setActiveTab(TAB_KEYS[index])
    })
  }, [scrollYProgress])

  // Tab click → scroll container jumps to that segment
  const scrollToTab = useCallback(
    (tab: HomeInfoTab) => {
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
