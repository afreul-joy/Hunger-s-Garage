import React from 'react';
import { Button,Dropdown,Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { handleDownArrow, vanishDownArrow } from './navPlain';
// import {  Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const {user,signOutUsingGoogle} = useAuth()
    return (
    
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" onMouseOut={vanishDownArrow}>
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


            {
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
                        }
          </Nav>

        </Navbar.Collapse>
        </Navbar>
      
    );
};

export default Header;
