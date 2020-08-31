import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import ThemeChanger from './ThemeChanger'

const Settings = (props) => {
    return (
        <div className={props.theme !== 'dark'? 'LIGHT': 'DARK'}>
            <Container>
                <h1 className="Title">
                    Settings
                </h1>
                <Row>
                    <Col>
                        <div>Change theme:</div>
                    </Col>
                    <Col>
                        <ThemeChanger setTheme={props.setTheme} theme={props.theme}/>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Settings;