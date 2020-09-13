import React from 'react';
import {Container, Form, Button, Row, Col} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

class RegisterForm extends React.Component{
    state = {
        username: '',
        email: '',
        password: '',
        redirect: false
    }

    onUsernameChange = event => {
        this.setState({ username: event.target.value })
    }

    onEmailChange = event => {
            this.setState({ email: event.target.value })
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
            email = this.state.email,
            password = this.state.password,
            usersemails = [];
        usersArray.map(user => usersemails.push(usersDict[user]["email"]));
        // validate user's login form
        if (usersArray.includes(username) === true){
            alert('Your chosen username has been used! Please try another or login.')
            return;
        }else{
            if (usersemails.includes(email) === false){
                usersDict[username] = {password:password,email:email}
                localStorage.setItem('users',JSON.stringify(usersDict))
                localStorage.setItem(username,JSON.stringify({}))
                this.setState({redirect: true})
            }else{
                alert('Your chosen email has already been used! Please use another email.')
            }
        }
    }

    render() {
        let colour = localStorage.getItem('theme') !== 'dark'? 'outline-dark':'outline-light';
        return (
            <div className={localStorage.getItem('theme').toUpperCase()}>
                <Container>
                    <h1 className='Title'>Register</h1>
                    <Form>
                        <Form.Group controlId="formBasicInput">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={this.onUsernameChange} required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onEmailChange} required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} required/>
                        </Form.Group>
                        <Button variant={colour} type="submit" onClick={this.onSubmit}>
                            Submit
                        </Button>
                        {this.state.redirect && <Redirect to="/login"/>}
                    </Form>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Link to="login">click here to login</Link>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        );
    }
        
}


export default RegisterForm;