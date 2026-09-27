import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // 반응형 이미지의 srcset에 사용할 화면 기준 너비
    deviceSizes: [640, 828, 1080, 1440, 1920],
    // 카드와 썸네일처럼 화면보다 작은 이미지에 추가로 사용할 너비
    imageSizes: [64, 128, 256, 384],
    // 기본은 75, 선명도가 중요한 이미지만 quality={85}를 사용한다.
    qualities: [75, 85],
    // 최적화 결과를 31일간 캐시한다. 같은 경로의 이미지를 교체할 때는 파일명도 바꾼다.
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
}

export default nextConfig
