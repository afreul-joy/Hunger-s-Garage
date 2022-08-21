import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
// import ProductCard from "../Shared/ProductCard/ProductCard";
import "./Meals.css";
import GridLoader from "react-spinners/GridLoader";
import Meal from "./Meal/Meal";

const Meals = () => {
  const [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://hungers-garage.herokuapp.com/meals`;
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-5">
      <Container>
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#34495e" }}>
          Explore All Foods!
        </h2>
        <>
          {!products.length ? (
            <div className="text-center">
              <GridLoader color={"#3498db"} loading={loading} size={15} />
            </div>
          ) : (
            <Meal data={products} />
          )}
        </>
      </Container>
    </div>
  );
};

export default Meals;
