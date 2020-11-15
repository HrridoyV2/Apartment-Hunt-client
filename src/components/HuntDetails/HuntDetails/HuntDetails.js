import React from "react";
import Navbar from "../../../components/Home/Home/Navbar/Navbar";
import BookingForm from "../BookingForm/BookingForm";
import HuntGallery from "../HuntGallery/HuntGallery";
import HuntInfo from "../HuntInfo/HuntInfo";

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
