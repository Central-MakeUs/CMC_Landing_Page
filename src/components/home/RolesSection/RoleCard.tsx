import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

import roleArrow from '@/assets/images/role-arrow.svg'
import { ROUTES } from '@/lib/site'
import { cn } from '@/utils/cn'

interface RoleCardProps {
  title: string
  description?: string
  hoverDescription?: string
  image?: StaticImageData
}

export default function RoleCard({ title, description, hoverDescription, image }: RoleCardProps) {
  return (
    <Link
      href={ROUTES.recruit}
      data-reveal
      className="group relative flex min-h-80 w-full flex-col items-center gap-4 rounded-xl bg-navy-850 p-6 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 md:w-[calc((100%-2rem)/2)] lg:w-68.5 xl:min-h-73 xl:justify-between xl:gap-0 xl:p-8"
    >
      {hoverDescription ? (
        <p className="pointer-events-none absolute inset-x-8 top-8 z-10 hidden text-base leading-6.5 font-medium opacity-0 transition-opacity duration-200 motion-reduce:transition-none xl:[@media(hover:hover)]:block xl:[@media(hover:hover)]:group-hover:opacity-100 xl:[@media(hover:hover)]:group-focus-visible:opacity-100">
          {hoverDescription}
        </p>
      ) : null}

      <div
        className={cn(
          'relative h-41 w-45',
          !image && 'rounded-lg bg-white/5',
          hoverDescription &&
            'transition-opacity duration-200 motion-reduce:transition-none xl:[@media(hover:hover)]:group-hover:opacity-8 xl:[@media(hover:hover)]:group-focus-visible:opacity-8',
        )}
        aria-hidden="true"
      >
        {image ? <Image src={image} alt="" fill sizes="180px" quality={85} className="object-cover" /> : null}
      </div>

      <div className="flex w-full flex-col items-start gap-2.5">
        <div className="flex w-full items-center justify-between">
          <h3 className="text-xl leading-7.5 font-semibold xl:text-[26px]">{title}</h3>
          <Image src={roleArrow} width={27} height={28} alt="" unoptimized />
        </div>
        {description ? <p className="text-sm leading-4.25 font-medium text-gray-100">{description}</p> : null}
        {hoverDescription ? (
          <p className="text-sm leading-6 font-medium text-white xl:[@media(hover:hover)]:hidden">{hoverDescription}</p>
        ) : null}
      </div>
    </Link>
  )
}
