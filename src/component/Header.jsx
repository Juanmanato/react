import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavDropdown } from "react-bootstrap"
import LoginContext from '../Context/LoginContext'

export default function Header() {
  
  return (
        <LoginContext.Consumer>
          {context => 
          <Navbar bg="dark"  variant='dark' >
      
          <Navbar.Brand as = {Link} to= '/' >E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"  style={{marginLeft:'65%' }}>
              <Nav.Link as = {Link} to= '/' >Home</Nav.Link>
            {!context.userLogin &&
            <>
              <Nav.Link as = {Link} to= '/login' >Login</Nav.Link>
              <Nav.Link as = {Link} to= '/registro' >Registro</Nav.Link>
            </>
              }
              <Nav.Link as = {Link} to= '/acercade' >acerca de</Nav.Link>

              {context.userLogin &&
              <>
              <NavDropdown title="Producto" id="basic-nav-dropdown">
              <NavDropdown.Item as = {Link} to= '/producto/crearProducto' >Crear Producto</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick = {context.logOutUser} as = {Link} to= '/' >Salir</Nav.Link>
               {/* {context.userLogin &&
           <p className="saludo">hola {context.userInfo}</p>} */}
              </>
            }
          </Nav>
          </Navbar.Collapse>
           
        </Navbar>}
    
    </LoginContext.Consumer>
  )
}
