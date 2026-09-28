'use client'

import { useCallback, useState } from 'react'
import type { ReactNode } from 'react'

import { cn } from '@/utils/cn'

import HeroVideo from './HeroVideo'

type HeroSequenceProps = Readonly<{
  title: ReactNode
  cta: ReactNode
}>

export default function HeroSequence({ title, cta }: HeroSequenceProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const revealContent = useCallback(() => setIsRevealed(true), [])

  return (
    <>
      <HeroVideo onPlaybackComplete={revealContent} />

      <div
        className={cn(
          'absolute inset-0 hidden bg-black opacity-0 md:block',
          isRevealed && 'opacity-50 motion-safe:animate-[hero-overlay-in_900ms_cubic-bezier(0.22,1,0.36,1)_both]',
        )}
      />

      <div className="absolute inset-x-0 top-[33.4%] z-10 flex flex-col items-center px-5 text-center text-white">
        <div
          className={cn(
            'opacity-0',
            isRevealed && 'opacity-100 motion-safe:animate-[hero-copy-in_800ms_cubic-bezier(0.22,1,0.36,1)_both]',
          )}
        >
          {title}
        </div>

        <div
          aria-hidden={!isRevealed}
          inert={!isRevealed}
          className={cn(
            'mt-8 hidden opacity-0 md:mt-12 md:block',
            isRevealed
              ? 'pointer-events-auto opacity-100 motion-safe:animate-[hero-cta-in_650ms_cubic-bezier(0.22,1,0.36,1)_300ms_both]'
              : 'pointer-events-none',
          )}
        >
          {cta}
        </div>
      </div>
    </>
  )
}
