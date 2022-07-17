import { useState, useEffect } from 'react'
import {
  useGet_Audio_FilesQuery,
  Get_Audio_FilesQuery
} from '@graphql/generated'

type Fetch = Get_Audio_FilesQuery['assets']

export const useFetchAudio = () => {
  const { data: assets, loading } = useGet_Audio_FilesQuery({
    fetchPolicy: 'no-cache'
  })
  const [listAudioFiles, setListAudioFiles] = useState<Fetch>([])
  const [url, setUrl] = useState<string[]>([])

  useEffect(() => {
    if (assets && !loading) {
      assets.assets.map((asset) => {
        setUrl((prev) => [...prev, asset.url])
      })
      setListAudioFiles(assets?.assets)
    }
  }, [assets, loading])

  return { listAudioFiles, url }
}
