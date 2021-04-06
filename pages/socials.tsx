import {Row, Col, Container} from 'react-bootstrap'
import { TitleSocial } from '../components'
import Link from 'next/link';

function Socials() {
    return (
        <>
            <Container className="socials">
                <Row>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <TitleSocial>Social Links</TitleSocial>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a className="btn btn-outline-secondary btn-block btn-lg" href="https://www.linkedin.com/in/kauemendes/" >LinkeDin</a>
                        <a className="btn btn-outline-primary btn-block btn-lg" href="https://facebook.com/kauemendes" >Facebook</a>
                        <a className="btn btn-outline-success btn-block btn-lg" href="https://gitHub.com/kauemendes" >GitHub</a>
                        <a className="btn btn-outline-danger btn-block btn-lg" href="https://instagram.com/kauemendes" >Instagram</a>
                        <a className="btn btn-outline-warning btn-block btn-lg" href="https://noticias.uol.com.br/colunas/camilo-vannuchi/2021/03/18/bolsonaro-pode-ser-chamado-de-genocida.htm" >Last News</a>
                        <Link href="/">
                            <a className="btn btn-outline-warning btn-block btn-lg">Site KAUEMENDES.COM</a>
                        </Link>
                    </Col>
                </Row>
            </Container>        
        </>
    )
}

export default Socials;