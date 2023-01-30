import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.palette.primary.contrastText};
    margin-top: 40px;
  }

  h1 > a {
    color: inherit;
    text-decoration: none; /* no underline */
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
  }
`
