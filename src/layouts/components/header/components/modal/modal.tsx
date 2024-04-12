import { clsx } from 'clsx'
import { Link, withPrefix } from 'gatsby'
import ReactModal from 'react-modal'

import { Links } from '../../constant'
import * as css from './modal.module.scss'

type ModalProps = {
  isOpen: boolean
  pathname: string
  closeModal: () => void
}

export const Modal = ({ isOpen, pathname, closeModal }: ModalProps) => {
  return (
    <ReactModal isOpen={isOpen} className={css.modal} overlayClassName={css.overlay}>
      {Links.map((link) => (
        <Link
          to={link.path}
          className={clsx({ [css.active]: pathname === withPrefix(link.path) })}
          onClick={closeModal}
        >
          {link.name}
        </Link>
      ))}
      <a href="https://forms.gle/LWfsozJbsrhkpyCr5" className={css.apply_button} onClick={closeModal}>
        <span>지원하기</span>
      </a>
    </ReactModal>
  )
}
