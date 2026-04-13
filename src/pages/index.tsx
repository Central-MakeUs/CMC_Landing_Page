import Head from 'next/head'
import dynamic from 'next/dynamic'

import { Header } from '@/components/common'
import { motion } from 'motion/react'
import {
  HomeActivitySection,
  HomeEntrySection,
  HomeInfoSection,
  HomeInitialSection,
  HomeProductSection,
  HomeScrollSection,
  HomeStatSection,
} from '@/components/home'

const HomeApplySection = dynamic(() => import('@/components/home/HomeApplySection'), { ssr: false })
import { useRef } from 'react'
import type Lenis from 'lenis'
import { useHomeAnimation } from '@/hooks/home/useHomeAnimation'
import { useLenis } from '@/hooks/useLenis'

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null)
  const { entered, initialControls, entryControls, text1Controls, text2Controls, text3Controls, entryScrollRef } =
    useHomeAnimation(lenisRef)

  useLenis(entryScrollRef, lenisRef)

  return (
    <>
      <Head>
        <title>CMC</title>
        <link rel="preload" href="/images/home-circle.svg" as="image" />
        <link rel="preload" href="/images/home-vignette.svg" as="image" />
      </Head>

      <div className="relative h-screen overflow-hidden">
        <Header variant="dark" />

        {!entered && (
          <motion.div className="absolute inset-0 z-0" initial={{ opacity: 1, y: '0%' }} animate={initialControls}>
            <HomeInitialSection />
          </motion.div>
        )}

        <motion.div
          ref={entryScrollRef}
          className="absolute inset-0 z-10 overflow-y-auto"
          initial={{ opacity: 0, y: '8%' }}
          animate={entryControls}
        >
          <HomeEntrySection text1Controls={text1Controls} text2Controls={text2Controls} text3Controls={text3Controls} />
          <HomeScrollSection scrollContainerRef={entryScrollRef} />
          <HomeStatSection />
          <HomeInfoSection scrollContainerRef={entryScrollRef} />
          <HomeActivitySection />
          <HomeProductSection />
          <HomeApplySection scrollContainerRef={entryScrollRef} />
        </motion.div>
      </div>
    </>
  )
}
