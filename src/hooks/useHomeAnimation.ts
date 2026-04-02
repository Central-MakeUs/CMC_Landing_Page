import { useEffect, useRef, useState } from 'react'
import { useAnimation } from 'motion/react'

export function useHomeAnimation() {
  const [entered, setEntered] = useState(false)
  const initialControls = useAnimation()
  const entryControls = useAnimation()
  const text1Controls = useAnimation()
  const text2Controls = useAnimation()
  const text3Controls = useAnimation()
  const handledRef = useRef(false)
  const entryScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleWheel = async (e: WheelEvent) => {
      if (e.deltaY <= 0 || handledRef.current) return
      handledRef.current = true
      await initialControls.start({ opacity: 0, y: '-8%', transition: { duration: 0.8, ease: 'easeInOut' } })
      setEntered(true)
      if (entryScrollRef.current) entryScrollRef.current.scrollTop = 0
      await entryControls.start({ opacity: 1, y: '0%', transition: { duration: 0.8, ease: 'easeInOut' } })
      await text1Controls.start({ x: '0px', opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } })
      await text2Controls.start({ x: '0px', opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } })
      await text3Controls.start({ x: '0px', opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } })
    }

    window.addEventListener('wheel', handleWheel)
    return () => window.removeEventListener('wheel', handleWheel)
  }, [initialControls, entryControls, text1Controls, text2Controls, text3Controls])

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
