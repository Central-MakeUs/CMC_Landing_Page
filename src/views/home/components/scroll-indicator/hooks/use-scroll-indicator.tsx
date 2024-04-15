import { useEffect, useState } from 'react'

const SCROLL_THRESHOLD = 100

export const useScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true)

  const checkScrollTop = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      setIsVisible(false)
    } else if (window.scrollY <= SCROLL_THRESHOLD) {
      setIsVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  }, [])

  return { isVisible }
}
