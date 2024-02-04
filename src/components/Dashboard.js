import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./Login";
import Home from './Home';
import Product from'./Product'
import Cart from './Cart'
import CustomNavbar from './CustomNavbar';
import Signup from './Signup'


function Dashboard() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                <Route path="/cart" element = {<Cart />} />          
            </Routes>
        </div>
    );
}

export default Dashboard;