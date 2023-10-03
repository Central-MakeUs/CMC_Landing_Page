import { useCallback, useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])
  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])
  return { isOpen, toggleModal, closeModal }
}
