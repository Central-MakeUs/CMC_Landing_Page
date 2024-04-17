import { Tab } from './enum'

export const Cards: Record<Tab, { name: string; description: string }> = {
  Plan: {
    name: 'PM & Planner',
    description:
      '사용자의 니즈와 비즈니스 목표를 고려하여 앱 서비스의 전략을 수립하고 설계합니다. PM으로서 팀의 프로세스를 주도하며 조율하는 역할을 함께 수행하며, 수익형 앱 런칭 이라는 목표에 맞는 MVP 어플을 제작하는 것을 목표로 합니다.',
  },
  Design: {
    name: 'Designer',
    description:
      '한 명의 디자이너가 하나의 프로덕트를 담당하여 기획자와 함께 개발에 필요한 화면과 BI를 제작합니다. 디자인 툴을 활용하여 유저의 편의성을 고려한 최적의 UX/UI 설계를 비롯한 서비스 전체의 디자인 구축을 경험할 수 있습니다.',
  },
  Client: {
    name: 'Client Developer',
    description:
      '기획자와 디자이너와 소통하며 의도를 면밀히 분석하고 반영하여 사용자가 편리하게 접근하고 사용할 수 있는 플랫폼을 제작합니다.',
  },
  Server: {
    name: 'Server Developer',
    description:
      '기획자 및 클라이언트 개발자와의 협력을 통해 안정적인 데이터 처리 / 조회를 위한 데이터베이스 설계, 인프라 구축, API 개발 등 하나의 서비스를 위해 필요한 모든 백엔드 개발을 진행합니다.',
  },
}
