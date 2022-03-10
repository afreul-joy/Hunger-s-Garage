import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";
import brand from "../../../Images/Header/brand.png";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar className="navigation" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img width="100px" height="80px" src={brand} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="navmenu">
                <NavLink
                  to="/"
                  className={(selected) =>
                    selected.isActive ? "selected" : ""
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/meals"
                  className={(selected) =>
                    selected.isActive ? "selected" : ""
                  }
                >
                  Explore
                </NavLink>
                {user?.email && (
                  <NavLink
                    to="/dashboard"
                    className={(selected) =>
                      selected.isActive ? "selected" : ""
                    }
                  >
                    Dashboard
                  </NavLink>
                )}
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
