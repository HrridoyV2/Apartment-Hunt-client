import React from 'react';
import home1 from "../../../image/images/Rectangle 406.png";
import home2 from "../../../image/images/Rectangle 410.png";
import home3 from "../../../image/images/Rectangle 409.png";
import home4 from "../../../image/images/Rectangle 408.png";
import home5 from "../../../image/images/Rectangle 407.png";
import BookingInfo from '../BookingInfo/BookingInfo';
import BookingForm from '../BookingForm/BookingForm';
import './BookingDetails.css';

const BookingDetails = () => {
    return (
        <section className="container my-5">
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="img-fluid">
                            <img src={home1} className="img-fluid" />
                        </div>
                        {/* <div className="row my-4">
                            <div className="col-md-3">
                                <img src={home2} className="small" />
                            </div>
                            <div className="col-md-3">
                                <img src={home3} className="small" />
                            </div>
                            <div className="col-md-3">
                                <img src={home4} className="small" />
                            </div>
                            <div className="col-md-3">
                                <img src={home5} className="small" />
                            </div>
                        </div> */}
                        <div className="room-gallery d-flex justify-content-between mt-3">
                            <img src={home2} className="small" />
                            <img src={home3} className="small" />
                            <img src={home4} className="small" />
                            <img src={home5} className="small" />
                        </div>

                        <div className="my-3">
                            <BookingInfo></BookingInfo>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <BookingForm></BookingForm>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingDetails;