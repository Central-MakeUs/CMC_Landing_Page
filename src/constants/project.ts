export const PROJECT_TAB_ITEMS = [
  { id: 'all', label: '전체' },
  { id: '18', label: '18기' },
  { id: '17', label: '17기' },
  { id: '16', label: '16기' },
  { id: '15', label: '15기' },
  { id: '14', label: '14기' },
  { id: '13', label: '13기' },
] as const

export type ProjectCohort = '18' | '17' | '16' | '15' | '14' | '13'

export interface ProjectEntry {
  id: string
  title: string
  cohort: ProjectCohort
  description: string
  cover: 'a' | 'b'
  topWhite?: boolean
  playStoreUrl?: string
  appStoreUrl?: string
}

const COVER_PATH: Record<'a' | 'b', string> = {
  a: '/images/project/cover-a.png',
  b: '/images/project/cover-b.png',
}

export function projectCoverSrc(cover: 'a' | 'b'): string {
  return COVER_PATH[cover]
}

export const STORE_PLAY_ICON = '/images/project/store-play.png'
export const STORE_APP_ICON = '/images/project/store-app.png'

export const PROJECTS: ProjectEntry[] = [
  {
    id: 'semo',
    title: '세모',
    cohort: '18',
    description: '나만의 오답노트, 세모 설명 나만의 오답노트, 세모 설명나만의 오답노트, 세모 설명나만의 오답노트',
    cover: 'a',
    playStoreUrl: 'https://play.google.com/store',
    appStoreUrl: 'https://apps.apple.com',
  },
  {
    id: 'forday',
    title: '포데이',
    cohort: '18',
    description:
      'AI 취미 추천부터 66일 스티커 기록, 함께할 사람 연결까지 취미를 꾸준히 이어갈 수 있도록 돕는 취미 생활 파트너',
    cover: 'b',
    playStoreUrl: 'https://play.google.com/store',
  },
  {
    id: 'agit',
    title: '아지트',
    cohort: '18',
    description: '러닝 크루를 위한 러닝 베네핏 서비스, 아지트 설명 러닝 크루를 위한 러닝 베네핏 서비스, 아지트 설명',
    cover: 'a',
    topWhite: true,
    appStoreUrl: 'https://apps.apple.com',
  },
  {
    id: 'withus',
    title: 'WITHUS',
    cohort: '18',
    description: '커플들의 사진 아카이빙 서비스, 위더스 두줄설명 커플들의 사진 아카이빙 서비스, 위더스 두줄설명',
    cover: 'b',
  },
  {
    id: 'coachcoach',
    title: '코치코치',
    cohort: '18',
    description: '카페 사장님을 위한 AI 수익 전략 서비스, 코치코치코치코치코치코치코치코치코치코치코치',
    cover: 'a',
    topWhite: true,
  },
  {
    id: 'archiveview',
    title: '아카이뷰',
    cohort: '18',
    description: '아카이버와 아카이뷰를 위한 나만의 인스타그램 url 저장소 아카이뷰 설명',
    cover: 'b',
  },
  {
    id: 'monit',
    title: '모닛',
    cohort: '18',
    description: '감정 대비 효용가치 기록 가계부, 모닛 설명 모닛모닛모닛모닛모닛모닛모닛',
    cover: 'a',
    topWhite: true,
  },
  {
    id: 'omt',
    title: 'OMT',
    cohort: '18',
    description:
      '넘어지더라도 한번 더, 나의 AI 운동 메이터 OMT 설명 넘어지더라도 한번 더, 나의 AI 운동 메이터 OMT 설명',
    cover: 'b',
  },
  {
    id: 'placeholder',
    title: '프로덕트명',
    cohort: '18',
    description:
      "집중력을 기르는 도파민 앱 차단 '실험 타이머'. 디지털 도파민에서 벗어나, 지금 나의 상황에 집중해 보세요.",
    cover: 'a',
    topWhite: true,
  },
]
