import { useId, useState } from 'react'

import ChevronIcon from '@/components/common/icons/ChevronIcon'
import type { FaqCategoryId } from '@/constants/faq'
import { FAQ_BY_CATEGORY } from '@/constants/faq'
import { cn } from '@/utils/cn'

const toggleOpenShadowClass =
  'shadow-[0_12px_40px_0_rgba(202,196,219,0.3)_inset,0_14px_20px_0_rgba(93,83,229,0.6)_inset,0_66px_100px_0_rgba(5,106,205,0.1)_inset,0_202px_130px_0_rgba(1,32,117,0.2)_inset]'

function FaqAccordionToggle({
  open,
  id,
  panelId,
  onClick,
}: {
  open: boolean
  id: string
  panelId: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      id={id}
      aria-expanded={open}
      aria-controls={panelId}
      onClick={onClick}
      className={cn(
        'relative flex shrink-0 cursor-pointer flex-col items-center justify-center rounded-[60px] px-[7px] py-[10px] md:px-[11px] md:py-[14px]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light-01/60',
        open
          ? cn('bg-primary-light-01 text-black', toggleOpenShadowClass)
          : 'border border-solid border-primary-light-01 text-primary-light-01 hover:bg-primary-light-01/40',
      )}
    >
      <ChevronIcon className={cn('shrink-0 transition-transform duration-200', open && 'rotate-180')} />
    </button>
  )
}

type FaqAccordionProps = {
  category: FaqCategoryId
  className?: string
}

export default function FaqAccordion({ category, className }: FaqAccordionProps) {
  const baseId = useId()
  const items = FAQ_BY_CATEGORY[category]
  const [openId, setOpenId] = useState<string | null>(null)

  if (items.length === 0) {
    return (
      <p className="w-full py-16 text-center text-[18px] leading-[26px] tracking-[-0.36px] text-gray-200">
        등록된 FAQ가 없습니다.
      </p>
    )
  }

  return (
    <div className={cn('flex w-full flex-col', className)} role="tabpanel">
      {items.map((entry) => {
        const open = openId === entry.id
        const panelId = `${baseId}-${entry.id}-panel`
        const triggerId = `${baseId}-${entry.id}-trigger`
        return (
          <div
            key={entry.id}
            className="flex w-full flex-wrap items-start justify-between gap-4 border-b border-primary-light-01/40 px-4 py-8 sm:flex-nowrap"
          >
            <div className="min-w-0 flex-1">
              <p
                className={cn('text-[16px] font-semibold leading-[24px] tracking-[-0.32px] text-white md:text-[24px] md:leading-[34px] md:tracking-[-0.48px]', open && 'mb-4')}
              >
                {entry.question}
              </p>
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className={cn(
                  'grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none',
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                )}
              >
                <div className="overflow-hidden" aria-hidden={!open}>
                  <p className="text-[16px] font-normal leading-[24px] tracking-[-0.32px] text-gray-200 md:text-[18px] md:leading-[26px] md:tracking-[-0.36px]">
                    {entry.answer}
                  </p>
                </div>
              </div>
            </div>
            <FaqAccordionToggle
              open={open}
              id={triggerId}
              panelId={panelId}
              onClick={() => setOpenId((prev) => (prev === entry.id ? null : entry.id))}
            />
          </div>
        )
      })}
    </div>
  )
}
