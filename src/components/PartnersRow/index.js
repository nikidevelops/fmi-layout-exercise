import React from "react";
import Partner1Logo from "../../assets/images/placeholders/placeholder-logo-3.png";
import Partner2Logo from "../../assets/images/placeholders/placeholder-logo-4.png";
import Partner3Logo from "../../assets/images/placeholders/placeholder-logo-5.png";
import Partner4Logo from "../../assets/images/placeholders/placeholder-logo-6.png";
import Partner5Logo from "../../assets/images/placeholders/placeholder-logo-7.png";
import Partner6Logo from "../../assets/images/placeholders/placeholder-logo-8.png";

function PartnersRow() {
  return (
    <div className="row">
      <div className="col-6 col-md-2 mb-2">
        <a href="/" className="partner-row-item">
          <img src={Partner1Logo} alt="" />
        </a>
      </div>
      <div className="col-6 col-md-2 mb-2">
        <a href="/" className="partner-row-item">
          <img src={Partner2Logo} alt="" />
        </a>
      </div>
      <div className="col-6 col-md-2 mb-2">
        <a href="/" className="partner-row-item">
          <img src={Partner3Logo} alt="" />
        </a>
      </div>
      <div className="col-6 col-md-2 mb-2">
        <a href="/" className="partner-row-item">
          <img src={Partner4Logo} alt="" />
        </a>
      </div>
      <div className="col-6 col-md-2 mb-2">
        <a href="/" className="partner-row-item">
          <img src={Partner5Logo} alt="" />
        </a>
      </div>
      <div className="col-6 col-md-2 mb-2">
        <a href="/" className="partner-row-item">
          <img src={Partner6Logo} alt="" />
        </a>
      </div>
    </div>
  );
}

export default PartnersRow;
