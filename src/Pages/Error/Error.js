import React from "react";
import { Link } from "react-router-dom";
import './Error.css'

const Error = () => {
  return (
    <div className="error">

    <img className="img-fluid" src="http://lh5.ggpht.com/-BT2vrN7opxY/T29IOqvfO8I/AAAAAAAAGJQ/_UUXI7_-n7g/image%25255B10%25255D.png?imgmax=800" alt="" />
   
    <Link to="/"><button className="btn btn-primary mt-2 d-block">Back To Home</button></Link>
   
</div>
  );
};

export default Error;
