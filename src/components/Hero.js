import React from "react";

// import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={"https://upload.wikimedia.org/wikipedia/en/8/8a/VGTU_seal.svg"} alt="React logo" width="120" />
    <h1 className="mb-4">React.js Sample Project</h1>

    <p className="lead">
      This is a sample application that demonstrates an authentication flow for
      a Two Factor Authentication, using <a href="https://reactjs.org">React.js</a>
    </p>
  </div>
);

export default Hero;
