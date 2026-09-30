import type { ReactNode } from 'react'
import { cva } from 'class-variance-authority'

import { SectionEyebrow } from '@/components/common/SectionEyebrow'
import { cn } from '@/utils/cn'

const headingVariants = cva('flex flex-col', {
  variants: {
    align: {
      start: 'items-start gap-2',
      center: 'items-center gap-4 text-center',
    },
  },
  defaultVariants: { align: 'start' },
})

interface SectionHeadingProps {
  /** section의 aria-labelledby와 연결할 id */
  id: string
  /** 문자열의 '\n'은 모바일에서만 줄을 바꾼다. */
  title: ReactNode
  eyebrow?: string
  align?: 'start' | 'center'
  /** 묶음(라벨 + 제목)에 더할 클래스 */
  className?: string
  titleClassName?: string
}

export default function SectionHeading({ id, title, eyebrow, align, className, titleClassName }: SectionHeadingProps) {
  return (
    <div className={cn(headingVariants({ align }), className)}>
      {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}
      <h2
        id={id}
        className={cn(
          'text-xl leading-8 font-bold tracking-[0.5px] whitespace-pre-line text-navy-950 lg:text-[32px] lg:leading-[50.4px] lg:whitespace-normal',
          titleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  )
}
