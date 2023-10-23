import clsx from 'clsx'
import { Link, withPrefix } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Star from '@/images/star.svg'

import { Modal } from './components'
import * as css from './header.module.scss'
import { useModal } from './hooks'
import Hamburger from './images/hamburger.svg'

type Props = {
  pathname: string
}

export const Header = ({ pathname }: Props) => {
  const { isOpen, toggleModal, closeModal } = useModal()
  return (
    <header className={css.header}>
      <h1 className={css.heading_logo}>
        <Link to="/">
          <StaticImage src="../../../images/favicon.png" alt="CMC" className={css.logo} />
        </Link>
      </h1>
      <div className={css.flexible_space}>
        <span />
        <div className={css.star_container}>
          <span />
          <Star />
        </div>
      </div>
      <nav className={css.nav}>
        <Link to="/" className={clsx({ [css.active]: pathname === withPrefix('/') })}>
          About
        </Link>
        <Link to="/project/" className={clsx({ [css.active]: pathname === withPrefix('/project/') })}>
          Project
        </Link>
        <a href="https://forms.gle/dMehpCFYYSJYUB1U9" className={css.apply_button}>
          지원하기
        </a>
      </nav>
      <button type="button" onClick={toggleModal} className={css.menu_button}>
        <Hamburger />
      </button>
      <Modal isOpen={isOpen} pathname={pathname} closeModal={closeModal} />
    </header>
  )
}
