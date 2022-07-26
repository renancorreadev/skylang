import {
  WrapperContainer,
  Title,
  ModuleDescription,
  ExamplesContainer,
  Example,
  ExplanationContainer,
  ContainerLogo,
  Logo,
  ExplanationWrapper,
  Explanation,
  ExamplesWrapper,
  BonusContent
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

  return (
    <WrapperContainer>
      <Title>{data.module.title} </Title>

      <ModuleDescription>{data.module.description}</ModuleDescription>

      <h2>Examples</h2>
      <ExamplesContainer>
        {data.module.exemplos.map((example, index) => {
          return (
            <ExamplesWrapper key={index}>
              <Example key={example}>{example}</Example>
            </ExamplesWrapper>
          )
        })}
      </ExamplesContainer>

      <BonusContent>
        <ExplanationContainer>
          {data.module.tip_en.map((tip) => {
            return (
              <ExplanationWrapper key={tip}>
                <Explanation key={tip}>{tip}</Explanation>
              </ExplanationWrapper>
            )
          })}
        </ExplanationContainer>

        <ExplanationContainer>
          {data.module.tipBr.map((tip) => {
            return (
              <ExplanationWrapper key={tip}>
                <Explanation key={tip}>{tip}</Explanation>
              </ExplanationWrapper>
            )
          })}
        </ExplanationContainer>
      </BonusContent>
    </WrapperContainer>
  )
}
