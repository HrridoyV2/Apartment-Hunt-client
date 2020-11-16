import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./BookingList.css";
const BookingList = () => {
    return (
        <div className="booking-area  row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 mt-3">
                <div className="d-flex justify-content-between mt-5 mb-5">
                    <h4>Booking List</h4>
                    <h6>Shohel Rana</h6>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email</th>
                                <th className="text-secondary" scope="col">Phone No</th>
                                <th className="text-secondary" scope="col">Message</th>
                                <th className="text-secondary" scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>shohel rana</td>
                                <td>shohelrana.beg@gmail.com</td>
                                <td>0000000</td>
                                <td>web developer</td>
                                <td>pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default BookingList;