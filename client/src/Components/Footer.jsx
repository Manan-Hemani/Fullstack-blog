import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Footer = () => {
    return (
        <>
        <p>Footer</p>   
    </>
    )
}

const layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Footer;
