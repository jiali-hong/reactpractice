import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
// import KvCalc_icon_default_profile from './icons/KvCalc_icon_default_profile.png'
import getStreak from './utils/getStreak';
import {CgProfile} from 'react-icons/cg'

const UserDetails = props => {
    const currentUser =  localStorage.getItem('currentUser'),
        usersObj = JSON.parse(localStorage.getItem('users')),
        scoresObj = JSON.parse(localStorage.getItem(currentUser))
	return (
        <div className={localStorage.getItem('theme').toUpperCase()}>
            <Container className="center">
                <h1 style={{paddingBottom: "20px"}}>Account</h1>
                <CgProfile className="pic"/>
                <h5>{currentUser}</h5>
                <div style={{paddingBottom: "20px"}}>{usersObj[currentUser]['email']}</div>
                <Row>
                    <Col>Streak: {getStreak(Object.keys(scoresObj))}</Col>
                    <Col>Games Played: {Object.keys(scoresObj).length}</Col>
                </Row>
            </Container>
        </div>
    )
}



export default UserDetails; 