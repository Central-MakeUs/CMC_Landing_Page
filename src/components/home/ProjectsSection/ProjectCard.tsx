import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import { cn } from '@/utils/cn'

interface ProjectCardProps {
  active: boolean
  description: string
  image?: StaticImageData
  title: string
}

// 카드는 항상 가운데(활성) 크기로 렌더링
// 양옆 카드의 축소는 ProjectCarousel이 transform으로 처리
export default function ProjectCard({ active, description, image, title }: ProjectCardProps) {
  return (
    <article
      className={cn(
        'flex w-full flex-col items-start gap-[11px] rounded-[9px] bg-white p-[15px] xl:gap-4.5 xl:rounded-[14px] xl:p-6',
        // hover한 카드에만 그림자를 보여준다(시안 688:1229). 기본 상태(696:310)에는 그림자가 없다.
        'transition-shadow duration-200 hover:shadow-[0_8px_8px_color-mix(in_srgb,var(--gray-760)_10%,transparent),0_0_1px_color-mix(in_srgb,var(--gray-760)_15%,transparent)] motion-reduce:transition-none',
      )}
    >
      <div className="relative aspect-447/270 w-full shrink-0 overflow-hidden rounded-[10px] bg-black/5 xl:rounded-[14px]">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 1279px) min(calc(100vw - 70px), 370px), 447px"
            quality={85}
            draggable={false}
            className="pointer-events-none object-cover object-top"
          />
        ) : null}
      </div>

      <div className="flex h-[77px] w-full flex-col items-start xl:h-27">
        <h3 className="w-full font-display text-xl leading-[40.582px] font-bold text-black xl:text-[32px] xl:leading-[64.8px]">
          {title}
        </h3>
        <p
          className={cn(
            'w-full text-sm leading-4.5 tracking-[-0.02em] xl:text-base xl:leading-[21.6px]',
            active ? 'line-clamp-2 text-navy-975' : 'truncate text-gray-775',
          )}
        >
          {description}
        </p>
      </div>
    </article>
  )
}
