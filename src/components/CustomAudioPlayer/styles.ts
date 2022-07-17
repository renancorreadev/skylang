import styled from 'styled-components'

/* Containers Styles  */
export const AudioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`
export const FirstContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const SecoundColum = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export const AudioPayer = styled.audio``

const ButtonLayout = styled.button`
  background: none;
  color: ${(props) => props.theme['blue-300']};
  border: none;
  display: flex;
  align-items: center;
  font-family: monospace;
  cursor: pointer;
  margin: 0 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme['blue-300']};
  }
`
export const ButtonBack = styled(ButtonLayout)``
export const ButtonForward = styled(ButtonLayout)``
export const ButtonPlay = styled(ButtonLayout)`
  background: ${(props) => props.theme['blue-600']};
  border-radius: 50%;
  padding: 0.5rem;
`

export const CurrentTime = styled.div`
  font-family: monospace;
  font-size: 1rem;
  margin-left: 1rem;
`
export const Duration = styled.div``

/* Progress Bar  */
export const ProgressBarContainer = styled.div``
export const ProgressBar = styled.input`
  //variables
  --bar-bg: #ffe3d4;
  --seek-before-width: 0;
  --seek-before-color: #ffc2a1;
  --knobby: #3452a5;
  --selectedKnobby: #26c9c3;

  appearance: none;
  background: ${(props) => props.theme['blue-600']};
  border-radius: 10px;
  width: 100%;
  outline: none;

  /* progress bar - safari */
  &::-webkit-slider-runnable-track {
    background: var(--bar-bg);
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 11px;
    outline: none;
  }

  /* progress bar - firefox */
  &::-moz-range-track {
    background: var(--bar-bg);
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 11px;
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  /* progress bar - chrome and safari */
  &::before {
    content: '';
    height: 11px;
    width: var(--seek-before-width);
    background-color: var(--seek-before-color);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
  }

  /* progress bar - firefox */
  &::-moz-range-progress {
    background-color: var(--seek-before-color);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 11px;
  }

  /* knobby - chrome and safari */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: none;
    background-color: var(--knobby);
    cursor: pointer;
    position: relative;
    margin: -2px 0 0 0;
    z-index: 3;
    box-sizing: border-box;
  }

  /* knobby while dragging - chrome and safari */
  &:active::-webkit-slider-thumb {
    transform: scale(1.2);
    background: var(--selectedKnobby);
  }

  /* knobby - firefox */
  &::-moz-range-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: transparent;
    background-color: var(--knobby);
    cursor: pointer;
    position: relative;
    z-index: 3;
    box-sizing: border-box;
  }

  /* knobby while dragging - firefox */
  &:active::-moz-range-thumb {
    transform: scale(1.2);
    background: var(--selectedKnobby);
  }
`
