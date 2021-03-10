import btoa from 'btoa'

import {Container, Row, Col, Button} from 'react-bootstrap'
import React from 'react'

class ToolConvert extends React.Component {
    state = {
        textvalue: "",
        textConverted: ""
    }

    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textArea = React.createRef();
        this.handleConvert = this.handleConvert.bind(this);
        this.handleChange  = this.handleChange.bind(this);
    }

    handleConvert = (event) => {
        if (this.state.textvalue === undefined) return

        this.setState(state => {
            return {
                state,
                textConverted: btoa(this.state.textvalue)
            }
        });
        event.preventDefault();
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            textvalue: event.target.value
        })
        event.preventDefault();
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <textarea col={10} row={10} value={this.state.textvalue} ref={this.textArea} onChange={this.handleChange}>
                        </textarea>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={this.handleConvert}>Convert</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="box">
                        <p>{this.state.textConverted}</p>
                    </Col>    
                </Row>                
            </Container>
        )
    }
}

export default ToolConvert;