import { clsx } from 'clsx'
import { Link } from 'gatsby'
import ReactModal from 'react-modal'

import * as css from './modal.module.scss'

type ModalProps = {
  isOpen: boolean
  pathname: string
}

export const Modal = ({ isOpen, pathname }: ModalProps) => {
  return (
    <ReactModal isOpen={isOpen} className={css.modal} overlayClassName={css.overlay}>
      <Link to="/" className={clsx({ [css.active]: pathname === '/' })}>
        About
      </Link>
      <Link to="/project" className={clsx({ [css.active]: pathname === '/project' })}>
        Project
      </Link>
      <a href="https://www.makeus.in/cmc" className={css.apply_button}>
        <span>지원하기</span>
      </a>
    </ReactModal>
  )
}
