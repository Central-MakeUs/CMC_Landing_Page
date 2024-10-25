import { clsx } from 'clsx'
import { Link, withPrefix } from 'gatsby'
import ReactModal from 'react-modal'

import { ApplyButton } from '@/components'

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
          key={link.name}
          to={link.path}
          className={clsx({ [css.active]: pathname === withPrefix(link.path) })}
          onClick={closeModal}
        >
          {link.name}
        </Link>
      ))}
      
      <Link className={css.apply_button} to='/apply'  onClick={closeModal}>
        지원하기
      </Link>
    </ReactModal>
  )
}
