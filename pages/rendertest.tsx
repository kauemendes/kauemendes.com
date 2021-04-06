import {Container, Row, Col} from 'react-bootstrap'

var startTime, endTime;

function start() {
    startTime = new Date();
};
  
function end() {
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds 
    return timeDiff
}

function renderTest() {
    start()
    return (
        <Container>
            <Row>
                <Col>
                    <p> Time Spent Rendering </p>
                    <p>{end()} ms</p>
                </Col>
            </Row>
            
        </Container>
    )
}

export default renderTest;