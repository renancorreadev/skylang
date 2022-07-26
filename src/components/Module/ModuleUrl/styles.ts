import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const ModuleLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const ModuleLink = styled(NavLink)`
  font-size: 0.8rem;
  padding: 1rem;
  background-color: ${(props) => props.theme['blue-700']};
  margin: 0 0.3rem;

  color: ${(props) => props.theme['gray-300']};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme['blue-300']};
    color: ${(props) => props.theme['gray-700']};
  }

  &.active {
    border: 2px solid ${(props) => props.theme['blue-300']};
  }
`
