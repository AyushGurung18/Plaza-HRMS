import React from "react";
import "../styles/service.css";
import Cutlogo from "../assets/Cut-Elements.png";
import cardImage1 from "../assets/Finance-Solution.png";
import cardImage2 from "../assets/Business-Analysis.png";
import cardImage3 from "../assets/Marketing-Strategy.png";
import cardImage4 from "../assets/Customer-Service.png";
import cardImage5 from "../assets/Sales.png";

function Services() {
  return (
    <div className="service-page">
      <div className="header-3 d-flex justify-content-center">
        <h1>
          <b>Solutions</b>
        </h1>
      </div>
      <div className="service-distributor d-flex justify-content-center">
        <img alt="" src={Cutlogo} />
      </div>
      <div style={{paddingBottom:"70px"}} className="d-flex justify-content-center">
        <span className="login-text">
          One Application Solver your all digital problems
        </span>{" "}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  {" "}
                  <img src={cardImage1} className="card-img" alt="" />
                  <h5 className="card-title"><b>Finance Solutions</b></h5>
                  <span className="login-text">
                    Finance is the management of <br/> money, particulary in realtion
                    to <br/> companies , organisations, or <br/> Read More
                  </span>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-lg-4">
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  {" "}
                  <img src={cardImage2} className="card-img" alt="" />
                  <h5 className="card-title"><b>Business Analysis</b></h5>
                  <span className="login-text">
                    Business analysis refers to the <br/> skills, technologies ,
                    practices for <br/> continous iterative exploration <br/> Read More.
                  </span>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-lg-4">
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  {" "}
                  <img src={cardImage3} className="card-img" alt="" />
                  <h5 className="card-title"><b>Marketing Strategy</b></h5>
                  <span className="login-text">
                    A market analysis studies the <br/>attractiveness and the
                    dynamics <br/> of a special market... <br/> Read More
                  </span>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  {" "}
                  <img src={cardImage4} className="card-img" alt="" />
                  <h5 className="card-title"><b>Customer Service</b></h5>
                  <span className="login-text">
                    Customer service is the provision <br/> of service to customers
                    before, <br/> during, and after a purchase <br/> Read More.
                  </span>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-lg-4">
            <div className="card-container">
              <div className="card">
                <div className="card-body">
                  {" "}
                  <img src={cardImage5} className="card-img" alt="" />
                  <h5 className="card-title"><b>Sales</b></h5>
                  <span className="login-text">
                    Generating sales requires <br/> potential customers to <br/> understand
                    that a product exists <br/> Read More.
                  </span>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}
export default Services;
