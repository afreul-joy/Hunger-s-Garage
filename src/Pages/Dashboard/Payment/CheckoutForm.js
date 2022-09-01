import React from "react";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import  { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';
import { async } from "@firebase/util";

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements() 
  
  const handleSubmit = async (e)  =>{
    e.preventDefault();
 
  }
  return (
    <div>
         <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    </div>
  );
};

export default CheckoutForm;
