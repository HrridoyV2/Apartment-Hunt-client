import React from 'react';
import HeaderMain from './HeaderMain/HeaderMain';
import HouseRent from './HouseRent/HouseRent';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div> Git 
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <HouseRent></HouseRent>
        </div>
    );
};

export default Home;