import {Container, Jumbotron, Button} from 'react-bootstrap'
import {SubTitle, Title} from '../components'
import Link from 'next/link';
function Home() {
    return (
        <>
            <Container fluid>
                <Jumbotron fluid className="section1">
                    <Container>
                        <Title>Welcome to Kauê Mendes Helm's</Title>
                        <p>
                            This website was entired build on Next.js and React
                            technology. Please feel free to see how fast this is. Now in TypeScript!
                        </p>
                        <p>
                            <Link href="/cv">
                                <a className="btn btn-primary ">Checkout Resume</a>
                            </Link>
                        </p>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid  className="section2">
                    <Container>
                        <SubTitle>Working as Developer</SubTitle>
                        <p>
                            Today applications are born more complex, 
                            faster and secure.
                        </p>
                        <p>
                            Using Agile Methods you can make that processes
                            cheaper and reliable. If you want advisory for this
                            please, contact me at <a href="mailto:sitecontact@kauemendes.com">mail.</a>
                        </p>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid className="section1">
                    <Container>
                        <SubTitle>Misc. and Hobbys</SubTitle>
                        <p>
                            Not from code a developer survive and it´s really
                            important to have an outsite activities.
                        </p>
                        <p>
                            Playing Chess is one of my most recent hobbies. Reach <a href="https://www.chess.com/member/kaka8907">me out here</a>.
                        </p>
                    </Container>
                </Jumbotron>
                <Jumbotron fluid className="section1">
                    <Container>
                        <SubTitle>Find Me in Lisbon</SubTitle>
                    </Container>
                </Jumbotron>
            </Container>
        
        </>
    )
}

export default Home