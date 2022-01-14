import React from 'react';
import './banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-text">
            <h1>Best Food Waiting For Your Belly</h1> 
            </div>

            <div ClassName="input-group vertical-center container">
            <input type="text" className="form-control " placeholder="Search Food Items" aria-describedby="button-addon2"/>
            <button className="btn btn-danger" type="button" id="button-addon2">Search</button>
            </div>

      </div>
    );
};

export default Banner;