import type { StaticImageData } from 'next/image'
import Image from 'next/image'

interface ProjectGalleryCardProps {
  description: string
  generation: number
  image: StaticImageData
  title: string
  // 첫 화면에 보이는 카드만 호출부에서 지정한다
  fetchPriority?: 'high' | 'auto'
  loading?: 'eager' | 'lazy'
}

export default function ProjectGalleryCard({
  description,
  generation,
  image,
  title,
  fetchPriority,
  loading,
}: ProjectGalleryCardProps) {
  return (
    <article className="flex w-full flex-col items-start gap-3 rounded-[10px] bg-white/90 p-4 lg:gap-[13.5px] lg:rounded-xl lg:p-4.5">
      <div className="relative aspect-288/167 w-full overflow-hidden rounded-[10px] lg:aspect-344/202">
        <Image
          src={image}
          alt={`${title} 서비스 소개`}
          fill
          sizes="(min-width: 1280px) 344px, (min-width: 1024px) calc((100vw - 208px) / 3), (min-width: 768px) calc((100vw - 128px) / 2), calc(100vw - 72px)"
          fetchPriority={fetchPriority}
          loading={loading}
          placeholder="blur"
          className="pointer-events-none object-cover object-top"
        />
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
