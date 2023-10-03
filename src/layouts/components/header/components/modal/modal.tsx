import { clsx } from 'clsx'
import { Link } from 'gatsby'
import ReactModal from 'react-modal'

import * as css from './modal.module.scss'

type ModalProps = {
  isOpen: boolean
  pathname: string
  closeModal: () => void
}

export const Modal = ({ isOpen, pathname, closeModal }: ModalProps) => {
  return (
    <ReactModal isOpen={isOpen} className={css.modal} overlayClassName={css.overlay}>
      <Link to="/" className={clsx({ [css.active]: pathname === '/' })} onClick={closeModal}>
        About
      </Link>
      <Link to="/project/" className={clsx({ [css.active]: pathname === '/project/' })} onClick={closeModal}>
        Project
      </Link>
      {/* TODO: URL 링크 변경 */}
      <a href="https://www.makeus.in/cmc" className={css.apply_button} onClick={closeModal}>
        <span>지원하기</span>
      </a>
    </ReactModal>
  )
}
