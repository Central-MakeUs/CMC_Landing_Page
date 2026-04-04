import RecruitScheduleCard from './RecruitScheduleCard'
import RecruitTitle from './RecruitTitle'
import { cn } from '@/utils/cn'

export default function RecruitMain() {
  return (
    <main
      className={cn(
        'relative w-full overflow-x-hidden',
        'bg-cover bg-top bg-no-repeat',
        '[--rw:calc(100vw/1440)]',
        "[background-image:image-set(url('/images/recruit-bg.webp')_type('image/webp'),url('/images/recruit-bg.png')_type('image/png'))]",
      )}
    >
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-[calc(var(--rw)*200)]">
        <div className="z-20 pt-[240px] text-center">
          <RecruitTitle />
        </div>

        <div className="z-10 flex justify-center pt-[132px] pb-[160px]">
          <RecruitScheduleCard />
        </div>
      </div>
    </main>
  )
}
