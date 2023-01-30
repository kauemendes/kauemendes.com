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
      <img src={avatarVermelho} width={"120px"} height={"120px"} />
      <h1>
        <a
          href="https://github.com/kauemendes"
          target="_blank"
          rel="noreferrer"
        >
          Kauê Mendes
        </a>
      </h1>
      <p>Site pessoal de Kauê Mendes de Freitas</p>
      <p className="location">
        <img src={pinImg} width={"15px"} height={"15px"} />
        <span>Lisbon Great Area</span>
      </p>
    </Container>
  )
}

export default Home
