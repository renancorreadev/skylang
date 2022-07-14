import { useState, useEffect } from 'react'
import { FetchQuery, useFetchQuery } from '@graphql/generated'

type Fetch = FetchQuery['assets']

export const useFetchAudio = () => {
  const { data: assets, loading } = useFetchQuery({ fetchPolicy: 'no-cache' })
  const [listAudioFiles, setListAudioFiles] = useState<Fetch>([])

  useEffect(() => {
    if (assets && !loading) {
      setListAudioFiles(assets?.assets)
    }
  }, [assets, loading])

  return { listAudioFiles }
}
