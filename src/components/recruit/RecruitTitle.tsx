import { cn } from '@/utils/cn'

type RecruitTitleProps = {
  className?: string
}

export default function RecruitTitle({ className }: RecruitTitleProps) {
  return (
    <h1
      className={cn(
        'font-yapari font-semibold whitespace-nowrap bg-clip-text text-transparent',
        'bg-[linear-gradient(154deg,#a3b1ff_0%,#2b42c7_100%)]',
        'text-[clamp(36px,calc(var(--rw,1px)*48),48px)] leading-[calc(var(--rw,1px)*72)] tracking-[-0.01em]',
        className,
      )}
    >
      19th <span className="uppercase">schedule</span>
    </h1>
  )
}
