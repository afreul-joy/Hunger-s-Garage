import React from 'react';
import Zoom from "react-reveal/Zoom";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ProductCard.css'

const ProductCard =({ food }) => {
    const {_id, name, img, details, price } = food;
console.log(food);
    return  (
        <Zoom top>
          <Col>
            <div className="single-products">
              <img width="100%" height="300px" src={img} alt="" />
              <div className="product-des">
                <h3>{name}</h3>
                <p>{details.slice(0, 80)}</p>
                <p className="price">$ {price}</p>
                <Link to={`/placeOrder/${_id}`}>
                  <button className="regular-btn">
                    Buy Now <i className="fas fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Zoom>
      );
};

export default ProductCard;