import Image from "next/image";

import { Container, Col, Row } from "./index";
import logokm from "../../public/img/logokm.png";

const FooterSite = () => {
  return (
    <>
      <Container className="footer bg-dark text-center text-white">
        <Col>
          <Row className="text-center">
            <p>
              <a className="navbar-brand">
                <Image
                  src={logokm}
                  alt="kauemendes.com"
                  layout="fixed"
                  width={120}
                  height={20}
                  placeholder="blur"
                  blurDataURL={logokm}
                />
              </a>
            </p>
            <p></p>
            <p>
              © 2022 Copyright -{" "}
              <a className="text-white" href="https://kauemendes.com/">
                kauemendes.com
              </a>
            </p>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default FooterSite;
