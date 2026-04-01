import { motion, useAnimation } from "motion/react"
import Image from "next/image"
import { ApplyButton } from "../common"

export default function HomeEntrySection({
  text1Controls,
  text2Controls,
  text3Controls,
}: {
  text1Controls: ReturnType<typeof useAnimation>
  text2Controls: ReturnType<typeof useAnimation>
  text3Controls: ReturnType<typeof useAnimation>
}) {
  return (
    <div className="w-full top-0 relative mt-header">
      <Image
        loading="eager"
        src="/images/home-main.svg"
        alt="home main"
        width={1440}
        height={900}
        className="w-full h-auto block"
      />
      <div className="absolute top-header left-[-20px] flex flex-col gap-8">
        <motion.div className="ml-[100px]" initial={{ x: '-60px', opacity: 0 }} animate={text1Controls}>
          <Image src="/images/home-text-1.svg" className="w-[50vw] h-auto" alt="text 1" width={600} height={80} />
        </motion.div>
        <motion.div className="flex items-center gap-4" initial={{ x: '-60px', opacity: 0 }} animate={text2Controls}>
          <Image src="/images/home-arrow.svg" className="w-[10vw] h-auto" alt="arrow" width={194} height={60} />
          <Image src="/images/home-text-2.svg" className="w-[48vw] h-auto" alt="text 2" width={695} height={80} />
        </motion.div>
        <motion.div className="flex items-center mt-10" initial={{ x: '-60px', opacity: 0 }} animate={text3Controls}>
          <Image src="/images/home-line.svg" className="w-[14vw] h-auto" alt="arrow" width={271} height={10} />
          <ApplyButton onClick={() => {}} />
        </motion.div>
      </div>
    </div>
  )
}
