import { motion, useAnimation } from 'motion/react'
import Image from 'next/image'

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
      <div className="absolute top-header left-0 flex flex-col gap-[1vw]">
        <motion.div className="ml-[8vw]" initial={{ x: '-60px', opacity: 0 }} animate={text1Controls}>
          <Image src="/images/home-text-1.svg" className="w-[50vw] h-auto" alt="text 1" width={600} height={80} />
        </motion.div>
        <motion.div className="flex items-center gap-4" initial={{ x: '-60vw', opacity: 0 }} animate={text2Controls}>
          <Image
            src="/images/home-text-2.svg"
            className="w-[54vw] h-auto mt-[1.5vw]"
            alt="text 2"
            width={695}
            height={80}
          />
        </motion.div>
        <motion.div
          className="flex items-center mt-[2.5vw]"
          initial={{ x: '-60px', opacity: 0 }}
          animate={text3Controls}
        >
          <div className="relative w-[45vw] cursor-pointer group">
            <Image
              src="/images/home-text-3.svg"
              className="w-full h-auto group-hover:opacity-0 group-active:opacity-0"
              alt="text 3"
              width={695}
              height={80}
            />
            <Image
              src="/images/home-text-3-pressed.svg"
              className="w-full h-auto absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100"
              alt="text 3 pressed"
              width={695}
              height={80}
              onClick={() => {
                alert('test')
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
