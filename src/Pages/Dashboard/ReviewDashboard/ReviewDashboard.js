import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import "./ReviewDashboard.css";

const ReviewDashboard = () => {
  const [meal, setMeal] = useState({});
  const { id } = useParams();
  const { user } = useAuth();

  //-----------form method --------------
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();

    // Send data server POST API
    fetch("https://hunger-s-garage-server.vercel.app/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.insertedId) {
        //   toast.success("Order added successfully!", {
        //     position: "top-center",
        //     theme: "colored",
        //   });
        //   e.target.reset();
        // }
      });
  };

  return (
    <div>
      <h2 className="text-center my-3 fw-bold" style={{ color: "#3498db" }}>
        Customer Review
      </h2>
      <Container>
        <div className=" mx-auto">
          <div className="form-style">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={user.displayName}
                {...register("name")}
                required
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

              <textarea {...register("des")} />

              <input
                className="loginBtn mt-2"
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
