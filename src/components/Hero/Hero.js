import React, { useState } from "react";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import illustration from "../../images/illustration-working.svg";
import "./Hero.css";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const menuVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => setOpen(!isOpen);

  return (
    <section className="hero">
      <motion.div className="nav">
        <h1>Shortly</h1>

        <div className="nav-left">
          {["Features", "Pricing", "Resources"].map((label) => (
            <div key={label}>{label}</div>
          ))}
        </div>

        <div className="nav-right">
          <div>Login</div>

          <button className="sign-up">Sign up</button>
        </div>

        <div className="menu-icon">
          <Hamburger
            toggled={isOpen}
            toggle={toggleNav}
            color="hsl(257, 7%, 63%)"
          />
        </div>
      </motion.div>

      <motion.div
        className="nav-links"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        style={{ display: isOpen ? "flex" : "none" }}
      >
        {["Features", "Pricing", "Resources"].map((label) => (
          <motion.a
            key={label}
            variants={itemVariants}
            href={`#${label.toLowerCase()}`}
          >
            {label}
          </motion.a>
        ))}
        <div className="hr"></div>
        <motion.a variants={itemVariants} href="#login">
          Login
        </motion.a>
        <motion.button variants={itemVariants} className="sign-up">
          Sign up
        </motion.button>
      </motion.div>

      <div className="hero-content-container">
        <div className="hero-content">
          <div className="hero-title">More than just shorter links</div>
          <div className="hero-subtitle">
            Build your brand's recognition and get detailed insights on how your
            links are performing{" "}
          </div>
          <button className="get-started">Get Started</button>
        </div>
        <div className="illustration">
          <img
            className="working-illustration"
            src={illustration}
            alt="shortly-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
