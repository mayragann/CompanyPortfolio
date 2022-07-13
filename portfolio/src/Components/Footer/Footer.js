import React from "react";
import "./Footer.css";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { BsTwitter, BsLinkedin} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-about-section">
              <h6 style={{ color: "white", marginTop: "20px" }}>About</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <span className="social-icons">
                <p>
                  <FaFacebookSquare size={30} />
                </p>
                <p>
                  <FaInstagram size={30} />
                </p>
                <p>
                  <BsTwitter size={30} />
                </p>
                <p>
                  <BsLinkedin size={30} />
                </p>
              </span>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12"></div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
