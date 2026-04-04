import { useState } from 'react'

import type { FaqCategoryId } from '@/constants/faq'
import { cn } from '@/utils/cn'
import { motion } from 'motion/react'

import FaqAccordion from './FaqAccordion'
import FaqCategoryTabs from './FaqCategoryTabs'
import FaqTitle from './FaqTitle'

export default function FaqMain() {
  const [category, setCategory] = useState<FaqCategoryId>('documents')

  return (
    <main
      className={cn(
        'relative w-full overflow-x-hidden',
        'min-h-[calc(100vw*1109/1440)]',
        'bg-cover bg-top bg-no-repeat',
        "[background-image:image-set(url('/images/faq-bg.webp')_type('image/webp'),url('/images/faq-bg.png')_type('image/png'))]",
      )}
    >
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-6 pb-24 md:px-[200px]">
        <motion.div
          className="flex w-full max-w-[1040px] flex-col items-center pt-[200px] md:pt-[240px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <FaqTitle />
        </motion.div>

        <motion.div
          className="mt-[60px] flex w-full max-w-[1040px] flex-col gap-[60px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
        >
          <FaqCategoryTabs active={category} onChange={setCategory} className="w-fit self-center" />
          <FaqAccordion key={category} category={category} className="w-full" />
        </motion.div>
      </div>
    </main>
  )
}
