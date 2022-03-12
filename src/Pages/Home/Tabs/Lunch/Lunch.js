import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import ProductCard from "../../../Shared/ProductCard/ProductCard";

const Lunch = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const url = `/lunch.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="my-2">
      <Container>
        <h4 className="text-center my-2 fw-bold" style={{ color: "#34495e" }}>
          Our Lunch Items
        </h4>
        {!foods.length ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {foods?.map((food) => (
              <ProductCard key={food.id} food={food} />
            ))}
          </Row>
        )}
      </Container> 
    </div>
  );
};

export default Lunch;
