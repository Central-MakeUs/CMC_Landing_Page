import { cn } from '@/utils/cn'
import Image from 'next/image'

import { INFO_TAB_INFO, type HomeInfoTab } from '@/constants/home/infoSection'

interface HomeInfoTabContentPanelProps {
  title: string
  description: string
  imageSrc: string
  className?: string
  topImageSize?: number
  cardImageSize?: number
  topImageClassName?: string
  content: string
}

function isStringArray(value: string | string[]): value is string[] {
  return Array.isArray(value)
}

export function HomeInfoTabContent({ tab }: { tab: HomeInfoTab }) {
  const { title, description, image, content } = INFO_TAB_INFO[tab]

  if (isStringArray(title) && isStringArray(description) && isStringArray(content)) {
    return (
      <div className="flex flex-1 min-w-0 gap-6">
        {title.map((t, index) => (
          <HomeInfoTabContentPanel
            key={index}
            title={t}
            description={description[index]}
            imageSrc={image}
            className="flex-1 min-w-0"
            topImageSize={180}
            cardImageSize={240}
            topImageClassName="top-20"
            content={content[index]}
          />
        ))}
      </div>
    )
  }

  if (!isStringArray(title) && !isStringArray(description) && !isStringArray(content)) {
    return (
      <HomeInfoTabContentPanel
        title={title}
        description={description}
        imageSrc={image}
        className="flex-1 w-full"
        content={content}
      />
    )
  }
}

function HomeInfoTabContentPanel({
  title,
  description,
  imageSrc,
  className,
  topImageSize = 400,
  cardImageSize = 400,
  topImageClassName = 'bottom-0',
  content,
}: HomeInfoTabContentPanelProps) {
  return (
    <div
      className={cn(
        'w-full p-10 box-border rounded-[24px] overflow-hidden bg-black min-h-[280px] relative bg-gradient-to-tl from-black from-0% via-black via-76% to-primary-light-03/10 to-100%',
        className,
      )}
    >
      <p className="relative z-10 text-white">
        <span className="font-yapari text-[48px]">{title}</span>
        <br />
        <span className="text-[24px] leading-[34px] tracking-[-0.48px]">{description}</span>
      </p>
      <Image
        src={imageSrc}
        alt={title}
        className={cn('absolute right-0 z-[1]', topImageClassName)}
        width={topImageSize}
        height={topImageSize}
      />
      <Image
        src="/images/home-info-card.svg"
        alt=""
        className="absolute bottom-0 right-0 z-0"
        width={cardImageSize}
        height={cardImageSize}
      />
      <p className="absolute bottom-10 right-10 left-10 z-10 text-white text-[20px] leading-[28px] tracking-[-0.4px]">
        {content}
      </p>
    </div>
  )
}
