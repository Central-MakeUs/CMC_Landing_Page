import { PropsWithChildren } from 'react'

import * as css from './button.module.scss'

export const Button = ({ children }: PropsWithChildren) => {
  return (
    <button type="button" className={css.button}>
      {children}
    </button>
  )
}
