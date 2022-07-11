import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Testimonial />
    </div>
  );
}

export default App;
