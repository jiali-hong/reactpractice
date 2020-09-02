import React from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                       <Link to='login' onClick={() => {localStorage.setItem("currentUser",'');props.refresh()}}>logout</Link>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}



export default PlayAgain;