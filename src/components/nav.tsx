import {Navbar, Nav, NavDropdown, Row, Col} from 'react-bootstrap'
import Link from 'next/link';

import kauemendeslogo from '../assets/logokm.png'

function NavSite() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Navbar.Brand>
                <Link href="/">
                    <a className="navbar-brand">
                        <img src={kauemendeslogo} alt="kauemendes.com" width={120} />
                    </a>
                </Link>
            </Navbar.Brand>
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
                            <Link href="/socials">
                                <a className="nav-link">Socials</a>
                            </Link>
                        </Col>
                        <Col>
                            <NavDropdown title="Tools" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link href="/convertToBase64">
                                        <a className="dropdown-item">Convert Base64</a>
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                     <Link href="/tempo">
                                        <a className="dropdown-item">Test Render</a>
                                    </Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item>Nice Tool</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Find Me</NavDropdown.Item>
                            </NavDropdown>
                        </Col>
                    </Row>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavSite