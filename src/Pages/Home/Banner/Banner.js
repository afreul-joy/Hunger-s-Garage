import { Button } from "react-bootstrap";
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './banner.css'

const Banner = () => {
    return (
        <div className='banner'>
       <h2>Banner</h2> 
      
      <form action="#">
      <input className='rounded-pill' /> 
      <Button className='rounded-pill' variant="danger">Search</Button>
      </form>
        
      
   
      </div>
    );
};

export default Banner;