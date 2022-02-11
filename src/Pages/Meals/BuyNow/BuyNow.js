import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  }, []);

  //form method
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // const [pending, setPending] = useState("");

  const handleNumber = (e) => { 
    const phoneNumber = e.target.value;
    setPhone(phoneNumber);
  };
  const handleAdress = (e) => {
    const Address = e.target.value;
    setAddress(Address);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const userData = {
      name: user.displayName,
      email: user.email,
      img: meal.img,
      productName: meal.name,
      productPrice: meal.price,
      phone: phone,
      address: address,
      status:"pending"
    };
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
            <div className="d-flex justify-content-center align-items-center">
              <Form onSubmit={handleForm} className="w-50">
                <Form.Control
                  type="text"
                  readOnly
                  className="text-muted p-2  text-center"
                  value={`Name: ${user.displayName}` || ""}
                />{" "}
                <br />
                <Form.Control
                  type="text"
                  readOnly
                  className="text-muted p-2  text-center"
                  value={`Email: ${user.email}` || ""}
                />{" "}
                <br />
                <Form.Control
                  type="text"
                  readOnly
                  className="text-muted p-2  text-center"
                  value={`Meal Name: ${meal.name}` || ""}
                />{" "}
                <br />
                <Form.Control
                  type="text"
                  readOnly
                  className="text-muted p-2  text-center"
                  value={`Price: ${meal.price}` || ""}
                />{" "}
                <br />
                <Form.Control
                  type="text"
                  required
                  onChange={handleNumber}
                  className="text-muted p-2  text-center"
                  placeholder="Enter Your Phone Number"
                />{" "}
                <br />
                <Form.Control
                  type="text"
                  required
                  onChange={handleAdress}
                  className="text-muted p-2  text-center"
                  placeholder="Enter Your Address"
                />{" "}
                <br />
                <Button type="submit" variant="contained" className="mb-2">
                  Confirm
                </Button>
                <ToastContainer />
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default BuyNow;
