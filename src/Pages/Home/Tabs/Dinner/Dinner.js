import React, { useEffect, useState } from "react";
import { Container, Row, } from "react-bootstrap";
import ProductCard from "../../../Shared/ProductCard/ProductCard";
import GridLoader from "react-spinners/GridLoader";

const Lunch = () => {
  const [foods, setFoods] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://hungers-garage.herokuapp.com/meals`;
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);                                                                     
        loading(false);
      });
  }, []);

  return (
    <div className="my-2">
      <Container>
        {!foods.length && loading ? (
          <div className="text-center">
            <GridLoader color={"#3498db"} loading={loading} size={15} />
          </div>
        ) : (                                                                       
          <Row xs={1} sm={1} md={2} lg={3} className="g-4">
            {foods?.slice(14, 18).map((food) => (
              <ProductCard key={food.id} food={food} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Lunch;
                                                                                           
