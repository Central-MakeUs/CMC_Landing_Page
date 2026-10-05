import type { StaticImageData } from 'next/image'

import codeReview from '@/assets/images/journey-code-review.webp'
import hackathon from '@/assets/images/journey-hackathon.webp'
import launchingDay from '@/assets/images/journey-launching-day.webp'
import networkingDay from '@/assets/images/journey-networking-day.webp'
import partSession from '@/assets/images/journey-part-session.webp'
import teamMatching from '@/assets/images/journey-team-matching.webp'
import ut from '@/assets/images/journey-ut.webp'

export interface Journey {
  title: string
  description: string
  image?: StaticImageData
  imageAlt?: string
}

export const JOURNEYS: readonly Journey[] = [
  {
    title: 'Ne(o)rdinary 해커톤',
    description:
      '100여 명의 챌린저가 모여 아이디어를 빠르게 구체화하고 실제 프로덕트로 구현합니다. 짧은 시간 안에 협업하며 실행력과 문제 해결 능력을 키웁니다.',
    image: hackathon,
    imageAlt: 'Ne(o)rdinary 해커톤 시상식에서 수상 팀이 무대에 서 있는 모습',
  },
  {
    title: '네트워킹 데이',
    description:
      '팀빌딩 전 서로를 알아가고 교류하는 네트워킹 세션입니다. 파트를 넘어 새로운 관점을 얻고, 같은 직군끼리도 인사이트를 공유합니다.',
    image: networkingDay,
    imageAlt: '네트워킹 데이에서 챌린저들이 발표 화면을 바라보고 있는 모습',
  },
  {
    title: '파트별 세션',
    description:
      '같은 파트끼리 모여 각자의 역할에 맞는 방식으로 함께 배우고 성장합니다. 파트별 특성에 맞는 다양한 세션을 통해 프로젝트에 필요한 역량을 키워갑니다.',
    image: partSession,
    imageAlt: '파트별 세션에서 발표자가 컨테이너와 쿠버네티스를 주제로 발표하는 모습',
  },
  {
    title: '팀매칭 데이',
    description:
      '프로덕트 아이디어를 공유하고, 함께 실행할 팀원을 찾습니다. 관심 분야와 협업 스타일을 알아가며 프로젝트를 함께할 팀을 완성합니다.',
    image: teamMatching,
    imageAlt: '팀매칭 데이에서 챌린저들이 테이블에 모여 이야기를 나누는 모습',
  },
  {
    title: 'UT 세션',
    description:
      '실제 사용자의 행동과 피드백을 통해 서비스의 사용성을 검증합니다. 발견한 문제와 인사이트를 바탕으로 개선 방향을 구체화합니다.',
    image: ut,
    imageAlt: 'UT 세션에서 챌린저들이 노트북 속 서비스 화면을 보며 사용성을 이야기하는 모습',
  },
  {
    title: '코드 리뷰',
    description:
      '개발 과정에서 작성한 코드를 함께 리뷰하며 구현 방식과 구조에 대한 다양한 관점을 나눕니다.\n 단순히 오류를 찾는 것을 넘어 코드의 이유와 개선 방향을 함께 고민하며, 프로젝트의 코드 품질을 높이고 개발자로서의 시야를 넓힙니다.',
    image: codeReview,
    imageAlt: '코드 리뷰 세션에서 챌린저들이 발표를 들으며 의견을 나누는 모습',
  },
  {
    title: '런칭 데이',
    description:
      '완성한 서비스를 실제 사용자에게 공개하고 직접 시연하며 알립니다. 현장의 반응과 피드백을 통해 서비스의 가능성과 다음 개선 방향을 확인합니다.',
    image: launchingDay,
    imageAlt: 'NE(O)RDINARY FESTIVAL 무대 앞에서 챌린저들이 함께 단체 사진을 찍은 모습',
  },
]
