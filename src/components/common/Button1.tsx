import Image from 'next/image'
import { type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const button1Variants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-3 rounded-[100px] py-3 pl-3 pr-[26px] ',
  {
    variants: {
      state: {
        default: 'bg-[linear-gradient(-90deg,var(--primary-light-04)_0%,#b5b6ff_100%)] text-[color:var(--black)]',
        disabled: 'cursor-not-allowed bg-[color:var(--gray-50)] text-[color:var(--gray-300)]',
        pressed: 'bg-[color:var(--primary-light-05)] text-white',
      },
      size: {
        web: '',
        mob: '',
      },
    },
    defaultVariants: {
      state: 'default',
      size: 'web',
    },
  },
)

const textVariants = cva('shrink-0 font-bold font-line-seed leading-normal whitespace-nowrap', {
  variants: {
    size: {
      web: 'text-[42px] tracking-[-1.26px]',
      mob: 'text-[20px] tracking-[-0.6px]',
    },
  },
  defaultVariants: { size: 'web' },
})

const arrowIcon = {
  default: '/images/button-arrow-circle-default.svg',
  disabled: '/images/button-arrow-circle-disabled.svg',
  pressed: '/images/button-arrow-circle-pressed.svg',
} as const

interface Button1Props extends VariantProps<typeof button1Variants> {
  className?: string
  children?: ReactNode
  onClick: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button1({
  state = 'default',
  size = 'web',
  className,
  children,
  onClick,
  disabled = false,
  type = 'button',
}: Button1Props) {
  const visualState = disabled ? 'disabled' : (state ?? 'default')
  const iconSize = size === 'web' ? 66 : 32

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={cn(button1Variants({ state: visualState, size }), className)}
    >
      <Image src={arrowIcon[visualState]} alt="arrow" width={iconSize} height={iconSize} />
      <span className={textVariants({ size })}>{children}</span>
    </button>
  )
}
