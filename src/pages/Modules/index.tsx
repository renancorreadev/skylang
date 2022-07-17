import { ModuleContainer } from './styles'
import { Module } from '@components/Module'
import { ListContentModules } from '@components/ListContentModules'
import { useParams } from 'react-router-dom'

export function Modules() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <ModuleContainer>
      <ListContentModules />
      {slug && <Module slug={slug} />}
    </ModuleContainer>
  )
}
