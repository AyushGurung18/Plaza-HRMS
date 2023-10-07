import React from "react";
import "../styles/banner.css";
import bannerLogo from "../assets/Video-Icon.png";
import DistibuterLogo from "../assets/white-Cut-Elements.png";

function Banner(){
    return(
        <div>
         <div className="banner">
            <div className="banner-logo">
                <img alt="" src={bannerLogo}/>
            </div>
            <div className="banner-header">
                <h1>Digital Solution for your <br/> Digital Problems</h1>
                <img src={DistibuterLogo}/>
            </div>
            <div  className="banner-text">
                <span style={{fontWeight:"400"}}>PlazaCRM enables a worldwide system of
                  more than 100 kinds organizations in to
                  change over  <br /> more leads, draw in with clients 
                  and develop their income. Change your
                  business with the  <br /> world's preferred client 
                  relationship the board programming.
                </span>
            </div>
            <div className="bannerbutton">
                <button className="button3">START YOUR FREE TRIAL</button>
            </div>
         </div>
        </div>
    )
}
export default Banner;