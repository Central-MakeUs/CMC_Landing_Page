import type { PageProps } from 'gatsby'
import type { ReactNode } from 'react'

import { Footer, Header } from './components'

type Props = {
  children: ReactNode
}

export const Layout = ({ location, children }: Omit<PageProps, 'children'> & Props) => {
  return (
    <>
      <Header pathname={location.pathname} />
      {children}
      <Footer />
    </>
  )
}
