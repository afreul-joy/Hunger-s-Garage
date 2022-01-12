import React from 'react';
import './banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-text">
            <h1>Best Food Waiting For Your Belly</h1> 
            </div>

            <div class="input-group vertical-center container">
            <input type="text" class="form-control " placeholder="Search Food Items" aria-describedby="button-addon2"/>
            <button class="btn btn-danger" type="button" id="button-addon2">Search</button>
            </div>

            

      </div>
    );
};

export default Banner;