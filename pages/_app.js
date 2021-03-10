import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import NavSite from '../components/nav.js';
import FooterSite from '../components/footer.js';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div className="main-container">
        <NavSite />
        <Component {...pageProps} />
        <FooterSite />
    </div>
  )
}