import { HeaderContainer, Navbar, NavHeader, Logo } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Logo src="https://i.im.ge/2022/07/11/uvy6zM.png" />
      <NavHeader>
        <NavLink to="/practic" title="Timer">
          <span>Practic</span>
        </NavLink>
        <NavLink to="/englishmodular" title="Timer">
          <span>Modules English</span>
        </NavLink>
        <NavLink to="/listen" title="Timer">
          <span>Listen</span>
        </NavLink>
      </NavHeader>

      <Navbar>
        <NavLink to="/" title="Timer">
          <Timer size={35} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={35} />
        </NavLink>
      </Navbar>
    </HeaderContainer>
  )
}
