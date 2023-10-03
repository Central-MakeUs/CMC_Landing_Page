import clsx from 'clsx'
import { Link } from 'gatsby'

import { Modal } from './components'
import * as css from './header.module.scss'
import { useModal } from './hooks'
import CMCLogo from './images/cmc-logo.svg'
import Hamburger from './images/hamburger.svg'
import Star from './images/star.svg'

type Props = {
  pathname: string
}

export const Header = ({ pathname }: Props) => {
  const { isOpen, toggleModal } = useModal()
  return (
    <header className={css.header}>
      <h1 className={css.heading_logo}>
        <Link to="/">
          <CMCLogo />
        </Link>
      </h1>
      <div className={css.flexible_space}>
        <span />
        <Star className={css.star} />
      </div>
      <nav className={css.nav}>
        <Link to="/" className={clsx({ [css.active]: pathname === '/' })}>
          About
        </Link>
        <Link to="/project" className={clsx({ [css.active]: pathname === '/project' })}>
          Project
        </Link>
        <a href="https://www.makeus.in/cmc" className={css.apply_button}>
          지원하기
        </a>
      </nav>
      <button type="button" onClick={toggleModal} className={css.menu_button}>
        <Hamburger />
      </button>
      <Modal isOpen={isOpen} pathname={pathname} />
    </header>
  )
}
