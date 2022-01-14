import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, AlertTitle, Button } from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle}= useFirebase()
    //------Privet Route & Navigate---------
    // let location = useLocation();
    // const navigate = useNavigate()
    // const redirect_Url = location.state?.from || '/'
    // console.log('came from',location.state?.from);

    //---------Google Login----------
    const handleGoogleSignIn=()=>{
        signInUsingGoogle()
        .then((result) => {
            console.log(result.user);
            // navigate(redirect_Url)
    })
    }

    // -----Email Password login-----
    // const [email,setEmail] = useState('')
    // const [password,setPassword] = useState('')
    // const [error,setError] = useState('')

    // const auth = getAuth();

    // const handleLogin = (e) =>{
    //     e.preventDefault()
    //     console.log(email,password);

    //     if(/^\S+@\S+\.\S+$/.test(password)){
    //       return setError("You Must Be provide valid email")
    //     }

    //     signInWithEmailAndPassword(auth, email, password)
    //     .then((result) => {
    //         const user = result.user
    //         console.log(user);
    //         setError('')
    //         // navigate(redirect_Url)
    //     })
    //     .catch(error=>{
    //         setError(error.message)
    //     })
    // }

    // const handleEmailChange = (e) =>{
    //     setEmail(e.target.value);
    // }

    // const handlePasswordChange = (e) =>{
    //     setPassword(e.target.value);
    // }

    // //---- Forgot & Reset password----
    // const handleResetPassword=()=>{
    //     sendPasswordResetEmail(auth, email)
    //     .then((result) => { 
    //         setError('')   
    //         alert("Please Check Your Email")
    //     })
    //     .catch(error=>{
    //         setError(error.message)
    //     })
    // }


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
                <input type="email" onClick="" className="form-control" id="" placeholder="Email" required />
                <input type="password" onClick="" className="form-control" placeholder="Password" required />
                <Button type="submit" variant="contained"><i className="fas fa-sign-in-alt me-2"></i> Login</Button>
            </form>
            <Button onClick="" variant="contained" className="bg-warning">Forget Password? Reset Now</Button><br /><br />
            <Button onClick={handleGoogleSignIn} variant="contained" className="bg-danger"><i className="fab fa-google me-2"></i> Google Sign In</Button><br /><br />
             <br />
            <p> New User? <Link to='/register'>Sign Up now!</Link>  </p>
        </div>
    </div>
    );
};

export default Login;