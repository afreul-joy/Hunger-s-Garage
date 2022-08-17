import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import ProductCard from "../Shared/ProductCard/ProductCard";
import "./Meals.css";
import GridLoader from "react-spinners/ClipLoader";

const Meals = () => {
  const [foods, setFoods] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const size = 3;

  // let [loading, setLoading] = useState(false);
  // let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const url = `http://localhost:5000/meals?page=${page}&&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // setLoading(true);
        setFoods(data.product);
        // setLoading(false);

        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

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

        <div className="pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={number === page ? "selected" : ""}
              key={number}
              onClick={() => {
                setPage(number);
              }}
            >
              {number + 1}{" "}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Meals;
