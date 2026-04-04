import { type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import ArrowIcon from './icons/ArrowIcon'

const button2Variants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-5 rounded-[99px] px-8 py-4 text-[24px] ',
  {
    variants: {
      color: {
        blue: 'bg-[linear-gradient(163deg,#C1CAFF_0%,#6B81FF_100%)] text-white',
        gray: 'bg-[color:var(--gray-800)] text-white',
      },
    },
    defaultVariants: { color: 'blue' },
  },
)

interface Button2Props extends VariantProps<typeof button2Variants> {
  children?: ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button2({
  color = 'blue',
  children = 'CMC 19th 지원 알림받기',
  onClick,
  className,
  type = 'button',
}: Button2Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(button2Variants({ color }), className)}
    >
      <span className="shrink-0 whitespace-nowrap font-semibold leading-[1.417] tracking-[-0.48px]">
        {children}
      </span>
      <ArrowIcon size="1em" color="white" />
    </button>
  )
}
