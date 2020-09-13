import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
    const colour = localStorage.getItem('theme') !== 'dark'? 'dark':'light'
    const currentUser = localStorage.getItem('currentUser')
    const show = currentUser === null || currentUser ===  ''? 'login' : currentUser;
    const NavColour = localStorage.getItem('theme') === 'dark'? 'NavLight':'NavDark';
    const activeStyle = { fontWeight: "bold" };

    return (
        <Navbar collapseOnSelect expand="lg" bg={colour} variant={colour} fixed="bottom" sticky="bottom">
            <Navbar.Brand><NavLink className={NavColour} activeStyle={activeStyle} onClick={props.refresh} exact to="/">KvCalc</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link><NavLink className={NavColour} activeStyle={activeStyle} to="/scores">Scores</NavLink></Nav.Link>
                <Nav.Link><NavLink className={NavColour} activeStyle={activeStyle} to="/settings">Settings</NavLink></Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link><NavLink className={NavColour} activeStyle={activeStyle} to={show !== 'login'? "/user":"/login"}>{show}</NavLink></Nav.Link>
            </Nav>
    </Navbar.Collapse>
    </Navbar>
    )
}



export default NavBar;