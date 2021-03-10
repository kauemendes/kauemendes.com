import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap'

function Home() {
    return (
        <>
            <Container fluid>
            </Container>
            <Jumbotron fluid>
                <Container>
                    <h1>48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21</h1>
                    <p>
                        This website was entired build on Next.js and React
                        technology. Please feel free to see how fast this is.
                    </p>
                    <p>
                        <Button variant="primary">Checkout Resume</Button>
                    </p>
                </Container>
            </Jumbotron>
            <Jumbotron fluid  className="section2">
                <Container>
                    <h1>48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21</h1>
                    <p>
                        This website was entired build on Next.js and React
                        technology. Please feel free to see how fast this is.
                    </p>
                    <p>
                        <Button variant="primary">Checkout Resume</Button>
                    </p>
                </Container>
            </Jumbotron>
        </>
    )
}


export default Home