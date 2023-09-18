import type { HeadFC, PageProps } from 'gatsby'

const HomePage: React.FC<PageProps> = () => {
  return <main>홈</main>
}

export default HomePage

export const Head: HeadFC = () => <title>CMC</title>
