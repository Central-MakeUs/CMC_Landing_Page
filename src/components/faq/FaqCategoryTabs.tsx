import { Tabs } from '@/components/common'
import type { FaqCategoryId } from '@/constants/faq'
import { FAQ_CATEGORIES } from '@/constants/faq'

type FaqCategoryTabsProps = {
  active: FaqCategoryId
  onChange: (id: FaqCategoryId) => void
  className?: string
}

export default function FaqCategoryTabs({ active, onChange, className }: FaqCategoryTabsProps) {
  return (
    <Tabs
      items={FAQ_CATEGORIES}
      active={active}
      onChange={onChange}
      className={className}
aria-label="FAQ 카테고리"
    />
  )
}
