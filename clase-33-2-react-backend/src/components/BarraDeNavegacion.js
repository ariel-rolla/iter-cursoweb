//rfc plantilla de react
import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap"

import { Link } from "react-router-dom"; //Para navegar entre paginas internas, evitar recarga pagina

export default function BarraDeNavegacion() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Link to="/">
        <Navbar.Brand >Empresa X</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/clients">Clientes</Link>
          <Link className="nav-link" to="/products">Productos</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
