import { ChallengerSection, IdentitySection, IntroSection } from './components'

const HomePage = () => {
  return (
    <main>
      <IntroSection />
      <IdentitySection />
      <ChallengerSection />
    </main>
  )
}

export default HomePage

export const Head = () => <title>CMC</title>
