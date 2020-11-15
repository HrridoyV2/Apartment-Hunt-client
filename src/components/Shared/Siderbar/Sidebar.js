import React from 'react';
import './Sidebar.css';
import logo from '../../../image/logos/Logo.png';
import one from '../../../image/logos/Group 1343.png'
import plus from '../../../image/logos/plus 1.png';
import house from '../../../image/logos/Group 33351.png';
function Sidebar() {
    return (
      <div className="text-center p-4">
        <div className="logo mb-5">
          <img src={logo} className="logo" />
        </div>
        <ul className="list-unstyled">
          <li className="ml-4">
            <img src={one} style={{ width: "20px", height: "20px" }} />
            <span className="text ml-2">Booking List</span>
          </li>
          <li className="ml-5 my-3">
            <img src={plus} style={{ width: "20px", height: "20px" }} />
            <span className="text ml-2">Add Rent House</span>
          </li>
          <li className="ml-0">
            <img src={house} style={{ width: "20px", height: "20px" }} />
            <span className="text ml-2">My Rent</span>
          </li>
        </ul>
      </div>
    );
}

export default Sidebar
