import { cn } from '@/utils/cn'

const TAB_SELECTED_SHADOW =
  'inset 0 12px 40px 0 rgba(202,196,219,0.8), inset 0 14px 20px 0 rgba(93,83,229,0.8), inset 0 66px 100px 0 rgba(5,106,205,0.6), inset 0 202px 130px 0 rgba(1,32,117,0.7)'

type TabItem<T extends string> = {
  id: T
  label: string
}

type TabsProps<T extends string> = {
  items: readonly TabItem<T>[]
  active: T
  onChange: (id: T) => void
  className?: string
  tabClassName?: string
  'aria-label'?: string
}

export default function Tabs<T extends string>({
  items,
  active,
  onChange,
  className,
  tabClassName,
  'aria-label': ariaLabel,
}: TabsProps<T>) {
  return (
    <div
      className={cn('flex flex-wrap items-center gap-[10px] rounded-[60px] bg-white/4', className)}
      role="tablist"
      aria-label={ariaLabel}
    >
      {items.map(({ id, label }) => {
        const isSelected = active === id
        return (
          <button
            key={id}
            type="button"
            role="tab"
            id={`tab-${id}`}
            aria-selected={isSelected}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onChange(id)}
            className={cn(
              'relative z-0 flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-[60px] px-[14px] py-2 md:px-5 md:py-[10px]',
              'text-[14px] font-normal leading-[1.4] tracking-[-0.28px] md:text-[24px] md:leading-[34px] md:tracking-[-0.48px]',
              'transition-colors duration-200 ease-out motion-reduce:transition-none',
              !isSelected &&
                'hover:bg-white/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light-01/50',
              tabClassName,
            )}
          >
            <span
              aria-hidden
              className={cn(
                'pointer-events-none absolute inset-0 z-0 rounded-[60px] bg-primary-light-01',
                'transition-opacity duration-200 ease-out motion-reduce:transition-none',
                isSelected ? 'opacity-100' : 'opacity-0',
              )}
              style={{ boxShadow: TAB_SELECTED_SHADOW }}
            />
            <span
              className={cn(
                'relative z-10 transition-colors duration-200 ease-out motion-reduce:transition-none',
                isSelected ? 'text-black' : 'text-white',
              )}
            >
              {label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
