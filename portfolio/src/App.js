import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Testimonial from "./Components/Testimonial/Testimonial";
import Subscription from "./Components/Subscription/Subscription";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./Components/Footer/Footer";
import Team from "./Components/Team/Team";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Team />
      <Testimonial />
      <Subscription />
      <Footer />

      <ScrollToTop
        smooth
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#2751d9" }}
      />
    </div>
  );
}

export default App;
