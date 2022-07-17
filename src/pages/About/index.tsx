import CustomModal, { ModalHandles } from '@components/CustomModal'
import { useRef, useCallback } from 'react'

export function About() {
  const modalRef = useRef<ModalHandles>(null)

  const openModal = useCallback(() => {
    modalRef.current?.openModal()
  }, [])

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <CustomModal
        ref={modalRef}
        title="Teste"
        content="ODKOSKDO KKDOSK DKOS KDSO DKOKDSKOSKDO OKS"
      />
    </div>
  )
}
