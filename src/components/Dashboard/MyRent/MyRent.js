import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import "./MyRent.css";

const MyRent = () => {
  const [myRents, setMyRents] = useState([]);
  const [user] = useContext(UserContext);

  // loading user's orders
  useEffect(() => {
    fetch(`http://localhost:5000/myRents/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyRents(data));
  }, [user.email]);
  console.log(myRents);

  return (
    <div className="rent-area row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8 mt-3">
        <div className="d-flex justify-content-between mt-5 mb-5">
          <h4>{user.name}</h4>
        </div>
        <div className="rents-table">
          <table className="table">
            <thead>
              <tr>
                <th className="text-secondary" scope="col">
                  House Name
                </th>
                <th className="text-secondary" scope="col">
                  Price
                </th>
                <th className="text-secondary" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
              myRents.map(rents => 
                <tr>
                  <td className="pt-4">{rents.orderedRent.title}</td>
                  <td className="pt-4">${rents.orderedRent.price}</td>
                  <td>
                    <a class="btn" href="#">
                      View Details
                    </a>
                  </td>
                </tr>
              )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyRent;