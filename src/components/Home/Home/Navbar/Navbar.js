import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../../../image/logos/Logo.png';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img style={{ width: '150px' }} src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" to="/" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 font-weight-bold" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 font-weight-bold" to="/">About</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 font-weight-bold" to="/">Service</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 font-weight-bold" to="/">Concerns</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 font-weight-bold" to="/">Event</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 font-weight-bold" to="/">Contact</Link>
                        </li>
                    </ul>
                    <Link to='/login' className='link'>
                        <button style={{ padding: '4px 20px', color: "white", backgroundColor: " #275A53" }}
                            className='btn-sm font-weight-bold'>Login</button></Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;