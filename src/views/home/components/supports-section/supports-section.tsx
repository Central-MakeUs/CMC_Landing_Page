import { StaticImage } from 'gatsby-plugin-image'

import { Section } from '../../../../components/section'
import * as css from './supports-section.module.scss'

export const SupportsSection = () => {
  return (
    <Section>
      <div className={css.space} />

      <Section.Head title="Supports" />

      <div className={css.supports}>
        <StaticImage src="./images/kaist.png" alt="kaist" className={css.supports_company} />
        <StaticImage src="./images/soft-squared.png" alt="soft squared" className={css.supports_company} />
        <StaticImage src="./images/d-camp.png" alt="d camp" className={css.supports_company} />
        <StaticImage src="./images/gridge.png" alt="gridge" className={css.supports_company} />
      </div>
    </Section>
  )
}
