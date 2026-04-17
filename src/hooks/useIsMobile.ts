import { useEffect, useState } from 'react'

/**
 * Returns null while hydrating (breakpoint unknown on server),
 * then true/false on client. Callers can skip rendering until resolved
 * to avoid loading the wrong asset set for the wrong device.
 */
export function useIsMobile(breakpoint = 768): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])

  return isMobile
}
