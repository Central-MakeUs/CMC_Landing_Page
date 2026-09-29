import { AboutSection } from '@/components/home/AboutSection'
import { HeroSection } from '@/components/home/HeroSection'

// 홈은 layout의 기본 metadata(title: CMC, canonical: /)를 그대로 사용한다.
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
    </main>
  )
}
