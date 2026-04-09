import { cn } from '@/utils/cn'
import Image from 'next/image'

import type { HomeInfoTab } from '@/constants/home/infoSection'

interface HomeInfoTabButtonProps {
  tab: HomeInfoTab
  setTab: (tab: HomeInfoTab) => void
  isActive: boolean
}

export default function HomeInfoTabButton({ tab, setTab, isActive }: HomeInfoTabButtonProps) {
  return (
    <button
      className={cn(
        'flex shrink-0 cursor-pointer items-center text-start',
        'w-fit rounded-[9px] px-4 py-2 gap-[6px] text-sm',
        'md:w-auto md:min-w-[250px] md:rounded-[24px] md:px-8 md:py-4 md:gap-4 md:text-[28px]',
        isActive
          ? 'bg-black text-white font-semibold shadow-[inset_0_-16px_23.6px_0_rgba(181,175,200,0.8),inset_0_-48px_32.1px_0_rgba(55,85,255,0.5)]'
          : 'text-gray-500',
      )}
      onClick={() => setTab(tab)}
    >
      <Image
        src={`/images/symbol-${tab.toLowerCase()}.svg`}
        alt={tab}
        width={32}
        height={32}
        className="size-4 md:size-8"
      />
      {tab}
    </button>
  )
}
