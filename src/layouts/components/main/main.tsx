import { PropsWithChildren } from 'react'

import * as css from './main.module.scss'

export const Main = ({ children }: PropsWithChildren) => {
  return <main className={css.main}>{children}</main>
}
