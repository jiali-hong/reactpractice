import React,{useState} from 'react';
import {Container, ListGroup, Row, Col} from 'react-bootstrap';
import ThemeChanger from './ThemeChanger'
import SetTimer from './SetTimer'
import { Link, Redirect } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md'


const Settings = (props) => {
    const [settingsKey, setSettingsKey] = useState(0)
    const [timerKey, setTimerKey] = useState(0)
    const [redirect, setRedirect] = useState(false);
    console.log(redirect)
    const onLogout = () => {
        const logout = window.confirm("Do you really want to logout?");
        if (logout===true){
            setRedirect(true);
            console.log(redirect);
            localStorage.setItem("currentUser",'');
            props.refresh();
            
        }else{
            return false
        }
    }
    return (
        <div className={localStorage.getItem('theme').toUpperCase()} key={settingsKey}>
            <Container>
                <h1 className="Title">
                    Settings
                </h1>
                <ListGroup>
                    <ListGroup.Item>
                        <Link className="settingsList" to={localStorage.getItem('currentUser') === null || localStorage.getItem('currentUser') === ''? 'login':'user'} >
                            <Row>
                                <Col>Account</Col>
                                <Col style={{textAlign: "right"}}><MdKeyboardArrowRight /></Col>
                            </Row>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row className="settingsList">
                            <Col>Theme: </Col>
                            <Col><ThemeChanger refresh={() => {setSettingsKey(settingsKey+1)}} refreshNav={props.refresh}/></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row className="settingsList">
                            <Col>Timer: </Col>
                            <Col><SetTimer refreshThis={() => setTimerKey(timerKey+1)} /></Col>
                        </Row>
                    </ListGroup.Item>
                    <br/>
                    <ListGroup.Item>
                        <Link className="settingsList" to="about">
                            <Row>
                                <Col>About</Col>
                                <Col style={{textAlign: "right"}}><MdKeyboardArrowRight /></Col>
                            </Row>
                        </Link>
                    </ListGroup.Item>
                    {localStorage.getItem('currentUser') === null || localStorage.getItem('currentUser') === ''? <div></div> : <ListGroup.Item style={{textAlign: "center"}}>
                        <Link className="settingsList" style={{color: "darkblue"}} onClick={onLogout}>logout</Link>
                    </ListGroup.Item>}
                </ListGroup>
                {redirect && <Redirect to="/login"/>}
                
                
            </Container>
        </div>
    )
}

export default Settings;