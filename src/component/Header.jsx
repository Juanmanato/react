import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavDropdown } from "react-bootstrap"
export default function Header() {
  
  return (
    <Navbar bg="dark"  variant='dark' >
      
            <Navbar.Brand as = {Link} to= '/' >E-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"  style={{marginLeft:'65%' }}>
                <Nav.Link as = {Link} to= '/' >Home</Nav.Link>
                <Nav.Link as = {Link} to= '/login' >Login</Nav.Link>
                <Nav.Link as = {Link} to= '/registro' >Registro</Nav.Link>
                <Nav.Link as = {Link} to= '/asdasda' >acerca de</Nav.Link>
                <NavDropdown title="Producto" id="basic-nav-dropdown">
                <NavDropdown.Item as = {Link} to= '/producto/crearProducto' >Crear Producto</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        
    </Navbar>
  )
}
