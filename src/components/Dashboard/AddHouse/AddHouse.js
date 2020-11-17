import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import icon from "../../../image/logos/cloud-upload-outline 1.png";
import "./AddHouse.css";
import { useForm } from 'react-hook-form';

const AddHouse = () => {
     const [newService, setNewService] = useState({});
    const [file, setFile] = useState(null);

    // handling blur
    function handleBlur(e) {
        const optService = {...newService};
        optService[e.target.name] = e.target.value;
        setNewService(optService)
    }

    // handle file
    function handleFile(e) {
        const optFile = e.target.files[0];
        setFile(optFile);
    }
    
    // adding new service
    function addService(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', newService.title);
        formData.append('location', newService.location);
        formData.append('price', newService.price);
        
        fetch("http://localhost:5000/addService", {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              document.getElementById("serviceForm").innerHTML =
                '<h3 class="text-center text-success mt-5"><b>Service Added Successfully</b></h3>';
            }
          });
    }
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
            <form id="serviceForm" onSubmit={addService}>
              <div className="form-group row">
                <div className="col-6">
                  <label htmlFor="title">House Title</label>
                  <input
                    name="title"
                    onBlur={handleBlur}
                    type="text"
                    id="title"
                    className="form-control"
                    placeholder="Enter title"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="price">Price</label>
                  <input
                    onBlur={handleBlur}
                    name="price"
                    type="text"
                    id="price"
                    className="form-control"
                    placeholder="Enter Price"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-6">
                  <label htmlFor="location">Location</label>
                  <input
                    onBlur={handleBlur}
                    name="location"
                    type="text"
                    id="location"
                    className="form-control"
                    placeholder="Enter Location"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="bedroom">No of Bedroom</label>
                  <input
                    name="bedroom"
                    type="text"
                    id="bedroom"
                    className="form-control"
                    placeholder="Enter No of Bedroom"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-6">
                  <label htmlFor="bathroom">No of Bathroom</label>
                  <input
                    name="bathroom"
                    type="text"
                    id="bathroom"
                    className="form-control"
                    placeholder="Enter No of Bathroom"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <div className="file-upload">
                    <p className="mb-2">Thumbnail</p>
                    <label htmlFor="file">
                      <img style={{ width: "20px" }} src={icon} alt="" />
                      <span>Upload Image</span>
                    </label>
                    <input
                      name="file"
                      onBlur={handleFile}
                      type="file"
                      id="file"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddHouse;