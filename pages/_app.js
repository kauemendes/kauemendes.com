import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import NavSite from '../components/nav.js'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
        <NavSite />
        <Component {...pageProps} />
    </div>
  )
}