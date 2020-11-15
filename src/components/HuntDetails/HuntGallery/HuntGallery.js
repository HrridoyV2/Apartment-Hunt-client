import React from "react";
import "./HuntGallery.css";

import hunt from "../../../image/images/Rectangle 406.png";

import sm1 from "../../../image/images/Rectangle 410.png";
import sm2 from "../../../image/images/Rectangle 409.png";
import sm3 from "../../../image/images/Rectangle 408.png";
import sm4 from "../../../image/images/Rectangle 407.png";
function HuntGallery() {
  return (
    <div className="hunt-gallery">
      <div className="large m-2">
        <img src={hunt} className="img-fluid" />
      </div>
      <div className="d-flex justify-content-between mt-3">
        <img src={sm1} className="small" />
        <img src={sm2} className="small" />
        <img src={sm3} className="small" />
        <img src={sm4} className="small" />
      </div>
    </div>
  );
}

export default HuntGallery;
