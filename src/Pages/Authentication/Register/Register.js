import React from 'react';
import { Alert, AlertTitle, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification,updateProfile } from "firebase/auth";

const Register = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const [success, setSuccess] = useState('');
    const [name,setName] = useState('')

    // const {signInUsingGoogle}= useAuth() 

    const auth = getAuth();

    const handleRegister = (e) =>{
        e.preventDefault()
        console.log(email,password);

        if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
            setError('Name cannot contain number!');
            setSuccess('');
            return;
        }
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            setError('Invalid Email!');
            setSuccess('');
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
            setError('Password must be minimum eight characters, at least one uppercase letter, one lowercase letter and one number!');
            setSuccess('');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user
            console.log(user);
            setError('')
            varifyEmail()
            setUserName()
            setSuccess('Signed-Up successfully!');
        })
        .catch(error=>{
            setError(error.message)
            setSuccess('');
        })
    }
    const handleEmailChange = (e) =>{
        // console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }

    //----- Send Varification Mail to User----
    const varifyEmail=()=>{
        sendEmailVerification(auth.currentUser)
        .then((result) => {
            console.log(result);
            setSuccess('Verification message sent to your email!');
        });
    }
    //---- User Additional Information-----
    const handleNameChange=(e)=>{
        setName(e.target.value)
    }

    const setUserName=()=>{
        updateProfile(auth.currentUser, {displayName: name})
          .then((result) => { })
    }

    return (
        <div className="my-5">
        <h2 className="mb-2"><i className="fas fa-sign-up-alt"></i> Please Sign Up</h2>
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
            <form onSubmit={handleRegister} className="col-md-8 d-flex flex-column gap-4 mx-auto mb-4" action="">
                <input type="text" onBlur={handleNameChange} className="form-control" id="" placeholder="Name" required />
                <input type="email" onBlur={handleEmailChange} className="form-control" id="" placeholder="Email" required />
                <input type="password" onBlur={handlePasswordChange} className="form-control" placeholder="Password" required />
                <Button type="submit" variant="contained"><i className="fas fa-user-plus me-2"></i> Register</Button>
            </form>
         <p> Already Registered? <Link to='/login'>Sign In now!</Link></p> 
        </div>
    </div>
    );
};

export default Register;