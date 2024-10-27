import { Tab } from './enum'

export const Cards: Record<Tab, { name: string; description: string; imageSrc: string }> = {
  [Tab.MENTORING]: {
    name: '연합 해커톤',
    description: 'CMC 정기세션 이전 진행되는 세션으로 단시간 내 IT 프로덕트를 설계하고, 구현하는 경험을 가집니다.',
    imageSrc: '../images/img1.png',
  },
  [Tab.HACKATHON]: {
    name: '모각작',
    description:
      '모든 파트가 함께 모여 현재까지의 프로젝트 진척도를 점검합니다. 또한 챌린저 간 진행되는 UT를 통해 프로덕트 사용성을 객관적으로 평가하고 이를 반영하여 보완합니다.',
    imageSrc: '../images/img2.png',
  },
  [Tab.LAUNCHING]: {
    name: '런칭데이',
    description:
      '데모데이 개최 이전에 CMC 전체 챌린저들을 대상으로 런칭된 프로덕트를 소개합니다. 해당 세션을 통해 프로덕트 구현 과정과 추후 프로덕트 방향성에 대해 공유합니다.',
    imageSrc: '../images/img3.png',
  },
  [Tab.DEMO]: {
    name: '데모데이',
    description:
      'VC와 일반 참가자들을 대상으로 부스를 운영하며 지금까지 제작한 프로덕트를 소개하고 홍보합니다. 데모데이를 통해 초기 사용자를 모집하고, 런칭된 프로덕트의 시장성을 검증합니다.',
    imageSrc: '../images/img4.png',
  },
}
