import React from 'react';
import { Link } from "react-router-dom";
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <section>
            {/* <div className="my-5" style={{ textAlign: 'center', padding: '20px 0' }} >
                <h1 style={{ textAlign: 'center', fontSize: "48px" }}
                >FIND YOUR HOUSE RENT</h1>
                <input className='input mt-5' type="text" placeholder="Search..." />
                <button style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}
                    className='search-button mx-3' type="submit">Find Now</button>
            </div> */}
            <div className="searchsection d-flex align-items-center">
                <div className="search container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <h1>FIND YOUR HOUSE RENT</h1>
                        <div className="col-md-8 my-5">
                            <input className="form-control" type="text" placeholder="Search....."></input>
                        </div>
                        <div className="col-md-4 text-md-right text-center">
                            <Link to="#" className="find-now-btn">Find Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;