import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import "./BuyNow.css";

const BuyNow = () => {
  const [meal, setMeal] = useState({});
  const { id } = useParams();
  const { user } = useAuth();

  //showing single details
  useEffect(() => {
    const url = `https://hungers-garage.herokuapp.com/meals/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data));
  }, [id]);

  //-----------form method --------------
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    data.status = "Pending";
    data.img = meal.img;
    data.productName = meal.name;
    console.log(data);
    // e.preventDefault();

    // Send data server POST API
    fetch("https://hungers-garage.herokuapp.com/purchase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Order added successfully!", {
            position: "top-center",
            theme: "colored",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <h2 className="text-success my-2">Please Order </h2>
      <Container>
        <Row>
          <div className="col-lg-6">
            <Card className="mb-2">
              <Card.Img
                className="w-50 mx-auto img-fluid"
                src={meal.img}
                alt=""
              />
              <Card.Title>{meal.name}</Card.Title>
              <small>{meal.details}</small> <br />
            </Card>
          </div>
          <div className="col-lg-6">
            <h4 className="text-info mb-3">Order Requirement</h4>
            <div className="d-flex justify-content-center align-items-center form-style">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  defaultValue={user.displayName}
                  {...register("name")}
                  required
                />
                <input
                  defaultValue={user.email}
                  {...register("email")}
                  required
                />

                <input type="date" {...register("date")} required />
                <input
                  type="text"
                  placeholder="Address"
                  {...register("address")}
                  required
                />
                <input
                  type="text"
                  placeholder="Phone"
                  {...register("contact")}
                  required
                />
                <input
                  className="signBtn"
                  type="submit"
                  value="Submit & Billing"
                />
              </form>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default BuyNow;
