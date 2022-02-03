import React from "react";
import { Alert, AlertTitle, Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const [error, setError] = useState("");
  const { user, registerUser, isLoading, authError } = useAuth();

  // hangle onBlur
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...registerData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setRegisterData(newLoginData);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(registerData);
    if (registerData.password !== registerData.password2) {
      setError(<Alert severity="error">Password Not Match!</Alert>);
      return;
    }
    registerUser(registerData.email, registerData.password,registerData.name);
  };

  return (
    <div className="my-5">
      <h2 className="mb-2">
        <i className="fas fa-sign-up-alt"></i> Please Sign Up
      </h2>
      <div className="shadow px-2 col-md-6 mx-auto p-5 rounded-3">
        {!isLoading && (
          <form
            onSubmit={handleRegister}
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
              type="email"
              name="email"
              onBlur={handleOnBlur}
              className="form-control"
              id=""
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              onBlur={handleOnBlur}
              className="form-control"
              placeholder="Password"
              required
            />
            <input
              type="password"
              name="password2"
              onBlur={handleOnBlur}
              className="form-control"
              placeholder="Re Type Your Password"
              required
            />
            <Button type="submit" variant="contained">
              <i className="fas fa-user-plus me-2"></i> Register
            </Button>
            {error}
          </form>
        )}
        {isLoading && <CircularProgress />}
        {user?.email && (
          <Alert severity="success">User created successfully</Alert>
        )}
        {authError && <Alert severity="error">{authError}</Alert>}
        <p>
          {" "}
          Already Registered? <Link to="/login">Sign In now!</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
