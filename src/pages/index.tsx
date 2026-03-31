import { Header } from '@/components/common'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'motion/react'

export default function Home() {
  const [entered, setEntered] = useState(false)
  const initialControls = useAnimation()
  const entryControls = useAnimation()
  const handledRef = useRef(false)

  useEffect(() => {
    const handleWheel = async (e: WheelEvent) => {
      if (e.deltaY <= 0 || handledRef.current) return
      handledRef.current = true
      await initialControls.start({ opacity: 0, y: '-8%', transition: { duration: 0.8, ease: 'easeInOut' } })
      setEntered(true)
      await entryControls.start({ opacity: 1, y: '0%', transition: { duration: 0.8, ease: 'easeInOut' } })
    }

    window.addEventListener('wheel', handleWheel)
    return () => window.removeEventListener('wheel', handleWheel)
  }, [initialControls, entryControls])

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
            <InitialSection />
          </motion.div>
        )}

        <motion.div className="absolute inset-0 z-10" initial={{ opacity: 0, y: '8%' }} animate={entryControls}>
          <EntrySection />
        </motion.div>
      </div>
    </>
  )
}

function InitialSection() {
  return (
    <>
      <Image
        loading="eager"
        src="/images/home-vignette.svg"
        alt="home vignette"
        width={478}
        height={478}
        className="absolute top-0 right-0"
      />

      <p className="absolute top-42 text-white font-yapari text-[32px] text-center w-full">
        Are you ready to launch with CMC?
      </p>
      <div className="flex items-end absolute bottom-0 left-0 h-[60vh] w-full">
        <Image
          loading="eager"
          src="/images/home-circle.svg"
          alt="home circle"
          className="object-cover object-top"
          fill
        />
      </div>
    </>
  )
}

function EntrySection() {
  return (
    <>
      <div className="absolute inset-0">
        <Image
          loading="eager"
          src="/images/home-main.svg"
          alt="home main"
          className="object-cover object-bottom"
          fill
        />
      </div>
    </>
  )
}
