import { Button } from "react-bootstrap";
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './banner.css'

const Banner = () => {
    return (
        <div className='banner d-flex justify-content-center align-items-center'>
            <div className="">
            <h1>Best Food Waiting For Your Belly</h1> 
            <div class="input-group mx-auto container">
            <input type="text" class="form-control" placeholder="Search Food Items" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-danger" type="button" id="button-addon2">Search</button>
            </div>

            </div>

      </div>
    );
};

export default Banner;