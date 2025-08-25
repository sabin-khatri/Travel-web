/* eslint-disable no-unused-vars */
import React from "react";
import Home from "../components/Home";
import Features from "../components/Features";
import Destination from "../components/Destination";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="destination">
          <Destination />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;