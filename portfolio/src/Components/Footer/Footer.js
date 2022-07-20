import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai";
import Zoom from 'react-reveal/Zoom';

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">

        <Zoom left>

   
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-about-section">
              <h6 style={{ color: "white", marginTop: "20px" }}>About</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <div className="footer-social-icons">
                            <p>
                                <FaFacebookF size={25} />
                            </p>
                            <p>
                                <FaLinkedinIn size={25} />
                            </p>
                            <p>
                                <AiOutlineTwitter size={25} />
                            </p>
                            <p>
                                <AiOutlineInstagram size={25} />
                            </p>

                        </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-service">
              <h6 style={{ color: "white", marginTop: "20px" }}>Services</h6>
              <div className="footer-item">
                <li> Product Sort</li>
                <li> Media Marketing</li>
                <li> Innovation</li>
                <li> Technology</li>
                <li> Enviorment</li>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-service">
              <h6 style={{ color: "white", marginTop: "20px" }}>
                Customer Care
              </h6>
              <div className="footer-item">
                <li> Login</li>
                <li> My Account</li>
                <li> Wishlist</li>
                <li> FAQ</li>
                <li> Contact Us</li>
              </div>
            </div>
          </div>
          </Zoom>
        </div>


      </div>
    </div>
  );
};

export default Footer;
