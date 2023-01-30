import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  body {
    font: 300 16px 'Open Sans', sans-serif;
    background-color: ${props => props.theme.palette.primary.main};
    line-height: 1.5;
    color:  ${props => props.theme.palette.primary.contrastText};
    text-align: left;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

  }

  * {
    border: 1px yellow;
  }
`
