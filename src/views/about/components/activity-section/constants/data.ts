import { Tab } from './enum'

export const Cards: Record<Tab, { name: string; description: string }> = {
  Mentoring: {
    name: '연합 해커톤',
    description:
      '대학생 IT 연합 동아리 UMC와 함께 연합 해커톤을 진행하며 동반 성장을 목표로 합니다. 짧은 기간 내에 프로덕트를 생산해보는 경험을 통해 협업 경험을 쌓아갈 수 있습니다.',
  },
  Hackathon: {
    name: '모각작',
    description:
      '대학생 IT 연합 동아리 UMC와 함께 연합 해커톤을 진행하며 동반 성장을 목표로 합니다. 짧은 기간 내에 프로덕트를 생산해보는 경험을 통해 협업 경험을 쌓아갈 수 있습니다.',
  },
  LaunchingDay: {
    name: '런칭데이',
    description:
      '기획자와 디자이너와 소통하며 의도를 면밀히 분석하고 반영하여 사용자가 편리하게 접근하고 사용할 수 있는 플랫폼을 제작합니다.',
  },
  DemoDay: {
    name: '데모데이',
    description:
      'CMC에서 제작한 프로덕트 부스를 운영하며 홍보하고, 초기 사용자 모집을 목표로 합니다. VC와 일반 참가자들을 대상으로 제작한 프로덕트를 선보입니다.',
  },
}
