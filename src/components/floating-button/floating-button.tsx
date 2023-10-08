import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'

import * as css from './floating-button.module.scss'
import { useFloatingButton } from './hooks'

export const FloatingButton = () => {
  const { isVisible, scrollToTop } = useFloatingButton()
  return (
    <button type="button" onClick={scrollToTop} className={clsx(css.button, { [css.visible]: isVisible })}>
      <StaticImage src="./images/top-button.png" alt="위를 가리키는 흰색 화살표" />
    </button>
  )
}
