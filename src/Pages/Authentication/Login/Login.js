import React from "react";
import { Link } from "react-router-dom";
import { Alert, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { loginUser, user, signInUsingGoogle, authError, isLoading } =
    useAuth();
  //---------Google Login----------
  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      console.log(result.user);
    });
  };

  // -----Email Password login-----
  const [loginData, setLoginData] = useState({});

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
    loginUser(loginData.email, loginData.password);
  };

  return (
    <div className="my-5">
      <h2 className="mb-2">Please Sign In</h2>
      <div className="shadow px-2 col-md-6 mx-auto p-5 rounded-3">
        <form
          onSubmit={handleLogin}
          className="col-md-8 d-flex flex-column gap-4 mx-auto mb-4"
          action=""
        >
          <input
            type="email"
            onChange={handleOnChange}
            name="email"
            className="form-control"
            id=""
            placeholder="Email"
            required
          />
          <input
            type="password"
            onChange={handleOnChange}
            name="password"
            className="form-control"
            placeholder="Password"
            required
          />
          <Button type="submit" variant="contained">
            <i className="fas fa-sign-in-alt me-2"></i> Login
          </Button>
        </form>
        {isLoading && <CircularProgress />}
        {user?.email && <Alert severity="success">Login successfully</Alert>}
        {authError && <Alert severity="error">{authError}</Alert>}
        <br />
        <Button
          onClick={handleGoogleSignIn}
          variant="contained"
          className="bg-danger"
        >
          <i className="fab fa-google me-2"></i> Google Sign In
        </Button>
        <br />
        <br />
        <p>
          {" "}
          New User? <Link to="/register">Sign Up now!</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
