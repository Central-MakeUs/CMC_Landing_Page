import { ChallengerSection } from '@/components/recruit/ChallengerSection'
import { RecruitIntroSection } from '@/components/recruit/RecruitIntroSection'
import { RecruitmentProcessSection } from '@/components/recruit/RecruitmentProcessSection'
import { RecruitRolesSection } from '@/components/recruit/RecruitRolesSection'
import { APPLICATION_STEP, GENERATION } from '@/constants/recruit'
import { createPageMetadata } from '@/lib/metadata'
import { ROUTES } from '@/lib/site'
import { formatDateWithWeekday, formatMonthDayWithWeekday } from '@/utils/date'

const TITLE = `${GENERATION}기 모집 안내`
const DESCRIPTION = `CMC ${GENERATION}기 서류접수 ${formatDateWithWeekday(APPLICATION_STEP.start)}~${formatMonthDayWithWeekday(APPLICATION_STEP.end)}. 모집 일정, 지원 자격, 정규 세션 일정과 FAQ를 확인하세요.`

export const metadata = createPageMetadata({ title: TITLE, description: DESCRIPTION, path: ROUTES.recruit })

export default function RecruitPage() {
  return (
    <main className="pt-12 md:pt-0">
      <RecruitIntroSection />
      <ChallengerSection />
      <RecruitRolesSection />
      <RecruitmentProcessSection />
    </main>
  )
}
