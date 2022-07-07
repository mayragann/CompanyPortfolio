import React from "react";
import "./About.css";
import about from "../../Images/About.jpg";

const About = () => {
  return (
    <div className="container about-section">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={about} height="375px" width="375px" alt="about_image" />
          </div>
        </div>
        <div classNdfgame="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About</h5>
              <span className="line"></span>
            </div>
            <p>
              This is a very interesting location to add information about your
              company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
