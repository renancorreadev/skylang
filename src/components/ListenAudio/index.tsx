import { useFetchAudio } from '@hooks'

export function ListenAudio() {
  const { listAudioFiles } = useFetchAudio()

  const json = JSON.stringify(listAudioFiles, null, 2)
  return <pre>{json}</pre>
}
