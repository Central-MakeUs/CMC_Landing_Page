import type { StaticImageData } from 'next/image'
import Image from 'next/image'

interface PartnerCardProps {
  image: StaticImageData
  name: string
}

export default function PartnerCard({ image, name }: PartnerCardProps) {
  return (
    <li className="size-35 rounded-[10px] bg-white p-1.5 lg:size-55 lg:rounded-2xl lg:p-2.5">
      <div className="relative size-full">
        <Image src={image} alt={name} fill sizes="(max-width: 1023px) 128px, 200px" className="object-contain" />
      </div>
    </li>
  )
}
