import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/utils/cn'

import { STORE_APP_ICON, STORE_PLAY_ICON } from '@/constants/project'

const MEDAL_MAP: Record<string, string> = {
  '1': '/images/project/medal-gold.png',
  '2': '/images/project/medal-silver.png',
  '3': '/images/project/medal-bronze.png',
}

export type ProjectCardProps = {
  name: string
  year: string
  rank?: string
  description: string
  logo: string
  playStoreUrl?: string
  appStoreUrl?: string
  className?: string
}

export default function ProjectCard({
  name,
  year,
  rank,
  description,
  logo,
  playStoreUrl,
  appStoreUrl,
  className,
}: ProjectCardProps) {
  const borderRadius = 'rounded-[clamp(0px,calc(var(--rw,1px)*24),24px)]'

  return (
    <div
      className={cn(
        'p-px w-full max-w-[400px] min-w-0 md:max-w-none mx-auto md:mx-0',
        'bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.7)_10%,rgba(255,255,255,0.2)_90%)]',
        borderRadius,
        className,
      )}
    >
      <article className={cn('flex min-h-0 w-full flex-col overflow-hidden bg-black h-full', borderRadius)}>
        <div className={cn('relative aspect-320/230 w-full shrink-0 overflow-hidden bg-black')}>
          <Image
            src={logo}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div
          className={cn(
            'relative flex aspect-320/190 shrink-0 flex-col gap-[clamp(0px,calc(var(--rw,1px)*16),16px)] overflow-hidden px-[clamp(0px,calc(var(--rw,1px)*16),16px)] pt-[clamp(0px,calc(var(--rw,1px)*16),16px)] pb-[clamp(0px,calc(var(--rw,1px)*24),24px)]',
            'shadow-[inset_0px_4px_8px_0px_rgba(255,255,255,0.25)]',
          )}
        >
          <div
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-0 rounded-b-[clamp(0px,calc(var(--rw,1px)*24),24px)]',
              'bg-linear-to-b from-black from-0% via-[60.598%] via-[rgba(49,80,224,0.2)] to-black to-100%',
            )}
          />
          <div className="relative z-10 flex min-h-0 flex-1 flex-col gap-[clamp(0px,calc(var(--rw,1px)*16),16px)]">
            <div className="flex min-h-0 items-start justify-between gap-2 not-italic">
              <div className="flex min-h-0 flex-col gap-[clamp(0px,calc(var(--rw,1px)*8),8px)]">
                <p
                  className={cn(
                    'font-semibold tracking-[-0.02em] text-white',
                    'text-[clamp(0px,calc(var(--rw,1px)*24),24px)] leading-[clamp(0px,calc(var(--rw,1px)*34),34px)]',
                  )}
                >
                  {name}
                </p>
                <p
                  className={cn(
                    'font-semibold tracking-[-0.02em] text-primary-light-02',
                    'text-[clamp(0px,calc(var(--rw,1px)*16),16px)] leading-[clamp(0px,calc(var(--rw,1px)*24),24px)]',
                  )}
                >
                  {year}기
                </p>
              </div>
              {rank && MEDAL_MAP[rank] && (
                <span className="relative size-[clamp(0px,calc(var(--rw,1px)*56),56px)] shrink-0 block">
                  <Image src={MEDAL_MAP[rank]} alt={`${rank}등 메달`} fill sizes="56px" className="object-contain" />
                </span>
              )}
            </div>
            <p
              className={cn(
                'line-clamp-2 h-[clamp(0px,calc(var(--rw,1px)*48),48px)] overflow-hidden text-gray-50 tracking-[-0.02em]',
                'text-[clamp(0px,calc(var(--rw,1px)*14),14px)] leading-[clamp(0px,calc(var(--rw,1px)*24),24px)]',
              )}
            >
              {description}
            </p>
            <div className="mt-auto flex shrink-0 items-center gap-[clamp(0px,calc(var(--rw,1px)*8),8px)]">
              {playStoreUrl && <StoreChip href={playStoreUrl} iconSrc={STORE_PLAY_ICON} label="Play Store" />}
              {playStoreUrl && appStoreUrl && (
                <span
                  className={cn(
                    'font-semibold tracking-[-0.02em] text-gray-300',
                    'text-[clamp(0px,calc(var(--rw,1px)*13),13px)] leading-[clamp(0px,calc(var(--rw,1px)*18),18px)]',
                  )}
                >
                  /
                </span>
              )}
              {appStoreUrl && <StoreChip href={appStoreUrl} iconSrc={STORE_APP_ICON} label="App Store" />}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

function StoreChip({ href, iconSrc, label }: { href: string; iconSrc: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-[clamp(0px,calc(var(--rw,1px)*4),4px)] hover:opacity-90"
    >
      <span
        className={cn(
          'relative size-[clamp(0px,calc(var(--rw,1px)*20),20px)] shrink-0 overflow-hidden rounded-[clamp(0px,calc(var(--rw,1px)*4),4px)]',
        )}
      >
        <Image src={iconSrc} alt="" width={20} height={20} className="size-full object-cover" />
      </span>
      <span
        className={cn(
          'whitespace-nowrap font-semibold tracking-[-0.02em] text-gray-300',
          'text-[clamp(0px,calc(var(--rw,1px)*13),13px)] leading-[clamp(0px,calc(var(--rw,1px)*18),18px)]',
        )}
      >
        {label}
      </span>
    </Link>
  )
}
