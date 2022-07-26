import { useParams } from 'react-router-dom'
import { ModuleLinkWrapper, ModuleLink } from './styles'

interface ModuleURLProps {
  slug: string
}

export const ModuleUrl = (props: ModuleURLProps) => {
  const { slug } = useParams<{ slug: string }>()

  const isActiveModule = slug === props.slug

  if (isActiveModule) {
    console.log('Lesson aplicada: ' + slug)
  }

  return (
    <ModuleLinkWrapper>
      <ModuleLink to={`/modules/${props.slug}`}>{props.slug}</ModuleLink>
    </ModuleLinkWrapper>
  )
}
