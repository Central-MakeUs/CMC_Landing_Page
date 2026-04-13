import { useEffect, useRef, useState } from 'react'
import { useAnimation } from 'motion/react'
import type Lenis from 'lenis'

export function useHomeAnimation(lenisRef?: React.RefObject<Lenis | null>) {
  const [entered, setEntered] = useState(false)
  const initialControls = useAnimation()
  const entryControls = useAnimation()
  const text1Controls = useAnimation()
  const text2Controls = useAnimation()
  const text3Controls = useAnimation()
  const handledRef = useRef(false)
  const entryScrollRef = useRef<HTMLDivElement>(null)

  const touchStartYRef = useRef(0)

  useEffect(() => {
    const runEntryAnimation = async () => {
      if (handledRef.current) return
      handledRef.current = true
      await initialControls.start({ opacity: 0, y: '-8%', transition: { duration: 0.8, ease: 'easeInOut' } })
      if (entryScrollRef.current) entryScrollRef.current.scrollTop = 0
      if (lenisRef?.current) lenisRef.current.scrollTo(0, { immediate: true })
      setEntered(true)
      await entryControls.start({ opacity: 1, y: '0%', transition: { duration: 0.8, ease: 'easeInOut' } })
      await text1Controls.start({ x: '0px', opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } })
      await text2Controls.start({ x: '0px', opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } })
      await text3Controls.start({ x: '0px', opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } })
    }

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY <= 0) return
      runEntryAnimation()
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = touchStartYRef.current - e.touches[0].clientY
      if (deltaY <= 0) return
      runEntryAnimation()
    }

    window.addEventListener('wheel', handleWheel)
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchmove', handleTouchMove)
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [initialControls, entryControls, text1Controls, text2Controls, text3Controls, lenisRef])

  return {
    entered,
    initialControls,
    entryControls,
    text1Controls,
    text2Controls,
    text3Controls,
    entryScrollRef,
  }
}
