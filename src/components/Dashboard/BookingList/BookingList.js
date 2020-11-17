import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import "./BookingList.css";
const BookingList = () => {
  const [user] = useContext(UserContext);
  const [allOrders, setAllOrders] = useState([]);
  const statuses = ["Pending", "Processing", "Done"];

  // loading all orders
  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [user.email]);
  console.log(allOrders);

  // handling status change
  function statusChange(id, e) {
    const modifiedOrder = { status: e.target.value };
    document.getElementById("update").innerText = "Updateding Changes";

    // updating status
    fetch(`https://radiant-hamlet-66107.herokuapp.com/edit/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(modifiedOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          document.getElementById("update").innerText =
            "Changes Updated Successfully!";
        }
      });
  }
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
                <th className="text-secondary" scope="col">
                  Name
                </th>
                <th className="text-secondary" scope="col">
                  Email
                </th>
                <th className="text-secondary" scope="col">
                  Phone No
                </th>
                <th className="text-secondary" scope="col">
                  Message
                </th>
                <th className="text-secondary" scope="col">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order) => (
                <tr>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.numer}</td>
                  <td>{order.message}</td>
                  <td>
                    Pending
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingList;