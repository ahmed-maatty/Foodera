import React from 'react'
import './Nav.css'
import { Navbar,Container,Nav } from 'react-bootstrap'
import logo from '../../imgs/logo.png'


export default function NavBar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} title='logo'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About us</Nav.Link>
                        <Nav.Link href="#home">explorefood</Nav.Link>
                        <Nav.Link href="#link">review</Nav.Link>
                        <Nav.Link href="#home">faq</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link id='Lastnav'>01026595619</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
