import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
// import "./BuyNow.css";

const ReviewDashboard = () => {
  const [meal, setMeal] = useState({});
  const { id } = useParams();
  const { user } = useAuth();

  //-----------form method --------------
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    // data.status = "Pending";
    // data.img=meal.img;
    // data.productName=meal.name
    console.log(data);
    // e.preventDefault();

    // Send data server POST API
    // fetch("http://localhost:5000/purchase", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       toast.success("Order added successfully!", {
    //         position: "top-center",
    //         theme: "colored",
    //       });
    //       e.target.reset();
    //     }
    //   });
  };

  return (
    <div>
      <h2 className="text-success my-2">Please Review </h2>
      <Container>
      
          <div className="col-lg-6  col-md-12 col-12 mx-auto">
            
            <div className="d-flex justify-content-center align-items-center form-style">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  defaultValue={user.displayName}
                  {...register("name")}
                  disabled
                />
                <input
                  type="text"
                  placeholder="Rating"
                  {...register("rating")}
                  required
                />
                <input
                  type="text"
                  placeholder="Img URL"
                  {...register("img")}
                  required
                />
                
                <textarea {...register("description", {  max: 25, min: 20, maxLength: 100})} />

                <input
                  className="signBtn"
                  type="submit"
                  value="Send Review"
                />
              </form>
            </div>
          </div>
       
      </Container>
    </div>
  );
};

export default ReviewDashboard;
