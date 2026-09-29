import { DoubleChevronRightIcon } from '@/components/common/DoubleChevronRightIcon'
import { cn } from '@/utils/cn'

interface JourneyItemProps {
  id: string
  title: string
  description: string
  active: boolean
  onSelect: () => void
}

export default function JourneyItem({ id, title, description, active, onSelect }: JourneyItemProps) {
  const descriptionId = `${id}-description`

  return (
    <li className="flex w-full flex-col items-start gap-1.75">
      <h3>
        <button
          type="button"
          aria-expanded={active}
          aria-controls={descriptionId}
          onClick={onSelect}
          className={cn(
            'flex cursor-pointer items-center gap-1.5 text-left font-display text-lg leading-7.5 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 xl:text-2xl xl:leading-[33.6px]',
            active ? 'text-gray-775' : 'text-gray-750',
          )}
        >
          {title}
          <DoubleChevronRightIcon />
        </button>
      </h3>

      {/* 선택되지 않은 설명도 검색엔진이 읽도록 HTML에 두고 hidden으로만 숨긴다. */}
      <p
        id={descriptionId}
        hidden={!active}
        className="text-sm leading-[19.2px] tracking-[-0.288px] whitespace-pre-line text-gray-900"
      >
        {description}
      </p>
    </li>
  )
}
