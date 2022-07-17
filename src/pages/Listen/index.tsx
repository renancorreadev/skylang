import { ListenAudio } from '@components/ListenAudio'
import { ListenContainer, LogoLanguage, LogosWrapper } from './styles'
import LogoEn from '@assets/english.png'
import LogoPt from '@assets/pt_br.png'

export function Listen() {
  return (
    <ListenContainer>
      <LogosWrapper>
        <LogoLanguage src={LogoEn} />
        <LogoLanguage src={LogoPt} />
      </LogosWrapper>
      <ListenAudio />
    </ListenContainer>
  )
}
