import React from "react";
import './Service.css'
import { Col, Container, Row } from "react-bootstrap";
import serviceImg from "../../Images/Service/service.jpg";

const Service = () => {
  const services = [
    {
      id: 1,
      name: "Restaurant ",
      icon: <i className='fas fa-pizza-slice'></i>,
      description:
        "Food & Services We Provide, We Are The Best Because On Time Work Completion Skilled & Reliable.",
    },
    {
      id: 2,
      name: "Delicious Food",
      icon: <i className="fas fa-hamburger"></i>,
      description:
      "Food & Services We Provide, We Are The Best Because On Time Work Completion Skilled & Reliable.",
    },
    {
      id: 3,
      name: "Cool Decoration",
      icon: <i className="fas fa-house-user"></i>,
      description:
      "Food & Services We Provide, We Are The Best Because On Time Work Completion Skilled & Reliable.",
    },
    {
      id: 4,
      name: "Quality Food",
      icon: <i className="	fas fa-glass-cheers"></i>,
      description:
      "Food & Services We Provide, We Are The Best Because On Time Work Completion Skilled & Reliable.",
    },
  ];

  return (
    <div>
      <Container>
        <Row className="d-flex align-items-center px-2">
          <Col xs={12} md={6} lg={6}>
            <div className="service-intro">
              <h2 className="fw-bold fs-1">Our Services</h2>
              <p>
                Find Our Service In Europe. Unlimited Order. 100% Healthy. Always
                Facts. Better Quality. The Best Resources.
              </p>
            </div>
            <Row xs={2} md={2} lg={2}>
              {services.map((service) => (
                <Col key={service.id}>
                  <div className="service-card">
                    <div style={{ fontSize: "33px", color: "#3498db" }}>
                      {service.icon}
                    </div>
                    <div>
                      <h5 style={{ color: "#34495e", fontWeight: "bold" }}>
                        {service.name}
                      </h5>
                      <p className="text-muted">{service.description}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <div className="service-image">
              <img className="image" src={serviceImg} alt="service" />  
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;