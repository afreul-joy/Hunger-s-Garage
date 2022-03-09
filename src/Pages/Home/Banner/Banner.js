import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./banner.css";

console.log(React.version);
// import Fade from 'react-reveal/Fade';

const Banner = () => {
  return (
    <div className="banner-area">
      <Container>
        <Row className="banner-intro">
          {/* <Fade left> */}
          <Col xs={12} md={6} lg={6}>
            <h2 className="h3-color">Welcome to</h2>
            <h1>Hunger Garage</h1>
            <p className="text-capitalize">
              Making The Delicious Premium Food Since 1990.When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat
            </p>
            <button className="readBtn">Read More</button>
          </Col>
          {/* </Fade> */}
          <Col xs={12} md={6} lg={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
