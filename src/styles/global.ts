import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  body {
    font: 300 16px 'Open Sans', sans-serif;
    background: linear-gradient(-45deg, ${props =>
      props.theme.palette.third.main}, ${props =>
  props.theme.palette.primary.main}, ${props =>
  props.theme.palette.secondary.main}, ${props =>
  props.theme.palette.third.contrastText});
    background-color: ${props => props.theme.palette.primary.main};
    background-size: 400% 400%;
    line-height: 1.5;
    color:  ${props => props.theme.palette.primary.contrastText};
    text-align: left;
    margin: 0 auto;
    animation: gradient 25s ease infinite;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

  }

  @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`
