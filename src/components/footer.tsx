import { Container, Col, Row } from './index'

import kauemendeslogo from '../assets/logokm.png'

const FooterSite = () => {
    return (
        <>
            <Container className="footer bg-dark text-center text-white">
              <Col>
                <Row className="text-center">
                  <p>
                    <a className="navbar-brand">
                      <img src={kauemendeslogo} alt="kauemendes.com" width={120} />
                    </a>
                  </p>
                  <p></p>
                  <p>© 2021 Copyright - <a className="text-white" href="https://kauemendes.com/">kauemendes.com</a></p>
                </Row>
              </Col>
            </Container>
        </>
    )
}

export default FooterSite
