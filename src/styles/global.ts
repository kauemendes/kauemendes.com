import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font: 300 16px 'Open Sans', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.5;
    color:  ${({ theme }) => theme.colors.text};
    text-align: left;
    margin: 0 auto;
  }

  a:link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  a:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  a:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  a:active {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
  }

  .main-container {
    flex: 1;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    padding-bottom: 100px;
  }

  .main-container > * {
    flex: 1;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .container-fluid{
    overflow: hidden;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .row+.row {
    margin-top: 1rem;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

  }

  .section1 {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url('/img/bgpattern.png');
    background-repeat: repeat;
    background-position: 100%;
    padding: 1em 0em 1em 0em;
  }

  .section2 {
    height: 30vh;
    background-color: rgb(0, 0, 0);
    opacity: 1;
    position: relative;
  }

  .section2:after {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.25;
    background-image: url('/img/1.jpg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
  }

  .chessLink {
    color: ${({ theme }) => theme.colors.primary} !important;
    font-weight: 600;
  }

  .text-center {
    text-align: center;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 8px;
    background-color: #0b0b0b;
    height: 80px;
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

  .btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
  }

  .btn-primary {
    color: #fff;
    background-color: #353535;
    border-color: #353535;
  }
`;
