import React from "react";
import "./home.css";
import DMGLOGO from "../../assets/images/dmg_logo_white.svg";
import SUNGIRL from "../../assets/images/undraw.svg";
import DIAMOND from "../../assets/images/shiny_diamond.png";

function home() {
  return (
    <div className="home">
      <img className="dmg-logo-white" src={DMGLOGO} alt="" />
      <h1 className="home-header-text">Shine</h1>
      <img className="diamond-1" src={DIAMOND} alt="" />
      <img className="diamond-2" src={DIAMOND} alt="" />
      <img className="diamond-3" src={DIAMOND} alt="" />
      <img className="sungirl-svg" src={SUNGIRL} alt="" />
      <p className="home-small-narrative">Helping Local Small Business</p>
      <div className="get-started-btn">
        <div className="highlight" />
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default home;
