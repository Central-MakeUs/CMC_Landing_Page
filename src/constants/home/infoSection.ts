export const INFO_TAB_LABELS = {
  Plan: 'Plan',
  Design: 'Design',
  Client: 'Client',
  Server: 'Server',
} as const

export type HomeInfoTab = keyof typeof INFO_TAB_LABELS

export const INFO_TAB_INFO: Record<
  HomeInfoTab,
  {
    title: string | string[]
    description: string | string[]
    image: string
    content: string | string[]
  }
> = {
  Plan: {
    title: 'Plan',
    description: '기획 & PM',
    image: '/images/home-info-plan.svg',
    content:
      '사용자의 니즈와 비즈니스 목표를 고려하여 앱 서비스의 전략을 수립하고 설계해요. PM으로서 팀의 프로세스를 주도하며 조율하며, 수익형 앱 런칭 이라는 목표에 맞는 MVP 어플을 제작해요.',
  },
  Design: {
    title: 'Design',
    description: 'UXUI 디자이너',
    image: '/images/home-info-design.svg',
    content:
      '한 명의 디자이너가 하나의 프로덕트를 담당하여 기획자와 함께 개발에 필요한 화면과 BI를 제작해요. 디자인 툴을 활용하여 유저의 편의성을 고려한 최적의 UX/UI를 설계해요.',
  },
  Client: {
    title: ['Native', 'Web'],
    description: ['iOS, Android, Flutter', 'React & React Native'],
    image: '/images/home-info-client.svg',
    content: [
      '한 명의 개발자가 하나의 어플을 담당해 네이티브 앱을 제작하고 배포해요.',
      '두 명의 개발자가 함께 크로스플랫폼 앱을 만들고 배포하는 경험을 할 수 있어요.',
    ],
  },
  Server: {
    title: 'Server',
    description: '백엔드 개발',
    image: '/images/home-info-server.svg',
    content:
      '기획자 및 클라이언트 개발자와의 협력을 통해 안정적인 데이터 처리 / 조회를 위한 데이터베이스 설계, 인프라 구축, API 개발 등 하나의 서비스를 위해 필요한 모든 백엔드 개발을 진행해요.',
  },
}
