import React from 'react'
import { Navbar, Nav, Button } from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'


function NavBar() {

    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
    setShow(!show);
    }
    const hideDropdown = e => {
    setShow(false);
    }




    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
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