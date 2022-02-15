import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from 'react-hook-form';
import './BuyNow.css'

const BuyNow = () => {
  const [meal, setMeal] = useState({});
  
  const { id } = useParams();

  const { user } = useAuth();
  console.log(user.displayName);
  //showing single details
  useEffect(() => {
    const url = `https://hungers-garage.herokuapp.com/meals/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data));
  }, []);

  //-----------form method --------------
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  const [userData, setUserData] = useState({});

  // handle onBlur
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...userData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setUserData(newLoginData);
  };

  const handleForm = (e) => {
    userData.status = "Pending";
    e.preventDefault();

    console.log(userData);

    // Send data server POST API
    fetch("http://localhost:5000/purchase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
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
                    <input type="text" placeholder={user.displayName} {...register("name", {required: true, maxLength: 80})}  required  />
                    <input type="text" placeholder={user.email} {...register("email", {required: true, pattern: /^\S+@\S+$/i})}  required/>
                    <input type="tel" placeholder="Mobile number" {...register("phone", {required: true, minLength: 6, maxLength: 12})}  required/>
                    <input type="datetime-local" placeholder="Date" {...register("date", {required: true})}  required />
                    <input type="text" placeholder="Address" {...register("address", {required: true})} required />

                    <input type="submit" />
                </form>
              {/* <form
                onSubmit={handleForm}
                className="col-md-8 d-flex flex-column gap-4 mx-auto mb-4"
              >
                <input
                  onBlur={handleOnBlur}
                  name="name"
                  type="name"
                  className="form-control"
                  id=""
                  defaultValue={user.displayName}
                  required
                />
                <input
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  className="form-control"
                  id=""
                  defaultValue={user.email}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  onBlur={handleOnBlur}
                  className="form-control"
                  placeholder="Enter Your Phone Number"
                  required
                />
                <input
                  type="text"
                  name="address"
                  onBlur={handleOnBlur}
                  className="form-control"
                  placeholder="Enter Your Address"
                  required
                />
                <Button type="submit" variant="contained">
                  <i className="fas fa-plus me-2"></i> Update
                </Button>
              </form> */}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default BuyNow;
