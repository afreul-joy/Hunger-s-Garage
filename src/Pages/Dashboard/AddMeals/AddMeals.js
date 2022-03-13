import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, Container, Form, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../../Images/AddMeals/addMeals.jpg";
const BuyNow = () => {
  //form method
  const [addData, setAddData] = useState({});

  // handle onBlur
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...addData };
    newLoginData[field] = value;
    // console.log(newLoginData);
    setAddData(newLoginData);
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(addData);
    // Send data server POST API
    fetch("https://hungers-garage.herokuapp.com/addMeals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addData),
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
      <h2 className="text-success my-2">Please Add Meals </h2>
      <Container>
        <Row>
          <div className="col-lg-4">
            <Card className="my-3">
              <Card.Img className=" mx-auto img-fluid" src={img} alt="" />
            </Card>
          </div>
          <div className="col-lg-8">
            <form
              onSubmit={handleForm}
              className="col-md-8 d-flex flex-column gap-4 mx-auto mb-4"
            >
              <input
                onBlur={handleOnBlur}
                name="name"
                className="form-control"
                id=""
                placeholder="Name"
                required
              />
              <input
                type="text"
                name="details"
                onBlur={handleOnBlur}
                className="form-control"
                id=""
                placeholder="Details"
                required
              />
              <input
                type="url"
                name="img"
                onBlur={handleOnBlur}
                className="form-control"
                placeholder="URL"
                required
              />
              <input
                type="text"
                name="price"
                onBlur={handleOnBlur}
                className="form-control"
                placeholder="Price"
                required
              />
              <Button type="submit" variant="contained">
                <i className="fas fa-plus me-2"></i> Add Meals
              </Button>
              <ToastContainer />
            </form>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default BuyNow;
