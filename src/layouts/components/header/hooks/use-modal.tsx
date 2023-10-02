import { useCallback, useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return { isOpen, toggleModal }
}
