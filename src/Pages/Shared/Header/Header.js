import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
  const {user, logOut} = useAuth()
  // console.log(user.displayName)
    return (
    
      // <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      //   <Navbar.Brand as={Link} to="/">
      //   <img
      //     alt=""
      //     src="https://i.ibb.co/KWfCt42/hunger.png"
      //     width="80"
      //     height="50"
      //     className="d-inline-block"
      //   />{' '}
      // Hunger's Garage
      // </Navbar.Brand>
      // <Navbar.Toggle />
      
      //   <Navbar.Collapse  className="justify-content-end">
      //   <Nav className="ms-auto">       
      //    <Nav.Link as={Link} to="/meals">
      //    <Button className='rounded-pill' variant="outline-dark">Meals</Button>
      //       </Nav.Link>
      //    <Nav.Link as={Link} to="/about">
      //    <Button className='rounded-pill' variant="outline-dark">About</Button>
      //       </Nav.Link>
      //       {user?.email  ?  
      //                   <>
      //                       <Nav.Link as={Link} style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
      //                       <Button className='rounded-pill' variant="outline-dark">Dashboard</Button>
      //                       </Nav.Link>
      //                       <Nav.Link as={Link} style={{ textDecoration: 'none', color: 'white' }} to="/">
                              
      //                       <Button onClick={logOut} className='rounded-pill ms-2' variant="outline-danger">Logout</Button>
      //                   </Nav.Link>
                            
      //                   </>
      //                   :
      //                   <Nav.Link as={Link} style={{ textDecoration: 'none', color: 'white' }} to="/login">
      //                       <Button className='rounded-pill' variant="outline-success">Login </Button>
      //                   </Nav.Link>

      //               }
      //     </Nav>

      //   </Navbar.Collapse>
      //   </Navbar>
      <div>
      <Navbar className="navigation" expand="lg">
        <Container>
          <Navbar.Brand>
            <img width="80px" src="https://i.ibb.co/KWfCt42/hunger.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="navmenu">
                <NavLink to="/" className={(selected) => (selected.isActive ? 'selected' : '')}>
                  Home
                </NavLink>
                <NavLink to="/meals" className={(selected) => (selected.isActive ? 'selected' : '')}>
                  Explore
                </NavLink>
                {user?.email && <NavLink to="/dashboard" className={(selected) => (selected.isActive ? 'selected' : '')}>
                  Dashboard
                </NavLink>}
                {user?.email ? (
                  <div className="loginButton">
                  <button onClick={logOut} className="loginBtn me-2">
                    Sign Out
                  </button>
                  <small className="fs-6 fw-bold text-danger">
                    {user?.displayName}
                  </small>
                </div>
                ) : (
                    <Link to="/login">
                      <button className="loginBtn">Sign In</button>
                    </Link>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    );
};

export default Header;

