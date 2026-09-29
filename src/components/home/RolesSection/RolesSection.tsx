import roleClient from '@/assets/images/role-client.webp'
import roleDesigner from '@/assets/images/role-designer.webp'
import rolePm from '@/assets/images/role-pm.webp'
import { SectionEyebrow } from '@/components/common/SectionEyebrow'

import RoleCard from './RoleCard'

const ROLES = [
  { title: 'PM', hoverDescription: '문제를 정의하고 제품의 방향과 출시 과정을 이끌어요', image: rolePm },
  { title: 'Designer', hoverDescription: '사용자 경험을 설계하고 화면으로 구체화해요', image: roleDesigner },
  {
    title: 'Client',
    description: 'Native / Flutter / Web',
    hoverDescription: '앱의 화면과 기능을 구현하고 배포해요',
    image: roleClient,
  },
  // TODO: Server와 Full-Stack 일러스트가 확정되면 image를 추가
  { title: 'Server', hoverDescription: '서버·DB·API를 설계하고 구현해요' },
  { title: 'Full-Stack', hoverDescription: '프론트와 백엔드를 넘나들며 제품 전반을 구현해요' },
]

export default function RolesSection() {
  return (
    <section
      data-header-theme="light"
      id="roles"
      aria-labelledby="roles-title"
      className="bg-white px-5 py-25 lg:py-50"
    >
      <div className="mx-auto flex w-full max-w-237.5 flex-col items-center gap-8">
        <header className="flex flex-col items-center gap-4 text-center">
          <SectionEyebrow>What CMC do</SectionEyebrow>

          <div className="flex flex-col items-center gap-1.5 lg:gap-2.5">
            <h2
              id="roles-title"
              className="text-xl leading-7 font-bold tracking-[0.5px] text-navy-950 lg:text-[32px] lg:leading-[50.4px]"
            >
              서로 다른 직군이 하나의 팀이 되어
              <br className="lg:hidden" /> 3개월동안 프로덕트를 제작해요
            </h2>
            <p className="text-sm leading-[33.6px] font-medium text-gray-400 lg:text-2xl">
              자세한 내용은 모집 안내를 확인해주세요
            </p>
          </div>
        </header>

        <div className="flex w-full flex-wrap justify-center gap-x-8 gap-y-6 py-8 lg:gap-y-8">
          {ROLES.map((role) => (
            <RoleCard key={role.title} {...role} />
          ))}
        </div>
      </div>
    </section>
  )
}
