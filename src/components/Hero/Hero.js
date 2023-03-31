import React, { useState } from "react";
import Hamburger from "hamburger-react";
import illustration from "../../images/illustration-working.svg";
import "./Hero.css";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleNav = (toggled) => {
    setOpen(toggled);
  };

  return (
    <section className="hero">
      <div className="nav">
        <h1>Shortly</h1>
        <div className="menu-icon">
          <Hamburger
            onToggle={toggleNav}
            toggled={isOpen}
            toggle={setOpen}
            color="hsl(257, 7%, 63%)"
          />
        </div>
      </div>
      {isOpen && (
        <div className="nav-links">
          <a href="features">Features</a>
          <a href="pricing">Pricing</a>
          <a href="resources">Resources</a>
          <div className="hr"></div>
          <a href="login">Login</a>
          <button className="sign-up">Sign up</button>
        </div>
      )}
      <div className="illustration">
        <img src={illustration} alt="shorlty-logo" />
      </div>
      <div className="hero-content">
        <div className="hero-title">More than just shorter links</div>
        <div className="hero-subtitle">
          Build your brand's recognition and get detailed insights on how your
          links are performing{" "}
        </div>
        <button className="get-started">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
