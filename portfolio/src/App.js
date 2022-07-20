import React, { useState, createContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Testimonial from "./Components/Testimonial/Testimonial";
import Subscription from "./Components/Subscription/Subscription";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./Components/Footer/Footer";
import Team from "./Components/Team/Team";
import Feedback from "./Components/Feedback/Feedback";
import Video from "./Components/Video/Video";
import Career from "./Components/Career/Career";
import NavbarMobileView from "./Components/NavbarMobileView/NavbarMobileView";

export const ThemeContext = createContext(null)

function App() {


  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () =>{
    setTheme((current)=>(current === "light" ? "dark":"light"))
  }

  return (
    <ThemeContext.Provider value={{theme, handleChangeTheme}}>


      <Navbar />
      <NavbarMobileView />
      <Home theme={theme} handleChangeTheme={handleChangeTheme}/>

      <div className="main-theme-compo" id={theme}>
      <About />
      <Service />
      <Career />
      <Video />
      <Team />
      <Testimonial />
      <Feedback />
      </div>


      <Subscription />
      <Footer />

      <ScrollToTop
        smooth
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#2751d9" }}
      />
    </ThemeContext.Provider>
  );
}

export default App;
