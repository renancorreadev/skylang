import styled from 'styled-components'

export const WrapperContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  h2 {
    text-align: center;
    margin: 2rem 2rem 4rem 2rem;
  }
`

export const Title = styled.h2`
  text-align: center;
  color: ${(props) => props.theme['blue-300']};
  font-size: 2rem;
`

export const ModuleDescription = styled.p`
  text-align: start;
  color: ${(props) => props.theme['gray-300']};
  font-size: 1rem;
  padding: 0.5rem;
  letter-spacing: 1px;
  margin-bottom: 2rem;
`

export const ExamplesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  text-align: center;
`

export const ExamplesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Example = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme['gray-300']};
`

export const Emphasis = styled.strong`
  color: ${(props) => props.theme['blue-300']};
`

export const ExplanationContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const ExplanationWrapper = styled.div`
  display: flex;
  align-items: baseline;
`

export const Explanation = styled.span`
  text-transform: uppercase;
  font-size: 1.5rem;
  writing-mode: vertical-rl;
  text-orientation: upright;
  padding: 0.5rem;
  margin: 5rem 0;
  font-weight: bold;
  color: ${(props) => props.theme['red-500']};
`
export const ContainerLogo = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`
export const Logo = styled.img`
  width: 100px;
  height: 100px;
  margin: 0.5rem;
`

export const BonusContent = styled.div`
  display: flex;
  justify-content: space-around;
`
