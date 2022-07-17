import {
  useState,
  useCallback,
  ForwardRefRenderFunction,
  useImperativeHandle,
  forwardRef
} from 'react'

interface ModalProps {
  title: string
  content: string
}
export interface ModalHandles {
  openModal: () => void
}

const CustomModal: ForwardRefRenderFunction<ModalHandles, ModalProps> = (
  { title, content }: ModalProps,
  ref
) => {
  const [visible, setVisible] = useState(true)
  const openModal = useCallback(() => {
    setVisible(true)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      openModal
    }
  })

  const handleCloseModal = useCallback(() => {
    setVisible(false)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <div>
      <h1>{title}</h1>

      <div>
        <p>{content}</p>
      </div>

      <button onClick={handleCloseModal}>Fechar Modal</button>
    </div>
  )
}

export default forwardRef(CustomModal)
