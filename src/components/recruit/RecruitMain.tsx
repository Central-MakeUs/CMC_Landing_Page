import RecruitScheduleCard from './RecruitScheduleCard'
import RecruitTitle from './RecruitTitle'
import { cn } from '@/utils/cn'

export default function RecruitMain() {
  return (
    <main className={cn('relative w-full overflow-hidden', '[--rw:calc(100vw/1440)]')}>
      <div
        className={cn(
          'pointer-events-none absolute inset-0',
          'hidden md:block',
          'bg-cover bg-top bg-no-repeat',
          "[background-image:image-set(url('/images/recruit-bg.webp')_type('image/webp'),url('/images/recruit-bg.png')_type('image/png'))]",
        )}
      />
      <div
        className={cn(
          'pointer-events-none absolute inset-0 -top-16',
          'block md:hidden',
          'bg-cover bg-top bg-no-repeat',
          "bg-[image-set(url('/images/recruit-bg-mobile.webp')_type('image/webp'),url('/images/recruit-bg-mobile.png')_type('image/png'))]",
        )}
      />
      <div className="relative z-10 mx-auto flex max-w-[1920px] flex-col md:px-[calc(var(--rw)*200)]">
        <div className="z-20 pt-[157px] text-center md:pt-[calc(var(--rw)*240)] [animation:fade-in-up_0.7s_ease-out_both]">
          <RecruitTitle />
        </div>

        <div className="z-10 flex justify-center px-5 pt-5 pb-[80px] md:px-0 md:pt-[132px] md:pb-[160px] [animation:fade-in-up_0.7s_ease-out_0.4s_both]">
          <RecruitScheduleCard />
        </div>
      </div>
    </main>
  )
}
