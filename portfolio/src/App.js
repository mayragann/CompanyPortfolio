import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />
    </div>
  );
}

export default App;
