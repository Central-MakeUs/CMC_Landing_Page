import { Link } from 'gatsby'

import { Modal } from './components'
import * as css from './header.module.scss'
import { useModal } from './hooks'
import CMCLogo from './images/cmc-logo.svg'
import Hamburger from './images/hamburger.svg'

type Props = {
  pathname: string
}

export const Header = ({ pathname }: Props) => {
  const { isOpen, toggleModal } = useModal()
  console.log(isOpen)
  return (
    <header className={css.header}>
      <Link to="/">
        <CMCLogo />
      </Link>
      <button type="button" onClick={toggleModal} className={css.menu_button}>
        <Hamburger />
      </button>
      <Modal isOpen={isOpen} pathname={pathname} />
    </header>
  )
}
