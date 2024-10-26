import { StaticImage } from 'gatsby-plugin-image'
import Video from '../../images/main.mp4'

import * as css from './intro-section.module.scss'

export const IntroSection = () => {
  return (
    <section className={css.intro}>

      <div className={css.background_gradient} />

      <div className={css.title}>
        <h1>CENTRAL</h1>
        <h1>
          <StaticImage src="../../images/char-M.png" alt="M" className={css.char_m} />
          AKEUS
        </h1>
        <h1>CHALLENGE</h1>
      </div>

      <div className={css.light}>
        <video
          muted
          autoPlay
          loop
          className={css.main_video}
          >
          <source src={Video} type='video/mp4' />
        </video>

        <StaticImage src="../../images/light-eight.png" alt="CMC" className={css.light_eight_left} />
        <StaticImage src="../../images/light-eight.png" alt="CMC" className={css.light_eight_right} />
        <StaticImage src="../../images/light-four.png" alt="CMC" className={css.light_four_left} />
        <StaticImage src="../../images/light-four.png" alt="CMC" className={css.light_four_right} />
        <StaticImage src="../../images/light-four.png" alt="CMC" className={css.light_two_left} />
        <StaticImage src="../../images/light-four.png" alt="CMC" className={css.light_two_right} />
        {/* <StaticImage src="../../images/light-two.png" alt="CMC" className={css.light_two} /> */}
      </div>

        <ul className={css.index}>
          <li><span>01</span>PARTICIPATION</li>
          <div className={css.line} />
          <li><span>02</span>PM & PLANNER</li>
          <li><span>03</span>DESIGNER</li>
          <li><span>04</span>DEVELOPER</li>
        </ul>

    </section>
  )
}
