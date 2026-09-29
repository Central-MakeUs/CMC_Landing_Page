const ABOUT_VALUES = [
  {
    title: 'MISSION',
    description: 'Build fast. Validate real. Launch to market.',
  },
  {
    title: 'VISION',
    description: '시장에서 가치를 증명하는 서비스를 만들다.',
  },
]

export default function AboutSection() {
  return (
    <section
      data-header-theme="light"
      id="about"
      aria-labelledby="about-title"
      className="bg-white px-5 py-25 lg:py-50"
    >
      <div className="mx-auto flex w-full max-w-275 flex-col items-center gap-15 lg:gap-20">
        <h2
          id="about-title"
          className="text-center text-xl leading-7 font-bold tracking-[0.5px] text-navy-950 lg:text-[32px] lg:leading-[50.4px]"
        >
          <span className="block">
            CMC는 3개월 안에 <br className="lg:hidden" /> 아이디어의 시장성을 검증하고,
          </span>
          <span className="mt-1.5 block lg:mt-0">
            수익형 앱을 개발해 실제 출시까지 <br className="lg:hidden" /> 완주하는 IT 연합동아리입니다
          </span>
        </h2>

        <ul className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
          {ABOUT_VALUES.map(({ title, description }) => (
            <li
              key={title}
              className="rounded-[10px] bg-[linear-gradient(106deg,var(--blue-50)_0%,var(--blue-100)_100%)] px-5 py-4.5 text-navy-900 lg:rounded-xl lg:p-10"
            >
              <h3 className="text-lg leading-[38.4px] font-bold lg:text-2xl">{title}</h3>
              <p className="-mt-0.5 text-sm leading-[27.2px] lg:mt-1 lg:text-lg">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
