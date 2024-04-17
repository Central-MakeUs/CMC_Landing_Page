import clsx from 'clsx'

import { useScrollIndicator } from './hooks'
import BottomArrow from './images/bottom-arrow.svg'
import * as css from './scroll-indicator.module.scss'

interface Props {
  onClick: () => void
}

export const ScrollIndicator = ({ onClick }: Props) => {
  const { isVisible } = useScrollIndicator()

  return (
    <button type="button" className={clsx(css.arrow, { [css.visible]: isVisible })} onClick={onClick}>
      <BottomArrow />
    </button>
  )
}
