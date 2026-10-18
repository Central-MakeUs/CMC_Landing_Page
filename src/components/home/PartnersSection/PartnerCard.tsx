import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import { cn } from '@/utils/cn'

interface PartnerCardProps {
  image: StaticImageData
  name: string
  zoomImage?: boolean
}

export default function PartnerCard({ image, name, zoomImage = false }: PartnerCardProps) {
  return (
    <li
      data-reveal
      className="size-35 rounded-[10px] bg-white p-1.5 lg:size-55 lg:rounded-2xl lg:p-2.5 xl:aspect-square xl:h-auto xl:w-full"
    >
      <div className="relative size-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes={zoomImage ? '(max-width: 1023px) 128px, 228px' : '(max-width: 1023px) 128px, 200px'}
          className={cn('object-contain', zoomImage && 'lg:scale-[1.14]')}
        />
      </div>
    </li>
  )
}
