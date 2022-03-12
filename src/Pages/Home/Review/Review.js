import React from "react";
import './Review.css'

const Review = (props) => {
  const { name, img, details } = props?.review||{}
  console.log("Reviews bro",props)

    return (
        <div className="review">
         
          <img src={img} alt=""  width="80px"height="80px"className="rounded-circle" />
          <h5 style={{ color: "#3498db", fontWeight: 600 }}>{name}</h5>
            <div style={{ height: "150px" }}>
              <p>{details}</p>
            </div>

       
      </div>
    );
};

export default Review;