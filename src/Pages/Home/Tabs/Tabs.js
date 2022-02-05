import { Button } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Tabs.css'

import Breakfast from './Breakfast/Breakfast';
import Dinner from './Dinner/Dinner';
import Lunch from './Lunch/Lunch';

const Tabs = () => {
    // const selected = {
    //     fontWeight: "bold",
    //     color: "red",
    //     borderBottom: "3px solid red"
    // }

    return (
        <div>
            <h2>Gallery </h2>

            <div className="foodNav my-5">
            <NavLink to="/allMeals/breakfast" className={(selected) => (selected.isActive ? 'selected' : '')}>Breakfast</NavLink>
            <NavLink to="/allMeals/lunch"  className={(selected) => (selected.isActive ? 'selected' : '')}>Lunch</NavLink>
            <NavLink to="/allMeals/dinner" className={(selected) => (selected.isActive ? 'selected' : '')} >Dinner</NavLink>
        </div>
            <Outlet />
        </div>
    );
};

export default Tabs;