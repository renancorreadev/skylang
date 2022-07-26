import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  background: ${(props) => props.theme['blue-700']};
  padding: 3rem;
  border-radius: 25px;
  margin-top: 4rem;
  transition: all 0.6s ease-in-out;
`
export const ModalTitle = styled.h2`
  color: ${(props) => props.theme['green-300']};
  margin-bottom: 1rem;
  transition: all 0.6s ease-in-out;
`
export const ModalContentWrapper = styled.div`
  display: flex;
  max-width: 600px;
`
export const ModalContent = styled.p`
  color: ${(props) => props.theme['gray-300']};
`
