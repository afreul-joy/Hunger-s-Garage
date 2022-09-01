import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LclMjBLMFfgNXFxNK6TG4IXQIS3ZssjUWczKW16vOfYsJi9cpa6av0moMMrlDRPcmYgZUwrXjls3i94oeh6RTDC00OX3omkUx"
);

const Payment = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // console.log(product);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div>
      <h2>Please pay for: {product.productName} </h2>
      <h3> pay : ${product.productPrice} </h3>
      <Elements stripe={stripePromise}>
        < CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
