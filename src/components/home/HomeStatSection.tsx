import { STAT_SECTION_DATA } from '@/constants/home/statSection'

export default function HomeStatSection() {
  return (
    <section className="py-50 w-full bg-gradient-to-b via-black from-black to-gray-900 w-full flex flex-col items-center">
      <h1 className="text-white text-center text-[48px] font-semibold leading-[64px] tracking-[-1.6px] mb-16">
        수익형 앱 런칭 동아리
        <br />
        CMC로 여러분을 초대합니다.
      </h1>
      <div className="flex gap-4">
        {STAT_SECTION_DATA.map((stat) => (
          <div
            key={stat.title}
            className="rounded-4xl bg-gray-900  shadow-[inset_4px_8px_16px_0_rgba(255,255,255,0.45)] p-8 flex flex-col gap-4 min-w-[246px] w-1/4"
          >
            <p className="text-white text-xl">
              {stat.title.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <p className="text-end text-primary-light-02 font-bold text-[40px] leading-[64px] tracking-[-0.8px]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
