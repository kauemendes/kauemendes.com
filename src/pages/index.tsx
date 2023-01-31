import React from "react"
import { Container } from "../styles/Home"

import avatarVermelho from "../assets/avatar_vermelho.png"
import pinImg from "../assets/pin2.png"
import Head from "next/head"

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Welcome ~ KaueMende.com</title>
      </Head>
      <div className="grow">
        <img src={avatarVermelho} width={"120px"} height={"120px"} />
      </div>
      <h1>
        <a
          href="https://github.com/kauemendes"
          target="_blank"
          rel="noreferrer"
        >
          {"<"}Kauê Mendes{"/>"}
        </a>
      </h1>
      <p>Dev for passion, DevOps for obligation 💾</p>
      <p className="location">
        🌏
        <span>Lisbon Great Area</span>
        <div className="pulse"></div>
      </p>
    </Container>
  )
}

export default Home
