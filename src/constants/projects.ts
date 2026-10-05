import type { StaticImageData } from 'next/image'

import { PROJECT_GALLERY } from './projectGallery'
import { GENERATION } from './recruit'

export interface Project {
  title: string
  description: string
  image?: StaticImageData
}

/** 1·3위를 앞에, 2위를 맨 뒤에 둔다. 캐러셀이 반복되므로 처음 화면에서 1위 왼쪽에 2위, 오른쪽에 3위가 보인다. */
const rankOrder = (rank: string) => {
  if (rank === '1') return 0
  if (rank === '3') return 1
  if (rank === '2') return 3
  return 2
}

/** 홈 캐러셀에 보여줄 직전 기수의 모든 프로젝트. 프로젝트 페이지와 같은 데이터를 쓴다. */
export const PROJECTS: readonly Project[] = PROJECT_GALLERY.filter(({ generation }) => generation === GENERATION - 1)
  .sort((a, b) => rankOrder(a.rank) - rankOrder(b.rank))
  .map(({ title, description, logo }) => ({ title, description, image: logo }))
