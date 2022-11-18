import { Button } from "@mui/material";
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../../Images/AddMeals/addMeals.jpg";
import './AddMeals.css'

const BuyNow = () => {
    //-----------form method --------------
    const { register, handleSubmit } = useForm();



  const onSubmit = (data,e) => {
    console.log(data);
    // Send data server POST API
    fetch("https://hunger-s-garage-server.vercel.app/addMeals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Meals Added Successfully!", {
            position: "top-center",
            theme: "colored",
          });
          e.target.reset();
        }
      });
  };

  return (
<div>
      <h2 className="text-center my-3 fw-bold" style={{ color: "#3498db" }}>
        Add Meals
      </h2>
      <Container>
        <div className=" mx-auto">
          <div className="form-style">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Name"
                {...register("name")}
                required
              />
               <input
                type="text"
                placeholder="Img URL"
                {...register("img")}
                required
              />

              <textarea {...register("details")} placeholder="Details"/>
              <input
                type="text"
                {...register("price")}
                placeholder="price"
                required
              />
              <input className="loginBtn" type="submit" value="Add Meal" />
              <ToastContainer />
              </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BuyNow;
