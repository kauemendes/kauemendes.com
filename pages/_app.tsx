import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import { NavSite, FooterSite } from '../components';
import Head from "next/head"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
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