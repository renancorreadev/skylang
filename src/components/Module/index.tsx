import {
  WrapperContainer,
  Title,
  ModuleDescription,
  ExamplesContainer,
  ExplanationContainer,
  ContainerLogo,
  Logo
} from './styles'
import { useGet_Modules_By_SlugQuery } from '@graphql/generated'

interface ModuleProps {
  slug: string
}
//Module = Video
export function Module({ slug }: ModuleProps) {
  const { data } = useGet_Modules_By_SlugQuery({
    variables: {
      slug: slug
    },
    fetchPolicy: 'no-cache'
  })

  if (!data || !data.module) {
    return (
      <ContainerLogo>
        <Logo src="https://i.im.ge/2022/07/11/uvy6zM.png" />
      </ContainerLogo>
    )
  }

  if (data && data.module != undefined) {
    console.log(data.module)
  }

  return (
    <WrapperContainer>
      <Title>{data.module.title} </Title>

      <ModuleDescription>{data.module.description}</ModuleDescription>

      <h2>Examples</h2>
      <ExamplesContainer>
        {data.module.exemplos.map((example) => {
          return <p key={example}>{example}</p>
        })}
      </ExamplesContainer>

      <ExplanationContainer>
        {data.module.tip_en.map((tip) => {
          return <p key={tip}>{tip}</p>
        })}
      </ExplanationContainer>

      <ExplanationContainer>
        {data.module.tipBr.map((tip) => {
          return <p key={tip}>{tip}</p>
        })}
      </ExplanationContainer>
    </WrapperContainer>
  )
}
