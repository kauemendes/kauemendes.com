import Link from 'next/link';

import kauemendeslogo from '../assets/logokm.png'
import { Container, Row, Col } from './styleguid';

const NavSite = () => {
    return (
        <Container>
            <Col className="navbar-logo">
              <Link href="/">
                <a className="navbar-brand">
                  <img src={kauemendeslogo} alt="kauemendes.com" width={120} />
                </a>
              </Link>
            </Col>
            <Col className="navbar-menuitens">
                <Row>
                  <Col>
                    <Link href="/">
                      <a className="nav-link">Home</a>
                    </Link>
                  </Col>
                  <Col>
                    <Link href="/cv">
                      <a className="nav-link">Resume</a>
                    </Link>
                  </Col>
                  <Col>
                    <Link href="/socials">
                      <a className="nav-link">Socials</a>
                    </Link>
                  </Col>
                  <Col>
                    <Link href="/convertToBase64">
                      <a className="dropdown-item">Convert Base64</a>
                    </Link>
                  </Col>
                  <Col>
                    <Link href="/tempo">
                      <a className="dropdown-item">Test Render</a>
                    </Link>
                  </Col>
                </Row>
            </Col>
        </Container>
    )
}

export default NavSite
