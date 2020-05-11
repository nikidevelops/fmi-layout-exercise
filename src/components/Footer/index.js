import React from "react";
import logo from "../../assets/images/logo.svg";

function Footer() {
  return (
    <div className="footer-row row no-gutters">
      <div className="col footer-wider-col">
        <div className="footer-col-heading">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="footer-col-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
          labore. Quod, tenetur cupiditate dolores consequatur voluptas, placeat
          quo eius temporibus odit ducimus provident. Commodi laboriosam itaque
          maxime provident. Quia, repellat.
        </div>
      </div>
      <div className="col">
        <div className="footer-col-heading">
          <h6 className="mt-2">Europe</h6>
        </div>
        <div className="footer-col-content">
          <ul className="footer-links">
            <li>
              <a href="/">Italy</a>
            </li>
            <li>
              <a href="/">Spain</a>
            </li>
            <li>
              <a href="/">France</a>
            </li>
            <li>
              <a href="/">Netherlands</a>
            </li>
            <li>
              <a href="/">Sweden</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="footer-col-heading">
          <h6 className="mt-2">Bulgaria</h6>
        </div>
        <div className="footer-col-content">
          <ul className="footer-links">
            <li>
              <a href="/">Sofia</a>
            </li>
            <li>
              <a href="/">Plovdiv</a>
            </li>
            <li>
              <a href="/">Varna</a>
            </li>
            <li>
              <a href="/">Burgas</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="footer-col-heading">
          <h6 className="mt-2">More info</h6>
        </div>
        <div className="footer-col-content">
          <ul className="footer-links">
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Site map</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col">
        <div className="footer-col-heading">
          <h6 className="mt-2">Contacts</h6>
        </div>
        <div className="footer-col-content">
          <ul className="footer-links">
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
            <li>
              <a href="/">Contact form</a>
            </li>
            <li>
              <a href="/">Write review</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col footer-wider-col">
        <div className="footer-col-heading">
          <h6 className="mt-2">Find us</h6>
        </div>
        <div className="footer-col-content">
          <div className="social-media-row">
            <a href="/" className="social-media-item">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/" className="social-media-item">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="/" className="social-media-item">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="/" className="social-media-item">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
