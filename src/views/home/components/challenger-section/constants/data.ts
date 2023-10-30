import { Tab } from './enum'

export const Cards: Record<Tab, { name: string; description: string }> = {
  Plan: {
    name: 'Planner',
    description:
      '사용자의 니즈와 비즈니스 목표를 고려하여 서비스의 전략을 수립하고 설계합니다. 또한 PM으로써\n관리 프로세스를 주도하며 조율하는 역할을 수행합니다.',
  },
  Design: {
    name: 'Designer',
    description: '사용자가 편안하게 사용 가능한 화면을 디자인 함으로써, 최적의 시각적, 기능적 경험을 제공합니다.',
  },
  Client: {
    name: 'Client Developer',
    description: '디자이너와 서버 개발자간 긴밀한 협력을 통해 최상의 프로덕트를 구현하기 위한 코드를 구현합니다.',
  },
  Server: {
    name: 'Server Developer',
    description: '기획자와 클라이언트 개발자와의 협력을 통해 최상의 성능을 발휘하는 코드를 구현합니다.',
  },
}
