import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Testimonial from "./Components/Testimonial/Testimonial";
import Subscription from "./Components/Subscription/Subscription";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Testimonial />
      <Subscription />
    </div>
  );
}

export default App;
