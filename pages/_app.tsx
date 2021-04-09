import React from 'react'
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css';
import { NavSite, FooterSite } from '../components'
import Head from "next/head"

// This default export is required in a new `pages/_app.js` file.
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Kaue Mendes Helm's</title>
      </Head>
      <div className="main-container">
          <NavSite />
          <Component {...pageProps} />
          <FooterSite />
      </div>
    </>
  )
}

export default MyApp