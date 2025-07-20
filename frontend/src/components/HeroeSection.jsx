import React from "react";
import { FaChartLine } from "react-icons/fa";


const HeroeSection = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-background"></div>
      <div className="hero-container">
       
        <div className="hero-animation-wrapper">
          <div className="hero-pulse-circle"></div>
          <div className="hero-ping-circle"></div>
          <div className="hero-ping-circle delay1"></div>
          <div className="hero-ping-circle delay2"></div>

          <div className="hero-icon-wrapper">
            <div className="hero-icon-bg"></div>
            <div className="hero-icon-inner">
              <FaChartLine />
            </div>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="hero-title">
          <span>Transform Your Excel Data</span>
          <br />
          <span className="text-gradient">Into Powerful Insights</span>
        </h1>

        {/* Hero Description */}
        <p className="hero-description">
          Upload Excel files, create stunning 3D visualizations, get
          AI-powered insights, and export in multiple formats.
        </p>

        {/* Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn primary-btn">
            <span style={{fontSize: "1.5rem"}}>Start Free Trial</span>
          </button>
          <button className="btn secondary-btn">
            <span style={{fontSize: "1.5rem"}}>Sign In</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroeSection;
