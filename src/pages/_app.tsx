import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { NavSite, FooterSite } from '../../components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="main-container">
          <NavSite />
          <Component {...pageProps} />
          <FooterSite />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
