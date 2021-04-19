import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

const Col = styled.div`
  flex-direction: column;
  margin: auto;
  width: 100%;
`;

const Row = styled.div`
  flex-direction: row;
  margin: 0 auto;
  padding: 1em 0em 1em 0em;
`;

const Main = styled.div`
  flex: 1;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 720px;
  }
`

export {
  Container,
  Row,
  Col,
  Main
}
