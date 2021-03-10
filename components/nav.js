import {Navbar, Nav, Row, Col} from 'react-bootstrap'
import Link from 'next/link';

function NavSite() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Navbar.Brand href="#home">kauemendes.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
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
                            <Link href="/convertToBase64">
                                <a className="nav-link">Convert Base64</a>
                            </Link>
                        </Col>
                    </Row>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavSite