import { StaticImage } from 'gatsby-plugin-image'

// import GIF from '../../../../../static/img/main-mov.webp'
import * as css from './intro-section.module.scss'

export const IntroSection = () => {
  return (
    <section className={css.intro}>
      <StaticImage className={css.backgroundImg} src="../../images/main.png" alt="main" />

      <StaticImage className={css.backgroundImgMobile} src="../../images/main_mobile.png" alt="main" />
    </section>
  )
}
