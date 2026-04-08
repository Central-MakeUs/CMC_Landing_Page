import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

import { STAT_SECTION_DATA } from '@/constants/home/statSection'
import { useCountUp } from '@/hooks/home/useCountUp'

const COUNT_UP_DURATION = 1500

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

function parseStatValue(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([^0-9]*)(\d+)([^0-9]*)$/)
  if (!match) return { prefix: '', number: 0, suffix: value }
  return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] }
}

type StatItem = (typeof STAT_SECTION_DATA)[0]

function StatCard({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const { prefix, number, suffix } = parseStatValue(stat.value)
  const count = useCountUp(number, COUNT_UP_DURATION, isInView)

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      className="rounded-4xl bg-gray-900 shadow-[inset_4px_8px_16px_0_rgba(255,255,255,0.45)] p-8 flex flex-col gap-4 min-w-[246px] w-1/4"
    >
      <p className="text-white text-xl">
        {stat.title.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <p className="text-end text-primary-light-02 font-bold text-[40px] leading-[64px] tracking-[-0.8px]">
        {prefix}
        {count}
        {suffix}
      </p>
    </motion.div>
  )
}

export default function HomeStatSection() {
  return (
    <section className="py-50 w-full bg-linear-to-b via-black from-black to-gray-900 flex flex-col items-center">
      <motion.h1
        className="text-white text-center text-[48px] font-semibold leading-[64px] tracking-[-1.6px] mb-16"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        수익형 앱 런칭 동아리
        <br />
        CMC로 여러분을 초대합니다.
      </motion.h1>
      <motion.div
        className="flex gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {STAT_SECTION_DATA.map((stat) => (
          <StatCard key={stat.title} stat={stat} />
        ))}
      </motion.div>
    </section>
  )
}
