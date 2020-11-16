import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./MyRent.css";

const MyRent = () => {
    return (
        <div className="rent-area row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 mt-3">
                <div className="d-flex justify-content-between mt-5 mb-5">
                    <h4>My Rents</h4>
                    <h6>Shohel rana</h6>
                </div>
                <div className="rents-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-secondary" scope="col">House Name</th>
                                <th className="text-secondary" scope="col">Price</th>
                                <th className="text-secondary" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pt-4">Washington Avenue</td>
                                <td className="pt-4">$195</td>
                                <td><a class="btn" href="#">View Details</a></td>
                            </tr>
                            <tr>
                                <td className="pt-4">Gorgeous house</td>
                                <td className="pt-4">$395</td>
                                <td><a class="btn" href="#">View Details</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default MyRent;