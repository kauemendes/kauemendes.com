import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font: 300 16px 'Open Sans', sans-serif;
    background-color: ${({theme}) => theme.colors.background} !important
  }

  @media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
  }
  .main-container {
    min-height: 100vh; /* will cover the 100% of viewport */
    overflow: hidden;
    display: block;
    position: relative;
    padding-bottom: 100px; /* height of your footer */
  }
  p { word-break: break-word }
  .container-fluid{
    overflow: hidden;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .row+.row {
    margin-top: 1rem;
  }

  .jumbotron {
    margin-bottom: 0 !important;
  }
  .jumbotron-fluid {
    padding-left: 10px;
    padding-right: 10px;
  }
  .section1 {
    background-color: rgb(242 242 242);
    background-image: url('/img/bgpattern.png');
    background-repeat: repeat;
    background-position: 100%;
  }

  .socials {
    background-color: rgb(165, 172, 172);
  }

  .socials:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /* opacity: 0.45; */
    background-image: url('/img/1.jpg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }

  .section2 {
    background-color: rgb(165, 172, 172);
    position: relative;
  }

  .section2:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.45;
    background-image: url('/img/1.jpg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 8px;
  }

  textarea {
    width: 500px;
    height: 180px;
  }

  .tool {
    margin: 10px auto;
  }

  .box {
    border: 1px solid rgb(225 225 225);
    border-radius: 5px;
    margin-top: 2rem;
    padding: 10px;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    color: deeppink;
  }
  .logo {
    width: 80px;
    height: 80px;
  }

`;
