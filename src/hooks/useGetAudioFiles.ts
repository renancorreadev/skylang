import { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client'

const QUERY = gql`
  query Fetch {
    assets {
      id
      fileName
      url
      audiocontent
      phrase_en
    }
  }
`
interface AudioFileFetch {
  assets: {
    id: string
    fileName: string
    url: string
    audiocontent: string
    phrase_en: string
  }[]
}

export const useGetAudioFiles = () => {
  const [listAudioFiles, setListAudioFiles] = useState<
    AudioFileFetch | undefined
  >()
  const { data, loading } = useQuery<AudioFileFetch>(QUERY)

  useEffect(() => {
    if (!loading && data) {
      return setListAudioFiles(data)
    }
  }, [data, loading])

  return {
    listAudioFiles
  }
}
