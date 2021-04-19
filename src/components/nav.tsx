import Link from 'next/link';

import kauemendeslogo from '../assets/logokm.png'
import Container from '../styles/components/nav'

const NavSite = () => {
    return (
        <Container>
            <h1 className="navbar-logo">
              <Link href="/">
                <a className="navbar-brand">
                  <img src={kauemendeslogo} alt="kauemendes.com" width={220} />
                </a>
              </Link>
            </h1>
            <ul className="navbar-navigation">
              <li>
               <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/cv">
                  <a className="nav-link">Resume</a>
                </Link>
              </li>
              <li>
                <Link href="/socials">
                  <a className="nav-link">Socials</a>
                </Link>
              </li>
              <li>
                <Link href="/convertToBase64">
                  <a className="nav-link">BASE64</a>
                </Link>
              </li>
              <li>
                <Link href="/tempo">
                  <a className="nav-link">RENDER</a>
                </Link>
              </li>
            </ul>
        </Container>
    )
}

export default NavSite
