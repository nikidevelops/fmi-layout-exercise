import React from "react";

function SignInRegisterButtons() {
  return (
    <div className="d-flex">
      <div className="ml-3">
        <a
          href="/"
          className="btn btn-lg text-white font-weight-normal btn-secondary"
        >
          <span className="small">Sign In</span>
        </a>
      </div>
      <div className="ml-3">
        <button className="btn btn-lg text-white font-weight-normal btn-primary small">
          <span className="small">Register</span>
        </button>
      </div>
    </div>
  );
}

export default SignInRegisterButtons;
