import React from "react";
import Rating from "react-rating";
import './Review.css'

const Review = (props) => {
  const { name, img, des,rating } = props?.review||{}
  // console.log("Reviews bro",props)

    return (
        <div className="review">
          <img src={img} alt=""  width="80px"height="80px"className="rounded-circle" />
          <h5 style={{ color: "#3498db", fontWeight: 600 }}>{name}</h5>
          <div>
            <Rating
        initialRating={ rating}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color "
          readonly
        />
          </div>
            <div style={{ height: "150px" }}>
              <p>{des}</p>
            </div>
      </div>
    );
};

export default Review;