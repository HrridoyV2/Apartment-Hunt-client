import React from 'react';
import Navbar from "../../../components/Home/Home/Navbar/Navbar";
import Apartment from '../Apartment/Apartment';
import BookingDetails from '../BookingDetails/BookingDetails';

const HomeDetails = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Apartment></Apartment>
            <BookingDetails></BookingDetails>
        </div>
    );
};

export default HomeDetails;
