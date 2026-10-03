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
    <li className="flex w-full flex-col items-start">
      <h3>
        <button
          type="button"
          aria-expanded={active}
          aria-controls={descriptionId}
          onClick={onSelect}
          className={cn(
            'flex cursor-pointer items-center gap-1.5 text-left font-display text-lg leading-7.5 font-semibold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 motion-reduce:transition-none xl:text-2xl xl:leading-[33.6px]',
            active ? 'text-gray-775' : 'text-gray-500',
          )}
        >
          {title}
          <DoubleChevronRightIcon />
        </button>
      </h3>

      {/* 설명은 DOM에 유지하고 grid 행 높이로 펼침 상태만 전환*/}
      <div
        className={cn(
          'grid w-full transition-[grid-template-rows,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
          active ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]',
        )}
      >
        {/* 간격을 안쪽에 둬 접힌 높이가 0이 되게 한다. */}
        <div className="overflow-hidden">
          <p
            id={descriptionId}
            className="pt-1.75 text-sm leading-[19.2px] tracking-[-0.288px] whitespace-pre-line text-gray-900"
          >
            {description}
          </p>
        </div>
      </div>
    </li>
  )
}
