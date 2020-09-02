import React from 'react';
import {Container, Form, Button, Row, Col} from 'react-bootstrap';

class LoginForm extends React.Component{
    state = {
        username: '',
        password: ''    
    }

    onUsernameChange = event => {
        this.setState({ username: event.target.value })
    }

    onPasswordChange = event => {
        this.setState({ password: event.target.value })
    }

    onSubmit = () => {
        // one or more fields are not filled?
        if (this.state.username === ''|| this.state.password === ''){
            return
        }
        let username = this.state.username,
            usersDict = JSON.parse(localStorage.getItem('users')),
            usersArray = Object.keys(usersDict),
            password = this.state.password;
        // validate user's login form
        if (usersArray.includes(username) === false){
            alert('Your username is invalid! Please register or try again.')
        }else{
            if (usersDict[username]["password"] === password){
                localStorage.setItem('currentUser',username)
                window.location.assign("/user")
                this.props.refresh()
            }else{
                alert('Your Password is incorrect! Please enter again!')
            }
        }
    }

    render() {
        let colour = this.props.theme !== 'dark'? 'outline-dark':'outline-light';
        return (
            <div className={this.props.theme !== 'dark'? 'LIGHT': 'DARK'}>
                <Container>
                    <h1 className='Title'>login</h1>
                    <Form>
                        <Form.Group controlId="formBasicInput">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={this.onUsernameChange} required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} required/>
                        </Form.Group>
                        <Button variant={colour} type="submit" onClick={this.onSubmit}>
                            Submit
                        </Button>
                    </Form>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Button variant="link" href="/register">click here to register</Button>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        );
    }
    
}


export default LoginForm;