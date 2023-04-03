import React, { useState } from "react";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import illustration from "../../images/illustration-working.svg";
import "./Hero.css";
import {
  itemVariants,
  menuVariants,
  transition,
  fadeIn,
} from "../../Animations";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => setOpen(!isOpen);

  return (
    <section className="hero">
      <motion.div className="nav">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.5 },
          }}
        >
          Shortly
        </motion.h1>

        <motion.div
          className="nav-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.5 },
          }}
        >
          {["Features", "Pricing", "Resources"].map((label) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.2, cursor: "pointer" }}
              transition={transition}
            >
              {label}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="nav-right"
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.5 },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.2, cursor: "pointer" }}
            transition={transition}
          >
            Login
          </motion.div>
          <motion.button
            className="sign-up"
            whileHover={{ scale: 1.1, cursor: "pointer" }}
            transition={transition}
          >
            Sign up
          </motion.button>
        </motion.div>

        <motion.div
          className="menu-icon"
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.5 },
          }}
        >
          <Hamburger
            toggled={isOpen}
            toggle={toggleNav}
            color="hsl(257, 7%, 63%)"
          />
        </motion.div>
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
            whileHover={{ scale: 1.2, cursor: "pointer" }}
            transition={transition}
          >
            {label}
          </motion.a>
        ))}
        <div className="hr"></div>
        <motion.a
          variants={itemVariants}
          href="#login"
          whileHover={{ scale: 1.2, cursor: "pointer" }}
          transition={transition}
        >
          Login
        </motion.a>
        <motion.button
          variants={itemVariants}
          className="sign-up"
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          transition={transition}
        >
          Sign up
        </motion.button>
      </motion.div>

      <motion.div className="hero-content-container" {...fadeIn}>
        <div className="hero-content">
          <div className="hero-title">More than just shorter links</div>
          <div className="hero-subtitle">
            Build your brand's recognition and get detailed insights on how your
            links are performing
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
      </motion.div>
    </section>
  );
};

export default Hero;
