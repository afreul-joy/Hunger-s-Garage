import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Review from "../Review";
import "./ReviewData.css";
import Carousel from "react-elastic-carousel";

const ReviewData = () => {
  const [review, setReviews] = useState([]);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 4 },
  ];

  useEffect(() => {
    fetch("https://hungers-garage.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-4">
      <Container>
        <h2 className="text-center mb-2 fw-bold" style={{ color: "#34495e" }}>
          Customer Reviews!
        </h2>
        <Row className="g-4 mx-2">
          <Carousel
            className="reviewData"
            itemPadding={[10, 50]}
            breakPoints={breakPoints}
          >
            {review?.map((review) => (
              <Review key={review._id} review={review} />
            ))}
          </Carousel>
        </Row>
      </Container>
    </div>
  );
};

export default ReviewData;
