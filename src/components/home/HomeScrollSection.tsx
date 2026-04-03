import { motion } from 'motion/react'
import Image from 'next/image'

import { useHomeScrollAnimation } from '@/hooks/home/useHomeScrollAnimation'
import { SCROLL_SECTION_DATA } from '@/constants/home/scrollSection'

const STAR_SIZE = 100

export default function HomeScrollSection({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>
}) {
  const {
    sectionRef,
    lineHeight,
    starY,
    starOpacity,
    weCMCY,
    weCMCOpacity,
    gp1Opacity,
    text1Opacity,
    gp2Opacity,
    text2Opacity,
  } = useHomeScrollAnimation(scrollContainerRef)

  const { star, title, text1, text2 } = SCROLL_SECTION_DATA

  return (
    <section ref={sectionRef} className="h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-white"
          style={{ height: lineHeight }}
        />
        <motion.div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ y: starY, opacity: starOpacity }}>
          <Image
            loading="eager"
            src={star.image}
            alt={star.alt}
            width={STAR_SIZE}
            height={STAR_SIZE}
            className="size-[100px]"
          />
        </motion.div>
        <motion.p
          className="absolute top-0 left-1/2 text-[48px] font-bold leading-[64px] tracking-[-1.6px] -translate-x-1/2 text-white whitespace-nowrap"
          style={{ y: weCMCY, opacity: weCMCOpacity }}
        >
          {title}
        </motion.p>
        <motion.div className="absolute top-[30vh] left-[calc(50%)]" style={{ opacity: gp1Opacity }}>
          <Image loading="eager" src={text1.image} alt={text1.alt} width={520} height={520} />
        </motion.div>
        <motion.p
          className="absolute top-[30vh] right-[calc(50%+40px)] text-white text-right whitespace-nowrap font-pretendard text-[40px] font-medium leading-[50px] tracking-[-0.8px]"
          style={{ opacity: text1Opacity }}
        >
          {text1.text}
        </motion.p>
        <motion.div className="absolute top-[30vh] right-[calc(50%)]" style={{ opacity: gp2Opacity }}>
          <Image loading="eager" src={text2.image} alt={text2.alt} width={520} height={520} />
        </motion.div>

        <motion.p
          className="absolute top-[30vh] left-[calc(50%+40px)] text-white text-right whitespace-nowrap font-pretendard text-[40px] font-medium leading-[50px] tracking-[-0.8px]"
          style={{ opacity: text2Opacity }}
        >
          {text2.text}
        </motion.p>
      </div>
    </section>
  )
}
