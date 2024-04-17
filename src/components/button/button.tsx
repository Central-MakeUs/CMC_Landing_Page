import { PropsWithChildren } from 'react'

import * as css from './button.module.scss'

export const Button = ({ children }: PropsWithChildren) => {
  return (
    <a href="https://forms.gle/LWfsozJbsrhkpyCr5" target="_blank" rel="noreferrer" className={css.button}>
      {children}
    </a>
  )
}
