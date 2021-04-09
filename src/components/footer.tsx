import {Container} from 'react-bootstrap'

const FooterSite = () => {
    return (
        <>
            <Container fluid className="footer bg-dark text-center text-white">
                <Container className="container p-4">
                    <section className="mb-4">
                    </section>
                </Container>
                <Container className="text-center p-3">
                    © 2021 Copyright - <a className="text-white" href="https://kauemendes.com/">kauemendes.com</a>
                </Container>
            </Container>
        </>
    )
}

export default FooterSite