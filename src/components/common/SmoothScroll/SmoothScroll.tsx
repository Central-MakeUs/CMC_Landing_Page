'use client'

import type { ReactNode } from 'react'
import { ReactLenis } from 'lenis/react'

type SmoothScrollProps = Readonly<{
  children: ReactNode
}>

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        anchors: { offset: -60 },
        autoRaf: true,
        lerp: 0.1,
        respectReducedMotion: true,
        smoothWheel: true,
        stopInertiaOnNavigate: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}
