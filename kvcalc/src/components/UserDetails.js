import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';

const PlayAgain = props => {
	return (
        <div className={props.theme !== 'dark'? 'LIGHT': 'DARK'}>
            <Container>
                <h1 className="Title">User Details</h1>
                <Row>
                    <Col>
                        <div>Comming Soon...</div>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <Button variant="link" href="/login" onClick={() => localStorage.setItem("currentUser",'')}>logout</Button>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}



export default PlayAgain;