import React from "react";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 mb-4">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" className="d-inline-block align-center" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ml-auto">
            <div className="dropdown">
              <button
                className="btn btn-outline-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
