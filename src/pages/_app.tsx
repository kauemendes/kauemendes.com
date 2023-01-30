import React from "react"
import { type AppProps } from "next/app"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "../styles/global"
import theme, { dark } from "../styles/theme"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="main-container">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
