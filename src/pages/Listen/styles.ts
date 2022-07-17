import styled from 'styled-components'

export const ListenContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

export const LogosWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3rem;
  padding: 3rem;

  & :last-child {
    width: 31%;
  }

  &:before {
    content: '';
    position: absolute;
    display: inline-block;
    width: 3px;
    height: 350px;
    background-color: ${(props) => props.theme['blue-300']};
    opacity: 0.2;
    transform: translateX(30px);
  }
`
export const LogoLanguage = styled.img`
  width: 400px;
`
