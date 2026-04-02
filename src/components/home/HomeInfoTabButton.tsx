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
        'flex rounded-[24px] min-w-[250px] cursor-pointer items-center px-10 py-5 gap-4 text-start text-[28px]',
        isActive
          ? 'bg-black text-white font-semibold shadow-[inset_0_-16px_23.6px_0_rgba(181,175,200,0.8),inset_0_-48px_32.1px_0_rgba(55,85,255,0.5)]'
          : 'text-gray-500',
      )}
      onClick={() => setTab(tab)}
    >
      <Image src={`/images/symbol-${tab.toLowerCase()}.svg`} alt={tab} width={32} height={32} />
      {tab}
    </button>
  )
}
