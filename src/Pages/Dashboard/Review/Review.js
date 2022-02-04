import React from 'react';
import { Outlet } from 'react-router-dom';

const Review = () => {
    return (
        <div>
            <h1>Review Please Bro</h1>
            <Outlet />
        </div>
    );
};

export default Review;