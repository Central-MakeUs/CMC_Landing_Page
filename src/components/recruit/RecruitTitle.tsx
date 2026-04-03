import { cn } from '@/utils/cn'

/** Figma 3266:3691 — gradient stops and angle must match Dev Mode. */
const TITLE_GRADIENT = 'linear-gradient(154deg, #a3b1ff 0%, #2b42c7 100%)'

type RecruitTitleProps = {
  className?: string
}

export default function RecruitTitle({ className }: RecruitTitleProps) {
  return (
    <h1
      className={cn(
        'font-yapari font-semibold whitespace-nowrap bg-clip-text text-transparent',
        'text-[calc(var(--rw,1px)*48)] leading-[calc(var(--rw,1px)*72)] tracking-[-0.01em]',
        className,
      )}
      style={{ backgroundImage: TITLE_GRADIENT }}
    >
      19th <span className="uppercase">schedule</span>
    </h1>
  )
}
