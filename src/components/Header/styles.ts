import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 12rem;
`

export const Navbar = styled.nav`
  display: flex;
  gap: 0.5rem;

  a {
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme['gray-100']};
    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;
    transition: all 0.3s ease-in-out;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['blue-500']};
    }

    &.active {
      color: ${(props) => props.theme['blue-500']};
    }
  }
`
export const NavHeader = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    color: ${(props) => props.theme['gray-100']};
    border-bottom: 3px solid transparent;
    border-top: 3px solid transparent;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    padding: 0.8rem;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['blue-500']};
      margin-top: 0.3rem;
    }

    &.active {
      color: ${(props) => props.theme['blue-500']};
    }
  }
`
export const Logo = styled.img`
  width: 90px;
  height: auto;
`
