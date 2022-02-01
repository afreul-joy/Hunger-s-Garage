import React from 'react';
import { Button,Dropdown,Nav, Navbar, NavLink } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
  const {user, logOut} = useAuth()
  // console.log(user.emailVerified)
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
         <Nav.Link as={Link} to="/manageal">
         <Button className='rounded-pill' variant="outline-dark">DashBhai</Button>
            </Nav.Link>
            {user?.email  ?  
                        <>
                            <Nav.Link as={Link} style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                            <Button className='rounded-pill' variant="outline-dark">Dashboard</Button>
                            </Nav.Link>
                            <Nav.Link as={Link} style={{ textDecoration: 'none', color: 'white' }} to="/">
                            <Button onClick={logOut} className='rounded-pill ms-2' variant="outline-danger">Logout</Button>
                        </Nav.Link>
                            
                        </>
                        :
                        <Nav.Link as={Link} style={{ textDecoration: 'none', color: 'white' }} to="/login">
                            <Button className='rounded-pill' variant="outline-success">Login </Button>
                        </Nav.Link>

                    }
{/* && user?.emailVerified  */}

            {/* {
                            (user.email || user.displayName) ?
                            <Dropdown>
                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                 {
                                        user.photoURL ?
                                            <img src={user?.photoURL} className="rounded-pill border border-warning border-2" width="35px" alt={user.displayName} />
                                            :
                                            <i className="fas fa-user-circle"></i>
                                    }
                              <span className="ms-2">{user.displayName}  </span>
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item ><Link style={{textDecoration: 'none'}} className="mx-1" to="/myOrders">
                                        <Button variant="outline-secondary">Myorders</Button>
                                    </Link></Dropdown.Item>
                                <Dropdown.Item ><Link style={{textDecoration: 'none'}} className="mx-1" to="/addMeals">
                                        <Button variant="outline-secondary"> AddMeals</Button>
                                    </Link></Dropdown.Item>
                               
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4"> <button onClick={signOutUsingGoogle} type="button" className="btn btn-outline-danger mx-1 ">Logout</button></Dropdown.Item>
                              </Dropdown.Menu>
                             
                            </Dropdown>

                                :
                                <div onMouseOver={handleDownArrow} className="dropdown navbar-custom">
                                  <Button className='rounded-pill me-2' variant="outline-dark">  <i className="fas fa-user-circle"></i> My Account</Button>
                                    <i className="fas fa-chevron-down down-arrow"></i>
                                    <div className="dropdown-content">
                                        <Nav.Link as={Link} to="/login"><i className="fas fa-sign-in-alt"></i> Sign In</Nav.Link>
                                        <Nav.Link as={Link} to="/register"><i className="fas fa-user-plus"></i> Sign Up</Nav.Link>
                                    </div>
                                </div>
                        } */}
          </Nav>

        </Navbar.Collapse>
        </Navbar>
      
    );
};

export default Header;
