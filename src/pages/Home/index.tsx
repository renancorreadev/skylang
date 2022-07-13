import { Container } from './styles'
import { useGetAudioFiles } from '@hooks'

export function Home() {
  const { listAudioFiles } = useGetAudioFiles()

  console.log(listAudioFiles)
  return <Container></Container>
}
