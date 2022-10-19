import React from "react";
import Link from "next/link";
import Container from "../styles/components/socials";
import { TitleSocial } from "../components/index";
import { InferGetStaticPropsType } from "next";
import { randomLastNews } from "./api/news";

const between = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getStaticProps = async (ctx) => {
  return {
    props: {
      news: randomLastNews,
    },
    revalidate: 10,
  };
};

const Socials: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  news,
}) => {
  return (
    <Container>
      <TitleSocial>Social Links</TitleSocial>
      <ul className="social-links">
        <li>
          <a
            className="btn btn-outline linkedin btn-block btn-lg"
            href="https://www.linkedin.com/in/kauemendes/"
          >
            LinkeDin
          </a>
        </li>
        <li>
          <a
            className="btn btn-outline facebook btn-block btn-lg"
            href="https://facebook.com/kauemendes"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            className="btn btn-outline github btn-block btn-lg"
            href="https://gitHub.com/kauemendes"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="btn btn-outline instagram btn-block btn-lg"
            href="https://instagram.com/kauemendes"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            className="btn btn-outline news btn-block btn-lg"
            href={news[between(0, 4)]}
          >
            Last News
          </a>
        </li>
        <li>
          <Link href="/">
            <a className="btn btn-outline site btn-block btn-lg">This Site</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Socials;
