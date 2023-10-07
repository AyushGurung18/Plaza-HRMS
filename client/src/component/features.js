import React from "react";
import "../styles/features.css";
import FeatureLogo from "../assets/Selling-Easier.png";

function Features() {
  const check = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="#4f2060"
      class="bi bi-check"
      viewBox="0 0 16 16"
    >
      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
    </svg>
  );
  return (
    <div className="features-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 col-md-1 col-sm-2"></div>
          <div className="col-lg-10 col-md-10 col-sm-10 col-12">
            <div className="features-header">
              <h1>
                <b>
                  FEATURES THAT MAKE <br /> SELLING EASIER
                </b>
              </h1>
            </div>
            <div className="features-text">
              <span className="login-text">
                Conquer every stage of the customer journey with PLAZA CRM
              </span>
            </div>
            <div className="features-list">
              <li>
                {check} <span className="login-text"> Process Management</span>{" "}
              </li>
              <li>
                {check} <span className="login-text"> Analytics</span>{" "}
              </li>
              <li>
                {check}{" "}
                <span className="login-text"> Performace Management</span>
              </li>
              <li>
                {check}{" "}
                <span className="login-text">
                  Predictive Sales and Inteliigence
                </span>
              </li>
              <li>
                {check} <span className="login-text">Customization</span>
              </li>
              <li>
                {check}
                <span className="login-text"> Marketing Automation</span>
              </li>
              <li>
                {check} <span className="login-text">Mobile Apps</span>
              </li>
              <li>
                {check}
                <span className="login-text">Security </span>
              </li>
              <li>
                {check} <span className="login-text">Developer Platform</span>
              </li>
            </div>
            <button className="features-button">JOIN NOW</button>
           
          </div>
 <div className="features-logo">
              <img className="feature-img" alt="" src={FeatureLogo} />
            </div>
          <div className="col-lg-1 col-md-1 col-sm-2"></div>
        </div>
      </div>
    </div>
  );
}
export default Features;
