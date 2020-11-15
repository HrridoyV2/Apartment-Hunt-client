import React from 'react';
import './MyOrders.css';
import Sidebar from '../Shared/Siderbar/Sidebar'

function MyOrders() {
    return (
      <div className="row mt-5">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 mt-5 container ">
          <div className="d-flex justify-content-between">
            <h4>Add Rent House</h4>
            <h4>Sufi Ahmed</h4>
          </div>
          <div className="">
            
              <table className="p-5 my-4 table">
                <thead className="thead">
                  <th>House name</th>
                  <th>Price</th>
                  <th>Action</th>
                </thead>

                <tbody>
                  <tr>
                    <td>Wasington Avenue</td>
                    <td>$195</td>
                    <td className="order-btn">view Details</td>
                  </tr>
                  <tr>
                    <td>Wasington Avenue</td>
                    <td>$195</td>
                    <td className="order-btn">view Details</td>
                  </tr>
                  <tr>
                    <td>Wasington Avenue</td>
                    <td>$195</td>
                    <td className="order-btn">view Details</td>
                  </tr>
                </tbody>
              </table>
            
          </div>
        </div>
      </div>
    );
}

export default MyOrders
