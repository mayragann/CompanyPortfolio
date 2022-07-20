import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = ({ theme, handleChangeTheme }) => {
  return (
    <>
      <div className="container-fluid home" id="home">
        <div className="theme-change" onClick={() => handleChangeTheme()}>
          {theme === "light" ? (
            <p>
              <BsMoonStarsFill size={40} />
            </p>
          ) : (
            <p>
              <BsFillSunFill size={40} />
            </p>
          )}
        </div>

        <Fade left>
          <div className="container home-content">
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Web Development",
                    "UI/UX",
                    "Product Marketing",
                    "Mobile App Development",
                    "Digital Marketing",
                    "Customer Service",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 5,
                }}
              />
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <span className="view-details-home-button">View Details</span>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Home;
