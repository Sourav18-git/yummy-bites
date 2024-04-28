import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/HeaderStyles.css'
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo/logo_3.2.png'
export default function Header() {
    return (
        <>
        <header>
    <Navbar  collapseOnSelect expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <Link className='logo'>
        <img src={Logo} alt="logo" className="img-fluid" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link  as={Link} to='/about'>About</Nav.Link>
        <Nav.Link  as={Link} to='/menu'>Our Menu</Nav.Link>
        <Nav.Link  as={Link} to='/shop'>Shop</Nav.Link>
        <Nav.Link  as={Link} to='/blog'>Bolg</Nav.Link>
        <Nav.Link  as={Link} to='/contact'>Contact</Nav.Link>
        <Nav.Link  as={Link} to='/'>
           <div className="cart">
           <i class="bi bi-bag fs-5 "></i>
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
