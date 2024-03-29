import styled from 'styled-components'

type ContainerType = {
  isVisible?: boolean
  isShowingFrontFace?: boolean
  disabled?: boolean
}

export const Container = styled.div<ContainerType>`
  /* width: calc(100vw / (32 / 5));
  height: calc(100vh / 6);
  font-size: 12rem; */
  border-radius: 10px;
  margin: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.1s ease-in-out;

  opacity: ${({ isVisible }): string => (isVisible ? '1' : '0')};

  pointer-events: ${({ isVisible, disabled }): string => {
    if (disabled || !isVisible) return 'none'
    return 'all'
  }};

  color: pink;

  background: ${(props) => props.theme['blue-600']};

  &:hover {
    background: ${(props) => props.theme['blue-300']};
  }

  /* transform-style: preserve-3d;
  perspective: 1000px;
  &:active {
    transform: rotateY(180deg);
  } */
`
