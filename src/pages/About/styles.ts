import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const ModalButton = styled.button`
  background: ${(props) => props.theme['blue-700']};
  padding: 0.5rem;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  span {
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    font-size: 1.3rem;
  }
`
