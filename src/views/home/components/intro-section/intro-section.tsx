import { StaticImage } from 'gatsby-plugin-image'

import { AuraCircle } from '@/components'

import * as css from './intro-section.module.scss'

export const IntroSection = () => {
  return (
    <section className={css.intro}>
      <StaticImage src="../../images/desktop-main.png" alt="CMC" className={css.desktop_main} />
      <StaticImage src="../../images/mobile-main.png" alt="CMC" className={css.mobile_main} />

      <div className={css.light}>
        <StaticImage src="../../images/light-main.png" alt="CMC" className={css.light_main} />
        <StaticImage src="../../images/light-four.png" alt="CMC" className={css.light_four} />
        <StaticImage src="../../images/light-eight.png" alt="CMC" className={css.light_eight} />
        <StaticImage src="../../images/light-two.png" alt="CMC" className={css.light_two} />
      </div>

      <div className={css.desktop_aura}>
        <AuraCircle size="14%" top="10%" left="0%" opacity={0.2} />
        <AuraCircle size="50%" top="12%" left="18%" />
        <AuraCircle size="20%" top="46%" left="68%" />
        <AuraCircle size="9%" top="64%" left="88%" opacity={0.2} />
      </div>

      <div className={css.mobile_aura}>
        <AuraCircle size="400px" top="30%" left="calc(50% - 200px)" />
      </div>
    </section>
  )
}
