import CustomModal, { ModalHandles } from '@components/CustomModal'
import { useRef, useCallback, useState } from 'react'
import { Container, ModalButton } from './styles'

export function About() {
  const modalRef = useRef<ModalHandles>(null)

  const [isOpen, setIsOpen] = useState(true)

  const openModal = useCallback(() => {
    modalRef.current?.openModal()
  }, [])

  const closeModal = useCallback(() => {
    modalRef.current?.closeModal()
  }, [])

  const handleOpenOrCloseModal = () => {
    if (isOpen) {
      openModal()
      setIsOpen(false)
    } else {
      closeModal()
      setIsOpen(true)
    }
  }

  console.log(isOpen)

  return (
    <>
      <Container>
        <ModalButton onClick={handleOpenOrCloseModal}>
          <span>{isOpen ? 'Ver Mais' : 'Ocultar'}</span>
        </ModalButton>
        <CustomModal
          ref={modalRef}
          title="A Importância do Inglês"
          content="A Importância do Inglês no dia a dia é inegável, pois vivemos um mundo globalizado. Nesse contexto, o Inglês se tornou a ponte de comunicação entre os países. Ele é a língua internacional dos estudos, viagens, negócios, lazer e outros serviços! Você pode torná-lo o seu maior aliado na realização de sonhos pessoais e profissionais."
        />
      </Container>
    </>
  )
}
