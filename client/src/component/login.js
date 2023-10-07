import React from "react";
import "../styles/login.css";
import logo2 from "../assets/Trial-Illustration.png";
import inputlogo1 from "../assets/Company-Name.png";
import inputlogo2 from "../assets/Email-Address.png";
import inputlogo3 from "../assets/Phone-number.png";
import inputlogo4 from "../assets/Password.png";
import inputlogo5 from "../assets/Confirm-Password.png";
import AuthLogo2 from "../assets/Twitter.png";
import AuthLogo1 from "../assets/Facebook.png";

function Login() {
  return (
    <div>
      <div className="loginpage">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2"></div>
            <div className="col-xl-4">
              <div>
                <img alt="" className="login-image" src={logo2} />
              </div>
            </div>
            <div className="col-xl-4">
              <div className="login-form">
                <h1 className="login-header">
                  Get started with your <br />{" "}
                  <span className="login-header2">14-day free trial</span>
                </h1>
                <div className="input-cred">
                  <div className="input-container">
                    <input type="name" placeholder="Company Name" />
                    <span className="icon">
                      <img src={inputlogo1} alt="Phone Icon" />
                    </span>
                  </div>
                  <div className="input-container">
                    <input type="email" placeholder="Email Address" />
                    <span className="icon">
                      <img src={inputlogo2} alt="Phone Icon" />
                    </span>
                  </div>
                  <div className="input-container">
                    <input type="tel" placeholder="Phone Number" />
                    <span className="icon">
                      <img src={inputlogo3} alt="Phone Icon" />
                    </span>
                  </div>
                  <div className="input-container">
                    <input type="password" placeholder="Password" />
                    <span className="icon">
                      <img src={inputlogo4} alt="Phone Icon" />
                    </span>
                  </div>
                  <div className="input-container">
                    <input type="password" placeholder="Confirm Password" />
                    <span className="icon">
                      <img src={inputlogo5} alt="Phone Icon" />
                    </span>
                  </div>
                </div>
                <div className="input-container">
                  <input type="checkbox" id="agreeTerms" className="checkbox" />
                  <label htmlFor="agreeTerms" className="checkbox-label">
                    <span className="login-text">Agree with </span>{" "}
                    <span>Terms and Conditions</span>
                  </label>
                </div>
                <button className="button2">Create Account</button>
                <div className="or-separator">
                  <div className="line"></div>
                  <span className="login-text">OR</span>
                  <div className="line"></div>
                </div>
                <div>
                  <img alt="" className="authsignup" src={AuthLogo1} />
                  <img alt="" className="authsignup" src={AuthLogo2} />
                </div>
              </div>
            </div>
            <div className="col-xl-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
