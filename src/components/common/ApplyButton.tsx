import Image from 'next/image'
import { type ReactNode } from 'react'

export type ApplyButtonState = 'default' | 'disabled' | 'pressed'

interface ApplyButtonProps {
  state?: ApplyButtonState
  className?: string
  children?: ReactNode
  onClick: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function ApplyButton({
  state = 'default',
  className = '',
  children = 'CMC 19기 지원하기',
  onClick,
  disabled = false,
  type = 'button',
}: ApplyButtonProps) {
  const visualState: ApplyButtonState = disabled ? 'disabled' : state

  const arrowIcon = {
    default: '/images/button-arrow-circle-default.svg',
    disabled: '/images/button-arrow-circle-disabled.svg',
    pressed: '/images/button-arrow-circle-pressed.svg',
  }

  const base =
    'inline-flex items-center justify-center gap-3 rounded-[100px] py-3 pl-3 pr-[26px] transition-[transform,opacity] active:scale-[0.99]'

  const styles: Record<ApplyButtonState, string> = {
    default: 'bg-[linear-gradient(-90deg,var(--primary-light-04)_0%,#b5b6ff_100%)] text-[color:var(--black)]',
    disabled: 'cursor-not-allowed bg-[color:var(--gray-50)] text-[color:var(--gray-300)]',
    pressed: 'bg-[color:var(--primary-light-05)] text-white',
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={`${base} ${styles[visualState]} ${className}`.trim()}
    >
      <Image src={arrowIcon[visualState]} alt="arrow" width={66} height={66} />
      <span className="shrink-0 text-[42px] font-bold font-line-seed leading-[1.5] tracking-[-1.26px] whitespace-nowrap">
        {children}
      </span>
    </button>
  )
}
