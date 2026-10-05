import { Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import appStoreIcon from '@/assets/images/store-app-store.webp'
import playStoreIcon from '@/assets/images/store-play-store.webp'
import type { ProjectEntry } from '@/constants/projectGallery'

interface ProjectGalleryCardProps {
  description: string
  generation: number
  image: StaticImageData
  link: ProjectEntry['link']
  title: string
  // 첫 화면에 보이는 카드만 호출부에서 지정한다
  fetchPriority?: 'high' | 'auto'
  loading?: 'eager' | 'lazy'
}

const STORES = [
  { key: 'ios', label: 'App Store', icon: appStoreIcon },
  { key: 'android', label: 'Play Store', icon: playStoreIcon },
] as const

export default function ProjectGalleryCard({
  description,
  generation,
  image,
  link,
  title,
  fetchPriority,
  loading,
}: ProjectGalleryCardProps) {
  // 스토어 링크가 없는 프로젝트는 해당 스토어를 노출하지 않는다
  const stores = STORES.filter((store) => link[store.key])

  return (
    <article className="flex h-full w-full flex-col items-start gap-3 rounded-[10px] bg-white/90 p-4 lg:gap-[13.5px] lg:rounded-xl lg:p-4.5">
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
      <div className="flex w-full flex-col gap-2 lg:gap-0">
        <div className="flex items-center gap-1.5">
          <h2 className="font-display text-xl leading-[30px] font-bold text-black lg:text-2xl lg:leading-[48.6px]">
            {title}
          </h2>
          {/* 기수는 모바일 시안에만 있다 */}
          <span className="text-base font-bold text-gray-500 lg:hidden">{generation}기</span>
        </div>
        <div className="flex w-full flex-col items-start gap-4 lg:gap-4.5">
          <p className="line-clamp-2 h-[33px] w-full text-sm leading-[16.5px] tracking-[-0.02em] text-gray-775">
            {description}
          </p>
          {stores.length > 0 && (
            <div className="flex items-center gap-2">
              {stores.map((store, index) => (
                <Fragment key={store.key}>
                  {index > 0 && <span aria-hidden className="h-3.5 w-px bg-gray-325" />}
                  <a
                    href={link[store.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} ${store.label} (새 창)`}
                    className="flex items-center gap-1.5 text-xs leading-4.5 font-semibold tracking-[-0.02em] whitespace-nowrap text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900 lg:text-[13px]"
                  >
                    {/* 모든 카드가 같은 파일 2개를 쓴다. lazy면 카드 이미지 뒤로 밀려 아이콘만 늦게 뜬다. */}
                    <Image
                      src={store.icon}
                      alt=""
                      width={19}
                      height={19}
                      loading="eager"
                      className="size-4.5 rounded-[3.6px] lg:size-4.75 lg:rounded-[3.8px]"
                    />
                    {store.label}
                  </a>
                </Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
