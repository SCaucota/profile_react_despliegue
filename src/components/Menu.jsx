import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const Menu = () => {
    return (
        <Navbar className="p-4" bg="dark" data-bs-theme="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="#home">AppPerfil</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <LinkContainer to="/">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/acercaDe">
                            <Nav.Link href="#link">Acerca De</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/hobbies">
                            <Nav.Link href="#hobbies">Hobbies</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contacto">
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;