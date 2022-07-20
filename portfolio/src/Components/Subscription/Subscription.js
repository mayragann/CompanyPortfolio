import React from "react";
import "./Subscription.css";
import Fade from 'react-reveal/Fade';

const Subscription = () => {
  return (
    <div className="container-fluid subscription" id="subscribe">
      <div className="container">
        <div className="row">
          <Fade left>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="subscription-title">
              <h5>Newsletter. Subscribe Today.</h5>
            </div>
            <div className="subscription-form">
              <input type="text" placeholder="Your Email" />
            </div>
            <div className="subscription-button"><p>Subscribe</p></div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
