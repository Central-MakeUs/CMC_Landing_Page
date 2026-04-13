import { useState } from 'react'

import type { FaqCategoryId } from '@/constants/faq'
import { cn } from '@/utils/cn'

import FaqAccordion from './FaqAccordion'
import FaqCategoryTabs from './FaqCategoryTabs'
import FaqTitle from './FaqTitle'

export default function FaqMain() {
  const [category, setCategory] = useState<FaqCategoryId>('documents')

  return (
    <main
      className={cn(
        'relative w-full overflow-x-hidden',
        'min-h-[921px] bg-cover bg-top bg-no-repeat',
        "[background-image:image-set(url('/images/faq-bg-mobile.webp')_type('image/webp'),url('/images/faq-bg-mobile.png')_type('image/png'))]",
        'md:min-h-[calc(100vw*1109/1440)]',
        "md:bg-[image-set(url('/images/faq-bg.webp')_type('image/webp'),url('/images/faq-bg.png')_type('image/png'))]",
      )}
    >
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-5 pb-24 md:px-6 xl:px-[200px]">
        <div className="flex w-full max-w-[1040px] flex-col items-center pt-[192px] md:pt-[240px] [animation:fade-in-up_0.7s_ease-out_both]">
          <FaqTitle />
        </div>

        <div className="mt-6 flex w-full max-w-[1040px] flex-col gap-6 md:mt-[60px] md:gap-[60px] [animation:fade-in-up_0.7s_ease-out_0.4s_both]">
          <FaqCategoryTabs active={category} onChange={setCategory} className="w-fit self-center" />
          <FaqAccordion key={category} category={category} className="w-full" />
        </div>
      </div>
    </main>
  )
}
