import React, { useState } from 'react'
import { Navbar, Nav, Button, Dropdown } from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import logo from './logo-mcm-circle.png'


function NavBar() {

    return (
        <Navbar className='navbar-container'  style={{ ".navbar .dropdown:hover .dropdown-menu": { display: "block" } }} expand="lg">
        <Navbar.Brand className='navbar-logo-container' href="#">
            <h1 className='navbar-logo-h1' >
                <img className='navbar-logo-img' src={logo} alt='' />
                MCM Phoenix
            </h1>
        </Navbar.Brand>
        <Navbar.Toggle style={{padding:"10px 30px 10px"}}  aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className='navbar-contents-container' id="basic-navbar-nav">
            <Nav className="navbar-contents">
                <Nav.Link className="navbar-links" href="/">
                    <span className='navbar-links-span'>Home</span>
                </Nav.Link>
                <Nav.Link className="navbar-links" href="/about">
                    <span className='navbar-links-span'>About</span>
                </Nav.Link>
                <Nav.Link className="navbar-links" href="/masjid-reconstruction">
                    <span className='navbar-links-span'>Masjid Reconstruction</span>
                </Nav.Link>
                
                <Dropdown className='navbar-dropdown-container'>
                    <Dropdown.Toggle className='navbar-dropdown-links' variant="success" 
                    id="dropdown-basic">
                        Services
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='navbar-dropdown-links-donate' variant="light" show>
                        <Dropdown.Item href='/quran-programs'>
                            Youth Quran Program
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='/quran-programs'>
                            Adult Quran Program
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href='/quran-programs'>
                            New Muslim Quran Program
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='navbar-dropdown-container'>
                    <Dropdown.Toggle className='navbar-dropdown-links' variant="success" 
                    id="dropdown-basic">
                        Donate
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='navbar-dropdown-links-donate' >
                        <Dropdown.Item 
                        target="_blank" href='https://www.paypal.com/donate/?hosted_button_id=LZGPUFLUNZC8E'>
                            Donate via PayPal
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Nav>
             <Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default NavBar