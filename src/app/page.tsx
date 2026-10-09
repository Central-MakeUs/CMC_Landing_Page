import { AboutSection } from '@/components/home/AboutSection'
import { HeroSection } from '@/components/home/HeroSection'
import { JoinSection } from '@/components/home/JoinSection'
import { JourneySection } from '@/components/home/JourneySection'
import { PartnersSection } from '@/components/home/PartnersSection'
import { ProjectsSection } from '@/components/home/ProjectsSection'
import { RolesSection } from '@/components/home/RolesSection'
import { StatsSection } from '@/components/home/StatsSection'
import { createPageMetadata } from '@/lib/metadata'
import { ROUTES, SITE_DESCRIPTION } from '@/lib/site'

export const metadata = createPageMetadata({
  title: '수익형 앱을 출시하는 IT 연합동아리',
  description: SITE_DESCRIPTION,
  path: ROUTES.home,
})

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
