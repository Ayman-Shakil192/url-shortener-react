import React from "react";
import Hero from "./components/Hero/Hero";
import Statistic from "./components/Statistic/Statistic";
import Boost from "./components/Boost/Boost";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Statistic />
      <Boost />
      <Footer />
    </div>
  );
};

export default App;
