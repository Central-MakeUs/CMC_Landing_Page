// next.config.ts에서도 import하는 파일이라 '@/' 대신 상대 경로를 쓴다. ('@/'를 쓰면 빌드가 실패한다)
import { type IsoDate, toKstDate, toKstEndOfDay } from '../utils/date'

/** 모집 기수 */
export const GENERATION = 20

export const APPLY_LABEL = `${GENERATION}기 지원하기`

// TODO: 네이버 폼 주소가 확정되면 입력
export const APPLY_FORM_URL: string | null = null

export interface ChallengerValue {
  title: string
  description: string
}

export const CHALLENGER_VALUES: readonly ChallengerValue[] = [
  { title: 'EXECUTE', description: '빠르게 실행하고 출시까지\n완주할 수 있는 분' },
  { title: 'COLLABORATE', description: '서로의 전문성을 존중하며\n함께 결과를 만들 수 있는 분' },
  { title: 'COMMIT', description: '모든 정규 세션에 참여하며\n프로젝트에 몰입할 수 있는 분' },
]

export type RecruitRoleId = 'pm' | 'designer' | 'client' | 'server' | 'full-stack'

export interface RecruitTrack {
  name: string
  description: string
  frameworks: readonly string[]
}

export interface RecruitRole {
  id: RecruitRoleId
  label: string
  title: string
  summary: string
  description: string
  keywords?: readonly string[]
  frameworks?: readonly string[]
  tracks?: readonly RecruitTrack[]
}

export const RECRUIT_ROLES: readonly RecruitRole[] = [
  {
    id: 'pm',
    label: 'PM',
    title: 'PM',
    summary: '사용자 문제를 정의하고, 서비스 방향을 설계해 출시까지 이끕니다.',
    description:
      'PM은 사용자와 시장의 문제를 발견하고, 이를 바탕으로 서비스의 방향을 설계합니다.\n팀원들과 우선순위를 조율하며 프로젝트 전반을 이끌고, 아이디어가 실제 출시까지 이어지도록 합니다.',
    keywords: ['Service Planning', 'User Research', 'Product Strategy', 'Product Manager'],
  },
  {
    id: 'designer',
    label: 'Designer',
    title: 'Designer',
    summary: '사용자 경험을 설계하고, 서비스의 흐름과 화면으로 구체화합니다.',
    description:
      'Designer는 사용자가 서비스를 이용하는 과정을 고민하고, 이를 바탕으로 UX Flow와 UI를 설계합니다.\nPM과 함께 서비스의 방향을 구체화하고 개발자와 협업하며, 아이디어가 실제 화면과 사용자 경험으로 구현되도록 합니다.',
    keywords: ['UX Research', 'UX/UI', 'Prototype', 'Design System'],
  },
  {
    id: 'client',
    label: 'Client',
    title: 'Client',
    summary: '사용자가 직접 마주하는 화면과 기능을 구현하고 실제 배포까지 완성합니다.',
    description:
      'Client는 기획과 디자인을 바탕으로 사용자가 직접 경험하는 앱과 웹의 화면과 기능을 구현합니다.\nServer와 API를 연동하고 팀원들과 협업하며, 개발한 서비스를 실제 환경에 배포하고 사용할 수 있는 제품으로 완성합니다.',
    tracks: [
      {
        name: 'Native (iOS · Android · Flutter)',
        description: '한 명의 개발자가 앱 구현부터 배포까지 담당합니다.',
        frameworks: ['Flutter: Dart, Flutter', 'Android: Kotlin, Jetpack Compose, XML', 'iOS: Swift, SwiftUI, UIKit'],
      },
      {
        name: 'Web',
        description: '두 명의 개발자가 함께 크로스플랫폼 서비스를 구현합니다.',
        frameworks: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'React Native'],
      },
    ],
  },
  {
    id: 'server',
    label: 'Server',
    title: 'Server',
    summary: '서비스의 데이터와 핵심 로직을 설계하고 안정적인 서버를 구현합니다.',
    description:
      'Server는 서비스에 필요한 데이터와 비즈니스 로직을 설계하고 이를 동작시키는 서버를 구축합니다.\nClient와 API를 통해 데이터를 주고받으며, 데이터베이스와 서버 환경을 구성해 실제 서비스가 안정적으로 동작할 수 있도록 합니다.',
    frameworks: ['Spring Boot'],
  },
  {
    id: 'full-stack',
    label: 'Full-Stack',
    title: 'Full-stack Developer',
    summary: '프론트엔드와 백엔드를 아우르며 제품 전반을 빠르게 구현합니다.',
    description:
      'Full-stack Developer는 프론트엔드부터 백엔드까지 서비스 전반을 직접 구현합니다.\n기획된 기능을 화면과 서버에 연결하고, 필요한 기능을 빠르게 구현하며 아이디어가 실제 제품으로 이어지는 전체 과정을 경험합니다.',
    // TODO: Full-stack Framework 문구가 확정되면 frameworks 추가
  },
]

export interface RecruitmentStep {
  title: string
  start: IsoDate
  end?: IsoDate
  note?: string
}

export const APPLICATION_STEP = {
  title: '서류접수',
  start: '2026-10-12',
  end: '2026-10-13',
  note: '자정 전까지 제출',
} as const satisfies RecruitmentStep

export const RECRUITMENT_STEPS: readonly RecruitmentStep[] = [
  APPLICATION_STEP,
  { title: '결과발표', start: '2026-10-26' },
  { title: '온라인 인터뷰', start: '2026-10-31', end: '2026-11-01' },
  { title: '최종발표', start: '2026-11-07' },
]

/** 서류접수 시작: 첫날 0시 */
// TODO: 시작 시각 확인
export const APPLY_START = toKstDate(APPLICATION_STEP.start)

/** 서류접수 마감: 마지막 날 24시(다음 날 0시) */
// TODO: 마감 시각 확인
export const APPLY_DEADLINE = toKstEndOfDay(APPLICATION_STEP.end)

export interface Session {
  week: number
  title: string
  date: IsoDate
}

export const SESSION_SCHEDULE: readonly Session[] = [
  { week: 0, title: 'OT', date: '2026-11-14' },
  { week: 1, title: '해커톤', date: '2026-11-21' },
  { week: 2, title: '네트워킹 데이', date: '2026-11-28' },
  { week: 3, title: '파트별 세션', date: '2026-12-05' },
  { week: 4, title: '기획안 발표 및 질의 세션', date: '2026-12-12' },
  { week: 5, title: '기획안 최종 발표 및 팀매칭', date: '2026-12-19' },
  { week: 6, title: '디자인 GUI 세션', date: '2027-01-09' },
  { week: 7, title: '1차 모각작: UT', date: '2027-01-16' },
  { week: 8, title: '2차 모각작', date: '2027-02-13' },
  { week: 9, title: '런칭데이', date: '2027-02-27' },
  { week: 10, title: '데모데이', date: '2027-03-06' },
  { week: 11, title: '종무식', date: '2027-03-13' },
]

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const RECRUIT_FAQ: readonly FaqItem[] = [
  {
    id: 'eligibility',
    question: 'CMC 지원 자격은 어떻게 되나요?',
    answer:
      '현직자 / 대학생 관계없이 직군별 역량에 충족하시는 분 혹은 지원하신 파트에 대한 실력과 열정이 있으신 분이라면 누구나 지원 가능합니다.',
  },
  {
    id: 'duplicate',
    question: '직군 간 중복 지원이 가능한가요?',
    answer: '중복 지원은 불가능하며 한 가지의 직군 지원만 허용하고 있습니다.',
  },
  {
    id: 'result',
    question: '지원 결과는 언제 어디서 확인이 가능한가요?',
    answer: '서류 및 최종 결과 모두 문자를 통해 개별적으로 알려드릴 예정입니다.',
  },
  {
    id: 'interview',
    question: '인터뷰는 어떻게 진행되나요?',
    answer:
      '모든 파트의 인터뷰는 화상 인터뷰로 진행됩니다. 자세한 공지사항은 서류 합격자에 한해 개별적으로 안내드릴 예정입니다.',
  },
  {
    id: 'final-result',
    question: '최종 합격 발표는 언제인가요?',
    answer: '최종 합격 발표의 경우 면접 이후 일주일 내로 개별 문자 및 공식 인스타그램을 통해 발표됩니다.',
  },
  {
    id: 'contact',
    question: '불합격자에게도 연락이 따로 오나요?',
    answer: '합격/불합격 여부와 상관없이 모든 지원자분들께 연락드릴 예정입니다.',
  },
  {
    id: 'ot',
    question: 'OT 참여는 필수인가요? OT 일정과 장소는 어떻게 되나요?',
    answer:
      'OT는 CMC의 첫 정기세션으로 필수 세션입니다. 향후 일정과 파트별 네트워킹이 이루어지는 행사로 불참 시 불이익이 있을 수 있습니다.',
  },
  {
    id: 'hackathon',
    question: '해커톤은 필수 참여인가요?',
    answer:
      '다른 챌린저분들과의 화합이나 동아리 적응을 위해 해커톤 또한 OT와 마찬가지로 필수 참석을 요구하고 있습니다.',
  },
  {
    id: 'session',
    question: '매주 진행되는 세션 시간 및 장소가 궁금해요.',
    answer:
      '매주 토요일 오후 2~5시 온/오프라인 병행을 통해 정기세션이 진행될 예정이며, 세션 해당 주차에 공지를 통해 더욱 자세한 사항을 전달드릴 예정입니다.',
  },
  {
    id: 'fee',
    question: '회비는 어떻게 되나요?',
    answer:
      '동아리 회비는 8만원입니다. 정기 세션 장소 대관과 데모데이 준비, 네트워킹 지원 비용 등의 동아리 운영으로 사용 됩니다. 별도 요청하신 분들에게 사용 내역을 투명하게 공개하고 있습니다.',
  },
]
