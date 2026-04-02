import Head from 'next/head'

import { Header } from '@/components/common'
import { motion } from 'motion/react'
import {
  HomeEntrySection,
  HomeInfoSection,
  HomeInitialSection,
  HomeScrollSection,
  HomeStatSection,
} from '@/components/home'
import { useHomeAnimation } from '@/hooks/home/useHomeAnimation'

export default function Home() {
  const { entered, initialControls, entryControls, text1Controls, text2Controls, text3Controls, entryScrollRef } =
    useHomeAnimation()

  return (
    <>
      <Head>
        <title>CMC</title>
        <link rel="preload" href="/images/home-circle.svg" as="image" />
        <link rel="preload" href="/images/home-vignette.svg" as="image" />
      </Head>

      <div className="relative h-screen overflow-hidden">
        <Header />

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
          <HomeInfoSection />
        </motion.div>
      </div>
    </>
  )
}
