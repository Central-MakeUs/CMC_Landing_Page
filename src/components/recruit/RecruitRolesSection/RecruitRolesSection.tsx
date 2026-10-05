import { SectionHeading } from '@/components/common/SectionHeading'
import { RECRUIT_ROLES } from '@/constants/recruit'

import RoleTabs from './RoleTabs'

export default function RecruitRolesSection() {
  return (
    <section
      data-header-theme="light"
      id="recruit-roles"
      aria-labelledby="recruit-roles-title"
      className="overflow-hidden bg-white px-5 py-25 xl:px-20 xl:py-40"
    >
      <div className="mx-auto flex w-full max-w-240 flex-col gap-8 xl:gap-15">
        <SectionHeading
          id="recruit-roles-title"
          eyebrow="What CMC do"
          align="center"
          title={'서로 다른 직군이 하나의 팀이 되어\n3개월동안 프로덕트를 제작해요'}
        />

        <RoleTabs roles={RECRUIT_ROLES} />
      </div>
    </section>
  )
}
