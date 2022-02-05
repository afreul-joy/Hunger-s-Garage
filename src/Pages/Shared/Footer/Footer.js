import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-div">
        <div className="footer container pt-5">
          <div className="row">
            <div className="col-lg-3 col-12">
              <h4>
                <h4>About Us</h4> <hr />
              </h4>
              <p className="footer-text">
                We are committed to providing the most food
                services from listing to close. We have exceptional results
                which are confirmed by the number of clients we serve.
              </p>
            </div>
            <div className="col-lg-3 col-12">
              <h4>
                More <hr />
              </h4>
              <ul>
                <li>About</li>
                <li>Site Map</li>
                <li>Support Center</li>
                <li>Terms Conditions</li>
              </ul>
            </div>

            <div className="col-lg-3 col-12">
              <h4>Hunger's Garage</h4> <hr />
              <h6>
                <i className="fas fa-map-marker-alt footer-icon"></i> 25 Union
                St, Boston, MA 02113
              </h6>
              <h6>
                <i className="fas fa-phone-volume footer-icon"></i> Office (305)
                352-4765
              </h6>
              <h6>
                <i className="fas fa-fax footer-icon"></i> Fax (305) 361-6577
              </h6>
              <h6>
                <i className="fas fa-envelope footer-icon"></i>{" "}
                office@mysite.com
              </h6>
            </div>

            <div className="col-lg-3 col-12">
              <h4>
                Quick links <hr />
              </h4>
              <ul>
                <li>
                  <Link
                    style={{
                      paddingLeft: 13,
                      textDecoration: "none",
                      color: "whitesmoke",
                    }}
                    to="/contact"
                  >
                    {" "}
                    Home
                  </Link>
                </li>

                <li>
                  {" "}
                  <Link
                    style={{
                      paddingLeft: 13,
                      textDecoration: "none",
                      color: "whitesmoke",
                    }}
                    to="/properties"
                  >
                    Meals
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    style={{
                      paddingLeft: 13,
                      textDecoration: "none",
                      color: "whitesmoke",
                    }}
                    to="/properties"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      paddingLeft: 13,
                      textDecoration: "none",
                      color: "whitesmoke",
                    }}
                    to="/blogs"
                  >
                    Our Blog
                  </Link>
                </li>
              </ul>
            </div>

            
          </div>
        </div>
        <div className="d-flex justify-content-center py-3">
          <a href="/#" target="_blank">
            <i className="fab fa-facebook-square footer-icon"></i>
          </a>
          <a href="/#" target="_blank">
            <i className="fab fa-twitter-square footer-icon"></i>
          </a>
          <a href="/#" target="_blank">
            <i className="fab fa-instagram footer-icon"></i>
          </a>
          <a href="/#" target="_blank">
            <i className="fab fa-linkedin footer-icon"></i>
          </a>
        </div>
        <hr />
        <h6 className="text-center">&copy; Copyright Reserved</h6>
      </div>
    </>
  );
};

export default Footer;