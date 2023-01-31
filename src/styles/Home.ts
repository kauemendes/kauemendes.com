import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .grow img {
    transition: 1s ease;
  }

  .grow img:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    transition: 1s ease;
  }

  h1 {
    font-family: "Courier Prime", monospace;
    font-size: 70px;
    color: ${props => props.theme.palette.primary.contrastText};
    margin-top: 20px;
    border-right: 4px solid #000;
    animation: cursor 1s infinite step-end, typing 15s infinite steps(16);
    white-space: nowrap;
    overflow: hidden;
  }

  @keyframes cursor {
    0%,
    100% {
      border-color: transparent;
    }
    50% {
      border-color: #000;
    }
  }

  @keyframes typing {
    0% {
      width: 0ch;
    } /*Text is hidden*/
    30% {
      width: 14ch;
    } /*The enitre header will be typed out 1 character at a time*/
    80% {
      width: 14ch;
    } /*Text stays visible*/
    90% {
      width: 0ch;
    } /*Text is deleted*/
    100% {
      width: 0ch;
    } /*Text stays hidden*/
  }

  h1 > a {
    color: inherit;
    text-decoration: none;
  }

  img {
    border: 11px;
    border-color: ${props => props.theme.palette.primary.contrastText};
  }

  p {
    margin-top: 0px;
    font-size: 14px;
    line-height: 32px;
  }

  p.location {
    color: ${props => props.theme.palette.common.white};
  }

  p > span {
    margin-left: 3px;
    color: ${props => props.theme.palette.secondary.main};
  }
`
