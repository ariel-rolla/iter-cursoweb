//rfc plantilla de react
import React from 'react'
import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap"

export default function BarraDeNavegacion() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Empresa X</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Clientes</Nav.Link>
          <Nav.Link href="#link">Productos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
