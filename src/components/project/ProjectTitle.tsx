import { cn } from '@/utils/cn'

type ProjectTitleProps = {
  className?: string
}

export default function ProjectTitle({ className }: ProjectTitleProps) {
  return (
    <h1
      className={cn(
        'font-yapari font-semibold whitespace-nowrap bg-clip-text text-center text-transparent',
        'bg-[linear-gradient(148.519deg,#c1caff_29.08%,#3755ff_78.4%)]',
        'text-[clamp(32px,calc(var(--rw,1px)*48),48px)] leading-[72px] tracking-[-0.48px]',
        className,
      )}
    >
      OUR PROJECTS
    </h1>
  )
}
