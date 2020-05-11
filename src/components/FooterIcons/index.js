import React from "react";
import Partner1Logo from "../../assets/images/placeholders/placeholder-logo-3.png";
import Partner4Logo from "../../assets/images/placeholders/placeholder-logo-6.png";
import Partner5Logo from "../../assets/images/placeholders/placeholder-logo-7.png";
import Partner6Logo from "../../assets/images/placeholders/placeholder-logo-8.png";

function FooterIcons() {
  return (
    <div class="footer-icons">
      <div className="footer-icon-item">
        <img src={Partner1Logo} alt="" />
      </div>
      <div className="footer-icon-item">
        <img src={Partner4Logo} alt="" />
      </div>
      <div className="footer-icon-item">
        <img src={Partner5Logo} alt="" />
      </div>
      <div className="footer-icon-item">
        <img src={Partner6Logo} alt="" />
      </div>
      <div className="footer-icon-item">
        <img src={Partner4Logo} alt="" />
      </div>
    </div>
  );
}

export default FooterIcons;
