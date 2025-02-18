import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Menu(props) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>

      <br />

      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Hardwares/Peças</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>

      <br />

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ID-Maquina</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}