import clsx from 'clsx'

import { useScrollIndicator } from './hooks'
import BottomArrow from './images/bottom-arrow.svg'
import * as css from './scroll-indicator.module.scss'

export const ScrollIndicator = () => {
  const { isVisible } = useScrollIndicator()

  return (
    <div className={clsx(css.arrow, { [css.visible]: isVisible })}>
      <BottomArrow />
    </div>
  )
}
