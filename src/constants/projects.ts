import type { StaticImageData } from 'next/image'

import project19Mody from '@/assets/images/project/19/mody.webp'
import project19Ssoss from '@/assets/images/project/19/ssoss.webp'
import project19Tripfit from '@/assets/images/project/19/tripfit.webp'

export interface Project {
  title: string
  description: string
  image?: StaticImageData
}

// TODO: 프로젝트 8개의 이미지와 카피가 확정되면 추가
export const PROJECTS: readonly Project[] = [
  {
    title: 'Tripfit',
    description: '연차, 늦잠까지 고려해 최적의 여행 날짜를 추천해주는 앱',
    image: project19Tripfit,
  },
  {
    title: 'MODY',
    description: '친구들과 함께하는 다이어트 챌린지, 운동과 식단을 인증하고 서로 응원하며 건강한 습관을 만들어보세요.',
    image: project19Mody,
  },
  {
    title: '쏘쓰',
    description: '매장 홍보 콘텐츠를 쉽고 빠르게 만드는 AI 마케팅 서비스',
    image: project19Ssoss,
  },
]
