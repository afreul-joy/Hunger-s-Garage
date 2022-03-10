import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Tabs.css'

const Tabs = () => {
    return (
        <div>
            <h2 className="fdnav-h">Choose Your Favorite Food For !</h2>
            <div className="foodNav my-2 mb-3 mx-auto">
            <NavLink to="/breakfast" className={(selected) => (selected.isActive ? 'selected' : '')}>Breakfast</NavLink>
            <NavLink to="/"  className={(selected) => (selected.isActive ? 'selected' : '')}>Lunch</NavLink>
            <NavLink to="/dinner" className={(selected) => (selected.isActive ? 'selected' : '')} >Dinner</NavLink>
        </div>
            <Outlet />
        </div>
    );
};

export default Tabs;