import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navbar-logo {
    margin: 0 0 0 0.45em;
  }

  .navbar-logo .navbar-brand a {
    color: rgb(28, 24, 22);
  }

  .navbar-logo,
  .navbar-navigation {
    list-style: none;
    text-transform: uppercase;
  }

  .navbar-brand a,
  .navbar-navigation a {
    text-decoration: none;
    letter-spacing: 0.35rem;
  }

  .navbar-navigation {
    display: flex;
  }

  .navbar-navigation a {
    display: block;
    padding: 1em;
    color: white;
  }

  .navbar-navigation a:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  /* *********** media queries *********** */
  @media all and (max-width: 990px) {
    .navbar-container {
      flex-direction: column;
    }

    .navbar-logo {
      margin: 0;
    }

    .navbar-navigation {
      width: 100%;
      justify-content: space-around;
    }
  }

  /* ****** ****** */
  @media all and (max-width: 600px) {
    .navbar-brand {
      margin: 0.25em 0;
      align-self: left; /* align the logo to the left side of 'navbar-container' */
    }

    .navbar-navigation {
      flex-direction: column;
    }

    .navbar-navigation a {
      text-align: center;
      padding: 10px;
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .navbar-navigation li:last-of-type a {
      border-bottom: none;
    }
  }
`;

export default Container;
