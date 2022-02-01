import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, AlertTitle, Button } from '@mui/material';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle}= useAuth()
    const [loading, setLoading] = useState(true)
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
            setSuccess('Signed-In successfully!');
            // navigate(redirect_Url)
    })
    }

    // -----Email Password login-----
    const [loginData,setLoginData] = useState({})
    const [error,setError] = useState('')
    const [success, setSuccess] = useState('');
    const auth = getAuth();

    const handleOnChange = (e) =>{
        const field = e.target.name
        const value = e.target.value
        const newLoginData = {...loginData};
        newLoginData[field] = value
        setLoginData(newLoginData)
        
    }

    const handleLogin = (e) =>{
        e.preventDefault()
        console.log(loginData)
        // if(/^\S+@\S+\.\S+$/.test(password)){
        //   return setError("You Must Be provide valid email")
        // }

    //     signInWithEmailAndPassword(auth, email, password)
    //     setLoading(true)
    //     .then((result) => {
    //         if (result.user.emailVerified) {
    //             // history.push(redirect_uri);
    //             console.log(result.user.emailVerified)
    //             // setUser(result.user);
    //             setSuccess('Signed-In successfully!');
    //             setError('');
    //         }
    //         else {
    //             setError('You must verify your email to get access to your content!');
    //             setSuccess('');
    //         }
    //     })
    //     .catch(err => {
    //         setError(err.code);
    //         setSuccess('');
    //     })
    //     .finally(()=>setLoading(false));
    // }




    //---- Forgot & Reset password----
    // const handleResetPassword=()=>{
    //     sendPasswordResetEmail(auth, email)
    //     .then((result) => { 
    //         setError('')   
    //         setSuccess('Password Reset confirmation sent to your email successfully!');
    //     })
    //     .catch(error=>{
    //         setError(error.message)
    //          setSuccess('');
    //     })
    }


    return (
        <div className="my-5">
        <h2 className="mb-2">Please Sign In</h2>
        <div className="shadow px-2 col-md-6 mx-auto p-5 rounded-3">
            {
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
            }
            <form onSubmit={handleLogin} className="col-md-8 d-flex flex-column gap-4 mx-auto mb-4" action="">
                <input type="email" onChange={handleOnChange} name="email" className="form-control" id="" placeholder="Email" required />
                <input type="password" onChange={handleOnChange} name="password" className="form-control" placeholder="Password" required />
                <Button type="submit" variant="contained"><i className="fas fa-sign-in-alt me-2"></i> Login</Button>
            </form>
            {/* <Button onClick={handleResetPassword} variant="contained" className="bg-warning">Forget Password? Reset Now</Button><br /><br /> */}
            <Button onClick={handleGoogleSignIn} variant="contained" className="bg-danger"><i className="fab fa-google me-2"></i> Google Sign In</Button><br /><br />
             <br />
            <p> New User? <Link to='/register'>Sign Up now!</Link>  </p>
        </div>
    </div>
    );
};

export default Login;