import React, { useState } from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import logo from './logo192.png'


function NavBar() {

    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
    setShow(!show);
    }
    const hideDropdown = e => {
    setShow(false);
    }

    const [show1, setShow1] = useState(false);
    const showDropdown1 = (e)=>{
    setShow1(!show1);
    }
    const hideDropdown1 = e => {
    setShow1(false);
    }




    return (
        <Navbar className='navbar-container' expand="lg">
        <Navbar.Brand href="#">
            <h1 className='navbar-logo-h1' >
                <img className='navbar-logo-img' src={logo} alt='' />
                MCM Phoenix
            </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-contents">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-primary">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default NavBar