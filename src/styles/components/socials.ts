import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 0 auto;

  list-style: none;
  background-color: ${({theme}) => theme.colors.background};
  left: 0;
  height: 100%;
  background-image: url('/img/1.jpg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  :before {
    content: ' ';
  }

  .social-links {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    list-style: none;
  }

  .social-links li{
    margin-bottom: 1%;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: inherit;
    border: 1px solid inherit;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
  }

  .btn-lg {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
  }

  .btn-outline {
    border-top: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: inherit;
    color: inherit;
  }

  .btn-block {
    display: block;
  }

  .facebook {
    border-color: #4267B2;
    color: #4267B2;
  }
  .facebook:hover {
    background-color: #4267B2;
    color: #FFF;
  }
  .linkedin {
    border-color: #0e76a8;
    color: #0e76a8;
  }
  .linkedin:hover {
    background-color: #0e76a8;
    color: #FFF;
  }
  .github {
    border-color: #FFF;
    color: #FFF;
  }
  .github:hover {
    background-color: #FFF;
    color: #000;
  }
  .instagram {
    border-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.primary};
  }
  .instagram:hover {
    background-color: ${({theme}) => theme.colors.primary};
    color: #FFF;
  }
  .news {
    border-color: #EED202;
    color: #EED202;
  }
  .news:hover {
    background-color: #EED202;
    color: #000;
  }
  .site {
    border-color: #FFF;
    color: #FFF;
  }
  .site:hover {
    background-color: #FFF;
    color: #000;
  }
`

export default Container
