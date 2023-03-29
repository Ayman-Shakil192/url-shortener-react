import React, { useState } from "react";
import Hamburger from "hamburger-react";
import illustration from "../../images/illustration-working.svg";
import "./Hero.css";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  const [linkInput, setLinkInput] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    setLinkInput(event.target.value);
    setError(!event.target.validity.valid);
  };

  const handleSubmit = () => {
    const linkInput = document.querySelector(".link-input");
    if (!linkInput.value) {
      setError(true);
      linkInput.classList.add("error");
    } else {
      setError(false);
      linkInput.classList.remove("error");
    }
  };

  return (
    <div className="hero">
      <div className="nav">
        <h1>Shortly</h1>
        <div className="menu-icon">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="hsl(257, 7%, 63%)"
          />
        </div>
      </div>
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
      <div className="link-input-container">
        <input
          type="text"
          className={`link-input ${error ? "error" : ""}`}
          placeholder="Shorten a link here..."
          value={linkInput}
          onChange={handleInputChange}
          required
        />
        {error && <div className="error-message">Please add a link</div>}
        <button className="shorten-link" onClick={handleSubmit}>
          Shorten it
        </button>
      </div>
    </div>
  );
};

export default Hero;
