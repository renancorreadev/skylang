import { gql } from '@apollo/client'

export const GET_AUDIO_FILES = gql`
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
