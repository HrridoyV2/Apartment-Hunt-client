import React from 'react';
import img1 from '../../../../image/images/Rectangle 394.png'
import img2 from '../../../../image/images/Rectangle 396.png'
import img3 from '../../../../image/images/Rectangle 398.png'
const HouseRent = () => {
    return (
        <section>
            <div className='container'>
                <div className="text-center my-5" style={{ color: '#16322E' }}>
                    <h5>House Rent</h5>
                    <h1 style={{ fontWeight: 'bold' }}>Discover the latest
                    rent
                    <br />
                    available today </h1>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mt-4">
                                <img className="card-img-top" src={img1} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Washington Avenue</h4>
                                    <p>Nasirabad H/S, Chattogram</p>
                                    <p>3 Bedrooms, 2Bathroom</p>
                                    <div className="d-flex justify-content-between">
                                        <h2>$194</h2>
                                        <button>View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mt-4">
                                <img className="card-img-top" src={img2} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Family Apartment Three</h4>
                                    <p>Nasirabad H/S, Chattogram</p>
                                    <p>3 Bedrooms, 2Bathroom</p>
                                    <div className="d-flex justify-content-between">
                                        <h2>$194</h2>
                                        <button>View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mt-4">
                                <img className="card-img-top" src={img3} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Gorgeous house</h4>
                                    <p>Nasirabad H/S, Chattogram</p>
                                    <p>3 Bedrooms, 2Bathroom</p>
                                    <div className="d-flex justify-content-between">
                                        <h2>$194</h2>
                                        <button>View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mt-4">
                                <img className="card-img-top" src={img1} alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Washington Avenue</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HouseRent;