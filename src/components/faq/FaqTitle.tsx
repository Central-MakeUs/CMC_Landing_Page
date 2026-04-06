import { cn } from '@/utils/cn'

type FaqTitleProps = {
  className?: string
}

export default function FaqTitle({ className }: FaqTitleProps) {
  return (
    <h1
      className={cn(
        'bg-[linear-gradient(112.28deg,var(--primary-light-01)_29.079%,var(--primary-light-04)_78.397%)]',
        'bg-clip-text font-yapari font-semibold text-transparent',
        'text-[48px] leading-[72px] tracking-[-0.48px]',
        className,
      )}
    >
      FAQ
    </h1>
  )
}
