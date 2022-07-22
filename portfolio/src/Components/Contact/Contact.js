import React from "react";
import "./Contact.css";
import { FiSend } from 'react-icons/fi';



const Contact = () => {
  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="image-class">
            <img
              src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="hallway office"
            />
          </div>
        </div>

        <div className="col-xl-7 col-lg-5 col-md-7 col-sm-7">
          <div className="contact-form-design">
            <div className="text-center">
              <h5>Contact Form</h5>
            </div>
            <form>
              <div className="contact-form">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="contact-form">
                <label className="form-label">Email</label>
                <input type="text" className="form-control" />
              </div>

              <div className="contact-form">
                <label className="form-label">Services Needed</label>
                <select className="custom-select">
                  <option>Web Develepment</option>
                  <option>Mobile Develepment</option>
                  <option>UI/UX Develepment</option>
                  <option>Marketing</option>
                </select>
              </div>

              <div className="contact-form">
                <label className="form-label">Your Message</label>
                <textarea
                  type="text"
                  maxLength="500"
                  className="form-control"
                  rows="4"
                />
              </div>

              <div className="button-submit">
                <p>Submit <FiSend size={20}/></p>
              </div>

            </form>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
