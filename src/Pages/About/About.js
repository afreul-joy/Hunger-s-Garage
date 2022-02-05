import React from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import img from "../.../../../Images/About/about.jpg";

const About = () => {
  return (
    <div>
      <Container>
        <h1 className="destination-heading pt-5">About Us</h1> <hr />
        <Row>
          <div className="col-md-6 col-lg-6 col-12">
            <img
              className="rounded my-4 img-fluid"
              src={img}
              width="500px"
              alt=""
            />
          </div>
          <div className=" col-md-6 col-lg-6 col-12 my-3 d-flex align-items-center ">
            <div>
              <p>
                <strong>
                  A Tradition of Excellence, Integrity, Knowledge and Service
                  for over 7 years.
                </strong>
                <br />
                <br />
                ‘Hunger's Garage’ Restaurants are well known with a substantial
                gathering of people including families, kids, seniors, and
                business experts. Our benevolent condition is perfect for
                praising unique events, facilitating a business lunch, or
                assembling for a flavorful dinner with loved ones.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default About;
