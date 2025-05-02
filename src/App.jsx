import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Recent from "./components/Recent";
import Project from "./components/Project";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Recent />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
