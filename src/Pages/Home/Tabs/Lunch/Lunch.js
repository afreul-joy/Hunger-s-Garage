import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Lunch = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const url = `/lunch.json`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <Container>
      {foods.length === 0 ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Row lg={3} xs={1} className="g-4 ">
          {foods.map((food) => (
            <Col key={food.name}>
              <Card className="mb-2">
                <Card.Img className="w-50 mx-auto" src={food.img} alt="" />
                <Card.Title>{food.name}</Card.Title>
                <small>{food.details.slice(0, 40)}</small>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      <Link to={`/meals`} style={{ textDecoration: "none" }}>
        {" "}
        <Button variant="secondary" className="mt-2 mb-4">
          Wanna Know More?
        </Button>
      </Link>
    </Container>
  );
};

export default Lunch;
