import { StaticImage } from 'gatsby-plugin-image'

import { AuraCircle } from '@/components'

import * as css from './intro-section.module.scss'

export const IntroSection = () => {
  return (
    <section className={css.intro}>

      <div className={css.light}>
        <StaticImage src="../../images/light-main.png" alt="CMC" className={css.light_main} />
        <StaticImage src="../../images/light-four.png" alt="CMC" className={css.light_four} />
        <StaticImage src="../../images/light-eight.png" alt="CMC" className={css.light_eight} />
        <StaticImage src="../../images/light-two.png" alt="CMC" className={css.light_two} />
      </div>

    </section>
  )
}
