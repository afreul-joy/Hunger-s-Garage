import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Tabs.css'

const Tabs = () => {
    return (
        <div>
            <div className="foodNav mt-5 mb-3">
            <NavLink to="/allMeals/breakfast" className={(selected) => (selected.isActive ? 'selected' : '')}>Breakfast</NavLink>
            <NavLink to="/"  className={(selected) => (selected.isActive ? 'selected' : '')}>Lunch</NavLink>
            <NavLink to="/allMeals/dinner" className={(selected) => (selected.isActive ? 'selected' : '')} >Dinner</NavLink>
        </div>
            <Outlet />
        </div>
    );
};

export default Tabs;