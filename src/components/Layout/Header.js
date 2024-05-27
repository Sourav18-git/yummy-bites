import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/HeaderStyles.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/logo_3.2.png'
export default function Header() {

  const [nav, setNav] = useState(false);
  const white = require('../../assets/logo/logo_3.2.png')
  const black = require('../../assets/logo/logo_3.png')


  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (

    <>
      <header>
        <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
          <Container>
            <Navbar.Brand href="#home">
              <div className='logo'>
                <img src={`${nav === true ? black : white}`} alt="logo" className="img-fluid" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/about'>About</Nav.Link>
                <Nav.Link as={Link} to='/menu'>Our Menu</Nav.Link>
                <Nav.Link as={Link} to='/shop'>Shop</Nav.Link>
                <Nav.Link as={Link} to='/blog'>Bolg</Nav.Link>
                <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                <Nav.Link as={Link} to='/'>
                  <div className="cart">
                    <i className="bi bi-bag fs-5 "></i>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}
