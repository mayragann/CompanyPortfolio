import React from "react";
import "./Subscription.css";

const Subscription = () => {
  return (
    <div className="container-fluid subscription">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="subscription-title">
              <h5>Newsletter. Subscribe Today.</h5>
            </div>
            <div className="subscription-form">
                <input 
                    type="text"
                    placeholder="Your Email"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
