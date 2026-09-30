import { AboutSection } from '@/components/home/AboutSection'
import { HeroSection } from '@/components/home/HeroSection'
import { JoinSection } from '@/components/home/JoinSection'
import { JourneySection } from '@/components/home/JourneySection'
import { PartnersSection } from '@/components/home/PartnersSection'
import { ProjectsSection } from '@/components/home/ProjectsSection'
import { RolesSection } from '@/components/home/RolesSection'
import { StatsSection } from '@/components/home/StatsSection'

// 홈은 layout의 기본 metadata(title: CMC, canonical: /)를 그대로 사용한다.
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <RolesSection />
      <JourneySection />
      <ProjectsSection />
      <PartnersSection />
      <JoinSection />
    </main>
  )
}
