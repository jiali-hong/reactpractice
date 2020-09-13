import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import KvCalc_icon from './icons/KvCalc_icon.png';
import {MdKeyboardArrowLeft} from 'react-icons/md';
import {AiFillCalculator} from 'react-icons/ai'

const AboutPage = () => {
    return (
        <div className={localStorage.getItem('theme').toUpperCase()}>
            
            <Container className="center">
                <Row>
                    <Col style={{textAlign: "left"}}><Link to="settings"><MdKeyboardArrowLeft /></Link></Col>
                    <Col><h1 style={{paddingBottom: "50px"}}>About</h1></Col>
                    <Col></Col>
                </Row>
                <AiFillCalculator className="pic" />
                <h5>KvCalc</h5>
                <br/>
                <br/>
                <div>~ version 0.0.3 ~</div>
            </Container>
        </div>
    )
}

export default AboutPage;