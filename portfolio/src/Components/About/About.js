import React from "react";
import "./About.css";
import about from "../../Images/About.jpg";
import { FcSlrBackSide, FcWorkflow, FcShop } from "react-icons/fc";
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade left>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={about} height="375px" width="375px" alt="about_image" />
          </div>
        </div>
        </Fade>
        <Fade right>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About</h5>
              <span className="line"></span>
            </div>

            <p>
              This is a very interesting location to add information about your
              company
            </p>

            <div className="card-design">
              <div className="about-list-item">
                <div className="about-details-icon">
                  <p><FcSlrBackSide size={50}/></p>
                </div>

                <div>
                  <h6>Perfect Day Out</h6>
                  <p>
                    This is a great idea for you to try for your next big job.
                    See how much we can accomplish
                  </p>
                </div>
                </div>
            </div>
            <div className="card-design">
              <div className="about-list-item">
                <div className="about-details-icon">
                  <p><FcWorkflow size={50}/></p>
                </div>

                <div>
                  <h6>Perfect Day Out</h6>
                  <p>
                    This is a great idea for you to try for your next big job.
                    See how much we can accomplish
                  </p>
                </div>
                </div>
            </div>
            <div className="card-design">
              <div className="about-list-item">
                <div className="about-details-icon">
                  <p><FcShop size={50}/></p>
                </div>

                <div>
                  <h6>Perfect Day Out</h6>
                  <p>
                    This is a great idea for you to try for your next big job.
                    See how much we can accomplish
                  </p>
                </div>
                </div>
            </div>

          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
