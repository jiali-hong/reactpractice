import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = (props) => {
    let colour = props.theme !== 'dark'? 'dark':'light'
    return (
        <Navbar collapseOnSelect expand="lg" bg={colour} variant={colour} fixed="bottom">
            <Navbar.Brand href="/">KvCalc</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/scores">Scores</Nav.Link>
                <Nav.Link href="/settings">Settings</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">about us</Nav.Link>
            <Nav.Link href="#memes">login</Nav.Link>
            </Nav>
    </Navbar.Collapse>
    </Navbar>
    )
}



export default NavBar;