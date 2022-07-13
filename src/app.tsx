/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@styles/themes/default'
import { GlobalStyle } from '@styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '@routes/Router'
import { ApolloProvider } from '@apollo/client'
import { client } from '@lib/apollo'

export function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  )
}
