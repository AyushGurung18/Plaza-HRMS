import React from "react";
import "../styles/home.css";
import AppLogo from "../assets/Logo-White.png";
import RegisterLogo from "../assets/Register-Icon.png";
import LoginLogo from "../assets/Login.png";
import homelogo from "../assets/Slider-Image.png";

function Home() {
  return (
    <div className="homepage">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-1"></div>
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className="navbar">
              <navlogo>
                <img alt="Applogo" src={AppLogo} />
              </navlogo>
              <nav className="nav-item">
                <div className="nav-link mx-2">HOME</div>
                <div className="nav-link mx-2">SUBSCRIPTION</div>
                <div className="nav-link mx-2">FEATURES</div>
                <div
                  style={{ fontWeight: "400" }}
                  className="nav-link d-flex align-items-center mx-2"
                >
                  <img alt="" src={RegisterLogo} />
                  &nbsp; Register
                </div>
                <div
                  style={{ fontWeight: "400" }}
                  className="nav-link d-flex align-items-center mx-2"
                >
                  <img alt="" src={LoginLogo} />
                  &nbsp; Log in
                </div>
              </nav>
            </div>
          </div>
          <div className="col-lg-2 col-md-1"></div>
        </div>
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-2 "></div>
          <div className="col-xl-4 col-lg-8  col-md-8 col-sm-12">
            <div className="">
              <h1 className="header">
                Digital Solution <br />
                for your{" "}
                <b>
                  Digital <br />
                  Problems
                </b>
              </h1>
              <span className="para">
                PlazaCRM enables a worldwide system of <br />
                more than 100 kinds organizations in to <br />
                change over more leads, draw in with clients <br />
                and develop their income. Change your <br />
                business with the world's preferred client <br />
                relationship the board programming.
              </span>
            </div>
            <div className="home-button">
              <button className="button">KNOW MORE</button>
            </div>
          </div>
          <div className="col-xl-5 col-lg-1  ">
            <img className="homelogo" alt="" src={homelogo} />
          </div>
          <div className="col-xl-1 col-lg-1 col-md-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
