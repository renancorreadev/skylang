import {
  useGet_Modules_EnglishQuery,
  Get_Modules_EnglishQuery
} from '@graphql/generated'
import { ModuleUrl } from '@components/ModuleUrl'
import { useEffect, useState } from 'react'
import { ListContentWrapper } from './styles'

export const ListContentModules = () => {
  const { data, loading, error } = useGet_Modules_EnglishQuery()
  const [modules, setModules] = useState<Get_Modules_EnglishQuery>({
    modules: []
  })

  useEffect(() => {
    if (data && data.modules != undefined) {
      setModules(data)
    }
  }, [data])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <ListContentWrapper>
      {modules?.modules.map((module, index) => {
        return <ModuleUrl key={index} slug={module.slug} />
      })}
    </ListContentWrapper>
  )
}
