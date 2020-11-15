import React from "react";
import Navbar from "../../../components/Home/Home/Navbar/Navbar";
import HuntGallery from '../HuntGallery/HuntGallery';
import HuntInfo from '../HuntInfo/HuntInfo';
import BookingForm from '../BookingForm/BookingForm';
function HuntDetails() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <HuntGallery className />
            <HuntInfo />
          </div>
          <div className="col-4">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HuntDetails;
