import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, AlertTitle, Button } from '@mui/material';
// import './Login.css'

const Login = () => {
    return (
        <div className="my-5">
        <h2 className="mb-2">Please Sign In</h2>
        <div className="shadow px-2 col-md-6 mx-auto p-5 rounded-3">
            {/* {
                success &&
                <Alert severity="success" className="mb-2 fw-bold">
                    <AlertTitle>Success</AlertTitle>
                    {success}
                </Alert>
            }
            {
                error &&
                <Alert severity="error" className="mb-2 fw-bold">
                    <AlertTitle>Error</AlertTitle>
                    {error}
                </Alert>
            } */}
            <form onSubmit="" className="col-md-8 d-flex flex-column gap-4 mx-auto mb-4" action="">
                <input type="email" onBlur="" className="form-control" id="" placeholder="Email" required />
                <input type="password" onBlur="" className="form-control" placeholder="Password" required />
                <Button type="submit" variant="contained"><i className="fas fa-sign-in-alt me-2"></i> Login</Button>
            </form>
            <Button onClick="" variant="contained" className="bg-warning">Forget Password? Reset Now</Button><br /><br />
            <Button onClick="" variant="contained" className="bg-danger"><i className="fab fa-google me-2"></i> Login With Google</Button><br /><br />
            <Button onClick="" variant="contained" className="bg-secondary"><i className="fab fa-github me-2"></i> Login With Github</Button><br /><br />
            <Link to='/register'>New User? Sign Up now!</Link>
        </div>
    </div>
    );
};

export default Login;