import { cva } from 'class-variance-authority'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import { cn } from '@/utils/cn'

interface ProjectCardProps {
  active?: boolean
  variant?: 'carousel' | 'gallery'
  generation?: number
  imageClassName?: string
  fetchPriority?: 'high' | 'auto'
  loading?: 'eager' | 'lazy'
  description: string
  image?: StaticImageData
  title: string
}

const cardVariants = cva('flex w-full flex-col items-start', {
  variants: {
    variant: {
      carousel: 'gap-[11px] rounded-[9px] bg-white p-[15px] xl:gap-4.5 xl:rounded-[14px] xl:p-6',
      gallery: 'gap-3 rounded-[10px] bg-white/90 p-4 lg:gap-[13.5px] lg:rounded-xl lg:p-4.5',
    },
  },
  defaultVariants: { variant: 'carousel' },
})

// 카드는 항상 가운데(활성) 크기로 렌더링
// 양옆 카드의 축소는 ProjectCarousel이 transform으로 처리
export default function ProjectCard({
  active = true,
  description,
  image,
  title,
  variant = 'carousel',
  generation,
  imageClassName,
  fetchPriority,
  loading,
}: ProjectCardProps) {
  if (variant === 'gallery') {
    return (
      <article className={cardVariants({ variant })}>
        <div className="relative aspect-288/167 w-full overflow-hidden rounded-[10px] lg:aspect-344/202">
          {image && (
            <Image
              src={image}
              alt={`${title} 서비스 소개`}
              fill
              sizes="(min-width: 1280px) 344px, (min-width: 1024px) calc((100vw - 208px) / 3), (min-width: 768px) calc((100vw - 128px) / 2), calc(100vw - 72px)"
              fetchPriority={fetchPriority}
              loading={loading}
              placeholder={image.blurDataURL ? 'blur' : 'empty'}
              className={cn('pointer-events-none object-cover object-top', imageClassName)}
            />
          )}
        </div>
        <div className="flex h-[81px] w-full flex-col gap-2 lg:gap-0">
          <div className="flex items-center gap-1.5 lg:gap-2">
            <h2 className="font-display text-xl leading-[30px] font-bold text-black lg:text-2xl lg:leading-[48.6px]">
              {title}
            </h2>
            <span className="text-base font-bold text-gray-500 lg:text-xl lg:leading-[48.6px]">{generation}기</span>
          </div>
          <p className="line-clamp-2 text-sm leading-[16.5px] tracking-[-0.02em] text-gray-775">{description}</p>
        </div>
      </article>
    )
  }
  return (
    <article className={cardVariants({ variant })}>
      <div className="relative aspect-447/270 w-full shrink-0 overflow-hidden rounded-[10px] bg-black/5 xl:rounded-[14px]">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 1279px) min(calc(100vw - 70px), 370px), 447px"
            quality={85}
            draggable={false}
            className="pointer-events-none object-cover"
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
