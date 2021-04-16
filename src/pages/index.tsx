import React from 'react'
import Link from 'next/link'

import { SubTitle, Title, Container, Row, Col, Main } from '../components'

const Home: React.FC = () => {
  return (
      <>
        <Container>
          <Col>
            <Row className="section1">
              <Main>
                <Title>Welcome to Kauê Mendes Helm&apos;s</Title>
                <p>
                  This website was entired build on Next.js and React
                  technology. Please feel free to see how fast this is. Now in TypeScript!
                </p>
                <p>
                  <Link href="/cv">
                    <a className="btn btn-primary">Checkout Resume</a>
                  </Link>
                </p>
              </Main>
            </Row>
            <Row className='section2'>
              <Main>
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
              </Main>
            </Row>
            <Row className="section1">
              <Main>
                <SubTitle>Misc. and Hobbys</SubTitle>
                <p>
                  Not from code a developer survive and it´s really
                  important to have an outsite activities. So, I am playing Chess in one of my most recent hobbies. Reach <a href="https://www.chess.com/member/kaka8907" className="chessLink">me out here</a>.
                </p>
              </Main>
            </Row>
            <Row className="section1">
              <Main>
                <SubTitle>Find Me in Lisbon</SubTitle>
              </Main>
            </Row>
         </Col>
        </Container>
      </>
  )
}

export default Home
