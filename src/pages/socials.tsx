import React from "react"
import { Container } from "../styles/Socials"

import Head from "next/head"

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Welcome ~ kauemendes.com/socials</title>
      </Head>
      <a
        className="button-82-pushable"
        role="button"
        href="https://github.com/kauemendes"
        target={"_blank"}
        rel="noreferrer"
      >
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">GitHub</span>
      </a>
      <a
        className="button-82-pushable"
        role="button"
        href="https://twitter.com/katux"
        target={"_blank"}
        rel="noreferrer"
      >
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">Twitter</span>
      </a>
      <a
        className="button-82-pushable"
        role="button"
        href="https://www.linkedin.com/in/kauemendes/"
        target={"_blank"}
        rel="noreferrer"
      >
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">LinkedIn</span>
      </a>
      <a
        className="button-82-pushable"
        role="button"
        href="https://kauemendes.com/"
        target={"_blank"}
        rel="noreferrer"
      >
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">Site</span>
      </a>

      {/* <button>GitHub</button>
      <button>Twitter</button>
      <button>Facebook</button>
      <button>Instagram</button>
      <button>Other</button> */}
    </Container>
  )
}

export default Home
