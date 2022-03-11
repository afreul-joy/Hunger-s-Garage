import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import logo from '../../../Images/Header/brand.png'

const Footer = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('/lunch.json')
            .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    return (
        <div className="footer-area">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col xs={12} md={6} lg={4}>
                        <img width="80px" src={logo} alt="logo" />
                        <div className="w-75 mt-3">
                        <p>Find Restaurant In Germany. Large Selection. Always Open. Cheap Prices. Full Offer. Save Online. Compare Online. Simple Search. The Best Price. Compare Simply.Healthy Food</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <h4>Quick Links</h4>
                        <p>Home</p>
                        <p>About</p>
                        <p>Explore</p>
                        <p>Dashboard</p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <h4>Top Food: </h4>
                        <Row xs={4} md={4} lg={4} className="g-3">
                            {
                                product?.map(food => <Col key={food._id}>
                                    <img width="100%" src={food?.img} alt="" />
                                </Col>)
                            }
                        </Row>
                    </Col>
                </Row>
                <hr />
                <em><p className="text-center text-italic">copyright &copy; reserved Hunger's Garage Ltd.</p></em>
            </Container>
        </div>
    );
};

export default Footer;