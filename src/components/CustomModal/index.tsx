import {
  useState,
  useCallback,
  ForwardRefRenderFunction,
  useImperativeHandle,
  forwardRef
} from 'react'
import {
  ModalContainer,
  ModalContentWrapper,
  ModalContent,
  ModalTitle
} from './styles'
interface ModalProps {
  title: string
  content: string
}
export interface ModalHandles {
  openModal: () => void
  closeModal: () => void
}

const CustomModal: ForwardRefRenderFunction<ModalHandles, ModalProps> = (
  { title, content }: ModalProps,
  ref
) => {
  const [visible, setVisible] = useState(false)
  const openModal = useCallback(() => {
    setVisible(true)
  }, [])

  const closeModal = useCallback(() => {
    setVisible(false)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      openModal,
      closeModal
    }
  })

  if (!visible) {
    return null
  }

  return (
    <ModalContainer>
      <ModalTitle>{title}</ModalTitle>

      <ModalContentWrapper>
        <ModalContent>{content}</ModalContent>
      </ModalContentWrapper>
    </ModalContainer>
  )
}

export default forwardRef(CustomModal)
