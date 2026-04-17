import { type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import ArrowIcon from './icons/ArrowIcon'

const button3Variants = cva(
  'inline-flex h-[46px] cursor-pointer items-center justify-center gap-5 rounded-[99px] px-8 ',
  {
    variants: {
      color: {
        white: 'bg-white text-[#006FFF]',
        blue: 'bg-[#006FFF] text-white',
        gray: 'bg-[color:var(--gray-900)] text-white',
      },
    },
    defaultVariants: { color: 'blue' },
  },
)

const iconColor: Record<'white' | 'blue' | 'gray', string> = {
  white: '#006FFF',
  blue: 'white',
  gray: 'white',
}

interface Button3Props extends VariantProps<typeof button3Variants> {
  children?: ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button3({
  color = 'blue',
  children = '더 많은 프로덕트 보러가기',
  onClick,
  className,
  type = 'button',
}: Button3Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(button3Variants({ color }), className)}
    >
      <span className="shrink-0 text-[16px] font-semibold leading-normal tracking-[-0.32px] whitespace-nowrap">
        {children}
      </span>
      <ArrowIcon size={24} color={iconColor[color ?? 'blue']} />
    </button>
  )
}
