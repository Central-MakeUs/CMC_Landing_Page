import Image from 'next/image'
import { type ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const button1Variants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-3 rounded-[100px] py-3 pl-3 pr-[26px]',
  {
    variants: {
      state: {
        default: 'bg-[linear-gradient(-90deg,var(--primary-light-04)_0%,#b5b6ff_100%)] text-[color:var(--black)]',
        disabled: 'cursor-not-allowed bg-[color:var(--gray-50)] text-[color:var(--gray-300)]',
        pressed: 'bg-[color:var(--primary-light-05)] text-white',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
)

const arrowIcon = {
  default: '/images/button-arrow-circle-default.svg',
  disabled: '/images/button-arrow-circle-disabled.svg',
  pressed: '/images/button-arrow-circle-pressed.svg',
} as const

interface Button1Props extends VariantProps<typeof button1Variants> {
  className?: string
  iconClassName?: string
  textClassName?: string
  children?: ReactNode
  onClick: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button1({
  state = 'default',
  className,
  iconClassName,
  textClassName,
  children,
  onClick,
  disabled = false,
  type = 'button',
}: Button1Props) {
  const visualState = disabled ? 'disabled' : (state ?? 'default')

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={cn(button1Variants({ state: visualState }), className)}
    >
      <Image
        src={arrowIcon[visualState]}
        alt="arrow"
        width={66}
        height={66}
        className={cn('shrink-0', iconClassName)}
      />
      <span className={cn('shrink-0 whitespace-nowrap font-line-seed font-bold leading-normal', textClassName)}>
        {children}
      </span>
    </button>
  )
}
