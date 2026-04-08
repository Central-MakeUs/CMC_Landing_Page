import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Tune scroll feel here:
 * - lerp: interpolation factor (0 = very smooth/laggy, 1 = instant). 0.08 feels natural.
 * - smoothWheel: enables smooth momentum on mouse wheel events.
 */
export const LENIS_CONFIG = {
  lerp: 0.08,
  smoothWheel: true,
} satisfies ConstructorParameters<typeof Lenis>[0]

/**
 * Attaches a Lenis smooth-scroll instance to a custom scroll wrapper element.
 * Uses a single RAF loop. Cleans up on unmount.
 *
 * Compatible with Framer Motion's useScroll({ container }) because Lenis animates
 * wrapper.scrollTop natively, which fires standard scroll events that Framer Motion reads.
 */
export function useLenis(
  wrapperRef: React.RefObject<HTMLElement | null>,
  lenisRef?: React.RefObject<Lenis | null>,
) {
  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const lenis = new Lenis({ wrapper, ...LENIS_CONFIG })
    if (lenisRef) (lenisRef as { current: Lenis | null }).current = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      if (lenisRef) (lenisRef as { current: Lenis | null }).current = null
    }
    // wrapperRef and lenisRef are stable ref objects — intentionally omitted from deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
