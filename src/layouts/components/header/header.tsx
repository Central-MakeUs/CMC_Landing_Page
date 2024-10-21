import clsx from 'clsx'
import { Link, withPrefix } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { ApplyButton } from '@/components'

import { Modal } from './components'
import { Links } from './constant'
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
      <div className={css.header_container}>
        <h1 className={css.heading_logo}>
          <Link to="/">
            <StaticImage src="../../../images/favicon.png" alt="CMC" className={css.logo} placeholder="blurred" />
          </Link>
        </h1>
        {/* <div className={css.flexible_space}>
          <span />
        </div> */}
        <nav className={css.nav} style={{ gap: '54px' }}>
          {Links.map((link) => (
            <Link key={link.name} to={link.path} className={clsx({ [css.active]: pathname === withPrefix(link.path) })}>
              {link.name}
            </Link>
          ))}
        </nav>
        <nav className={css.nav}>
          <ApplyButton availableDisabled className={css.apply_button}>
            지원하기
          </ApplyButton>
        </nav>
        <button type="button" onClick={toggleModal} className={css.menu_button}>
          <Hamburger />
        </button>
        <Modal isOpen={isOpen} pathname={pathname} closeModal={closeModal} />
      </div>
    </header>
  )
}
