import React from 'react';
import { Alert, AlertTitle, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="my-5">
        <h2 className="mb-2"><i className="fas fa-sign-up-alt"></i> Please Sign Up</h2>
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
                <input type="text" onBlur="" className="form-control" id="" placeholder="Name" required />
                <input type="email" onBlur="" className="form-control" id="" placeholder="Email" required />
                <input type="password" onBlur="" className="form-control" placeholder="Password" required />
                <Button type="submit" variant="contained"><i className="fas fa-user-plus me-2"></i> Register</Button>
            </form>
         <p> Already Registered? <Link to='/login'>Sign In now!</Link></p> 
        </div>
    </div>
    );
};

export default Register;