import type { PageProps } from 'gatsby'
import type { ReactNode } from 'react'
import Modal from 'react-modal'

import { FloatingButton } from '@/components'

import { Footer, Header } from './components'

type Props = {
  children: ReactNode
}

Modal.setAppElement('#___gatsby')

export const Layout = ({ location, children }: Omit<PageProps, 'children'> & Props) => {
  return (
    <>
      <Header pathname={location.pathname} />
      {children}
      <FloatingButton />
      <Footer />
    </>
  )
}
