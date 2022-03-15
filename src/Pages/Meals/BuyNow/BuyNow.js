import React, { useEffect, useState } from "react";
import {Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./BuyNow.css";
import {  useLocation, useNavigate } from 'react-router-dom';

const BuyNow = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { user } = useAuth();

   //------ Navigate---------
  let location = useLocation();
  const navigate = useNavigate()
  const redirect_Url = location.state?.from || '/dashboard/myOrders'
  
  //showing single details
  useEffect(() => {
    const url = `https://hungers-garage.herokuapp.com/meals/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  //-----------form method --------------
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    data.status = "Pending";
    data.img = product.img;
    data.productName = product.name;
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
        navigate(redirect_Url)
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
    <div className="place-banner">
      <h5 className="mb-2" > “Food is for eating, and good food is to be enjoyed… <br /> We think food is, actually, very beautiful in itself.”</h5>
      <Link className="link-style" to="/">
        Home
      </Link>
      <Link className="link-style" to="/meals">
        All Foods
      </Link>
    </div>
    <div className="place-area">
      <Container>
        <Row className="mb-5 mt-3">
          <Col xs={12} md={6} lg={6}>
            <div className="detail-area">
              <div className="text-center">
                <img
                  style={{ width: "250px", borderRadius: "20px" }}
                  src={product.img}
                  alt=""
                />
              </div>
              <div>
                <h3
                  className="text-center mt-2 fw-bold"
                  style={{ color: "#3498db" }}
                >
                  {product.name}
                </h3>
                <h4 className="text-center">Price: {product.price}</h4>
                <p>{product.description}</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="mt-4">
            <h2 className="text-center fw-bold" style={{ color: "#3498db" }}>
              Place Your Order!
            </h2>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
                {...register("address")}
                placeholder="Address"
                required
              />
              <input
                type="number"
                {...register("cell_phone")}
                placeholder="Phone"
                required
              />
              <input className="loginBtn" type="submit" value="Submit & Billing" />
              <ToastContainer />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default BuyNow;
