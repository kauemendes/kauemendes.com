import btoa from "btoa";
import atob from "atob";

import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";

class ToolConvert extends React.Component {
  state = {
    textvalue: "",
    textConverted: "",
  };

  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.handleEncode = this.handleEncode.bind(this);
    this.handleDecode = this.handleDecode.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEncode = (event) => {
    if (this.state.textvalue === undefined) return;

    this.setState((state) => {
      return {
        state,
        textConverted: btoa(this.state.textvalue),
      };
    });
    event.preventDefault();
  };

  handleDecode = (event) => {
    if (this.state.textvalue === undefined) return;

    this.setState((state) => {
      return {
        state,
        textConverted: atob(this.state.textvalue),
      };
    });
    event.preventDefault();
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      textvalue: event.target.value,
    });
    event.preventDefault();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <textarea
              cols={10}
              rows={10}
              value={this.state.textvalue}
              onChange={this.handleChange}
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={this.handleEncode}>Encode</Button>
          </Col>
          <Col>
            <Button onClick={this.handleDecode}>Decode</Button>
          </Col>
        </Row>
        <Row>
          <Col className="box">
            <p>{this.state.textConverted}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ToolConvert;
