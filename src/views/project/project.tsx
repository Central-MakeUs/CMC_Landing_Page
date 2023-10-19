import { FloatingButton } from '@/components'

import { Card } from './components'
import * as css from './project.module.scss'

const ProjectPage = () => {
  return (
    <main className={css.main}>
      <div className={css.background_header}>
        <h2>CMC PROJECT</h2>
        <div className={css.background_container}>
          <div className={css.background} />
        </div>
      </div>
      <nav className={css.nav}>
        {/* TODO: 여기 폴더네이밍 데이터로 가져오게? */}
        <button type="button" className={css.active}>
          전체
        </button>
        <button type="button">10</button>
        <button type="button">11</button>
        <button type="button">12</button>
        <button type="button">13</button>
      </nav>
      <div className={css.grid_container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <FloatingButton />
    </main>
  )
}

export default ProjectPage

export const Head = () => <title>CMC</title>
