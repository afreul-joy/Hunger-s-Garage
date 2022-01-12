import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
    
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src="https://i.ibb.co/KWfCt42/hunger.png"
          width="80"
          height="50"
          className="d-inline-block"
        />{' '}
      Hunger's Garage
      </Navbar.Brand>
      <Navbar.Toggle />
      
        <Navbar.Collapse  className="justify-content-end">
        <Nav className="ms-auto">       
         <Nav.Link as={Link} to="/meals">
         <Button className='rounded-pill' variant="outline-dark">Meals</Button>
            </Nav.Link>
         <Nav.Link as={Link} to="/about">
         <Button className='rounded-pill' variant="outline-dark">About</Button>
            </Nav.Link>
         <Nav.Link as={Link} to="/login">
         <Button className='rounded-pill' variant="danger">Login</Button>
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
        </Navbar>
      
    );
};

export default Header;
