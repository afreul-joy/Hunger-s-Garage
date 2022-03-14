import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import ProductCard from "../Shared/ProductCard/ProductCard";

const Meals = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const url = `https://hungers-garage.herokuapp.com/meals`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="my-5">
      <Container>
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#34495e" }}>
          Explore All Foods!
        </h2>
        {!foods.length ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {foods?.map((food) => (
              <ProductCard key={food._id} food={food} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Meals;
