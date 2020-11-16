import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import icon from "../../../image/logos/cloud-upload-outline 1.png";
import "./AddHouse.css";

const AddHouse = () => {
    return (
        <div className="house-area row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 mt-3">
                <div className="d-flex justify-content-between mt-5 mb-5">
                    <h4>Add Rent House</h4>
                    <h6>Shohel rana</h6>
                </div>
                <div className="booking-form ml-md-5 ml-0">
                    <form >
                        <div className="form-group row">
                            <div className="col-6">
                                <label htmlFor="title">House Title</label>
                                <input name="title" type="text" id="title" className="form-control" placeholder="Enter title" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="price">Price</label>
                                <input name="price" type="text" id="price" className="form-control" placeholder="Enter Price" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-6">
                                <label htmlFor="location">Location</label>
                                <input name="location" type="text" id="location" className="form-control" placeholder="Enter Location" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="bedroom">No of Bedroom</label>
                                <input name="bedroom" type="text" id="bedroom" className="form-control" placeholder="Enter No of Bedroom" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-6">
                                <label htmlFor="bathroom">No of Bathroom</label>
                                <input name="bathroom" type="text" id="bathroom" className="form-control" placeholder="Enter No of Bathroom" />
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="file-upload">
                                    <p className="mb-2">Thumbnail</p>
                                    <label htmlFor="file">
                                        <img style={{ width: "20px" }} src={icon} alt="" />
                                        <span >Upload Image</span>
                                    </label>
                                    <input name="file" type="file" id="file" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddHouse;